# Feature Spec — UX Specialist e gate condicional de UX

Status: **READY**

Card: `QH-AI-002` — `https://trello.com/c/wYkkvefB`  
Domínio: `AI Agent Tooling / workflow de desenvolvimento`

## Objetivo

Adicionar ao workflow governado do QuestHub um `UX Specialist` especializado em
UX/UI, game design e RPGs de mesa. O role deve revisar mudanças que afetem a
experiência observável antes da Architecture Review, preservando uma linguagem
de interação coerente entre o VTT Core e as apresentações de cada Game System.

## Problema

BA transforma necessidades em requisitos e Architect protege decisões
estruturais, mas nenhum role possui responsabilidade explícita pela jornada do
Mestre e do Player, carga cognitiva durante a sessão, coerência visual,
responsividade, acessibilidade e qualidade dos estados de interação. Sem esse
gate, decisões de UX podem ser consolidadas tarde ou divergir entre áreas do VTT
e Game Systems.

## Escopo

- criar o role versionado `.ai/agents/ux-specialist.md`;
- registrar `ux-specialist` no runtime e na Model Policy;
- adotar `gpt-5.6-sol` com reasoning `high` como default operacional;
- permitir overrides `QH_AGENT_MODEL_UX_SPECIALIST` e
  `QH_AGENT_REASONING_UX_SPECIALIST` pelo mecanismo já existente;
- criar o gate condicional `UX REVIEW` entre `BA / REFINEMENT` e
  `ARCHITECTURE REVIEW`;
- definir critérios determinísticos de aplicabilidade e de `N/A`;
- definir entradas, responsabilidades, limites e formato de saída do parecer;
- integrar o gate ao router, workflow, templates, Project Map e documentação do
  runtime;
- cobrir registry, Model Policy, carregamento de contexto e referências de
  workflow com testes automatizados.

## Fora de escopo

- redesign de telas ou fluxos existentes;
- implementação do novo modelo de Encounter;
- acesso mutável a Figma ou outra ferramenta de design;
- geração obrigatória de mockups para toda mudança;
- handoffs ou transições de Trello executados automaticamente pelo runtime;
- tools de shell, filesystem, GitHub ou Trello para os Agents;
- segundo gate de UX após Development;
- autonomia de aprovação ou merge.

## Personas / permissões

- `BA`: classifica o impacto de UX e prepara requisitos observáveis;
- `UX Specialist`: revisa experiência e emite parecer advisory;
- `Architect`: recebe o parecer aprovado ou o `N/A` justificado antes de revisar
  arquitetura;
- `Developer`: implementa os critérios de UX já aprovados, sem redefini-los;
- `QA`: valida os critérios observáveis de UX junto aos demais ACs;
- coordenador externo/humano: executa o workflow e move o card; o runtime não
  recebe permissão mutável.

## Aplicabilidade do gate

`UX REVIEW` é obrigatório quando a mudança alterar ou introduzir ao menos um dos
itens abaixo:

1. jornada, navegação ou ordem de tarefas de Mestre ou Player;
2. layout, hierarquia visual, densidade, responsividade ou uso do espaço do VTT;
3. interação, gesto, atalho, foco, seleção, drag-and-drop ou feedback;
4. texto de interface, descobribilidade, confirmação, erro ou estado vazio;
5. acessibilidade por teclado, semântica, contraste ou tecnologias assistivas;
6. apresentação compartilhada entre VTT Core e um Game System;
7. identidade visual específica de Game System dentro da shell do QuestHub;
8. fluxo de mesa em tempo real, informação oculta ou carga operacional durante
   uma sessão de RPG.

`UX REVIEW: N/A` somente é válido quando não existe impacto observável, como em
refactor interno equivalente, manutenção documental sem mudança de significado
ou alteração de tooling sem interface. A justificativa deve ser explícita na
Feature Spec ou no PR. Dúvida sobre aplicabilidade resulta em review, não em
`N/A` silencioso.

## Princípios de revisão

1. o fluxo real da mesa prevalece sobre organização de tela semelhante a um
   dashboard administrativo;
2. ações frequentes de sessão devem reduzir troca de contexto e carga cognitiva;
3. a gramática de navegação, interação, estados e acessibilidade pertence à
   plataforma e deve permanecer reconhecível entre Game Systems;
4. um Game System pode expressar identidade visual e conteúdo próprios sem
   quebrar padrões de interação do VTT;
5. o UX Specialist não interpreta regras mecânicas nem decide a fronteira
   VTT/Game System;
6. wireframes, fluxos ou comparações visuais são exigidos somente quando tornam
   uma decisão materialmente mais verificável;
7. critérios aprovados devem ser observáveis e testáveis pelo QA;
8. ausência de assets ou de mockup de alta fidelidade não autoriza prometer uma
   experiência que a implementação não consegue reproduzir.

## Fluxo principal

1. BA produz ou atualiza a Feature Spec e declara
   `UX review required: YES | NO`.
2. Quando `NO`, BA registra justificativa verificável e o item segue para
   Architecture Review com `UX REVIEW: N/A`.
3. Quando `YES`, o card passa fisicamente por `UX REVIEW`.
4. UX Specialist lê a Spec, fontes autoritativas e evidências atuais necessárias.
5. UX Specialist valida jornadas, consistência VTT/Game System, estados,
   responsividade e acessibilidade, adicionando critérios observáveis à Spec.
6. `APPROVED` envia o card para Architecture Review; `BLOCKED` devolve ao BA.
7. Architect considera o parecer como requisito de experiência, sem substituí-lo
   por conveniência técnica.
8. QA valida os ACs de UX da Spec após a implementação; esta entrega não cria um
   segundo gate de UX.

## Estados e erros relevantes

- `UX REVIEW: APPROVED`: revisão aplicável concluída, sem questões abertas;
- `UX REVIEW: N/A`: impacto não observável e justificativa registrada;
- `UX REVIEW: BLOCKED`: falta decisão de produto/evidência ou a proposta viola um
  requisito de experiência; retorna para `BA / REFINEMENT`;
- `parecer ausente`: item com impacto de UX não pode entrar em Architecture
  Review;
- `implementação diverge do parecer`: QA falha e retorna para Development;
- `ambiguidade de produto`: UX Specialist não escolhe silenciosamente; devolve ao
  BA com pergunta objetiva.

## Contratos

### Role id

```text
ux-specialist
```

### Saída aprovada

```text
UX REVIEW: APPROVED
Applicability: REQUIRED
Journeys reviewed: <GM | PLAYER | BOTH>
Visual consistency: PASS
Tabletop flow: PASS
Accessibility/responsiveness: PASS | N/A com motivo
Acceptance criteria added or refined: <lista>
Open UX questions: 0
```

### Saída não aplicável

```text
UX REVIEW: N/A
Reason: <justificativa objetiva de ausência de impacto observável>
```

### Saída bloqueada

```text
UX REVIEW: BLOCKED
Finding: <problema observável>
Affected journey: <GM | PLAYER | BOTH>
Impact: <consequência durante o uso>
Required product decision: <pergunta objetiva, quando aplicável>
Return gate: BA / REFINEMENT
```

O formato é um contrato de saída textual para consumo externo. O runtime continua
executando um role por chamada e não move cards nem invoca outros Agents.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0007`
- [ ] Exige novo ADR

O role amplia o tooling read-only/advisory criado por `QH-AI-001` e o workflow
proporcional do ADR-0007. Não altera VTT Core, Game System Runtime, engines,
persistência do produto ou contratos HTTP/realtime. Nenhum handoff automático é
introduzido.

## Segurança / isolamento

- o runtime continua sem tools e sem acesso mutável;
- contexto adicional preserva as restrições a Markdown sob `docs/` ou `.ai/`;
- nenhuma credencial é adicionada ao role ou à Model Policy;
- o gate não altera autorização, ownership ou isolamento de Campaign no produto.

## Realtime

Não aplicável. A mudança pertence ao tooling e ao workflow de desenvolvimento.

## Critérios de aceite

### AC-01 — Role executável

Dado o runtime, quando `ux-specialist` é solicitado, então o role é reconhecido e
seu arquivo de instruções é carregado com o contexto obrigatório.

### AC-02 — Especialização explícita

Dado o arquivo do role, quando suas responsabilidades são lidas, então UX/UI,
game design, RPGs de mesa, harmonia do VTT e variações de Game System estão
explicitamente cobertos.

### AC-03 — Acionamento obrigatório

Dada uma mudança com impacto observável, quando o BA conclui o refinamento,
então `UX review required: YES` impede avanço direto para Architecture Review.

### AC-04 — N/A restrito

Dada uma mudança sem impacto observável, quando o gate é dispensado, então existe
justificativa explícita `UX REVIEW: N/A`.

### AC-05 — Ordem do workflow

Dado um item aplicável, quando percorre os gates, então a ordem é
`BA / REFINEMENT -> UX REVIEW -> ARCHITECTURE REVIEW`.

### AC-06 — Limites de autoridade

Dada uma ambiguidade de produto, regra mecânica ou decisão arquitetural, quando o
UX Specialist a encontra, então ele bloqueia/devolve ao responsável em vez de
decidi-la ou implementá-la.

### AC-07 — Harmonia entre camadas

Dada uma UI específica de Game System, quando revisada, então ela pode preservar
identidade própria sem quebrar a gramática de interação e acessibilidade do VTT.

### AC-08 — Saída verificável

Dado um review aplicável, quando aprovado ou bloqueado, então a saída segue um dos
formatos definidos e produz critérios observáveis para Architect e QA.

### AC-09 — Política de modelo

Dado `ux-specialist`, quando nenhuma variável de ambiente é fornecida, então a
política resolve `gpt-5.6-sol/high`; overrides com sufixo `UX_SPECIALIST`
continuam suportados.

### AC-10 — Runtime preservado

Dado o novo role, quando o runtime é inspecionado, então permanece one-role,
read-only/advisory, sem tools ou handoffs.

### AC-11 — Governança coerente

Dadas as fontes operacionais e templates, quando consultadas, então todas
reconhecem o gate condicional e sua posição antes de Architecture Review.

### AC-12 — Regressão

Dada a extensão, quando os checks são executados, então roles anteriores,
typecheck, testes de Agents, boundaries e documentação continuam verdes.

## Testes esperados

- exhaustividade entre arquivos de role, registry e Model Policy;
- default e overrides de `ux-specialist`;
- carregamento do arquivo do novo role pelo context loader;
- referências obrigatórias do gate nas fontes de workflow e templates;
- `npm run test:agents`;
- `npm run build:agents`;
- `npm run check:architecture`.

## Dependências

- `QH-AI-001` — runtime e política de modelos dos Agents;
- `ADR-0007` — rastreabilidade proporcional e workflow governado.

## Decisões relacionadas

- `ADR-0007` — card/workflow continuam externos e humanos-controlados;
- decisão humana de 2026-09-12 — opção 1: gate condicional próprio antes da
  Architecture Review.

## Questões abertas

Nenhuma.

## Resultado do BA

```text
BA: READY
Spec: docs/features/ai-agent-ux-review/spec.md
UX review required: YES
Architecture review required: YES
Open product questions: 0
```

## Resultado do UX Review

```text
UX REVIEW: N/A
Reason: QH-AI-002 altera tooling e workflow sem interface ou jornada observável do produto. A definição do próprio role é requisito operacional revisado por BA e Architect.
```

## Resultado do Architect

```text
ARCHITECTURE: APPROVED
ADRs: ADR-0007
Required enforcement: registry/Model Policy exhaustivos; context loader; workflow/template consistency; agent boundaries
Architecture debt introduced: NO
```

A extensão preserva o contrato one-role, read-only/advisory de QH-AI-001. O novo
gate continua externo ao runtime e não altera VTT Core, Game System Runtime,
engines, persistência ou contratos do produto. Nenhum novo ADR é necessário.
