# Modulo: Inventory & Economy

## 1. Proposito

Documentar e orientar a implementacao do modulo de **inventario, equipamentos e carteira/economia** do QuestHub.

Este modulo deve permitir que personagens de uma campanha tenham:

* um inventario persistente;
* itens empilhaveis e nao empilhaveis;
* itens equipados a partir do proprio inventario;
* uma carteira separada para moeda;
* historico/auditoria de movimentacoes de itens e dinheiro;
* integracao futura com regras especificas de Pathfinder 2e.

A implementacao deve ser inspirada no modelo antigo do `rpkage`, mas adaptada ao desenho atual do QuestHub, que usa `CampaignCharacter` como vinculo entre campanha, usuario, personagem, role e status.

---

## 2. Contexto de Origem: rpkage

No `rpkage`, o inventario era estruturado em quatro ideias principais:

* `Inventory`: inventario unico de um `Character`.
* `Items`: definicao/template do item dentro da campanha.
* `InventoryItem`: instancia de um item dentro de um inventario.
* `EquippedItem`: registro que aponta para um `InventoryItem`, indicando que aquela instancia esta equipada.

Tambem existia uma separacao importante:

* `Wallet`: carteira unica do personagem.
* `CurrencyTransactionHistory`: historico de transacoes monetarias.
* `ItemTransactionHistory`: historico de movimentacoes de itens.

Essa separacao deve ser preservada conceitualmente no QuestHub: **inventario nao deve ser usado para guardar dinheiro**, e **wallet nao deve ser modelada como item**.

---

## 3. Problema Resolvido

O Mestre e os jogadores precisam controlar posses de personagens de forma confiavel durante a campanha.

Sem um modulo dedicado, o sistema tende a cair em solucoes ruins:

* guardar inventario dentro de `Character.sheet` como JSON solto;
* misturar item, instancia de item e item equipado em uma unica estrutura;
* usar `trade` apenas como evento efemero sem persistencia;
* tratar dinheiro como string livre;
* permitir duplicacao acidental de item equipado;
* perder auditoria de transferencias, loot, compra, venda, consumo e ajustes manuais.

Este modulo resolve isso criando uma fronteira clara para inventario/economia.

---

## 4. Decisao de Modelagem

### 4.1. Dono do inventario

No QuestHub, `Character` nao carrega diretamente `campaignId`; a associacao acontece via `CampaignCharacter`.

Por isso, o dono operacional do inventario deve ser o `CampaignCharacter`, nao apenas o `Character` isolado.

Regra:

* cada `CampaignCharacter` ativo pode ter no maximo um `Inventory`;
* cada `CampaignCharacter` ativo pode ter no maximo uma `Wallet`;
* o inventario e a wallet devem carregar tambem `campaignId` para facilitar consultas, permissoes e integridade de campanha.

Mesmo que hoje `CampaignCharacter.characterId` seja unico, usar `CampaignCharacter` como dono deixa a regra de campanha explicita e evita confundir personagem global com personagem em mesa.

### 4.2. Definicao de item vs instancia no inventario

A modelagem deve separar:

* **ItemDefinition / CampaignItemDefinition:** o que o item e.
* **InventoryItem:** uma posse concreta, stack ou instancia daquele item em um inventario.
* **EquippedItem:** o estado de equipamento de uma posse concreta.

Exemplo:

* `Longsword +1` como definicao de item;
* uma `InventoryItem` representando a espada que pertence ao guerreiro;
* uma `EquippedItem` apontando para essa `InventoryItem` quando ela esta equipada na mao principal.

### 4.3. Wallet separada

A carteira deve ser separada do inventario.

Para Pathfinder 2e, o valor canonico deve ser salvo em **unidade menor**, preferencialmente `copper piece`/`cp`, usando inteiro.

Nao usar `String` para dinheiro, e nao usar `Float` para dinheiro.

Exemplo:

```txt
1 gp = 10 sp = 100 cp
1 sp = 10 cp
1 pp = 10 gp = 1000 cp
```

A UI pode converter para `pp/gp/sp/cp`, mas o banco deve persistir um inteiro canonico.

---

## 5. Regras de Negocio

* Inventario pertence a um personagem dentro de uma campanha (`CampaignCharacter`).
* Wallet pertence a um personagem dentro de uma campanha (`CampaignCharacter`).
* Um personagem nao pode equipar item que nao esteja no proprio inventario.
* `EquippedItem` sempre referencia `InventoryItem`, nunca apenas a definicao/template do item.
* Um `InventoryItem` nao pode estar equipado duas vezes ao mesmo tempo.
* Slots exclusivos, como armadura, escudo, mao principal e mao secundaria, devem impedir conflito.
* Slots nao exclusivos, como itens vestidos, consumiveis guardados e mochila, podem aceitar multiplas entradas.
* Item stackavel deve controlar `quantity`.
* Item equipado deve representar uma unidade concreta. Se o item vier de uma stack com quantidade maior que 1, o sistema deve dividir a stack antes de equipar.
* Toda alteracao relevante de item deve gerar ledger/historico.
* Toda alteracao relevante de dinheiro deve gerar ledger/historico.
* Transferencias de item entre personagens devem ser atomicas: remover/diminuir de um inventario e adicionar/aumentar no outro na mesma transacao.
* Transferencias de dinheiro devem ser atomicas: debitar uma wallet e creditar outra na mesma transacao.
* Por padrao, wallet nao pode ficar negativa.
* Apenas o Mestre pode criar item customizado de campanha, conceder item diretamente, remover item de qualquer personagem ou ajustar dinheiro livremente.
* Jogador pode visualizar o proprio inventario/wallet.
* Jogador pode equipar/desequipar itens do proprio inventario, se a campanha permitir.
* Jogador pode propor ou executar transferencias permitidas pelo Mestre/configuracao da campanha.
* NPCs podem ter inventario e wallet, mas so o Mestre pode administrar.

---

## 6. Personas

* **Mestre:** cria itens customizados, concede loot, ajusta dinheiro, administra NPCs, audita transferencias e corrige inventarios.
* **Jogador:** consulta inventario, equipa/desequipa itens, consome recursos e transfere itens/dinheiro quando permitido.
* **Desenvolvedor:** implementa persistencia, contratos e UI sem misturar regras PF2e com core generico.
* **Agent de IA:** deve seguir specs antes de codar, preservar fronteiras de modulo e atualizar docs quando mudar contratos.

---

## 7. Casos de Uso

* Criar inventario e wallet automaticamente ao criar/ativar personagem em campanha.
* Listar inventario do personagem.
* Adicionar item ao inventario.
* Editar quantidade, notas ou nome customizado de uma instancia.
* Remover, consumir, destruir ou dropar item.
* Transferir item entre personagens da mesma campanha.
* Equipar item em slot PF2e.
* Desequipar item.
* Consultar itens equipados separados do inventario geral.
* Consultar wallet do personagem.
* Ajustar saldo por recompensa, compra, venda, loot ou correcao manual.
* Transferir dinheiro entre wallets.
* Exibir historico de movimentacoes.
* Emitir eventos em tempo real para atualizar as telas abertas.

---

## 8. Valor Entregue

* O Mestre ganha controle confiavel de loot e economia.
* Jogadores ganham uma ficha mais util durante a sessao.
* O sistema ganha base para automacoes futuras de carga, bulk, slots, investidura, consumo, municao e bonus de equipamento.
* O historico reduz disputas sobre quem recebeu, gastou, vendeu ou equipou algo.

---

## 9. Limites do Modulo

Pertence a este modulo:

* inventarios persistentes;
* definicoes de itens customizados da campanha;
* instancias de item no inventario;
* itens equipados;
* wallet/carteira;
* ledger de item e moeda;
* endpoints HTTP de inventario/economia;
* eventos WebSocket de atualizacao de inventario/economia;
* integracao de apresentacao com PF2e para moeda, slots e metadados.

Nao pertence a este modulo:

* regras completas de ficha PF2e;
* calculo automatico de todos os bonus da ficha;
* importacao completa de compendio oficial de itens;
* comercio com loja/NPC automatizado completo;
* craft completo;
* carga/bulk automatica como bloqueio duro;
* validacao completa de investidura PF2e;
* inventario de cena/mapa como container fisico persistente;
* resolucao de ataques, dano ou efeitos de combate.

---

## 10. Relacao com Pathfinder 2e

A primeira implementacao deve atender Pathfinder 2e, mas sem contaminar o core com mecanicas demais.

Regras PF2e esperadas inicialmente:

* moeda canonica em `cp`;
* display em `pp/gp/sp/cp`;
* slots basicos: `main_hand`, `off_hand`, `armor`, `shield`, `worn`, `held`, `backpack`, `consumable`, `other`;
* campos PF2e especificos em `systemData` ou em adapter do package `game-system-pathfinder-2e`;
* tipo, raridade, nivel, traits, bulk e preco como metadados exibiveis.

Automacoes PF2e mais profundas devem ser evoluidas em fases, nao na primeira entrega.

---

## 11. Relacao com Trade Atual

O arquivo `apps/api/src/modules/trade/routes.ts` deve ser tratado como implementacao temporaria.

A rota atual apenas emite um evento de trade recebido e nao representa persistencia real de inventario/economia.

O novo modulo deve absorver ou substituir esse fluxo por transacoes persistidas:

* transferencia direta;
* proposta de trade com aceite futuro;
* auditoria por ledger;
* emissao de eventos apos commit no banco.

Enquanto o modulo novo nao estiver pronto, nao remova o fluxo antigo sem garantir compatibilidade com a UI existente.
