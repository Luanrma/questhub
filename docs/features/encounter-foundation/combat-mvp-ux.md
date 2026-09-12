# Combate MVP — proposta de experiência do Player

Status: **DRAFT — proposta para revisão visual**
Card de análise: `QH-ENC-001` — https://trello.com/c/tw4LllTF
UX review required: **YES**

## Resultado esperado

O Player escolhe seu personagem, usa um ataque de arma ou magia, informa os
ajustes da jogada e vê um resultado compreensível no Log. Preparar os valores uma
vez evita reconstruir a mesma rolagem a cada turno. O Mestre conduz as regras.

Este é o próximo foco de produto solicitado pelo usuário, após a fundação mínima
de encontro. Não depende de implementar todas as capacidades, Lores, recursos,
classes ou regras de conjuração. As regras abaixo são propostas para o próximo
refinamento, sem substituir as Specs atuais dos sistemas.

## Fluxo principal

1. **Preparar uma vez:** registrar nome, bônus final de ataque e fórmula de dano
   em um perfil manual do personagem. Referência à arma ou magia é opcional;
   uma ação personalizada também é válida.
2. **Escolher:** abrir as ações do próprio personagem e selecionar a arma ou
   magia. Ação selecionada e autoria permanecem claras mesmo se o turno mudar.
3. **Conferir:** mostrar valores cadastrados e um campo `Ajuste desta rolagem`,
   com inteiro positivo/negativo e motivo opcional. Vários bônus/penalidades
   podem ser somados manualmente nesse campo no MVP.
4. **Rolar ataque:** mostrar a composição antes da confirmação e registrar
   personagem, ação, dado, bônus base, ajuste e total no Log.
5. **Rolar dano, quando a mesa decidir:** é uma operação separada, com fórmula e
   ajuste próprios. Não exige que o VTT tenha determinado um acerto.

Exemplo ilustrativo: Espada longa, bônus +9, ajuste +2 e d20 com resultado 14:
`14 + 9 + 2 = 25`. O Log apresenta a decomposição, sem declarar acerto ou crítico.

## Armas e magias no mesmo padrão de interação

| Ação configurada | Apresentação e operação |
| --- | --- |
| Arma com ataque | Bônus cadastrado; ajuste temporário; rolagens separadas de ataque e dano. |
| Magia com ataque | Mesmo fluxo de rolagem; valores fornecidos manualmente ou por dados já disponíveis. |
| Magia que pede resistência | Exibir defesa e CD informadas no perfil; o alvo resolve seu teste pela mesa. Não criar uma jogada de ataque artificial. Dano pode ser rolado separadamente. |

Defesa, CD, tipo de dano e demais detalhes mecânicos pertencem ao Game System.
O VTT recebe uma apresentação e uma composição de dados neutras. Nenhuma regra
específica é inferida no Core pelo nome da arma/magia ou pela expressão.

## Regras de UX para o primeiro recorte

- Um editor compacto para a ação escolhida, reutilizado por arma e magia.
- `Ataque` e `Dano` têm rótulos explícitos; existe uma única confirmação de
  rolagem para o modo selecionado.
- O bônus salvo aparece separado do ajuste temporário. Ajustar uma rolagem não
  altera silenciosamente ficha, item ou perfil.
- O ajuste volta a zero depois de sucesso e ao mudar de ação ou de ataque para
  dano. Falha mantém os valores para correção/tentativa explícita.
- Não exigir alvo selecionado, alcance válido, recurso disponível ou turno
  próprio para preparar/rolar uma ação que o usuário tem permissão de usar.
- A autoridade do servidor cobre identidade, permissão, composição e cálculo;
  o cliente não pode forjar personagem de outra pessoa ou de outra Campaign.
- Estado sem perfil oferece cadastro manual; valor necessário ausente oferece
  preenchimento, sem inventar um bônus a partir de classe ou catálogo.
- Expressão/modificador inválido impede a rolagem e mostra erro junto ao campo.
- Durante envio, a confirmação fica indisponível. Resposta e evento realtime
  não podem produzir duas entradas visuais para a mesma operação.
- O painel preserva foco e ação selecionada quando o turno muda. Teclado,
  botões nomeados e ausência de rolagem horizontal fazem parte do aceite.
- Dano, cura, crítico, penalidade por ataques múltiplos, consumo de slots/munição
  e aplicação de Effects continuam decisões manuais, sem enforcement novo.

## Protótipo de interação

O protótipo apresentado na conversa permite alternar armas/magias, selecionar
ataque/dano, alterar um ajuste, informar motivo e ver resultados no Log.
Inclui uma magia com resistência para demonstrar a diferença de operação.

É uma simulação local com perfis/valores fictícios e dados gerados no navegador,
sem vínculo com a campanha. Não comprova backend, autorização, catálogo,
persistência ou realtime. O produto real reutilizará os contratos autorizados.

## Estado atual e dependências verificadas

- PR #86: merged, UX Specialist disponível nas instruções e registry.
- PR #85: **closed, merged=false** na consulta ao GitHub. O código de rolagem com
  modificador/identificação não está na `main` consultada. O card QH-TLC-005 ainda
  exibia Human Approval; essa divergência de status não comprova disponibilidade.
- `EncounterActionPanel` atual acompanha o participante do turno e sua execução
  trata ferramentas espaciais; publicar um botão não entrega sozinho a rolagem.
- Há ações de magias vinculadas em `buildPathfinder2eCharacterSpellActions`;
  isso não significa que o Player já possua ataque/dano mágico manual completo.
- Perfis manuais de ataque pertencem ao QH-PF2-003. A publicação/interação do
  Player está no QH-PF2-004, cuja premissa centrada no turno precisa de revisão.

Sequência técnica a refinar nos cards existentes:

1. Retomar/revisar a capacidade de rolagem manual identificada no QH-TLC-005.
   Não reabrir nem considerar integrado o PR encerrado sem revisar sua intenção.
2. QH-PF2-003: perfis reutilizáveis de ataque/dano com valores manuais, cobrindo
   também a origem mágica sem esperar automação de spellcasting.
3. QH-PF2-004: ligar as ações do personagem ao editor/Log com esta UX.
   Feats, Lores e o catálogo completo de capacidades não bloqueiam esse recorte.

Não foram criados novos cards de implementação nem reordenado o board nesta
análise. A fundação e o próximo fluxo devem ser aprovados antes dessa mudança.
