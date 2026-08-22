export type Pathfinder2eEffectPtBrTranslation = Readonly<{
  name: string
  description?: string
}>

export const PATHFINDER_2E_CAMPAIGN_EFFECT_PT_BR = Object.freeze({
  'campaign-effects:ALYd08DB00ZeoHAp': {
    name: 'Efeito: Fúria Pomposa',
    description: 'Foroxicks sofre –2 de penalidade de circunstância no ataque de mandíbulas, mas cada acerto causa dano perfurante adicional.',
  },
  'campaign-effects:cpeMnTLFpi106fjg': {
    name: 'Efeito: Muco Ctônico (1–2)',
    description: 'A criatura sofre –1,5 metro de penalidade de estado em sua Velocidade por 1 rodada.',
  },
  'campaign-effects:meTIFa2VsIzRVywE': {
    name: 'Efeito: Esperança ou Desespero (Sucesso Crítico)',
    description: 'Shelyn vê na criatura uma chance de restaurar a glória do santuário e, em vez de enchê-la de desespero, a assombração a preenche de esperança. Além de sentir o impulso de derrotar o mal que infestou o santuário, a criatura também deseja restaurá-lo. Os detalhes exatos da natureza do mal não ficam claros, apenas que algo terrível existe dentro do santuário. A criatura não precisa agir segundo esses impulsos, mas, enquanto perseguir qualquer um desses objetivos, recebe +1 de bônus de estado em todos os testes realizados na área do santuário. O Mestre determina se um teste contribui para esse objetivo; no mínimo, todos os testes de combate contra inimigos no restante da aventura contam.',
  },
  'campaign-effects:Px7sSipQxHdOMSjk': {
    name: 'Efeito: Esperança ou Desespero (Falha ou Falha Crítica)',
    description: 'Falha: sentimentos de tristeza e desespero invadem a mente da criatura. Pela próxima hora, ela sofre –1 de penalidade em todos os salvamentos contra efeitos mentais; essa penalidade aumenta para –2 contra efeitos mentais de emoção. Este efeito possui o traço maldição.\n\nFalha Crítica: como na falha, mas os efeitos persistem enquanto a bruxa verde Tulvak permanecer no controle do santuário.',
  },
  'campaign-effects:uZ2mAwpVz1bkw5GK': {
    name: 'Efeito: Muco Ctônico',
    description: 'A criatura sofre –1,5 metro de penalidade de estado em sua Velocidade. Essa redução termina junto com o dano persistente de espírito.',
  },
} satisfies Readonly<Record<string, Pathfinder2eEffectPtBrTranslation>>)
