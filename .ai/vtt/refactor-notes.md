# VTT Frontend Refactor Notes

## Primeiro corte: dice roller

Contexto afetado:
* Modulo: `vtt`
* Camada: Frontend
* Subdominio: `dice`
* Arquivos principais: `apps/web/src/vtt/dice-roller/*`

Decisao:
* Separar `VttDiceControls` em camadas menores sem alterar o contrato publico do componente.
* Regras puras de rolagem, parser e formatacao ficam fora do React.
* Persistencia local de cor dos dados fica isolada em storage proprio.
* Integracao com `@3d-dice/dice-box` fica encapsulada no modulo de dice roller.
* JSX do painel de controle fica em componente presentational.

Motivo:
* O componente anterior misturava UI, parser de comando, storage local, Socket.IO, ciclo de vida da engine 3D e formatacao de chat.
* Essa separacao atende a regra de "Zero God Components" definida em `.ai/agents.md`.

Compatibilidade:
* `VttDiceControls` continua recebendo `campaignId`, `character`, `socket`, `enabled`, `open`, `clearSignal`, `onClose` e `className`.
* A rolagem continua local ao cliente que rolou e publica o resultado no chat.
* O limite visual canonico segue `.ai/vtt/specs.md`: 40 dados acumulados na mesa local.

## Segundo corte: organizacao interna por camada

Decisao:
* Manter `apps/web/src/vtt/dice-roller` como bounded context de frontend para dados do VTT.
* Organizar internamente por responsabilidade:
  * `components/` para JSX e controles visuais.
  * `hooks/` para orquestracao de estado e efeitos.
  * `domain/` para regras puras, tipos, parsing e formatacao.
  * `infrastructure/` para DiceBox, storage local e publicacao no chat.
  * `config/` para constantes e limites do modulo.

Motivo:
* A primeira refatoracao reduziu o componente principal, mas a pasta continuou plana.
* A estrutura por camada deixa visivel onde ficam as fronteiras entre UI, dominio e infraestrutura.

Restricao:
* `domain/` nao deve importar `@3d-dice/dice-box`, Socket.IO, React, DOM ou storage local.
* `components/` nao devem conhecer detalhes de engine 3D, Socket.IO ou storage.
