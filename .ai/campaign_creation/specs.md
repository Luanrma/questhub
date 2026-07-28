# Criacao de Campanha: Contrato

`POST /api/campaigns` recebe `title`, `description?` e `joinPolicy`.

* Titulo e obrigatorio.
* A campanha nasce sem qualquer propriedade de regras.
* Campanha e vinculo `MASTER/ACTIVE` sao criados atomicamente.
* Nenhum `CampaignActor` ou `Inventory` é criado implicitamente.
* Entrar ou ser aprovado em uma campanha cria/reativa somente `CampaignMember`.
