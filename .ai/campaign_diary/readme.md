# Campaign Diary

## O que e por que
`campaign_diary` gerencia diarios livres da campanha. Diarios sao documentos criados pelo Mestre para organizacao, anotacoes e consulta rapida, sem vinculo obrigatorio com cenas, sessoes ou tokens.

O Mestre pode nomear um diario como `Cena 1`, `Cena 2`, `Resumo da vila` ou qualquer outro titulo. O nome nao cria relacao de dominio com `campaign_scene`.

## Personas e casos de uso
* Mestre cria diarios livres para anotar preparacao, lore, cenas planejadas, NPCs, pistas ou qualquer outro conteudo.
* Mestre consulta diarios pela sidebar esquerda durante a campanha.
* Mestre edita conteudo em Markdown e salva explicitamente.
* Jogadores nao visualizam diarios neste escopo.

## Regras de produto
* Diarios pertencem a campanha, nao a cenas.
* Apenas o Mestre cria, visualiza, edita e remove diarios.
* Diarios usam Markdown.
* Diario nao possui auto-save; persistencia ocorre apenas pelo botao `Salvar`.
* O menu `Diario` da sidebar esquerda abre um modal com a lista de diarios da campanha.

## Relacoes com outros modulos
* `vtt`: mantem a mesa montada enquanto o modal de diario abre sobre ela.
* `campaign_scene`: independente; diarios nao devem ser implementados nem persistidos dentro desse modulo.
* `campaign_presence`: pode fornecer contexto de usuario/sessao, mas nao controla conteudo de diario.
