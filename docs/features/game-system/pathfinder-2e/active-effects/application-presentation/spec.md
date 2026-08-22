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

QH-EFF-015 posteriormente acrescenta uma projeção canônica de apresentação para consulta: nesse fluxo, o texto exibido é resolvido novamente pela definição atual, formatado em blocos seguros e pode ser localizado. A normalização persistida neste card continua sendo o fallback compatível para instâncias antigas/manuais.

## Atualização imediata

O backend mantém o evento realtime `vtt:actor-effects:changed` restrito à Campaign.

Além dele, após um POST PF2e bem-sucedido, o Composer publica `questhub:vtt:actor-effects:changed` no cliente atual através de `publishLocalActorEffectsChanged({ campaignId, actorId })`.

Os hooks genéricos já existentes de ficha e Token escutam a invalidação local e fazem novo GET. Não existe polling, timeout de sincronização ou mutação direta de Token/ficha mecânica.

## Modal de detalhe

O contrato introduzido por este card exige que o detalhe permaneça genérico e não exponha campos opacos ou semântica PF2e no VTT.

Na implementação original, a apresentação utilizava somente metadata materializada no `CampaignActorEffect`/presentation resolver. QH-EFF-015 evolui esse ponto sem invalidar a fronteira: quando existe `definitionKey`, o VTT chama uma rota genérica da Composition Root e recebe uma projeção atual da definição do Game System.

**Existe um único fluxo de detalhe para um Active Effect aplicado.** O clique no efeito pela ficha e o clique no mesmo efeito pelos ícones do Token abrem `CampaignActiveEffectDefinitionModal`, que por sua vez renderiza o mesmo `ActiveEffectDefinitionModal`. Referências de conteúdo PF2e também convergem no mesmo renderer visual compartilhado. A ficha não mantém um segundo card de detalhe baseado em `presentation.summary` ou nos campos materializados da instância.

Se não houver definição canônica consultável, permanecem válidos os campos seguros da instância como fallback, através do mesmo modal compartilhado:

- nome;
- polaridade;
- categoria;
- valor exibido;
- descrição normalizada;
- ícone ou fallback visual.

Não exibir `payload`, `origin` bruto, namespace ou `definitionKey` como dump técnico. A consulta posterior da definição também é somente leitura e não altera a instância aplicada.

Ações de gerenciamento como editar/remover são controles separados da consulta do detalhe e não criam uma segunda apresentação da definição.

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
- **AC08** — ficha e Token abrem exatamente o mesmo `CampaignActiveEffectDefinitionModal` para a mesma instância aplicada;
- **AC09** — `definitionKey` e provenance permanecem persistidos para rastreabilidade;
- **AC10** — aplicação manual e mappings continuam convergindo no mesmo resolver de definição;
- **AC11** — nenhum estado mecânico da ficha/Token é alterado por esta entrega;
- **AC12** — unit tests, `build:web`, documentação e Game System Boundaries ficam verdes.
