# QuestHub — Agent Router

Este arquivo orienta qualquer agente de IA que trabalhe no repositório QuestHub.

Ele **não é fonte de verdade de produto ou arquitetura**. Seu papel é indicar quais fontes devem ser lidas e qual processo deve ser seguido.

## 0. Preflight de rastreabilidade

Antes de criar ou alterar Feature Spec, branch, código, schema, documentação de entrega ou qualquer outro artefato, classifique a tarefa conforme ADR-0007.

### Trabalho com card Trello obrigatório

Um card deve existir antes de prosseguir quando a mudança envolver:

- comportamento funcional, feature ou bug observável;
- código executável do produto em `apps/`;
- schema, migration ou persistência estrutural;
- contrato HTTP/realtime/tipo público ou integração entre domínios;
- autenticação, autorização, segurança, ownership ou isolamento de Campaign;
- arquitetura de produto ou fronteira VTT/Game System;
- regra, cálculo, automação ou mecânica de Game System.

Nesse modo:

1. confirme que existe um card no board Trello do QuestHub;
2. se não existir, crie o card em `INBOX` antes de prosseguir;
3. use o identificador `QH-*` como identidade operacional da entrega;
4. faça a Feature Spec e o Pull Request referenciarem esse card quando aplicável;
5. mova o card pelos gates aplicáveis; não pule diretamente para Development.

### Manutenção `NO-CARD`

Manutenção estritamente não funcional pode declarar `NO-CARD`, incluindo reorganização de documentação, correção de caminhos/links, nomes, ortografia, formatação e housekeeping documental equivalente.

`NO-CARD` deve ser explícito e justificado. Não pode ser usado para contornar a esteira. Se o escopo crescer para uma categoria que exige card, pare antes da expansão e crie o card.

Trello representa workflow, prioridade e estado. Requisitos e decisões continuam versionados no repositório conforme `docs/governance/SOURCE_OF_TRUTH.md`.

Referência vigente: ADR-0007. ADR-0006 preserva a política universal anterior e está supersedido.

## 1. Contexto obrigatório

Antes de analisar ou modificar comportamento do produto, leia nesta ordem:

1. `docs/PROJECT_CONSTITUTION.md`
2. `docs/governance/SOURCE_OF_TRUTH.md`
3. `docs/ARCHITECTURE.md`
4. ADRs aplicáveis em `docs/architecture/adr/`
5. Feature Spec aplicável, quando existir
6. contratos executáveis e código relevante

Não implemente com base apenas em texto de Trello, conversa, comentário ou README auxiliar.

## 2. Hierarquia

A autoridade documental é definida exclusivamente por:

`docs/governance/SOURCE_OF_TRUTH.md`

Em caso de divergência, não escolha silenciosamente a fonte que parecer mais recente ou mais conveniente.

Use o protocolo `CONSISTENCY: BLOCKED` definido naquele documento.

## 3. `.ai/`

A pasta `.ai/` é reservada exclusivamente às definições de role em `.ai/agents/*.md`.

Regras:

- requisitos e Specs de produto pertencem a `docs/features/`;
- documentação de um Game System concreto pertence a `docs/features/game-system/<game-system>/`;
- decisões arquiteturais pertencem a `docs/architecture/adr/`;
- arquitetura consolidada pertence a `docs/ARCHITECTURE.md`;
- `.ai/agents/*.md` define identidade, missão, responsabilidades, limites e formato de saída dos roles;
- modelo, reasoning, runtime, políticas operacionais e workflow não devem ser incorporados como documentação de produto dentro de `.ai/`;
- qualquer arquivo novo em `.ai/` fora de `.ai/agents/*.md` viola a governança documental.

### Papéis operacionais

Use o papel correspondente ao gate atual da esteira:

- BA: `.ai/agents/ba.md`
- Architect: `.ai/agents/architect.md`
- Developer: `.ai/agents/developer.md`
- Code Reviewer: `.ai/agents/code-reviewer.md`
- Documentation Auditor: `.ai/agents/documentation-auditor.md`
- QA: `.ai/agents/qa.md`

Um papel não herda automaticamente a autoridade de outro. Em especial, Developer não aprova a própria implementação, Code Reviewer não substitui QA e nenhum desses papéis decide arquitetura no lugar do Architect.

### Loop autônomo entre gates

Quando o usuário autorizar explicitamente a execução autônoma até um gate humano, siga também `docs/governance/AUTONOMOUS_WORKFLOW.md`.

Nesse modo, retornos recuperáveis entre BA, Architecture, Development, Code Review, Documentation Audit e QA fazem parte do próprio loop e não devem interromper o usuário. `HUMAN APPROVAL` só pode ser declarado com gates aplicáveis revalidados e checks obrigatórios verdes; merge continua sendo responsabilidade humana.

## 4. Antes de qualquer mudança

Identifique explicitamente:

- modo de rastreabilidade: card Trello `QH-*` ou `NO-CARD` com justificativa;
- objetivo da mudança;
- domínio afetado;
- se pertence ao VTT Core, Game System Runtime/contratos, Composition Root ou engine concreta;
- camadas afetadas: frontend, backend, realtime, persistência, testes, documentação;
- Feature Spec relacionada, quando aplicável;
- ADRs relacionados;
- impacto em contratos existentes;
- impacto em isolamento de Campaign e permissões.

## 5. Feature development

Mudança funcional deve possuir Feature Spec suficiente para implementação e validação e, por ser trabalho governado, deve possuir card Trello.

Uma Feature Spec deve referenciar seu card Trello e definir, conforme aplicável:

- objetivo;
- escopo;
- fora de escopo;
- regras;
- permissões;
- estados/fluxos;
- contratos;
- erros esperados;
- critérios de aceite.

Se uma decisão de produto necessária estiver ausente, não a invente durante a implementação.

## 6. Mudança arquitetural

Se a mudança alterar qualquer um dos itens abaixo, exija ADR:

- invariante da Project Constitution;
- ciclo de vida/ownership de entidade fundamental;
- isolamento por Campaign;
- fronteira VTT/Game System;
- contrato estrutural entre domínios;
- decisão registrada em ADR aceito;
- exceção/whitelist entre fronteiras arquiteturais.

Uma feature não pode alterar arquitetura como efeito colateral.

ADRs aceitos não são reescritos para apagar histórico. Quando uma decisão mudar, use um novo ADR com `Supersedes` e marque o anterior como `SUPERSEDED` com referência ao sucessor.

## 7. Fronteira VTT / Game System

Siga `ADR-0005-vtt-game-system-boundary.md`.

Regra resumida:

- VTT oferece capacidades e contratos genéricos;
- Game System interpreta regras;
- Composition Root seleciona/registra engines;
- VTT não importa implementação concreta de Game System;
- engine concreta não importa módulos internos do VTT;
- persistência agnóstica de dados mecânicos opacos é permitida;
- interpretação mecânica pelo Core é proibida.

Sempre execute/verifique `npm run check:architecture` quando a mudança tocar fronteiras relacionadas.

## 8. Campaign e Game System

Siga `ADR-0001-campaign-requires-game-system.md`.

Toda Campaign possui obrigatoriamente um Game System escolhido na criação.

Isso não significa que o módulo genérico de Campaign pode conter regras ou configurações concretas de Pathfinder, D&D ou outro ruleset.

## 9. Campaign isolation

Siga `ADR-0002-campaign-is-the-data-boundary.md`.

Recursos pertencentes a uma Campaign não podem vazar para outra. IDs combinados em uma operação devem ter sua pertença validada no backend quando aplicável.

## 10. Member, Actor e Token

Siga:

- `ADR-0003-member-actor-separation.md`
- `ADR-0004-token-actor-independence.md`

Resumo:

- CampaignMember = participação de User;
- CampaignActor = entidade do mundo;
- CampaignToken = representação visual/operacional;
- membership, Actor e Token possuem responsabilidades distintas;
- Token pode existir sem Actor;
- excluir Token não exclui Actor e vice-versa.

## 11. Segurança

- autenticação, autorização, ownership, pertencimento à Campaign e permissões são validados no backend;
- frontend nunca é fronteira de segurança;
- UI não deve ser usada como única proteção contra operações proibidas.

## 12. Realtime

Quando uma mudança persistida precisar aparecer de forma compartilhada na mesa, considere o fluxo realtime existente.

Para projeções mecânicas de Token, polling periódico não é o mecanismo arquitetural padrão. Use contratos/eventos de invalidação e leitura autenticada quando necessário.

## 13. Qualidade mínima antes de concluir

Verifique conforme o escopo:

- tipos/build;
- testes unitários;
- testes de contrato;
- invariantes de banco;
- `npm run check:architecture`;
- segurança/permissões;
- realtime;
- coerência entre rastreabilidade (`QH-*` ou `NO-CARD`), Spec/ADR/Architecture, código e testes.

Uma mudança funcional não está concluída se sua documentação autoritativa aplicável ficou incompatível.

## 14. O que um agente pode decidir sozinho

Pode decidir detalhes locais, reversíveis e estritamente de implementação quando eles não alterarem:

- requisito;
- critério de aceite;
- contrato público;
- persistência estrutural;
- permissão;
- comportamento observável relevante;
- arquitetura;
- decisão registrada.

Quando houver impacto nessas áreas, a decisão deve estar documentada ou ser escalada.

## 15. Princípio final

Não otimize para "fazer a feature funcionar".

Otimize para entregar uma mudança em que **intenção, arquitetura, contratos, código, testes e documentação continuem contando a mesma história**.
