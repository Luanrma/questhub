# Pathfinder 2e — Catálogo de Magias — Contratos

## Modelo canônico

`Pathfinder2eSpellDefinition` contém identidade, rank, raridade, traits, tradições, conjuração, alvo/área, duração, defesa, dano/cura estruturado, heightening, ritual, descrição, fonte editorial e cobertura de automação.

Campos com mais de uma forma usam uniões discriminadas:

* tempo: `ACTIONS | REACTION | FREE_ACTION | LONG | VARIABLE | UNKNOWN`;
* alcance: `SELF | TOUCH | UNLIMITED | DISTANCE | TEXT | NONE`;
* defesa: `SAVE | SPELL_ATTACK | NONE`;
* aprimoramento: `INTERVAL | MANUAL | NONE`;
* automação: `SUPPORTED | PARTIAL | MANUAL`.

## Importação

Entrada: documentos do pack de spells do PF2e para Foundry.

Saída:

* `data.generated.ts` com definições canônicas;
* `import-manifest.generated.ts` com auditoria da execução.

Uma entrada inválida vai para `manifest.rejected`; não é parcialmente gravada.

## Automação

`SUPPORTED` significa apenas que os campos mecânicos mínimos foram estruturados. Não autoriza automaticamente qualquer efeito colateral.

`PARTIAL` exige confirmação ou execução manual das partes listadas em `reasons`.

`MANUAL` impede resolução automática e mantém a descrição para uso na mesa.

## Critérios de aceitação

* O catálogo é independente do esquema do Foundry.
* O importador é determinístico para a mesma entrada, exceto `importedAt`.
* Busca por nome, trait, rank, raridade, tradição e tipo continua disponível.
* Rituais permanecem separados de magias conjuráveis.
* Nenhuma regra desconhecida é executada ou aproximada.
