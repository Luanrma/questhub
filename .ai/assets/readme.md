# Assets

## O que e por que
O contexto de assets centraliza o armazenamento de arquivos enviados por usuarios do QuestHub.

Assets devem ser persistidos no Firebase Storage, nao no filesystem local da API, para que ambientes de desenvolvimento e producao usem o mesmo mecanismo de infraestrutura sem depender do disco do container.

## Personas e casos de uso
* Usuario autenticado envia um arquivo para usar como recurso visual ou operacional.
* Usuario autenticado consulta a URL de acesso de um asset proprio.
* Usuario autenticado remove um asset proprio.
* Mestre ou fluxo de campanha pode vincular assets a uma campanha via `CampaignAsset`.

## Regras de negocio
* Todo asset pertence a um `User` por `userId`.
* `storagePath` e o caminho canonico do arquivo no Firebase Storage.
* `storagePath` deve iniciar com o prefixo de ambiente: `dev/assets/` em desenvolvimento e `prod/assets/` em producao.
* Delecao de asset deve validar o usuario autenticado contra `Asset.userId`.
* Quando houver vinculos em `CampaignAsset`, a API deve avisar o impacto de cascade antes de remover.
* Cada usuario possui uma quota total de storage para assets, configurada por ambiente.
* Cada upload possui tamanho maximo bruto, configurado por ambiente.
* Imagens raster devem ser otimizadas antes do upload quando o tipo suportar compressao sem quebrar o uso do asset.
