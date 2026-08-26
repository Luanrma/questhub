# Rolagem manual completa — Especificação

Card: `QH-TLC-005`

## 1. Objetivo

Permitir que qualquer membro ativo de uma Campaign execute uma rolagem manual completa sem calcular modificadores fora do QuestHub.

A capacidade pertence ao VTT Core e representa somente a composição genérica de uma rolagem: grupos de dados, modificador inteiro opcional e identificação livre opcional. O Core não consulta ficha, não interpreta regras de Game System e não determina consequências.

## 2. Escopo

Incluído:

* seleção visual de quantidades para D4, D6, D8, D10, D12 e D20;
* modificador inteiro informado separadamente no fluxo guiado;
* identificação opcional da rolagem, por exemplo `Ataque com espada`;
* preview normalizado antes da execução;
* entrada por expressão como alternativa ao fluxo guiado;
* animação 3D e limite vigente de 40 dados visíveis;
* validação da composição e cálculo do total no servidor;
* publicação estruturada no Campaign Game Log;
* persistência somente quando houver Encounter ativo, conforme `docs/features/campaign-game-log/spec.md`.

Fora do escopo:

* buscar atributos, bônus ou fórmulas em ficha;
* comparar resultado com CA, CD ou qualquer defesa;
* Degree of Success, crítico, dano, cura, efeitos ou consequências;
* funções, parênteses, rerolls, keep/drop ou subtração de dados;
* visibilidade privada ou secreta;
* aplicação rígida de Action Economy ou regras de um Game System.

## 3. Modelo canônico da rolagem

Campos e expressão são duas formas de preencher o mesmo modelo:

```ts
type ManualDiceRoll = {
  groups: Array<{
    sides: 4 | 6 | 8 | 10 | 12 | 20
    count: number
  }>
  modifier: number
  label: string | null
  expression: string
}
```

Regras:

* `groups` possui ao menos um grupo e no máximo 40 dados somados;
* grupos repetidos são consolidados e ordenados por número de faces;
* `modifier` é um inteiro que mantém também o maior total possível dentro do intervalo seguro do JavaScript; ausência ou campo vazio equivale a zero;
* `label` é opcional, remove espaços externos e fica limitado a 120 caracteres por segurança de transporte e apresentação;
* `expression` é derivada de `groups` e `modifier`, nunca aceita como total calculado pelo cliente;
* o formato normalizado usa `+` entre grupos e acrescenta o modificador somente quando diferente de zero, por exemplo `1d20 + 2d6 - 2`;
* o total é a soma dos valores individuais mais o modificador.

## 4. Formas de entrada

### 4.1 Fluxo guiado

1. O usuário seleciona a quantidade de cada tipo de dado.
2. Informa um modificador inteiro opcional.
3. Informa uma identificação opcional.
4. A interface apresenta o preview normalizado, distinguindo dados e modificador.
5. O usuário confirma em `Rolar Dados`.

### 4.2 Expressão

`Usar expressão` alterna para um único campo de expressão. Enquanto este modo estiver ativo, os seletores de quantidade e o campo de modificador guiado não são usados como fonte da rolagem. A identificação continua disponível.

Gramática aceita:

```txt
<dice-term> ( "+" <dice-term> )* ( ( "+" | "-" ) <integer> )?
```

Exemplos válidos:

* `1d20+7`;
* `2d6-2`;
* `1d20 + 2d6 + 3`;
* `d8`.

O parser ignora espaços e a diferença entre `d` e `D`, consolida grupos iguais e produz a mesma expressão normalizada do fluxo guiado.

Exemplos inválidos:

* `1d20-1d6`, porque subtração de dados está fora do escopo;
* `1d20+2+3`, porque existe no máximo um modificador final;
* `2d7`, porque o dado não é suportado;
* `1d20+(3)`, porque parênteses estão fora do escopo;
* qualquer composição acima de 40 dados.

Trocar de modo preserva a identificação, mas limpa a composição do modo anterior. Apenas uma fonte fica ativa por execução.

## 5. Preview e erros

O preview aparece antes da execução e informa:

* expressão normalizada;
* quantidade total de dados;
* modificador separado, incluindo zero;
* identificação, quando informada.

Erros impedem a execução e explicam a correção necessária. Devem existir mensagens específicas para:

* nenhuma quantidade de dado;
* quantidade ou tipo de dado inválido;
* limite de 40 dados excedido;
* modificador não inteiro ou fora do intervalo de inteiro seguro;
* identificação acima do limite;
* expressão fora da gramática suportada.

## 6. Contrato realtime

Comando do cliente:

```ts
type VttDiceRollCommand = {
  campaignId: string
  groups: Array<{ sides: 4 | 6 | 8 | 10 | 12 | 20; count: number }>
  rolls: Array<{ sides: 4 | 6 | 8 | 10 | 12 | 20; value: number }>
  modifier: number
  label: string | null
}
```

O cliente envia valores individuais obtidos pela animação 3D e a composição que solicitou. O servidor:

1. valida membership ativo, Campaign online e autorização operacional já vigente;
2. valida grupos, valores, limite total, modificador e identificação;
3. confirma que `rolls` corresponde exatamente às quantidades declaradas em `groups`;
4. deriva a expressão normalizada;
5. calcula `diceTotal` e `total`;
6. publica `vtt:dice:rolled` e a entrada correspondente no Game Log somente após validação.

Payload estruturado de `DICE_ROLL`:

```ts
{
  actorId: null,
  actorName: string,
  label: string | null,
  expression: string,
  modifier: number,
  diceTotal: number,
  total: number,
  groups: Array<{ sides: number; count: number }>,
  rolls: Array<{ id: number; sides: number; value: number; rolledAt: number }>
}
```

O `summary` usa identificação quando presente e sempre informa expressão e total. O Game Log apresenta identificação, expressão, valores individuais, modificador e total sem inferir seu significado.

Payload inválido não produz evento realtime, entrada de Game Log nem `ChatMessage`.

## 7. Persistência, permissões e isolamento

* qualquer `CampaignMember` ativo pode usar a rolagem enquanto a mesa estiver disponível segundo as regras vigentes;
* durante mesa pausada, Player continua impedido e Master preserva o comportamento atual;
* o servidor associa a identidade de quem rolou a partir da sessão autenticada;
* o cliente não escolhe autor, Encounter, persistência ou tipo do evento;
* fora de Encounter, a entrada é transitória;
* durante Encounter, a entrada é persistida e permanece consultável após seu encerramento;
* nenhuma rolagem cria ou altera `ChatMessage`;
* `campaignId` é validado contra a sessão socket e membership ativo;
* este card não introduz visibilidade secreta: o resultado válido permanece público para a sala da Campaign.

## 8. Compatibilidade

* D4, D6, D8, D10, D12 e D20 permanecem suportados;
* o limite visual vigente de 40 dados permanece;
* tema, cor, auto-clear, popup e animação 3D permanecem;
* a expressão legada com `-` separando grupos deixa de ser aceita, pois `-` passa a representar modificador negativo;
* o contrato legado de um único par `sides`/`value` não é parte da interface pública desta entrega e pode ser removido ao consolidar o novo comando;
* consumidores do Game Log continuam tolerando tipos e campos desconhecidos.

## 9. Arquitetura afetada

* domínio: VTT Core / Dice e Campaign Game Log;
* frontend: modelo de entrada, parser, preview, painel e popup;
* backend: contrato Zod, validação, cálculo e publicação realtime;
* persistência: somente o payload JSON já existente de `CampaignGameLogEntry`; sem migration ou alteração de schema;
* Game Systems: nenhum import, regra, branch ou schema concreto.

ADRs aplicáveis: ADR-0002, ADR-0005 e ADR-0007.

## 10. Critérios de aceitação

1. Selecionar `1d20` e modificador `+7` produz a mesma composição normalizada de `1d20+7`.
2. Modificadores zero, positivos e negativos são validados e calculados no servidor.
3. O preview distingue grupos de dados, modificador, expressão normalizada e identificação.
4. Expressão ou campos inválidos impedem a execução e mostram correção acionável.
5. O visual 3D, os dados suportados e o limite de 40 dados permanecem funcionais.
6. O servidor rejeita divergência entre grupos declarados e valores individuais recebidos.
7. O Log mostra identificação, expressão, valores individuais, modificador e total.
8. Fora de Encounter, a rolagem é realtime e transitória; durante Encounter, é persistida.
9. Uma rolagem nunca cria `ChatMessage`.
10. Campaign, membership, mesa pausada e isolamento continuam protegidos no backend.
11. Nenhum módulo genérico passa a conhecer Pathfinder 2e ou outro Game System.
12. Testes cobrem parser/modelo, payload válido e inválido, total do servidor, Log transitório/persistido e regressão do Chat.
