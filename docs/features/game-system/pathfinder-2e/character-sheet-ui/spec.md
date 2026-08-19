# Feature Spec — Redesign visual da ficha Pathfinder 2e

Status: **READY**

Card: `QH-UI-001` — `https://trello.com/c/La1udXxa/4-qh-ui-001-redesenhar-ficha-de-personagem`  
Domínio: `Frontend / Game System UI / Pathfinder 2e`

## Objetivo

Redesenhar a ficha Pathfinder 2e para que ela tenha identidade visual de RPG, seja mais clara que o tema atual sem se tornar branca, preserve uma barra lateral fixa com informações de consulta frequente e use o espaço disponível sem depender de rolagem horizontal.

## Problema

A ficha atual se comporta visualmente como um dashboard administrativo: há excesso de cards e campos de formulário permanentemente expostos, a barra lateral ocupa muito espaço vertical e possui rolagem própria, a área principal pode exigir rolagem horizontal e a hierarquia visual não prioriza os valores que o jogador consulta durante a sessão.

## Escopo

- redesenhar a apresentação FULL da ficha Pathfinder 2e;
- manter uma sidebar fixa/sticky de consulta rápida;
- tornar a sidebar mais compacta e remover sua rolagem vertical independente em desktop padrão;
- apresentar PV, CA, Percepção, Iniciativa, Salvamentos, estados e defesas com hierarquia visual de ficha de RPG;
- redesenhar a aba Perícias em duas colunas quando houver largura suficiente e uma coluna quando necessário;
- eliminar rolagem horizontal como mecanismo de layout da ficha;
- reduzir campos de formulário permanentemente visíveis nas áreas de consulta rápida e perícias, mantendo edição por interação explícita;
- usar paleta clara/média e quente inspirada em pergaminho, pedra, couro e metal, sem branco puro e sem retornar ao tema dark atual;
- usar ícones reais disponíveis em `lucide-react` para as representações desta entrega;
- preservar dados, cálculos, endpoints e regras mecânicas existentes.

## Fora de escopo

- alterar fórmulas, cálculos, progressão ou regras de Pathfinder 2e;
- alterar schema, migrations ou persistência;
- introduzir novos endpoints ou contratos realtime;
- substituir o renderer/registry de Game System;
- redesenhar o gerenciador de fichas da campanha;
- redesenhar em profundidade Magias ou Inventário nesta primeira entrega;
- criar uma biblioteca de ícones própria ou adicionar nova dependência de ícones;
- alterar o comportamento de permissões ou ownership da ficha.

## Personas / permissões

- `MASTER` e `PLAYER`: mantêm exatamente as capacidades de visualização/edição que já possuem no fluxo atual; esta feature não amplia nem reduz permissões.

## Regras

1. A sidebar permanece visível enquanto o conteúdo principal da ficha rola verticalmente.
2. Em desktop, a sidebar não possui scrollbar própria; seu conteúdo deve ser compactado para caber no espaço útil padrão da janela.
3. A ficha não usa rolagem horizontal para acomodar conteúdo. Elementos devem reduzir, reorganizar ou quebrar para uma coluna.
4. A área principal possui no máximo um fluxo de rolagem vertical quando o conteúdo da aba realmente exceder o espaço disponível.
5. Na aba Perícias, cada perícia prioriza nome, atributo relacionado, grau efetivo e total; controles detalhados de grau/bônus não ficam permanentemente expostos.
6. A edição detalhada de uma perícia deve ser acessível por interação explícita com a linha da perícia.
7. Salvamentos e estatísticas de consulta rápida devem priorizar o total e o grau efetivo, evitando formulários grandes permanentemente visíveis.
8. A paleta não deve utilizar branco puro como superfície principal nem fundos quase pretos como superfície dominante da ficha Pathfinder 2e.
9. O VTT/Workspace genérico continua sem interpretar atributos, PV, CA, perícias ou regras de Pathfinder 2e.
10. O renderer concreto de Pathfinder 2e continua sendo responsável pela apresentação específica do sistema sem alterar a engine mecânica.

## Fluxo principal

1. Usuário abre uma ficha Pathfinder 2e em apresentação FULL.
2. A janela exibe header/tabs compactos e a ficha em duas áreas: sidebar fixa e conteúdo da aba.
3. O usuário consulta valores principais na sidebar sem precisar rolá-la independentemente.
4. Na aba Perícias, o usuário visualiza as perícias de forma compacta em duas colunas quando houver espaço.
5. Ao interagir com uma perícia, os controles de edição dessa perícia ficam disponíveis sem deslocar a ficha para rolagem horizontal.
6. Ao reduzir a largura da janela, o conteúdo se reorganiza progressivamente e nunca cria scrollbar horizontal.

## Estados e erros relevantes

- `loading`: deve manter apresentação coerente com a nova paleta, sem introduzir overflow horizontal.
- `error`: mantém mensagem de erro existente, adaptada visualmente à nova superfície.
- `dirty/saving`: mantém o comportamento atual de salvar/recalcular.
- `narrow window`: a sidebar e o conteúdo podem empilhar quando a largura não comportar duas regiões; a prioridade é legibilidade sem rolagem horizontal.

## Contratos

Nenhuma alteração de contrato.

- HTTP: inalterado.
- realtime/eventos: inalterados.
- tipos públicos: inalterados.
- persistência: inalterada.
- integração VTT/Game System: mantém o registry/adapter atual; a mudança é de apresentação frontend.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0005`
- [ ] Exige novo ADR

A implementação deve respeitar a fronteira atual: o Workspace genérico cuida apenas da janela, layout e navegação genérica; a semântica/visual específico de Pathfinder 2e permanece no renderer concreto. Não há mudança estrutural de contrato.

## Segurança / isolamento

Sem mudança. A feature não altera autenticação, autorização, ownership ou pertencimento à Campaign.

## Realtime

Sem mudança.

## Critérios de aceite

### AC-01 — Sem rolagem horizontal

Dada uma ficha Pathfinder 2e FULL aberta, quando a janela é redimensionada dentro do limite suportado pelo Workspace, então nenhuma região da ficha cria scrollbar horizontal para acomodar layout.

### AC-02 — Sidebar fixa e compacta

Dada uma ficha em desktop com viewport de pelo menos `1366x768`, quando a ficha é aberta em seu tamanho inicial, então a sidebar permanece ao lado do conteúdo, não possui scrollbar vertical independente e exibe os valores principais de consulta rápida.

### AC-03 — Rolagem vertical mínima

Dada uma aba cujo conteúdo cabe na altura útil da janela, então não existe scrollbar vertical desnecessária. Quando uma aba ultrapassa a altura disponível, a rolagem ocorre apenas no fluxo principal da ficha, preservando a sidebar fixa em desktop.

### AC-04 — Perícias compactas

Dada a aba Perícias com largura suficiente, então as perícias são apresentadas em duas colunas e cada linha exibe ao menos nome, atributo relacionado, grau efetivo e total sem campos de formulário permanentemente expostos.

### AC-05 — Edição progressiva de perícia

Dada uma perícia visível, quando o usuário solicita sua edição, então os controles de grau e bônus ficam disponíveis para aquela perícia sem abrir rolagem horizontal e continuam utilizando o fluxo de atualização/cálculo existente.

### AC-06 — Responsividade

Dada uma largura em que duas colunas de perícias ou sidebar + conteúdo não sejam legíveis, quando a janela é reduzida, então o layout passa para menos colunas/empilhamento antes de recorrer a overflow.

### AC-07 — Identidade visual intermediária

Dada a ficha Pathfinder 2e, então a superfície principal usa tons médios/quentes de pergaminho/pedra/couro, com texto escuro e acento roxo/dourado, sem branco puro dominante e sem o fundo quase preto dominante da versão anterior.

### AC-08 — Sem regressão mecânica

Dadas as mesmas entradas da ficha antes e depois do redesign, então os valores derivados, salvamento, atualização e endpoints utilizados permanecem os mesmos.

### AC-09 — Fronteira arquitetural preservada

Dada a mudança de UI, então `npm run check:architecture` continua aprovado e nenhuma regra concreta de Pathfinder 2e é movida para módulos genéricos do VTT.

## Testes esperados

- build/typecheck do frontend;
- testes existentes da ficha e adapters;
- `npm run check:architecture`;
- validação manual de overflow em `1366x768` e em janela reduzida;
- validação manual de edição/salvamento de perícia e valores da sidebar.

## Dependências

- `lucide-react` já existente no frontend;
- renderer Pathfinder 2e atual;
- Workspace genérico de ficha atual.

## Decisões relacionadas

- `ADR-0005` — VTT Core não interpreta regras de Game System.

## Questões abertas

Nenhuma questão bloqueante para esta primeira entrega.
