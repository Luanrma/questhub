# Submodulo: Pathfinder 2e Character Spells (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript + Zod para o schema do envelope generico (`packages/game-system-core/src/server/character-spells`) e do bloco especifico PF2e (`packages/game-system-pathfinder-2e/src/server/character-spells`).
* Prisma (`CharacterSpellbook`) para persistencia, seguindo o mesmo `datasource`/`schema.prisma` ja usado pelo restante do projeto.
* Fastify + Zod para os endpoints HTTP em `apps/api/src/modules/character_spells`.

## 2. Padroes Aplicados
* **Envelope generico + adapter por sistema**, reaproveitando literalmente o padrao ja usado por `Character.sheet`/`CharacterSheetSystemAdapter` (`packages/game-system-core/src/server/character-sheet`): `GameSystemAdapter` em `apps/api/src/modules/game_systems/ports.ts` ganha um campo opcional `characterSpellbook`, e o registry em `apps/api/src/modules/game_systems/registry.ts` ganha `getCharacterSpellbookAdapter`/`buildDefaultCharacterSpellbookEnvelope`/`validateCharacterSpellbookEnvelope`/`safeValidateCharacterSpellbookEnvelope`, espelhando as funcoes homonimas de character-sheet.
* **Tabela dedicada, nao campo dentro de `Character.sheet`.** Decisao explicita do plano (secao 6): escrever o spellbook nao deve exigir carregar/gravar a ficha inteira, e o controle de concorrencia (`revision`) e proprio deste recurso.
* **Concorrencia otimista por `revision`**, nao por timestamp. O cliente sempre envia a revision que acredita ser a atual; o servidor rejeita com `409` quando ha divergencia, evitando perda silenciosa de escrita concorrente (jogador e mestre editando ao mesmo tempo).
* **Camada fina, sem DDD pesado.** O recurso e um blob JSON versionado por personagem, estrutural mente identico ao caso ja resolvido por `character_sheet` (`apps/api/src/modules/game_systems/routes.ts`: GET/PUT direto, validacao via registry, sem `application/ports/infra` separados). Reaproveitar esse padrao mais simples em vez do padrao DDD mais pesado usado por `inventory` (que tem multiplas entidades reais — itens, carteira, ledger — o spellbook nesta fase e um unico blob).
* **System Data Opaque.** O core nunca tipa `spellcastingEntries`, `tradition`, `focusPool` etc. Esses tipos vivem exclusivamente no package PF2e; o core so ve `data: Record<string, unknown>` no envelope.

## 3. Restricoes Tecnicas
* O endpoint de leitura deve aceitar tanto o dono do personagem quanto o Mestre ativo da campanha a que o personagem pertence — mesma regra de acesso de `GET /api/characters/:characterId/sheet`.
* O endpoint de escrita deve validar o envelope inteiro (`system`, `version`, `data[dataKey]`) contra o schema Zod do adapter do sistema antes de persistir; nunca aceitar `data` arbitrario sem schema.
* `known`/`prepared`/`innateUses`/`rituals` guardam `spellId` (id de catalogo) **e** um snapshot de `name` (nome exibido), decisao tomada porque o catalogo completo de magias (`.ai/game_systems/pathfinder_2e/spells/`) e Mestre-apenas — um jogador editando o proprio spellbook nao tem permissao de consultar `GET /api/campaigns/:campaignId/spells/:spellId` para resolver o nome em tempo real. Guardar `name` junto segue o mesmo padrao ja usado pela ficha para `Pathfinder2eCatalogSelection` (classe/ancestralidade/heranca/background). Este submodulo nao consulta o catalogo de magias para validar existencia em tempo de schema (isso pertence a camada de aplicacao/rota, nao ao Zod), e nao duplica outros dados do catalogo (descricao, dano, alcance) — apenas `spellId` + `name`.
* A UI (`SpellSearchPicker`, `packages/game-system-pathfinder-2e/src/web/character-sheet/spells/components/SpellSearchPicker.tsx`) resolve `spellId`+`name` chamando a busca minima do catalogo (`GET /api/campaigns/:campaignId/spells/search`, `.ai/game_systems/pathfinder_2e/spells/specs.md` secao 4.1) em vez do jogador digitar os dois campos a mao — essa busca e a unica excecao Mestre-apenas do catalogo (retorna so `id`/`name`/`category`/`rank`/`tags`, nunca descricao/dano/salvamento). Cobre os fluxos de "adicionar magia conhecida", "preparar slot" e "adicionar ritual".
* O layout da aba Magias deve separar componentes de **uso** e **preparacao**: lista principal e painel de detalhes ficam sempre visiveis; preparacao usa um painel compacto com entrada selecionada, slots agrupados por rank, botoes pequenos por slot e busca contextual. Evitar acordeoes gigantes com formularios longos, porque isso mistura configuracao estrutural com jogo em mesa.
* Nao implementar nenhuma rota de "conjurar", "gastar slot automaticamente" ou "recuperar foco" nesta fase — a escrita e sempre uma substituicao completa e explicita do envelope pelo cliente (a UI da aba Magias, `packages/game-system-pathfinder-2e/src/web/character-sheet/spells/`, monta o payload completo e chama o mesmo PUT).
* Categoria `ITEMS` do enum de `Pathfinder2eSpellcastingCategory` deve existir no tipo mas nenhuma rota cria entradas com essa categoria nesta fase.

## 4. Decisoes de Performance
* Um unico registro `CharacterSpellbook` por personagem (`characterId @unique`), leitura/escrita O(1) por indice.
* `data` e um unico blob JSON — sem joins adicionais para ler o estado completo de conjuracao de um personagem.

## 5. Limitacoes Conhecidas
* Sem validacao cruzada com o catalogo de magias (um `spellId` inexistente no catalogo nao e rejeitado na escrita do spellbook; fica para quando `Spell Casting` existir).
* Sem endpoint de "resetar preparacao diaria" ou "recarregar foco" — esses sao comportamentos de `Spell Casting`, fase futura.
* A aba "Magias" tem busca no catalogo (`SpellSearchPicker`) para adicionar magia conhecida, preparar slot e adicionar ritual. O fluxo principal nao expoe `spellId`/nome manual; entradas manuais so devem reaparecer em uma edicao avancada futura, se necessaria.
* A coerencia implementada nesta rodada e deliberadamente basica: busca de preparacao usa categoria `spell`, preserva slot rank, destaca ocupacao por rank e evita tratar rituais como magia preparavel. Validacao completa de tradicao/raridade/capacidade/repertorio/signature permanece no plano canonico, secao 22 item 18.
* Nenhum dado deste submodulo e lido pelo Rule Engine (`.ai/game_systems/pathfinder_2e/rule_engine/`) — os dois existem lado a lado, sem integracao ainda.

## 6. Adendo Tecnico: Compatibilidade de Foco

`focusPool` foi movido para o nivel raiz do spellbook para cumprir o documento normativo de magias (Parte I K.1; Parte II 7.1-7.3/7.6). `entry.focusPool` continua aceito pelo schema como campo legado, mas services de conjuracao devem normalizar para `spellbook.focusPool` antes de persistir novo estado.

Enquanto o custo estruturado de cada magia de foco ainda nao estiver no spellbook, a normalizacao de compatibilidade pode derivar um maximo legado a partir dos `entry.focusPool.max` existentes, sempre limitado a 3.
