# Dominio: Autenticacao (Login e Cadastro)

## Regras de Negocio
- **Fluxo de Acesso:** Ao iniciar a pagina, o sistema deve verificar o estado de autenticacao do usuario. Caso nao esteja logado, deve ser apresentada uma tela de login ou de cadastro de usuario.

### Cadastro de Usuario
Para realizar o cadastro, o sistema deve validar:
- **E-mail:** Deve ser um endereco de e-mail valido.
- **Senha:** Deve possuir, no minimo, 8 caracteres.
- **E-mail existente:** Se o e-mail ja estiver cadastrado, a interface deve informar isso de forma visivel no formulario.

### Login
Para autenticacao de usuarios existentes:
- **Identificacao:** Requer a combinacao de e-mail e senha cadastrados.
- **Falha de autenticacao:** Se o usuario nao existir ou a senha estiver incorreta, a interface deve exibir uma mensagem generica de credenciais invalidas.
