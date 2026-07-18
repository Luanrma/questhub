# Templates de Area - Skills e restricoes tecnicas

## Stack

* React, TypeScript e Tailwind no frontend.
* SVG para area continua, celulas cobertas, direcao e origem.
* Animacoes SVG/CSS leves e recortadas pelo poligono para os efeitos visuais iniciais; sem engine de particulas adicional no MVP.
* Funcoes TypeScript puras para geometria e intersecoes.
* Fastify para endpoints HTTP.
* Zod para validar todos os payloads externos.
* Prisma e PostgreSQL para templates e instancias persistentes.

## Organizacao

Frontend em `apps/web/src/vtt/area-templates/`:

* `domain/`: tipos, normalizacao, geometria, projecao no grid e intersecoes;
* `infrastructure/`: cliente HTTP;
* `hooks/`: biblioteca, editor e fluxo de posicionamento;
* `components/`: paineis e overlays visuais.

Backend em `apps/api/src/modules/effect_area/`:

* `domain/`: tipos e apresentacao sem dependencia de Fastify;
* `application/`: operacoes e regras de integridade;
* `infra/`: repositorio Prisma;
* `presentation/`: schemas e rotas HTTP.

## Decisoes de implementacao

* Novas dimensoes sao armazenadas em metros, nunca em pixels. A equivalencia visual usa o fator exato `0.3048 m/ft`, sem participar da geometria. O motor ainda le `GRID_CELLS` e normaliza eventual dado legado em `ft` para metros no editor.
* A geometria continua em coordenadas do board e a fonte da verdade.
* O calculo de preview e local e limitado ao bounding box da forma.
* Grid quadrado e hexagonal usam seus poligonos reais; nao ha matriz quadrada oculta para hexagonos.
* `ORTHOGONAL` usa um losango continuo como fonte geometrica e o mesmo classificador de celulas das demais formas. No grid quadrado, o resultado visual corresponde a distancia ortogonal; no hexagonal, classifica os hexagonos reais sem introduzir uma matriz quadrada oculta.
* Efeitos visuais ortogonais usam uma unica mascara SVG composta pelas celulas cobertas quando elas existem; sem grid visivel, a animacao usa diretamente o losango continuo. Nao ha pattern ou animacao separado por celula.
* `ANY_OVERLAP`, `CENTER_INSIDE`, `HALF_OR_MORE` e `FULLY_INSIDE` sao suportados para celulas e tokens no motor geometrico.
* Bloqueio por paredes usa linha de efeito entre origem e amostras da forma. `SPREAD_AROUND_WALLS` e validado no contrato, mas nao pode ser criado pelo editor do MVP.
* Prisma armazena configuracoes flexiveis em JSON, protegidas por schemas Zod na entrada e por normalizacao na saida.
* Snapshots sao copias JSON independentes do template.
* `TARGET` reutiliza o campo JSON `dimensions.targetCount` para manter a mudanca aditiva sem nova coluna; o schema Zod garante inteiro entre 1 e 100.
* A selecao de alvos e estado local da toolbar e intercepta o gesto primario do token enquanto ativa, sem iniciar drag-and-drop.
* O marcador de posicionamento existente e reutilizado em `TARGET`; um badge sobre o proprio icone apresenta a contagem sem criar um segundo componente de cursor.
* O hit-test ampliado de `TARGET` e uma funcao pura baseada no raio visual do token somado ao raio do marcador, independente do DOM.
* A emanacao de confirmacao e local, temporaria e puramente visual; reutiliza os ids calculados por geometria ou selecionados por `TARGET`, sem criar timers de dominio, persistencia ou mensagens realtime.
* `DEFAULT` preserva a renderizacao geometrica; `FIRE`, `ELECTRIC`, `HEALING`, `EARTH`, `VINES` e `LEAVES` adicionam preenchimentos animados sem interferir no hit-test, nas celulas ou nos tokens tocados.
* A preferencia `prefers-reduced-motion` desativa o movimento dos efeitos sem remover sua identificacao visual.

## Performance

* Preview nao acessa rede nem banco.
* Celulas candidatas sao limitadas pelo bounding box.
* Tokens candidatos sao filtrados por bounding box antes da intersecao detalhada.
* Eventos de ponteiro sao consolidados pelo ciclo de renderizacao do React e nao geram persistencia.
* Efeitos SVG compartilham o mesmo overlay e nao criam canvas, loop JavaScript ou emissao de particulas por frame.
* Edicao de instancia usa draft local para preview imediato; apenas `Salvar` envia um unico `PATCH`, enquanto fechar descarta o draft.
* O escalar persistido da instancia e interpretado por forma, nao como escala uniforme: a largura da linha nao e multiplicada ao editar seu comprimento.
* O painel de templates reutiliza `ResizableEdges` e o padrao de janela flutuante do sistema para destacar, arrastar, redimensionar e pregar novamente. A janela destacada nao minimiza automaticamente, usa altura intrinseca ate o limite configurado e ativa rolagem vertical interna somente quando o conteudo excede esse limite.

## Seguranca

* Toda rota exige sessao autenticada e associacao ativa com a campanha.
* Mutacoes exigem papel `MASTER` calculado no servidor.
* Consultas e mutacoes usam sempre `campaignId` no predicado.
* Criacao de instancia verifica que a cena pertence a campanha e que o template, quando informado, pertence a mesma campanha.
* Jogadores recebem apenas instancias cuja visibilidade permita e tokens ocultos nao sao incluidos em dados derivados enviados pelo servidor.

## Restricoes conhecidas do MVP

* `SOURCE_TOKEN`, `TARGET_TOKEN`, `ATTACHED` e `DRAWN` fazem parte do contrato, mas o editor inicial oferece `FREE_POINT`/`GRID_CELL` com `POINT`/`DIRECTIONAL`.
* `RING` e `POLYGON` fazem parte do contrato persistido; a toolbar cria circulo, cone, linha e selecao `TARGET`.
* A migracao `remove_rectangle_area_shape` converte `CampaignAreaTemplate.shape` e `SceneAreaEffect.configurationSnapshot.shape` de `RECTANGLE` para `LINE` antes da remocao do valor dos contratos Zod e TypeScript.
* `SPREAD_AROUND_WALLS`, volumes 3D, duracao automatica, texturas externas e visibilidade por jogadores selecionados nao sao automatizados.
* Realtime de preview nao e transmitido; jogadores veem apenas instancias persistentes permitidas quando o snapshot e carregado.
