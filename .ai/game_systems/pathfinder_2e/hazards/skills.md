# Submodulo: Pathfinder 2e Hazards (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript no package `packages/game-system-pathfinder-2e`.
* Contratos agnosticos de apresentacao em `packages/game-system-core/src/server/bestiary`.
* Dados normalizados a partir de `pf2e-master/packs/**` com `type = "hazard"`.
* Geracao estatica via `scripts/generate-pf2e-bestiary-data.cjs`.
* React para visualizacao da ficha por renderer do ruleset.

## 2. Padroes Aplicados
* **Ruleset Boundary:** campos mecanicos de Hazard ficam no package PF2e.
* **Catalog Entry:** Hazard e uma entrada de catalogo, nao uma entidade viva de campanha.
* **Presentation DTO:** apps genericos renderizam `display.sheet`, sem conhecer stealth, disable, routine ou reset como campos mecanicos.
* **Anti-Corruption Layer:** HTML, macros, UUIDs e estrutura Foundry devem ser limpos ou adaptados antes de chegar ao app.
* **Prepared Hazard Toolbar:** acesso rapido do Mestre deve usar uma lista propria de Hazards preparados, separada de tokens preparados.
* **Future Instance Boundary:** quando Hazards forem colocados em cenas, criar contrato proprio de instancia de cena, separado do catalogo.

## 3. Restricoes Tecnicas
* Nao adicionar campos mecanicos de Hazard ao core, como `stealth`, `disable`, `routine`, `hardness`, `reset` ou `complex`.
* Nao reutilizar `bestiaryCreatureId` semanticamente como se Hazard fosse criatura em novos contratos. Se a persistencia futura precisar abranger varias categorias, criar campo neutro como `bestiaryEntryId` e migrar com compatibilidade.
* Nao permitir drag-and-drop de Hazard para token NPC.
* Nao misturar `preparedBestiaryCreatureIds` com Hazards. Usar configuracao propria, como `preparedHazardEntryIds`, quando a toolbar for implementada.
* Nao acoplar Hazards ao modulo `encounter` antes de existir contrato de instancia/rotina.
* Nao usar `dangerouslySetInnerHTML` para descricoes de Hazard importadas do Foundry.
* Descricoes devem ser plain text ou sanitizadas.

## 4. Decisoes de Performance
* Listagem paginada e filtrada em memoria sobre dados estaticos normalizados.
* Lookup de detalhe por id deve usar mapa em memoria no adapter.
* Gerador deve evitar carregar dados Foundry em runtime.
* Campos extensos devem ser resumidos ou sanitizados para manter o bundle controlado.

## 5. Criacao Assistida Futura
Um futuro editor de Hazards deve ser implementado como fluxo guiado, nao como formulario bruto de JSON.

Passos esperados:

1. definir conceito, objetivo narrativo e pistas visuais;
2. selecionar tipo: `trap`, `environmental` ou `haunt`;
3. definir nivel e complexidade;
4. configurar Seek/Stealth, Disable e DCs principais;
5. configurar dano/efeitos, defesas e HP/hardness quando aplicavel;
6. definir rotina e reset para Hazards complexos;
7. revisar formato final em estilo PF2e.

Versao detalhada do fluxo de criacao:

1. **Planejamento:** registrar o que o Hazard faz na historia, qual local/tesouro/segredo ele protege, que pista inicial entrega e qual decisao interessante oferece aos jogadores.
2. **Tipo:** escolher trap mecanica, trap magica, environmental ou haunt, pois essa decisao orienta pericias, formas de deteccao, meios de desarme e tipo de resistencia narrativa.
3. **Nivel:** comparar com o nivel do grupo e sinalizar risco quando ultrapassar `partyLevel + 3`.
4. **Complexidade:** selecionar `simple` para efeito unico sem iniciativa ou `complex` para rotina recorrente que pode entrar em encontro/iniciativa.
5. **Triangulo de Poder:** distribuir prioridade entre Stealth/Seek, Disable e efeito principal, evitando que todos sejam extremos.
6. **Pericias alternativas:** sugerir opcoes ficcionais como Lore, Diplomacy, Athletics, Acrobatics, Survival, Arcana, Nature, Occultism ou Religion, com ajuste de DC quando fizer sentido.
7. **Tabelas PF2e:** consultar referencias oficiais de Building Hazards para DCs, dano, ataques, defesas e HP/hardness de acordo com nivel e complexidade.
8. **Formatacao:** gerar bloco de estatisticas legivel para sessao, com trigger, disable, routine, reset, defesas, efeito e descricoes operacionais.

Cuidados tecnicos para esse editor:

* Dano de Hazard simples e dano de Hazard complexo devem ser tratados como referencias diferentes.
* O editor deve alertar quando dano de Hazard simples for aplicado a rotina complexa recorrente.
* A UI deve separar dados mecanicos PF2e de campos neutros de apresentacao do core.
* O resultado pode ser persistido futuramente como entrada customizada PF2e, mas nao como criatura, personagem ou token NPC.

## 6. Limitacoes Conhecidas
* A normalizacao atual prioriza consulta e ficha simplificada.
* Ainda nao ha instancia persistida de Hazard em cena.
* A toolbar de Hazards preparados existe como acesso rapido do Mestre, mas ainda nao inicia encontro automaticamente.
* Ainda nao ha automacao de gatilho, area, rotina ou iniciativa.
* Traducoes atuais sao estruturais e podem nao cobrir texto oficial completo.
