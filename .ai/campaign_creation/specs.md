# Criacao de Campanha: Contrato

`POST /api/campaigns` recebe `title`, `description?`, `joinPolicy`, `masterCharacterId?` e `masterCharacterName?`.

* Titulo e obrigatorio.
* Exatamente uma identidade existente livre ou um nome para nova identidade deve ser informado.
* A identidade existente deve pertencer ao usuario e nao pode estar arquivada ou vinculada.
* A campanha nasce sem qualquer propriedade de regras.
* Campanha e vinculo `MASTER/ACTIVE` sao criados atomicamente.
