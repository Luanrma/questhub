# Campaign Actor

## Visão geral

`CampaignActor` é a identidade de qualquer entidade existente dentro de uma campanha. Ele substitui a antiga separação entre personagem global e vínculo de campanha.

## Responsabilidades

* Pertencer a exatamente uma `Campaign`.
* Guardar identidade neutra: nome, avatar e biografia.
* Ser o proprietário opcional de ficha, inventário e demais extensões da entidade.
* Poder ser vinculado opcionalmente a um `CampaignToken`.
* Poder possuir um `CampaignMember` controlador sem transformar o ator em usuário.

## Não responsabilidades

* Autenticação e identidade da conta.
* Papel ou status de participação na campanha.
* Interpretação de regras específicas de RPG.
* Posicionamento em cena.

## Materialização por extensões

Um sistema de jogo pode materializar uma criatura como um novo agregado da
campanha. Cada instância recebe identidade neutra própria, extensão de ficha e
Token opcional. Extensões que não oferecem inventário, como a ficha resumida de
NPC originada no bestiário, não criam um agregado `Inventory`. Duplicar a
instância nunca reutiliza o ator original.
