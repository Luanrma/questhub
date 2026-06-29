# Modulo: Trade (Product)

## 1. Proposito
Permitir troca de itens entre personagens ativos de uma mesma campanha.

Trade e uma interacao de mesa/campanha. A troca nao acontece entre usuarios diretamente; usuarios participam apenas por controlarem personagens vinculados a campanha.

## 2. Estado Atual
O fluxo de produto de trade ainda nao esta implementado.

Existe um stub tecnico legado em `apps/api/src/modules/trade`, mas ele envia evento para `toUserId` e nao valida personagens, campanha, status ou ownership. Esse stub nao representa o contrato de produto definitivo.

## 3. Personas
* Jogador: solicita ou envia item usando seu personagem ativo na campanha.
* Mestre: pode auditar ou mediar trocas da campanha quando o fluxo for implementado.

## 4. Regra Central
Trade deve ocorrer apenas entre `Character` ativos que pertencam a mesma `campaignId`.

## 5. Regras de Produto
* O personagem de origem deve possuir `CampaignCharacter.status = ACTIVE` na campanha informada.
* O personagem de destino deve possuir `CampaignCharacter.status = ACTIVE` na mesma campanha.
* O usuario autenticado deve controlar o personagem de origem.
* A campanha deve existir.
* A troca nao pode ser enviada para personagem de outra campanha.
* A troca nao pode ser enviada para personagem pendente, rejeitado, morto ou fora da campanha.
* Trade direto entre `User` e `User` nao e permitido como regra de produto.

## 6. Fora de Escopo Atual
* Persistencia de inventario.
* Validacao mecanica de item por sistema de RPG.
* Aceite/recusa em duas etapas.
* Historico persistido de trades.
* Transferencia atomica de item em banco.

## 7. Relacao com Outros Modulos
* `character_creation`: define `Character` e o vinculo `CampaignCharacter`.
* `campaign_creation`: define a campanha e a politica de acesso.
* `campaign_presence`: pode fornecer sala realtime da campanha.
* `game_systems`: futuramente define estrutura e regras de itens por sistema.
