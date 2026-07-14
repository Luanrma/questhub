# Submodulo: Pathfinder 2e Character Spells (Product)

## 1. Proposito
Guardar, por personagem, quais magias e rituais o personagem conhece/prepara, quantos slots/usos/pontos de foco possui e como esses recursos estao distribuidos — a Fase 4 do plano `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md`.

Este submodulo persiste **dados de spellcasting do personagem** (spellbook). Ele nao executa conjuracao, nao resolve ataque/salvamento/dano e nao interpreta Rule Elements — essas responsabilidades pertencem a `Spell Casting` (fase futura, nao iniciada) e ao `Rule Engine` (`.ai/game_systems/pathfinder_2e/rule_engine/`, ja com substrato e 21 familias de Rule Element implementadas, porem sem nenhum consumidor real ainda — o spellbook deste submodulo nao chama o Rule Engine).

## 2. Problema Resolvido
Sem este submodulo, o QuestHub sabe *quais magias existem* (catalogo, `.ai/game_systems/pathfinder_2e/spells/`) mas nao sabe quais magias um personagem especifico conhece, prepara ou ja gastou naquele dia. Esse estado precisa sobreviver a sessao, ser editavel pelo jogador (dentro dos limites da regra) e consultavel pelo Mestre.

## 3. Regras de Negocio
* O spellbook de um personagem e um recurso proprio (`CharacterSpellbook`, tabela dedicada), nao um campo dentro do JSON de `Character.sheet`. Isso evita que uma escrita no spellbook precise carregar/gravar a ficha inteira e permite controle de concorrencia proprio.
* O spellbook segue o mesmo padrao de envelope generico ja usado por `Character.sheet`: `{ system, version, data: { <dataKey>: <dados especificos do sistema> } }`. O core (`packages/game-system-core`) so conhece o envelope; o formato interno (`entries`, `rank`, `slots`, `tradition` etc.) pertence ao package do sistema.
* Escritas usam controle de concorrencia otimista por `revision`: o cliente precisa enviar a `revision` que acredita ser a atual; se nao bater com a persistida, a escrita e rejeitada (`409`) em vez de sobrescrever silenciosamente.
* Um personagem pode ter multiplas entradas de conjuracao (`spellcastingEntries`), cada uma com sua propria categoria (`PREPARED`, `SPONTANEOUS`, `INNATE`, `FOCUS`, `ITEMS`, `RITUAL`), tradicao, atributo-chave e proficiencia — cobre multiclasse e arquetipos de conjuracao.
* Entradas da categoria `ITEMS` nao sao persistidas nesta fase: casting por scroll/wand/staff e efemero, calculado a partir do inventario no momento da conjuracao (fase futura `Item Casting`). O valor do enum existe para o contrato ja prever a categoria, mas nenhuma entrada com essa categoria e criada agora.
* Rituais ficam em uma colecao separada (`rituals: string[]`, ids de catalogo), sem slot comum, conforme a regra do sistema.
* Nada neste submodulo executa: nao ha campo de "efeito aplicado", nao ha resolucao de dano/cura, nao ha Rule Engine. Os campos existem apenas para guardar a escolha/estado (quais slots estao gastos, quantos pontos de foco restam), nao para calcular o resultado de uma conjuracao.
* Cada `spellId` referenciado dentro do spellbook deve corresponder a um id existente no catalogo (`GameSystemSpellEntry.id`); a validacao de existencia acontece na camada de aplicacao, nao no schema Zod (schema so valida formato).

## 4. Personas
* **Jogador:** edita o proprio spellbook (magias conhecidas/preparadas, quais slots ja foram gastos, pontos de foco restantes).
* **Mestre:** consulta e edita o spellbook de qualquer personagem da campanha (incluindo NPCs sob seu controle), mesma regra de acesso ja usada pela ficha de personagem.
* **Desenvolvedor:** usa os contratos deste submodulo (ja consumidos pela aba "Magias" da ficha) e podera futuramente ligar o motor de conjuracao a eles, sem reabrir o formato de persistencia.

## 5. Casos de Uso
* Ler o spellbook de um personagem (jogador dono ou mestre ativo da campanha).
* Criar o spellbook padrao (vazio) na primeira leitura, se ainda nao existir.
* Substituir o spellbook inteiro via escrita otimista (enviando a `revision` esperada).
* Consultar quantas entradas de conjuracao, magias conhecidas/preparadas e pontos de foco um personagem possui (uso futuro pela aba Magias).
* Usar a aba **Magias** em jogo como uma visao resumida: entradas de conjuracao, recursos disponiveis, magias por rank, status preparado/gasto, e botao de consulta da ficha completa da magia quando o jogador precisar ler regra/descricao.
* Pesquisar no catalogo para adicionar magia conhecida, preparar um slot ou adicionar ritual sem expor campos manuais de `spellId`/nome como fluxo principal.
* Preparar magias na ficha por um fluxo separado da lista de uso em jogo: a lista principal deve se parecer com uma mesa de magias preparadas/ativas (rank, nome, acao, alcance/alvo/area, defesa e tags), enquanto o gerenciamento deve aparecer como painel compacto de preparacao por entrada/slot, com busca de catalogo e validacoes basicas de rank/categoria antes de gravar.

## 6. Limites
Pertence ao submodulo:
* o modelo de persistencia (`CharacterSpellbook`) e seu envelope;
* os contratos de `Pathfinder2eSpellcastingEntry` (categoria, tradicao, slots, conhecidas, preparadas, foco, usos inatos, signature spells) e da colecao de rituais;
* validacao de formato (schema Zod) e de concorrencia otimista (`revision`);
* endpoints HTTP de leitura/escrita do spellbook.

Nao pertence ao submodulo:
* `Spell Casting` — intencao, escolha, validacao de recursos em tempo real, consumo, resolucao, log, eventos realtime (fase futura, nao iniciada);
* interpretacao/execucao de Rule Elements e calculo de estatisticas derivadas — implementado parcialmente em `.ai/game_systems/pathfinder_2e/rule_engine/` (substrato + 21 familias); esse motor ja tem um primeiro consumidor real (CA, via `.ai/game_systems/pathfinder_2e/character_effects/`), mas nao e chamado por este submodulo (spellbook nao concede efeitos automaticamente ainda);
* endpoint de detalhe de magia (`GET /api/campaigns/:campaignId/spells/:spellId`) pertence a `.ai/game_systems/pathfinder_2e/spells/`; a aba Magias apenas abre a ficha completa a partir de uma magia ja exibida no spellbook.
* o endpoint de busca minima no catalogo (`GET /api/campaigns/:campaignId/spells/search`) — pertence a `.ai/game_systems/pathfinder_2e/spells/` (specs.md secao 4.1); este submodulo so consome esse endpoint pela UI, nao o define;
* Item Casting (scrolls/wands/staves) — entradas efemeras calculadas do inventario (fase futura, nao iniciada);
* geometria de alvo/area, effects/conditions executaveis, action economy (fases futuras, nao iniciadas).
* validacao completa de acesso PF2e (raridade, tradicao por lista de classe, repertorio/signature/flexible prepared) — registrada no plano canonico, secao 22 item 18; esta rodada implementa apenas coerencia basica de preparacao na UI para nao preparar rituais em slots e para favorecer magias do rank correto.

## 7. Adendo: Reservatorio Global de Foco

Pontos de Foco pertencem ao personagem, nao a uma entrada individual. O spellbook passa a possuir um `focusPool` global; `entry.focusPool` permanece aceito apenas para compatibilidade com dados antigos e deve ser normalizado para o campo global pelo fluxo de conjuracao.

Fundamentacao normativa: `.ai/game_systems/pathfinder_2e/spells/pathfinder-2e-regras-de-magias-questhub.md`, Parte I K.1 e Parte II secoes 7.1-7.3/7.6. Uma magia de foco consumida por qualquer entry reduz o mesmo reservatorio; Refocar recupera exatamente 1 ponto por acionamento, respeitando o maximo.
