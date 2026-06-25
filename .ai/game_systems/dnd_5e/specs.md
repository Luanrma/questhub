# Submodulo: D&D 5e (Specs & Contracts)

## 1. Responsabilidade
Definir o estado contratual inicial do ruleset D&D 5e.

## 2. Identificador

```ts
const DND_5E_SYSTEM_ID = 'DND_5E'
```

## 3. Capacidades Iniciais

```ts
const dnd5eAdapter = {
  id: 'DND_5E',
  label: 'D&D 5e',
  version: 1,
  status: 'RESERVED',
  characterSheet: undefined,
  catalogs: {
    ancestries: false,
    heritages: false,
    backgrounds: false,
    classes: false,
    feats: false,
    spells: false,
    items: false
  }
}
```

Observacao de linguagem: D&D 5e usa termos como especies/racas em vez de ancestralidades/herancas, mas o contrato de capacidades permanece generico para o registry. Labels especificas devem ser resolvidas pelo ruleset quando a implementacao existir.

## 4. Regras
* `DND_5E` existe como identificador reservado no schema Prisma e no registry conceitual.
* No codigo atual, criacao de personagem e criacao de campanha nao devem aceitar `DND_5E`, porque nao ha `characterSheet` jogavel.
* Enquanto `characterSheet` nao existir, fluxos que exigem ficha mecanica jogavel de D&D 5e devem bloquear ou apresentar estado indisponivel.
* D&D 5e nao pode depender de Pathfinder 2e.
* O VTT nao pode depender de D&D 5e.

## 5. Criterios de Aceitacao
* A ausencia de ficha D&D 5e deve ser explicita para produto e tecnica.
* Adicionar ficha D&D 5e no futuro deve exigir atualizacao deste submodulo antes do codigo.
* O registry pode listar D&D 5e como sistema conhecido sem prometer capacidades ainda nao implementadas.
