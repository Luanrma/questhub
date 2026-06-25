# Modulo: VTT (Specs & Contracts)

## 1. Navegacao
* `/campaign/:campaignId/overview` representa a mesa.
* A mesa e renderizada pelo `CampaignLayout`, nao por uma rota filha exclusiva.
* Rotas internas como `/sessions`, `/players`, `/characters`, `/journal` e `/settings` sao estado de modal e renderizam por cima da mesa em painel flutuante.
* O painel flutuante pode ser fechado navegando de volta para `/campaign/:campaignId/overview`.
* Clicar nos menus internos da sidebar nao pode causar reload de documento nem desmontar/remontar o VTT.

## 2. Sidebar
* Em telas grandes, a sidebar deve ser sobreposta e nao deve reservar largura no layout.
* Recolher ou expandir a sidebar nao deve redimensionar o VTT.
* O canvas VTT deve ocupar a tela ate a margem esquerda `0`.
* Em telas grandes, a altura da sidebar deve ser `auto`, limitada ao conteudo dos menus.
* As ferramentas principais do VTT devem ter recuo suficiente para nao ficarem cobertas pela sidebar recolhida.
* Em telas pequenas, deve virar barra inferior compacta sobreposta.
* Deve confirmar antes de navegar para `/campaigns`.
* Para `MASTER`, exibe `Personagens`.
* Para `PLAYER`, substitui `Personagens` por `Minha ficha`.
* `Minha ficha` nao navega; abre o modal arrastavel da ficha do personagem atual.

## 3. Dados Necessarios
`CampaignLayout` deve consultar:

```http
GET /api/campaigns/:campaignId/my-character
```

Resposta minima usada pelo VTT:

```ts
type MyCampaignCharacter = {
  id: string
  name: string
  role: 'MASTER' | 'PLAYER'
  status: 'ACTIVE' | 'PENDING'
}
```

## 4. Criterios de Aceitacao
* A mesa continua visivel quando o usuario abre jogadores, configuracoes, personagens ou diario.
* A mesa permanece montada ao alternar entre menus internos da sidebar.
* Todos os menus internos da campanha, exceto `Mesa` e `Trocar campanha`, abrem como modal/overlay.
* Em desktop, a mesa ocupa a largura total da viewport desde a margem esquerda.
* Em desktop, expandir ou recolher a sidebar nao altera a largura da mesa.
* Em desktop, a sidebar nao ocupa 100% da altura quando ha poucos menus.
* Em mobile/viewport baixo, os icones da barra compacta devem permanecer visiveis.
* Player ve `Minha ficha` e nao ve `Personagens`.
* Clicar em `Minha ficha` abre `CharacterSheetModal`.
* Clicar em `Trocar campanha` pede confirmacao.
* Em viewport pequeno, a navegacao vira barra inferior compacta.
