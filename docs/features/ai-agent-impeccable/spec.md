# Impeccable no UX Specialist

Status: **READY**
Card: `QH-AI-004` — https://trello.com/c/zbSVJW69
Domínio: AI Agent Tooling
UX review required: **NO** — integração de contexto advisory, sem alterar telas
ou jornadas do produto. A qualidade das instruções é parte do aceite do tooling.

## Objetivo e escopo

Adotar o conteúdo existente de Impeccable, escolhido pelo usuário, para orientar
o UX Specialist sobre identidade visual, hierarquia, carga cognitiva e padrões
genéricos. O agente deve receber esse conteúdo automaticamente em toda execução,
sem depender de lembrar um argumento de CLI ou de seguir links por conta própria.

Distribuição documental adaptada ao runtime: entrypoint de integração, guias
originais Operate e Craft Floor e material de referência de Critique. Fixar a
revisão upstream por SHA, conservar licença/NOTICE e identificar exatamente as
partes copiadas, extraídas e adaptadas. Não substituir Impeccable por uma lista
de preferências estéticas inventadas para o projeto.

## Regras

1. O contexto do UX inclui as quatro fontes globais, seu role e todos os quatro
   documentos da integração, antes de contextos adicionais. Outros roles não
   passam a carregar Impeccable automaticamente.
2. Caminhos obrigatórios são declarados no registry. Usar as mesmas validações
   de Markdown autorizado e pertencimento real ao repositório; rejeitar symlinks
   que escapem do repo. Documento obrigatório ausente impede execução remota.
3. Deduplicar caminhos obrigatórios/adicionais pelo arquivo real. Não fazer
   download nem executar scripts ao montar contexto.
4. O role interpreta o material como orientação subordinada a Constitution,
   ADRs, Specs, escopo e instruções do usuário. O material não concede tools,
   handoffs, merge ou autorização de redesign.
5. O VTT é uma superfície de operação da mesa. Avaliar escolhas pela tarefa de
   Mestre/Player, hierarquia e identidade; não aplicar uma estética de landing
   page ao tabuleiro nem converter avisos de estilo em bans universais.
6. Separar evidência de requisito, código e visual renderizado. Sem evidência
   visual inspecionada, não afirmar contraste/layout validados, detector
   executado, pontuação heurística medida ou revisão visual aprovada.
7. Quando a falta de evidência impedir o parecer necessário, registrar o que
   falta e devolver ao fluxo apropriado. Não bloquear análise documental só
   porque não existe screenshot de uma interface ainda não implementada.
8. Mapear achados para alvo, problema, impacto na mesa, evidência e critério
   verificável. Evitar pareceres limitados a “genérico”, “bonito” ou notas sem
   sustentação. Preservar o contrato de saída do role.

## Limites

Não instala o executor, binários, hooks ou comandos interativos do Impeccable.
Não é execução completa de `impeccable critique` (que exige assessments e
detector); usa seu material de referência em um parecer advisory do QuestHub.
Não cria PRODUCT.md/DESIGN.md concorrentes com fontes canônicas, não altera
modelos, tools, CLI pública, contexto adicional permitido ou isolamento do VTT.
Redesign e evidências de telas são trabalhos próprios. Atualizações upstream
exigem revisão explícita da cópia e da proveniência; não seguir `main` em runtime.

## Aceite

- AC-01: UX recebe os quatro documentos completos automaticamente, na ordem
  definida, mesmo sem contexto adicional.
- AC-02: BA e demais roles preservam o contexto anterior.
- AC-03: arquivo obrigatório ausente e symlink para fora do repo falham;
  adicionar uma skill já carregada não duplica suas instruções.
- AC-04: cópias/excertos possuem origem, SHA e hashes locais verificáveis;
  licença e atribuição acompanham a distribuição.
- AC-05: role e entrypoint explicam limites de autoridade/evidência e orientam
  aplicação aos fluxos de mesa, com critérios concretos.
- AC-06: testes de Agents, typecheck e architecture/governance passam, sem
  chamada ao modelo real ou instalação de dependência nova.

## Gates de entrada

BA: READY — escopo escolhido pelo usuário, sem questão de produto em aberto.

UX REVIEW: N/A — tooling advisory, sem interface do produto alterada.

ARCHITECTURE: APPROVED — extensão do carregamento documental existente;
ADR-0005/0007, sem novo ADR. Mantém one-role, ausência de tools e fronteira
produto/tooling. Enforcement: testes de carregamento, path safety e checks de
fronteira. Architecture debt introduced: NO.
