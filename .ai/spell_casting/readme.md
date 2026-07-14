# Modulo: Spell Casting (Product — camada generica)

## 1. Proposito
Permitir que o dono de um personagem (ou o Mestre) **lance uma magia a partir do token na cena**: escolher a magia do proprio spellbook, posicionar a area no tabuleiro (magias com area) ou selecionar token(s) alvo clicando na cena (magias sem area mas com contagem de alvo conhecida) — com preview visual nos dois casos (celulas pintadas, alvos destacados, alcance) — e consumir o recurso correto (slot preparado, slot espontaneo, ponto de foco, uso inato) — a fatia minima da Fase 7 do plano `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md`, dirigida pelas expectativas de produto da secao 23 do plano.

Esta primeira entrega e deliberadamente **consumo + visual**, nao resolucao: nenhum dano e rolado, nenhum save e testado, nenhum effect e aplicado. O que ela garante: o recurso certo e gasto exatamente uma vez, todos na mesa veem a area, e a recuperacao (descanso diario / refocus) devolve o recurso.

## 2. Problema Resolvido
Antes deste modulo, o spellbook era um caderno passivo: o jogador marcava slots gastos manualmente e nenhuma magia tinha existencia na mesa. Agora a conjuracao e uma acao de jogo: parte do token (botao direito), respeita o recurso disponivel e produz um efeito visual compartilhado por todos da campanha.

## 3. Regras de Negocio
* Conjurar exige: personagem com spellbook, magia presente na entrada de conjuracao, e recurso disponivel na fonte escolhida.
* Consumo por categoria (regras PF2e, ver `.ai/game_systems/pathfinder_2e/spell_casting/`):
  * `PREPARED`: marca `expended: true` no slot preparado escolhido (rank + indice);
  * `SPONTANEOUS`: incrementa `used` do rank escolhido (ate `max`);
  * `FOCUS`: decrementa `focusPool.points` (minimo 0; conjurar exige >= 1);
  * `INNATE`: incrementa `used` do uso inato (`at-will` nunca consome);
  * truques (`cantrip`, rank 0): nunca consomem recurso.
* A escrita do consumo usa a mesma concorrencia otimista por `revision` do spellbook e exige `clientCastId` unico por tentativa de conjuracao. Um retry com o mesmo `clientCastId` devolve o mesmo resultado ja gravado, mesmo se a `revision` enviada pelo cliente estiver velha, e nunca consome recurso duas vezes.
* Truques e magias inatas `at-will` continuam sem alterar recursos, mas gravam o recibo idempotente no spellbook; por isso tambem podem avancar `revision`.
* Recuperacao:
  * **Descanso diario**: restaura todos os slots preparados (`expended: false`), zera `used` de slots espontaneos e usos inatos, e enche o focus pool;
  * **Refocus**: recupera 1 ponto de foco (ate o maximo).
  * Ambos disponiveis para o dono e para o Mestre.
* O preview de area e **efemero e compartilhado**: enquanto o conjurador posiciona a area, todos na campanha veem as celulas pintadas e os alvos destacados (mesmo modelo do evento de medicao ja existente). Nada de area e persistido nesta fase.
* A confirmacao de uma magia com area envia ao servidor a forma final posicionada (`SceneAreaShape`) junto do token conjurador. O servidor revalida cena/token, grid (quadrado ou hex conforme a cena), compatibilidade da forma com a magia e alcance parseavel antes de consumir o recurso.
* Para magias **sem area** cujo texto de alvo do catalogo (`system.target.value`) descreve uma contagem clara ("1 creature", "up to 5 creatures", "1 or 2 creatures", "one/two/three creature(s)" — ver `.ai/game_systems/pathfinder_2e/spell_casting/specs.md` secao 4), o jogador clica no(s) token(s) alvo na propria cena (ate o maximo permitido) antes de confirmar. O servidor revalida a contagem, que cada token existe na cena e que cada um esta dentro do alcance da magia. Texto de alvo composto ou com traits ("willing", "ally", "1 ally and 1 enemy") fica `unsupported` — a conjuracao segue sem exigir nem oferecer selecao de alvo, nunca adivinha a contagem.
* Quando a cena possui encontro ativo, conjurar pelo token exige que o token esteja no turno ativo e tenha acoes suficientes. Magias de 1/2/3 acoes (formato real do catalogo: digito puro em `system.time.value`) debitam `actionsRemaining`; tempos variaveis, reactions e free actions ainda nao sao inferidos/debitados.
* Uma conjuracao confirmada com contexto de cena publica um anuncio persistente no chat da campanha usando o personagem conjurador como autor e o usuario autenticado que executou a acao; quando ha alvos selecionados, o anuncio cita os nomes resolvidos ("Conjurou Heal em Aldric."). Se houver encontro ativo na mesma cena, tambem registra uma entrada `SYSTEM` no log de batalha. Esse registro e fato confirmado do servidor; retries idempotentes nao duplicam chat/log.
* A area conjurada permanece visivel por alguns segundos apos a confirmacao (flash de conjuracao) e some — areas persistentes pertencem a fase `Effects completos`.

## 4. Personas
* **Jogador:** botao direito no proprio token → "Lancar magia" → escolhe a magia, posiciona a area, confirma; ve o recurso consumido no spellbook.
* **Mestre:** mesmo fluxo em qualquer token de personagem da campanha; tambem aciona descanso/refocus.
* **Espectadores (demais jogadores):** veem o preview e o flash da area com o nome da magia e do conjurador.

## 5. Casos de Uso
* Listar as magias conjuraveis de um personagem com o estado do recurso (quantos slots livres, pontos de foco, usos restantes).
* Conjurar magia com area (burst/cone/line/emanation/...): posicionar, validar alcance no cliente, revalidar no servidor, confirmar, consumir.
* Conjurar magia com contagem de alvo conhecida (sem area): selecionar token(s) na cena dentro do minimo/maximo, confirmar, consumir.
* Conjurar magia sem area e sem alvo parseavel: confirmar, validar action economy quando houver encontro ativo, e consumir.
* Descanso diario e refocus.

## 6. Limites
Pertence ao modulo (camada generica em `apps/api/src/modules/spell_casting/` + eventos socket):
* endpoints de cast-options, cast, rest e refocus (a interpretacao mecanica fica no package PF2e);
* eventos efemeros de area (`vtt:spell-area:update`/`changed`) na infra de presenca.
* publicacao do fato confirmado de conjuracao para chat/log quando o cast ocorre a partir de uma cena.

Nao pertence ao modulo:
* resolucao (ataque, save, dano, cura, counteract) — fase `Resolution`;
* aplicacao de effects/conditions, duracao, sustain — fase `Effects completos`;
* action economy avancada (reactions, free actions, quickened, slowed, stunned, sustain e tempos maiores que um turno) — fase futura;
* item casting (scroll/wand/staff) e rituais executaveis — fases futuras;
* line of effect, cover, cone/linha/quadrado/cubo em grid hexagonal — pendencias do `.ai/scene_geometry/` (burst/emanation/cylinder/ring ja funcionam em hex, ver `.ai/scene_geometry/specs.md` secao 7).
