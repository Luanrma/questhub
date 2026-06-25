# Modulo: Chat em Tempo Real (Skills & Tech)

## 1. Stack
* Backend: Fastify, Prisma e Socket.IO.
* Frontend: React, Socket.IO client e Tailwind CSS.
* Validacao: Zod para contratos HTTP e Socket.IO.

## 2. Padroes
* Bounded Context: regras de chat vivem em `apps/api/src/modules/chat`.
* Authorization Guard: leitura e escrita exigem `CampaignCharacter` ativo.
* Presenter: resposta HTTP e evento realtime usam o mesmo formato.
* Realtime Room: eventos sao emitidos para `campaign:{campaignId}`.

## 3. Restricoes Tecnicas
* Chat nao deve depender de regras de D&D 5e ou Pathfinder 2e.
* Chat nao deve inferir participacao por `createdByUserId`.
* Chat deve usar `CampaignCharacter`, nao usuario direto, como identidade operacional da mesa.
* A API deve limitar historico e tamanho da mensagem.
* Eventos Socket.IO devem ter ack com `{ ok, error? }`.

## 4. Eventos
* Cliente envia `chat:message:create`.
* Servidor emite `chat:message:created`.

## 5. UI
* O painel de chat fica no sidebar direito da mesa.
* Deve ter historico rolavel, campo de texto e botao de envio.
* O input fica desabilitado quando o personagem ativo ainda nao foi carregado.
