# Game Systems - Especificacao de fronteira

## 1. Contrato de localizacao

Todo backend especifico de um sistema de RPG reside em:

```text
apps/api/src/game_systems/<system>/
```

O caminho abaixo e invalido:

```text
apps/api/src/modules/game_systems/
```

## 2. Contrato de dependencia

Sao proibidos:

```text
apps/api/src/game_systems/** -> apps/api/src/modules/**
apps/api/src/modules/**      -> apps/api/src/game_systems/**
```

`apps/api/src/server.ts` e parte do VTT e nao pode importar nenhum arquivo sob
`apps/api/src/game_systems`.

`apps/api/src/main.ts` e o bootstrap executavel e pode importar somente a entrada
agregada de `game_systems`, sem conhecer Pathfinder, fichas, bestiarios, itens,
spells ou qualquer outro recurso concreto.

Cada sistema e uma fronteira adicional. Codigo sob
`apps/api/src/game_systems/<system>/**` nao pode importar outro diretorio irmao
`<other-system>`.

Dependencias transversais devem ser neutras em relacao a regras de jogo. Ports e
adapters explicitos devem ser introduzidos quando uma integracao exigir troca de
dados entre capacidades genericas e um sistema.

### Contrato neutro de acesso ao inventario do ator

O acesso de leitura ao inventario e uma regra compartilhada, localizada fora de
qualquer sistema concreto:

```ts
type ActorInventoryAccess = {
  role: CampaignMemberRole
  memberId: string
  controllerMemberId: string | null
  hasLinkedToken: boolean
}

function canReadActorInventory(access: ActorInventoryAccess): boolean
function canMutateActorInventory(role: CampaignMemberRole): boolean
```

Um Mestre possui acesso de leitura e escrita. Um jogador pode ler somente o
inventario do ator que controla; a presenca de Token nao altera essa regra.
Sistemas de jogo podem consumir esse contrato, mas nao podem importar rotas ou
modulos de outro sistema para obter autorizacao.

## 3. Contrato de responsabilidade

Pertencem a `game_systems`:

- schemas e validacoes mecanicas;
- catalogos, opcoes e defaults de um sistema;
- calculos, automacoes e invariantes definidos pelo sistema;
- casos de uso e entradas exclusivas daquele sistema.

Pertencem aos modulos do VTT:

- mesa, campanha, cena, canvas e token genericos;
- comunicacao, presenca e sincronizacao genericas;
- autenticacao e autorizacao;
- armazenamento e transporte sem regras mecanicas.

## 4. Integracao HTTP

O fluxo de composicao HTTP e:

```text
main.ts
  -> createVttServer()                         // somente VTT
  -> registerGameSystems(app)                  // entrada agregada
       -> registerGameSystemRoutes(app)         // registry neutro
       -> registerPathfinder2e(app)             // limite do sistema
            -> registradores internos do PF2e  // ficha, bestiario, itens, spells...
```

O agregador importa exclusivamente entradas de alto nivel no formato
`./<boundary>/register`; ele nao importa arquivos de rotas diretamente. Adicionar
uma capacidade a Pathfinder altera somente seu registrador interno. Adicionar
outro sistema altera o agregador de sistemas, mas nao `server.ts`, o registry
neutro nem o registrador de Pathfinder.

A coexistencia no mesmo processo HTTP nao torna um sistema modulo do VTT.

## 5. Catalogo suportado

O VTT pode conhecer apenas descritores neutros dos sistemas suportados, limitados
a nome/chave. Esse catalogo nao expoe handlers, schemas, regras, tipos mecanicos
ou capacidades internas e nao e necessario para montar o servidor base.

## 6. Criterios de aceitacao

1. `apps/api/src/modules/game_systems` nao existe.
2. o Pathfinder 2e esta em `apps/api/src/game_systems/pathfinder_2e`.
3. build e testes resolvem os novos caminhos.
4. nenhum arquivo de regra cruza diretamente a fronteira entre `modules` e
   `game_systems`.
5. `apps/api/src/server.ts` nao importa `game_systems` nem cita um sistema
   concreto.
6. `apps/api/src/main.ts` conhece somente o registrador agregado.
7. cada sistema registra internamente suas capacidades e nao importa outro
   sistema.
8. um teste arquitetural falha se qualquer uma dessas fronteiras for violada.

## 7. Persistencia

Esta mudanca nao altera schema, migration, tabela, coluna ou indice. Ela reutiliza
os modelos existentes para persistir novas instancias solicitadas pelo Mestre.

## 8. Token de criatura originado no catalogo

O provider neutro de catalogo pode implementar:

```ts
type GameSystemCatalogProvider = {
  // contratos existentes omitidos
  getTokenizableSheet?(
    query: GameSystemCatalogEntryQuery,
  ): Promise<GameSystemCatalogSheet | null> | GameSystemCatalogSheet | null
}
```

Regras:

1. `null` significa que a entrada existe, mas nao pode originar Token;
2. somente criaturas sao tokenizaveis no recorte inicial; hazards, itens e
   spells nao sao;
3. o registry consulta o provider do sistema configurado na campanha e nunca
   recebe uma chave de sistema escolhida pelo cliente;
4. somente o Mestre ativo pode criar ou duplicar;
5. a criacao ocorre em uma unica transacao:
   `CampaignActor + CampaignCharacterSheet + CampaignToken`, sem `Inventory`;
6. o Token nasce sem `CampaignTokenPlacement` e, portanto, aparece na toolbar;
7. nome e avatar iniciais derivam da apresentacao devolvida pelo provider;
8. a ficha usa um envelope neutro e versionado:

```ts
type CatalogTokenSheetEnvelope = {
  kind: 'CATALOG_TOKEN_SHEET'
  version: 1
  source: {
    domain: GameSystemCatalogDomain
    contentId: string
    locale: GameSystemContentLocale
  }
  sheet: GameSystemCatalogSheet
  data: unknown
}
```

O envelope e um snapshot somente leitura. `sheet` contem a apresentacao resumida
e nao inclui a descricao editorial. `data` e opaco, pertence ao sistema que o
produziu e armazena apenas o estado mecanico necessario para o Token. No
Pathfinder 2e inicial ele contem PV atual e maximo.

O provider de `TokenPresentation` do sistema reconhece tanto a ficha completa de
PLAYER quanto seu proprio envelope de NPC. Ele converte ambos em
`TokenPresentation.resources`; o endpoint e o renderer do VTT nao distinguem
Pathfinder, PLAYER, NPC ou o formato persistido da ficha.

Snapshots legados `version: 1` sem `data` continuam abrindo como ficha resumida.
O provider Pathfinder recompoe somente a vitalidade inicial a partir do
`source.contentId`; novos snapshots sempre persistem o payload opaco.

### HTTP

```text
POST /api/campaigns/:campaignId/catalog/:domain/:contentId/tokens
GET  /api/campaigns/:campaignId/game-system/token-capabilities
POST /api/campaigns/:campaignId/game-system/tokens/:tokenId/duplicate
GET  /api/campaigns/:campaignId/character-sheets/:sheetId/simplified
```

O `POST` de criacao recebe apenas `{ locale }`. O endpoint de capacidades retorna
IDs de Tokens e acoes neutras disponiveis. A duplicacao aceita somente Tokens
cuja ficha possua um envelope valido e pertencente ao sistema da campanha.

Duplicar cria novos IDs para ator, ficha e Token, copia o snapshot e os metadados
visuais, nao cria inventario, nao copia posicionamento e acrescenta `Copia` ao
nome.

### Composicao frontend

`game-systems` publica em `apps/web/src/lib`:

- mudanca na biblioteca de Tokens;
- capacidades neutras por Token;
- resultado de uma solicitacao neutra de duplicacao.

O VTT:

- recarrega sua biblioteca ao receber a mudanca;
- renderiza `Duplicar` somente quando a capacidade for publicada;
- solicita a acao sem conhecer catalogo ou sistema concreto;
- abre fichas com apresentacao `FULL` ou `SIMPLIFIED`, sem interpretar o
  conteudo mecanico.

## 9. Criterios de aceitacao da materializacao

1. criatura tokenizavel cria Token fora de cena e ele aparece na toolbar;
2. hazard nao oferece nem aceita criacao de Token;
3. abrir a ficha do Token mostra o snapshot simplificado da criatura;
4. a ficha simplificada nao exibe descricao nem inventario;
5. a barra de vida usa a mesma projecao neutra para PLAYER e NPC, embora cada
   adaptador leia seu proprio formato de ficha;
6. duplicar pela toolbar cria outra ficha e outro ator independentes;
7. recarregar a pagina restaura a capacidade de duplicacao;
8. jogador e Mestre de outra campanha recebem rejeicao;
9. `apps/web/src/vtt` nao importa nem nomeia sistema, bestiario ou regra;
10. `apps/api/src/modules` e `apps/api/src/game_systems` continuam sem imports
   cruzados;
11. nenhum schema ou migration e alterado.
