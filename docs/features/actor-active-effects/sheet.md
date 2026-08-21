# Feature Spec — Efeitos ativos na ficha

Status: **READY**

Card: `QH-EFF-003` — `https://trello.com/c/oWymYwLF/8-qh-eff-003-exibir-e-gerenciar-efeitos-ativos-na-ficha`
Dependências: `QH-EFF-001`, `QH-EFF-002`
Domínio: `VTT Core / Campaign Character Sheet Composition / CampaignActorEffect`

## Objetivo

Transformar a ficha de campanha no principal ponto de consulta e gerenciamento manual dos efeitos ativos do `CampaignActor`, consumindo exclusivamente o estado persistido por `CampaignActorEffect` e a API genérica entregue por `QH-EFF-002`.

A ficha não possui cópia própria dos efeitos e o VTT Core não interpreta regras de Game System para apresentá-los.

## Escopo

- exibir um bloco persistente `Efeitos ativos` em fichas com apresentação `FULL`;
- manter o bloco visível ao navegar entre páginas do renderer;
- listar múltiplos efeitos de forma compacta e sem rolagem horizontal;
- diferenciar visualmente `BENEFICIAL`, `HARMFUL` e `NEUTRAL` sem consequência mecânica;
- exibir ícone, nome e `displayValue` quando disponíveis;
- abrir detalhes do efeito sem expor `payload`/`origin` brutos;
- Mestre cria, edita e remove efeitos manuais usando a API de `QH-EFF-002`;
- Player possui visualização somente leitura conforme `QH-EFF-002`;
- atualizar a listagem após `vtt:actor-effects:changed` e após reconexão;
- resolver genericamente `sheetId -> actorId` no VTT Core;
- oferecer contrato opcional de resolução visual por Game System para origem/ícone/resumo futuros.

## Fora de escopo

- nova tabela, migration ou alteração em `CampaignActorEffect`;
- nova rota de efeitos além das entregues por `QH-EFF-002`;
- copiar efeitos para `CampaignCharacterSheet` ou para JSON da ficha;
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
CampaignCharacterSheetWorkspace(sheetId)
  -> VTT Core resolve CampaignCharacterSheet.actorId
  -> Workspace monta ActorActiveEffectsPanel(actorId)
  -> painel lê/muta /api/campaigns/:campaignId/actors/:actorId/effects
  -> renderer do Game System continua independente
```

O Workspace não lê resposta específica de Pathfinder, D&D ou outro sistema.

## Contexto genérico da ficha

O Core expõe um contrato mínimo para resolver a relação estrutural que ele já possui:

```http
GET /api/campaigns/:campaignId/character-sheets/:sheetId/context
```

Resposta:

```ts
type CharacterSheetActorContext = {
  sheetId: string
  actorId: string
}
```

Regras:

- autenticação obrigatória;
- membership deve estar `ACTIVE`;
- `sheetId` deve pertencer a Actor da mesma Campaign;
- Actor arquivado é tratado como indisponível;
- `MASTER` pode resolver qualquer ficha ativa da Campaign;
- `PLAYER` pode resolver somente ficha de Actor cujo `controllerMemberId` seja seu membership;
- autorização usa a mesma política estrutural de leitura dos efeitos de `QH-EFF-002`;
- IDs de outra Campaign não são revelados;
- endpoint não retorna dados mecânicos da ficha nem informação de Game System.

Este endpoint é contexto de composição de ficha, não uma segunda API de efeitos.

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

- o Core usa os campos genéricos persistidos como fallback;
- o resolver produz somente apresentação;
- o resolver não altera persistência nem aplica regra mecânica;
- o Core não interpreta `origin` ou `payload` de namespaces externos;
- a origem manual criada pelo próprio Core (`questhub:manual-effects:v1`) pode ser apresentada como `Manual`;
- nenhum resolver PF2e concreto é necessário em `QH-EFF-003`.

## Layout e comportamento visual

### Posição

Em apresentação `FULL`, o bloco fica dentro da janela da ficha, abaixo do cabeçalho/navegação e antes da área rolável da página do Game System.

Consequências:

- permanece visível ao mudar de página;
- não possui rolagem horizontal própria;
- não exige nova aba;
- renderer do Game System não conhece o componente.

### Estado compacto

- cabeçalho compacto com `Efeitos ativos`, quantidade e ação de adicionar para Mestre;
- efeitos em chips/cards compactos com `flex-wrap`;
- exibir até 6 efeitos no resumo persistente;
- excedentes aparecem por `+N Ver todos` em detalhe;
- ausência de efeitos mostra `Nenhum efeito ativo` sem painel alto vazio.

### Conteúdo do chip

- ícone persistido/resolvido ou fallback genérico;
- nome;
- `displayValue`, quando presente;
- distinção visual da polaridade.

### Detalhes

Clicar em uma instância abre detalhe com, quando disponíveis:

- ícone;
- nome;
- polaridade;
- `displayValue`;
- descrição ou resumo resolvido;
- categoria;
- origem apresentada por resolver visual ou `Manual` quando for origem do Core.

`payload` e `origin` brutos nunca são renderizados como JSON para o usuário.

## Gerenciamento manual

### Criar

Somente Mestre vê `Adicionar efeito`.

O formulário envia somente:

- nome;
- descrição;
- ícone URL;
- polaridade;
- categoria;
- valor de exibição.

Não envia `namespace`, `definitionKey`, `schemaVersion`, `payload` ou `origin`.

### Editar

Somente Mestre edita os mesmos campos genéricos de apresentação aceitos por `QH-EFF-002`.

### Remover

Somente Mestre pode remover; a UI exige confirmação explícita antes do DELETE.

## Permissões

O frontend usa o papel da Campaign somente para mostrar/ocultar controles de mutação. Segurança continua no backend.

- `MASTER`: leitura + controles de criação/edição/remoção;
- `PLAYER`: somente leitura;
- requisições não autorizadas continuam sujeitas a `403`.

Token não é requisito de leitura.

## Dados e sincronização

Fonte de verdade:

```text
CampaignActorEffect[] do CampaignActor
```

Leitura/mutação:

```http
GET    /api/campaigns/:campaignId/actors/:actorId/effects
POST   /api/campaigns/:campaignId/actors/:actorId/effects
PATCH  /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
DELETE /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
```

O frontend:

- resolve `actorId` pelo contexto genérico da ficha;
- carrega quando `campaignId + actorId` estiverem disponíveis;
- recarrega quando receber `vtt:actor-effects:changed` para o mesmo Campaign/Actor;
- recarrega após reconexão;
- recarrega após mutação bem-sucedida caso a invalidação ainda não tenha sido processada;
- ignora eventos de outra Campaign ou Actor;
- não usa polling periódico.

## Estados de UI

- contexto da ficha carregando: bloco ainda não é montado;
- efeitos carregando: skeleton compacto;
- vazio: `Nenhum efeito ativo`;
- erro de leitura: mensagem compacta + `Tentar novamente`;
- erro de mutação: mantém estado atual e mostra falha sem atualização otimista falsa.

## Regras

1. A ficha nunca é fonte de verdade dos efeitos.
2. O bloco é persistente entre páginas da ficha `FULL`.
3. O Core não interpreta Conditions ou regras concretas.
4. O Core não renderiza `origin`/`payload` opacos diretamente.
5. A relação `CampaignCharacterSheet -> CampaignActor` é resolvida pelo Core, não pelo renderer concreto.
6. O resolver visual opcional não executa automação mecânica.
7. A UI não cria deduplicação ou stacking.
8. Duas instâncias iguais continuam separadas.
9. Player não recebe controles de mutação.
10. Ocultar controles no frontend não substitui autorização backend.
11. Não existe rolagem horizontal no bloco.
12. O painel não altera página ativa nem dados mecânicos do renderer.

## Critérios de aceite

### AC-01 — Fonte de verdade no Actor
A ficha lê efeitos pela API de `CampaignActorEffect`; nenhuma cópia é persistida na ficha.

### AC-02 — Bloco persistente
Na apresentação `FULL`, `Efeitos ativos` permanece visível ao navegar entre páginas.

### AC-03 — Actor resolvido pelo Core
Workspace resolve `actorId` por contrato genérico de contexto da ficha e o renderer de Game System não participa.

### AC-04 — Isolamento do contexto
Contexto valida Campaign, Actor ativo e permissões de Mestre/controlador sem revelar IDs de outra Campaign.

### AC-05 — Múltiplos efeitos
Até 6 efeitos aparecem simultaneamente; excedentes são acessíveis por `Ver todos` sem rolagem horizontal.

### AC-06 — Polaridade genérica
BENEFICIAL/HARMFUL/NEUTRAL possuem diferenciação visual sem consequência mecânica.

### AC-07 — Estado vazio e erro
Ausência de efeitos e falha de leitura possuem estados claros e compactos.

### AC-08 — Detalhes
Usuário abre detalhes sem renderizar `payload`/`origin` bruto.

### AC-09 — Mestre gerencia manualmente
Mestre cria, edita e remove efeitos pelos contratos do `QH-EFF-002`.

### AC-10 — Player somente leitura
Player não recebe controles de mutação e continua protegido pela autorização backend.

### AC-11 — Sem spoofing
Formulários não enviam/editam namespace, definitionKey, schemaVersion, payload ou origin.

### AC-12 — Realtime
Alteração em outra sessão é refletida após `vtt:actor-effects:changed` sem polling.

### AC-13 — Duplicidade preservada
Duas instâncias iguais aparecem separadamente.

### AC-14 — Resolver visual agnóstico
Composition Root aceita presentation resolver por Game System sem PF2e no componente Core.

### AC-15 — Ficha simplificada fora de escopo
`SIMPLIFIED` mantém comportamento atual e não monta o bloco.

### AC-16 — Sem automação mecânica
Nenhuma interação altera HP, CA, saves, atributos, rolagens, Token ou JSON mecânico da ficha.

## Testes esperados

- contexto da ficha valida membership, Campaign, Actor ativo e controlador;
- contexto não retorna dados de Game System;
- Workspace monta painel apenas em `FULL` e após resolver actorId;
- limite visual 6 + `Ver todos`;
- vazio/loading/error;
- três polaridades;
- controles Mestre/Player;
- POST/PATCH sem campos opacos;
- confirmação + DELETE;
- realtime filtra Campaign/Actor e reconnect recarrega;
- ausência de polling;
- resolver visual opcional sem PF2e no módulo Core;
- teste estrutural sem `PATHFINDER`, `PF2E`, `Condition`, `Frightened`, `Spell` em `vtt/actor-effects`;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0005`
- [ ] Exige novo ADR

Architecture Review: **APPROVED**. O refinamento para resolver `actorId` no próprio Core reduz acoplamento e permanece coberto pelos ADRs vigentes.

## Questões abertas

Nenhuma questão de produto bloqueante para `QH-EFF-003`.
