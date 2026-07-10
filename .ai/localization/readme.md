# Submodulo: Pathfinder 2e Localization (Product)

## 1. Proposito

Definir a estrategia global de traducao/localizacao para todo o material de Pathfinder 2e no QuestHub, incluindo Bestiario, Hazards, Spells, Items, Feats, Conditions, Traits, Actions, Ancestries, Classes, Backgrounds, Equipment e demais entradas do ruleset.

O material fonte importado do Pathfinder 2e deve permanecer em ingles (`en-US`) como fonte canonica. Traducoes para portugues brasileiro (`pt-BR`) devem ser mantidas em arquivos separados de overlay, sem duplicar dados mecanicos e sem poluir o arquivo principal com objetos localizados em cada propriedade.

## 2. Problema Resolvido

O QuestHub precisa traduzir uma base muito grande de conteudo PF2e de forma incremental, segura e barata para runtime.

Problemas evitados por esta abordagem:

* duplicar o catalogo inteiro por idioma;
* misturar textos traduzidos diretamente no arquivo gerado em ingles;
* aumentar demais o tamanho e o ruido do `data.generated.ts`;
* criar risco de divergencia mecanica entre `en-US` e `pt-BR`;
* obrigar componentes React a conhecerem estrutura multilingue;
* traduzir tudo de uma vez, sem controle por lotes;
* sobrescrever textos oficiais importados ou gerar conflitos com regeneracao de dados.

A solucao adotada e manter:

```txt
arquivo canonico en-US
+
overlay pt-BR esparso
+
adapter de resolucao
+
DTO final simples para o React
```

## 3. Decisao de Produto

O idioma fonte de Pathfinder 2e no QuestHub e `en-US`.

Traducoes `pt-BR` devem ser tratadas como overlays aplicados sobre as entradas canonicas, usando o `id` da entrada como chave principal.

Exemplo conceitual:

```ts
// data.generated.ts
{
  id: 'pf2e:pathfinder-bestiary-3:giant-porcupine',
  name: 'Giant Porcupine',
  sheet: {
    notes: 'The porcupine is a shy herbivore...'
  }
}

// localization/content/pt-BR/bestiary.ts
{
  'pf2e:pathfinder-bestiary-3:giant-porcupine': {
    name: 'Porco-espinho Gigante',
    sheet: {
      notes: 'O porco-espinho e um herbivoro timido...'
    }
  }
}
```

A UI deve receber texto ja resolvido. O React nao deve renderizar objetos de traducao, nem aplicar fallback campo por campo.

## 4. Escopo Global

Este submodulo cobre localizacao de conteudo PF2e para:

* NPCs e criaturas do Bestiario;
* Hazards;
* Spells;
* Items;
* Feats;
* Conditions;
* Actions;
* Traits;
* Ancestries;
* Classes;
* Backgrounds;
* Archetypes;
* Equipment;
* Weapons;
* Armor;
* Consumables;
* Lore;
* qualquer outra categoria futura do ruleset PF2e.

Este submodulo nao pertence exclusivamente ao Bestiario. Ele e uma camada transversal do ruleset Pathfinder 2e.

## 5. Principios

* `en-US` e a fonte canonica.
* `pt-BR` e um overlay opcional e incremental.
* Dados mecanicos nao devem ser duplicados nos overlays.
* Overlays devem conter apenas texto traduzido e, quando necessario, metadados minimos de progresso.
* Termos mecanicos repetiveis devem permanecer como chaves canonicas.
* Labels de termos mecanicos devem vir de dicionarios globais.
* O React deve receber strings simples ja localizadas.
* O sistema deve funcionar mesmo quando uma entrada nao tiver traducao.
* A ausencia de traducao deve usar fallback para `en-US`.
* A traducao deve poder ser feita em lotes pequenos, como 10 entradas por rodada.

## 6. O que vai para overlay

Devem ir para overlay textos especificos de uma entrada, como:

* `name`;
* `description`;
* `notes`;
* `summary`;
* `trigger`;
* `disable`;
* `routine`;
* `reset`;
* `effect`;
* `requirements`;
* `frequency`;
* `durationText`;
* `rangeText`;
* `targetText`;
* `areaText`;
* nomes e detalhes de acoes;
* nomes de ataques;
* descricoes de spells;
* textos de heightened;
* descricoes de itens;
* textos de uso e ativacao;
* prerequisitos textuais;
* descricoes de conditions;
* blocos narrativos importados.

## 7. O que nao vai para overlay

Nao devem ir para overlay dados mecanicos, enums e chaves canonicas, como:

* `id`;
* `system`;
* `category`;
* `sourcePack`;
* `sourceId`;
* `level`;
* `rarity`;
* `size`;
* `traits`;
* `armorClass`;
* `hitPoints`;
* `speed`;
* `damage`;
* `bonus`;
* `save`;
* `school`;
* `traditions`;
* `price`;
* `bulk`;
* `range.value`;
* `area.value`;
* atributos;
* pericias;
* salvamentos;
* qualquer numero ou booleano mecanico.

Esses valores devem continuar no arquivo canonico e, quando exibidos ao usuario, podem receber label traduzida via dicionario global.

## 8. UX esperada

O usuario deve poder escolher idioma da interface/conteudo.

Quando `pt-BR` estiver ativo:

* nomes traduzidos aparecem quando existirem;
* textos descritivos traduzidos aparecem quando existirem;
* campos sem traducao usam fallback em ingles;
* dados mecanicos continuam consistentes;
* tags e labels repetiveis sao resolvidas por dicionarios globais.

O Mestre nao deve perceber se uma entrada esta parcialmente traduzida, exceto se algum texto cair em fallback para ingles.

## 9. Fluxo de traducao incremental

O processo de traducao deve ser orientado por lotes.

Fluxo recomendado para um agente de traducao:

1. ler esta especificacao e os contratos tecnicos;
2. localizar arquivos canonicos do modulo escolhido;
3. localizar overlay `pt-BR` correspondente;
4. identificar entradas ja traduzidas;
5. ignorar entradas completas;
6. priorizar entradas parcialmente traduzidas;
7. selecionar proximas 10 entradas pendentes;
8. adicionar somente os textos traduzidos ao overlay;
9. preservar ordem e estrutura de dados mecanicos;
10. validar TypeScript/JSON;
11. apresentar resumo;
12. perguntar se deve traduzir mais 10.

## 10. Decisao sobre duplicacao

Nao criar dois arquivos completos:

```txt
bestiary.en-US.ts
bestiary.pt-BR.ts
```

Isso duplicaria dados mecanicos e aumentaria o risco de divergencia.

Criar:

```txt
bestiary/data.generated.ts
localization/content/pt-BR/bestiary.ts
```

Ou equivalente por categoria.

O arquivo `data.generated.ts` permanece como fonte canonica en-US. O arquivo `pt-BR` contem apenas traducoes.

## 11. Roadmap Funcional

Ordem recomendada:

1. **Base de Localizacao:** criar tipos, helpers e dicionarios globais.
2. **Bestiario NPC:** aplicar overlay pt-BR em criaturas.
3. **Hazards:** aplicar overlay pt-BR em Hazards sem mistura com NPC.
4. **Spells:** aplicar overlay em nomes, descricoes e heightened.
5. **Items:** aplicar overlay em nomes, descricoes, uso e ativacao.
6. **Feats e Conditions:** aplicar overlay nos textos de regras.
7. **Demais Categorias:** expandir para ancestries, classes, backgrounds, actions e outros.
8. **Ferramenta de Progresso:** adicionar relatorio de cobertura por categoria.
9. **Traducoes por Lote:** padronizar prompt/agente para traduzir 10 entradas por rodada.
10. **Validacao de Consistencia:** verificar entradas quebradas, ids inexistentes e textos truncados.

## 12. Limites

Pertence a este submodulo:

* padrao de overlays de traducao;
* dicionarios globais de labels PF2e;
* resolucao de conteudo por locale;
* contratos de traducao por categoria;
* relatorio de cobertura;
* fluxo incremental de traducao;
* fallback para `en-US`.

Nao pertence a este submodulo:

* importacao original do Foundry/PF2e;
* alteracao de regras PF2e;
* balanceamento de criaturas, spells, itens ou hazards;
* traducao automatica em runtime;
* decisoes de UI fora da selecao/exibicao de idioma;
* persistencia de preferencias de usuario, salvo integracao com configuracao global.

## 13. Criterios de Sucesso

A solucao sera considerada correta quando:

* o catalogo canonico continuar em `en-US`;
* `pt-BR` puder ser aplicado sem duplicar o catalogo;
* uma entrada sem traducao funcionar normalmente;
* uma entrada parcialmente traduzida usar fallback corretamente;
* React receber strings simples ja resolvidas;
* dados mecanicos nao forem duplicados em overlays;
* dicionarios globais resolverem labels repetiveis;
* agentes conseguirem traduzir em lotes de 10;
* o processo servir para todo PF2e, nao apenas Bestiario.
