# Campaign Actor — Restrições Técnicas

- `CampaignActor` pertence obrigatoriamente a uma única `Campaign`.
- O ator não referencia diretamente um sistema de jogo; o sistema é determinado pela campanha.
- Controle de usuário é representado por `CampaignMember`, nunca por um vínculo global com `User`.
- Um membro pode controlar vários atores e pode definir um deles como ator principal.
- Token, ficha e inventário referenciam o ator sem assumir que ele é um personagem de jogador.
