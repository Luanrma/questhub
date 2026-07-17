# Modulo: Configuracoes de Usuario por Campanha (Product)

## 1. Proposito
Persistir preferencias pessoais de experiencia dentro de uma campanha sem transformar essas preferencias em estado compartilhado da mesa.

O objetivo e carregar uma vez as configuracoes do usuario ao abrir a campanha, manter uma copia em `localStorage` para resposta imediata da UI e usar o banco apenas para restaurar essas preferencias entre dispositivos, navegadores ou sessoes futuras.

## 2. Personas
* **Mestre:** Ajusta preferencias locais da mesa sem afetar Players.
* **Player:** Ajusta preferencias locais da mesa sem afetar Mestre ou outros Players.

## 3. Escopo
Incluido:
* Persistir um JSON generico por `campaignId + userId`.
* Carregar configuracoes do usuario autenticado para a campanha atual.
* Atualizar configuracoes do usuario autenticado para a campanha atual.
* Usar namespace `dice` para preferencias de dados 3D.
* Manter `localStorage` como cache local e fonte rapida no frontend.

Fora de escopo:
* Configuracoes globais do usuario fora de campanha.
* Configuracoes compartilhadas que alterem a mesa para todos.
* Estado persistido de cena, grid, tokens ou sessoes, que pertence a outros modulos.

## 4. Regras de Produto
* Configuracoes sao pessoais por campanha: o mesmo usuario pode ter valores diferentes em campanhas diferentes.
* Configuracoes de um usuario nao afetam outros usuarios da mesma campanha.
* O usuario precisa pertencer a campanha para ler ou salvar suas configuracoes.
* O banco guarda o JSON canonico; o frontend mantem cache local por campanha para evitar leituras repetidas.
* Em caso de falha ao salvar no backend, a preferencia local pode permanecer aplicada para nao bloquear a experiencia da mesa.
