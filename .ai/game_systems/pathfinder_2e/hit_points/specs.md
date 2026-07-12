# Submodulo: Vida Maxima Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato de calculo de vida maxima: a formula pura, os insumos que ela consome (ancestralidade, classe, nivel, Constituicao, ajuste manual) e como a ficha (`character_sheet`) e o catalogo (`character_options`) se conectam para produzir e persistir o valor.

## 2. Formula

```text
maximo = max(
  1,
  hpDaAncestralidade
    + nivel * (hpDaClassePorNivel + modificadorDeConstituicao)
    + ajusteManual
)
```

Onde `modificadorDeConstituicao = Math.floor((constituicao - 10) / 2)`, calculado no ponto de chamada (mesmo padrao ja usado para o modificador de Destreza em Armor Class) e passado pronto para a formula.

Contrato TypeScript completo em `.ai/game_systems/pathfinder_2e/hit_points/skills.md` secao 3.

## 3. Insumos

* `level`: `identity.level` da ficha (`.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 3).
* `ancestryHitPoints`: `Pathfinder2eAncestryEntry.hitPoints` da entrada de catalogo referenciada por `identity.ancestry` (quando `source: 'catalog'`); `0` quando a selecao for `custom` ou nula.
* `classHitPointsPerLevel`: `Pathfinder2eClassEntry.hitPointsPerLevel` da entrada de catalogo referenciada por `identity.class`; `0` quando a selecao for `custom` ou nula.
* `constitutionModifier`: derivado de `attributes.constitution` da ficha.
* `manualAdjustment`: `hitPoints.manualAdjustment`, novo campo persistido na ficha (secao 4).

Resolucao de ancestralidade/classe reaproveita a busca de detalhes ja feita pela ficha (`useCharacterOptionDetails`, hoje usada por `BuildChoicesPanel` em `Pathfinder2eSheetForm.tsx`) — nenhum endpoint novo e necessario.

## 4. Contrato Da Ficha

`Pathfinder2eHitPoints` (`.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 3) ganha um campo:

```ts
type Pathfinder2eHitPoints = {
  maximum: number
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
  manualAdjustment: number
}
```

Mudanca aditiva, sem quebra de shape dos campos existentes — ao contrario de Armor Class (que trocou `armorClass: number` por objeto), nao ha necessidade de nova versao de envelope (`PATHFINDER_2E_SHEET_VERSION` permanece `3`). O schema (`schema.ts`) valida `manualAdjustment` com `.default(0)`, entao fichas persistidas antes desta feature continuam validando sem migracao explicita; a proxima escrita simplesmente passa a gravar o campo.

Default de ficha nova: `hitPoints.manualAdjustment = 0` (demais campos de `hitPoints` inalterados, incluindo `maximum: 0` — a primeira renderizacao com Ancestralidade/Classe/Nivel/Constituicao ja recalcula e persiste o valor real).

`maximum` continua sendo um campo persistido comum (nao um valor "sempre derivado em leitura" como o total de AC). O backend nao calcula `maximum`; so valida que e inteiro `>= 0` (regra ja existente).

## 5. Recalculo E Reconciliacao De `current`

O frontend recalcula `hitPoints.maximum` sempre que um dos insumos da formula muda (secao 3), usando `calculateMaximumHitPoints`. A reconciliacao de `current` depende de qual insumo mudou:

* **Mudanca de `identity.level`**: usa `applyMaximumHitPointsIncrease(current, previousMaximum, newMaximum)` — soma o delta positivo entre o maximo anterior e o novo, sem ultrapassar o novo maximo. Preserva dano acumulado (subir de nivel nao cura o personagem, so concede o HP novo).
* **Qualquer outro insumo** (Constituicao, ancestralidade, classe, `manualAdjustment`): usa `initializeCurrentHitPoints(current, previousMaximum, newMaximum)` — se a ficha ainda nao tinha `current`/`maximum` inicializados (`current === 0 && previousMaximum === 0`), inicializa `current = newMaximum`; caso contrario, apenas garante `current = Math.min(current, newMaximum)` (nunca aumenta `current` fora do level-up).

Ambos os gatilhos escrevem `current` e `maximum` juntos na mesma atualizacao da ficha.

## 6. Sobrescrita Pelo Mestre

`hitPoints.maximum` e somente leitura na ficha para Player. Para Mestre, o campo permanece editavel diretamente (mesma linha visual, sem UI separada), tanto na ficha quanto no editor de combate ja existente (`vtt:combat:health:set`, `apps/api/src/modules/campaign-presence/socket.ts`, ja gated por `canControlCampaignAsMaster`). Uma sobrescrita do Mestre permanece ate a proxima mudanca de nivel/Constituicao/ancestralidade/classe/ajuste manual, quando o recalculo automatico (secao 5) volta a ser aplicado.

Nenhuma mudanca de permissao e necessaria no modulo `combat` — o gate de Mestre ja existe. Ha, porem, uma mudanca de sincronizacao: salvar a ficha (onde a vida maxima recalcula) nao emite nenhum evento de combate, entao a barra de vida do token no VTT pode ficar desatualizada ate o proximo evento real de combate. Ver `.ai/combat/specs.md` secao 4.5 para o que foi corrigido (re-request pontual ao salvar a ficha aberta a partir de um token) e o que permanece como limitacao conhecida.

## 6.1 `current`/`temporary` Sao Somente Leitura Na Ficha — Unica Escrita E O Editor De Combate

**Decisao registrada:** `hitPoints.current` e `hitPoints.temporary` deixam de ser editaveis diretamente na ficha, para Player e para Mestre. Dano e cura (e ajuste manual de vida temporaria) so podem ser aplicados atraves do editor de combate do token (`CombatHealthEditorModal`, `apps/web/src/vtt/table/components/CombatHealthEditorModal.tsx`), que ja escreve de volta na ficha via `combat-health-service` -> `character-health.ts` -> `adapter.health.write` (ver `.ai/combat/specs.md`).

Motivo: antes desta decisao, a ficha permitia digitar um novo `current` livremente, um caminho paralelo de escrita que nao passa pelas regras de dano/cura do modulo `combat` (sem nota, sem log de combate, sem consistencia com o `temporaryHitPoints` sendo consumido primeiro). Centralizar em um unico caminho de escrita evita esses dois valores divergirem por caminhos diferentes.

Consequencia aceita: o editor de combate hoje so abre a partir de um token no VTT e e Mestre-only (`openCombatHealthEditor`, `apps/web/src/vtt/table/CampaignOverviewPage.tsx`). Um personagem sem token em uma cena, ou fora de uma sessao de VTT ativa, nao tem hoje nenhum caminho de UI para ajustar a propria vida atual — precisa que o Mestre o faca pelo editor de combate. Isso e uma limitacao de produto aceita nesta decisao, nao um bug.

`hitPoints.current`/`hitPoints.temporary` continuam com o mesmo contrato de dados (nao mudam de forma); a mudanca e so de permissao de escrita na UI da ficha.

## 6.2 Sincronizacao Do Editor De Combate Com A Ficha

`CombatHealthEditorModal` sincroniza seus campos a partir do valor vivo de `combatHealthByTokenId[tokenId]` (nao apenas na primeira abertura): sempre que o valor recebido divergir do ultimo valor conhecido/commitado pelo proprio modal, os campos sao atualizados, sem apagar uma edicao em digitacao nos demais campos. Isso garante que uma vida maxima recalculada na ficha (secao 5/6) apareca no editor de combate ja aberto, e nao só na proxima vez que ele for reaberto.

## 7. Compatibilidade Com Fichas Antigas

* Fichas sem `hitPoints.manualAdjustment` validam com o valor assumindo `0` (schema `.default(0)`).
* Fichas antigas com `maximum` digitado manualmente (valor "congelado" sem relacao com a formula) continuam carregando normalmente; na primeira renderizacao com Ancestralidade/Classe/Nivel/Constituicao presentes, o recalculo automatico (secao 5) substitui o valor antigo pelo calculado, aplicando a reconciliacao de `current` normalmente (tratando o valor antigo como `previousMaximum`).
* Fichas sem Ancestralidade/Classe selecionadas (ou com selecao `custom`) calculam com `ancestryHitPoints`/`classHitPointsPerLevel = 0`, resultando no minimo em `maximum = max(1, nivel * modificadorDeConstituicao)`.

## 8. Criterios De Aceitacao

* Vida maxima e calculada automaticamente a partir de Ancestralidade, Classe, Nivel e Constituicao, sem exigir digitacao manual.
* Subir de nivel aumenta `current` apenas pelo delta positivo de vida maxima, nunca cura o personagem inteiro.
* Mudar Constituicao, Ancestralidade, Classe ou ajuste manual nunca aumenta `current` alem do necessario para respeitar o novo maximo (nunca cura).
* Vida maxima nunca fica abaixo de `1`.
* `hitPoints.maximum` e somente leitura para Player; Mestre pode sobrescrever diretamente, na ficha e no editor de combate.
* `hitPoints.manualAdjustment` existe, participa da formula e e editavel por quem edita a ficha normalmente.
* Fichas antigas sem `manualAdjustment` continuam carregando e validando.
* A formula vive em uma unica funcao pura, testada, compartilhada entre os pontos que precisam dela.
* Nenhuma mudanca de contrato ou permissao no modulo `combat`.
* Testes unitarios cobrem a formula e as duas funcoes de reconciliacao de `current` (`.ai/game_systems/pathfinder_2e/hit_points/skills.md` secao 5).
