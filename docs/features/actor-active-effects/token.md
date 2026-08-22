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
- consumir exclusivamente a API genérica de `CampaignActorEffect` de `QH-EFF-002`;
- exibir até 3 instâncias no resumo do Token e representar excedentes como `+N`;
- diferenciar visualmente `BENEFICIAL`, `HARMFUL` e `NEUTRAL`;
- exibir ícone persistido quando disponível e fallback genérico quando ausente;
- exibir `displayValue` quando presente sem interpretá-lo matematicamente;
- permitir abrir detalhes compactos de todos os efeitos sem abrir a ficha;
- atualizar indicadores após `vtt:actor-effects:changed` e reconexão;
- reutilizar as permissões de leitura já definidas em `QH-EFF-002`;
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
CampaignToken.actorId?
  -> CampaignActor
  -> GET /api/campaigns/:campaignId/actors/:actorId/effects
  -> representação visual genérica no Token
```

Regras:

- `CampaignToken.actorId = null`: não existe projeção de efeitos ativos;
- Token vinculado não recebe cópia de `CampaignActorEffect`;
- desvincular o Token faz os indicadores desaparecerem sem alterar o Actor ou seus efeitos;
- remover o Token não remove o Actor nem seus efeitos;
- o mesmo estado continua visível na ficha por `QH-EFF-003`.

## Permissões e visibilidade

Esta feature não cria política nova de leitura. Ela reutiliza a autorização de `QH-EFF-002`:

- `MASTER`: pode consultar os efeitos de qualquer Actor ativo da própria Campaign;
- `PLAYER`: pode consultar os efeitos de Actor ativo cujo `controllerMemberId` seja seu membership;
- Actor arquivado, Actor de outra Campaign ou Actor sem permissão continua indisponível pela API;
- o frontend pode evitar requisições obviamente não permitidas para reduzir ruído, mas o backend permanece a fronteira de segurança;
- a visibilidade normal do próprio Token continua sendo responsabilidade do VTT; um Token oculto que não é renderizado para o Player não pode vazar seus efeitos por esta UI.

## Layout e comportamento visual

### Resumo no Token

Os indicadores ficam visualmente associados ao Token, sem alterar o tamanho lógico, posição, hitbox ou rotação do Token.

- até 3 efeitos são mostrados como badges compactos;
- cada badge prioriza o ícone persistido;
- sem ícone, usa fallback visual genérico;
- `displayValue`, quando presente, aparece como pequena marca textual no badge;
- efeitos excedentes aparecem como `+N`;
- a ordem é a mesma da listagem genérica de efeitos (`createdAt`, `id`), sem priorização mecânica;
- os badges não alteram seleção, targeting, movimento, resize, rotação ou iniciativa.

### Polaridade

A distinção é apenas visual:

- `BENEFICIAL`: tom positivo;
- `HARMFUL`: tom de alerta/prejudicial;
- `NEUTRAL`: tom neutro.

Nenhuma cor ou polaridade gera consequência mecânica.

### Detalhes

Ao clicar no agrupamento de indicadores, abre-se uma superfície compacta ancorada ao Token contendo todos os efeitos legíveis do Actor.

Para cada instância, podem ser mostrados:

- ícone ou fallback;
- nome;
- `displayValue`;
- polaridade;
- descrição, quando disponível;
- categoria, quando disponível.

Não mostrar:

- `payload` bruto;
- `origin` bruto;
- `namespace` como informação de usuário;
- `definitionKey` como informação de usuário.

O detalhe é somente leitura e não abre a ficha automaticamente.

## Integração com a apresentação atual do Token

`TokenPresentationOverlay` continua responsável por recursos/indicadores produzidos pelo contrato de automação de Game System já existente.

Os indicadores desta feature pertencem ao estado genérico de `CampaignActorEffect` e são compostos separadamente no VTT Core. Eles não devem ser injetados em uma engine concreta nem exigir que um `GameSystemTokenPresentationProvider` conheça o serviço de Active Effects.

Consequências:

- a engine concreta continua sem importar `apps/api/src/modules/**`;
- a representação de `CampaignActorEffect` funciona mesmo sem interpretar uma ficha mecânica;
- nenhuma semântica PF2e é adicionada a `BoardOverlays`, `TokenPresentationOverlay` ou ao contrato genérico do Token;
- ícones/nome/descrição produzidos por um Game System podem chegar ao Token porque já foram persistidos nos campos genéricos do efeito.

## Dados e sincronização

Leitura reutilizada:

```http
GET /api/campaigns/:campaignId/actors/:actorId/effects
```

Evento reutilizado:

```text
vtt:actor-effects:changed
{ campaignId, actorId }
```

O frontend:

- carrega somente quando existem `campaignId`, `actorId` e permissão estrutural conhecida para a visualização;
- ignora evento de outra Campaign ou Actor;
- recarrega após evento correspondente;
- recarrega após reconexão;
- não usa polling periódico;
- falha de leitura não cria badge falso nem mantém estado otimista inventado.

## Estados de UI

- Token sem Actor: nenhum indicador;
- Actor sem efeitos: nenhum indicador;
- carregando: não bloqueia o Token nem cria skeleton sobre o canvas;
- leitura negada/erro: nenhum conteúdo sensível é exibido; o Token continua funcional;
- 1–3 efeitos: badges individuais;
- 4+ efeitos: três badges + `+N`;
- detalhe aberto: lista todas as instâncias retornadas pela API, sem deduplicação.

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
Dado `actorId = null`, o Token continua funcionando e nenhum indicador de efeito é mostrado.

### AC-03 — Múltiplos efeitos compactos
Dado um Actor com até 3 efeitos, cada instância aparece no resumo do Token; com mais de 3, o resumo mostra três badges e `+N`.

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
Actor de outra Campaign, arquivado ou inacessível não projeta efeitos para o usuário.

### AC-12 — Realtime
Criação/remoção/alteração de efeito refletida após `vtt:actor-effects:changed`, sem polling.

### AC-13 — Desvinculação
Ao desvincular o Token do Actor, os indicadores desaparecem sem remover ou alterar os efeitos do Actor.

### AC-14 — Interações do Token preservadas
Selecionar, mover, redimensionar, girar, marcar alvo e usar overlays existentes continua independente dos indicadores.

### AC-15 — VTT agnóstico
O código genérico do Token/indicadores não contém regra ou nome concreto de Game System.

### AC-16 — Sem automação mecânica
Exibir ou consultar indicadores não altera ficha, HP, CA, saves, atributos, rolagens, ações, combate ou estado mecânico do Token.

## Testes esperados

- overlay não monta conteúdo quando `actorId` é nulo;
- resumo limita a 3 + `+N` sem deduplicar;
- polaridades genéricas possuem apresentação distinta;
- `displayValue` é exibido como texto;
- detalhe não renderiza campos opacos;
- leitura reutiliza `/actors/:actorId/effects`;
- Player não solicita/renderiza indicadores de Token cujo Actor não controla quando isso é conhecido no frontend, mantendo backend como enforcement;
- evento `vtt:actor-effects:changed` atualiza o Actor correspondente;
- Token presentation existente continua montado;
- teste estrutural sem `PATHFINDER`, `PF2E`, `Frightened`, `Spell` ou `Condition` concreta no módulo genérico;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0004`, `ADR-0005`
- [ ] Exige novo ADR

A feature projeta estado pertencente ao Actor sobre uma representação visual independente. Isso é explicitamente compatível com ADR-0004, que permite informação mecânica/semântica chegar ao Token por contratos/projeções genéricas sem transferir ownership ao Token.

Architecture Review: **PENDING**.

## Dependências

- `QH-EFF-001` — persistência genérica no Actor;
- `QH-EFF-002` — API, autorização e realtime genéricos;
- `QH-EFF-009` — aplicação PF2e capaz de gerar instâncias reais para visualização;
- `ADR-0002` — Campaign como fronteira do mundo;
- `ADR-0003` — efeito pertence ao Actor, não ao membership;
- `ADR-0004` — independência Token/Actor;
- `ADR-0005` — VTT não interpreta Game System.

## Questões abertas

Nenhuma questão de produto bloqueia `READY`.
