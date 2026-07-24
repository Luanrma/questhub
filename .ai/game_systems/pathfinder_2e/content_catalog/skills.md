# Pathfinder 2e — Catálogo Bilíngue — Restrições Técnicas

## 1. Fonte inicial

A primeira fonte é o conteúdo PF2e já utilizado na branch `development`:

```text
pf2e-master/packs
```

A implementação existente na `development` deve ser tratada como referência de migração para leitura dos packs, normalização, identidade da origem, publicação, licença, Remaster e manifests. Não copiar acoplamentos com módulos do VTT.

## 2. Source lock obrigatório

Toda execução de importação deve registrar:

- versão do sistema de origem;
- commit exato da fonte;
- checksum da entrada;
- versão do importador;
- data da execução.

O modelo não armazena um enum ou identificador de provedor externo.

É proibido publicar uma entrega gerada a partir de uma branch móvel sem commit identificado.

## 3. Identidade estável

A identidade externa mínima é:

```text
sourcePack + sourceId
```

O `slug` é auxiliar de busca e nunca substitui o ID da origem.

A identidade não pode conter:

- enum de provedor;
- URL de repositório;
- hostname externo;
- instrução de download em runtime.

## 4. Original e tradução

- O documento original deve ser preservado após normalização.
- A tradução deve armazenar somente campos traduzíveis.
- A tradução referencia o mesmo `contentId` do original.
- Original e tradução devem estar em árvores de diretórios diferentes.
- Alterações no texto de origem tornam somente os campos afetados `STALE`.
- Alterações exclusivamente mecânicas não invalidam automaticamente a tradução.

## 5. Organização física obrigatória

O nome e a localização de um arquivo devem representar o conteúdo armazenado:

```text
bestiary/original/<publication>.ts
bestiary/translations/pt-BR/<publication>.ts
spells/original/<publication>.ts
spells/translations/pt-BR/<publication>.ts
items/<category>/original/<publication>.ts
items/<category>/translations/pt-BR/<publication>.ts
deliveries/<delivery-name>.ts
```

Regras:

- arquivos de criaturas não podem ser nomeados pela rodada;
- arquivos de magias não podem ser nomeados pela rodada;
- arquivos de itens não podem ser nomeados pela rodada;
- `deliveries/` contém somente metadados de entrega, IDs, source lock, cobertura e manifests;
- o mesmo conteúdo pode ser referenciado por uma entrega sem ser fisicamente armazenado nela;
- novas publicações geram novos arquivos dentro do domínio correspondente;
- categorias vazias de Items não devem ser criadas artificialmente.

Categorias previstas para Items:

```text
weapons
armor
shields
equipment
consumables
ammunition
treasure
containers
kits
```

## 6. Assets visuais

Todo asset exibido em runtime deve estar versionado no repositório QuestHub.

Diretório único:

```text
apps/api/src/game_systems/pathfinder_2e/icons/
```

Rota local:

```text
/api/game-systems/pathfinder-2e/icons/
```

Regras:

- registros apontam somente para caminhos iniciados por `/api/game-systems/pathfinder-2e/icons/`;
- URLs absolutas e CDNs externas são proibidas nos registros;
- a rota bloqueia path traversal e extensões não permitidas;
- não há download de imagens em runtime;
- sem correspondência exata no pacote local, o campo `image` é omitido;
- remover o arquivo não pode impedir o build nem remover a entidade;
- o frontend usa o ícone genérico quando `image` não existe ou falha.

## 7. Determinismo

Com a mesma fonte, configuração e versão do importador, o resultado deve ser idêntico.

Obrigatório:

- ordenação estável;
- IDs estáveis;
- seleção congelada por entrega;
- hashes reproduzíveis;
- relatórios gerados a partir dos manifests;
- nenhuma escolha aleatória.

## 8. Planejamento de entregas

Dentro de cada programa:

1. gerar o inventário completo das publicações do programa;
2. em Bestiário, considerar elegíveis documentos de ator com `type = "npc"` ou
   `type = "hazard"`;
3. remover somente IDs já publicados ou rejeitados com justificativa;
4. ordenar Bestiário e Items por nível crescente e identidade da origem;
5. ordenar Spells por Rank crescente e identidade da origem;
6. selecionar o menor nível ou Rank ainda incompleto;
7. preencher o lote até o limite sem saltar registros anteriores;
8. congelar os IDs selecionados antes da tradução.

Limites atuais por lote:

```text
Bestiário: até 100 entradas
Spells: até 40 entradas
Items: até 100 entradas
```

A Cobertura exaustiva 02 inaugura esses limites, dobrando a capacidade da
Cobertura exaustiva 01. O tamanho maior não altera o cursor editorial: o
importador continua descontando todos os IDs já congelados e seleciona os
próximos registros em ordem crescente de nível ou Rank e identidade da fonte.

Os limites são máximos, não metas obrigatórias. Enquanto o pipeline estiver sendo
validado por amostragem, uma rodada pode congelar um conjunto representativo menor,
desde que:

- mantenha ao menos uma entrada nos três domínios;
- documente as publicações e faixas aplicadas;
- declare o critério editorial usado para representar estruturas distintas;
- congele os IDs antes da tradução;
- não apresente a amostra como cobertura integral da faixa.

As Rodadas 1 e 2 do Core Remaster são pilotos históricos com três entradas por
domínio. Elas não autorizam o cursor editorial a avançar de nível ou Rank.

Cada domínio mantém dois cursores independentes: publicação e nível/Rank. A
publicação atual só avança depois que todas as suas entradas elegíveis tiverem
sido importadas ou rejeitadas com justificativa. O avanço de uma publicação em
um domínio não altera os cursores dos demais. Na fila Core Remaster:

- Bestiário avança de `Pathfinder Monster Core` para
  `Pathfinder Monster Core 2` depois do esgotamento comprovado do primeiro
  livro na Cobertura exaustiva 06;
- Spells avança de `Pathfinder Player Core` para `Pathfinder Player Core 2`
  depois do esgotamento comprovado do primeiro livro na Cobertura exaustiva 09;
- Items avança de `Pathfinder Player Core` para `Pathfinder Player Core 2`
  depois do esgotamento comprovado do primeiro livro na Cobertura exaustiva 03
  e para `Pathfinder GM Core` depois do esgotamento de Player Core 2 na
  Cobertura exaustiva 06.

Uma mesma rodada pode, portanto, usar publicações diferentes entre os três
domínios, desde que cada seleção respeite seu próprio cursor e o manifesto
registre explicitamente as publicações utilizadas.

Quando um programa editorial se esgota em um domínio enquanto outros domínios
do mesmo programa ainda possuem pendências, somente o cursor esgotado avança
para o programa seguinte. A entrega de transição permanece classificada no
programa editorial mais antigo que ainda possui qualquer cursor pendente. O
campo `program` da rodada representa essa prioridade de execução, não a
propriedade editorial de todas as entradas; cada registro continua preservando
sua publicação real em `source.publicationTitle`.

O cursor de Bestiário também registra o pack técnico exato da publicação. Esse
pack deve ser informado ao importador quando for diferente de
`pathfinder-monster-core`; derivar diretório por semelhança de título é
proibido.

Uma cobertura pode consumir mais de um pack de Bestiário quando precisa
concluir a publicação corrente e avançar para a seguinte sem ultrapassar o
limite. Publicações e packs são informados em listas posicionais separadas por
`|`; a ordem dessas listas define a precedência editorial antes da ordenação
por nível e identidade.

Hazards são normalizados com contrato próprio:

- `entryType = "HAZARD"`;
- nível, raridade, tamanho e traits;
- descrição, furtividade e detalhes de detecção;
- procedimento de desarme;
- complexidade, rotina e reset;
- CA, PV, Dureza, salvamentos e defesas;
- ações incorporadas endereçadas por ID.

É proibido preencher campos exclusivos de criatura com valores artificiais
para acomodar um hazard.

Se um nível ou Rank possuir mais entradas que o limite, ele gera quantos lotes
forem necessários. Um lote só pode incluir o nível ou Rank seguinte quando
todas as entradas elegíveis dos valores anteriores estiverem publicadas ou
rejeitadas com justificativa.

Registros `kit` do Player Core que não possuem `system.level` explícito são
normalizados como nível 0, coerente com o restante do equipamento inicial. O
manifesto registra um aviso para tornar essa decisão auditável.

## 9. Tradução

A tradução `pt-BR` deve usar:

- glossário versionado para termos estruturados;
- tradução específica para nomes e textos descritivos;
- revisão humana antes de publicar;
- referência pelo ID interno de ações ou elementos incorporados, nunca pela posição em arrays.

Traits estruturadas de Bestiário, ataques e Items devem possuir cobertura
explícita no glossário, inclusive quando a grafia correta em português for
igual à original. Famílias parametrizadas (`reach-*`, `thrown-*`, `deadly-*`,
`fatal-*`, `reload-*`, `two-hand-*`, `versatile-*` e `volley-*`) são resolvidas
por regras determinísticas. O fallback que apenas devolve o slug inglês não
pode ser tratado como tradução coberta.

Não criar traduções fictícias copiando o texto inglês. Um original importado
sem tradução recebe `NOT_STARTED`; quando nomes e campos descritivos forem
traduzidos automaticamente, recebe `MACHINE_DRAFT` e permanece pendente de
revisão humana.

O importador pode associar um ícone somente pelo caminho `img` exato da fonte.
Ele não pode fazer busca aproximada por nome ou slug.

### 9.1. Markup técnico da fonte

Descrições da fonte podem conter comandos de apresentação do Foundry, como
`@Damage[...]`, `@Template[...]`, `@item.level` e `@item.rank`. Esses comandos
não fazem parte do conteúdo editorial e nunca podem ser exibidos literalmente
em cards ou fichas.

Regras:

- o importador converte comandos conhecidos para uma representação textual
  neutra;
- o adapter Pathfinder aplica a mesma normalização na fronteira de
  apresentação para cobrir lotes já congelados;
- `@item.level` e `@item.rank` usam o nível ou Rank do próprio registro;
- expressões aritméticas suportadas são calculadas sem `eval`;
- anotações de dano e área são convertidas em texto legível no locale
  solicitado;
- um comando desconhecido recebe fallback textual seguro e não pode vazar
  como uma expressão iniciada por `@`;
- o VTT genérico não conhece nem interpreta markup do sistema de origem.

Regra visual:

- `REVIEWED` não exibe tag;
- estados ainda pendentes exibem `Tradução em revisão` fora da lista de traits;
- o filtro editorial continua usando o status real, independentemente da tag visual.

## 10. Segurança e licenças

Cada registro deve preservar publicação, licença, indicador de Remaster e origem técnica neutra. Conteúdo e assets não podem ser publicados se a licença estiver ausente ou bloqueada para o uso pretendido.

A classificação no programa `LEGACY_OGL` usa o indicador editorial
`remaster = false`, não apenas o texto da licença. Uma publicação de transição
como `Pathfinder Rage of Elements` permanece em `RULEBOOKS` quando seus
registros estão marcados como Remaster, ainda que a fonte travada preserve
`license = "OGL"`. Licença e classificação editorial continuam sendo campos
independentes e ambos devem permanecer auditáveis.

## 11. Integrações proibidas nesta etapa

O catálogo não pode depender de canvas, combate, tokens, inventário de campanha, personagens, efeitos ativos, WebSocket ou módulos em `apps/api/src/modules`.

## 12. Testes mínimos

Devem existir testes para garantir:

- IDs e ordens únicos;
- presença dos três domínios em cada entrega;
- presença de `en-US` e `pt-BR`;
- originais e traduções separados;
- source lock válido;
- próxima entrega calculada deterministicamente;
- nenhuma publicação com pendência obrigatória;
- nenhuma URL externa em `imageUrl`;
- fallback quando o arquivo local não existe;
- ausência de tag visual em traduções revisadas.
