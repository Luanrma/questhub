# Pathfinder 2e — Magias vinculadas à ficha — Especificação

## Referência de regras e capacidades

Esta spec registra o comportamento entregue pelo MVP de vínculo de Spells. Para evoluções envolvendo fontes de conjuração, slots, repertoire, prepared/spontaneous spellcasting, proficiência, Heightening ou Rank efetivo, consultar [`spellcasting-rules-reference.md`](./spellcasting-rules-reference.md).

Essa referência documenta regras oficiais para orientar defaults, UX e automações opcionais, mas **não governa obrigatoriamente a mesa**. O QuestHub deve continuar permitindo operação manual, overrides e house rules; legalidade de regra de jogo não deve ser confundida com integridade técnica.

## Modelo

```text
CampaignActor 1 ── owns ── 0..1 CampaignCharacterSheet
CampaignCharacterSheet 1 ── owns ── N CampaignCharacterSheetEntry
```

Uma magia PF2e utiliza a entidade compartilhada com:

```ts
{
  namespace: 'questhub:pathfinder_2e'
  typeKey: 'spell'
  catalogNamespace: 'questhub:pathfinder_2e:spells:v1'
  catalogContentId: string
  schemaVersion: 1
  data: Pathfinder2eSpellData
  state: null
}
```

`Pathfinder2eSpellData` contém `rank`, traits, tradições, descrição e demais
propriedades específicas. Nenhuma dessas propriedades vira coluna da tabela
compartilhada.

## Invariantes

1. O vínculo pertence a uma `CampaignCharacterSheet` completa de Pathfinder 2e.
2. Fichas simplificadas originadas do Bestiário não recebem este vínculo.
3. Uma mesma definição do catálogo aparece no máximo uma vez por ficha,
   namespace e tipo.
4. `catalogContentId` deve identificar uma entrada do domínio `SPELL`.
5. `data.rank` é derivado do catálogo e deve estar entre `1` e `10`.
6. Truques possuem Rank `1` e trait `cantrip`.
7. O registro mantém um snapshot canônico dos dados originais da magia.
8. Nome e descrição localizados são resolvidos no momento da leitura.
9. Excluir Token, remover controlador ou trocar o Token vinculado preserva as magias.
10. Excluir definitivamente a ficha exclui suas entradas por cascade.
11. Arquivar o ator preserva a ficha e seus vínculos.
12. O vínculo não declara que a magia está preparada, conhecida, autorizada ou disponível para uso.
13. Classe, tradição, slots, repertório, foco e heightening não bloqueiam a inclusão no MVP.
14. A persistência compartilhada não possui coluna de Rank, magia ou regra PF2e.

## Permissões

- Mestre ativo da campanha pode listar, adicionar e remover.
- Player ativo pode operar somente a ficha do ator que controla.
- Toda consulta valida campanha, ficha, sistema e arquivamento do ator.
- O cliente nunca envia Rank, snapshot, namespace, tipo ou sistema.

## Endpoints PF2e

```text
GET    /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells
GET    /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells/catalog
POST   /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells
DELETE /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells/:spellId
```

A inclusão recebe somente:

```ts
{ contentId: string }
```

A consulta de catálogo aceita busca, Rank opcional, locale, página e limite.
O filtro por Rank pertence à rota PF2e e é aplicado sobre o catálogo/snapshot,
não sobre uma coluna genérica.

## Interface

A ficha completa registra uma página `Magias`.

- magias vinculadas são agrupadas por Rank;
- truques são destacados dentro do Rank `1`;
- o catálogo pode ser filtrado por Rank `1` a `10`;
- a busca não remove magias já vinculadas, mas desabilita nova inclusão;
- cada vínculo pode ser removido individualmente;
- a descrição pode ser consultada sem sair da ficha;
- a interface informa que a legalidade é decidida pela mesa.

### Associação manual com Area Effect

Uma magia pode resolver duas origens neutras de configuração:

```ts
type SpellAreaEffectSources = {
  defaultSource: {
    kind: 'CATALOG_CONTENT'
    namespace: 'questhub:pathfinder_2e:spells:v1'
    id: string // contentId canônico da magia
  }
  overrideSource: {
    kind: 'CHARACTER_SHEET_ENTRY'
    namespace: 'questhub:character-sheet-entry'
    id: string // id da entrada vinculada à ficha
  }
}
```

Regras:

1. a sobrescrita da entrada tem precedência sobre o padrão do catálogo;
2. sem sobrescrita, a ficha herda dinamicamente o padrão atual da campanha;
3. criar ou editar a sobrescrita afeta somente aquela entrada da ficha;
4. `Restaurar configuração original` remove somente a sobrescrita;
5. se não existir padrão, restaurar deixa a magia sem ativação espacial;
6. abrir ou editar campos do modal não repete a consulta por mudança de
   identidade referencial das props;
7. salvar ou restaurar invalida a apresentação do Token associado.
8. o editor direto reutiliza os mesmos campos e regras do editor da toolbar,
   mantendo `Origem` disponível;
9. abrir ou editar a associação não ativa nem expande a toolbar de Area Effect;
10. `Personalizar Area Effect` carrega a sobrescrita existente; se ela não
    existir, carrega o padrão do catálogo como base;
11. `CONE` e `LINE` com `originMode = SOURCE_TOKEN` persistem
    `includesOrigin = false`, impedindo que o Token conjurador seja atingido.
12. cada magia vinculada expõe o estado efetivo `NONE`, `INHERITED` ou `CUSTOM`;
13. `INHERITED` indica configuração do catálogo sem sobrescrita da ficha;
14. `CUSTOM` indica sobrescrita própria da entrada da ficha e tem precedência
    visual e funcional sobre o padrão do catálogo;
15. `INHERITED` e `CUSTOM` usam ícone e rótulo visíveis diferentes do estado
    `NONE`, sem consultas HTTP individuais por magia.
16. o estado somente é configurado quando o binding efetivo produz a mesma
    `activation` executável usada pelo painel de Encounter; registros parciais,
    incompatíveis ou apenas com metadados permanecem `NONE`.

## Fora do escopo

- fontes de conjuração;
- tradição obrigatória;
- validação de classe;
- slots e preparação;
- repertório espontâneo;
- pontos de foco;
- conjuração inata;
- heightening e Rank efetivo de lançamento;
- rolagem, dano, cura, salvamentos e aplicação de condições;
- inferência automática da área a partir do texto editorial da magia.

## Critérios de aceite

1. uma ficha completa adiciona uma magia pelo catálogo;
2. o backend ignora qualquer Rank informado pelo cliente;
3. a magia reaparece após recarregar a página;
4. Ranks `1..10` são separados visualmente e truques são destacados;
5. a mesma magia não pode ser vinculada duas vezes à mesma ficha;
6. duas fichas podem possuir a mesma magia independentemente;
7. remover uma magia não altera o catálogo nem outra ficha;
8. um Bárbaro pode receber uma magia sem bloqueio de regra;
9. um usuário de outra campanha ou sem controle recebe rejeição;
10. excluir o Token preserva os vínculos;
11. o VTT Core não recebe imports ou vocabulário específico de magias;
12. o schema compartilhado não contém `baseRank`, `spellLevel` ou equivalente.
13. uma configuração individual sobrescreve o padrão somente naquela ficha;
14. restaurar remove a configuração individual e volta a resolver o padrão;
15. alterar campos do modal não dispara novos `GET` de configuração.
16. personalizar uma magia configurada preenche o editor com sua configuração
    efetiva sem resetar forma, dimensões, origem ou estilo;
17. abrir o editor não modifica o estado aberto/recolhido da toolbar.
18. magias com configuração efetiva exibem sinalização diferente das magias
    sem Area Effect configurado;
19. salvar ou restaurar atualiza a sinalização da magia na ficha.
20. a sinalização da ficha e o ícone de Play do Encounter concordam sobre a
    existência de uma configuração executável.
