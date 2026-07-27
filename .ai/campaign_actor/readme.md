# Campaign Actor

`CampaignActor` representa qualquer entidade existente dentro de uma campanha: personagem de jogador, NPC, criatura, familiar, montaria ou outra entidade do mundo.

A participação de uma pessoa na campanha pertence a `CampaignMember`. Um membro pode possuir um ator principal e controlar outros atores, mas ator e usuário não são a mesma entidade.

Não existem atores globais fora da campanha. `Character`, `CharacterSheet` e `CampaignCharacter` não fazem parte da arquitetura do QuestHub.
