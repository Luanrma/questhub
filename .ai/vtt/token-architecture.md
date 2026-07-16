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
- não existe controlador jogador persistido no Token.

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

Ele pode ser criado, posicionado e utilizado sem `characterId`. Um Token genérico pode armazenar somente propriedades visuais e espaciais do VTT, como:

- nome visual;
- imagem ou cor;
- tamanho;
- posição;
- rotação;
- camada;
- visibilidade.

O Token não deve presumir campos mecânicos universais.

### 2. Vínculo opcional e exclusivo com Character

A associação entre Token e `Character` é opcional e exclusiva:

- um Token pode estar associado a zero ou um `Character`;
- um `Character` pode estar associado a zero ou um Token;
- o mesmo `Character` não pode estar vinculado simultaneamente a dois Tokens;
- a exclusividade deve ser protegida no banco de dados por uma restrição única sobre o vínculo opcional.

Cardinalidade:

```text
Token 0..1 <-> 0..1 Character
```

O vínculo não torna o Token dependente do `Character` para existir.

### 3. Autoridade do Mestre

O Mestre:

- controla todos os Tokens da campanha;
- pode conceder, transferir ou revogar o controle de um Token;
- é o único autorizado a transferir Tokens entre cenas.

A autoridade global do Mestre deriva de seu papel na campanha e não precisa ser repetida como uma permissão individual em cada Token.

### 4. Controle persistente por jogador

- Um jogador pode controlar vários Tokens.
- Cada Token pode ter no máximo um jogador controlador, além do Mestre.
- Conceder o controle a outro jogador substitui o controlador anterior.
- A permissão pertence ao jogador participante da campanha, não ao `Character`.
- O controlador deve ser persistido no banco de dados.
- O controle permanece entre sessões.
- O controle permanece quando o Token é transferido entre cenas.
- O Token pode receber um jogador controlador mesmo sem possuir `characterId`.
- Vincular ou desvincular um `Character` não remove automaticamente o controlador existente.
- O controle-base permite selecionar, movimentar, rotacionar, medir deslocamento e executar interações operacionais permitidas no tabuleiro.
- O controle-base não permite alterar nome, imagem, tamanho, camada, visibilidade, vínculo, controlador, cena ou excluir o Token.
- O Mestre pode conceder ao controlador uma única permissão adicional de personalização, que autoriza conjuntamente a alteração do nome e da imagem do Token.
- Jogadores controladores não podem transferir o Token entre cenas.
- Quando o jogador controlador deixa a campanha, o controle é removido automaticamente; o Token permanece sob autoridade do Mestre e pode ser reatribuído.

### 5. Main Character

Cada jogador possui um Main Character dentro da campanha.

Quando o Main Character é vinculado a um Token:

- seu jogador recebe automaticamente o controle do Token;
- o Mestre pode transferir esse controle para outro jogador;
- a transferência remove o controle do jogador anterior;
- a transferência não altera a propriedade ou responsabilidade pelo Main Character.

Propriedade da identidade e controle do Token são conceitos distintos.

### 6. Controle do Token e acesso ao Character

As autorizações são separadas.

- Controlar um Token não concede automaticamente permissão para editar o `Character`.
- Visualização e edição da identidade ou de dados mantidos por módulos externos possuem regras próprias.
- Transferir o controle do Token não transfere propriedade do `Character`.
- Somente o Mestre pode criar, remover ou substituir o vínculo entre Token e `Character`.
- Excluir o `Character` vinculado não exclui o Token; o vínculo recebe `characterId = null`, preservando cena, aparência e controlador.

### 7. Escopo de campanha e permanência em cena

O Token pertence à campanha e pode estar posicionado em no máximo uma cena por vez.

- A cena atual do Token é uma associação opcional.
- Trocar a cena ativa ou visualizada pelo Mestre não transporta Tokens automaticamente.
- O Token permanece na cena em que estava.
- Não existe transferência direta de uma cena para outra.
- O Mestre primeiro remove o Token da cena atual, fazendo `sceneId = null`.
- O Token removido permanece disponível no painel de Tokens da toolbar.
- Depois de abrir a nova cena, o Mestre posiciona esse mesmo Token no grid a partir do painel.
- A posição é definida no momento em que o Token é colocado na nova cena.
- O processo não cria uma duplicata.
- Remover ou reposicionar o Token não altera seu controlador.
- Excluir uma cena não exclui seus Tokens; eles permanecem na campanha com `sceneId = null`.

## Invariantes do domínio

1. Um `Character` não pode estar vinculado a mais de um Token.
2. Um Token não pode ocupar mais de uma cena simultaneamente.
3. Um Token não pode possuir mais de um jogador controlador simultaneamente.
4. O Mestre sempre mantém autoridade sobre todos os Tokens da campanha.
5. Alterar o controlador não altera a propriedade do `Character`.
6. Alterar a cena não altera o controlador.
7. Controlar o Token não implica editar o `Character`.
8. Um Token não depende de `Character` para possuir controlador.
9. Excluir uma cena não pode excluir seus Tokens.
10. Excluir um `Character` não pode excluir o Token vinculado.
11. Um Token não pode manter como controlador um jogador que não participa mais da campanha.
12. O VTT Core não depende de ficha, sistema ou ruleset.

## Impactos esperados na persistência

A implementação deverá revisar o modelo atual `CampaignSceneToken` para suportar:

- pertencimento obrigatório à campanha;
- `sceneId` opcional;
- `characterId` opcional e único;
- referência opcional ao único jogador controlador;
- controlador independente de `characterId`;
- preservação do Token quando ele sair de uma cena;
- uso de `onDelete: SetNull` ou comportamento transacional equivalente no vínculo com a cena;
- uso de `onDelete: SetNull` ou comportamento transacional equivalente no vínculo com `Character`;
- remoção automática do controlador quando ele deixa a campanha;
- validação de que cena, identidade e controlador pertencem à mesma campanha.

Os nomes finais dos modelos e campos serão definidos durante a implementação, após o encerramento das decisões arquiteturais.

## Permissões mínimas

| Ação | Mestre | Jogador controlador | Outro jogador |
| --- | --- | --- | --- |
| Visualizar Token | Conforme visibilidade da cena | Conforme visibilidade da cena | Conforme visibilidade da cena |
| Selecionar, mover, rotacionar e medir | Sim | Sim | Não |
| Alterar nome e imagem | Sim | Somente com permissão adicional | Não |
| Alterar tamanho, camada ou visibilidade | Sim | Não | Não |
| Transferir entre cenas | Sim | Não | Não |
| Conceder ou revogar controle | Sim | Não | Não |
| Alterar o vínculo com Character | Sim | Não | Não |
| Excluir Token | Sim | Não | Não |
| Editar Character | Regra externa ao controle do Token | Regra separada | Regra separada |

## Decisões pendentes

