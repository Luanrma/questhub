# Game System Runtime - Especificação V1

## 1. Arquitetura

```text
HTTP / WebSocket / VTT
        |
        v
Game System Runtime
        |
        v
Game System Adapter
```

O chamador entrega dados desconhecidos ao Runtime junto de um adaptador. O Runtime solicita migração, validação e derivação ao adaptador e devolve um envelope padronizado.

O VTT nunca importa adaptadores de sistemas concretos. Capacidades visuais e administrativas são localizadas por registros genéricos usando o `GameSystem` da campanha.

## 2. Contrato de ficha

```ts
export interface CharacterSheetRuntimeAdapter<TData, TDerived> {
  readonly systemKey: string
  readonly schemaVersion: number
  createDefault(): TData
  migrate(input: unknown): unknown
  parse(input: unknown): TData
  derive(data: TData): CharacterSheetDerivation<TDerived>
}

export type CharacterSheetDerivation<TDerived> = {
  derived: TDerived
  warnings: readonly string[]
}
```

Envelope do Runtime:

```ts
export type CharacterSheetRuntimeResult<TData, TDerived> = {
  systemKey: string
  schemaVersion: number
  data: TData
  derived: TDerived
  warnings: readonly string[]
}
```

## 3. Fluxo de derivação

1. receber `unknown`;
2. executar `adapter.migrate`;
3. executar `adapter.parse`;
4. executar `adapter.derive`;
5. devolver dados normalizados, derivados e warnings;
6. somente a camada externa decide persistir os dados normalizados.

Uma prévia usa exatamente o mesmo fluxo de um salvamento, sem acessar o banco.

## 4. Persistência

Persistir:

- escolhas do personagem;
- modificadores de atributo;
- graus de proficiência;
- bônus manuais ainda não cobertos por outras fontes;
- PV atual, PV temporário e estados de sobrevivência;
- anotações.

Não persistir como fonte da verdade:

- PV máximo;
- CA total;
- iniciativa total;
- total de percepção;
- total de saves;
- total de perícias;
- bônus de proficiência calculado.

## 5. Registro de gerenciadores de ficha

O Runtime compartilhado expõe um registro independente dos adaptadores concretos:

```ts
export type GameSystemCharacterSheetManagerProvider = {
  list(params: {
    campaignId: string
  }): Promise<readonly GameSystemCharacterSheetManagerEntry[]>
}
```

Registro:

```ts
registerGameSystemCharacterSheetManagerProvider(system, provider)
getGameSystemCharacterSheetManagerProvider(system)
```

Regras:

- o Runtime não importa nenhum provider concreto;
- cada sistema registra no máximo um provider;
- o provider conhece apenas dados do próprio sistema e a identidade genérica do Character;
- os cards retornados usam um contrato genérico;
- o VTT renderiza cards sem interpretar atributos ou fórmulas específicas.

Contrato genérico resumido:

```ts
type GameSystemCharacterSheetManagerEntry = {
  characterId: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: CampaignCharacterStatus
  ownerLabel: string
  hasSheet: boolean
  updatedAt: Date | null
  token: { id: string; name: string } | null
  subtitle: string | null
  badges: readonly string[]
  stats: readonly Array<{ label: string; value: string }>
  warnings: readonly string[]
}
```

`stats`, `badges` e `subtitle` são produzidos pelo sistema. O painel não sabe que um stat representa CA, PV ou qualquer outra regra.

## 6. API genérica do gerenciador

```text
GET /api/campaigns/:campaignId/character-sheets
```

Regras:

- exige autenticação;
- exige papel `MASTER` ativo na campanha;
- identifica o provider pelo `GameSystem` da campanha;
- retorna `available: false` quando o sistema não registrar a capacidade;
- não permite informar outro sistema por query ou payload;
- não mistura fichas de campanhas diferentes.

Resposta:

```ts
{
  available: boolean
  system: GameSystemDescriptor
  entries: GameSystemCharacterSheetManagerEntry[]
}
```

O endpoint `/api/campaigns/:campaignId/game-system` informa também:

```ts
characterSheetsAvailable: boolean
```

O menu esquerdo só oferece `Fichas` ao Mestre quando essa capacidade estiver registrada.

## 7. Resolução genérica do editor

Rota de frontend:

```text
/campaigns/:campaignId/characters/:characterId/sheet
```

Fluxo:

1. consultar `/api/campaigns/:campaignId/game-system`;
2. ler `descriptor.characterSheetPathSegment`;
3. redirecionar para o editor concreto;
4. encaminhar `campaignId` como contexto opcional;
5. deixar o backend concreto validar proprietário ou autoridade do Mestre.

O Token e o painel de fichas usam somente essa rota genérica.

## 8. Limite entre Token e ficha

O contrato do Token continua sendo:

```text
characterId: string | null
```

O Token não recebe:

- CA;
- PV;
- classe;
- ancestralidade;
- sistema concreto;
- URL concreta do editor;
- permissões mecânicas.

A ação `Abrir ficha` apenas encaminha `campaignId` e `characterId` ao resolvedor genérico.

Controlar um Token não concede automaticamente acesso ao Character. A autorização da ficha é responsabilidade do sistema e da campanha.

## 9. Pathfinder 2e - ficha V2

### Dados fundamentais

```ts
schemaVersion: 2
identity: {
  level: number
  ancestry: string
  heritage: string
  background: string
  class: string
  deity: string
}
attributes: {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}
hitPoints: {
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
  bonus: number
}
armorClass: { bonus: number }
initiative: { bonus: number }
perception: { rank: 0 | 2 | 4 | 6 | 8; bonus: number }
savingThrows: Record<string, { rank; bonus }>
skills: Record<string, { rank; bonus }>
armorProficiencies: {
  unarmored: rank
  light: rank
  medium: rank
  heavy: rank
}
```

Os atributos representam modificadores.

### Proficiência

```text
Não treinado: 0
Treinado: nível + 2
Especialista: nível + 4
Mestre: nível + 6
Lendário: nível + 8
```

### Pontos de Vida

```text
PV máximo = PV da ancestralidade
          + nível × (PV da classe por nível + modificador de Constituição)
          + bônus manual
```

### Classe de Armadura

Enquanto equipamentos não estiverem integrados:

```text
CA = 10
   + modificador de Destreza
   + bônus de proficiência em defesa sem armadura
   + bônus manual
```

### Percepção, saves e perícias

```text
Total = modificador do atributo
      + bônus de proficiência
      + bônus manual
```

### Iniciativa

```text
Iniciativa = total de Percepção + bônus manual de iniciativa
```

## 10. Migração V1 -> V2

- `hitPoints.maximum` deixa de ser persistido;
- `armorClass` antigo é descartado como total manual e inicia com bônus zero;
- `initiative` antigo é descartado como total manual e inicia com bônus zero;
- `ProficiencyValue.value` é migrado para `bonus: 0`;
- PV atual e demais estados são preservados;
- identidade, atributos, graus e anotações são preservados.

A migração não tenta inferir bônus a partir de totais antigos.

## 11. APIs Pathfinder iniciais

```text
GET  /api/characters/:characterId/pathfinder-2e-sheet
POST /api/characters/:characterId/pathfinder-2e-sheet/derive
PUT  /api/characters/:characterId/pathfinder-2e-sheet
```

`GET` e `PUT` retornam `data`, `derived` e `warnings`. `POST /derive` calcula uma prévia sem persistir.

As rotas permitem acesso ao proprietário ou ao Mestre ativo da campanha do Character. Controle de Token isoladamente não é autorização suficiente.

## 12. Critérios de aceitação

1. alterar nível recalcula todo valor com proficiência;
2. selecionar Human e Fighter calcula as parcelas base de PV correspondentes;
3. alterar Constituição recalcula PV máximo e Fortitude;
4. alterar Destreza recalcula CA, Reflexos e perícias relacionadas;
5. grau não treinado nunca adiciona o nível;
6. valores derivados não são aceitos no payload persistido;
7. o Runtime não importa sistemas concretos;
8. o painel genérico lista cards produzidos pelo provider da campanha;
9. somente o Mestre acessa a listagem completa;
10. o Token abre uma rota genérica usando apenas `characterId`;
11. controlar Token de terceiro não concede acesso à ficha;
12. remover o pacote Pathfinder preserva compiláveis os contratos genéricos do Runtime e do VTT.

## 13. Projeção neutra de ações do Token

```ts
type TokenActionPresentation = {
  id: string
  label: string
  group: string
  detail?: string
  imageUrl?: string
  visibility: 'PUBLIC' | 'OWNER_AND_MASTER' | 'MASTER_ONLY'
  interaction?: 'instant' | 'target' | 'area' | 'roll'
  contexts: readonly ('ENCOUNTER' | 'REFERENCE')[]
}
```

Regras:

1. `group` e `detail` são conteúdo de apresentação produzido pelo game system;
2. o VTT agrupa e renderiza sem interpretar os valores;
3. a rota de apresentação filtra cada ação pela visibilidade antes de responder;
4. `TOKEN_ACTIONS` declara suporte à projeção visual, enquanto
   `AUTOMATED_ACTIONS` permanece reservado para execução;
5. a ação apresentada não transporta fórmula, Spell DC, tipo de save, grau de
   sucesso nem mutação mecânica no contrato compartilhado;
6. execução futura usa uma intenção neutra endereçada por `action.id`; somente o
   provider pode transformar essa intenção em rolagem, seleção de alvo ou chat
   card;
7. Tokens sem ficha ou provider retornam `actions: []`.
8. `contexts` é obrigatório, não contém nomes de ruleset e pode combinar mais de
   uma superfície genérica;
9. o VTT seleciona ações de encontro exclusivamente pela presença de
   `ENCOUNTER`, sem branches por sistema, grupo, label ou prefixo de `id`.

## 14. Defaults visuais na materialização por catálogo

Um provider que permite materializar uma entrada do catálogo como Token pode
fornecer defaults visuais neutros, consumidos somente no momento da criação:

```ts
type GameSystemCatalogTokenSheet = {
  sheet: GameSystemCatalogSheet
  data: unknown
  tokenDefaults?: {
    size?: number
  }
}
```

Regras:

1. `tokenDefaults` não integra o snapshot mecânico da ficha e não cria
   dependência do VTT em conceitos específicos do ruleset;
2. `size` usa a unidade genérica do VTT, em células de grid, e deve respeitar
   os limites aceitos por `CampaignToken`;
3. ausência ou valor inválido usa o default neutro `1`;
4. o default é aplicado somente ao criar o Token; redimensionamentos posteriores
   continuam livres e a duplicação preserva o tamanho atual do Token de origem;
5. o provider Pathfinder 2e converte o porte mecânico original, sem depender do
   idioma da ficha: `tiny = 0.5`, `small = 1`, `medium = 1`, `large = 2`,
   `huge = 3` e `gargantuan = 4`;
6. um porte ausente ou desconhecido de Pathfinder 2e usa `1`, equivalente ao
   porte Médio e ao comportamento legado.
