# Specs: Autenticacao (Login e Cadastro)

## Contratos de Dados

### Cadastro (Sign Up)
- **Input:** `email` (string, unico), `password` (string, min 8).
- **Validacao:** O e-mail deve ser validado no formato RFC 5322 antes da persistencia.
- **Persistencia:** O usuario deve ser criado no banco de dados via Prisma com a senha criptografada.

### Login (Sign In)
- **Input:** `email`, `password`.
- **Processo:** Comparacao da senha enviada com o hash armazenado no banco.
- **Sessao:** Apos o sucesso, deve ser gerado um estado de autenticacao valido (JWT ou Session).

## Tratamento de Erros
- **Cadastro:** A API deve retornar erro quando o e-mail ja estiver em uso.
- **Login:** A API deve retornar mensagem generica de `Credenciais invalidas` para usuario inexistente ou senha incorreta.
- **Geral:** Erros de validacao de campo devem indicar o problema de entrada.

## Criterios de Interface
- **Hero de Login:** O layout publico deve exibir a imagem `questhub-login-hero.png` como hero da tela de login/cadastro em viewports desktop.
- **Cadastro:** Quando a API retornar conflito por e-mail existente (`409`), a tela deve exibir uma mensagem visivel informando que o e-mail ja esta cadastrado.
- **Login:** Quando a API retornar falha de autenticacao (`401`), a tela deve exibir uma mensagem visivel de credenciais invalidas, sem revelar se o e-mail ou a senha causou a falha.
- **Experiencia:** Mensagens de erro de autenticacao devem aparecer no formulario e serem limpas quando o usuario alterar os campos ou reenviar o formulario.
