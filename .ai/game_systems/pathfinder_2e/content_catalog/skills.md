# Pathfinder 2e — Catálogo Bilíngue — Restrições Técnicas

## 1. Fonte inicial

A primeira fonte é o conteúdo PF2e já utilizado na branch `development`:

```text
pf2e-master/packs
```

A implementação existente na `development` deve ser tratada como referência de migração para leitura dos packs, normalização, identidade da origem, publicação, licença, Remaster e manifests. Não copiar acoplamentos com módulos do VTT.

## 2. Source lock obrigatório

Toda execução de importação deve registrar:

- provedor;
- versão do sistema de origem;
- commit exato da fonte;
- checksum da entrada;
- versão do importador;
- data da execução.

É proibido publicar uma entrega gerada a partir de uma branch móvel sem commit identificado.

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

## 6. Determinismo

Com a mesma fonte, configuração e versão do importador, o resultado deve ser idêntico.

Obrigatório:

- ordenação estável;
- IDs estáveis;
- seleção congelada por entrega;
- hashes reproduzíveis;
- relatórios gerados a partir dos manifests;
- nenhuma escolha aleatória.

## 7. Planejamento de entregas

Dentro de cada programa:

1. ordenar publicações conforme o roadmap;
2. aplicar os filtros de nível/rank;
3. agrupar publicações adjacentes quando necessário para possuir os três domínios;
4. respeitar os limites máximos configurados;
5. congelar os IDs selecionados antes da tradução.

Limites iniciais:

```text
Bestiário: até 20 entradas
Spells: até 30 entradas
Items: até 40 entradas
```

## 8. Tradução

A tradução `pt-BR` deve usar:

- glossário versionado para termos estruturados;
- tradução específica para nomes e textos descritivos;
- revisão humana antes de publicar;
- referência pelo ID interno de ações ou elementos incorporados, nunca pela posição em arrays.

## 9. Segurança e licenças

Cada registro deve preservar publicação, licença, indicador de Remaster e origem técnica. Conteúdo não pode ser publicado se a licença estiver ausente ou bloqueada para o uso pretendido.

## 10. Integrações proibidas nesta etapa

O catálogo não pode depender de canvas, combate, tokens, inventário de campanha, personagens, efeitos ativos, WebSocket ou módulos em `apps/api/src/modules`.

## 11. Testes mínimos

Devem existir testes para garantir:

- IDs e ordens únicos;
- presença dos três domínios em cada entrega;
- presença de `en-US` e `pt-BR`;
- originais e traduções separados;
- source lock válido;
- próxima entrega calculada deterministicamente;
- nenhuma publicação com pendência obrigatória.
