# Modulo: Navegacao Inicial (Specs & Contracts)

## 1. Rotas

```txt
/home        Home inicial autenticada.
/            Redireciona para /home.
/campaigns   Home do modulo de campanhas.
/characters  Home do modulo de personagens.
```

## 2. Contrato Visual
Home inicial deve conter somente:
* Cabecalho com saudacao do usuario autenticado.
* Acao de logout.
* Card/menu de Campanhas.
* Card/menu de Personagens.

## 3. Criterios de Aceitacao
* Login bem-sucedido redireciona para `/home`.
* Cadastro bem-sucedido redireciona para `/home`.
* `/home` nao exibe "Suas campanhas".
* `/home` nao exibe "Meus personagens".
* `/campaigns` exibe a home de campanhas com criar, entrar e lista de campanhas.
* `/characters` exibe a home de personagens com criar e lista de personagens.
