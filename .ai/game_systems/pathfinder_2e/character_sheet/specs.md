# Pathfinder 2e - Especificação da ficha automatizada V2

## 0. Localização e dependências

```text
apps/api/src/game_systems/runtime/
apps/api/src/game_systems/character-sheets.ts
apps/api/src/game_systems/pathfinder_2e/character-sheet/
apps/web/src/features/pathfinder-2e/character-sheet/
apps/web/src/game-systems/
```

O Runtime não conhece Pathfinder. O adaptador Pathfinder conhece somente contratos do Runtime e seus próprios dados. Nenhum dos dois importa implementações de Token, Canvas, grid, cena ou outras ferramentas do VTT.

O VTT pode encaminhar um `characterId` para a rota genérica de ficha, mas não interpreta o conteúdo mecânico retornado pelo sistema.

## 1. Persistência

O model genérico permanece:

```prisma
model CharacterSheet {
  id            String
  characterId   String @unique
  systemKey     String
  schemaVersion Int
  data          Json
}
```

`Character` continua contendo somente identidade genérica. A coluna `data` armazena somente a ficha fundamental V2.

## 2. Schema persistido V2

### Identidade

```text
nível
ancestralidade
herança
background
classe
divindade
```

Valor vazio é permitido. Valores preenchidos devem existir nos catálogos locais.

### Progressão

```text
EXP atual
EXP para o próximo nível
movimento em metros
```

### Modificadores de atributo

```text
Força
Destreza
Constituição
Inteligência
Sabedoria
Carisma
```

Os campos armazenam modificadores.

### Vida e sobrevivência

Persistidos:

```text
Vida atual
Vida temporária
Ferido
Morrendo
Condenado
Bônus de PV
```

`Vida máxima` é derivada.

### Defesa e iniciativa

Persistidos:

```text
Bônus de CA
Bônus de iniciativa
Grau e bônus de Percepção
Graus de armadura
```

`CA` e `Iniciativa` são derivadas.

### Saves e perícias

Cada entrada persiste:

```ts
{ rank: 0 | 2 | 4 | 6 | 8; bonus: number }
```

O total não é persistido.

## 3. Fórmulas

### Proficiência

```text
rank 0: 0
rank 2: nível + 2
rank 4: nível + 4
rank 6: nível + 6
rank 8: nível + 8
```

### PV máximo

```text
PV = PV ancestral
   + nível × (PV da classe + Constituição)
   + bônus de PV
```

O resultado mínimo é zero.

### CA nesta fase

```text
CA = 10
   + Destreza
   + proficiência sem armadura
   + bônus de CA
```

Equipamentos não participam do cálculo.

### Estatísticas

```text
Total = atributo + proficiência + bônus
```

Mapeamento de atributo:

- Percepção e Vontade: Sabedoria;
- Fortitude: Constituição;
- Reflexos: Destreza;
- Acrobacia, Furtividade e Ladroagem: Destreza;
- Arcanismo, Manufatura, Ocultismo e Sociedade: Inteligência;
- Atletismo: Força;
- Enganação, Diplomacia, Intimidação e Performance: Carisma;
- Medicina, Natureza, Religião e Sobrevivência: Sabedoria.

### Iniciativa

```text
Iniciativa = Percepção total + bônus de iniciativa
```

## 4. Resultado derivado

```ts
type Pathfinder2eDerivedCharacterSheet = {
  mechanics: {
    ancestryHitPoints: number
    classHitPointsPerLevel: number
  }
  hitPoints: { maximum: number }
  armorClass: {
    value: number
    dexterityModifier: number
    proficiencyBonus: number
    bonus: number
    armorCategory: 'unarmored'
  }
  initiative: {
    value: number
    source: 'perception'
    sourceValue: number
    bonus: number
  }
  perception: DerivedStatistic
  savingThrows: Record<string, DerivedStatistic>
  skills: Record<string, DerivedStatistic>
}
```

## 5. APIs da ficha

```text
GET  /api/game-systems/pathfinder-2e/character-sheet/options
GET  /api/characters/:characterId/pathfinder-2e-sheet
POST /api/characters/:characterId/pathfinder-2e-sheet/derive
PUT  /api/characters/:characterId/pathfinder-2e-sheet
```

As três rotas da ficha aceitam opcionalmente:

```text
?campaignId=<campaignId>
```

### Acesso

O acesso à ficha é independente do controle do Token.

- o proprietário do `Character` pode visualizar, derivar e salvar sua própria ficha;
- um Mestre ativo pode visualizar, derivar e salvar fichas de Characters vinculados a uma campanha em que ele seja Mestre;
- quando `campaignId` é informado, o Character precisa pertencer àquela campanha;
- quando `campaignId` não é informado, o backend pode inferir o acesso do Mestre pelo vínculo exclusivo do Character com a campanha;
- controlar um Token secundário ou companion não concede acesso à ficha vinculada;
- outro jogador recebe `404` sem revelar se o Character existe.

### GET

Retorna personagem e envelope completo da ficha:

```text
systemKey
schemaVersion
data
derived
warnings
persisted
updatedAt
```

Se a ficha armazenada for V1, ela é migrada em memória antes da resposta. A persistência V2 ocorre no próximo PUT.

### POST derive

- recebe `{ data }`;
- não persiste;
- retorna `data`, `derived` e `warnings`;
- usa as mesmas regras de acesso do GET;
- rejeita valores derivados no payload porque o schema é estrito.

### PUT

- executa migração, validação e derivação;
- persiste somente `data` normalizado;
- grava `schemaVersion: 2`;
- retorna o envelope recalculado;
- usa as mesmas regras de acesso do GET.

## 6. Gerenciador de fichas da campanha

O Pathfinder registra um `GameSystemCharacterSheetManagerProvider` no Runtime compartilhado.

Endpoint genérico consumido pelo painel esquerdo:

```text
GET /api/campaigns/:campaignId/character-sheets
```

Regras:

- somente o Mestre ativo acessa o endpoint;
- o endpoint genérico seleciona o provider pelo `GameSystem` da campanha;
- o provider PF2e resolve cada ficha com o mesmo Runtime usado pelo editor;
- uma ficha ainda não persistida aparece com seus defaults calculados;
- uma ficha inválida aparece no gerenciador com warning, sem derrubar toda a listagem.

Cada card PF2e informa:

```text
nome e avatar
papel e status na campanha
proprietário
classe, ancestralidade e herança
nível
PV atual/máximo
CA
Token vinculado ou ausência de Token
divindade, quando preenchida
warnings do Runtime
```

## 7. Acesso pelo Token

O Token continua conhecendo somente `characterId`.

Fluxo:

```text
menu do Token
  -> rota genérica da ficha da campanha
  -> descriptor do GameSystem
  -> rota concreta Pathfinder
  -> editor Pathfinder existente
```

Rota genérica de frontend:

```text
/campaigns/:campaignId/characters/:characterId/sheet
```

O botão `Abrir ficha` é exibido quando:

- o Token possui `characterId`; e
- o usuário é o Mestre; ou
- o usuário controla o Token do próprio Character.

O botão não aparece para Tokens genéricos nem para controladores de Tokens vinculados a Characters de terceiros.

A ficha abre em uma nova aba para preservar o estado da mesa, cena, ferramentas e seleção do VTT.

## 8. Migração V1

Preservar:

- identidade;
- progressão e movimento;
- atributos;
- PV atual, temporário, estados e bônus;
- graus de proficiência;
- graus de armadura;
- anotações.

Descartar como totais antigos:

- PV máximo;
- CA;
- iniciativa;
- `value` de Percepção, saves e perícias.

Os novos bônus desses totais iniciam em zero.

## 9. Frontend

- totais derivados são somente leitura;
- grau e bônus permanecem editáveis;
- alterações disparam prévia com debounce de 180 ms;
- warnings são exibidos sem impedir edição;
- salvar usa o resultado autoritativo devolvido pelo backend;
- a tela informa explicitamente que CA ainda usa defesa sem armadura;
- o gerenciador de campanha possui busca e atualização manual;
- abrir uma ficha pelo gerenciador ou Token reutiliza o mesmo editor, sem duplicar UI ou regras.

## 10. Critérios de aceite

1. mudar nível recalcula todas as proficiências treinadas ou superiores;
2. mudar Constituição recalcula PV e Fortitude;
3. mudar Destreza recalcula CA, Reflexos e perícias de Destreza;
4. selecionar ancestralidade altera a parcela ancestral de PV;
5. selecionar classe altera os PV por nível;
6. rank zero não adiciona nível;
7. o cliente não consegue salvar um total derivado;
8. ficha V1 abre sem perder identidade ou estado atual;
9. o Mestre visualiza todas as fichas da campanha no painel esquerdo;
10. o Mestre abre e edita qualquer ficha listada;
11. o proprietário abre sua ficha pelo próprio Token;
12. controlar Token de terceiro não concede acesso à ficha;
13. Token genérico não oferece ação de ficha;
14. nenhum código do adaptador PF2e importa Canvas, grid, cena ou componentes de Token.

## 11. Localização, compatibilidade e concessões mecânicas

O catálogo de identidade segue os contratos de:

```text
.ai/game_systems/pathfinder_2e/character_options/
```

Regras adicionais:

- a ficha persiste os valores canônicos `en-US`; labels `pt-BR` são apenas
  apresentação;
- Herança específica deve pertencer à Ancestralidade selecionada;
- Herança versátil pode ser combinada com qualquer Ancestralidade suportada;
- Classe não altera Ancestralidade;
- ranks iniciais de Classe e treinos fixos de Background funcionam como piso
  para o rank efetivo;
- ranks manuais não são sobrescritos;
- Cleric e Champion sem Divindade geram warning de construção incompleta;
- movimento manual zero usa o deslocamento base da Ancestralidade convertido
  de pés para metros.
