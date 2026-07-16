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
- Jogadores controladores podem movimentar o Token dentro da cena atual.
- Jogadores controladores não podem transferir o Token entre cenas.

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

### 7. Escopo de campanha e permanência em cena

O Token pertence à campanha e pode estar posicionado em no máximo uma cena por vez.

- A cena atual do Token é uma associação opcional.
- Trocar a cena ativa ou visualizada pelo Mestre não transporta Tokens automaticamente.
- O Token permanece na cena em que estava.
- O Mestre pode trazer o mesmo Token para outra cena.
- Ao transferi-lo, o Token deixa a cena anterior e passa a ocupar a nova.
- A transferência não cria uma duplicata.
- A transferência não altera o controlador.

## Invariantes do domínio

1. Um `Character` não pode estar vinculado a mais de um Token.
2. Um Token não pode ocupar mais de uma cena simultaneamente.
3. Um Token não pode possuir mais de um jogador controlador simultaneamente.
4. O Mestre sempre mantém autoridade sobre todos os Tokens da campanha.
5. Alterar o controlador não altera a propriedade do `Character`.
6. Alterar a cena não altera o controlador.
7. Controlar o Token não implica editar o `Character`.
8. Um Token não depende de `Character` para possuir controlador.
9. O VTT Core não depende de ficha, sistema ou ruleset.

## Impactos esperados na persistência

A implementação deverá revisar o modelo atual `CampaignSceneToken` para suportar:

- pertencimento obrigatório à campanha;
- `sceneId` opcional;
- `characterId` opcional e único;
- referência opcional ao único jogador controlador;
- controlador independente de `characterId`;
- preservação do Token quando ele sair de uma cena;
- validação de que cena, identidade e controlador pertencem à mesma campanha.

Os nomes finais dos modelos e campos serão definidos durante a implementação, após o encerramento das decisões arquiteturais.

## Permissões mínimas

| Ação | Mestre | Jogador controlador | Outro jogador |
| --- | --- | --- | --- |
| Visualizar Token | Conforme visibilidade da cena | Conforme visibilidade da cena | Conforme visibilidade da cena |
| Mover na cena atual | Sim | Sim | Não |
| Transferir entre cenas | Sim | Não | Não |
| Conceder ou revogar controle | Sim | Não | Não |
| Alterar o vínculo com Character | Sim | Não definido | Não |
| Editar Character | Regra externa ao controle do Token | Regra separada | Regra separada |

## Decisões pendentes

- Quais ações, além de movimento, fazem parte da permissão de controle.
- Quem pode criar, remover ou substituir o vínculo opcional com `Character`.
- Comportamento ao excluir uma cena, um `Character` ou um participante controlador.
- Posição inicial ao transferir um Token para outra cena.
