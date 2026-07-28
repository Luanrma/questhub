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
CampaignActor  1    ── owns ── 1 Inventory
```

## Invariantes

1. O ator possui `campaignId` e nunca possui `userId`.
2. O membro possui `userId`, papel e status; o ator não duplica esses dados.
3. Um membro pode controlar zero, um ou vários atores; um ator possui no máximo um membro controlador.
4. Um ator não pode estar vinculado a mais de um Token.
5. Ator, membro controlador e Token vinculado devem pertencer à mesma campanha.
6. Excluir o ator não exclui o Token; o vínculo recebe `actorId = null`.
7. Excluir o Token não exclui o ator, a ficha ou o inventário.
8. Toda criação de ator deve criar também seu agregado `Inventory`.
9. A ficha mecânica é opcional; o ator continua válido sem ela.

## Fluxos iniciais

* Criar campanha: cria campanha e membro Mestre; não cria ator implícito.
* Entrar em campanha: cria ou reativa somente o membro; não cria ator implícito.
* Criar ficha pelo Mestre: cria um ator, seu inventário e a ficha.
* Atribuir ficha a usuário: altera o controlador do ator; não transfere a conta ou a participação.

## Interação do jogador

Não existe seleção global de personagem ativo. O jogador interage com um ator pelo Token vinculado que controla. Ficha e inventário são abertos pelo menu contextual desse Token.
