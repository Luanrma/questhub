export const areaTemplateNameMaxLength = 60

const numberedCopySuffix = /\s+Copia(\d+)$/i
const legacyCopySuffix = /\s+\(copia\)$/i

function copyBaseName(name: string) {
  let base = name.trim()
  while (numberedCopySuffix.test(base) || legacyCopySuffix.test(base)) {
    base = base.replace(numberedCopySuffix, '').replace(legacyCopySuffix, '').trim()
  }
  return base || 'Template'
}

function copyNumber(name: string, expectedBase: string) {
  let candidate = name.trim()
  let legacyCopies = 0
  while (legacyCopySuffix.test(candidate)) {
    candidate = candidate.replace(legacyCopySuffix, '').trim()
    legacyCopies += 1
  }
  const numbered = candidate.match(numberedCopySuffix)
  if (numbered) {
    const base = candidate.replace(numberedCopySuffix, '').trim()
    return base.localeCompare(expectedBase, undefined, { sensitivity: 'accent' }) === 0 ? Number(numbered[1]) : 0
  }
  return candidate.localeCompare(expectedBase, undefined, { sensitivity: 'accent' }) === 0 ? legacyCopies : 0
}

export function nextAreaTemplateCopyName(sourceName: string, campaignNames: string[]) {
  const base = copyBaseName(sourceName)
  const highestCopy = campaignNames.reduce((highest, name) => Math.max(highest, copyNumber(name, base)), 0)
  const occupied = new Set(campaignNames.map((name) => name.trim().toLocaleLowerCase()))
  let number = highestCopy + 1

  while (true) {
    const suffix = ` Copia${number}`
    const availableBaseLength = areaTemplateNameMaxLength - suffix.length
    const candidate = `${base.slice(0, availableBaseLength).trimEnd()}${suffix}`
    if (!occupied.has(candidate.toLocaleLowerCase())) return candidate
    number += 1
  }
}
