# Assets Specs

## Variaveis de ambiente
Obrigatorias:
* `FIREBASE_PROJECT_ID`
* `FIREBASE_CLIENT_EMAIL`
* `FIREBASE_PRIVATE_KEY`, aceitando PEM com quebras reais, PEM com `\n` escapado ou base64 do PEM.

Opcionais:
* `FIREBASE_STORAGE_BUCKET`, padrao `${FIREBASE_PROJECT_ID}.appspot.com`.
* `NODE_ENV`, usado para selecionar `dev` ou `prod`.
* `ASSET_MAX_UPLOAD_BYTES`, padrao `10485760` (10 MiB), limita o arquivo bruto recebido.
* `ASSET_USER_STORAGE_LIMIT_BYTES`, padrao `104857600` (100 MiB), limita o total armazenado por usuario.
* `ASSET_IMAGE_MAX_WIDTH`, padrao `2048`, limita largura de imagens otimizadas.
* `ASSET_IMAGE_QUALITY`, padrao `82`, controla qualidade de compressao de imagens.

## Tipos aceitos
Uploads de cena/mapa aceitam apenas:
* `image/jpeg`
* `image/png`
* `image/webp`
* `image/avif`

## Prisma
`Asset` armazena:
* `id`
* `userId`
* `storagePath`
* `originalName`
* `mimeType`
* `size`
* timestamps

`CampaignAsset` armazena:
* `id`
* `campaignId`
* `assetId`
* timestamps

`CampaignAsset.assetId` usa cascade quando `Asset` e removido. A rota de delecao deve retornar aviso e exigir confirmacao quando houver vinculos.

## API
`GET /api/assets?campaignId=:campaignId`
* Autenticado.
* Valida que o usuario autenticado e Mestre ativo da campanha.
* Retorna todos os assets do usuario vinculados a campanha, com URL assinada para preview.

`POST /api/assets`
* Autenticado.
* Recebe multipart com campo `file`.
* Pode receber `campaignId` por query string para assets de campanha/cena.
* Quando `campaignId` for enviado, valida que o usuario autenticado e Mestre ativo da campanha.
* Rejeita arquivo bruto maior que `ASSET_MAX_UPLOAD_BYTES`.
* Para assets de cena/mapa, rejeita MIME fora dos tipos de imagem aceitos.
* Otimiza imagens `image/jpeg`, `image/png`, `image/webp` e `image/avif` com `sharp`.
* Valida que `sum(Asset.size)` do usuario mais o tamanho final do asset nao excede `ASSET_USER_STORAGE_LIMIT_BYTES`.
* Faz upload no Firebase Storage com caminho identificavel por ambiente, produto, `userId`, `campaignId` quando houver, e nome do arquivo.
* Para assets com `campaignId`, o caminho e deterministico: `ambiente/questhub/assets/userId/campaignId/nome_arquivo`.
* Para assets sem `campaignId`, como avatar, o caminho fica abaixo de `ambiente/questhub/assets/userId/`.
* Se ja existir `Asset` para o mesmo `userId`, `campaignId` e nome de arquivo, a API deve retornar o asset existente e nao fazer novo upload para o Firebase.
* Cria `Asset`.
* Quando `campaignId` for enviado, cria tambem `CampaignAsset`.
* Retorna metadados, URL assinada, tamanho original, tamanho armazenado e flag de otimizacao.

`GET /api/assets/:assetId/url`
* Autenticado.
* Valida posse por `Asset.userId`.
* Retorna URL assinada.

`GET /api/assets/exists`
* Autenticado.
* Recebe `campaignId`, `filename` e `mimeType` por query string.
* Valida que o usuario autenticado e Mestre ativo da campanha.
* Retorna se ja existe `Asset` para o path deterministico da cena sem receber o arquivo.

`DELETE /api/assets/:assetId`
* Autenticado.
* Valida posse por `Asset.userId`.
* Se houver `CampaignAsset` e `force=true` nao for enviado, retorna `409` com aviso de cascade.
* Com `force=true`, remove do Firebase Storage e do banco.
* Delecao de asset de cena deve usar `force=true` para remover tambem o vinculo `CampaignAsset`.

## Firebase Admin SDK
* A inicializacao do Firebase Storage deve ser lazy, executada apenas quando `AssetService` acessa o bucket.
* Falhas de parsing de chave privada devem retornar uma mensagem operacional clara sobre `FIREBASE_PRIVATE_KEY`.
