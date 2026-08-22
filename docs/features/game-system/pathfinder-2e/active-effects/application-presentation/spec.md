# QH-EFF-014 — Aplicação e apresentação fiel de Active Effects PF2e

Status: **IMPLEMENTATION CONTRACT**

Domínio: `Game System / Pathfinder 2e / Active Effects`

Dependência: **QH-EFF-013**. O catálogo consultável está em `main` antes deste card.

## Objetivo

Garantir que uma definição PF2e escolhida no catálogo produza uma instância `CampaignActorEffect` cuja apresentação preserve nome, descrição editorial, ícone/fallback, polaridade, categoria e valor aplicável, atualizando ficha e Token imediatamente e sem executar mecânica PF2e.

## Fluxo aprovado

```text
QH-EFF-013 Active Effect Definition
        ↓ definitionKey
PF2e effect application resolver
        ↓ resolved presentation + opaque provenance
Composition Root
        ↓ generic CampaignActorEffect
Actor/Token generic presentation
```

A identidade continua sendo `definitionKey = sourcePack:sourceId`. Nome, texto ou slug não substituem a chave estrutural.

## Catálogo e resolução

A descoberta manual da Composition Root usa `listPathfinder2eActiveEffectDefinitionViews`, contrato introduzido pelo QH-EFF-013. A aplicação continua resolvendo a `definitionKey` no bounded context PF2e e copia para a instância somente os campos de apresentação aprovados.

A instância preserva:

- `definitionKey`;
- `name`;
- `description` de apresentação normalizada;
- `iconUrl` quando houver asset QuestHub seguro;
- `polarity` explícita do catálogo;
- `category = condition | effect | affliction`;
- `displayValue` quando a Condition for valorizada;
- `origin` e `payload` opacos para rastreabilidade interna.

`origin`/`payload` não são renderizados como JSON e o VTT não os interpreta.

## Descrição e segurança de apresentação

O source canônico pode conter markup editorial. A instância aplicada não deve apresentar tags HTML como texto cru e a UI não deve usar `dangerouslySetInnerHTML` para resolver isso.

A normalização:

- remove blocos executáveis (`script`/`style`);
- converte separadores estruturais básicos em quebras de linha;
- remove tags restantes;
- decodifica entidades HTML comuns/numeradas;
- preserva o texto editorial e listas em texto simples.

A UI também normaliza defensivamente a descrição para instâncias antigas criadas antes do QH-EFF-014.

## Atualização imediata

O backend mantém o evento realtime `vtt:actor-effects:changed` restrito à Campaign.

Além dele, após um POST PF2e bem-sucedido, o Composer publica `questhub:vtt:actor-effects:changed` no cliente atual através de `publishLocalActorEffectsChanged({ campaignId, actorId })`.

Os hooks genéricos já existentes de ficha e Token escutam a invalidação local e fazem novo GET. Não existe polling, timeout de sincronização ou mutação direta de Token/ficha mecânica.

## Modal de detalhe

O detalhe continua genérico. Ele pode apresentar apenas metadata segura já materializada no `CampaignActorEffect`/presentation resolver:

- nome;
- polaridade;
- categoria;
- valor exibido;
- origem segura quando o resolver de Game System a fornecer na ficha;
- descrição normalizada;
- ícone ou fallback visual.

Não exibir `payload`, `origin` bruto, namespace ou `definitionKey` como dump técnico.

## Fronteiras

- VTT Core não conhece nomes de Conditions, packs ou Rule Elements PF2e;
- Composition Root conecta resolver PF2e ao Core genérico, sem mover ownership;
- nenhuma mudança em stacking, duração, dano, modificadores, saves ou attacks;
- nenhum Rule Element é executado;
- nenhuma aplicação automática é disparada por Spell/Item/Bestiary neste card;
- isolamento por Campaign permanece obrigatório.

## Critérios de aceite

- **AC01** — Frightened aplicado preserva `HARMFUL`, categoria, descrição e valor base/selecionado;
- **AC02** — Quickened aplicado preserva `BENEFICIAL` sem fallback silencioso para `NEUTRAL`;
- **AC03** — descoberta manual usa o catálogo/query do QH-EFF-013;
- **AC04** — descrição aplicada e detalhes não exibem markup HTML cru;
- **AC05** — não há `dangerouslySetInnerHTML` para descrições de Effects;
- **AC06** — aplicação PF2e bem-sucedida invalida imediatamente ficha e Token no mesmo cliente;
- **AC07** — realtime continua filtrado por Campaign/Actor e sem polling;
- **AC08** — modal do Token mostra metadata útil de apresentação sem payload/origin bruto;
- **AC09** — `definitionKey` e provenance permanecem persistidos para rastreabilidade;
- **AC10** — aplicação manual e mappings continuam convergindo no mesmo resolver de definição;
- **AC11** — nenhum estado mecânico da ficha/Token é alterado por esta entrega;
- **AC12** — unit tests, `build:web`, documentação e Game System Boundaries ficam verdes.
