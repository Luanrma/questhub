# Feature Spec — Indicadores de efeitos ativos no Token/VTT

Status: **READY**

Card: `QH-EFF-010` — `https://trello.com/c/902TcUSE/15-qh-eff-010-exibir-indicadores-de-efeitos-no-token-vtt`  
Dependências: `QH-EFF-001`, `QH-EFF-002`, `QH-EFF-009`  
Domínio: `VTT Core / CampaignToken presentation / CampaignActorEffect`

## Objetivo

Tornar efeitos ativos perceptíveis diretamente no VTT por meio de indicadores compactos associados ao Token que representa um `CampaignActor`, sem copiar estado para o Token e sem fazer o VTT interpretar regras de um Game System.

A fonte de verdade continua sendo `CampaignActorEffect[]` do Actor. O Token apenas deriva uma representação visual genérica enquanto estiver vinculado a esse Actor.

## Problema

Os efeitos ativos já podem ser persistidos, consultados na ficha e aplicados pelo fluxo PF2e. Durante a mesa, porém, o usuário precisa abrir a ficha para perceber que um Actor está sob efeitos. O VTT precisa expor essa informação de forma compacta no canvas, preservando a independência entre Token e Actor e sem transformar o Token em dono de estado mecânico.

## Escopo

- exibir indicadores compactos junto a Tokens vinculados a `CampaignActor`;
- projetar o estado genérico de `CampaignActorEffect` por meio do vínculo estrutural `CampaignToken.actorId`;
- exibir até 3 instâncias no resumo do Token e representar excedentes como `+N`;
- diferenciar visualmente `BENEFICIAL`, `HARMFUL` e `NEUTRAL`;
- exibir ícone persistido quando disponível e fallback genérico quando ausente;
- exibir `displayValue` quando presente sem interpretá-lo matematicamente;
- permitir abrir detalhes compactos de todos os efeitos sem abrir a ficha;
- atualizar indicadores após `vtt:actor-effects:changed`, mudança de vínculo do Token e reconexão;
- reutilizar a autorização de leitura definida em `QH-EFF-002`;
- não criar persistência, namespace ou regra específica no Token.

## Fora de escopo

- persistir efeitos em `CampaignToken` ou placement;
- nova tabela ou migration;
- nova API de mutação;
- criar/remover/editar efeitos pelo indicador do Token;
- interpretar `payload`, `origin`, `namespace` ou `definitionKey` no VTT;
- resolver stacking, duração, expiração ou prioridade mecânica;
- alterar HP, CA, saves, atributos, rolagens, iniciativa, ações ou qualquer estado mecânico;
- criar regra visual específica para Pathfinder, D&D ou outro Game System;
- transformar indicadores em fonte de verdade;
- mostrar efeitos de Actor que o usuário não pode consultar pela política de `QH-EFF-002`.

## Fonte de verdade e vínculo estrutural

Fluxo conceitual:

```text
CampaignToken
  -> actorId opcional
  -> CampaignActor
  -> CampaignActorEffect[]
  -> projeção genérica somente leitura
  -> indicadores no VTT
```

Regras:

- `CampaignToken.actorId = null`: não existe projeção de efeitos ativos;
- Token vinculado não recebe cópia de `CampaignActorEffect`;
- desvincular o Token faz os indicadores desaparecerem sem alterar o Actor ou seus efeitos;
- remover o Token não remove o Actor nem seus efeitos;
- o mesmo estado continua visível na ficha por `QH-EFF-003`.

## Permissões e visibilidade

Esta feature não cria política nova de leitura. A projeção reutiliza `canReadActorEffects` de `QH-EFF-002`:

- `MASTER`: pode consultar os efeitos de qualquer Actor ativo da própria Campaign;
- `PLAYER`: pode consultar os efeitos de Actor ativo cujo `controllerMemberId` seja seu membership;
- Actor arquivado não projeta efeitos;
- Token de outra Campaign é rejeitado pela resolução conjunta de `campaignId + tokenId`;
- Token inexistente retorna `404`;
- membership ausente/inativo retorna `403`;
- Player sem permissão sobre o Actor recebe `403`;
- o frontend trata leitura negada/erro como ausência de projeção e não mantém conteúdo sensível obsoleto;
- a visibilidade normal do próprio Token continua sendo responsabilidade do VTT.

O backend continua sendo a fronteira de segurança.

## Contrato HTTP

### GET `/api/campaigns/:campaignId/tokens/:tokenId/actor-effects`

Projeta de forma somente leitura os Active Effects do Actor atualmente vinculado ao Token.

Resposta com Actor vinculado e acessível:

```ts
type TokenActorEffectsResponse = {
  tokenId: string
  actorId: string
  effects: ActorEffectView[]
}
```

Resposta para Token válido sem Actor ou com Actor arquivado:

```json
{
  "tokenId": "...",
  "actorId": null,
  "effects": []
}
```

Regras do endpoint:

- não cria, altera ou remove `CampaignActorEffect`;
- não grava nada no Token;
- busca o Token pela mesma Campaign da URL;
- usa o vínculo estrutural existente para chegar ao Actor;
- reutiliza `canReadActorEffects`;
- reutiliza `listActorEffects` como fonte de verdade;
- não conhece Game System concreto;
- não retorna apresentação derivada de regra mecânica além dos campos genéricos já persistidos no efeito.

A API ator-scoped de `QH-EFF-002` continua inalterada e permanece usada pela ficha e pelas mutações genéricas.

## Layout e comportamento visual

### Resumo no Token

Os indicadores ficam visualmente associados ao Token, sem alterar tamanho lógico, posição, hitbox ou rotação.

- até 3 efeitos aparecem como badges compactos;
- cada badge prioriza `iconUrl` persistido;
- sem ícone, usa fallback visual genérico;
- `displayValue`, quando presente, aparece como pequena marca textual;
- efeitos excedentes aparecem como `+N`;
- a ordem é a mesma da listagem genérica de efeitos, sem priorização mecânica;
- o resumo não deduplica instâncias iguais;
- badges não alteram seleção, targeting, movimento, resize, rotação ou iniciativa.

### Polaridade

A distinção é apenas visual:

- `BENEFICIAL`: tom positivo;
- `HARMFUL`: tom de alerta/prejudicial;
- `NEUTRAL`: tom neutro.

Nenhuma cor ou polaridade gera consequência mecânica.

### Detalhes

Ao clicar no agrupamento, abre-se uma superfície compacta associada ao Token contendo todas as instâncias retornadas pela projeção.

Para cada instância podem ser mostrados:

- ícone ou fallback;
- nome;
- `displayValue`;
- polaridade;
- descrição, quando disponível;
- categoria, quando disponível.

Não mostrar ao usuário:

- `payload` bruto;
- `origin` bruto;
- `namespace`;
- `definitionKey`.

O detalhe é somente leitura e não abre a ficha automaticamente.

## Integração com a apresentação atual do Token

`TokenPresentationOverlay` já compõe recursos/indicadores produzidos pelo contrato de automação de Game System.

Os indicadores desta feature pertencem ao estado genérico de `CampaignActorEffect` e são compostos separadamente no mesmo shell visual. Eles não são injetados em uma engine concreta e não exigem que `GameSystemTokenPresentationProvider` conheça Active Effects do Core.

Consequências:

- a engine concreta continua sem importar `apps/api/src/modules/**`;
- o endpoint genérico de Active Effects não importa `apps/api/src/game_systems/**`;
- a representação funciona sem interpretar uma ficha mecânica;
- nenhuma semântica PF2e é adicionada ao contrato genérico do Token;
- ícones/nome/descrição produzidos anteriormente por um Game System podem chegar ao Token porque já foram persistidos como apresentação genérica da instância.

## Dados e sincronização

Leitura:

```http
GET /api/campaigns/:campaignId/tokens/:tokenId/actor-effects
```

Eventos reutilizados:

```text
vtt:actor-effects:changed
{ campaignId, actorId }

vtt:token:changed
{ campaignId, token }
```

O frontend:

- carrega quando existem `campaignId` e `tokenId`;
- guarda o `actorId` retornado pela projeção apenas como contexto transitório de invalidação;
- recarrega em `vtt:actor-effects:changed` somente para a mesma Campaign e Actor resolvido;
- recarrega em `vtt:token:changed` para o mesmo Token, cobrindo vínculo/desvínculo/revínculo;
- recarrega após reconexão;
- não usa polling periódico;
- em falha de leitura limpa os efeitos locais em vez de manter projeção obsoleta.

O socket é mecanismo de invalidação, não fonte de verdade.

## Estados de UI

- Token sem Actor: nenhum indicador;
- Actor sem efeitos: nenhum indicador;
- carregando: não bloqueia o Token nem cria skeleton sobre o canvas;
- leitura negada/erro: nenhum conteúdo sensível é exibido; o Token continua funcional;
- 1–3 efeitos: badges individuais;
- 4+ efeitos: três badges + `+N`;
- detalhe aberto: lista todas as instâncias retornadas, sem deduplicação.

## Regras

1. O Token nunca é fonte de verdade dos efeitos.
2. Efeitos pertencem ao `CampaignActor`, não ao Token ou placement.
3. Token sem Actor permanece plenamente válido e não recebe efeitos derivados.
4. O VTT usa somente campos genéricos de apresentação persistidos no efeito.
5. O VTT não interpreta `payload`, `origin`, `namespace`, `definitionKey` ou regras concretas.
6. Múltiplas instâncias iguais continuam visíveis como instâncias distintas.
7. O resumo visual limita quantidade sem deduplicar o estado.
8. A interação de detalhes é somente leitura.
9. A autorização de leitura continua no backend conforme `QH-EFF-002`.
10. Realtime invalida a leitura; o socket não é fonte de verdade.
11. Nenhuma interação desta feature executa automação mecânica.
12. Indicadores não modificam geometria, seleção ou interação principal do Token.

## Critérios de aceite

### AC-01 — Fonte de verdade no Actor
Dado um Token vinculado, os indicadores derivam exclusivamente de `CampaignActorEffect[]` do Actor e nenhuma cópia é persistida no Token.

### AC-02 — Token sem Actor
Dado um Token válido sem Actor, ele continua funcionando e a projeção retorna zero efeitos.

### AC-03 — Múltiplos efeitos compactos
Dado um Actor com até 3 efeitos, cada instância aparece no resumo; com mais de 3, o resumo mostra três badges e `+N`.

### AC-04 — Sem deduplicação
Dadas duas instâncias iguais, ambas continuam representadas e aparecem separadamente nos detalhes.

### AC-05 — Polaridade genérica
BENEFICIAL, HARMFUL e NEUTRAL possuem diferenciação visual sem regra mecânica.

### AC-06 — Valor de exibição
Quando `displayValue` existe, ele pode ser mostrado no badge/detalhe sem ser interpretado matematicamente.

### AC-07 — Detalhes sem ficha
Usuário autorizado consegue consultar nome, valor, polaridade, descrição/categoria disponíveis sem abrir a ficha.

### AC-08 — Dados opacos protegidos
A UI não renderiza `payload`, `origin`, `namespace` ou `definitionKey` brutos.

### AC-09 — Permissão Mestre
Mestre ativo consegue visualizar indicadores de Actors ativos da própria Campaign.

### AC-10 — Permissão Player
Player visualiza indicadores somente de Actors que pode ler conforme `QH-EFF-002`; Actor não controlado não vaza efeitos.

### AC-11 — Campaign isolation
Token de outra Campaign, Actor arquivado ou Actor inacessível não projeta efeitos para o usuário.

### AC-12 — Realtime
Criação/remoção/alteração de efeito é refletida após `vtt:actor-effects:changed`; mudança de vínculo é refletida após `vtt:token:changed`; não há polling.

### AC-13 — Desvinculação
Ao desvincular o Token do Actor, os indicadores desaparecem sem remover ou alterar os efeitos do Actor.

### AC-14 — Interações do Token preservadas
Selecionar, mover, redimensionar, girar, marcar alvo e usar overlays existentes continua independente dos indicadores.

### AC-15 — VTT agnóstico
O código genérico do Token/indicadores não contém regra ou nome concreto de Game System.

### AC-16 — Sem automação mecânica
Exibir ou consultar indicadores não altera ficha, HP, CA, saves, atributos, rolagens, ações, combate ou estado mecânico do Token.

## Testes esperados

- endpoint de projeção é somente GET e campaign-scoped;
- Token inexistente retorna `404`;
- Token sem Actor/Actor arquivado retorna vazio;
- autorização reutiliza `canReadActorEffects`;
- projeção usa `listActorEffects` e não persiste no Token;
- resumo limita a 3 + `+N` sem deduplicar;
- polaridades genéricas possuem apresentação distinta;
- `displayValue` é exibido como texto;
- detalhe não renderiza campos opacos;
- overlay preserva `useTokenPresentation` e compõe Active Effects separadamente;
- `vtt:actor-effects:changed`, `vtt:token:changed` e reconnect invalidam corretamente;
- ausência de polling e mutações no hook visual;
- teste estrutural sem `PATHFINDER`, `PF2E`, `Frightened`, `Spell` ou Condition concreta no módulo genérico;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0004`, `ADR-0005`
- [ ] Exige novo ADR

A feature projeta estado pertencente ao Actor sobre uma representação visual independente. Isso é explicitamente compatível com ADR-0004, que permite informação mecânica chegar ao Token por contratos/projeções genéricas sem transferir ownership ao Token.

O novo endpoint de projeção pertence ao VTT Core porque apenas atravessa a relação estrutural Token → Actor e reutiliza autorização/persistência genérica já existentes. Não interpreta Game System e não altera a direção de dependência definida pelo ADR-0005.

Architecture Review: **APPROVED**. Nenhum novo ADR ou whitelist é necessário.

Required enforcement:

- `campaignId + tokenId` validados no backend;
- política `canReadActorEffects` reutilizada;
- Token sem Actor/Actor arquivado não vaza estado;
- nenhum campo de efeito persistido no Token;
- nenhuma semântica concreta de Game System no módulo genérico;
- realtime por invalidação, sem polling;
- `npm run check:architecture`, `npm run test:unit` e `npm run build:web`.

Architecture debt introduced: **NO**.

## Dependências

- `QH-EFF-001` — persistência genérica no Actor;
- `QH-EFF-002` — autorização, ciclo de vida e realtime genéricos;
- `QH-EFF-009` — aplicação PF2e capaz de gerar instâncias reais para visualização;
- `ADR-0002` — Campaign como fronteira do mundo;
- `ADR-0003` — efeito pertence ao Actor, não ao membership;
- `ADR-0004` — independência Token/Actor;
- `ADR-0005` — VTT não interpreta Game System.

## Questões abertas

Nenhuma questão de produto bloqueia `READY`.
