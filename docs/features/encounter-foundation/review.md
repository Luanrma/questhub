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

O fluxo de ativação/retomada foi concretizado no ADR proposto para revisão, não
tratado como decisão já aceita. Por isso não é declarado UX Ready global nem
avanço para Development nesta atualização.

## Handoff estrutural

O [ADR-0008](../../architecture/adr/ADR-0008-encounter-optional-turns.md) torna
revisável a separação entre identidade do encontro e ordem de turnos. Permanece
PROPOSED; a revisão estrutural formal sucede o encerramento do gate de UX.

Depois da fundação aprovada, retomar QH-TLC-005 e refinar QH-PF2-003/004 na ordem
descrita no fluxo de combate. Conferir o PR #85 fechado sem merge antes de
reutilizar sua implementação. Não reabrir o PR antigo automaticamente.

Rastreabilidade: VTT Core + apresentação/contratos de Game System; camadas
afetadas futuramente são web, API, realtime e persistência. Nesta entrega, apenas
documentação. ADRs aplicáveis: 0002, 0004, 0005, 0007 e proposta 0008.
