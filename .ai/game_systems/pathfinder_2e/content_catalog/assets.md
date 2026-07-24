# Pathfinder 2e — Política de assets opcionais

## Regra principal

Imagens de criaturas, magias e itens são recursos opcionais. O catálogo deve funcionar integralmente sem nenhum arquivo de imagem.

## Localização

Os arquivos ficam versionados dentro do QuestHub em:

```text
apps/api/src/game_systems/pathfinder_2e/icons/
```

Eles são servidos somente pela rota local:

```text
GET /api/game-systems/pathfinder-2e/icons/*
```

O registro aponta para essa rota, sem hostname externo:

```ts
image: {
  path: '/api/game-systems/pathfinder-2e/icons/spells/magic-missile.webp'
}
```

## Associações da primeira rodada

| Conteúdo | Ícone local |
|---|---|
| Guerreiro Goblin | `default-icons/npc.svg` |
| Lobo | `default-icons/npc.svg` |
| Guarda Esqueleto | `default-icons/npc.svg` |
| Barragem de Força | `spells/magic-missile.webp` |
| Corta-Cão | `equipment/weapons/dogslicer.webp` |

Arco Elétrico, Curar, Arco Curto e Armadura de Couro permanecem sem `image`, pois os ícones originais correspondentes não existem no pacote local enviado. A interface utiliza o fallback genérico.

## Remoção segura

Remover um ou todos os arquivos não pode exigir alteração de código nem impedir o build.

Isso é garantido porque:

- imagens não são importadas estaticamente por TypeScript;
- `image` é opcional no contrato;
- a API lê o arquivo somente quando o navegador solicita a imagem;
- um caminho inexistente retorna 404 somente para a imagem;
- o frontend trata o erro de carregamento e substitui a imagem pelo ícone genérico;
- cards, busca, filtros e fichas não dependem da imagem.

## Segurança da rota

A rota de assets:

- aceita apenas caminhos relativos dentro da pasta de ícones;
- bloqueia `..` e path traversal;
- aceita somente SVG, WebP, PNG e JPEG;
- não consulta URLs externas;
- não baixa arquivos em runtime.

## Regras proibidas

- não importar assets com `import image from ...` nos registros do catálogo;
- não exigir que o arquivo exista durante o build;
- não usar URL absoluta, CDN ou repositório externo nos registros;
- não usar uma imagem como identificador da entidade;
- não esconder ou remover a entidade quando a imagem falhar.

## Publicação

Antes de publicar o QuestHub, todos os assets locais podem ser removidos sem afetar o conteúdo. A aplicação continuará exibindo o fallback genérico até que sejam adicionadas imagens com licença adequada.
