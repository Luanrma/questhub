# Feature Spec — Refinar UX e sincronização dos Active Effects no VTT

Status: **READY**

Card: `QH-EFF-011` — `https://trello.com/c/awMFQmxe/16-qh-eff-011-refinar-ux-e-sincroniza%C3%A7%C3%A3o-dos-active-effects-no-vtt`  
Dependências: `QH-EFF-002`, `QH-EFF-009`, `QH-EFF-010`  
Domínio: `VTT Core / CampaignActorEffect / CampaignToken presentation`

## Objetivo

Refinar a experiência visual e a sincronização dos Active Effects já projetados sobre Tokens, sem reabrir ou redefinir `QH-EFF-010`.

A feature deve corrigir a posição dos indicadores, garantir atualização imediata após mutações, melhorar o comportamento da visão expandida, adicionar detalhe por instância e simplificar a criação manual de efeitos.

## Contexto

`QH-EFF-010` introduziu a projeção genérica `CampaignActorEffect[] -> CampaignToken` e os indicadores compactos no VTT. O comportamento estrutural permanece válido: o efeito pertence ao Actor, o Token não persiste cópia, o VTT não interpreta regras de Game System e a leitura continua autenticada.

O feedback de uso identificou problemas de UX e sincronização:

- os badges de efeito aparecem entre o Token e a barra de recurso/vida;
- mutações feitas no mesmo cliente podem exigir reload de página para refletir no Token;
- a visão expandida não fecha ao clicar fora;
- os itens da visão expandida não possuem drill-down próprio;
- a criação manual expõe um campo de URL de ícone pouco prático.

## Escopo

### 1. Posicionamento visual

- Active Effects ficam acima do Token;
- barras de recurso permanecem abaixo do Token;
- outros indicadores genéricos já existentes podem compartilhar a faixa superior sem sobrepor o Token;
- badges e popovers não alteram posição lógica, tamanho, hitbox, rotação, seleção, targeting ou movimento do Token.

### 2. Invalidação imediata no mesmo cliente

- criar, editar ou remover um `CampaignActorEffect` deve refletir no Token sem reload da página;
- o evento Socket.IO `vtt:actor-effects:changed` continua sendo a invalidação compartilhada entre clientes;
- o frontend deve também emitir uma invalidação local após mutação bem-sucedida para que componentes do mesmo cliente recarreguem a projeção mesmo quando o socket ainda não estiver inscrito/entregue;
- a invalidação local não transporta o novo estado e não é fonte de verdade: ela apenas dispara nova leitura autenticada da API;
- reconexão continua recarregando a projeção;
- polling periódico continua proibido.

### 3. Visão expandida / popover

- clicar no agrupamento de badges abre a visão expandida;
- clicar fora da superfície fecha a visão expandida;
- clicar novamente no acionador pode fechá-la;
- cliques/pointer events dentro da superfície não devem acionar o canvas ou o Token;
- a superfície continua somente leitura.

### 4. Detalhe de uma instância

- cada instância listada na visão expandida é clicável;
- clicar em uma instância abre uma superfície/modal de detalhe próprio;
- o detalhe pode mostrar somente campos genéricos de apresentação: nome, ícone/fallback, `displayValue`, polaridade, categoria e descrição quando disponíveis;
- `payload`, `origin`, `namespace`, `definitionKey` e demais dados opacos não são renderizados no VTT Core;
- o detalhe não executa aplicação, remoção, edição ou automação mecânica;
- o formato deve continuar útil quando a instância tiver sido originada no futuro por Spell, Item, Creature, Hazard ou outra fonte, sem o VTT interpretar essa origem.

### 5. Criação/edição manual

- remover o campo de URL manual de ícone da experiência de criação/edição;
- efeitos manuais novos persistem `iconUrl = null` e usam o fallback visual genérico existente;
- o fallback visual pode variar pela polaridade genérica (`BENEFICIAL`, `HARMFUL`, `NEUTRAL`), sem semântica de ruleset;
- efeitos já existentes ou originados por Game System que possuam `iconUrl` continuam exibindo esse ícone;
- editar um efeito existente pela UI manual não deve apagar um `iconUrl` já persistido apenas porque o campo deixou de ser editável;
- não criar upload, catálogo ou seletor específico de Game System neste card.

## Fora de escopo

- reabrir ou alterar os critérios históricos de `QH-EFF-010`;
- mudar ownership de `CampaignActorEffect`;
- criar estado de efeitos no `CampaignToken`;
- nova tabela, migration ou schema;
- novo endpoint HTTP;
- alterar autorização de leitura/escrita de `QH-EFF-002`;
- interpretar `payload`, `origin`, `namespace` ou `definitionKey` no VTT;
- mostrar regras concretas de PF2e, D&D ou outro Game System;
- duration/stacking/expiração;
- automação de HP, CA, saves, atributos, rolagens, ações ou combate;
- selecionar ícones por catálogo de Game System;
- alterar a engine/provedor de Token Presentation concreto.

## Permissões

Nenhuma política nova.

- leitura continua regida por `canReadActorEffects` de `QH-EFF-002`;
- criação/edição/remoção continuam permitidas somente para `MASTER` conforme `QH-EFF-002`;
- o detalhe no VTT mostra apenas instâncias já retornadas pela projeção autenticada;
- frontend continua não sendo fronteira de segurança.

## Contratos

### HTTP

Nenhum endpoint novo.

Leitura do Token:

```http
GET /api/campaigns/:campaignId/tokens/:tokenId/actor-effects
```

Mutações existentes:

```http
POST   /api/campaigns/:campaignId/actors/:actorId/effects
PATCH  /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
DELETE /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
```

### Realtime / invalidação

Contrato compartilhado existente:

```text
vtt:actor-effects:changed
{ campaignId, actorId }
```

Adicionar no frontend um sinal local de invalidação, namespaced e tipado, contendo apenas:

```ts
{ campaignId: string; actorId: string }
```

Esse sinal não substitui Socket.IO nem altera contrato backend; ele serve somente para sincronizar componentes React do mesmo documento após mutação local bem-sucedida.

## Estados de UI

### Indicadores

- zero efeitos: nada acima do Token;
- 1–3 efeitos: badges compactos acima do Token;
- 4+ efeitos: três badges + `+N` acima do Token;
- recursos/barras: abaixo do Token.

### Popover

- fechado por padrão;
- abre por clique no agrupamento;
- fecha por clique fora;
- abrir detalhe fecha/oculta a lista expandida enquanto o modal de detalhe está ativo.

### Detalhe

- somente leitura;
- backdrop/camada própria sobre o VTT;
- fecha por ação explícita ou clique no backdrop;
- ao fechar, retorna para a visão expandida da lista de efeitos;
- não abre ficha automaticamente.

### Modal manual

- nome obrigatório;
- polaridade obrigatória;
- `displayValue`, categoria e descrição continuam opcionais;
- nenhum campo de URL de ícone;
- exibir uma pequena prévia/fallback do ícone genérico derivado apenas da polaridade.

## Regras

1. `CampaignActorEffect` continua sendo a única fonte de verdade.
2. Invalidação local e Socket.IO apenas provocam reload da API.
3. Active Effects ficam visualmente acima do Token e recursos abaixo.
4. Popover não permanece aberto após clique fora.
5. Cada instância da lista pode ser inspecionada individualmente.
6. O detalhe usa apenas campos genéricos de apresentação.
7. Nenhum campo opaco é interpretado/renderizado pelo VTT Core.
8. Remover o input de ícone não apaga ícones persistidos de efeitos existentes durante edição.
9. Novo efeito manual não exige URL e usa fallback genérico.
10. Nenhuma ação desta feature altera estado mecânico.
11. Nenhuma regra concreta de Game System entra no VTT Core.
12. `QH-EFF-010` permanece fechado e sua Feature Spec não é reescrita para absorver este refinamento.

## Critérios de aceite

### AC-01 — Efeitos acima do Token
Dado um Token com Active Effects, os badges aparecem acima da arte do Token e não entre a arte e as barras de recurso.

### AC-02 — Recursos abaixo
Dado um Token com recursos e efeitos, as barras permanecem abaixo do Token e visualmente separadas dos badges.

### AC-03 — Create sem reload
Ao criar manualmente um efeito com sucesso, o Token correspondente reflete a nova instância no mesmo cliente sem reload de página.

### AC-04 — Edit sem reload
Ao editar um efeito com sucesso, o Token correspondente reflete a apresentação atualizada no mesmo cliente sem reload de página.

### AC-05 — Delete sem reload
Ao remover um efeito com sucesso, o indicador desaparece do Token correspondente no mesmo cliente sem reload de página.

### AC-06 — Realtime compartilhado preservado
Outro cliente conectado continua recebendo `vtt:actor-effects:changed` e recarregando a projeção pela API.

### AC-07 — Clique fora fecha
Com a visão expandida aberta, clicar fora da superfície fecha o popover sem acionar uma ação de Token/canvas.

### AC-08 — Detalhe individual
Na visão expandida, clicar em uma instância abre um detalhe próprio daquela instância e, ao fechá-lo, retorna para a lista expandida de efeitos.

### AC-09 — Campos do detalhe
O detalhe mostra apenas campos genéricos de apresentação e nunca expõe `payload`, `origin`, `namespace` ou `definitionKey` brutos.

### AC-10 — Criação sem URL
O modal manual não possui campo de URL de ícone e permite salvar um efeito sem configurar ícone.

### AC-11 — Fallback genérico
Efeito manual sem `iconUrl` possui fallback visual genérico; a diferenciação pode usar somente a polaridade genérica.

### AC-12 — Ícone existente preservado
Editar pela UI um efeito que já possui `iconUrl` não remove esse valor implicitamente.

### AC-13 — Interações do Token preservadas
Seleção, targeting, movimento, rotação, resize e demais interações existentes não são alterados pelos badges/popover/modal.

### AC-14 — VTT agnóstico
Os módulos genéricos alterados não contêm nomes/regras concretas de Pathfinder ou outro Game System.

### AC-15 — Sem automação mecânica
Nenhuma interação deste card altera HP, CA, saves, atributos, rolagens, combate ou estado mecânico.

## Testes esperados

- teste estrutural do overlay confirma faixa superior para efeitos e `top-full`/equivalente para recursos;
- teste do hook confirma invalidação por Socket.IO, sinal local e reconnect, sem polling;
- teste do painel confirma emissão do sinal local após POST/PATCH/DELETE bem-sucedido;
- teste visual/estrutural confirma ausência de input `URL do ícone`;
- teste confirma preservação de `iconUrl` existente em PATCH;
- teste confirma popover controlado e fechamento por outside click;
- teste confirma item clicável e modal de detalhe;
- teste confirma ausência de renderização dos campos opacos no detalhe;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0004`, `ADR-0005`
- [ ] Exige novo ADR

Possível impacto: apenas apresentação e invalidação frontend dentro de contratos já existentes. Nenhuma nova dependência estrutural, persistência, regra de autorização ou fronteira VTT/Game System é proposta.

## Dependências

- `QH-EFF-002` — API/autorização genérica de Active Effects;
- `QH-EFF-009` — aplicação/remoção PF2e que produz instâncias genéricas;
- `QH-EFF-010` — projeção dos Active Effects sobre Token/VTT;
- `ADR-0004` — independência Token/Actor;
- `ADR-0005` — fronteira VTT/Game System.

## Questões abertas

Nenhuma questão de produto bloqueante para este escopo.
