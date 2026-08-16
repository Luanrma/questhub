# Campaign User Settings

Status: **ACTIVE**

## Objetivo

Persistir preferências pessoais por `Campaign + User` sem misturá-las com o estado compartilhado da mesa e sem fazer o módulo genérico interpretar regras/configurações internas de um Game System.

## Persistência

A persistência usa `CampaignUserSettings` com chave única por `(campaignId, userId)` e campo `settings` em JSON.

Essas configurações:

- pertencem ao usuário dentro de uma Campaign;
- não alteram automaticamente a experiência dos outros participantes;
- podem ser mantidas em cache local pelo frontend;
- são restauradas pelo backend entre sessões/dispositivos.

## Contratos HTTP

### GET

`GET /api/campaigns/:campaignId/my-settings`

Requer:

- usuário autenticado;
- `CampaignMember` do usuário com status `ACTIVE` na Campaign.

Retorna as configurações normalizadas do Core e preserva namespaces opacos persistidos.

### PATCH

`PATCH /api/campaigns/:campaignId/my-settings`

Payload:

```json
{
  "settings": {
    "<namespace>": {}
  }
}
```

Requer as mesmas condições de acesso do GET.

O backend faz upsert por `(campaignId, userId)`.

## Namespaces do Core

O módulo genérico conhece atualmente:

### `dice`

```ts
type DiceUserSettings = {
  autoClear: number | 'manual'
  showResultPopup: boolean
}
```

Regras:

- `autoClear`: inteiro de 3 a 10 ou `manual`;
- default: `3`;
- `showResultPopup`: boolean;
- default: `true`.

### `inventory`

```ts
type InventoryUserSettings = {
  itemSheetLocale: 'pt-BR' | 'en-US'
}
```

Default: `pt-BR`.

## Namespaces de Game System

Namespaces pertencentes a um Game System são **opacos para o Core**.

O módulo genérico pode:

- receber o namespace;
- persistir o namespace;
- devolver o namespace;
- preservar propriedades já existentes ao aplicar atualização parcial de um objeto de namespace.

O módulo genérico não pode:

- conhecer propriedades internas do namespace;
- definir defaults específicos do sistema;
- validar semântica de regras/configurações específicas;
- renderizar UI específica daquele sistema.

Exemplo de dado opaco atualmente utilizado pelo PF2e:

```json
{
  "pathfinder2e": {
    "contentLocale": "pt-BR"
  }
}
```

A propriedade `contentLocale` não faz parte do contrato genérico. Sua normalização e seu default pertencem ao código PF2e.

## Frontend

A UI genérica pode renderizar configurações do Core.

Painéis específicos de Game System são montados por um composition shell/registry em `apps/web/src/game-systems/`, que seleciona a implementação usando a chave do sistema da Campaign.

A página genérica de Campaign não deve importar diretamente features de Pathfinder, D&D ou outro sistema concreto.

## Cache local

O frontend pode aplicar a preferência local imediatamente e sincronizar com o backend em seguida.

Falha de sincronização pode manter a preferência local aplicada e exibir aviso não bloqueante.

## Segurança

- o frontend não é fronteira de segurança;
- o backend valida autenticação e membership ativo;
- um usuário não pode alterar as configurações de outro usuário por esse contrato.

## Critérios permanentes

- usuários diferentes na mesma Campaign possuem settings independentes;
- o mesmo usuário pode possuir settings diferentes em Campaigns diferentes;
- namespaces desconhecidos não são descartados durante normalização do Core;
- atualização de um namespace não deve apagar outros namespaces existentes;
- regras específicas de Game System permanecem fora do módulo genérico.

## Referências

- `docs/PROJECT_CONSTITUTION.md`
- `docs/ARCHITECTURE.md`
- `docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md`
- `docs/features/game-system-user-settings-boundary/spec.md`
