# Objetivo do Sistema

QuestHub e um VTT para organizar e executar campanhas de RPG de mesa sem impor um conjunto de regras.

## Capacidades centrais

- Cadastro, login e sessao de usuario.
- Identidades de personagem com nome, avatar e bio opcional.
- Criacao de campanhas sem escolha obrigatoria de sistema.
- Entrada por codigo de convite, com aprovacao opcional do mestre.
- Cenas, mapas, grid, tokens e estado visual da mesa.
- Chat, rolagem de dados, presenca e controle de sessao em tempo real.
- Diario, assets e participantes da campanha.

## Limite do produto

O nucleo nao cria nem persiste fichas mecanicas, classes, atributos, magias, itens ou regras de um RPG especifico. `Character` representa uma identidade narrativa e operacional que pode participar de uma campanha e controlar tokens.

Uma futura integracao de regras deve ser opcional e externa ao dominio principal do VTT. Campanhas e personagens devem continuar funcionando integralmente sem extensoes.

## Principais fluxos

- Usuario cria uma identidade antes da campanha ou durante os fluxos de criar/entrar.
- Mestre cria uma campanha e associa sua identidade como `MASTER`.
- Jogador entra por convite com uma identidade livre; campanhas privadas geram uma solicitacao pendente.
- Participantes ativos usam a mesa, as cenas, os tokens, o chat e os recursos narrativos.

