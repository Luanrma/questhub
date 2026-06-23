# Modulo: Campaign Presence (Product)

## 1. Proposito
Controlar a sessao online de uma campanha e a presenca em tempo real dos personagens dentro da mesa.

## 2. Regras de Produto
* A campanha nao fica online automaticamente quando o mestre abre a tela.
* O mestre inicia a sessao manualmente pelo botao `Iniciar Sessao`.
* Ao iniciar a sessao, a campanha fica online, jogadores liberados podem entrar e a conexao em tempo real da mesa e aberta.
* Enquanto a sessao estiver online, o botao do mestre muda para `Encerrar Sessao`.
* Encerrar sessao exige confirmacao explicita do mestre.
* Ao confirmar o encerramento pelo botao `Encerrar Sessao`, a campanha fica offline, a conexao em tempo real da mesa e encerrada, jogadores presentes sao enviados para a tela inicial e o mestre permanece na tela da campanha.
* Ao confirmar `Trocar campanha` com sessao online, o mesmo encerramento acontece para os jogadores e o mestre segue para a lista de campanhas.
* Jogadores removidos pelo encerramento veem uma mensagem informando que o mestre encerrou a sessao.
* Jogadores so entram na mesa quando a sessao da campanha esta online.
* A presenca alimenta indicadores visuais do VTT e paineis de jogadores.
