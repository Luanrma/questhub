# Prompt de execucao: token drop realtime sem loading global

Voce e Codex atuando no QuestHub. Antes de alterar codigo, leia `AGENTS.md`, `.ai/architecture.md`, `.ai/campaign_scene/readme.md`, `.ai/campaign_scene/skills.md`, `.ai/campaign_scene/specs.md`, `.ai/vtt/readme.md`, `.ai/vtt/skills.md` e `.ai/vtt/specs.md`. Se encontrar ambiguidade ou conflito, siga `AGENTS.md`: pergunte uma unica questao com multiplas escolhas, deixando a ultima opcao para resposta livre do usuario.

## Objetivo

Remover o loading global e a reaplicacao de snapshot completo causados por drop/criacao de token no board durante sessao online. O drop deve ser tratado como delta leve de token, preservando frame da cena estavel.

## Contexto e conclusoes arquiteturais

* O banco relacional continua sendo a fonte de persistencia duravel de cenas, grid e tokens.
* Durante sessao online, drop, movimento, visibilidade e remocao de tokens pertencem ao estado vivo da sessao em memoria/cache.
* Prisma nao deve estar no caminho quente obrigatorio de drop/move/visibility durante sessao online.
* Persistencia deve ocorrer em pontos controlados: autosave eventual, inicio de sessao, encerramento de sessao, preparo offline e fechamento de modal com alteracoes pendentes.
* Loading global e aceitavel para troca estrutural de cena, aplicacao inicial de snapshot ou carregamento de imagem de background.
* Loading global nao e aceitavel para drop, movimento, remocao ou invisibilidade de token.
* Drop online deve emitir delta para sockets que visualizam a cena, nao snapshot completo para toda a campanha.

## Arquivos provaveis

* `apps/api/src/modules/campaign-presence/socket.ts`
* `apps/api/src/modules/campaign-presence/live-state.ts`
* `apps/api/src/modules/campaign-presence/contracts.ts`
* `apps/web/src/vtt/table/CampaignOverviewPage.tsx`
* Arquivos auxiliares em `apps/web/src/vtt/table/domain` se houver normalizadores ou reducers de cena/token.

## Comportamento esperado

1. Ao dropar token com campanha online:
   * validar Mestre/campanha/cena/token como hoje;
   * criar token no estado vivo;
   * marcar a cena/campanha como dirty para persistencia futura;
   * emitir delta de token apenas para sockets autorizados a visualizar a cena;
   * nao chamar broadcast de snapshot visivel como resposta normal ao drop;
   * nao bloquear a UI aguardando insert/update no banco.

2. Ao dropar token com campanha offline:
   * pode persistir diretamente no banco, pois nao e caminho realtime critico;
   * pode emitir delta apenas para o proprio Mestre.

3. No frontend:
   * receber delta de token deve atualizar apenas `tokenState` e a lista de tokens da cena correspondente;
   * nao deve acionar fluxo de loading estrutural;
   * nao deve chamar reaplicacao completa de snapshot, recarregar background, recalcular dimensoes naturais, grid, zoom ou pan;
   * drop local pode continuar otimista, desde que reconciliado pelo delta/ACK do servidor.

4. Snapshot completo deve ficar reservado para:
   * entrada/reconexao de usuario;
   * troca de cena;
   * force/unforce scene;
   * recuperacao explicita de estado;
   * aplicacao inicial de cena.

## Cuidados

* Nao misturar regra mecanica de ruleset no VTT/campaign_scene.
* Nao quebrar movimento de token, que atualmente esta fluido.
* Nao remover persistencia final de tokens; apenas tirar persistencia obrigatoria do caminho quente online.
* Nao esconder deformacao com loading: corrigir a causa impedindo token delta de passar pelo pipeline de snapshot/cena inteira.
* Manter eventos legados `vtt:*` funcionando enquanto a migracao para `campaign-scene:*` nao estiver completa.

## Validacao minima

* Testar drop de token online como Mestre com Player conectado: ambos veem token novo sem loading global.
* Testar movimento depois do drop: continua fluido.
* Testar troca de cena: loading estrutural continua permitido quando necessario.
* Testar entrada tardia/reload: cliente recebe snapshot com token criado.
* Testar campanha offline: drop do Mestre ainda persiste ou fica salvo no ponto documentado de preparo.
* Rodar os testes/build relevantes do projeto, ou explicar claramente o que nao foi possivel executar.
