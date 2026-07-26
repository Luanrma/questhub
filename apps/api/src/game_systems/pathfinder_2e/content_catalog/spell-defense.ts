import type { GameSystemContentLocale } from '../../catalog'

const PT_BR_SPELL_DEFENSES: Readonly<Record<string, string>> = {
  'will save': 'teste de Vontade',
  'fortitude save': 'teste de Fortitude',
  'reflex save': 'teste de Reflexos',
  'basic will save': 'teste básico de Vontade',
  'basic fortitude save': 'teste básico de Fortitude',
  'basic reflex save': 'teste básico de Reflexos',
  'fortitude-dc': 'CD de Fortitude',
  ac: 'CA',
}

export function localizePathfinder2eSpellDefense(
  original: string | null,
  translated: string | null,
  locale: GameSystemContentLocale,
) {
  if (!original) return translated
  if (locale !== 'pt-BR') return original

  return PT_BR_SPELL_DEFENSES[original.trim().toLowerCase()] ?? translated ?? original
}
