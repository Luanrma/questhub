# Objetivo do Sistema

## Proposito principal

QuestHub e uma plataforma web para organizar campanhas de RPG de mesa. O codigo atual implementa cadastro/login, biblioteca de personagens, criacao de campanhas, entrada por codigo de convite, aprovacao de jogadores, ficha Pathfinder 2e e presenca online em campanha.

## Problemas que resolve

- Centraliza o cadastro de usuarios.
- Permite criar personagens antes de entrar em campanhas.
- Permite criar uma campanha com um personagem mestre.
- Permite convidar jogadores por `inviteCode`.
- Permite controlar entrada publica ou privada.
- Permite aprovar ou recusar solicitacoes de entrada.
- Permite abrir uma area de campanha com presenca em tempo real.
- Permite editar e salvar ficha Pathfinder 2e em JSON validado.

## Principais fluxos de negocio

- Cadastro e login: usuario cria conta ou autentica; API gera hash/valida senha; API grava cookie JWT; Web carrega `/api/me`.
- Criacao de personagem: usuario informa nome, sistema `PATHFINDER_2E`, avatar e bio; API cria `Character` e ficha default.
- Criacao de campanha: usuario informa titulo, politica de entrada e personagem mestre; API cria campanha e vincula personagem como `MASTER` ativo.
- Entrada em campanha: usuario busca por `inviteCode`, informa personagem e entra como `PLAYER`; campanhas privadas deixam entrada `PENDING`.
- Aprovacao de jogadores: mestre lista participantes, aprova ou rejeita; API atualiza status e emite evento.
- Presenca em campanha: Web emite `presence:enter`; mestre online torna campanha online; saida do mestre derruba jogadores da sala.
- Ficha de personagem: usuario abre modal, edita campos Pathfinder 2e e salva envelope validado.

## Atores envolvidos

- Usuario autenticado: cria personagens, cria ou entra em campanhas.
- Mestre: usuario com `CampaignCharacter.role = MASTER`; cria campanha, controla status online e aprova jogadores em campanhas privadas.
- Jogador: usuario com `CampaignCharacter.role = PLAYER`; entra por convite e acessa campanha se ativo e se o mestre estiver online.
- Sistema/API: valida dados, autentica, persiste estado e emite eventos.

## Funcionalidades centrais

- Cadastro, login, logout e sessao atual.
- Listagem, criacao e edicao parcial de personagens.
- Avatar por preset local ou URL.
- Ficha Pathfinder 2e com identidade, atributos, vida, proficiencias e notas.
- Criacao de campanha Pathfinder 2e.
- Invite code unico para campanha.
- Entrada publica ou privada.
- Aprovacao/rejeicao de participantes.
- Listagem de campanhas do usuario.
- Presenca online por campanha.
- Notificacoes simples por `alert` no frontend.

## Visao de produto

Hipotese: pelo nome, telas e textos, o produto busca ser um hub operacional para grupos de RPG gerenciarem campanhas, personagens e sessoes em um unico ambiente.

Comportamento comprovado no codigo: a versao atual concentra gestao de acesso a campanhas e personagens, com ficha Pathfinder 2e como primeiro sistema implementado. Algumas areas planejadas aparecem como placeholder, especialmente sessoes, diario e personagens dentro da campanha.

## Contexto operacional

- Desenvolvimento local com Node.js 22+, npm e Docker.
- Banco PostgreSQL exposto localmente na porta `5434` pelo `docker-compose.yml`.
- API exposta em `http://localhost:3001`.
- Web exposta em `http://localhost:5173`.
- Variaveis de ambiente ficam na raiz em `.env`.
- Deploy em producao exige `JWT_SECRET`, `DATABASE_URL`, `WEB_ORIGIN` e politica de CORS correta.
- Presenca online atual e volatil e local ao processo da API.

