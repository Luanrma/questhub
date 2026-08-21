# Feature Spec — Efeitos ativos na ficha

Status: **READY**

Card: `QH-EFF-003` — `https://trello.com/c/oWymYwLF/8-qh-eff-003-exibir-e-gerenciar-efeitos-ativos-na-ficha`
Dependências: `QH-EFF-001`, `QH-EFF-002`
Domínio: `VTT Core / Campaign Character Sheet Composition / CampaignActorEffect`

## Objetivo

Transformar a ficha de campanha no principal ponto de consulta e gerenciamento manual dos efeitos ativos do `CampaignActor`, consumindo exclusivamente o estado persistido por `CampaignActorEffect` e a API genérica entregue por `QH-EFF-002`.

A ficha não deve possuir uma cópia própria dos efeitos e o VTT Core não deve interpretar regras de Game System para apresentá-los.

## Escopo

- exibir um bloco persistente `Efeitos ativos` em fichas com apresentação `FULL`;
- manter o bloco visível ao navegar entre as páginas do renderer da ficha;
- listar múltiplos efeitos simultaneamente de forma compacta e sem rolagem horizontal;
- diferenciar visualmente `BENEFICIAL`, `HARMFUL` e `NEUTRAL` sem atribuir significado mecânico;
- exibir ícone, nome e `displayValue` quando disponíveis;
- abrir detalhes de um efeito;
- exibir descrição, categoria e origem apenas por apresentação genérica/resolvida, sem interpretar `payload` ou `origin` opacos no Core;
- Mestre pode criar, editar e remover efeitos manuais usando a API de `QH-EFF-002`;
- Player possui visualização somente leitura conforme a autorização de `QH-EFF-002`;
- atualizar a listagem ao receber `vtt:actor-effects:changed` e após reconexão;
- estender o contrato genérico de renderer para que o renderer informe ao Workspace o `actorId` da ficha sem o Workspace conhecer o schema do Game System;
- oferecer um contrato opcional de resolução visual por Game System para futuras apresentações de origem/ícone/resumo.

## Fora de escopo

- nova tabela, migration ou alteração em `CampaignActorEffect`;
- nova rota backend para efeitos;
- copiar efeitos para `CampaignCharacterSheet` ou para o JSON da ficha;
- efeitos na apresentação `SIMPLIFIED` de fichas de catálogo;
- indicadores sobre Token/VTT;
- catálogo PF2e de Conditions/Effects;
- resolver `origin`/`payload` PF2e nesta entrega;
- qualquer automação mecânica;
- alteração de HP/PV, CA, saves, atributos, rolagens, iniciativa ou outro valor da ficha;
- stacking, deduplicação ou duração automática;
- histórico de efeitos removidos;
- permitir Player criar, editar ou remover efeitos.

## Composição da ficha

O bloco de efeitos pertence ao Workspace genérico da ficha, não ao renderer concreto do Game System.

Fluxo conceitual:

```text
CampaignCharacterSheetWorkspace
  -> renderer registrado para a Campaign
  -> renderer resolve sua ficha e informa actorId por callback neutro
  -> Workspace monta ActorActiveEffectsPanel(actorId)
  -> painel lê/muta /api/campaigns/:campaignId/actors/:actorId/effects
```

O Workspace não lê a resposta específica de Pathfinder, D&D ou outro sistema.

### Extensão neutra do renderer

O contrato de renderer passa a aceitar:

```ts
type CharacterSheetRendererProps = {
  campaignId: string
  sheetId: string
  activePage: string
  presentation: 'FULL' | 'SIMPLIFIED'
  onActorResolved?: (actorId: string) => void
  // callbacks já existentes permanecem
}
```

Cada renderer concreto é responsável apenas por informar o `actorId` que já resolveu para sua própria ficha.

Isso não transfere ownership do efeito ao renderer: `CampaignActorEffect` continua pertencendo ao `CampaignActor`.

## Resolução visual opcional de Game System

O Composition Root de renderers pode registrar opcionalmente um resolver visual neutro:

```ts
type ActorEffectPresentation = {
  iconUrl?: string | null
  originLabel?: string | null
  summary?: string | null
}

type ActorEffectPresentationResolver = (
  effect: ActorEffectView,
) => ActorEffectPresentation | null
```

Regras:

- o Core continua exibindo os campos genéricos persistidos como fallback;
- o resolver pode somente produzir apresentação;
- o resolver não pode alterar o efeito persistido nem aplicar regra mecânica;
- o Core não inspeciona `origin` ou `payload` de namespaces externos para produzir significado;
- a origem manual criada pelo próprio Core (`questhub:manual-effects:v1`) pode ser apresentada como `Manual`;
- nenhum resolver PF2e concreto é necessário em `QH-EFF-003`; isso fica para os cards de conteúdo/integração do épico.

## Layout e comportamento visual

### Posição

Em apresentação `FULL`, o bloco fica dentro da janela da ficha, abaixo do cabeçalho/navegação e antes da área rolável da página do Game System.

Consequências:

- permanece visível ao mudar de página;
- não participa da rolagem horizontal;
- não exige uma nova aba;
- não obriga o renderer do Game System a conhecer o componente.

### Estado compacto

O bloco deve ocupar pouco espaço vertical:

- cabeçalho compacto com `Efeitos ativos`, quantidade e ação de adicionar para Mestre;
- efeitos apresentados como chips/cards compactos com `flex-wrap`;
- nenhuma rolagem horizontal própria;
- exibir até 6 efeitos no resumo persistente;
- quando houver mais de 6, mostrar `+N`/`Ver todos` que abre a lista completa em detalhe;
- ausência de efeitos exibe `Nenhum efeito ativo` sem criar um painel alto vazio.

### Conteúdo do chip

Cada item compacto mostra:

- ícone persistido/resolvido ou fallback genérico;
- nome;
- `displayValue`, quando presente;
- distinção visual da polaridade.

A polaridade é exclusivamente apresentação genérica; não altera cálculo ou comportamento da ficha.

### Detalhes

Clicar em um efeito abre um detalhe dentro da experiência da ficha contendo, quando disponíveis:

- ícone;
- nome;
- polaridade;
- `displayValue`;
- descrição ou resumo resolvido;
- categoria;
- origem apresentada por resolver visual ou `Manual` quando for origem do Core.

`payload` e `origin` brutos não são renderizados como JSON ao usuário.

## Gerenciamento manual

### Criar

Somente Mestre visualiza a ação `Adicionar efeito`.

O formulário usa exclusivamente campos aceitos pelo POST de `QH-EFF-002`:

- nome;
- descrição;
- ícone URL;
- polaridade;
- categoria;
- valor de exibição.

O frontend não envia `namespace`, `definitionKey`, `schemaVersion`, `payload` ou `origin`.

### Editar

Somente Mestre pode editar:

- nome;
- descrição;
- ícone URL;
- polaridade;
- categoria;
- valor de exibição.

O frontend não oferece edição de identidade/opacos.

### Remover

Somente Mestre pode remover.

A remoção exige confirmação explícita na UI e utiliza DELETE de `QH-EFF-002`.

## Permissões

O frontend usa o papel da Campaign apenas para decidir se exibe controles de mutação.

A segurança continua sendo responsabilidade do backend.

- `MASTER`: leitura + controles de criação/edição/remoção;
- `PLAYER`: somente leitura;
- qualquer tentativa não autorizada continua sujeita a `403` da API.

O componente não usa presença de Token como requisito de leitura.

## Dados e sincronização

Fonte de verdade:

```text
CampaignActorEffect[] do CampaignActor
```

Leitura:

```http
GET /api/campaigns/:campaignId/actors/:actorId/effects
```

Mutações:

```http
POST   /api/campaigns/:campaignId/actors/:actorId/effects
PATCH  /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
DELETE /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
```

O frontend deve:

- carregar quando `campaignId` + `actorId` estiverem disponíveis;
- refazer a leitura quando receber `vtt:actor-effects:changed` para o mesmo Campaign/Actor;
- refazer a leitura após reconexão do socket;
- refazer a leitura após mutação bem-sucedida caso a invalidação ainda não tenha sido processada;
- ignorar eventos de outra Campaign ou outro Actor.

Não usar polling periódico.

## Estados de UI

### Actor ainda não resolvido

O bloco não é montado até o renderer informar `actorId`.

### Loading

Mostrar skeleton/estado compacto sem deslocamento visual excessivo.

### Vazio

Mostrar `Nenhum efeito ativo`.

### Erro de leitura

Mostrar erro compacto com ação `Tentar novamente`.

### Erro de mutação

Manter o estado atual e mostrar mensagem de falha sem aplicar alteração otimista falsa.

## Regras

1. A ficha nunca é fonte de verdade dos efeitos.
2. O bloco é persistente entre páginas da ficha `FULL`.
3. O Core não interpreta Conditions ou regras concretas.
4. O Core não renderiza `origin`/`payload` opacos diretamente.
5. O renderer concreto informa apenas `actorId` por contrato neutro.
6. O resolver visual opcional não pode executar automação mecânica.
7. A UI não cria deduplicação ou stacking.
8. Dois efeitos iguais continuam aparecendo como duas instâncias.
9. O Player não recebe controles de mutação.
10. A ausência de controles no frontend não substitui autorização backend.
11. Não existe rolagem horizontal no bloco de efeitos.
12. O painel não altera a página ativa nem os dados mecânicos do renderer.

## Critérios de aceite

### AC-01 — Fonte de verdade no Actor

A ficha lê os efeitos pela API de `CampaignActorEffect`; nenhuma cópia é persistida na ficha.

### AC-02 — Bloco persistente

Na apresentação `FULL`, `Efeitos ativos` permanece visível ao navegar entre páginas da ficha.

### AC-03 — Actor resolvido genericamente

O Workspace recebe `actorId` pelo contrato neutro do renderer e não conhece o schema específico do Game System.

### AC-04 — Múltiplos efeitos

Até 6 efeitos são apresentados simultaneamente no resumo compacto; excedentes são acessíveis por `Ver todos` sem rolagem horizontal.

### AC-05 — Polaridade genérica

BENEFICIAL/HARMFUL/NEUTRAL possuem diferenciação visual sem consequência mecânica.

### AC-06 — Estado vazio e erro

Ausência de efeitos e falha de leitura possuem estados claros e compactos.

### AC-07 — Detalhes

Usuário pode abrir detalhes de uma instância sem renderizar `payload`/`origin` bruto.

### AC-08 — Mestre gerencia manualmente

Mestre consegue criar, editar e remover efeitos pelos contratos de `QH-EFF-002`.

### AC-09 — Player somente leitura

Player não recebe controles de mutação e continua protegido pela autorização backend.

### AC-10 — Sem spoofing

Formulários não permitem enviar ou editar namespace, definitionKey, schemaVersion, payload ou origin.

### AC-11 — Realtime

Alteração bem-sucedida em outra sessão é refletida após `vtt:actor-effects:changed` sem polling periódico.

### AC-12 — Duplicidade preservada

Duas instâncias iguais aparecem separadamente.

### AC-13 — Resolver visual agnóstico

O contrato aceita presentation resolver por Game System sem importar ou nomear PF2e no componente Core.

### AC-14 — Ficha simplificada fora de escopo

Apresentação `SIMPLIFIED` mantém o comportamento atual e não monta o bloco de efeitos.

### AC-15 — Sem automação mecânica

Nenhuma interação do bloco altera HP, CA, saves, atributos, rolagens, Token ou o JSON mecânico da ficha.

## Testes esperados

- contrato do renderer expõe `onActorResolved` sem campo específico de Game System;
- Pathfinder renderer atual informa `metadata.actorId` pelo callback sem o Workspace interpretar a resposta PF2e;
- painel não monta em `SIMPLIFIED`;
- limite visual de 6 + `Ver todos`;
- estado vazio/loading/error;
- estilos/labels das três polaridades;
- matriz de controles Mestre/Player;
- POST/PATCH não enviam campos opacos;
- confirmação + DELETE;
- realtime recarrega somente Campaign/Actor correspondente;
- reconexão recarrega;
- teste estrutural garantindo ausência de `PATHFINDER`, `PF2E`, `Condition`, `Frightened`, `Spell` no módulo genérico;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0005`
- [ ] Exige novo ADR

Architecture Review required: **YES**, porque a entrega amplia o contrato de composição entre Workspace genérico e renderer de Game System.

## Questões abertas

Nenhuma questão de produto bloqueante para `QH-EFF-003`.
