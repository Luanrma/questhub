# QuestHub --- Refatoração Geral das Especificações e Organização Arquitetural

> Status: Proposta Objetivo: Reestruturar toda a documentação técnica
> utilizada pelos agentes de IA. Idioma: Português (Brasil)

# Objetivo

O objetivo desta refatoração NÃO é alterar funcionalidades do QuestHub.

O objetivo é reorganizar toda a documentação técnica para que qualquer
agente (ChatGPT, Claude Code, Codex, Cursor, Windsurf etc.) consiga
compreender rapidamente a arquitetura do projeto e produzir código
consistente.

A documentação deverá ser tratada como a fonte oficial de verdade
(Spec-Driven Development).

# Problemas Atuais

-   Informações distribuídas em diversos arquivos.
-   Alguns módulos possuem documentação detalhada enquanto outros não.
-   Mistura entre regras globais e regras específicas.
-   Pouca padronização entre módulos.
-   Alguns documentos descrevem implementação em vez do domínio.
-   Regras específicas de Pathfinder aparecem fora do package do
    sistema.
-   Pouca clareza sobre responsabilidades do Core e dos Game Systems.

# Objetivos

-   Padronizar toda a estrutura `.ai/`.
-   Tornar cada módulo autocontido.
-   Separar domínio, arquitetura e implementação.
-   Eliminar duplicidade.
-   Facilitar onboarding de agentes.
-   Tornar o Core completamente agnóstico aos sistemas de RPG.

# Estrutura desejada

Cada módulo deve seguir a mesma organização:

``` text
.ai/
  module/
    overview.md
    requirements.md
    architecture.md
    domain.md
    contracts.md
    flows.md
    persistence.md
    api.md
    websocket.md
    decisions.md
    implementation-plan.md
    test-plan.md
    glossary.md
```

Nem todos os arquivos são obrigatórios, porém a estrutura deve ser
consistente.

# agent.md

O agent.md deve conter apenas diretrizes globais.

Não deve conter detalhes de módulos específicos.

Exemplos:

-   princípios arquiteturais
-   convenções
-   estilo de código
-   DDD
-   SDD
-   Clean Architecture
-   padrões de nomenclatura
-   regras de documentação
-   organização do monorepo

# Separação entre Core e Sistemas

O Core nunca poderá conhecer regras de Pathfinder.

Toda regra específica deve existir apenas em:

``` text
packages/game-system-*/
```

O Core apenas define contratos.

Os packages implementam os contratos.

# Contratos

Todo ponto de extensão do sistema deve possuir documentação formal.

Cada contrato deve documentar:

-   responsabilidade
-   entradas
-   saídas
-   erros
-   ciclo de vida
-   exemplos
-   extensibilidade

# Especificações

As especificações devem explicar:

-   POR QUE o módulo existe;
-   O QUE ele resolve;
-   COMO conversa com outros módulos;

Devem evitar explicar apenas "como o código funciona".

# Diagramas

Adicionar diagramas Mermaid quando fizer sentido:

-   sequência
-   fluxo
-   dependências
-   arquitetura

# Checklist

-   [ ] Revisar toda a pasta .ai.
-   [ ] Identificar documentação obsoleta.
-   [ ] Remover duplicidades.
-   [ ] Criar padrão único.
-   [ ] Atualizar agent.md.
-   [ ] Documentar todos os bounded contexts.
-   [ ] Documentar contratos entre módulos.
-   [ ] Revisar nomenclaturas.
-   [ ] Separar documentação do Core e dos Game Systems.
-   [ ] Criar glossário único.
-   [ ] Atualizar planos de implementação.
-   [ ] Atualizar planos de testes.

# Critérios de Aceite

A refatoração será concluída quando:

-   qualquer agente conseguir compreender a arquitetura sem explorar o
    código inicialmente;
-   exista um padrão único para todos os módulos;
-   o Core esteja documentado como totalmente agnóstico;
-   cada Game System documente apenas suas próprias regras;
-   todas as especificações estejam consistentes entre si;
-   a documentação seja suficiente para orientar implementações futuras
    sem decisões implícitas.

# Resultado Esperado

Ao final da refatoração, a documentação do QuestHub deverá representar
fielmente a arquitetura do projeto e servir como guia principal para
desenvolvimento humano e assistido por IA.
