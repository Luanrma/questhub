# Mapeamento PF2e - Bestiarios e Criaturas

Data do levantamento: 2026-07-02.

Fonte analisada: `pf2e-master/packs`.

## Escopo inicial

Para a primeira fase do QuestHub, o alvo deve ser somente documentos Foundry com:

```json
"type": "npc"
```

No sistema PF2e do Foundry, criaturas e monstros aparecem como `npc`. Muitos packs de bestiario tambem trazem `hazard`, e alguns trazem `character`, `army` ou `vehicle`; esses itens devem ficar fora da primeira importacao.

## Resultado do levantamento

- Packs com pelo menos uma criatura `npc`: 53.
- Total de criaturas `npc`: 5.492.
- Hazards dentro desses packs: 978.
- Packs compostos apenas por `npc`: 9.
- Packs mistos: 44.

## Packs que entram na primeira fase

| Pack | Arquivos | Criaturas `npc` | Hazards | Outros tipos |
| --- | ---: | ---: | ---: | --- |
| `abomination-vaults-bestiary` | 112 | 97 | 15 | - |
| `agents-of-edgewatch-bestiary` | 187 | 150 | 37 | - |
| `age-of-ashes-bestiary` | 130 | 103 | 27 | - |
| `blog-bestiary` | 31 | 31 | 0 | - |
| `blood-lords-bestiary` | 195 | 139 | 56 | - |
| `book-of-the-dead-bestiary` | 116 | 91 | 25 | - |
| `claws-of-the-tyrant-bestiary` | 40 | 25 | 15 | - |
| `crown-of-the-kobold-king-bestiary` | 42 | 27 | 15 | - |
| `curtain-call-bestiary` | 74 | 61 | 13 | - |
| `extinction-curse-bestiary` | 168 | 140 | 28 | - |
| `fall-of-plaguestone` | 24 | 21 | 3 | - |
| `fists-of-the-ruby-phoenix-bestiary` | 140 | 129 | 11 | - |
| `gatewalkers-bestiary` | 81 | 56 | 25 | - |
| `howl-of-the-wild-bestiary` | 76 | 76 | 0 | - |
| `kingmaker-bestiary` | 261 | 181 | 44 | `army:22`, `character:14` |
| `lost-omens-bestiary` | 120 | 112 | 8 | - |
| `malevolence-bestiary` | 20 | 12 | 8 | - |
| `menace-under-otari-bestiary` | 70 | 62 | 8 | - |
| `night-of-the-gray-death-bestiary` | 17 | 15 | 2 | - |
| `npc-gallery` | 20 | 20 | 0 | - |
| `one-shot-bestiary` | 30 | 23 | 7 | - |
| `outlaws-of-alkenstar-bestiary` | 98 | 82 | 16 | - |
| `pathfinder-bestiary` | 176 | 176 | 0 | - |
| `pathfinder-bestiary-2` | 331 | 331 | 0 | - |
| `pathfinder-bestiary-3` | 347 | 347 | 0 | - |
| `pathfinder-dark-archive` | 27 | 8 | 19 | - |
| `pathfinder-monster-core` | 492 | 492 | 0 | - |
| `pathfinder-npc-core` | 270 | 270 | 0 | - |
| `pfs-introductions-bestiary` | 13 | 4 | 9 | - |
| `pfs-season-1-bestiary` | 331 | 259 | 72 | - |
| `pfs-season-2-bestiary` | 254 | 199 | 55 | - |
| `pfs-season-3-bestiary` | 278 | 198 | 80 | - |
| `pfs-season-4-bestiary` | 220 | 175 | 45 | - |
| `pfs-season-5-bestiary` | 231 | 184 | 47 | - |
| `pfs-season-6-bestiary` | 297 | 220 | 77 | - |
| `prey-for-death-bestiary` | 40 | 36 | 4 | - |
| `quest-for-the-frozen-flame-bestiary` | 87 | 68 | 19 | - |
| `rage-of-elements-bestiary` | 81 | 81 | 0 | - |
| `rusthenge-bestiary` | 26 | 19 | 7 | - |
| `season-of-ghosts-bestiary` | 81 | 62 | 19 | - |
| `seven-dooms-for-sandpoint-bestiary` | 69 | 53 | 16 | - |
| `shades-of-blood-bestiary` | 95 | 71 | 24 | - |
| `shadows-at-sundown-bestiary` | 18 | 13 | 5 | - |
| `sky-kings-tomb-bestiary` | 108 | 87 | 21 | - |
| `spore-war-bestiary` | 78 | 61 | 17 | - |
| `stolen-fate-bestiary` | 102 | 92 | 10 | - |
| `strength-of-thousands-bestiary` | 162 | 148 | 13 | `vehicle:1` |
| `the-enmity-cycle-bestiary` | 17 | 12 | 5 | - |
| `the-slithering-bestiary` | 13 | 9 | 4 | - |
| `triumph-of-the-tusk-bestiary` | 87 | 68 | 19 | - |
| `troubles-in-otari-bestiary` | 18 | 12 | 6 | - |
| `wardens-of-wildwood-bestiary` | 90 | 73 | 17 | - |
| `war-of-immortals-bestiary` | 16 | 11 | 5 | - |

## Packs relacionados, mas fora da primeira fase

Esses packs tem relacao com monstros/criaturas, mas nao sao bestiarios importaveis como criaturas:

| Pack | Conteudo | Decisao |
| --- | --- | --- |
| `bestiary-ability-glossary-srd` | `action` | Catalogo de habilidades genericas de NPC. Importar depois como referencia/acao reutilizavel. |
| `bestiary-family-ability-glossary` | `action` | Acoes por familia de criatura. Importar depois como dependencia textual/mecanica. |
| `bestiary-effects` | `effect` | Efeitos aplicados por criaturas. Importar depois, quando houver engine de efeitos. |
| `hazards` | `hazard` | Armadilhas e perigos. Nao sao criaturas; pode virar modulo proprio. |
| `iconics` | `character`, `familiar` | Personagens prontos e familiares. Nao entra como bestiario de monstros. |
| `paizo-pregens` | `character`, `familiar` | Pregens. Fora do escopo de criaturas. |
| `vehicles` | `vehicle` | Veiculos. Fora do escopo de criaturas. |

## Estrutura relevante de um `npc`

Campos principais observados nos JSONs de criatura:

- `_id`: id original do documento Foundry.
- `name`: nome exibido da criatura.
- `img`: imagem/token padrao ou arte associada.
- `type`: sempre `npc` para criaturas.
- `system.details.level.value`: nivel da criatura.
- `system.details.publication`: fonte, licenca e remaster.
- `system.traits`: raridade, tamanho e traits.
- `system.attributes`: AC, HP, velocidade, imunidades, fraquezas e resistencias.
- `system.perception`: percepcao e sentidos.
- `system.saves`: Fortitude, Reflex, Will.
- `system.skills`: pericias.
- `system.abilities`: atributos.
- `items`: ataques, armas, magias, acoes especiais, passivas e reacoes embutidas.

Para o QuestHub, a primeira importacao deve preservar o JSON bruto e tambem normalizar um indice minimo:

- `sourceSystem`: `pf2e`.
- `sourcePack`: nome do pack.
- `sourceId`: `_id` do Foundry.
- `slug`: derivado do caminho ou de `system.details.slug`, quando existir.
- `name`.
- `level`.
- `traits`.
- `rarity`.
- `size`.
- `publicationTitle`.
- `remaster`.
- `license`.
- `rawData`.

## Decisao recomendada

Fase 1: importar somente arquivos `.json` de `pf2e-master/packs/**` cujo campo raiz seja `type: "npc"`.

Fase 2: adicionar suporte a dependencias auxiliares de criaturas:

- `action` dos glossarios de bestiario.
- `effect` de `bestiary-effects`.
- referencias `@UUID[...]` dentro de descricoes.

Fase 3: tratar `hazard` como modulo separado, porque Foundry mistura hazards em muitos bestiarios de aventura, mas eles nao sao monstros/criaturas.

Essa separacao evita que o QuestHub tente reproduzir todo o sistema PF2e do Foundry de uma vez. O primeiro valor do modulo sera busca, listagem, leitura e uso basico de criaturas em mesa.
