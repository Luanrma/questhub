# Combate MVP — proposta de experiência do Player

Status: **DRAFT — recorte de produto confirmado; contratos em refinamento**
Card de análise: `QH-ENC-001` — https://trello.com/c/tw4LllTF
UX review required: **YES**

## Resultado esperado

O Player escolhe seu personagem, usa um ataque de arma ou magia, informa os
ajustes da jogada e vê um resultado compreensível no Log. Preparar os valores uma
vez evita reconstruir a mesma rolagem a cada turno. O Mestre conduz as regras.

Este é o próximo foco de produto solicitado pelo usuário, após a fundação mínima
de encontro. Não depende de implementar todas as capacidades, Lores, recursos,
classes ou regras de conjuração. As regras abaixo são propostas para o próximo
refinamento, sem substituir as Specs atuais dos sistemas. Em 2026-09-13, o usuário
confirmou iniciar com integração às armas equipadas e às magias da ficha, mantendo
valores e consequências manuais. O protótipo continua sendo uma simulação.

## Fluxo principal

1. **Preparar uma vez:** selecionar uma arma equipada ou magia da ficha e
   registrar os valores ausentes em um perfil manual do personagem: bônus final
   de ataque, fórmula de dano ou defesa/CD, conforme a ação. O vínculo com a
   origem real é preservado; uma ação personalizada sem vínculo também é válida.
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

## Integração com a ficha no MVP

| Origem | Integração esperada | Responsabilidade manual |
| --- | --- | --- |
| Arma equipada | Listar a instância real do inventário em uso, identificada pelo Game System; vincular o perfil ao ID dessa entrada. | Cadastrar e revisar bônus final e dano; não derivar proficiência, runas ou penalidades. |
| Magia da ficha | Listar as entradas vinculadas à ficha do ator, preservando sua identidade e acesso à descrição existente. | Informar ataque ou defesa/CD e dano aplicáveis; decidir se pode conjurar e resolver recursos/efeitos. |
| Ação personalizada | Perfil do ator com nome e valores próprios, sem referência obrigatória. | Representar ataque improvisado, desarmado ou outra necessidade da mesa. |

Na interface usar **Magias da ficha**, evitando prometer disponibilidade mecânica.
O vínculo não significa magia preparada, slot restante ou permissão concedida
pelas regras. Essa distinção preserva o contrato atual de magias vinculadas.

O Game System identifica arma e estado de equipamento. O Core não interpreta
`carryMode`, `itemType` nem deduz equipamento por `slotIndex = null`. Itens com o
mesmo nome continuam distintos por ID; a lista não deve duplicar uma origem só
porque ela já possui perfil configurado.

Selecionar uma origem sem perfil mostra `Configurar rolagem` no mesmo contexto.
Não cria um ataque fictício nem salva valores zero para preencher lacunas.
Salvar o perfil é uma operação explícita; rolar não altera o cadastro. Uma magia
sem ataque/dano continua consultável, sem exigir configurar uma rolagem.

Guardar a arma retira sua indicação de equipada e preserva o perfil manual.
Remover a origem desfaz o vínculo, preservando o perfil como ação personalizada
e os resultados históricos. A interface sinaliza a origem ausente, sem continuar
afirmando que ela está equipada ou vinculada. Não modificar automaticamente os
valores salvos quando catálogo ou equipamento mudar.

Atualizar a apresentação após alterações autorizadas de equipamento/ficha,
reutilizando invalidação e leitura autenticada. Mudança de origem não deve
trocar silenciosamente a ação aberta por outra. Se o acesso ao ator for perdido,
limpar os dados do painel e impedir operações também no servidor.

Fontes existentes: [Inventory](../inventory/spec.md),
[Equipment PF2e](../game-system/pathfinder-2e/equipment/spec.md) e
[Character Spells PF2e](../game-system/pathfinder-2e/character-spells/spec.md).
Essas capacidades fornecem as origens; a ligação com os perfis/rolagens ainda
precisa ser implementada.

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
- Carregamento e erro de leitura são distintos de lista vazia; falha oferece
  `Tentar novamente` e não sugere que o personagem perdeu seus equipamentos.
- Sem armas equipadas ou magias vinculadas, oferecer acesso à seção existente
  da ficha e a uma ação personalizada, respeitando as permissões atuais.
- A seleção do ator é explícita quando houver vários controlados. Trocar ator
  limpa seleção e ajuste anteriores; não herdar dados de outro personagem.
- Usar componentes e tokens visuais existentes do VTT, ícones com nome acessível,
  foco visível e erros associados aos campos. Em largura reduzida, empilhar o
  editor e manter a confirmação acessível sem rolagem horizontal.

## Critérios de aceite da integração

1. Equipar uma arma faz sua instância aparecer nas ações do ator correto;
   guardar a arma atualiza seu estado sem apagar o perfil.
2. Duas armas homônimas não compartilham perfil por coincidência de nome.
3. Vincular/remover uma magia atualiza a lista sem duplicar a entrada nem exigir
   slot, preparação ou configuração de Area Effect para consultar/rolar.
4. Uma origem sem valores oferece configuração explícita; o perfil salvo é
   reutilizado ao reabrir, com ajuste temporário zero.
5. Ataque e dano produzem resultados separados e identificam ator, ação,
   composição e total. Uma magia com resistência não apresenta ataque artificial.
6. Alterar o ajuste, rolar ou falhar não modifica inventário, magia ou perfil.
7. IDs de origem, perfil e ator de outra Campaign ou sem autorização são
   rejeitados no backend; perder controle remove os dados da interface.
8. Fora de encontro, manter o Log realtime vigente; durante encontro, preservar
   a entrada histórica. Não prometer persistência global de todas as rolagens.

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
2. QH-PF2-003: perfis reutilizáveis com valores manuais e vínculos reais a
   InventoryEntry ou entrada de magia, com tratamento de origem removida.
3. QH-PF2-004: listar armas equipadas e magias da ficha e ligar as ações do
   personagem ao editor/Log com esta UX, inclusive fora do turno atual.
   Feats, Lores e o catálogo completo de capacidades não bloqueiam esse recorte.

O recorte recebeu confirmação humana para iniciar. A revisão dos contratos e
do lifecycle da fundação precede o desenvolvimento; não houve implementação
de produto nem reordenação do board nesta análise.
