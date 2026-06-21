# Skills: Implementacao de Autenticacao

## Tecnologias e Bibliotecas
- **Validacao:** Zod para definicao de schemas e validacao de input no backend.
- **Frontend:** Formularios React controlados no estado local atual; React Hook Form pode ser adotado quando o modulo crescer.
- **Backend/ORM:** Prisma para consultas a tabela `User`.

## Padroes Recomendados
- **Zod Schema:**
  ```typescript
  const authSchema = z.object({
    email: z.string().email("E-mail invalido"),
    password: z.string().min(8, "A senha deve ter no minimo 8 caracteres")
  });
  ```
- **Context API:** Usar o contexto de sessao para prover o estado `user`, login e logout para a aplicacao.
- **Erros de API:** O frontend deve preservar o status HTTP e a mensagem de erro retornada pela API para diferenciar conflito de cadastro (`409`) e falha de login (`401`).
- **Seguranca:** Jamais retornar a senha, mesmo em hash, nas requisicoes do frontend.
