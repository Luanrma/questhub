# Skills: Implementação de Autenticação

## Tecnologias e Bibliotecas
- **Validação:** Zod (para definição de schemas e validação de input).
- **Frontend:** React Hook Form para gerenciamento de estado de formulários.
- **Backend/ORM:** Prisma para consultas à tabela `User`.

## Padrões Recomendados
- **Zod Schema:**
  ```typescript
  const authSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
  });
  ```
- **Context API:** Criar um `AuthContext` para prover o estado `user` e a função `logout` para toda a aplicação.
- **Segurança:** Jamais retornar a senha (mesmo em hash) nas requisições do frontend.