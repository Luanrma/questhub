# VTT: Arquitetura de Tokens Agnósticos e Controle

## Status

Decisão arquitetural em evolução.

Este documento consolida apenas as decisões sobre:

- existência e ciclo de vida dos Tokens;
- vínculo opcional com identidades;
- controle por jogadores;
- permanência e transferência entre cenas;
- fronteira entre o VTT Core e módulos externos de ficha.

Questões sobre estrutura de fichas, GameSystem, Packages, bestiários e regras mecânicas permanecem fora deste escopo.

## Contexto

O modelo anterior pressupõe Tokens vinculados a personagens e persistidos diretamente em uma cena. Esse desenho limita representações genéricas como objetos, animais, montarias, marcadores e outras entidades que podem existir sem personagem ou ficha.

O estado atual do Prisma ainda reflete esse modelo:

- `CampaignSceneToken.characterId` é obrigatório;
- `CampaignSceneToken.sceneId` é obrigatório;
- o Token é removido em cascata com a cena;
- não existe controlador jogador persistido no Token;
- identidade do Token e posicionamento na cena ocupam o mesmo registro.

O estado-alvo descrito neste documento ainda deverá ser implementado após a conclusão das decisões pendentes.

## Fronteira do VTT Core

O VTT Core permanece independente de sistemas e regras de RPG.

- O VTT pode conhecer opcionalmente a identidade `Character` por meio de `characterId`.
- O VTT não acessa, interpreta ou valida ficha mecânica.
- `Character.sheet`, `GameSystem`, Packages, bestiários, atributos, PV, nível e conceitos equivalentes não pertencem ao contrato do VTT Core.
- Módulos externos podem usar a identidade vinculada para localizar dados adicionais sem fazer o núcleo depender deles.

Portanto, no VTT Core, o Token está vinculado opcionalmente a uma identidade, não diretamente a uma ficha.

## Decisões consolidadas

### 1. Token independente

O Token é uma entidade independente dentro da campanha.

Ele pode ser criado e utilizado sem `characterId` e sem estar posicionado em uma cena. Um Token genérico pode possuir propriedades visuais como nome, imagem, cor e tamanho sem presumir campos mecânicos universais.

### 2. Vínculo opcional e exclusivo com Character

A associação entre Token e `Character` é opcional e exclusiva:

- um Token pode estar associado a zero ou um `Character`;
- um `Character` pode estar associado a zero ou um Token;
- o mesmo `Character` não pode estar vinculado simultaneamente a dois Tokens;
- a exclusividade deve ser protegida no banco de dados por uma restrição única sobre o vínculo opcional.

Cardinalidade:

```text
CampaignToken 0..1 <-> 0..1 Character
```

O vínculo não torna o Token dependente do `Character` para existir.

### 3. Autoridade do Mestre

O Mestre:

- controla todos os Tokens da campanha;
- pode conceder, transferir ou revogar o controle de um Token;
- é o único autorizado a remover Tokens de cenas e posicioná-los em outras cenas.

A autoridade global do Mestre deriva de seu papel na campanha e não precisa ser repetida como uma permissão individual em cada Token.

### 4. Controle persistente por jogador

- Um jogador pode controlar vários Tokens.
- Cada Token pode ter no máximo um jogador controlador, além do Mestre.
- Conceder o controle a outro jogador substitui o controlador anterior.
- A permissão pertence ao jogador participante da campanha, não ao `Character`.
- O controlador deve ser persistido no banco de dados.
- O controle permanece entre sessões.
- O controle permanece quando o posicionamento do Token muda.
- O Token pode receber um jogador controlador mesmo sem possuir `characterId`.
- Vincular ou desvincular um `Character` não remove automaticamente o controlador existente.
- O controle-base permite selecionar, movimentar, rotacionar, medir deslocamento e executar interações operacionais permitidas no tabuleiro.
- O controle-base não permite alterar nome, imagem, tamanho, camada, visibilidade, vínculo, controlador, cena ou excluir o Token.
- O Mestre pode conceder ao controlador uma única permissão adicional de personalização, que autoriza conjuntamente a alteração do nome e da imagem do Token.
- Jogadores controladores não podem remover o Token de uma cena nem posicioná-lo em outra.
- Quando o jogador controlador deixa a campanha, o controle é removido automaticamente; o Token permanece sob autoridade do Mestre e pode ser reatribuído.

### 5. Main Character e Tokens secundários

Cada jogador possui exatamente um Main Character ativo dentro da campanha.

O Main Character é identificado pelo vínculo `CampaignCharacter` ativo com `role = PLAYER`. Para cada combinação de jogador e campanha, não pode existir mais de um vínculo ativo com esse papel.

Quando o Main Character é vinculado a um Token:

- seu jogador recebe automaticamente o controle do Token;
- o Mestre pode transferir esse controle para outro jogador;
- a transferência remove o controle do jogador anterior;
- a transferência não altera a propriedade ou responsabilidade pelo Main Character.

Propriedade da identidade e controle do Token são conceitos distintos.

`SECONDARY` é uma classificação derivada do controle do Token, não um valor de `CampaignCharacterRole`:

- o Token do Main Character não é secundário para seu jogador;
- qualquer outro Token controlado por esse jogador é um Token secundário dele;
- um Token secundário pode estar vinculado ou não a um `Character`;
- conceder, transferir ou revogar o controle atualiza automaticamente essa classificação derivada;
- não existe `CampaignCharacterRole.SECONDARY` nem persistência duplicada dessa informação.

### 6. Controle do Token e acesso ao Character

As autorizações são separadas.

- Controlar um Token não concede automaticamente permissão para editar o `Character`.
- Visualização e edição da identidade ou de dados mantidos por módulos externos possuem regras próprias.
- Transferir o controle do Token não transfere propriedade do `Character`.
- Somente o Mestre pode criar, remover ou substituir o vínculo entre Token e `Character`.
- Excluir o `Character` vinculado não exclui o Token; o vínculo recebe `characterId = null`, preservando posicionamento, aparência e controlador.

### 7. Token e posicionamento em entidades separadas

A persistência é dividida em duas entidades:

- `CampaignToken` representa o Token persistente e pertence obrigatoriamente à campanha;
- `CampaignTokenPlacement` representa a presença atual desse Token em uma cena.

A relação é opcional e exclusiva:

```text
CampaignToken 1 <-> 0..1 CampaignTokenPlacement
```

Regras:

- `CampaignToken` guarda nome, imagem, cor, tamanho, vínculo com `Character`, controlador e permissão de personalização;
- `CampaignTokenPlacement` possui obrigatoriamente `tokenId`, `sceneId`, `positionX`, `positionY`, rotação, camada e visibilidade;
- `tokenId` é único em `CampaignTokenPlacement`, impedindo o mesmo Token de ocupar duas cenas;
- um Token sem registro de posicionamento fica disponível no painel de Tokens da toolbar;
- remover um Token da cena exclui somente seu `CampaignTokenPlacement`;
- posicionar o Token em uma cena cria um novo `CampaignTokenPlacement` com a posição escolhida pelo Mestre;
- não existe transferência direta entre cenas: primeiro o posicionamento atual é removido e depois outro é criado;
- remover ou recriar o posicionamento não altera vínculo, controlador ou aparência do `CampaignToken`;
- excluir uma cena remove seus registros de posicionamento, mas preserva os respectivos `CampaignToken`;
- trocar a cena ativa ou visualizada não altera posicionamentos;
- o painel ordena Tokens em três grupos: primeiro Tokens de Main Characters, depois Tokens secundários controlados por jogadores e, por último, Tokens exclusivos do Mestre.

## Invariantes do domínio

1. Um `Character` não pode estar vinculado a mais de um `CampaignToken`.
2. Um `CampaignToken` não pode possuir mais de um `CampaignTokenPlacement`.
3. Um Token não pode ocupar mais de uma cena simultaneamente.
4. Um Token não pode possuir mais de um jogador controlador simultaneamente.
5. O Mestre sempre mantém autoridade sobre todos os Tokens da campanha.
6. Alterar o controlador não altera a propriedade do `Character`.
7. Alterar o posicionamento não altera o controlador.
8. Controlar o Token não implica editar o `Character`.
9. Um Token não depende de `Character` para possuir controlador.
10. `SECONDARY` deve ser derivado do controlador e do Main Character, sem ser persistido como papel.
11. Excluir uma cena não pode excluir seus Tokens.
12. Excluir um `Character` não pode excluir o Token vinculado.
13. Um Token não pode manter como controlador um jogador que não participa mais da campanha.
14. O VTT Core não depende de ficha, sistema ou ruleset.

## Impactos esperados na persistência

A implementação deverá substituir a responsabilidade atual de `CampaignSceneToken` por:

- `CampaignToken`, pertencente obrigatoriamente a `Campaign`, com nome, imagem, cor, tamanho, `characterId` opcional e único, controlador opcional e permissão adicional de personalização;
- `CampaignTokenPlacement`, com `tokenId` único, `sceneId`, `positionX`, `positionY`, rotação, camada e visibilidade;
- exclusão em cascata de posicionamentos quando a cena for excluída, sem excluir os Tokens;
- `onDelete: SetNull` ou comportamento transacional equivalente no vínculo de `CampaignToken` com `Character`;
- remoção automática do controlador quando ele deixar a campanha;
- garantia de no máximo um `CampaignCharacter` ativo com `role = PLAYER` por jogador e campanha;
- validação de que Token, cena, identidade e controlador pertencem à mesma campanha.

## Permissões mínimas

| Ação | Mestre | Jogador controlador | Outro jogador |
| --- | --- | --- | --- |
| Visualizar Token | Conforme visibilidade da cena | Conforme visibilidade da cena | Conforme visibilidade da cena |
| Selecionar, mover, rotacionar e medir | Sim | Sim | Não |
| Alterar nome e imagem | Sim | Somente com permissão adicional | Não |
| Alterar tamanho, camada ou visibilidade | Sim | Não | Não |
| Remover da cena ou posicionar em outra | Sim | Não | Não |
| Conceder ou revogar controle | Sim | Não | Não |
| Alterar o vínculo com Character | Sim | Não | Não |
| Excluir Token | Sim | Não | Não |
| Editar Character | Regra externa ao controle do Token | Regra separada | Regra separada |

## Decisões pendentes

- Quais valores iniciais rotação, camada e visibilidade recebem ao criar um novo posicionamento.
