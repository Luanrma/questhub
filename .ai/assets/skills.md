# Assets Skills

## Stack
* Fastify para rotas HTTP.
* `@fastify/multipart` para upload multipart por stream/buffer.
* Prisma para metadados relacionais.
* Firebase Admin SDK para Firebase Storage.
* `sharp` para otimizacao de imagens raster antes do upload.
* Zod para validacao de variaveis de ambiente e contratos simples.

## Padroes
* `apps/api/src/server.ts` permanece como composition root e apenas registra o modulo.
* Credenciais do Firebase Admin SDK entram por variaveis de ambiente.
* `AssetService` encapsula upload, delecao e geracao de URL, mantendo controllers sem dependencia direta do SDK.
* `AssetOptimizer` encapsula compressao e normalizacao de imagens, mantendo rotas sem dependencia direta da biblioteca de imagem.
* Rotas validam autenticacao antes de operar qualquer asset.

## Restricoes
* Nao usar `fs.writeFile` ou persistencia local para uploads.
* Nao commitar arquivos reais `.env.development`, `.env.production` ou JSON de service account.
* Nao montar caminhos locais de credenciais no codigo da aplicacao.
* O bucket deve ser acessivel de dentro do container por variaveis injetadas no runtime.
* Arquivos nao-imagem nao devem ser comprimidos genericamente, pois isso altera o formato esperado e pode aumentar arquivos ja compactados.
