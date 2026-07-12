# Submodulo: Vida Maxima Pathfinder 2e (Product)

## 1. Proposito
Calcular a vida maxima (`hitPoints.maximum`) do personagem Pathfinder 2e usando a formula oficial (HP da ancestralidade + nivel x (HP da classe por nivel + modificador de Constituicao) + ajuste manual), reagindo automaticamente a mudancas de nivel, Constituicao, ancestralidade ou classe, sem exigir que o jogador digite o total manualmente.

Este submodulo e a autoridade de produto e tecnica para o calculo de vida maxima. Ele consome contratos ja definidos por `.ai/game_systems/pathfinder_2e/character_sheet` (nivel, atributos) e por `.ai/game_systems/pathfinder_2e/character_options` (HP de ancestralidade e classe do catalogo).

## Autoridade Documental
Este diretorio em `.ai/game_systems/pathfinder_2e/hit_points` e o local canonico para o contrato de calculo de vida maxima. Mudancas na formula ou no comportamento de `current`/`manualAdjustment` devem ser registradas aqui primeiro.

Isto substitui a proposta inicial registrada em `.ai/game_systems/pathfinder_2e/questhub_pf2e_calculo_vida.md`, que descrevia a ideia em alto nivel mas nao correspondia aos caminhos reais do repositorio. Aquele documento fica marcado como superseded e aponta para este modulo.

## 2. Problema Resolvido
Antes desta feature, `hitPoints.maximum` era um numero digitado a mao, iniciando em `0` e sem nenhuma relacao com ancestralidade, classe, nivel ou Constituicao. O jogador precisava calcular a formula fora do sistema e mante-la atualizada manualmente a cada mudanca relevante, o que gerava fichas com vida incorreta ou esquecida em `0`.

## 3. Regras de Negocio
* Vida maxima segue a formula oficial do Pathfinder 2e: `maximum = max(1, HP da ancestralidade + nivel x (HP da classe por nivel + modificador de Constituicao) + ajuste manual)`.
* HP da ancestralidade e HP por nivel da classe vem do catalogo de opcoes de personagem (`.ai/game_systems/pathfinder_2e/character_options`), resolvidos a partir da selecao (`identity.ancestry`/`identity.class`) ja persistida na ficha. Selecoes customizadas (`source: 'custom'`), sem entrada de catalogo associada, contribuem `0`.
* Diferente de Armor Class, o total de vida maxima **e persistido** na ficha (`hitPoints.maximum`), recalculado automaticamente pelo frontend sempre que nivel, Constituicao, ancestralidade, classe ou ajuste manual mudarem — nao e derivado em cada leitura. O motivo e que vida maxima precisa coexistir com `hitPoints.current` (dano acumulado), que so pode ser preservado corretamente durante uma escrita explicita, nunca em uma leitura pura.
* Recalcular vida maxima nunca cura o personagem automaticamente: `current` so aumenta quando o nivel sobe (ganho explicito de HP), pelo delta positivo entre a vida maxima anterior e a nova. Qualquer outro recalculo (Constituicao, ancestralidade, classe, ajuste manual) apenas garante que `current` nao ultrapasse o novo maximo — nunca soma.
* Vida maxima nunca fica abaixo de `1`.
* Player nao edita `hitPoints.maximum` diretamente — o campo e somente leitura na ficha para Player. Mestre pode sobrescrever `hitPoints.maximum` diretamente a qualquer momento (na ficha ou no editor de combate ja existente), inclusive quando esse valor diverge do calculado; a proxima mudanca de nivel/Constituicao/ancestralidade/classe/ajuste manual recalcula por cima dessa sobrescrita.
* `manualAdjustment` (ajuste manual de circunstancia/status a vida maxima) e editavel por quem normalmente edita a ficha (dono Player ou Mestre), participa da formula e sobrevive a recalculos.

## 4. Personas
* **Jogador:** ve a vida maxima calculada automaticamente ao definir Ancestralidade, Classe, Nivel e Constituicao; edita `current`, `temporary`, Ferido/Morrendo/Condenado e o ajuste manual, mas nao o total maximo.
* **Mestre:** ve o mesmo calculo automatico e pode, adicionalmente, sobrescrever a vida maxima diretamente (na ficha ou durante combate) quando uma excecao de regra exigir.
* **Desenvolvedor:** mantem a formula em uma unica funcao pura compartilhada, evitando duplicar a regra entre frontend e backend.

## 5. Casos de Uso
* Jogador seleciona Ancestralidade (8 HP) e Classe (8 HP/nivel) em nivel 3 com Constituicao 14 (+2): vida maxima calculada e 38.
* Jogador sobe de nivel 3 para 4 com `current` em 20/38: vida maxima recalcula para 48, `current` sobe para 30 (preserva os 18 de dano).
* Mestre edita a Constituicao do personagem de 14 para 16 fora de um level-up: vida maxima recalcula, mas `current` nao aumenta alem do que ja tinha (sem cura de graca).
* Mestre sobrescreve a vida maxima diretamente durante um combate (efeito temporario de regra): o valor digitado permanece ate a proxima mudanca de nivel/Constituicao/ancestralidade/classe/ajuste manual.
* Ficha antiga sem `hitPoints.manualAdjustment` carrega normalmente com o ajuste assumindo `0`.

## 6. Limites
Pertence ao submodulo:
* a formula de calculo de vida maxima e seu breakdown;
* as regras de reconciliacao de `current` ao recalcular (inicializacao, preservacao de dano, ganho por nivel);
* a integracao entre a ficha (`character_sheet`) e o catalogo (`character_options`) no frontend, exclusivamente para exibir/recalcular vida maxima.

Nao pertence ao submodulo:
* vida temporaria, Ferido, Morrendo, Condenado (permanecem campos simples de `character_sheet`);
* qualquer mecanica de combate (dano, cura, iniciativa, condicoes) — isso e do modulo `combat`, que ja possui seu proprio contrato de leitura/escrita de vida (`health.read`/`health.write`) e permissao de Mestre (`vtt:combat:health:set`), reaproveitados sem alteracao;
* bonus permanentes de efeitos/itens como campo separado — nao existe hoje modelagem de dados para isso; se for necessario no futuro, e uma extensao deste modulo, nao uma antecipacao.
