# Submodulo: D&D 5e (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript para modelos futuros do ruleset.
* Zod para validacao futura de blocos persistidos.
* React para componentes futuros de ficha e catalogos.

## 2. Estado Tecnico
Este submodulo ainda nao possui implementacao mecanica.

O sistema `DND_5E` existe como identificador reservado de compatibilidade, mas os fluxos atuais de criacao de campanha e personagem nao devem aceita-lo enquanto nao houver ficha jogavel. Validadores, defaults e componentes especificos devem ser adicionados somente depois de specs proprias.

## 3. Restricoes
* Nenhuma regra D&D 5e deve ser implementada em `campaigns`.
* Nenhuma regra D&D 5e deve ser implementada em `vtt`.
* Nenhum campo mecanico de D&D 5e deve ser adicionado ao token generico.
* Componentes e validadores futuros devem ser expostos via registry de `game_systems`.
