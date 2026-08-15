# QuestHub Project Constitution

Status: **ACCEPTED**

Este documento define invariantes arquiteturais e de governança do QuestHub. Ele não descreve detalhes de implementação e não deve ser alterado como efeito colateral de uma feature.

## 1. Campaign é a fronteira do mundo

- `Campaign` é a fronteira máxima de isolamento dos dados de jogo.
- Ator, ficha, inventário, Token, cena, efeitos e demais recursos pertencentes a uma campanha não podem atravessar para outra campanha.
- Relações entre recursos de campanha devem preservar o `campaignId` correto de ponta a ponta.

## 2. Participação e entidades da campanha são conceitos distintos

- `CampaignMember` representa a participação de um `User` na campanha, incluindo papel e status.
- `CampaignActor` representa uma entidade existente dentro da campanha.
- Um `CampaignActor` não representa participação de usuário e não deve incorporar papel ou status de membro.
- Controle de atores deve ser modelado explicitamente por relações de controle, não por ownership implícito na entidade do ator.

## 3. Token é independente de Actor

- `CampaignToken` é uma entidade visual e operacional do VTT.
- Um Token pode existir sem `CampaignActor` vinculado.
- Excluir um Token não implica excluir um Actor.
- Excluir ou arquivar um Actor não implica excluir um Token.
- Criar, posicionar, mover, ocultar ou remover Tokens não pode depender da existência de ficha mecânica ou de regras de um game system.

## 4. VTT Core é agnóstico a game systems

O VTT Core pode fornecer capacidades genéricas como:

- cenas, mapas, grid e paredes;
- Tokens e posicionamento;
- seleção de alvos;
- áreas e overlays;
- recursos visuais genéricos;
- rolagens solicitadas por contrato;
- permissões, visibilidade e eventos em tempo real.

O VTT Core não pode interpretar:

- atributos específicos;
- PV, CA ou equivalentes de um sistema concreto;
- classes, ancestralidades, condições ou progressão;
- magias e suas regras mecânicas;
- fórmulas de dano, defesa ou iniciativa;
- moedas ou equipamentos específicos de um ruleset.

## 5. Game systems possuem as regras mecânicas

- Cada game system interpreta exclusivamente seus próprios schemas, regras, cálculos e conteúdo mecânico.
- Um game system não pode importar implementação de outro game system.
- Engines de game system devem conversar com o VTT por contratos agnósticos.
- Engines não devem depender de React, JSX, Canvas/Pixi, Socket.IO ou detalhes internos de apresentação/transporte do VTT.

## 6. Segurança é responsabilidade do backend

- Autenticação, autorização, pertencimento à campanha, ownership e permissões devem ser validados no backend.
- O frontend nunca é considerado fronteira de segurança.

## 7. Mudanças arquiteturais exigem decisão explícita

- Uma feature não pode alterar implicitamente uma decisão arquitetural.
- Alterações que modifiquem um invariante, uma fronteira entre domínios ou um contrato estrutural exigem ADR.
- ADR aceito não é reescrito para apagar histórico. Uma nova decisão deve substituí-lo explicitamente com `Supersedes`.

## 8. Ambiguidade não autoriza decisão autônoma

- Nenhum agent pode preencher uma lacuna de produto ou arquitetura apenas por considerar uma solução tecnicamente razoável.
- Quando duas fontes autoritativas divergirem, a execução deve ser bloqueada e a divergência registrada.
- Quando documentação e implementação divergirem, não é permitido atualizar silenciosamente uma para combinar com a outra.

## 9. Exceções precisam ser visíveis

- Exceções arquiteturais temporárias devem possuir justificativa, responsável lógico e caminho de remoção.
- Whitelists e bridges entre fronteiras não podem crescer sem uma decisão arquitetural explícita.

## 10. Entrega inclui coerência

Uma mudança só está concluída quando código, contratos, testes e documentação autoritativa aplicável descrevem o mesmo comportamento.
