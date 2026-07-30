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
```

## Invariantes

1. O ator possui `campaignId` e nunca possui `userId`.
2. O membro possui `userId`, papel e status; o ator não duplica esses dados.
3. Um membro pode controlar zero, um ou vários atores; um ator possui no máximo um membro controlador.
4. Um ator não pode estar vinculado a mais de um Token.
5. Ator, membro controlador e Token vinculado devem pertencer à mesma campanha; o PostgreSQL rejeita vínculos cruzados.
6. Token vinculado a ator deriva o controle do ator e mantém `CampaignToken.controllerMemberId = null`.
7. Excluir o Token não exclui o ator, a ficha nem o inventário opcional.
8. A criação de um ator que oferece inventário cria também seu `Inventory` na
   mesma operação; `CampaignActor.createMany` não é permitido.
9. A ficha mecânica é opcional; o ator continua válido sem ela.
10. Arquivar um ator define `archivedAt`, remove seu controlador e desfaz o vínculo com o Token sem apagar ficha ou inventário opcional.
11. Atores arquivados não aparecem nas consultas comuns e podem ser restaurados pelo Mestre.
12. Uma criatura materializada do catálogo possui ator, ficha e Token próprios
    e não possui `Inventory`.
13. Duplicar essa criatura cria outro agregado independente; não compartilha
    `actorId` ou `CampaignCharacterSheet` e não copia placement.

## Fluxos iniciais

* Criar campanha: cria campanha e membro Mestre; não cria ator ou inventário implícito.
* Entrar em campanha: cria ou reativa somente o membro; não cria ator ou inventário implícito.
* Criar ficha pelo Mestre: cria um ator, seu inventário e a ficha.
* Atribuir ficha a usuário: altera apenas o controlador do ator.
* Vincular ator a Token: não cria novo inventário.
* Arquivar ator: preserva ficha, inventário opcional e histórico do chat.
* Criar Token por catálogo: cria ator, snapshot simplificado de ficha e Token sem
  placement e sem inventário em uma transação.
* Duplicar Token por catálogo: repete o agregado com novos IDs e snapshot
  independente.

## Interação do jogador

Não existe seleção global de personagem ativo. O jogador interage com um ator pelo Token vinculado que controla. Ficha e inventário são abertos pelo menu contextual desse Token.
