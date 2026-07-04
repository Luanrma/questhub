# Guia Global: Bestiarios e Fichas de Criaturas

Este guia vale para todos os bestiarios de rulesets do QuestHub, incluindo Pathfinder 2e, D&D 5e e sistemas futuros.

## 1. Fronteira de Responsabilidade
* O bestiario e uma capacidade de `game_systems`.
* O VTT pode abrir uma ficha de criatura por referencia de catalogo, mas nao deve conhecer campos mecanicos do ruleset.
* O renderer visual especifico da ficha deve viver no package do sistema, como `packages/game-system-pathfinder-2e/src/web/bestiary`.
* O app web pode fornecer o shell do modal, carregamento HTTP, drag, resize, fechamento e selecao local de idioma da ficha.

## 2. Comportamento Obrigatorio do Modal
Toda ficha de criatura aberta a partir do bestiario ou de um token deve:

* abrir em modal proprio, nunca inline dentro do card do bestiario;
* ser montada em portal global no `document.body`, nunca como descendente do modal/painel do bestiario, do canvas ou de qualquer container com scroll/overflow;
* ser arrastavel pela barra superior;
* ser redimensionavel pelos mesmos controles/handles dos demais modais do QuestHub;
* respeitar limites de viewport e manter dimensoes minimas funcionais;
* possuir botao de fechar claramente visivel na barra superior;
* possuir fechamento redundante no rodape quando houver espaco operacional;
* preservar o padrao visual da ficha do sistema quando existir ficha de personagem para o mesmo ruleset;
* carregar conteudo por endpoint de detalhe quando aberta a partir de token.

## 3. Idioma e Conteudo
Toda ficha de criatura deve respeitar a preferencia de conteudo de jogo do usuario:

```ts
type GameContentLanguage = 'pt-BR' | 'original'
```

Regras:

* O default e `pt-BR`.
* O usuario deve poder alternar entre `pt-BR` e `original` na ficha/modal.
* A escolha feita dentro do modal da ficha e local a ficha aberta e nao deve persistir em `/api/campaigns/:campaignId/my-settings`.
* A ficha deve recarregar o conteudo localizado apos a troca de idioma.
* A listagem do bestiario pode usar a preferencia geral de conteudo da campanha; a ficha de detalhe pode sobrescrever o idioma via parametro de consulta sem alterar essa preferencia geral.
* Quando a ficha tiver dados mecanicos proprios, o package do sistema deve manter traducoes no bloco interno da ficha, por exemplo `sheet.translations.ptBR`, e adaptar esse conteudo para o contrato neutro `display.sheet`.

## 4. Acesso pelo VTT
Tokens criados a partir de bestiario devem oferecer a acao `Ficha` somente no menu de contexto do Mestre.
Players nao podem abrir ficha de criatura do bestiario pelo token.

O token deve enviar apenas identificadores genericos:

```ts
{
  source: 'bestiary',
  bestiaryCreatureId: string
}
```

O app deve consultar o endpoint do bestiario da campanha para obter a criatura localizada e renderizar a ficha pelo renderer do ruleset.

## 5. Criterios de Aceitacao Globais
* O card do bestiario permanece compacto e nao expande ficha mecanica inline.
* A ficha abre pelo bestiario e pelo token de cena.
* A ficha aberta pelo bestiario e pelo token usa a mesma janela global, livre do stacking context e do overflow do componente que a acionou.
* Drag, resize e fechar funcionam em desktop.
* O modal nao perde o botao de fechar ao redimensionar.
* A troca de idioma reflete nome, tags e dados traduzidos disponiveis.
* O core continua sem campos mecanicos especificos do ruleset.
