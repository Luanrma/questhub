# Modulo: Criacao de Personagem (Specs & Contracts)

## 1. Responsabilidade
Criar e gerenciar o registro basico de um personagem dentro de uma campanha.

A ficha mecanica nao faz parte deste contrato. Dados como raca, classe, nivel, atributos, HP e pericias devem ser tratados pelo modulo `character_sheet`.

## 2. Modelo de Dominio Atual
O modulo usa o modelo Prisma `Character` existente:

```prisma
model Character {
  id         String   @id @default(cuid())
  campaignId String
  userId     String
  name       String
  sheet      Json?
  active     Boolean  @default(true)
  role       CharacterRole @default(PLAYER)
  status     CampaignMemberStatus @default(ACTIVE)
  createdAt  DateTime @default(now())
}
```

## 3. Contrato de Criacao

### Criar personagem de jogador

```json
{
  "name": "Aragorn",
  "role": "PLAYER"
}
```

### Criar NPC

```json
{
  "name": "Capitao da Guarda",
  "role": "NPC"
}
```

Campos aceitos no MVP:
* `name`: string obrigatoria, nome publico do personagem.
* `role`: `PLAYER` ou `NPC`. `MASTER` deve ser criado apenas por fluxo controlado da campanha.

Campos fora do MVP deste modulo:
* `race`
* `class`
* `background`
* `level`
* `attributes`
* `hitPoints`
* `tokenId` mecanico ou assets avancados

## 4. Regras de Permissao
* Jogadores autenticados podem criar personagem de jogador para si mesmos quando forem membros ativos da campanha.
* Mestres podem criar NPCs na propria campanha.
* Mestres podem listar todos os personagens da campanha.
* Jogadores podem listar pelo menos os proprios personagens; visibilidade total da campanha ainda depende de decisao de produto.
* Apenas mestre ou dono do personagem pode editar dados basicos.
* Remocao fisica deve ser evitada no MVP; preferir `active = false`.

## 5. Criterios de Aceitacao
* Nao e possivel criar personagem sem campanha valida.
* Nao e possivel criar personagem sem usuario autenticado.
* Nao e possivel criar personagem com nome vazio.
* Criar personagem nao deve preencher nem validar `sheet`.
* NPCs so podem ser criados por mestre.
* Desativar personagem deve preservar o registro no banco.

## 6. Decisoes Pendentes
* Se nome de personagem pode repetir dentro da mesma campanha.
* Se cada jogador pode ter mais de um personagem ativo por campanha.
* Se o fluxo de entrada em campanha deve pedir nome do personagem imediatamente ou redirecionar para criacao posterior.
* Se avatar/token basico entra neste modulo agora ou fica para um modulo de assets.
