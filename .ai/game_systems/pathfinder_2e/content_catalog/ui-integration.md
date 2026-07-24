# Pathfinder 2e — Integração visual do catálogo

## Objetivo

Bestiário, Magias e Itens são exibidos dentro do VTT por meio do contrato neutro de catálogo definido em `apps/api/src/game_systems/catalog.ts`.

O VTT sabe apenas renderizar:

- cards resumidos;
- traits;
- status editorial;
- uma ficha composta por seções e campos.

A escolha dos campos e toda interpretação do conteúdo pertencem ao adapter Pathfinder 2e.

## Cards

Cada card contém:

- nome;
- publicação;
- descrição resumida;
- estatísticas principais;
- traits traduzidas;
- status editorial separado;
- botão `Ficha`.

`Tradução em revisão` não é uma trait. O status deve ser enviado em `editorialStatus` e renderizado com cor própria.

## Ficha

O botão `Ficha` consulta apenas a entidade selecionada.

Rota neutra:

```text
GET /api/campaigns/:campaignId/catalog/:domain/:contentId?locale=pt-BR
```

A resposta usa seções genéricas. Pathfinder 2e define internamente:

- Bestiário: defesas, percepção, atributos, perícias, ataques e habilidades;
- Magias: conjuração, alcance, alvo, defesa, dano ou cura e aprimoramento;
- Itens: informações de uso, preço, volume, dano ou valores de armadura.

## Glossário central

Termos compartilhados não devem ser traduzidos em cada registro.

Fonte única:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/translations/pt-BR/glossary.ts
```

O glossário mantém mapas separados para:

- traits;
- raridades;
- tradições mágicas;
- termos mecânicos reutilizados.

Novas traduções compartilhadas devem ser adicionadas ao glossário. Overlays individuais armazenam somente textos específicos daquela entidade, como nome, descrição, ataques e habilidades próprias.

## Fronteira

- o frontend não conhece campos Pathfinder específicos;
- o VTT não calcula regras;
- o provider Pathfinder converte conteúdo do sistema para o contrato neutro;
- a ficha é somente visualização nesta etapa;
- não há criação de tokens, aplicação de dano, conjuração ou equipamento automático.
