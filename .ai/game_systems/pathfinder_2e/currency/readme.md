# Pathfinder 2e — Moedas

## Propósito

Permitir que cada ator com ficha completa de Pathfinder 2e mantenha e movimente
as moedas do sistema sem introduzir dinheiro, conversão ou pagamento no VTT.

## Fronteira

O saldo pertence ao ator da campanha e é uma extensão mecânica de sua
`CampaignCharacterSheet`. Não pertence a `User`, `CampaignMember`, Token, cena
ou inventário neutro. A interface é integrada ao inventário apenas como ponto de
visualização.

## Regras de produto

- PF2e usa quatro denominações: platina, ouro, prata e cobre.
- Uma transferência preserva a denominação enviada; não troca nem normaliza
  moedas automaticamente.
- Um jogador pode transferir moedas apenas do ator que controla para outro ator
  ativo da mesma campanha, inclusive um ator controlado pelo Mestre.
- Não existe carteira de usuário ou do Mestre. Para receber, o Mestre usa um
  ator sob seu controle, como uma tesouraria da campanha.
- O Mestre pode creditar ou debitar saldo de qualquer ator elegível.
- Nenhum saldo pode ficar negativo.

## Fora de escopo

- Preços, compra, venda, câmbio automático, peso de moedas e tesouraria sem ator.
- Histórico/auditoria persistente e notificações em tempo real.
- Regras de moedas de outros sistemas.
