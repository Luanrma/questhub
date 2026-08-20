# Campaign Actor — Especificação

## Modelo

```text
Campaign
├── CampaignMember[]
├── CampaignActor[]
└── CampaignToken[]

CampaignMember 1    ── controls ── N CampaignActor
CampaignActor  0..1 ── represented by ── 0..1 CampaignToken
CampaignActor  0..1 ── owns ── 1 CampaignCharacterSheet
CampaignActor  0..1 ── owns ── 0..1 Inventory
CampaignActor  1    ── owns ── N CampaignActorEffect
```

## Invariantes

1. O ator possui `campaignId` e nunca possui `userId`.
2. O membro possui `userId`, papel e status; o ator não duplica esses dados.
3. Um membro pode controlar zero, um ou vários atores; um ator possui no máximo um membro controlador.
4. Um ator não pode estar vinculado a mais de um Token.
5. Ator, membro controlador e Token vinculado devem pertencer à mesma campanha; o PostgreSQL rejeita vínculos cruzados.
6. Token vinculado a ator deriva o controle do ator e mantém `CampaignToken.controllerMemberId = null`.
7. Excluir o Token não exclui o ator, a ficha nem o inventário opcional. A ficha
   preservada não reaparece automaticamente na biblioteca como um novo Token;
   recriar ou associar uma representação visual é uma ação explícita do
   gerenciamento de fichas.
8. A criação de um ator que oferece inventário cria também seu `Inventory` na
   mesma operação; `CampaignActor.createMany` não é permitido.
9. A ficha mecânica é opcional; o ator continua válido sem ela.
10. Arquivar um ator define `archivedAt`, remove seu controlador e desfaz o vínculo com o Token sem apagar ficha, inventário opcional ou efeitos ativos.
11. Atores arquivados não aparecem nas consultas comuns e podem ser restaurados pelo Mestre.
12. Uma criatura materializada do catálogo possui ator, ficha e Token próprios
    e não possui `Inventory`.
13. Duplicar essa criatura cria outro agregado independente; não compartilha
    `actorId` ou `CampaignCharacterSheet` e não copia placement.
14. Um efeito ativo pertence ao `CampaignActor`, não à ficha nem ao Token, e pode existir mesmo quando ambos estão ausentes.
15. O Core pode persistir múltiplas instâncias de efeito com a mesma definição; stacking, deduplicação e interpretação mecânica pertencem ao Game System.
16. Excluir definitivamente o ator exclui seus efeitos ativos por cascade.

## Fluxos iniciais

* Criar campanha: cria campanha e membro Mestre; não cria ator ou inventário implícito.
* Entrar em campanha: cria ou reativa somente o membro; não cria ator ou inventário implícito.
* Criar ficha pelo Mestre: cria um ator, seu inventário e a ficha.
* Atribuir ficha a usuário: altera apenas o controlador do ator.
* Vincular ator a Token: não cria novo inventário.
* Arquivar ator: preserva ficha, inventário opcional, efeitos ativos e histórico do chat.
* Criar Token por catálogo: cria ator, snapshot simplificado de ficha e Token sem
  placement e sem inventário em uma transação. A identidade visual pode receber
  defaults neutros produzidos pelo provider do sistema; quando houver tamanho
  sugerido, ele é aplicado somente nessa criação.
* Duplicar Token por catálogo: repete o agregado com novos IDs e snapshot
  independente, preservando o tamanho visual atual do Token de origem em vez de
  recalcular o default da ficha.

## Active Effects

`CampaignActorEffect` armazena somente instâncias atualmente ativas. Ele fornece campos genéricos de apresentação e identificação opaca, sem interpretar Conditions ou regras de qualquer Game System.

Contrato detalhado: `docs/features/actor-active-effects/spec.md`.

## Interação do jogador

Não existe seleção global de personagem ativo. O jogador interage com um ator pelo Token vinculado que controla. Ficha e inventário são abertos pelo menu contextual desse Token.
