# Modulo: Configuracoes de Usuario por Campanha (Skills & Tech)

## 1. Stack Tecnologica
* Backend Fastify para contratos HTTP.
* Prisma/PostgreSQL para persistencia relacional com campo JSON.
* Zod para validar payloads de configuracao.
* Frontend React usando `localStorage` como cache local.

## 2. Padroes
* Campaign/User Scoped Settings: toda configuracao e enderecada por `campaignId + userId`.
* JSON Namespaces: o campo `settings` deve usar namespaces por area, como `dice`.
* Local Cache First: o frontend pode aplicar cache local imediatamente e sincronizar com o backend em seguida.
* Server Normalization: o backend deve normalizar valores conhecidos antes de persistir.
* Access Guard: leitura e escrita exigem participacao do usuario na campanha.

## 3. Restricoes
* Nao criar configuracao global de usuario para preferencias que dependem do contexto da campanha.
* Nao salvar configuracoes de todos os usuarios em um unico JSON da campanha.
* Nao permitir que um usuario escreva configuracoes de outro usuario.
* Nao usar este modulo para estado compartilhado da mesa, como cena ativa, tokens, grid persistido ou presenca.
* Nao exigir round-trip ao backend para cada renderizacao do VTT; carregar ao abrir a campanha e manter cache local.

## 4. Cuidados Tecnicos
* Usar `@@unique([campaignId, userId])` como protecao contra duplicidade.
* Usar `onDelete: Cascade` para remover configuracoes quando campanha ou usuario forem removidos.
* Preservar namespaces desconhecidos ao atualizar um namespace conhecido.
* Manter defaults no backend e no frontend consistentes.
