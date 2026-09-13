# Revisão do recorte — QH-ENC-001

Data: 2026-09-13
Card: https://trello.com/c/tw4LllTF
Escopo: análise documental da fundação e da próxima UX de combate.

## BA

Registrada a confirmação humana para iniciar o MVP integrado à ficha. Armas
equipadas, magias vinculadas e perfis manuais compõem o próximo fluxo; preparação,
slots e aplicação de consequências não são pré-requisitos. Critérios observáveis
estão em [Combate MVP — UX](combat-mvp-ux.md).

## Revisão de UX

Aplicadas localmente as instruções do UX Specialist, sem execução de agent
separado e sem declarar QA visual do produto. Journeys revisadas: Mestre e Player.

| Finding | Tratamento no contrato de UX |
| --- | --- |
| “Disponível” promete validação de conjuração inexistente | Usar “Magias da ficha”; mesa resolve preparação e recursos. |
| Repetir digitação a cada ataque interrompe a sessão | Perfil salvo ligado à origem; ajuste separado por rolagem. |
| Uma magia pode não fazer ataque nem causar dano | Consulta independente; controles somente para operações configuradas. |
| Equipamento pode mudar enquanto o painel está aberto | Atualizar origem, preservar perfil e evitar troca silenciosa da seleção. |
| Falha de consulta pode parecer ficha vazia | Estados loading/erro/vazio distintos e tentativa explícita. |
| Mudança de turno pode roubar a seleção do Player | Ações pertencem ao ator escolhido e não seguem automaticamente o turno. |
| Múltiplos atores e fontes homônimas | Seleção por identidade; limpar estado ao trocar ator. |
| Editor compete com o mapa | Componentes existentes, editor compacto, empilhamento em largura reduzida. |

Acessibilidade definida como critério: foco visível, teclado, nomes acessíveis,
erros associados aos campos e confirmação alcançável. Contraste, layout real e
integração realtime deverão ser verificados na implementação. O protótipo
anterior teve lógica exercitada em DOM; não comprova esses itens de produto.

Revisão concluída sobre a proposta documental, confrontando também os componentes
atuais `EncounterSetupPanel`, `EncounterActionPanel`, o carrossel e as Specs de
Combat, Scene e Game Log. Foram explicitados na Spec os estados de encontro
livre, primeira ativação, retomada, última remoção, envio, falha e atualização
por outra conexão. Ações de encerrar e desativar turnos são distintas.

```text
UX REVIEW: APPROVED
Applicability: REQUIRED
Journeys reviewed: BOTH
Visual consistency: PASS (reutilização de componentes e padrões existentes)
Tabletop flow: PASS (revisão da proposta, sem execução do produto)
Accessibility/responsiveness: PASS (critérios definidos; QA de UI futura)
Acceptance criteria added or refined: Foundation 8–9 e tabela de estados;
  integração 1–8 e regras de foco/seleção/feedback do combate.
Open UX questions: 0 para a proposta submetida à decisão arquitetural
```

Este parecer avalia a coerência da experiência proposta; não aceita o ADR em
nome do usuário. Exigir ADR aceito para emitir UX Review criava uma dependência
circular, pois o Architect recebe o parecer de UX como entrada. Se a decisão
humana alterar a interação proposta, os critérios afetados voltam para revisão.

## Handoff estrutural

O [ADR-0008](../../architecture/adr/ADR-0008-encounter-optional-turns.md) torna
revisável a separação entre identidade do encontro e ordem de turnos. Com o
parecer de UX concluído, a proposta foi confrontada com ADR-0002/0004/0005,
Architecture seção 9.1, Combat e Game Log: preservar a identidade sem ordem
altera o lifecycle vigente, embora mantenha as fronteiras de Campaign e sistema.

```text
ARCHITECTURE: DECISION REQUIRED
Proposed ADR: docs/architecture/adr/ADR-0008-encounter-optional-turns.md
Decision: aceitar a separação entre encontro e ordem opcional, incluindo
  preservação de rodada/posição ao desativar e reativar turnos?
Recommendation: aceitar a proposta; evita perder o contexto ao alternar
  combate e condução livre, reutilizando iniciativa e histórico existentes.
```

A continuidade entre cenas e o MVP integrado já receberam orientação humana;
não é solicitada nova autorização para refinar, revisar ou publicar o PR. Falta
a aceitação explícita do ADR concretizado posteriormente, conforme o role
Architect. Não há aprovação de arquitetura, READY ou HUMAN APPROVAL declarada.
O PR pode sair de draft para receber essa decisão humana, sem implicar merge.

Enforcement revisado: snapshots privados para notas, mesma Campaign em todos os
IDs, ausência de movimento bloqueado por turno inexistente, preservação dos
snapshots históricos e migração coordenada dos consumidores `vtt:combat:*`.
Os payloads executáveis e a verificação do produto pertencem à implementação.

Depois da fundação aprovada, retomar QH-TLC-005 e refinar QH-PF2-003/004 na ordem
descrita no fluxo de combate. Conferir o PR #85 fechado sem merge antes de
reutilizar sua implementação. Não reabrir o PR antigo automaticamente.

Rastreabilidade: VTT Core + apresentação/contratos de Game System; camadas
afetadas futuramente são web, API, realtime e persistência. Nesta entrega, apenas
documentação. ADRs aplicáveis: 0002, 0004, 0005, 0007 e proposta 0008.
