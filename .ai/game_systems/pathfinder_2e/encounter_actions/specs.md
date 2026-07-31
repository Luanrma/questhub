# Pathfinder 2e — Ações no Encounter — Especificação

## PLAYER

Uma ficha completa válida pode publicar as 16 perícias derivadas como referência:

```text
group = "Perícias"
label = label localizado da perícia
detail = modificador com sinal, por exemplo "+7"
interaction = "roll"
visibility = "OWNER_AND_MASTER"
contexts = ["REFERENCE"]
```

Essas perícias não aparecem na sidebar de Encontro. Este recorte ainda não
publica ataques, habilidades ou magias de PLAYER porque o schema atual da ficha
não persiste essas coleções. É proibido inferi-las pela classe. Até a próxima
etapa, o PLAYER visualiza o retrato, o acesso à ficha e o estado vazio de ações.

## NPC do bestiário

O envelope `CATALOG_TOKEN_SHEET` referencia a entrada original por `contentId`.
Para criaturas, o provider publica:

- `skills` como grupo `Perícias` e `contexts = ["REFERENCE"]`;
- `attacks` como grupo `Ataques`, bônus e dano no detalhe, com `contexts = ["ENCOUNTER"]`;
- `actions` como grupo `Habilidades`, com `contexts = ["ENCOUNTER"]`;
- `spellcasting[].spells` como grupo `Magias`, Rank e tradição no detalhe, com `contexts = ["ENCOUNTER"]`.

Hazards não originam Token no contrato atual. Registros ausentes, inválidos ou
legados sem conteúdo resolvível retornam somente as projeções que puderem ser
construídas com segurança.

## Visibilidade e execução

- Todas as ações mecânicas PF2e usam `OWNER_AND_MASTER`.
- A rota neutra aplica o filtro de visibilidade.
- O frontend nunca recebe os objetos mecânicos originais.
- Uma ação com `activation` pode iniciar seleção de alvos ou posicionamento de
  área efêmera no VTT.
- A confirmação espacial não executa dano, cura, save ou consumo de recurso.
- Tool bindings usam endpoints HTTP neutros e invalidam a apresentação por
  evento existente; nenhum schema ou migration é adicionado.

## Critérios de aceitação

1. ficha PLAYER válida publica perícias com totais derivados somente para referência;
2. NPC publica grupos e contextos conforme o conteúdo realmente existente;
3. NPC sem spellcasting não recebe grupo artificial de magias;
4. observador sem controle não recebe ações privadas;
5. Token genérico continua retornando lista vazia;
6. o VTT não importa nem nomeia conceitos de PF2e.
7. a sidebar do Encontro não recebe perícias de PLAYER ou NPC;
8. enquanto não houver ataques, habilidades ou magias na ficha PLAYER, seu
   painel de Encontro preserva apenas retrato, acesso à ficha e estado vazio.
9. quando houver magia vinculada, a ação resolve sobrescrita individual antes do
   padrão do catálogo;
10. o VTT recebe apenas contratos espaciais neutros e não interpreta PF2e.
