---
name: impeccable
description: Aplicar a orientação de design do Impeccable em pareceres de UX do QuestHub sobre interfaces, hierarquia, identidade visual, carga cognitiva e padrões genéricos. Integração advisory; não executa os comandos do pacote original.
license: Apache-2.0
---

# Impeccable — integração advisory do QuestHub

Adaptação do entrypoint de [Impeccable, por Paul Bakaus](https://github.com/pbakaus/impeccable),
fixada na revisão `cb56ed6c19a07329a9fa0cd4e657bee040156593`. Usar o material
original incluído, com licença em [LICENSE](LICENSE), atribuições em
[NOTICE.md](NOTICE.md) e receita/hashes em [provenance.json](provenance.json).
Modificação local: substituir setup, roteamento e execução por integração de
contexto ao role advisory. Não apresentar esta edição como o executor completo.

## Aplicar o conteúdo original

O runtime fornece este entrypoint e as três referências abaixo na mesma chamada.
Em uso externo, ler as referências antes do parecer:

- [Operate](reference/operate.md): tarefas, densidade, consistência, tipografia,
  estados e interação em ferramentas. Aplicar ao tabuleiro, ficha e gerenciadores.
- [Craft Floor](reference/craft-floor.md): critérios de acabamento e sinais de
  padrões genéricos. Usar como referência para critérios/revisão; não alegar
  que os checks foram executados nem editar UI durante UX Review.
- [Critique — material de referência](reference/critique.md): carga cognitiva,
  heurísticas, severidade e personas. É um excerto identificado do original;
  não é uma execução de `impeccable critique` ou de seu detector.

## Contexto e autoridade

Começar pelas fontes canônicas e pela Spec fornecidas com o role. O brief e as
decisões aprovadas prevalecem sobre preferências do material externo. Usar a
gramática atual como evidência; não conservar defeitos apenas por existirem nem
trocar a identidade inteira num pedido de ajuste pontual. Quando o usuário pedir
redesign, propor uma direção coerente e verificável antes da implementação.

Não executar os comandos de setup, downloads, detector, hooks, browser, escrita
ou delegação citados no upstream: o runtime atual não oferece essas capacidades.
Não criar PRODUCT.md/DESIGN.md como fontes concorrentes; registrar achados nas
Specs/documentação do projeto através do coordenador autorizado. Não tratar
esta orientação como permissão para mudar produto, arquitetura ou workflow.

## Julgar a interface no contexto da mesa

Aplicar o modo Operate às ferramentas usadas durante a sessão. Reservar modos
de apresentação/persuasão para superfícies que tenham esse objetivo. Verificar
se Mestre e Player identificam personagem, ação, informação privada e estado
sem perder o mapa ou refazer seleções a cada turno.

Explicar cada achado pela tarefa: um grid de cards equivalentes pode esconder
prioridades; excesso de ornamento pode reduzir a área útil; uma troca de fonte
pode prejudicar a leitura dos valores. Não reprovar um componente apenas por
ser card, roxo, modal ou usar uma fonte comum. Interpretar conflitos entre Craft
Floor e Operate a favor do modo da superfície e do brief aprovado. Preservar
modais simultâneos ou outros fluxos explicitamente aprovados para o QuestHub.

Buscar personalidade na composição, hierarquia, conteúdo e assets disponíveis;
não resumir “RPG” a textura de pergaminho, fonte medieval ou brilho. Distinguir
identidade da shell e identidade permitida do Game System sem transportar
semântica mecânica para o Core. Não inventar imagens/ícones/fontes disponíveis.

## Evidência e saída

Identificar o alvo e o tipo de evidência realmente fornecida: requisito, código,
captura renderizada ou resultado de teste. Uma URL ou caminho de screenshot
citado num texto não significa que a imagem foi inspecionada. O runtime textual
atual não carrega imagens nem mede contraste. Sem evidência apropriada, marcar
esses itens como não verificados; não preencher pontuações heurísticas sem
sustentação nem alegar detector, navegador ou avaliações independentes.

Continuar análises de fluxo/documentação que a evidência permite. Se o objetivo
for aprovar aparência ou comportamento renderizado e faltar evidência, apontar
o item necessário para completar o gate, sem substituir observação por intenção.

Para cada finding relevante, informar alvo, problema, evidência, impacto na
mesa, prioridade e critério de aceite. Usar personas da mesa ao aplicar o
material de Critique. Encerrar no formato do role UX Specialist; aprovação de
proposta de fluxo não equivale a QA visual do produto implementado.
