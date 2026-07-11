# Modulo: Opcoes de Personagem Pathfinder 2e (Product)

## 1. Proposito
Fornecer o catalogo canonico de Classes, Ancestralidades, Herancas e Backgrounds de Pathfinder 2e para o QuestHub.

Este modulo substitui o uso de texto livre como unica fonte de verdade na identidade mecanica da ficha PF2e. Ele preserva suporte a opcoes customizadas, mas trata conteudo oficial como referencias estruturadas, rastreaveis e preparadas para criacao guiada.

## 2. Problema Que Resolve
A ficha PF2e atual armazena `className`, `ancestry`, `heritage` e `background` como strings. Esse modelo permite rascunhos simples, mas nao permite:

* validar opcoes oficiais;
* relacionar Heranca com Ancestralidade;
* preservar fonte, licenca e publicacao;
* migrar fichas antigas com seguranca;
* aplicar HP, boosts, proficiencias, idiomas, visao e escolhas obrigatorias;
* recalcular efeitos derivados sem estado acumulado.

## 3. Personas
* **Jogador:** escolhe opcoes oficiais ou customizadas durante criacao e edicao da ficha.
* **Mestre:** revisa fichas de personagens vinculados e precisa enxergar origem das opcoes.
* **Desenvolvedor de ruleset:** usa contratos normalizados para evoluir automacao PF2e sem acoplar regras ao core.

## 4. Escopo
Incluido:

* catalogo de Classes;
* catalogo de Ancestralidades;
* catalogo de Herancas;
* catalogo de Backgrounds;
* extracao a partir de `pf2e-master/packs`;
* normalizacao para contratos do QuestHub;
* preservacao de rules, granted items, UUIDs, source path, publicacao e licenca;
* filtro de Herancas por Ancestralidade, incluindo Herancas versateis;
* selecoes oficiais e customizadas na ficha V2;
* migracao de fichas V1 baseadas em texto livre.

## 5. Fora De Escopo Inicial
Nao pertence a primeira entrega:

* execucao completa de Rule Elements do Foundry;
* catalogos completos de feats, spells, class features ou ancestry features;
* multiclass, dedications, archetypes, dual class, free archetype ou variants;
* execucao generica de UUIDs arbitrarios;
* copiar documentos completos para `Character.sheet`;
* popular banco relacional com todos os dados do catalogo;
* buscar GitHub em runtime.

## 6. Regras De Produto
* Catalogo, selecao, escolhas do usuario e efeitos derivados sao conceitos separados.
* Conteudo oficial deve ser persistido na ficha como referencia estavel, nao como nome solto.
* Conteudo customizado continua permitido e preserva o texto informado pelo usuario.
* Trocar Ancestralidade deve validar a Heranca atual: manter Heranca versatil, manter Heranca da mesma Ancestralidade e limpar ou sinalizar Heranca incompativel.
* A ficha pode continuar sendo rascunho incompleto, com selecoes nulas.
* A UI deve renderizar `plainText` por padrao; HTML bruto de origem so pode aparecer apos sanitizacao explicita.
* A fonte local `pf2e-master` e a autoridade de extracao; runtime nao deve depender de rede.

## 7. Limites Do Modulo
Pertence a este modulo:

* regras PF2e de catalogo e compatibilidade;
* modelos PF2e especificos dentro de `packages/game-system-pathfinder-2e`;
* adapter para expor dados em formato generico ao core/API.

Nao pertence a este modulo:

* identidade basica do `Character`, ownership, campaign role ou status;
* contratos agnosticos que possam conter campos mecanicos de PF2e;
* listeners WebSocket ou persistencia de campanha;
* regras de canvas, token, inventario ou combate.

## 8. Fonte Canonica Local
A copia local auditada esta em:

```text
pf2e-master/
```

Revisao auditada:

```text
indisponivel na copia local: `pf2e-master` nao possui `.git` proprio neste workspace
```

Observacao: `git -C pf2e-master` sobe para o repositorio do QuestHub quando a pasta PF2e nao e um clone independente, portanto esse comando nao deve ser usado como revisao canonica da fonte PF2e nesta copia.

Estrutura encontrada:

```text
pf2e-master/packs/classes
pf2e-master/packs/ancestries
pf2e-master/packs/heritages
pf2e-master/packs/backgrounds
```

Contagem inicial de documentos reais, ignorando `_folders.json`:

* Classes: 25.
* Ancestralidades: 48.
* Herancas: 311.
* Backgrounds: 459.

Auditoria inicial de Herancas:

* Herancas especificas: 294.
* Herancas versateis (`system.ancestry = null`): 17.
