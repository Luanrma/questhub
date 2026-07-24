# Pathfinder 2e — Catálogo Bilíngue — Restrições Técnicas

## 1. Fonte inicial

A primeira fonte é o conteúdo PF2e já utilizado na branch `development`:

```text
pf2e-master/packs
```

A implementação existente na `development` deve ser tratada como referência de migração para:

- leitura dos packs;
- normalização de Bestiário, Spells e Items;
- preservação de `sourcePack` e `sourceId`;
- leitura de publicação, licença e indicador de Remaster;
- manifests já existentes, especialmente o de Spells.

Não copiar acoplamentos com módulos do VTT.

## 2. Source lock obrigatório

Toda execução de importação deve registrar:

- provedor;
- versão do sistema de origem;
- commit exato da fonte;
- checksum da entrada;
- versão do importador;
- data da execução.

É proibido publicar uma rodada gerada a partir de uma branch móvel sem commit identificado.

## 3. Identidade estável

A identidade externa mínima é:

```text
provider + sourcePack + sourceId
```

O `slug` é auxiliar de busca e nunca substitui o ID da origem.

## 4. Original e tradução

- O documento original deve ser preservado após normalização.
- A tradução deve armazenar somente campos traduzíveis.
- A tradução referencia o mesmo `contentId` do original.
- Alterações no texto de origem tornam somente os campos afetados `STALE`.
- Alterações exclusivamente mecânicas não invalidam automaticamente a tradução.

## 5. Determinismo

Com a mesma fonte, configuração e versão do importador, o resultado deve ser idêntico.

Obrigatório:

- ordenação estável;
- IDs estáveis;
- seleção congelada por rodada;
- hashes reproduzíveis;
- relatórios gerados a partir dos manifests;
- nenhuma escolha aleatória.

## 6. Planejamento de rodadas

As rodadas seguem programas editoriais ordenados. Dentro de cada programa:

1. ordenar publicações conforme o roadmap;
2. aplicar os filtros de nível/rank da rodada;
3. agrupar publicações adjacentes quando necessário para possuir os três domínios;
4. respeitar os limites máximos configurados;
5. congelar os IDs selecionados antes da tradução.

Limites iniciais recomendados por rodada:

```text
Bestiário: até 20 entradas
Spells: até 30 entradas
Items: até 40 entradas
```

Os limites podem diminuir para manter coerência editorial. Aumentá-los exige atualização explícita do roadmap.

## 7. Tradução

A tradução `pt-BR` deve usar:

- glossário versionado para termos estruturados;
- tradução específica para nomes e textos descritivos;
- revisão humana antes de publicar a rodada;
- referência pelo ID interno de ações ou elementos incorporados, nunca pela posição em arrays.

## 8. Segurança e licenças

Cada registro deve preservar:

- publicação;
- licença;
- indicador de Remaster;
- origem técnica.

Conteúdo não pode ser publicado se a licença estiver ausente ou bloqueada para o uso pretendido.

## 9. Integrações proibidas nesta etapa

O catálogo não pode depender de:

- canvas;
- combate;
- tokens;
- inventário de campanha;
- personagens;
- efeitos ativos;
- WebSocket;
- módulos em `apps/api/src/modules`.

## 10. Testes mínimos

Devem existir testes para garantir:

- IDs e ordens de rodada únicos;
- presença dos três domínios em cada rodada de conteúdo;
- presença de `en-US` e `pt-BR`;
- limites positivos;
- próxima rodada calculada deterministicamente;
- nenhuma rodada publicada com pendência obrigatória.