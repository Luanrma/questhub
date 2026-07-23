# Pathfinder 2e - Especificacao da ficha manual V1

## 1. Persistencia

```prisma
model CharacterSheet {
  id            String
  characterId   String @unique
  systemKey     String
  schemaVersion Int
  data          Json
}
```

`Character` continua contendo somente identidade generica. Campos Pathfinder nao sao adicionados diretamente ao model.

## 2. Identidade mecanica

Campos editaveis:

```text
nivel
ancestralidade
heranca
background
classe
divindade
```

Os cinco ultimos campos usam `select`.

Regras:

- valor vazio e permitido;
- valor preenchido deve existir no arquivo correspondente;
- a opcao salva e somente o nome;
- selecionar uma opcao nao modifica atributos, PV, movimento, proficiencias ou qualquer outro campo.

## 3. Campos manuais

### Progressao

```text
EXP atual
EXP para o proximo nivel
movimento em metros
```

### Atributos

```text
Forca
Destreza
Constituicao
Inteligencia
Sabedoria
Carisma
```

### Vida e sobrevivencia

```text
Vida maxima
Vida atual
Vida temporaria
Ferido
Morrendo
Condenado
Bonus
```

### Defesa

```text
Classe de Armadura
Iniciativa
Percepcao: grau e total
```

### Testes de resistencia

```text
Fortitude: grau e total
Reflexos: grau e total
Vontade: grau e total
```

### Pericias

Cada pericia possui grau e total editaveis:

```text
Acrobacia
Arcanismo
Atletismo
Manufatura
Enganacao
Diplomacia
Intimidacao
Medicina
Natureza
Ocultismo
Performance
Religiao
Sociedade
Furtividade
Sobrevivencia
Ladroagem
```

### Armaduras

Graus editaveis:

```text
Sem armadura
Armadura leve
Armadura media
Armadura pesada
```

### Texto livre

```text
Anotacoes
```

## 4. Graus de proficiencia

O select armazena os valores usados pelo Pathfinder:

```text
0 Nao treinado
2 Treinado
4 Especialista
6 Mestre
8 Lendario
```

O valor total ao lado do grau continua manual e nao e recalculado.

## 5. API

```text
GET /api/game-systems/pathfinder-2e/character-sheet/options
GET /api/characters/:characterId/pathfinder-2e-sheet
PUT /api/characters/:characterId/pathfinder-2e-sheet
```

Somente o proprietario do `Character` acessa e altera sua ficha nesta fase.

## 6. Frontend

Rota:

```text
/characters/:characterId/pathfinder-2e-sheet
```

A pagina `/characters` possui o botao `Ficha PF2e`.

Fluxo de aceite:

1. abrir a ficha;
2. selecionar os cinco campos de identidade;
3. editar qualquer campo numerico;
4. salvar;
5. recarregar a pagina;
6. confirmar que os valores permaneceram iguais;
7. confirmar que nenhuma selecao alterou outro campo.

## 7. Exclusoes desta fase

Nenhum arquivo desta fase deve importar ou alterar codigo de Token, grid, tamanho, combate, inventario, spells, bestiario, hazards ou areas de efeito.
