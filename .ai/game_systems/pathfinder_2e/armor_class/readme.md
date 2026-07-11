# Submodulo: Armor Class Pathfinder 2e (Product)

## 1. Proposito
Calcular a Classe de Armadura (AC) do personagem Pathfinder 2e usando a formula oficial completa, reagindo automaticamente a mudancas de equipamento (armadura e escudo) sem exigir que o jogador digite o total manualmente.

Este submodulo e a autoridade de produto e tecnica para o calculo de AC. Ele consome contratos ja definidos por `.ai/game_systems/pathfinder_2e/character_sheet` (proficiencias, atributos, nivel) e por `.ai/inventory` (itens equipados), e define a ponte entre os dois.

## Autoridade Documental
Este diretorio em `.ai/game_systems/pathfinder_2e/armor_class` e o local canonico para o contrato de calculo de AC. Mudancas na formula, nos fatos de equipamento consumidos ou na reatividade devem ser registradas aqui primeiro.

Isto substitui a decisao anterior (registrada em `.ai/game_systems/pathfinder_2e/character_sheet/skills.md` e `specs.md`) de que Armor Class era um campo numerico solto, fora de escopo para bonus de item. Essa decisao foi revertida por pedido explicito de produto: AC deve refletir equipamento automaticamente.

## 2. Problema Resolvido
Antes desta feature, `armorClass` era um numero digitado a mao, sem nenhuma relacao com armadura, escudo, proficiencia ou Destreza. O jogador precisava recalcular manualmente toda vez que equipava, desequipava ou trocava de armadura/escudo, e frequentemente esquecia de aplicar o limite de Destreza da armadura (dex cap) ou o bonus de proficiencia correto.

## 3. Regras de Negocio
* AC segue a formula oficial do Pathfinder 2e:
  `AC = 10 + modificador de Destreza (limitado pelo dexCap da armadura equipada) + bonus de proficiencia (nivel + rank da categoria de armadura equipada) + bonus de item da armadura + bonus do escudo (somente se erguido) + ajuste manual de circunstancia/status`.
* A categoria de armadura equipada (`unarmored`, `light`, `medium`, `heavy`) determina qual proficiencia da ficha e usada. Sem armadura equipada, a categoria e `unarmored`.
* O bonus do escudo so soma quando o jogador ergueu o escudo (acao de combate). Escudo apenas equipado, sem erguer, nao contribui.
* O total de AC nunca e digitado diretamente pelo jogador. A ficha persiste apenas os dois insumos que o jogador controla: as proficiencias de armadura (`armorProficiencies`) e o ajuste manual de circunstancia/status (`armorClass.manualAdjustment`). O restante (item, dex cap, escudo) vem do inventario.
* Equipar, desequipar, trocar de armadura/escudo ou alternar "erguer escudo" deve refletir no AC exibido automaticamente, sem o jogador reabrir ou salvar a ficha.
* Itens de campanha equipados sem os dados mecanicos novos (clonados antes desta feature, ou custom sem esses campos) devem cair em um fallback seguro: sem limite de Destreza, sem bonus de item, escudo nao erguido. Nunca travar ou lancar erro por dado ausente.

## 4. Personas
* **Jogador:** ve o AC atualizado automaticamente na ficha ao equipar/desequipar itens ou erguer o escudo; ajusta proficiencias de armadura e bonus circunstanciais manualmente.
* **Mestre:** ve o mesmo comportamento ao inspecionar a ficha de um jogador; concede/edita itens de armadura/escudo pelo inventario, que refletem no AC do dono.
* **Desenvolvedor:** mantem a formula em um unico lugar (funcao pura compartilhada) e evita duplicar a regra entre frontend e backend.

## 5. Casos de Uso
* Personagem sem armadura equipada tem AC = 10 + Destreza + proficiencia unarmored + ajuste manual.
* Personagem equipa uma armadura media com dex cap: AC passa a usar a Destreza limitada, a proficiencia de armadura media e o bonus de item da armadura.
* Personagem ergue o escudo: AC soma o bonus do escudo enquanto permanecer erguido; abaixar o escudo remove o bonus.
* Personagem troca de armadura no inventario com a ficha aberta: AC recalcula sem reload manual.
* Mestre edita o rank de proficiencia de armadura pesada do jogador: AC recalcula assim que a armadura pesada correspondente estiver equipada.

## 6. Limites
Pertence ao submodulo:
* a formula de calculo de AC e seu breakdown;
* o contrato dos "fatos de equipamento" (categoria, bonus de item, dex cap da armadura; bonus e estado erguido do escudo) resolvidos a partir do inventario;
* o endpoint de leitura desses fatos e o endpoint de alternar "escudo erguido";
* a integracao entre a ficha (`character_sheet`) e o inventario (`inventory`) no frontend, exclusivamente para exibir/recalcular AC.

Nao pertence ao submodulo:
* qualquer outra mecanica de combate (ataques, iniciativa, dano, condicoes);
* interpretacao de armadura/escudo dentro do modulo `inventory` (esse modulo permanece agnostico — ver `.ai/inventory/skills.md`);
* migracao retroativa em massa de itens de campanha ja existentes (ver secao de dados legados em `specs.md`);
* penalidades de Forca minima, penalidade de teste (`checkPenalty`) e penalidade de deslocamento (`speedPenaltyFeet`) aplicadas a outras rolagens/mecanicas — os campos sao capturados no catalogo (`.ai/game_systems/pathfinder_2e/items`) para uso futuro, mas esta entrega so os aplica ao proprio calculo de AC (`dexCap`/`ac`).
