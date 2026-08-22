import type { Pathfinder2eActiveEffectTranslationFields } from './active-effect-localization'

export const PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_COMMIT =
  '3bbc31593155fe5a01171c6e4eb6539c1db46f49' as const

export const PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_REPOSITORY =
  'mclemente/fvtt-ptbr-pf2e-translation' as const

type TranslationMap = Readonly<Record<string, Pathfinder2eActiveEffectTranslationFields>>

// The upstream PT-BR pack is sparse for some Effects. A missing field intentionally
// falls back to en-US; we never shorten or synthesize a canonical rule description.
const conditionitems: TranslationMap = {
  Blinded: {
    name: 'Cegado',
    description: '<p>Você não consegue enxergar. Todo terreno normal é terreno difícil para você. Você é incapaz de detectar qualquer coisa utilizando a visão. Você automaticamente falha criticamente em testes de Percepção que requerem que seja capaz de enxergar, e se visão for seu único sentido preciso, sofre –4 de penalidade de estado em testes de Percepção. Você fica imune a efeitos visuais. Cego sobrepõe @Compendium[pf2e.conditionitems.TkIyaNPgTZFBCCuh]{Ofuscado}.</p>',
  },
  Broken: {
    name: 'Quebrado',
    description: '<p>Quebrado é uma condição que afeta objetos. Um objeto está quebrado quando tiver sofrido uma quantidade de dano que reduza os Pontos de Vida dele a um valor igual ou inferior ao seu Limiar de Quebra. Um objeto quebrado não pode ser usado para sua função normal nem concede bônus — com exceção de armaduras. Uma armadura quebrada ainda concede um bônus de item na CA, mas também impõe uma penalidade de estado na CA dependendo da categoria dela: –1 para armadura leve quebrada, –2 para armadura média quebrada ou –3 para armadura pesada quebrada.</p><p>Um item quebrado ainda impõe as penalidades e limitações normalmente impostas por carregá-lo, segurá-lo ou usá-lo. Por exemplo, uma armadura quebrada ainda impõe seu limite de modificador de Destreza, penalidade em testes e assim por diante.</p><p>Se um efeito deixar um item quebrado automaticamente e o item tiver mais PV que seu Limiar de Quebra, esse efeito também reduz os PV atuais do item para o Limiar de Quebra dele.</p>',
  },
  Clumsy: {
    name: 'Desajeitado',
    description: '<p>Seu movimento fica desajeitado e impreciso. Desajeitado sempre inclui um valor. Você sofre uma penalidade de estado igual ao valor desta condição em testes e CDs baseadas em Destreza, incluindo CA, salvamentos de Reflexos, rolagens de ataque à distância e testes de perícia utilizando Acrobatismo, Furtividade e Ladroagem.</p>',
  },
  Concealed: {
    name: 'Ocultado',
    description: '<p>Enquanto estiver ocultado para uma criatura, como em uma névoa espessa, você é difícil de ser visto por essa criatura. Você ainda pode ser @Compendium[pf2e.conditionitems.1wQY3JYyhMYeeV2G]{Observado}, mas é um alvo mais difícil. Uma criatura para a qual você esteja ocultado deve obter sucesso em um teste simples @Check[flat|dc:5] quando mirá-lo com um ataque, magia ou outro efeito. Efeitos de área não são sujeitos a este teste simples. Se o teste falhar, o ataque, magia ou efeito não o afeta.</p>',
  },
  Confused: {
    name: 'Confuso',
    description: '<p>Você não tem certeza sobre o que ocorre ao seu redor, e ataca selvagemente. Você está @Compendium[pf2e.conditionitems.AJh5ex99aV6VTggg]{Desprevenido}, não trata ninguém como aliado (embora seus aliados ainda possam tratá-lo como um aliado deles) e não pode Adiar, Preparar ou usar reações.</p><p>Você usa todas suas ações para Golpear ou conjurar truques mágicos ofensivos, embora O mestre possa fazer você usar outras ações para facilitar o ataque, como sacar uma arma, mover-se para que um alvo esteja ao seu alcance e assim por diante. Seus alvos são determinados aleatoriamente pelo mestre. Se não tiver outros alvos viáveis, você ataca a si mesmo, acertando-se automaticamente, embora não cause um acerto crítico. Se for impossível atacar ou conjurar magias, você balbucia incoerentemente, desperdiçando suas ações.</p><p>Cada vez que sofrer dano de um ataque ou magia, você pode fazer um teste simples @Check[flat|dc:11] para recuperar-se de sua confusão e encerrar a condição.</p>',
  },
  Controlled: {
    name: 'Controlado',
    description: '<p>Alguém está tomando suas decisões por você, normalmente porque você está sendo comandado ou dominado magicamente. O controlador dita como você age e pode fazê-lo usar qualquer uma de suas ações, incluindo ataques, reações ou até mesmo @Compendium[pf2e.actionspf2e.A72nHGUtNXgY5Ey9]{Adiar}. O controlador normalmente não precisa gastar as ações dele quando lhe controlar.</p>',
  },
  Cursebound: {
    name: 'Ominoso',
    description: '<p>Sua maldição oracular se intensifica enquanto você recebe punição divina por ter se aprofundado demais nos poderes do seu mistério. Ominoso é uma condição que afeta apenas criaturas com uma maldição oracular, e ominoso sempre inclui um valor. Sua maldição oracular impõe efeitos negativos únicos dependendo do valor da sua condição ominosa. Você só pode remover a condição ominosa se Refocar.</p>',
  },
  Dazzled: {
    name: 'Ofuscado',
    description: '<p>Seus olhos estão superestimulados. Se a visão for seu único sentido preciso, todas as criaturas e objetos ficam @Compendium[pf2e.conditionitems.DmAIPqOBomZ7H95W]{Ocultado} para você.</p>',
  },
  Deafened: {
    name: 'Surdo',
    description: '<p>Você não pode ouvir. Você automaticamente falha criticamente em testes de Percepção que requeiram que você seja capaz de ouvir. Você sofre –2 de penalidade de estado em testes de Percepção para iniciativa e testes que envolvam sons e também utilizem de outros sentidos. Se realizar uma ação com o traço auditivo, você deve obter sucesso em um teste simples <strong>CD 5</strong> ou a ação é perdida; faça o teste após gastar a ação, mas antes de quaisquer efeitos serem aplicados. Você fica imune a efeitos auditivos.</p>',
  },
  Doomed: {
    name: 'Condenado',
    description: '<p>Uma força poderosa condenou sua alma, deixando-o mais perto da morte. Condenado sempre inclui um valor. O valor máximo de @Compendium[pf2e.conditionitems.yZRUzMqrMmfLu0V1]{Morrendo}, que determina quando você morre, é reduzido pelo seu valor de condenado. Se seu valor máximo de morrendo for reduzido para 0, você morre instantaneamente. Quando morre, você deixa de estar condenado.</p><p>Seu valor de condenado diminui em 1 para cada noite de descanso completa que você tiver.</p>',
  },
  Drained: { name: 'Drenado' },
  Dying: { name: 'Morrendo' },
  Encumbered: {
    name: 'Sobrecarregado',
    description: '<p>Você está carregando mais peso do que consegue lidar. Enquanto estiver sobrecarregado, você fica @Compendium[pf2e.conditionitems.i3OJZU2nk64Df3xm]{Desajeitado} 1 e sofre –3 metros de penalidade em todas suas Velocidades. Assim como todas as penalidades em sua Velocidade, isto não pode reduzir sua Velocidade abaixo de 1,5 metros.</p>',
  },
  Enfeebled: {
    name: 'Enfraquecido',
    description: '<p>Você está fisicamente enfraquecido. Enfraquecido sempre inclui um valor. Você sofre uma penalidade de estado igual ao valor desta condição em testes e CDs baseadas em Força, incluindo rolagens de ataques corpo a corpo baseados em Força, rolagens de dano baseadas em Força e testes de perícia utilizando Atletismo.</p>',
  },
  Fascinated: { name: 'Fascinado' },
  Fatigued: {
    name: 'Fatigado',
    description: '<p>Você está cansado e não tem muita energia para gastar. Você sofre –1 de penalidade de estado na CA e em jogadas de salvamento. Enquanto explorar, você não pode escolher uma atividade de exploração.</p><p>Você se recupera da fadiga após uma noite completa de descanso.</p>',
  },
  Fleeing: { name: 'Fugindo' },
  Friendly: { name: 'Amistoso' },
  Frightened: {
    name: 'Assustado',
    description: '<p>Você está com medo e se esforça para controlar seus nervos. Assustado sempre inclui um valor. Você sofre uma penalidade de estado igual ao valor desta condição em todos os seus testes e CDs. Exceto se especificado o contrário, ao final de cada um de seus turnos, o valor de sua condição assustado é reduzido em 1.</p>',
  },
  Grabbed: {
    name: 'Agarrado',
    description: '<p>Você é segurado por outra criatura, o que lhe impõe as condições @Compendium[pf2e.conditionitems.AJh5ex99aV6VTggg]{Desprevenido} e @Compendium[pf2e.conditionitems.eIcWbB5o3pP6OIMe]{Imobilizado}. Se tentar uma ação de manuseio enquanto estiver agarrado, você deve obter sucesso em um teste simples @Check[flat|dc:5] ou perde a ação; role o teste após gastar a ação, mas antes de quaisquer efeitos serem aplicados.</p>',
  },
  Helpful: { name: 'Prestativo' },
  Hidden: { name: 'Escondido' },
  Hostile: { name: 'Hostil' },
  Immobilized: {
    name: 'Imobilizado',
    description: '<p>Você não pode usar qualquer ação com o traço movimento. Se você estiver imobilizado por algo lhe segurando e uma força externa o moveria para fora de seu espaço, essa força deve obter sucesso em um teste contra a CD do efeito lhe segurando ou contra a defesa relevante (normalmente CD de Fortitude) do monstro lhe segurando.</p>',
  },
  Indifferent: {
    name: 'Indiferente',
    description: '<p>Esta condição reflete a disposição de uma criatura em relação a um personagem em particular, e somente efeitos sobrenaturais (como uma magia) podem impor estas condições a personagens jogadores. Uma criatura que seja indiferente a um personagem realmente não se importa com esse personagem de forma alguma. Assuma que a atitude de uma criatura a um determinado personagem é indiferente exceto se especificado o contrário.</p>',
  },
  Invisible: { name: 'Invisível' },
  Observed: { name: 'Observado' },
  'Off-Guard': {
    name: 'Desprevenido',
    description: '<p>Você está distraído ou de alguma forma incapaz de direcionar sua atenção total para a defesa. Você sofre –2 de penalidade de circunstância na CA. Alguns efeitos lhe impõem a condição desprevenido somente contra certas criaturas ou ataques. Outros efeitos — especialmente condições — podem lhe deixar desprevenido contra qualquer coisa. Se uma regra não especificar que a condição se aplica somente a determinadas circunstâncias, ela se aplica a todas, como em “O alvo fica desprevenido”.</p>',
  },
  Paralyzed: { name: 'Paralisado' },
  'Persistent Damage': { name: 'Dano Persistente' },
  Petrified: { name: 'Petrificado' },
  Prone: { name: 'Prostrado' },
  Quickened: {
    name: 'Acelerado',
    description: '<p>Você ganha 1 ação adicional a cada rodada no início do seu turno. Muitos efeitos que lhe deixam acelerado especificam os tipos de ações que você pode usar com esta ação adicional. Se ficar acelerado por várias fontes, você pode usar a ação extra recebida para realizar qualquer ação única permitida por qualquer dos efeitos que o deixaram acelerado. Como o efeito de acelerado ocorre no início de seu turno, você não ganha ações imediatamente se ficar acelerado durante seu turno.</p>',
  },
  Restrained: {
    name: 'Restringido',
    description: '<p>Você está amarrado e mal pode se mover, ou uma criatura lhe prendeu. Você sofre as condições @Compendium[pf2e.conditionitems.AJh5ex99aV6VTggg]{Desprevenido} e @Compendium[pf2e.conditionitems.eIcWbB5o3pP6OIMe]{Imobilizado} e não pode usar quaisquer ações com os traços ataque ou manuseio exceto para tentar @Compendium[pf2e.actionspf2e.SkZAQRkLLkmBQNB9]{Escapar} ou @Compendium[pf2e.actionspf2e.SjmKHgI7a5Z9JzBx]{Forçar} suas amarras. Restringido sobrepõe @Compendium[pf2e.conditionitems.kWc1fhmv9LBiTuei]{Agarrado}.</p>',
  },
  Sickened: {
    name: 'Enjoado',
    description: '<p>Você se sente mal. Enjoado sempre inclui um valor. Você sofre uma penalidade de estado igual ao valor desta condição em todos os seus testes e CDs. Você não pode ingerir nada voluntariamente — incluindo elixires e venenos — enquanto estiver enjoado.</p><p>Você pode gastar uma ação única regurgitando para se recuperar, tentando imediatamente um salvamento de Fortitude contra a CD do efeito que lhe deixou enjoado. Em um sucesso, você reduz seu valor de enjoado em 1 (ou em 2 em um sucesso crítico).</p>',
  },
  Slowed: {
    name: 'Desacelerado',
    description: '<p>Você possui menos ações. Lento sempre inclui um valor. Quando recuperar suas ações no início de seu turno, reduza a quantidade de ações recuperadas pelo seu valor de lento. Como o efeito de lento ocorre no início de seu turno, você não perde ações imediatamente se ficar lento durante seu turno.</p>',
  },
  Stunned: { name: 'Atordoado' },
  Stupefied: { name: 'Estupefato' },
  Unconscious: { name: 'Inconsciente' },
  Undetected: { name: 'Indetectado' },
  Unfriendly: {
    name: 'Inamistoso',
    description: '<p>Esta condição reflete a disposição de uma criatura em relação a um personagem em particular, e somente efeitos sobrenaturais (como uma magia) podem impor estas condições a personagens jogadores. Uma criatura que seja inamistosa a um personagem não gosta do personagem e desconfia especificamente dele. Ela não aceitará @Compendium[pf2e.actionspf2e.DCb62iCBrJXy0Ik6]{Pedidos} do personagem.</p>',
  },
  Unnoticed: {
    name: 'Despercebido',
    description: '<p>Se estiver despercebido por uma criatura, essa criatura não tem ideia de que você está presente. Se estiver despercebido, você também está @Compendium[pf2e.conditionitems.VRSef5y1LmL2Hkjf]{Indetectado} pela criatura. Esta condição é relevante para habilidades que podem ser usadas somente contra alvos que não estejam cientes de sua presença.</p>',
  },
  Wounded: { name: 'Ferido' },
}

const bestiaryEffects: TranslationMap = {
  // Editorial translation of the example supplied during Human Approval review.
  'Effect: Swarming Bites': {
    name: 'Efeito: Mordidas do Enxame',
    description: '<p>Você fica desajeitado 1. Se tentar uma ação com os traços concentração ou manuseio enquanto estiver afetado, deve obter sucesso em um @Check[flat|dc:5] ou a ação é perdida; role o teste após gastar a ação, mas antes que quaisquer efeitos sejam aplicados.</p>',
  },
  'Effect: Battle Cry': {
    name: 'Efeito: Brado de Batalha',
    description: '<p>A criatura recebe +1 de bônus de estado em rolagens de ataque e dano.</p>',
  },
  'Effect: Aura of Command': {
    name: 'Efeito: Aura de Comando',
    description: '<p>A criatura recebe a +1 de bônus de estado nas rolagens de ataque e +2 de bônus de estado em seus salvamentos de Vontade</p>',
  },
  'Effect: Oceanic Armor': {
    description: '<p>A criatura recebe +2 de bônus de circusntância na CA.</p>',
  },
  'Effect: Lantern of Hope': {
    name: 'Efeito: Lanterna de Esperança',
    description: '<p>A criatura recebe +1 de bônus de estado nas jogadasde dano e nos salvamentos contra <em>@Compendium[pf2e.spells-srd.GaRQlC9Yw1BGKHfN]{Desespero Esmagador}</em>.</p>',
  },
}

const spellEffects: TranslationMap = {
  'Spell Effect: Courageous Anthem': {
    name: 'Efeito de Magia: Antífona da Coragem',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.IAjvwqgiDr3qGYxY]{Antífona da Coragem}</p><p>Você recebe +1 de bônus de estado em testes de ataque, jogadas de dano e testes de salvamento contra efeitos de medo.</p>',
  },
  'Spell Effect: Guidance': {
    name: 'Efeito de Magia: Orientação',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.izcxFQFwf3woCnFs]{Orientação}</p><p>Você recebe +1 de bônus de estado a uma jogada de salvamento, rolagem de ataque, teste de Percepção ou teste de perícia que você realizar. Você escolhe em qual rolagem usar o bônus antes de rolar o dado.</p>',
  },
  'Spell Effect: Light': {
    name: 'Efeito de Magia: Luz',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4]{Luz}</p><p>Você anexa um orbe de luz a uma criatura voluntária, fazendo-o flutuar próximo à criatura conforme ela se move.</p>',
  },
  'Spell Effect: Mystic Armor': {
    name: 'Efeito de Magia: Armadura Mística',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.aAbfKn8maGjJjk2W]{Armadura Mística}</p><p>Você recebe um bônus de item na CA e um modificador máximo de Destreza de +5. No 4º ranque ou maior, você recebe um bônus de item nos salvamentos.</p>',
  },
  'Spell Effect: Runic Weapon': {
    name: 'Efeito de Magia: Arma Rúnica',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.TFitdEOpQC4SzKQQ]{Arma Rúnica}</p><p>A arma alvo torna-se uma arma <em>+1 impactante</em>, recebendo +1 de bônus de item nos testes de ataque e aumentando a quantidade de dados de dano para dois.</p><hr /><p><strong>Elevada (6°)</strong> A arma é <em>+2 impactante maior</em>.</p><p><strong>Elevada (9°)</strong> A arma é <em>+3 impactante superior</em>.</p>',
  },
  'Spell Effect: Shield': {
    name: 'Efeito de Magia: Escudo Místico',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR]{Escudo Místico}</p><p>Você recebe +1 de bônus de circunstância na CA até o início de seu próximo turno. Enquanto esta magia estiver em efeito, você pode usar a reação Bloqueio com Escudo usando seu escudo mágico. Após usar Bloqueio com Escudo, a magia é encerrada.</p>',
  },
  'Spell Effect: Soothe': {
    name: 'Efeito de Magia: Abrandar',
    description: '<p>Concedido por @UUID[Compendium.pf2e.spells-srd.Item.szIyEsvihc5e1w8n]{Abrandar}</p><p>Você recebe +2 de bônus de estado em testes de salvamento contra efeitos mentais.</p>',
  },
}

const featEffects: TranslationMap = {
  'Effect: Bon Mot': {
    name: 'Efeito: Comentário Maldoso',
    description: '<p>Concedido por @UUID[Compendium.pf2e.feats-srd.Item.0GF2j54roPFIDmXf]{Comentário Maldoso}</p><p>Você recebe uma penalidade de estado na Percepção e salvamentos de Vontade.</p>',
  },
  'Effect: Anadi Venom': { name: 'Efeito: Veneno de Anadi' },
  'Effect: Extravagant Parry': { name: 'Efeito: Aparada Extravagante' },
  'Effect: Premonition of Clarity': { name: 'Efeito: Premonição de Clareza' },
}

const equipmentEffects: TranslationMap = {
  'Effect: Bronze Bull Pendant': {
    name: 'Efeito: Pingente do Touro de Bronze',
    description: '<p>Concedido por @UUID[Compendium.pf2e.equipment-srd.Item.nXStoLxPrrP2b6WB]{Pingente do Touro de Bronze}</p><p>Você recebe +1 de bônus de item em testes de Atletismo para Empurrar.</p>',
  },
}

const byPack: Readonly<Record<string, TranslationMap>> = {
  conditionitems,
  'bestiary-effects': bestiaryEffects,
  'spell-effects': spellEffects,
  'feat-effects': featEffects,
  'equipment-effects': equipmentEffects,
}

export function getPathfinder2eActiveEffectPtBrTranslation(
  sourcePack: string,
  canonicalName: string,
): Pathfinder2eActiveEffectTranslationFields | undefined {
  return byPack[sourcePack]?.[canonicalName]
}
