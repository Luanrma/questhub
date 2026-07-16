# Identidades de Personagem: Contrato

```prisma
model Character {
  id        String   @id @default(cuid())
  userId    String
  name      String
  avatarUrl String?
  bio       String?
  deletedAt DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

* `POST /api/characters`: cria identidade com `name`, `avatarUrl?` e `bio?`.
* `GET /api/characters`: lista identidades ativas e deriva `available`.
* `GET /api/characters/:characterId`: retorna identidade do usuario.
* `PATCH /api/characters/:characterId`: atualiza os mesmos campos conforme permissao.
* Nenhum endpoint exige ou retorna ficha ou identificador de regras.
* Nenhum endpoint de identidade e pre-requisito para criar token generico no VTT core.
