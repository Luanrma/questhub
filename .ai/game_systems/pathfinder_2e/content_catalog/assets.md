# Pathfinder 2e — Política de assets opcionais

## Regra principal

Imagens de criaturas, magias e itens são recursos opcionais. O catálogo deve funcionar integralmente sem nenhum arquivo de imagem.

## Localização

Arquivos locais podem ser adicionados em:

```text
apps/web/public/game-systems/pathfinder-2e/bestiary/
apps/web/public/game-systems/pathfinder-2e/spells/
apps/web/public/game-systems/pathfinder-2e/items/
```

O registro aponta apenas para o caminho público correspondente:

```ts
image: {
  path: '/game-systems/pathfinder-2e/spells/force-barrage.webp'
}
```

## Remoção segura

Remover um ou todos os arquivos não pode exigir alteração de código nem impedir o build.

Isso é garantido porque:

- imagens não são importadas estaticamente por TypeScript;
- `image` é opcional no contrato;
- a API não verifica nem baixa arquivos em runtime;
- um caminho inexistente retorna 404 somente para a imagem;
- o frontend trata o erro de carregamento e substitui a imagem pelo ícone genérico;
- cards, busca, filtros e fichas não dependem da imagem.

## Regras proibidas

- não importar assets com `import image from ...` nos registros do catálogo;
- não exigir que o arquivo exista durante o build;
- não usar URL absoluta, CDN ou repositório externo;
- não usar uma imagem como identificador da entidade;
- não esconder ou remover a entidade quando a imagem falhar.

## Publicação

Antes de publicar o QuestHub, todos os assets locais podem ser removidos sem afetar o conteúdo. A aplicação continuará exibindo o fallback genérico até que sejam adicionadas imagens com licença adequada.
