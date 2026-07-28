# VTT: Arquitetura de Tokens Agnósticos e Controle

## Status

Decisão consolidada para a fase atual do QuestHub.

## Fronteira da campanha

A campanha é o mundo. `CampaignActor`, `CampaignMember`, `CampaignToken`, cenas, fichas e inventários pertencem a uma única `Campaign` e nunca podem ser vinculados a registros de outra campanha.

## Entidades

### CampaignMember

Representa a participação de um `User` na campanha.

Responsabilidades:

* `userId`;
* papel `MASTER` ou `PLAYER`;
* status `PENDING`, `ACTIVE`, `REJECTED` ou `LEFT`;
* referência opcional ao ator principal (`actorId`);
* controle persistente de atores e Tokens.

### CampaignActor

Representa uma entidade do mundo: personagem, NPC, criatura, familiar, montaria ou equivalente.

Responsabilidades:

* identidade neutra;
* campanha proprietária;
* ficha mecânica opcional;
* inventário;
* controlador opcional;
* vínculo opcional com Token.

`CampaignActor` não possui `userId`, papel ou status de participação.

### CampaignToken

Representa um objeto visual e operacional do VTT.

Responsabilidades:

* nome, imagem, cor e tamanho;
* configurações neutras de visão e luz;
* controlador opcional;
* vínculo opcional com ator;
* posicionamento opcional em cena.

O Token continua válido sem ator, ficha ou inventário.

## Vínculo Token ↔ ator

```text
CampaignToken 0..1 <-> 0..1 CampaignActor
```

* Um Token referencia no máximo um ator.
* Um ator aparece em no máximo um Token.
* Vincular ou desvincular não cria nem exclui nenhuma das entidades.
* Excluir o ator preserva o Token e define `actorId = null`.
* Excluir o Token preserva ator, ficha e inventário.
* Somente o Mestre altera esse vínculo.

## Ator principal e atores secundários

`CampaignMember.actorId` identifica o ator principal daquele membro na campanha.

Classificações visuais do Token são derivadas:

* `MAIN`: Token vinculado ao ator principal de um `PLAYER`.
* `SECONDARY`: outro Token controlado por um `PLAYER`.
* `MASTER_ONLY`: Token sem controlador jogador.

Essas classificações não são persistidas como papel de membro ou tipo de ator.

## Controle

* Controle pertence a `CampaignMember`, nunca ao `User` diretamente.
* `CampaignActor.controllerMemberId` define quem controla ou acessa o ator quando ele não depende apenas do vínculo principal.
* `CampaignToken.controllerMemberId` define quem pode operar o Token.
* Controlar um Token não transfere propriedade do ator e não altera o ator principal do membro.
* Acesso à ficha e controle do Token são permissões relacionadas, mas não obrigatoriamente idênticas.
* O Mestre controla todas as entidades da campanha.

## Posicionamento

Token e posicionamento permanecem separados:

```text
CampaignToken 1 ── 0..1 CampaignTokenPlacement
CampaignTokenPlacement N ── 1 CampaignScene
```

Excluir posicionamento remove o Token da cena, não do acervo da campanha. Excluir o Token remove seu posicionamento em cascata.

## Regras específicas de sistema

O VTT conhece apenas o ator e o Token. Ficha, atributos, condições, itens, moedas e automações são interpretados por `game_system` e não alteram o contrato visual do Token.

## Invariantes

1. Nada pode atravessar a fronteira da campanha.
2. Um ator não possui `userId`.
3. Um membro possui no máximo um ator principal.
4. Um ator aparece em no máximo um Token.
5. Um Token pode existir sem ator.
6. Um ator pode existir sem Token ou ficha.
7. Excluir ator e excluir Token são operações independentes.
8. `SECONDARY` é derivado e não persistido.
9. O VTT não consulta JSON de ficha ou inventário para mover ou renderizar Tokens.
10. Toda permissão é validada no backend.
