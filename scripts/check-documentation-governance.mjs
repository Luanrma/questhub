import { existsSync, lstatSync, readFileSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, relative, sep } from 'node:path'

const root = process.cwd()
const violations = []
const workItemPattern = /\bQH-[A-Z]+-\d+\b/g
const noCardPattern = /\bNO-CARD\b/i

const toRepoPath = (absolutePath) => relative(root, absolutePath).split(sep).join('/')

const walkFiles = (directory) => {
  if (!existsSync(directory)) return []

  const files = []
  for (const entry of readdirSync(directory)) {
    const absolutePath = join(directory, entry)
    const stat = lstatSync(absolutePath)

    if (stat.isSymbolicLink()) {
      violations.push(`${toRepoPath(absolutePath)}: symlinks nao sao permitidos dentro de .ai/`)
      continue
    }

    if (stat.isDirectory()) files.push(...walkFiles(absolutePath))
    else if (stat.isFile()) files.push(absolutePath)
  }
  return files
}

const normalizeText = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const isAllowedAiFile = (repoPath) => /^\.ai\/agents\/[^/]+\.md$/.test(repoPath)
const extractWorkItemIds = (value) => [...new Set(String(value ?? '').match(workItemPattern) ?? [])]
const usesNoCard = (value) => noCardPattern.test(String(value ?? ''))

const aiFiles = walkFiles(join(root, '.ai')).map(toRepoPath)
for (const repoPath of aiFiles) {
  if (!isAllowedAiFile(repoPath)) {
    violations.push(`${repoPath}: .ai/ aceita somente definicoes de role em .ai/agents/*.md`)
  }
}

const pathPredicateCases = [
  ['.ai/agents/ba.md', true],
  ['.ai/agents/new-role.md', true],
  ['.ai/specs.md', false],
  ['.ai/vtt/specs.md', false],
  ['.ai/agents/nested/role.md', false],
  ['.ai/agents/role.txt', false],
]

for (const [repoPath, expected] of pathPredicateCases) {
  if (isAllowedAiFile(repoPath) !== expected) {
    violations.push(`internal path predicate regression for ${repoPath}`)
  }
}

const requiredFiles = [
  'AGENTS.md',
  'docs/PROJECT_CONSTITUTION.md',
  'docs/PROJECT_MAP.md',
  'docs/ARCHITECTURE.md',
  'docs/governance/SOURCE_OF_TRUTH.md',
  'docs/architecture/adr/ADR-0006-mandatory-trello-work-item.md',
  'docs/architecture/adr/ADR-0007-proportional-trello-work-item.md',
  'docs/features/_TEMPLATE.md',
  '.github/pull_request_template.md',
]

for (const repoPath of requiredFiles) {
  if (!existsSync(join(root, repoPath))) {
    violations.push(`${repoPath}: arquivo obrigatorio de governanca ausente`)
  }
}

const requireText = (repoPath, fragments) => {
  const absolutePath = join(root, repoPath)
  if (!existsSync(absolutePath)) return

  const content = readFileSync(absolutePath, 'utf8')
  for (const fragment of fragments) {
    if (!content.includes(fragment)) {
      violations.push(`${repoPath}: referencia obrigatoria ausente: ${JSON.stringify(fragment)}`)
    }
  }
}

const requireNormalizedText = (repoPath, fragment) => {
  const absolutePath = join(root, repoPath)
  if (!existsSync(absolutePath)) return

  const content = normalizeText(readFileSync(absolutePath, 'utf8'))
  if (!content.includes(normalizeText(fragment))) {
    violations.push(`${repoPath}: referencia obrigatoria ausente: ${JSON.stringify(fragment)}`)
  }
}

requireText('AGENTS.md', ['NO-CARD', 'ADR-0007'])
requireText('docs/features/_TEMPLATE.md', ['Card: `<QH-XXX>`'])
requireText('.github/pull_request_template.md', ['NO-CARD', 'HUMAN APPROVAL'])
requireText('docs/governance/SOURCE_OF_TRUTH.md', ['NO-CARD', 'ADR-0007'])
requireNormalizedText(
  'docs/governance/SOURCE_OF_TRUTH.md',
  'Trello continua sendo workflow/status e não substitui requisitos canônicos do repositório.',
)

const readGithubEvent = () => {
  const eventPath = process.env.GITHUB_EVENT_PATH
  if (!eventPath || !existsSync(eventPath)) return null

  try {
    return JSON.parse(readFileSync(eventPath, 'utf8'))
  } catch (error) {
    violations.push(`GITHUB_EVENT_PATH invalido: ${error instanceof Error ? error.message : String(error)}`)
    return null
  }
}

const gitOutput = (args) => {
  try {
    return execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim()
  } catch (error) {
    violations.push(`git ${args.join(' ')} falhou: ${error instanceof Error ? error.message : String(error)}`)
    return ''
  }
}

const readLocalCommitMessage = () => gitOutput(['log', '-1', '--pretty=%B'])

const getChangedFiles = (event) => {
  let range = null

  if (event?.pull_request?.base?.sha && event?.pull_request?.head?.sha) {
    range = `${event.pull_request.base.sha}...${event.pull_request.head.sha}`
  } else if (event?.before && event?.after && !/^0+$/.test(event.before)) {
    range = `${event.before}...${event.after}`
  } else {
    range = 'HEAD^...HEAD'
  }

  return gitOutput(['diff', '--name-only', range])
    .split(/\r?\n/)
    .map((value) => value.trim())
    .filter(Boolean)
}

const isNoCardMaintenancePath = (repoPath) =>
  repoPath === 'AGENTS.md' ||
  repoPath.startsWith('docs/') ||
  repoPath === '.github/pull_request_template.md' ||
  repoPath === '.github/workflows/quality.yml' ||
  repoPath === 'scripts/check-documentation-governance.mjs'

const validateNoCardScope = (event) => {
  const changedFiles = getChangedFiles(event)
  for (const repoPath of changedFiles) {
    if (!isNoCardMaintenancePath(repoPath)) {
      violations.push(
        `${repoPath}: NO-CARD e permitido somente para manutencao documental/organizacional sem mudanca funcional`,
      )
    }
  }
}

const validateCardMode = ({ title, body }) => {
  const titleIds = extractWorkItemIds(title)
  if (titleIds.length !== 1) {
    violations.push('pull request com card deve possuir exatamente um QH-* concreto no titulo')
    return null
  }

  const workItemId = titleIds[0]
  if (!extractWorkItemIds(body).includes(workItemId)) {
    violations.push(`pull request body deve referenciar o mesmo card ${workItemId} do titulo`)
  }

  const specPaths = [...new Set(body.match(/docs\/features\/[A-Za-z0-9._/-]+\/spec\.md/g) ?? [])]
  for (const specPath of specPaths) {
    const absoluteSpecPath = join(root, specPath)
    if (!existsSync(absoluteSpecPath)) {
      violations.push(`${specPath}: Feature Spec referenciada pelo PR nao existe`)
      continue
    }

    if (!readFileSync(absoluteSpecPath, 'utf8').includes(workItemId)) {
      violations.push(`${specPath}: Feature Spec deve referenciar o mesmo card ${workItemId} do PR`)
    }
  }

  return workItemId
}

const event = readGithubEvent()
let traceability = null

if (event?.pull_request) {
  const title = String(event.pull_request.title ?? '')
  const body = String(event.pull_request.body ?? '')
  const noCard = usesNoCard(title) || usesNoCard(body)
  const allIds = extractWorkItemIds(`${title}\n${body}`)

  if (noCard && allIds.length > 0) {
    violations.push('pull request nao pode combinar NO-CARD com um identificador QH-*')
  } else if (noCard) {
    if (!usesNoCard(title) || !usesNoCard(body)) {
      violations.push('pull request NO-CARD deve declarar NO-CARD no titulo e no corpo')
    }
    if (!/Justificativa NO-CARD\s*:/i.test(body)) {
      violations.push('pull request NO-CARD deve conter "Justificativa NO-CARD:"')
    }
    validateNoCardScope(event)
    traceability = 'NO-CARD'
  } else {
    traceability = validateCardMode({ title, body })
  }
} else {
  const commitMessage = event?.head_commit?.message ?? readLocalCommitMessage()
  const noCard = usesNoCard(commitMessage)
  const commitIds = extractWorkItemIds(commitMessage)

  if (noCard && commitIds.length > 0) {
    violations.push('commit nao pode combinar NO-CARD com um identificador QH-*')
  } else if (noCard) {
    validateNoCardScope(event)
    traceability = 'NO-CARD'
  } else if (commitIds.length !== 1) {
    violations.push('commit deve possuir exatamente um QH-* concreto ou declarar NO-CARD')
  } else {
    traceability = commitIds[0]
  }
}

if (violations.length > 0) {
  console.error('Documentation governance check failed:')
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log(
  `Documentation governance check passed (${aiFiles.length} .ai role files validated; traceability ${traceability}).`,
)
