# Modulo: Trade (Skills & Tech)

## 1. Stack Tecnologica
* Backend: Fastify para API HTTP autenticada.
* Realtime: Socket.IO para notificar personagens/usuarios envolvidos quando a troca for implementada.
* Persistencia: Prisma, quando existir modelo persistido de inventario ou trade.
* Validacao: Zod para contratos de entrada.

## 2. Padroes Aplicados
* Policy/Guard: validar ownership do personagem de origem e participacao ativa dos dois personagens na mesma campanha.
* Transaction Script: quando houver persistencia de inventario, a transferencia deve ser atomica.
* Bounded Context: trade nao deve acoplar regras mecanicas internas de D&D 5e ou Pathfinder 2e.

## 3. Restricoes Tecnicas
* Nao implementar trade direto por `toUserId`.
* Nao confiar em `userId` como destino operacional da troca.
* Toda operacao deve receber `campaignId`, `fromCharacterId` e `toCharacterId`.
* `fromCharacterId` deve pertencer ao usuario autenticado.
* `fromCharacterId` e `toCharacterId` devem ter `CampaignCharacter` na mesma campanha.
* Ambos os vinculos devem estar `ACTIVE`.
* Regras de item por sistema pertencem a `game_systems`.

## 4. Estado Atual do Codigo
`apps/api/src/modules/trade/routes.ts` contem um stub legado que emite `trade:received` para `user:{toUserId}`.

Esse stub deve ser tratado como nao aderente ao contrato definitivo e precisa ser substituido antes de qualquer uso de produto.
