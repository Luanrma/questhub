# Modulo: Sistemas de Jogo (Product)

## 1. Proposito
Centralizar a integracao de sistemas de RPG suportados pelo QuestHub, como Pathfinder 2e e D&D 5e, sem acoplar regras especificas ao VTT, campanhas ou personagens.

Este modulo define o conceito de ruleset: um pacote de regras, dados, validacoes, calculos e componentes de UI especificos de um sistema de RPG.

## 2. Fronteira de Produto
O QuestHub possui duas camadas complementares:

* **VTT generico:** mesa, mapa, tokens, chat, rolagens, presenca, assets, cenas, camadas, medicao e movimentacao.
* **Ruleset especifico:** ficha, classes, ancestralidades/racas, herancas, backgrounds, feats, spells, itens, proficiencias, calculos e validacoes mecanicas.

O VTT nao deve conhecer conceitos mecanicos como armor class, spell slots, ancestry, class, feat, saving throw ou proficiency rank.

## 3. Personas
* **Jogador:** usa regras do sistema escolhido para preencher ficha, fazer rolagens e consultar recursos do personagem.
* **Mestre/GM:** escolhe o sistema da campanha e usa regras do sistema para revisar fichas, NPCs, itens, spells e desafios.
* **Desenvolvedor:** adiciona ou evolui sistemas sem espalhar condicionais por modulos genericos.

## 4. Escopo
Incluido:
* Registrar sistemas suportados.
* Expor metadados de sistema para campanhas e personagens.
* Definir o envelope comum de ficha e fornecer capacidades de ficha por ruleset.
* Fornecer ponto de extensao para catalogos futuros: classes, ancestralidades, herancas, backgrounds, feats, spells e itens.
* Permitir atalhos de rolagem especificos de sistema sem alterar o dado roller generico.

Fora de escopo:
* Renderizacao do mapa.
* Estado de cena, token, camada, fog of war ou medicao.
* Presenca realtime.
* Chat generico.
* Autenticacao e permissoes base.

## 5. Relacao com Outros Modulos
* `campaigns`: armazena qual sistema a campanha usa e consulta metadados do ruleset.
* `characters`: armazena `Character.system` e `Character.sheet`, mas nao conhece detalhes internos do sistema.
* `vtt`: consome objetos genericos de mesa e pode anexar metadados de ruleset sem depender deles.

## 6. Decisao Arquitetural
Regras de Pathfinder 2e, D&D 5e ou qualquer outro sistema nao pertencem ao modulo de campanha nem ao VTT.

Campanha seleciona um ruleset. Personagem referencia um ruleset. Ficha, spells, itens, catalogos e mecanicas especificas vivem dentro do ruleset. O VTT permanece generico.
