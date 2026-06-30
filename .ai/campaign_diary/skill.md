# Campaign Diary Skills & Tech

## Stack Tecnologica
* Fastify para rotas HTTP do modulo.
* Prisma e PostgreSQL para persistencia de diarios da campanha.
* Zod para validar payloads HTTP.
* React e React Router para modal aberto pela sidebar esquerda.
* Markdown renderer no frontend para preview do conteudo.

## Padroes
* Campaign-owned Diaries: diarios pertencem diretamente a campanha.
* Explicit Diary Save: diarios sempre exigem botao `Salvar`.
* DDD Backend Boundary: rotas chamam services/casos de uso, e todo acesso ao banco passa por repositories do modulo.
* Layered Folders: `domain/`, `services/` e `repositories/` sao pastas obrigatorias para backend com regra de negocio.
* Read/Write Repositories: repositories devem ser separados em `repositories/read.ts` e `repositories/write.ts`.
* Independent Context: diario nao e submodulo de cena, presenca, chat ou VTT.
* Layout-mounted Modal: abrir diario nao desmonta a mesa VTT.

## Restricoes
* Nao vincular diario a `CampaignScene`.
* Nao implementar endpoints de diario dentro de `campaign_scene`.
* Nao revelar diarios para jogadores neste escopo.
* Nao fazer auto-save durante digitacao.
* Nao acessar Prisma diretamente em rotas ou services; usar repository do modulo.
* Nao acessar repositories diretamente fora de `services/`.
* Nao deixar arquivos soltos na raiz do modulo quando pertencerem a `domain/`, `services/` ou `repositories/`.
* Nao colocar regras mecanicas de ruleset dentro do diario.
