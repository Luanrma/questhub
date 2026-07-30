# Pathfinder 2e — Catálogo Bilíngue de Conteúdo

## 1. Propósito

Importar progressivamente o conteúdo Pathfinder 2e já disponível na branch `development`, em rodadas pequenas, coerentes e auditáveis.

Cada rodada de conteúdo deve conter obrigatoriamente:

- Bestiário, incluindo criaturas e hazards;
- Spells;
- Items;
- conteúdo original `en-US` preservado;
- tradução `pt-BR` armazenada separadamente.

As rodadas são lotes técnicos de tamanho limitado. Elas não representam a
conclusão de uma faixa de nível ou Rank enquanto ainda houver qualquer entrada
elegível não importada nessa faixa.

O objetivo final é alcançar a cobertura de conteúdo existente na `development`.
O processamento normal permanece incremental; depois que dois domínios forem
integralmente esgotados, uma reconciliação terminal explicitamente solicitada
pode importar de uma vez todo o saldo do último domínio.

## 2. Problema resolvido

A importação em massa impede validar a qualidade de cada domínio, dificulta saber o que foi traduzido e consome esforço antes de comprovar que a estrutura será aproveitável.

Este módulo transforma a migração em uma sequência determinística de rodadas. A qualquer momento deve ser possível responder:

1. o que existe na fonte;
2. o que já foi importado;
3. o que já foi traduzido;
4. o que está desatualizado;
5. qual é a próxima rodada;
6. por que essa rodada vem em seguida.

O catálogo também deve informar o menor nível ou Rank ainda incompleto em cada
domínio. Nenhum domínio pode avançar silenciosamente deixando conteúdo elegível
para trás.

## 3. Regra principal das rodadas

Uma rodada de conteúdo nunca entrega apenas um domínio.

Toda rodada publicada contém os três conjuntos:

```text
Bestiário + Spells + Items
```

Cada conjunto pode ter quantidade diferente e, enquanto o domínio ainda
possuir registros elegíveis na fonte travada, deve possuir ao menos uma
entrada. Quando uma publicação não possuir conteúdo em um dos domínios, ela
deve ser agrupada com a próxima publicação coerente do mesmo programa
editorial até completar os três conjuntos.

Depois que a reconciliação integral comprovar que um domínio não possui mais
nenhum registro elegível, rodadas terminais podem declarar esse domínio em
`exhaustedDomains` e congelar seu conjunto vazio. Essa exceção não autoriza
duplicar registros anteriores, criar placeholders ou omitir um domínio que
ainda possua pendências.

Uma rodada com `terminalReconciliation = true` pode ultrapassar o limite
operacional normal apenas para esgotar o último domínio pendente. Ela deve
selecionar todo o saldo da fonte travada, falhar se o corte deixar registros
para trás e declarar os outros domínios em `exhaustedDomains`.

A rodada é somente um manifesto de entrega. Criaturas, magias e itens não pertencem a arquivos nomeados pela rodada.

## 4. Idiomas

- `en-US` é a versão original e imutável.
- `pt-BR` é um overlay de tradução.
- Original e tradução ficam fisicamente separados.
- IDs, slugs, fórmulas, traits internos e referências não são traduzidos.
- A ausência de tradução usa fallback para `en-US`, mas uma rodada não é considerada concluída enquanto os campos obrigatórios em `pt-BR` não estiverem revisados.
- Alternar idioma não altera a entidade mecânica nem cria outra cópia do registro.

## 5. Organização do catálogo

O filesystem representa o que o conteúdo é, não a rodada em que ele foi entregue:

```text
content_catalog/
  bestiary/
    original/<publication>.ts
    translations/pt-BR/<publication>.ts
  spells/
    original/<publication>.ts
    translations/pt-BR/<publication>.ts
  items/
    weapons/
    armor/
    shields/
    equipment/
    consumables/
    ammunition/
    treasure/
    containers/
    kits/
  deliveries/
    <delivery-name>.ts
```

Hazards pertencem ao domínio visual `BESTIARY`, mas preservam
`entryType = "HAZARD"` e seus campos próprios. Eles não são convertidos em
criaturas nem recebem atributos, percepção, ataques ou deslocamento
artificiais.

As categorias de Items são criadas somente quando houver conteúdo. `deliveries/` guarda apenas source lock, IDs, manifest e cobertura.

## 6. Fronteira arquitetural

Este módulo pertence exclusivamente a:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/
```

O VTT genérico não conhece estruturas de criatura, magia ou item. Ele pode conhecer apenas o descritor neutro do sistema:

```text
PATHFINDER_2E
```

O catálogo não será registrado em `apps/api/src/server.ts` e não pode importar módulos do VTT.

## 7. Fora do escopo

Não pertencem a este trabalho:

- automações de regras;
- integração de magias com canvas ou combate;
- aplicação de dano, cura ou condições;
- consumo de recursos;
- equipamento automático;
- comportamento de tokens;
- qualquer regra mecânica do Pathfinder dentro do VTT genérico.

Esses temas são independentes do processo de aquisição, tradução e publicação do catálogo.

## 8. Personas

- **Responsável pelo conteúdo:** acompanha importação, tradução, revisão e cobertura.
- **Tradutor/revisor:** trabalha somente nos campos traduzíveis e preserva o original.
- **Desenvolvedor do sistema Pathfinder 2e:** mantém normalizadores e contratos dentro da fronteira do sistema.
- **Usuário do QuestHub:** alterna entre `en-US` e `pt-BR` sem alterar o conteúdo original e explora o Bestiário por nível, raridade e traits.

## 9. Valor entregue

- entregas pequenas e verificáveis;
- redução de retrabalho;
- rastreabilidade de origem e tradução;
- próxima etapa sempre conhecida;
- evolução até a cobertura completa da `development`;
- descoberta rápida de criaturas e hazards pelos metadados mecânicos publicados pelo próprio Pathfinder 2e;
- preservação total da independência do VTT.
