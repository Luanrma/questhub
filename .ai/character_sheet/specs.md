# Modulo: Ficha de Personagem (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato base para persistir e validar uma ficha mecanica de um `Character` existente.

Este modulo nao cria `Character`, nao cria vinculo de campanha e nao define campos de sistemas de RPG. Ele valida o envelope comum e delega o conteudo interno para o submodulo responsavel pelo sistema informado.

## 2. Envelope Comum

```ts
type CharacterSheetEnvelope = {
  system: string
  version: number
  metadata?: CharacterSheetMetadata
  data: Record<string, unknown>
}

type CharacterSheetMetadata = {
  bio?: string | null
}
```

Exemplo generico:

```json
{
  "system": "SYSTEM_IDENTIFIER",
  "version": 1,
  "metadata": {
    "bio": "Narrativa curta do personagem."
  },
  "data": {
    "systemDataKey": {}
  }
}
```

Regras:
* `system` e obrigatorio.
* `version` e obrigatorio e deve ser inteiro positivo.
* `data` e obrigatorio.
* `metadata` e opcional.
* `metadata.bio`, quando informado, e texto livre generico da ficha e nao pertence a nenhum sistema especifico.
* Cada sistema deve possuir um bloco proprio dentro de `data`.
* O nome do bloco de sistema deve ser definido pelo submodulo responsavel.
* `Character.system` deve ser atualizado para o mesmo valor de `sheet.system`.
* Se `Character.sheet` existir, `Character.system` nao deve ser `null`.
* `Character` nao deve possuir campo `bio`; bio pertence exclusivamente a `sheet.metadata.bio`.

## 3. Compatibilidade Com Campanha
* Campanha pode exigir um sistema.
* Personagem sem ficha pode receber ficha depois, conforme o fluxo de personagem/campanha.
* Personagem com ficha so pode ser vinculado a campanha compativel com `sheet.system`.
* Incompatibilidade de sistema deve bloquear o fluxo ate que uma acao explicita seja escolhida pelo usuario.

## 4. Contrato De Extensao Para Submodulos
Submodulos de sistema devem declarar:
* `system`: identificador persistido no envelope.
* `dataKey`: chave usada dentro de `data`.
* `version`: versao atual do schema do sistema.
* `defaultSheet`: objeto inicial para nova ficha.
* `schema`: validador do bloco de dados do sistema.
* `labels`: textos de UI, quando aplicavel.

Fluxo de validacao:
1. Validar envelope comum.
2. Localizar adaptador pelo `system`.
3. Validar existencia de `data[dataKey]`.
4. Delegar validacao do bloco para o submodulo.
5. Persistir envelope completo em `Character.sheet`.

## 5. Criterios De Aceitacao
* Ficha nao pode ser salva para personagem inexistente.
* Ficha nao pode ser salva sem `system`.
* Ficha nao pode ser salva sem `version`.
* Ficha nao pode ser salva sem `data`.
* `metadata.bio`, quando informado, deve respeitar o limite de tamanho definido pelo modulo base.
* Ficha nao pode ser salva se o sistema informado nao possuir adaptador registrado.
* Ficha nao pode ser salva se o bloco esperado do sistema estiver ausente.
* Ao salvar ficha, `Character.system` e `Character.sheet.system` devem permanecer coerentes.
* O modulo base nao deve conter campos, limites ou formulas de sistemas especificos.
* A UI de ficha deve abrir em modal sobre a tela atual.
* O modal de ficha deve ser arrastavel por uma area de cabecalho.
* O modal deve poder ser arrastado dentro de toda a area util da viewport, respeitando apenas margens para nao sair totalmente da tela.
* O modal de ficha deve ter paginacao interna para reduzir ocupacao de tela.
* O mesmo componente visual deve ser reutilizavel no VTT para consultar/editar ficha sem sair do tabuleiro.

## 6. Decisoes Pendentes
* Onde ficara o registro compartilhado de adaptadores no codigo.
* Como versionar migracoes de ficha por sistema.
* Como apresentar incompatibilidade de sistema na UI final.
