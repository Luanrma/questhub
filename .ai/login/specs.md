# Specs: Autenticação (Login e Cadastro)

## Contratos de Dados

### Cadastro (Sign Up)
- **Input:** `email` (string, único), `password` (string, min 8).
- **Validação:** O e-mail deve ser validado no formato RFC 5322 antes da persistência.
- **Persistência:** O usuário deve ser criado no banco de dados via Prisma com a senha criptografada.

### Login (Sign In)
- **Input:** `email`, `password`.
- **Processo:** Comparação da senha enviada com o hash armazenado no banco.
- **Sessão:** Após o sucesso, deve ser gerado um estado de autenticação válido (JWT ou Session).

## Tratamento de Erros
- **Cadastro:** Erro se o e-mail já estiver em uso.
- **Login:** Mensagem genérica de "Credenciais inválidas" para segurança.
- **Geral:** Erros de validação de campo (ex: "E-mail inválido" ou "Senha muito curta").