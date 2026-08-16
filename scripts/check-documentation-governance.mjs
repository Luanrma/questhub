import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const root = process.cwd()
const violations = []

const toRepoPath = (absolutePath) => relative(root, absolutePath).split(sep).join('/')

const walkFiles = (directory) => {
  if (!existsSync(directory)) return []

  const files = []
  for (const entry of readdirSync(directory)) {
    const absolutePath = join(directory, entry)
    const stat = statSync(absolutePath)
    if (stat.isDirectory()) files.push(...walkFiles(absolutePath))
    else if (stat.isFile()) files.push(absolutePath)
  }
  return files
}

const isAllowedAiFile = (repoPath) => /^\.ai\/agents\/[^/]+\.md$/.test(repoPath)

const aiFiles = walkFiles(join(root, '.ai')).map(toRepoPath)
for (const repoPath of aiFiles) {
  if (!isAllowedAiFile(repoPath)) {
    violations.push(`${repoPath}: .ai/ aceita somente definicoes de role em .ai/agents/*.md`)
  }
}

// Sanity checks keep the path predicate itself from becoming permissive by accident.
const predicateCases = [
  ['.ai/agents/ba.md', true],
  ['.ai/agents/new-role.md', true],
  ['.ai/specs.md', false],
  ['.ai/vtt/specs.md', false],
  ['.ai/agents/nested/role.md', false],
  ['.ai/agents/role.txt', false],
]

for (const [repoPath, expected] of predicateCases) {
  if (isAllowedAiFile(repoPath) !== expected) {
    violations.push(`internal predicate regression for ${repoPath}`)
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

requireText('AGENTS.md', ['Sem card Trello, a tarefa nao comeca.'.normalize('NFD').replace(/[\u0300-\u036f]/g, '')])

// AGENTS.md contains accents; compare a normalized copy without changing the file.
if (existsSync(join(root, 'AGENTS.md'))) {
  const normalizedAgents = readFileSync(join(root, 'AGENTS.md'), 'utf8')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  if (!normalizedAgents.includes('Sem card Trello, a tarefa nao comeca.')) {
    violations.push('AGENTS.md: preflight obrigatorio de card Trello ausente')
  }
}

requireText('docs/features/_TEMPLATE.md', ['Card: `<QH-XXX>`', 'card Trello'])
requireText('.github/pull_request_template.md', ['Trello', 'Feature Spec', 'HUMAN APPROVAL'])
requireText('docs/governance/SOURCE_OF_TRUTH.md', ['Toda tarefa de desenvolvimento ou governanca deve possuir um card Trello antes do inicio do trabalho.'.normalize('NFD').replace(/[\u0300-\u036f]/g, '')])

if (existsSync(join(root, 'docs/governance/SOURCE_OF_TRUTH.md'))) {
  const normalizedSource = readFileSync(join(root, 'docs/governance/SOURCE_OF_TRUTH.md'), 'utf8')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  if (!normalizedSource.includes('Toda tarefa de desenvolvimento ou governanca deve possuir um card Trello antes do inicio do trabalho.')) {
    violations.push('docs/governance/SOURCE_OF_TRUTH.md: regra obrigatoria de card Trello ausente')
  }
}

if (violations.length > 0) {
  console.error('Documentation governance check failed:')
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log(`Documentation governance check passed (${aiFiles.length} .ai role files validated).`)
