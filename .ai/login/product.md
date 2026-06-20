# Domínio: Autenticação (Login e Cadastro)

## Regras de Negócio
- **Fluxo de Acesso:** Ao iniciar a página, o sistema deve verificar o estado de autenticação do usuário. Caso não esteja logado, deve ser apresentada uma tela de login ou de cadastro de usuário.

### Cadastro de Usuário
Para realizar o cadastro, o sistema deve validar:
- **E-mail:** Deve ser um endereço de e-mail válido.
- **Senha:** Deve possuir, no mínimo, 8 caracteres.

### Login
Para autenticação de usuários existentes:
- **Identificação:** Requer a combinação de e-mail e senha cadastrados.