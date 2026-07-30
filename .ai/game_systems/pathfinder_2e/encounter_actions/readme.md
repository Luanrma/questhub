# Pathfinder 2e — Ações no Encounter

## Propósito

Projetar ações relevantes do Token ativo para o contrato neutro
`TokenPresentation.actions`, permitindo que o Encounter mostre um painel útil
sem conhecer regras de Pathfinder 2e.

## Casos de uso

- Mestre ou jogador autorizado abre a ficha PLAYER quando precisar consultar
  perícias e outras informações de referência.
- Mestre consulta ataques, habilidades e magias de um NPC materializado pelo
  bestiário, sem listar suas perícias gerais na sidebar de Encontro.
- Controlador do Token consulta apenas ações cuja visibilidade o autoriza.

## Limites

Este módulo produz apresentação somente de leitura. Não executa rolagens, não
calcula Spell DC, não resolve saves, não aplica graus de sucesso e não publica
chat cards. Essas etapas pertencem a uma futura capacidade de execução do
runtime.

O VTT recebe apenas labels, grupos, detalhes, tipos genéricos de interação e
contextos neutros de apresentação.
