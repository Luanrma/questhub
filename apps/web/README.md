# QuestHub Web

Aplicação web React do QuestHub.

Esta pasta mantém os arquivos próprios do app web:

- `index.html` - entrada HTML usada pelo Vite.
- `src/` - código, estilos e assets da interface.
- `README.md` - notas locais do app.
- `vite.config.ts` - configuração do Vite para este app.
- `tsconfig*.json` - configuração TypeScript deste app.
- `eslint.config.js` - lint do frontend.
- `postcss.config.mjs` - PostCSS/Tailwind do frontend.

Use os scripts da raiz:

```bash
npm run dev:web
npm run build:web
npm run lint:web
```

---

# Documentacao tecnica do modulo

## Objetivo do modulo

Fornecer a SPA React do QuestHub.

## Responsabilidade principal

Renderizar fluxos de autenticacao, campanhas, personagens, ficha e presenca usando a API em `apps/api`.

## Funcionalidades existentes

- Login e cadastro.
- Home autenticada.
- Dashboard de campanhas.
- Criacao e entrada em campanhas.
- Area de campanha com menu lateral.
- Jogadores e configuracoes de campanha.
- Biblioteca de personagens.
- Criacao/edicao de personagem.
- Modal de ficha Pathfinder 2e.

## Dependencias internas e externas

- Internas: `src/lib/api.ts`, `src/contexts/SessionContext.tsx`, pages, layouts e components.
- Externas: React, React Router, Socket.IO Client, Lucide React, Vite e Tailwind/PostCSS.

## Modulos relacionados

- `apps/api`: endpoints HTTP e Socket.IO.
- `apps/web/public/avatars`: presets de avatar.

## Pontos de entrada

- `index.html`.
- `src/main.tsx`.
- `src/App.tsx`.

## Fluxos importantes

- `SessionProvider` envolve toda a aplicacao.
- `BrowserRouter` define rotas em `App.tsx`.
- Chamadas HTTP usam `credentials: include`.
- Socket.IO e criado apos `me` estar carregado.

## Arquivos criticos

- `vite.config.ts`.
- `src/main.tsx`.
- `src/App.tsx`.
- `src/contexts/SessionContext.tsx`.
- `src/lib/api.ts`.

## Observacoes tecnicas e debitos

- Varios textos exibem mojibake.
- Algumas rotas de campanha ainda usam placeholder.
- `PrivateLayout` existe, mas nao e usado nas rotas atuais.
