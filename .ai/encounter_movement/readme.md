# Modulo: Encounter Movement (Movimento Limitado em Combate)

## 1. Proposito
Limitar o quanto um token pode se mover no grid durante um encontro ativo, usando a velocidade de deslocamento da propria criatura (NPC ou personagem de jogador) como teto.

Pertence ao **Core Engine** (nao a um `game-system-*`): a regra "voce anda ate a sua velocidade por turno" e generica de VTT tatico, valida para qualquer sistema de RPG. O que e especifico de sistema e apenas onde o numero de velocidade mora (ficha PF2e, ficha D&D 5e etc.) — isso fica isolado atras de adapters, mesmo padrao ja usado por `combat` para ler vida.

Referencia original: `.ai/game_systems/pathfinder_2e/movement/questhub-encounter-movement-scope.md` (doc do usuario). Este modulo adapta esse escopo ao que ja existe no codigo (ver secao 8 de divergencias).

## 2. Problema Resolvido
Hoje, mesmo com um encontro ativo, qualquer token pode ser arrastado livremente por qualquer distancia da cena. Isso quebra a logica tatica de combate por turnos: um personagem com deslocamento 7,5m consegue "teleportar" para o outro lado do mapa no proprio turno, e o Mestre nao tem como usar a ficha (campo Movimento/Mov.) para nada durante o jogo.

## 3. Regras de Negocio
* **Sem encontro ativo:** movimento continua 100% livre, como hoje. Nada muda fora de combate.
* **Com encontro ativo:**
  * So o token do participante `creature` cuja vez e a ativa pode ser movido por um **jogador**. Fora do turno dele, arrastar fica bloqueado (mesmo o dono do token). Token que nao e participante do encontro tambem nao pode ser movido por jogador.
  * O **Mestre pode mover qualquer token a qualquer momento**, mesmo fora do turno — isso nao mudou. O que mudou (revisao pos-teste em mesa, ver secao 8): o Mestre **tambem e limitado** a distancia maxima daquele token especifico. Ele nao tem mais um "modo livre com aviso" — se exceder, o movimento e cortado no ponto maximo alcancavel, igual ao jogador. A unica diferenca entre Mestre e jogador continua sendo o turno: Mestre nao precisa esperar a vez do token pra move-lo.
  * **Economia de 3 acoes (revisao pos-teste em mesa):** cada participante `creature` tem **3 acoes de movimento por turno**, nao um orcamento unico. Cada acao da direito a andar ate a velocidade da criatura (`maxMetersPerAction`). Uma acao e consumida quando o jogador/Mestre **termina** um gesto de movimento (solta o arraste, ou confirma o movimento medido com a barra de espaco) — nao a cada tique do mouse. O que sobrar de uma acao nao usada **nao acumula** pra proxima (se andou 3m de uma acao de 6m, os outros 3m daquela acao se perdem; a proxima acao comeca com 6m frescos de novo). Isso modela a Investida do PF2e: cada Investida e uma acao inteira, nao importa se voce andou tudo ou so uma parte.
  * Terminar um movimento (soltar o arraste ou confirmar a medicao) **nunca** avanca o turno sozinho — passar o turno continua sendo so pelo botao "Avancar turno" do Mestre. Isso e importante porque movimento e so 1 das 3 acoes: o jogador pode mover, mover de novo, e so depois atacar (ou qualquer combinacao), tudo no mesmo turno, sem o sistema decidir por ele quando o turno acabou.
  * Quando as 3 acoes de movimento se esgotam, nenhum movimento adicional e permitido naquele turno (nem pro Mestre) ate o turno resetar.
  * O orcamento (3 acoes cheias) reseta sempre que aquele participante volta a ser o ativo (avancar ou voltar turno) e quando um novo encontro comeca.
  * Hazards **nao** entram nessa regra — nunca tiveram movimento proprio e continuam sem limite (nao se aplicam a eles).
* **Fonte da velocidade:**
  * NPC/bestiario: campo `speed` do catalogo (numero em pes, ja normalizado — nao e texto livre).
  * Personagem de jogador: campo `Mov.`/`movementMeters` da ficha (numero em metros, ja normalizado).
* **Conversao pes → metros (so para NPC):** PF2e usa quadrados de 5 pes. `celulas = pes / 5`; `metros = celulas * metersPerCell da cena atual`. Isso mantem o limite coerente com a escala de grid que o Mestre configurou para aquela cena especifica (nao um valor fixo universal).
* **Calculo de distancia no grid:** diagonal conta como 1 celula, igual ortogonal (regra "1-1-1", sem a alternancia 5-10-5-10 do PF2e "real" — decisao explicita de MVP, ver secao 6).
* **Previsao no cliente (correcao de bug critico, ver secao 8):** o cliente calcula o mesmo limite localmente, em tempo real, durante o arraste — o token visualmente para de seguir o mouse assim que atinge o limite da acao atual, em vez de "deixar arrastar livre e corrigir depois". O servidor continua sendo a autoridade final (nunca confia so no cliente), mas agora cliente e servidor calculam a mesma coisa, entao nao ha mais discrepancia visivel.

## 4. Personas
* **Mestre:** ve o token do participante ativo destacado e liberado para mover; move qualquer token a qualquer momento (nao precisa esperar turno), mas tambem nao consegue exceder a velocidade daquele token; pode resetar manualmente as acoes de movimento de um participante.
* **Jogador:** so consegue mover o proprio token, e so quando e a vez dele no encontro, ate o limite de 3 acoes de movimento (cada uma ate a velocidade do personagem).

## 5. Casos de Uso
* Jogador arrasta o token no proprio turno; o token para sozinho, visualmente, ao atingir a velocidade da acao atual.
* Jogador solta o arraste (gastando 1 acao) e arrasta de novo (2ª acao) pra continuar andando, sem precisar avancar o turno entre um gesto e outro.
* Jogador tenta arrastar um token (proprio ou de outro) fora do seu turno durante um encontro ativo — nada acontece, o token nao se move.
* Mestre reposiciona um NPC fora do turno dele (ex.: apos um efeito de empurrao), mas ainda respeitando a velocidade daquele NPC.
* Mestre reseta as acoes de movimento de um participante no meio do turno dele (ex.: corrigir um exagero, ou dar movimento extra por uma regra especial).

## 6. Limites
Pertence a este modulo:
* validacao/clamp de distancia de movimento durante encontro ativo;
* leitura (somente leitura) da velocidade de NPC/personagem, via adapter de sistema;
* estado de "metros gastos no turno" por participante, em memoria (mesma politica do `encounter`: nao persiste no banco).

Nao pertence a este modulo (fora de escopo nesta etapa, conforme doc original secao 17):
* acao Step/Leap especifica de PF2e (Investida/Stride generico ja e modelado como "uma acao de movimento"), terreno dificil, terreno maior, voo com altitude, natacao/escalada com custo especial;
* diagonal alternada PF2e (5-10-5-10 ft);
* ataques de oportunidade/reacoes automaticas, pathfinding automatico, colisao com paredes, line of sight, auras;
* automacao de condicao slowed/quickened (que mudaria o numero de acoes ou a velocidade base);
* rastreamento de acoes nao-relacionadas a movimento (ataque, magia, etc.) — o sistema so sabe contar quantas das 3 acoes foram usadas pra **mover**; se o jogador quer reservar uma acao pra atacar, isso e escolha dele, nao e imposto pelo sistema;
* desfazer movimento automaticamente;
* mudar a unidade exibida na ficha de NPC de "ft" para "m" (a ficha de bestiario continua mostrando pes, so o calculo interno usa metros — ver `skills.md`).

## 7. Decisao de Produto
Movimento segue a economia de 3 acoes do PF2e: cada acao de movimento da direito a andar ate a velocidade da criatura, e o sobrante de uma acao nao usada se perde (nao acumula). Bloqueio automatico agora vale tanto pra jogador quanto pra Mestre (revisao pos-teste em mesa, ver secao 8) — a unica assimetria remanescente e que o Mestre nao precisa esperar o turno do token pra move-lo.

## 8. Divergencias do doc original (`questhub-encounter-movement-scope.md`) e revisoes pos-teste em mesa
* O doc propunha um `parseMovementSpeeds(raw: string)` para textos como "Terrestre 25 ft" — **desnecessario**: tanto a velocidade do NPC (`speed: number`, em pes) quanto a do Player (`movementMeters: number`, em metros) ja sao campos numericos normalizados no modelo de dados atual, nao texto livre. O parser de string nao vai ser implementado.
* Confirmado com o usuario: jogador so move o proprio token, nunca o de um aliado, mesmo no turno do aliado.
* **Revisao 1 (pos-teste em mesa):** a primeira entrega (Fases A-D) modelava um orcamento unico de metros por turno (`maxMeters`/`usedMeters`), com o Mestre isento de bloqueio (so recebia um aviso). O usuario testou e reportou dois problemas reais:
  1. **Bug:** o token do jogador conseguia ser arrastado livremente por qualquer distancia durante o gesto de arraste, e so "corrigia" (voltava perto da posicao inicial) quando o arraste terminava. Causa raiz: o cliente atualizava a posicao visual do token otimisticamente, a cada movimento do mouse, sem esperar confirmacao do servidor — o corte real acontecia no servidor a cada evento, mas a UI nunca refletia isso durante o gesto, so no fim, quando a ultima resposta do servidor "vencia" a atualizacao otimista. Corrigido fazendo o cliente calcular o mesmo limite localmente e parar de mover o token na tela assim que bate o teto, em vez de deixar arrastar livre e corrigir depois.
  2. **Pedido de mudanca:** "Mestre sempre livre" nao e mais o comportamento desejado — o Mestre deve ser tao limitado quanto o jogador em termos de distancia (so continua livre quanto a *quando* pode mover, nao *quanto*).
* **Revisao 2 (pos-teste em mesa):** o usuario pediu explicitamente pra modelar a economia de 3 acoes do PF2e, com um exemplo concreto: um personagem com 6m de velocidade pode andar 3m (gasta 1 acao), andar mais 5m (gasta outra acao), e atacar na terceira acao, so entao passando o turno — cada acao de movimento tem seu proprio teto de "ate a velocidade", nao um total livre pra dividir como quiser. Terminar um movimento nunca avanca o turno sozinho (isso ficaria a cargo do botao "Avancar turno" do Mestre, como ja era).
