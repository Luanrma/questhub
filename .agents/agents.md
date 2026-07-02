# QuestHub: Diretrizes Globais do Sistema e Comportamento da IA

## 1. Visão Geral

Você atua como um Engenheiro de Software Sênior desenvolvendo o **QuestHub**, um Virtual Tabletop (VTT) focado em campanhas de RPG online.

Suas respostas, análises e códigos gerados devem priorizar:

* Clean Architecture;
* Spec-Driven Development (SDD);
* Domain-Driven Design quando fizer sentido;
* alta performance em sistemas de tempo real;
* manutenibilidade;
* baixo acoplamento;
* clareza de contratos entre Frontend, Backend e WebSocket.

O QuestHub deve ser tratado como um produto modular, escalável e orientado a domínio. Não gere soluções improvisadas, acopladas ou difíceis de evoluir.

---

## 2. Arquitetura Modular — A Regra de Ouro

O QuestHub é construído com base em módulos isolados, também chamados de **Bounded Contexts**.

O sistema **não** deve ser tratado como um único módulo genérico. Sempre que for instruído a criar, analisar ou modificar uma funcionalidade, identifique obrigatoriamente:

1. o módulo de domínio afetado;
2. a camada afetada;
3. os contratos envolvidos;
4. os impactos em outros módulos.

Exemplos de módulos possíveis:

* `campaign`;
* `character`;
* `realtime`;
* `canvas`;
* `auth`;
* `inventory`;
* `dice`;
* `chat`;
* `scene`;
* `asset-management`.

As fronteiras entre **Frontend**, **Backend**, **WebSocket**, **Infraestrutura** e **Domínio** devem ser rigorosamente respeitadas.

Se a funcionalidade pertencer a um módulo novo, crie uma nova subpasta dentro de `.ai/` com o nome do módulo.

Exemplo:

```txt
.ai/campaign/
.ai/realtime/
.ai/canvas/
.ai/character/
```

Nenhuma funcionalidade relevante deve ser implementada sem antes identificar seu módulo de responsabilidade.

---

## 3. Padrão de Especificação de Módulos

Cada subpasta de módulo dentro de `.ai/` deve conter os três arquivos de especificação abaixo:

```txt
.ai/<module>/readme.md
.ai/<module>/skills.md
.ai/<module>/specs.md
```

### 3.1. `readme.md` — O Quê e Por Quê

Define o propósito do módulo.

Deve conter:

* visão geral da funcionalidade;
* problema que o módulo resolve;
* regras de negócio;
* personas envolvidas;
* casos de uso;
* valor entregue ao usuário;
* limites do módulo;
* o que explicitamente não pertence ao módulo.

### 3.2. `skills.md` — Ferramentas e Restrições Técnicas

Define as ferramentas técnicas e decisões de implementação do módulo.

Deve conter:

* stack tecnológica específica;
* bibliotecas permitidas;
* padrões de projeto aplicáveis;
* restrições técnicas;
* integrações externas;
* decisões de performance;
* cuidados de segurança;
* limitações conhecidas.

### 3.3. `specs.md` — Como Deve Funcionar

Define os contratos formais do módulo.

Deve conter, quando aplicável:

* contratos de API HTTP;
* contratos de eventos WebSocket;
* schemas de banco de dados;
* interfaces TypeScript;
* payloads de entrada e saída;
* diagramas de estado;
* regras de validação;
* critérios de aceitação;
* cenários de erro;
* permissões;
* efeitos colaterais esperados.

Nenhuma implementação de módulo deve começar sem que esses três arquivos existam e estejam minimamente detalhados.

---

## 4. Fluxo de Trabalho Obrigatório — Spec-Driven Development

Sempre que iniciar uma nova interação ou receber uma solicitação, siga esta ordem:

### 4.1. Identificar o Contexto

Determine:

* módulo alvo;
* camada afetada;
* tipo de mudança;
* arquivos provavelmente impactados;
* contratos envolvidos.

Camadas possíveis:

* Frontend;
* Backend;
* WebSocket;
* Banco de dados;
* Infraestrutura;
* Testes;
* Documentação;
* Design system;
* Domínio.

### 4.2. Auditar a Documentação Existente

Antes de gerar código, leia os arquivos do módulo:

```txt
.ai/<module>/readme.md
.ai/<module>/skills.md
.ai/<module>/specs.md
```

Se o módulo ainda não existir, crie a estrutura inicial antes da implementação.

### 4.3. Analisar Consistência

Compare o pedido do usuário com a documentação existente.

Se houver divergência relevante entre o pedido e as especificações atuais, sinalize claramente a inconsistência antes de implementar.

Exemplos de divergência relevante:

* o pedido viola uma regra de negócio documentada;
* o contrato de API solicitado quebra compatibilidade existente;
* a mudança mistura responsabilidades entre módulos;
* a alteração exige uma nova permissão;
* a alteração afeta persistência ou eventos em tempo real;
* o pedido contradiz uma decisão técnica registrada.

Quando a divergência bloquear uma decisão segura, pergunte antes de seguir.

Quando a divergência puder ser resolvida por uma decisão técnica razoável, documente a decisão e prossiga.

### 4.4. Atualizar o Design Antes do Código

Antes de implementar mudanças no código, atualize a documentação do módulo.

A documentação deve refletir com precisão:

* nova regra de negócio;
* novo contrato;
* novo evento;
* nova estrutura de dados;
* nova permissão;
* novo fluxo;
* nova restrição técnica;
* mudança de comportamento.

Os três arquivos do módulo devem ser auditados em toda mudança relevante.

Atualize apenas os arquivos que realmente precisam mudar. Não faça alterações artificiais ou sem conteúdo apenas para modificar todos os arquivos.

Código entregue sem documentação compatível é considerado entrega incompleta.

### 4.5. Executar a Implementação

Após atualizar as especificações, implemente o código seguindo estritamente os contratos documentados.

A implementação deve ser:

* pequena;
* testável;
* tipada;
* desacoplada;
* aderente ao módulo;
* coerente com a arquitetura existente.

### 4.6. Validar a Entrega

Ao finalizar, verifique:

* se os contratos documentados foram respeitados;
* se a tipagem está correta;
* se não foi introduzido acoplamento indevido;
* se os eventos em tempo real estão seguros;
* se as permissões foram validadas;
* se os testes necessários foram criados ou atualizados;
* se o código está consistente com o padrão do projeto.

---

## 5. Diretrizes Arquiteturais por Domínio

## 5.1. Frontend — React + Vite + Tailwind

O Frontend deve priorizar separação de responsabilidades, previsibilidade e componentes pequenos.

### 5.1.1. Zero God Components

Componentes gigantes, com excesso de estado, regra de negócio, manipulação de rede e renderização misturados, são proibidos.

Separe responsabilidades em:

* componentes visuais;
* hooks de estado e orquestração;
* funções puras;
* services de infraestrutura;
* tipos e contratos compartilhados.

### 5.1.2. UI / Presentational Components

Arquivos `.tsx` de componentes devem ser preferencialmente visuais e declarativos.

Responsabilidades permitidas:

* renderizar JSX;
* receber props;
* aplicar classes Tailwind;
* disparar callbacks recebidos por props;
* exibir estados visuais como loading, empty e error.

Evite dentro de componentes visuais:

* regra de negócio;
* acesso direto a APIs;
* acesso direto a sockets;
* manipulação complexa de dados;
* cálculos de domínio;
* parsing de payloads externos.

### 5.1.3. State / Logic — Custom Hooks

Toda orquestração de estado, efeitos colaterais e comunicação com infraestrutura deve ficar em hooks.

Exemplos:

```txt
useCampaign.ts
useRealtimeCampaign.ts
useCanvasScene.ts
useCharacterSheet.ts
useDiceRoll.ts
```

Hooks podem:

* coordenar estado local;
* consumir services;
* lidar com loading e error;
* adaptar dados para a UI;
* registrar e remover listeners;
* encapsular chamadas HTTP;
* encapsular emissões WebSocket.

Hooks não devem virar depósitos genéricos de regra de negócio. Sempre que possível, extraia regras puras para `utils`, `domain` ou arquivos específicos do módulo.

### 5.1.4. Domain / Math / Utils

Regras matemáticas, parsers, normalizadores e validações puras devem ficar fora do React.

Exemplos:

```txt
gridMath.ts
diceParser.ts
tokenPosition.ts
sceneBounds.ts
movementRules.ts
```

Essas funções devem ser:

* puras;
* testáveis;
* sem dependência de React;
* sem dependência de DOM;
* sem dependência de Socket;
* sem efeitos colaterais.

### 5.1.5. Infrastructure / Services

Bibliotecas externas devem ser encapsuladas atrás de Facades ou Adapters.

Exemplos de infraestrutura:

* Socket.io client;
* Canvas API;
* PixiJS;
* Dice Box;
* APIs HTTP;
* armazenamento local;
* assets externos.

A UI não deve conhecer diretamente detalhes dessas bibliotecas.

Exemplo de intenção:

```txt
DiceBoxFacade
SocketCampaignClient
CanvasSceneRenderer
AssetStorageService
```

### 5.1.6. Estrutura Interna de Features Frontend

Features de frontend que acumulam UI relevante, estado local, regras puras e integrações externas devem ser organizadas internamente por responsabilidade.

Use esta estrutura quando o módulo já tiver complexidade suficiente para que uma pasta plana esconda o papel de cada arquivo:

```txt
components/
hooks/
domain/
infrastructure/
config/
```

Responsabilidades:

* `components/`: JSX, layout, inputs, botões, estados visuais e callbacks recebidos por props;
* `hooks/`: orquestração de estado, efeitos, coordenação entre domínio e infraestrutura;
* `domain/`: tipos de domínio, parsers, formatadores, normalizadores, validações e regras puras;
* `infrastructure/`: adapters para bibliotecas externas, Socket.io, APIs HTTP, storage local, engines visuais e serviços concretos;
* `config/`: constantes, limites e valores padrão do módulo.

Regras:

* `domain/` não deve depender de React, DOM, Socket.io, storage local, APIs HTTP ou bibliotecas de infraestrutura.
* `components/` não devem executar regra de negócio, parsing, chamada de rede ou acesso direto a storage.
* `hooks/` podem conhecer domínio e infraestrutura, mas não devem renderizar UI grande nem concentrar regra pura.
* `infrastructure/` deve esconder detalhes de bibliotecas externas atrás de funções, services, facades ou adapters próprios.
* `config/` deve conter apenas valores estáveis do módulo, não estado de execução.

Não crie essa estrutura para componentes pequenos sem múltiplas responsabilidades. Aplique quando ela reduzir ambiguidade real, como em features que combinam UI, parser, engine externa, socket/chat e persistência local.

---

## 5.2. Backend & WebSockets — Node.js + Socket.io

O Backend deve seguir uma arquitetura inspirada em DDD e Clean Architecture.

A separação entre domínio, aplicação, infraestrutura e camada de entrada deve ser explícita.

### 5.2.1. Estrutura Recomendada

Use a seguinte separação conceitual:

```txt
/domain
/application
/application/ports
/infra
/presentation
```

### 5.2.2. Domain

O diretório `/domain` é o núcleo da aplicação.

Pode conter:

* entidades;
* value objects;
* tipos de domínio;
* regras puras;
* eventos de domínio;
* erros de domínio;
* invariantes.

Não deve depender de:

* banco de dados;
* Socket.io;
* Express;
* Fastify;
* Prisma;
* TypeORM;
* Redis;
* serviços externos;
* frameworks de infraestrutura.

O domínio deve ser o mais puro possível.

### 5.2.3. Application

O diretório `/application` contém os casos de uso da aplicação.

Exemplos:

```txt
CreateCampaignUseCase
JoinCampaignUseCase
MoveTokenUseCase
UpdateCharacterSheetUseCase
ChangeSceneUseCase
RollDiceUseCase
```

Casos de uso são responsáveis por:

* orquestrar regras de negócio;
* validar permissões;
* chamar contratos de repositórios;
* coordenar transações;
* produzir respostas de aplicação;
* disparar eventos de domínio quando necessário.

Casos de uso não devem conhecer diretamente:

* `Socket`;
* `Request`;
* `Response`;
* detalhes de banco;
* detalhes de Redis;
* detalhes de bibliotecas externas.

### 5.2.4. Application Ports

O diretório `/application/ports` define contratos usados pelos casos de uso.

Exemplos:

```txt
CampaignRepository
CharacterRepository
TokenRepository
UnitOfWork
EventBus
PermissionService
PasswordHasher
SessionProvider
```

Interfaces de repositório devem ficar próximas da aplicação, não da infraestrutura.

Quando fizer sentido, separe leitura e escrita:

```txt
CampaignReadRepository
CampaignWriteRepository
```

Essa separação deve ser usada quando trouxer clareza real. Não aplique CQRS prematuramente em casos simples.

### 5.2.5. Infrastructure

O diretório `/infra` contém implementações concretas.

Exemplos:

```txt
PrismaCampaignRepository
RedisSocketStateStore
SocketIoRealtimeEventBus
JwtSessionProvider
BcryptPasswordHasher
```

A infraestrutura pode depender de bibliotecas externas.

A infraestrutura implementa contratos definidos em `/application/ports`.

### 5.2.6. Presentation

O diretório `/presentation` contém as camadas de entrada.

Exemplos:

```txt
HttpControllers
SocketGateways
Middlewares
RequestValidators
Presenters
```

Controllers e Gateways devem:

* receber requisições ou eventos;
* validar o formato básico do payload;
* obter o usuário autenticado;
* chamar o caso de uso correto;
* adaptar a resposta para HTTP ou WebSocket;
* nunca conter regra de negócio profunda;
* nunca acessar banco diretamente.

---

## 5.3. Gateways, Controllers e Services

Nunca coloque regras de negócio, validações profundas ou acesso direto ao banco dentro de um listener WebSocket.

Errado:

```ts
socket.on("token:move", async payload => {
  // valida permissão profundamente
  // acessa banco
  // altera estado
  // emite evento
});
```

Correto:

```ts
socket.on("token:move", async (payload, ack) => {
  const result = await moveTokenUseCase.execute({
    userId: socket.data.user.id,
    ...payload,
  });

  ack(toAckResponse(result));
});
```

O Gateway recebe a intenção do cliente. O caso de uso decide se a ação pode acontecer.

---

## 5.4. Padrão de Resposta com ACKs

Toda emissão do cliente que exige processamento deve retornar um Acknowledgement.

Use o contrato padrão:

```ts
type AckResponse<T = unknown> =
  | {
      ok: true;
      data?: T;
    }
  | {
      ok: false;
      error: {
        code: string;
        message: string;
        details?: unknown;
      };
    };
```

Não use `any`.

Use `unknown` quando o tipo ainda não for conhecido.

Erros de domínio, validação e permissão não devem derrubar a conexão WebSocket.

Exemplos de códigos de erro:

```txt
UNAUTHORIZED
FORBIDDEN
CAMPAIGN_NOT_FOUND
CHARACTER_NOT_FOUND
TOKEN_NOT_FOUND
INVALID_PAYLOAD
INVALID_MOVE
INTERNAL_ERROR
```

A conexão só deve ser encerrada em casos como:

* autenticação inválida no handshake;
* comportamento malicioso;
* abuso de eventos;
* payloads repetidamente inválidos;
* violação grave de segurança.

---

## 5.5. WebSocket, Autenticação e Permissões

O Socket deve ser autenticado no handshake.

O servidor nunca deve confiar em `userId`, `role` ou permissões enviadas pelo cliente.

O usuário autenticado deve ser associado ao socket em `socket.data`.

Exemplo conceitual:

```ts
io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;

  const user = await sessionProvider.validate(token);

  if (!user) {
    return next(new Error("UNAUTHORIZED"));
  }

  socket.data.user = user;

  next();
});
```

Antes de executar qualquer ação em tempo real, valide:

* se o usuário está autenticado;
* se pertence à campanha;
* se possui permissão para a ação;
* se o personagem pertence ao usuário ou à campanha;
* se o token pertence à cena correta;
* se a ação é válida no estado atual do jogo.

---

## 5.6. Gerenciamento de Rooms

Eventos de campanha devem ser isolados usando Rooms do Socket.io.

Padrão recomendado:

```txt
campaign:<campaignId>
```

Exemplo:

```ts
socket.join(`campaign:${campaignId}`);
```

Antes de entrar em uma sala, o backend deve validar se o usuário realmente pertence à campanha.

Diferencie claramente:

### Emissão direta para o próprio socket

```ts
socket.emit("event:name", payload);
```

### Broadcast para todos da sala, exceto o emissor

```ts
socket.to(`campaign:${campaignId}`).emit("event:name", payload);
```

### Emissão para todos da sala, incluindo o emissor

```ts
io.to(`campaign:${campaignId}`).emit("event:name", payload);
```

### Emissão privada para um usuário específico

Use uma room por usuário autenticado:

```txt
user:<userId>
```

---

## 5.7. Comandos do Cliente vs. Eventos do Servidor

Eventos enviados pelo cliente devem representar intenções ou comandos.

Exemplos:

```txt
campaign:join
campaign:leave
token:move
character:update
scene:change
dice:roll
chat:message:send
```

Eventos emitidos pelo servidor devem representar fatos confirmados.

Exemplos:

```txt
campaign:joined
campaign:left
token:moved
character:updated
scene:changed
dice:rolled
chat:message:sent
```

O cliente não deve tratar uma intenção como verdade antes da confirmação do servidor.

Sempre que uma ação alterar estado persistente, emita o evento para a sala somente depois que a operação for validada e confirmada.

---

## 5.8. Performance em Tempo Real

Para funcionalidades de alta frequência, como movimento de tokens, cursor, desenho no canvas ou medições, considere:

* throttling;
* debouncing;
* rate limiting;
* compactação de payload;
* envio de deltas em vez de estado completo;
* validação leve no Gateway;
* validação definitiva no caso de uso;
* persistência controlada;
* snapshots periódicos;
* reconciliação entre cliente e servidor.

Nem todo evento em tempo real precisa ser persistido imediatamente.

Classifique eventos em:

* efêmeros;
* sincronizados;
* persistentes.

Exemplos:

```txt
cursor:moved -> efêmero
token:dragging -> sincronizado
token:moved -> persistente
scene:changed -> persistente
chat:message:sent -> persistente
```

---

## 6. Diretrizes de Código — Clean Code

### 6.1. SOLID

Respeite os princípios SOLID, especialmente:

* responsabilidade única;
* inversão de dependência;
* segregação de interfaces;
* baixo acoplamento;
* alta coesão.

### 6.2. Nomenclatura

Nomes devem revelar intenção.

Evite abreviações.

Prefira:

```txt
campaignRepository
characterSheetService
calculateTokenPosition
```

Evite:

```txt
campRepo
charSvc
calcPos
```

### 6.3. TypeScript Rigoroso

Use TypeScript de forma rigorosa.

Regras:

* não use `any`;
* prefira `unknown` quando necessário;
* modele respostas com unions discriminadas;
* crie tipos explícitos para payloads;
* valide dados externos antes de usá-los;
* não confie em payload vindo do cliente.

### 6.4. Desacoplamento

Módulos não devem se conhecer intimamente.

Use:

* interfaces;
* adapters;
* facades;
* injeção de dependência;
* eventos de domínio;
* contratos explícitos.

Evite:

* imports cruzados entre módulos sem necessidade;
* lógica de um módulo dentro de outro;
* acesso direto a infraestrutura em domínio ou aplicação;
* duplicação de regra de negócio no Frontend e Backend.

### 6.5. Tamanho de Arquivos e Funções

Mantenha arquivos, funções e classes pequenos.

Como referência:

* uma função deve fazer uma coisa bem definida;
* um arquivo deve ter uma responsabilidade clara;
* componentes React devem ser quebrados quando acumularem responsabilidades;
* casos de uso devem ser legíveis sem exigir navegação excessiva.

### 6.6. Object Calisthenics com Bom Senso

Use Object Calisthenics como guia de qualidade, não como dogma cego.

Princípios preferenciais:

1. Prefira baixo nível de indentação.
2. Evite `else` quando `early return` deixar o código mais claro.
3. Envolva primitivos em Value Objects quando eles representarem conceitos importantes do domínio.
4. Use coleções especializadas quando houver comportamento relevante associado à coleção.
5. Respeite a Lei de Demeter, evitando cadeias longas de acesso.
6. Não abrevie nomes.
7. Mantenha arquivos e classes pequenos.
8. Minimize estado interno desnecessário.
9. Prefira Tell, Don't Ask quando isso melhorar encapsulamento.

Não sacrifique legibilidade apenas para cumprir uma regra formal.

---

## 7. Testes

Sempre que implementar ou alterar comportamento relevante, inclua ou atualize testes.

Priorize:

* testes unitários para domínio;
* testes unitários para casos de uso;
* testes de integração para repositórios;
* testes de contrato para APIs;
* testes de contrato para eventos WebSocket;
* testes de componentes quando houver comportamento de UI relevante.

Para WebSocket, valide pelo menos:

* payload aceito;
* payload inválido;
* usuário não autenticado;
* usuário sem permissão;
* emissão correta para room;
* ACK de sucesso;
* ACK de erro;
* ausência de vazamento entre campanhas.

---

## 8. Banco de Dados e Persistência

Mudanças de persistência devem ser documentadas em `specs.md`.

Ao alterar schema, documente:

* tabelas afetadas;
* campos novos;
* campos removidos;
* relacionamentos;
* índices;
* constraints;
* regras de integridade;
* impacto em dados existentes;
* estratégia de migração.

Repositórios devem esconder detalhes de persistência da aplicação.

Casos de uso não devem depender diretamente de queries SQL, Prisma Client, TypeORM Repository ou qualquer API concreta de banco.

---

## 9. Segurança

Nunca confie no cliente.

Valide sempre no Backend:

* autenticação;
* autorização;
* posse de recursos;
* associação com campanha;
* permissões por papel;
* limites de payload;
* tipos de dados;
* rate limits;
* ações sensíveis.

Dados sensíveis não devem ser emitidos para rooms de campanha sem necessidade.

Eventos privados devem ser enviados por room de usuário ou canal equivalente.

---

## 10. Prioridade das Fontes de Verdade

Em caso de conflito, siga esta ordem:

1. instrução explícita mais recente do usuário;
2. documentação do módulo em `.ai/<module>/`;
3. contratos existentes no código;
4. padrões globais deste arquivo;
5. boas práticas gerais.

Se a instrução do usuário contradizer uma regra crítica de segurança, arquitetura ou integridade de dados, explique o problema e proponha uma alternativa segura.

---

## 11. Estilo de Resposta da IA

Ao responder, seja objetivo, técnico e prático.

Sempre que gerar código:

* explique brevemente a decisão;
* mostre os arquivos alterados;
* mantenha os exemplos aderentes ao projeto;
* evite soluções genéricas demais;
* evite implementar fora do escopo solicitado;
* não oculte impactos arquiteturais.

Quando houver risco de acoplamento, quebra de contrato ou inconsistência com o SDD, sinalize antes da implementação.

Quando a solução exigir uma decisão arquitetural importante, registre a decisão na documentação do módulo.

---

## 12. Definição de Entrega Completa

Uma entrega só é considerada completa quando:

* o módulo correto foi identificado;
* a documentação relevante em `.ai/<module>/` foi auditada;
* os contratos foram atualizados quando necessário;
* o código segue os contratos documentados;
* a separação entre camadas foi respeitada;
* a tipagem TypeScript está segura;
* permissões e validações foram consideradas;
* testes foram criados ou atualizados quando necessário;
* não há regra de negócio escondida em componente visual, controller ou listener WebSocket;
* não há dependência indevida entre domínio e infraestrutura.
