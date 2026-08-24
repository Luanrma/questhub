# Campaign Game Log — Especificação

## 1. Objetivo

O Campaign Game Log é o registro operacional de eventos mecânicos da mesa. Ele fica separado do Chat, que existe exclusivamente para diálogo entre participantes e atores.

Princípio de produto:

> Todo evento mecânico suportado aparece no Log em tempo real; apenas eventos ocorridos durante um Encontro ativo são persistidos.

O módulo é genérico e não interpreta regras de Pathfinder 2e ou de qualquer outro Game System.

## 2. Fronteiras

Incluído no primeiro recorte:

* rolagens de dados solicitadas pela mesa;
* início e encerramento de Encontro;
* adição e remoção de participantes;
* ajuste de iniciativa;
* avanço e retorno de turno;
* consulta do histórico persistido por campanha e Encontro;
* entrega realtime dos eventos transitórios e persistidos;
* painel Log no mesmo dock do Chat, com opção de destacar, arrastar, redimensionar e prender novamente.

Fora do recorte:

* interpretação de acerto, dano, cura, condições ou consumo de recursos;
* automação ou bloqueio de regras;
* rolagens privadas;
* migração retroativa de antigas mensagens de rolagem gravadas no Chat;
* persistência de movimentos, presença, fog, seleção ou outras ações puramente visuais;
* criação de eventos mecânicos arbitrários pelo cliente.

## 3. Contrato de domínio

```ts
type CampaignGameLogEntry = {
  id: string
  campaignId: string
  encounterId: string | null
  eventType: string
  summary: string
  payload: Record<string, unknown>
  createdAt: string
  persistent: boolean
}
```

Regras:

* `eventType` é extensível; consumidores devem renderizar tipos desconhecidos usando `summary`.
* `payload` preserva dados estruturados e snapshots necessários para leitura histórica, sem exigir vínculo vivo com ator, token ou usuário.
* `persistent = true` exige `encounterId` pertencente à mesma campanha.
* Eventos transitórios usam `encounterId = null`, existem apenas no estado vivo dos clientes conectados e não são recuperados após recarga.
* Eventos persistidos permanecem consultáveis depois do fim do Encontro.
* Nenhum evento mecânico cria `ChatMessage`.

Tipos produzidos no primeiro recorte:

```txt
DICE_ROLL
ENCOUNTER_STARTED
ENCOUNTER_PARTICIPANTS_ADDED
ENCOUNTER_PARTICIPANTS_REMOVED
ENCOUNTER_INITIATIVE_ADJUSTED
ENCOUNTER_TURN_CHANGED
ENCOUNTER_ENDED
```

## 4. Persistência

```prisma
model CampaignEncounter {
  id                String
  campaignId        String
  sceneId           String?
  sceneNameSnapshot String?
  startedAt         DateTime
  endedAt           DateTime?
  endReason         String?
}

model CampaignGameLogEntry {
  id          String
  campaignId  String
  encounterId String
  eventType   String
  summary     String
  payload     Json
  createdAt   DateTime
}
```

Regras:

* apenas o servidor cria encontros e entradas persistentes;
* cada entrada persistente referencia obrigatoriamente um Encontro da mesma campanha;
* `sceneId` usa `SET NULL`; o nome da cena usado no início fica preservado em snapshot;
* excluir a campanha exclui seus Encontros e entradas;
* encerrar o Encontro define `endedAt` e `endReason`, sem excluir entradas;
* iniciar um novo Encontro fecha qualquer registro aberto obsoleto da campanha antes de criar o próximo;
* entradas antigas de rolagem que já existam no Chat não são alteradas por este recorte; novas rolagens nunca são enviadas ao Chat.

## 5. Lifecycle do Encontro

O estado vivo de Encounter Mode continua em memória e passa a carregar `encounterId`:

```ts
type VttCombatState = {
  encounterId: string
  campaignId: string
  sceneId: string
  // demais campos existentes
}
```

O registro persistente é encerrado antes de remover o estado vivo quando ocorrer:

* comando manual (`MANUAL`);
* remoção do último participante (`NO_PARTICIPANTS`);
* troca de cena (`SCENE_CHANGED`);
* encerramento de sessão (`SESSION_ENDED`);
* substituição por um novo Encontro (`REPLACED`).

Falha ao persistir um evento de Encontro impede a confirmação da transição correspondente. O realtime é emitido somente depois da persistência bem-sucedida.

## 6. HTTP e realtime

### HTTP

`GET /api/campaigns/:campaignId/game-log/entries`

* exige membro ativo da campanha;
* retorna somente entradas persistidas, em ordem cronológica;
* aceita `encounterId` opcional para consultar um Encontro específico, sempre dentro da campanha da rota;
* o primeiro recorte retorna as 250 entradas mais recentes, preservando ordem cronológica na resposta.

### Socket.IO

Fato emitido pelo servidor:

```txt
game-log:entry:created
```

O payload é `CampaignGameLogEntry`. O evento é enviado à sala da campanha depois da validação do comando que o originou.

Rolagens continuam sendo solicitadas pelo contrato `vtt:dice:roll`. O servidor emite `vtt:dice:rolled` para compatibilidade visual e publica também a entrada correspondente no Game Log. Fora de Encontro, esta entrada é transitória; dentro de Encontro, é persistida.

## 7. UI/UX

* Chat e Log ocupam o mesmo dock lateral e possuem seletor explícito `Chat | Log`.
* Chat renderiza somente diálogo.
* Log renderiza todos os eventos mecânicos recebidos durante a vida da página e o histórico persistido consultado.
* Cada entrada indica `Histórico` ou `Temporário`.
* Ao destacar o Log, o dock lateral volta a mostrar o Chat e o Log vira janela flutuante.
* A janela flutuante pode ser arrastada e redimensionada, respeitando limites mínimos e a viewport.
* A ação no canto superior direito prende o Log novamente no dock original.
* Alternar, destacar e prender não remove entradas nem reinicia a posição de leitura.
* O estado de destaque é local ao cliente e não é persistido entre dispositivos.
* Tipos conhecidos podem ter apresentação especializada; tipos desconhecidos mostram data, `summary` e marcador de persistência.

## 8. Segurança e isolamento

* consulta exige `CampaignMember` ativo;
* comandos mecânicos preservam suas regras atuais de autorização antes de publicar no Log;
* o cliente não escolhe `persistent`, `encounterId`, `eventType` ou identidade histórica de uma entrada;
* toda relação persistida deve ser validada no mesmo `campaignId`;
* o Log não torna informação oculta visível: produtores devem publicar apenas snapshots já autorizados para toda a sala da campanha.

## 9. Compatibilidade futura

QH-TLC-005 poderá acrescentar contexto guiado de rolagem — origem, ação, modificadores e expressão — dentro de `payload`, sem alterar a decisão de persistência nem converter o Log em motor de regras. A expressão livre permanece um atalho de entrada, não uma autoridade normativa.

## 10. Critérios de aceitação

* uma nova rolagem nunca aparece nem é persistida como mensagem do Chat;
* toda rolagem válida aparece no Log dos clientes conectados;
* rolagem fora de Encontro recebe marcador `Temporário` e desaparece após recarga;
* rolagem durante Encontro recebe marcador `Histórico` e reaparece após recarga;
* eventos de lifecycle, participantes, iniciativa e turno do Encontro são persistidos e exibidos;
* encerrar Encontro preserva seu histórico;
* membro de outra campanha não consegue consultar as entradas;
* Chat e Log são intercambiáveis no dock;
* Log destacado pode ser arrastado e redimensionado;
* a ação de prender devolve o Log ao dock;
* entradas e posição de leitura são preservadas ao alternar entre os dois modos;
* o domínio base não contém campos nem decisões específicas de Pathfinder 2e.
