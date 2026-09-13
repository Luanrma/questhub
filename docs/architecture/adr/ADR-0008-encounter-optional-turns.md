# ADR-0008 — Encounter com turnos opcionais

Status: **PROPOSED**
Data: 2026-09-13
Card: `QH-ENC-001` — https://trello.com/c/tw4LllTF
Supersedes: nenhum; estende o lifecycle descrito nas Specs de Combat, Scene e Game Log.

## Contexto

O usuário confirmou um MVP que permite puzzle, combate e evento ambiental no
mesmo encontro, com prioridade seguinte em ataques manuais integrados à ficha.
Hoje remover o último participante ou trocar de cena encerra o encontro. A
identidade histórica está acoplada à existência de uma ordem de combate.

## Decisão proposta

Manter uma identidade de encontro corrente por Campaign durante a sessão,
separada da ordem opcional de turnos. Reutilizar `CampaignEncounter` para o
histórico; não criar um segundo agregado de combate nem um motor ambiental.

- Mestre pode iniciar sem participantes, com nome e notas privadas.
- Participantes continuam sendo Tokens, com Actor opcional (ADR-0004).
- Ativar turnos exige ao menos um participante; usar a ordenação de iniciativa
  existente. Sem participantes, indicar `Adicione um participante para ativar turnos`.
- Primeira ativação começa na rodada 1 e primeiro participante. Desativar
  preserva ordem, iniciativas e posição para retomar, ocultando controles de turno.
- Reativar retoma a posição preservada. Remover o participante atual usa a regra
  vigente de sucessão; remover o último desativa e limpa apenas a ordem. Uma
  ordem nova começa na rodada 1, dentro do mesmo encontro e histórico.
- Trocar de cena mantém identidade, notas e ordem, com o comportamento de pausa
  da sessão vigente. Nenhum Token é teleportado e nenhuma cena é revelada.
  Participante sem presença na cena autorizada não habilita operações espaciais
  nessa cena; ações manuais do ator continuam conforme autorização própria.
- Encerramento explícito, encerramento da sessão e substituição explícita por
  outro encontro finalizam o histórico. Não implementar retomada entre sessões.

Essa proposta não permite vários encontros correntes nem exige novos estados de
preparação, pausa ou fases. Progresso e efeitos ambientais permanecem em notas.

## Fronteiras e segurança

Campanha, identidade histórica, turnos e projeção autorizada pertencem ao Core.
Notas privadas só podem integrar resposta/evento destinado ao Mestre; não enviar
em snapshot público nem em entrada compartilhada do Game Log. Toda operação
valida membership, papel e pertencimento dos IDs à mesma Campaign (ADR-0002).

Armas, magias e seus perfis pertencem ao contexto do ator e ao Game System.
O sistema interpreta equipamento e entradas da ficha e fornece apresentação e
pedido de rolagem agnósticos. O Core não interpreta `carryMode`, slots, CD,
acerto ou dano (ADR-0005). Rolagens fora de encontro mantêm apenas realtime;
durante encontro, vinculam-se à identidade histórica corrente.

## Transição e enforcement antes da implementação

1. Atualizar de forma coordenada Specs de Combat, Scene e Game Log, tipos,
   handlers `vtt:combat:*` e consumidores; não manter dois estados concorrentes.
2. Distinguir ausência de encontro de encontro livre nos snapshots e nos
   consumidores de movimento/turno. Estado livre não pode bloquear movimento
   por ausência de participante atual.
3. Preservar histórico já armazenado e os significados dos snapshots antigos;
   eventual persistência de nome/notas exige migration própria revisada.
4. Testar transições livre/turnos, última remoção, mudança de cena e término da
   sessão; testar separadamente vazamento de notas, isolamento e autorização.
5. Rodar checks de arquitetura e contratos. A implementação deve especificar
   os payloads e a compatibilidade de clientes; este ADR não declara esses
   contratos executáveis entregues.

## Alternativas e consequências

- Manter Encounter exclusivamente de combate: menor mudança, mas obriga eventos
  sem turnos a usar Tokens artificiais e fragmenta o histórico.
- Criar engines para puzzle/clima e vários ciclos: maior expressividade, porém
  excede o MVP confirmado.
- Separar identidade e ordem (proposta): reaproveita iniciativa e Log; exige
  revisar lifecycle, projeção privada e transições existentes antes do código.

Não altera ADR aceito. A aceitação desta decisão e o merge são humanos conforme
o role Architect; a confirmação do recorte não é registrada como aceitação
antecipada destes detalhes estruturais.
