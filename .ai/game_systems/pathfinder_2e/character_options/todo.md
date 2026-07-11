# Todo: Opcoes de Personagem Pathfinder 2e

## Fase 0 - Auditoria
- [x] Ler `AGENTS.md`.
- [x] Ler `.ai/game_systems/pathfinder_2e/character_sheet/*`.
- [x] Ler `.ai/character_creation/*`.
- [x] Confirmar estrutura local de `pf2e-master`.
- [x] Obter revisao local do repositorio.
- [x] Contar arquivos dos quatro packs.
- [x] Auditar Herancas com `ancestry = null`.
- [x] Auditar Herancas com ancestry especifica.
- [ ] Mapear todos os usos de `className`.
- [ ] Mapear todos os usos de `identity.ancestry`.
- [ ] Mapear todos os usos de `identity.heritage`.
- [ ] Mapear todos os usos de `identity.background`.
- [ ] Mapear validacao do envelope.
- [ ] Mapear default sheet.
- [ ] Mapear frontend.
- [ ] Auditar valores de `type`.
- [ ] Auditar `system.items`.
- [ ] Auditar `rules.key`.
- [ ] Auditar slugs duplicados.
- [ ] Documentar achados completos antes do codigo.

## Achados Iniciais
- Fonte local: `pf2e-master`.
- Revisao da fonte PF2e: indisponivel; `pf2e-master` nao possui `.git` proprio neste workspace.
- Layout encontrado: `pf2e-master/packs/{classes,ancestries,heritages,backgrounds}`.
- Classes reais: 25.
- Ancestralidades reais: 48.
- Herancas reais: 311.
- Backgrounds reais: 459.
- Herancas versateis: 17.
- Herancas especificas: 294.
- A ficha PF2e atual ainda usa `identity.className`, `identity.ancestry`, `identity.heritage` e `identity.background` como strings.
- O plano de character options revoga a decisao antiga de manter validacao canonica fora do MVP da ficha.

## Fase 1 - Especificacao
- [x] Criar `readme.md`.
- [x] Criar `skills.md`.
- [x] Criar `specs.md`.
- [x] Criar `todo.md`.
- [x] Atualizar docs da ficha PF2e.
- [x] Remover ou qualificar "validacao canonica fora do escopo" nos docs da ficha.
- [x] Documentar V2.
- [x] Documentar migracao V1.
- [x] Documentar custom selections.
- [x] Documentar compatibilidade de Heranca.
- [x] Documentar rules preservadas.
- [x] Documentar limites do MVP.

## Fase 2 - Core Generico
- [x] Criar package path de character-options.
- [x] Criar kinds genericos.
- [x] Criar source.
- [x] Criar display.
- [x] Criar entry.
- [x] Criar list options.
- [x] Criar adapter.
- [x] Exportar no index.
- [x] Garantir ausencia de campos PF2e no core.

## Fase 3 - Modelos PF2e
- [x] Criar base comum.
- [x] Criar source.
- [x] Criar description.
- [x] Criar rule element.
- [x] Criar granted item.
- [x] Criar attribute choice.
- [x] Criar class entry.
- [x] Criar ancestry entry.
- [x] Criar heritage entry.
- [x] Criar background entry.

## Fase 4 - Gerador E Normalizadores
- [x] Criar resolucao de packs.
- [x] Criar walker recursivo.
- [x] Criar parser JSON.
- [x] Criar cleaner HTML.
- [x] Criar publication parser.
- [x] Criar rule parser.
- [x] Criar UUID parser.
- [x] Criar normalizadores de Classe, Ancestralidade, Heranca e Background.
- [x] Criar summary.
- [x] Gerar arquivos estaticos.

## Fase 5 - Integracao
- [x] Criar catalogo em memoria.
- [x] Criar adapter PF2e.
- [x] Criar registry/API.
- [x] Evoluir ficha para V2.
- [x] Criar migracao V1 para V2.
- [x] Criar seletores frontend.
- [x] Criar build choices.
- [x] Criar aplicacao mecanica minima, se mantida no escopo desta entrega.

## Fase 6 - Qualidade
- [x] Testes do gerador.
- [x] Testes dos normalizadores.
- [x] Testes do catalogo/adapter.
- [x] Testes da API.
- [x] Testes da migracao.
- [ ] Testes de UI relevante.
- [x] Build API.
- [x] Build web.
- [ ] Revisao manual de outputs gerados.
