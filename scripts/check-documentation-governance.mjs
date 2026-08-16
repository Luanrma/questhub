import { existsSync, lstatSync, readFileSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, relative, sep } from 'node:path'

const root = process.cwd()
const violations = []
const workItemPattern = /\bQH-[A-Z]+-\d+\b/g

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

const aiFiles = walkFiles(join(root, '.ai')).map(toRepoPath)
for (const repoPath of aiFiles) {
  if (!isAllowedAiFile(repoPath)) {
    violations.push(`${repoPath}: .ai/ aceita somente definicoes de role em .ai/agents/*.md`)
  }
}

// Sanity checks keep the predicates from becoming permissive by accident.
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

const workItemPredicateCases = [
  ['QH-GOV-009', ['QH-GOV-009']],
  ['QH-XXX', []],
  ['QH-GOV-009 and QH-AI-001', ['QH-GOV-009', 'QH-AI-001']],
]

for (const [text, expected] of workItemPredicateCases) {
  const actual = extractWorkItemIds(text)
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    violations.push(`internal work item predicate regression for ${JSON.stringify(text)}`)
  }
}

const requiredFiles = [
  'AGENTS.md',
  'docs/PROJECT_CONSTITUTION.md',
  'docs/PROJECT_MAP.md',
  'docs/ARCHITECTURE.md',
  'docs/governance/SOURCE_OF_TRUTH.md',
  'docs/architecture/adr/ADR-0006-mandatory-trello-work-item.md',
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

requireNormalizedText('AGENTS.md', 'Sem card Trello, a tarefa não começa.')
requireText('docs/features/_TEMPLATE.md', ['Card: `<QH-XXX>`', 'card Trello'])
requireText('.github/pull_request_template.md', ['Trello', 'Feature Spec', 'HUMAN APPROVAL'])
requireNormalizedText(
  'docs/governance/SOURCE_OF_TRUTH.md',
  'Toda tarefa de desenvolvimento ou governança deve possuir um card Trello antes do início do trabalho.',
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

const readLocalCommitMessage = () => {
  try {
    return execFileSync('git', ['log', '-1', '--pretty=%B'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim()
  } catch (error) {
    violations.push(`nao foi possivel ler o commit atual para validar o card: ${error instanceof Error ? error.message : String(error)}`)
    return ''
  }
}

const event = readGithubEvent()
let workItemId = null

if (event?.pull_request) {
  const title = String(event.pull_request.title ?? '')
  const body = String(event.pull_request.body ?? '')
  const titleIds = extractWorkItemIds(title)

  if (titleIds.length !== 1) {
    violations.push('pull request deve possuir exatamente um card QH-* concreto no titulo')
  } else {
    workItemId = titleIds[0]
    if (!extractWorkItemIds(body).includes(workItemId)) {
      violations.push(`pull request body deve referenciar o mesmo card ${workItemId} do titulo`)
    }
  }

  const specPaths = [...new Set(body.match(/docs\/features\/[A-Za-z0-9._/-]+\/spec\.md/g) ?? [])]
  for (const specPath of specPaths) {
    const absoluteSpecPath = join(root, specPath)
    if (!existsSync(absoluteSpecPath)) {
      violations.push(`${specPath}: Feature Spec referenciada pelo PR nao existe`)
      continue
    }

    if (workItemId && !readFileSync(absoluteSpecPath, 'utf8').includes(workItemId)) {
      violations.push(`${specPath}: Feature Spec deve referenciar o mesmo card ${workItemId} do PR`)
    }
  }
} else {
  const commitMessage = event?.head_commit?.message ?? readLocalCommitMessage()
  const commitIds = extractWorkItemIds(commitMessage)

  if (commitIds.length !== 1) {
    violations.push('commit atual deve possuir exatamente um card QH-* concreto na mensagem')
  } else {
    workItemId = commitIds[0]
  }
}

if (violations.length > 0) {
  console.error('Documentation governance check failed:')
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log(
  `Documentation governance check passed (${aiFiles.length} .ai role files validated; work item ${workItemId}).`,
)
