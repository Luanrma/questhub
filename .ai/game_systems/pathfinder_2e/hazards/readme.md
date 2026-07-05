# Submodulo: Pathfinder 2e Hazards (Product)

## 1. Proposito
Documentar e evoluir Hazards de Pathfinder 2e como entradas especializadas do ruleset, incluindo armadilhas, perigos ambientais e haunts.

Hazards pertencem ao contexto de `game_systems/pathfinder_2e`, aparecem na experiencia de consulta do Mestre dentro do Bestiario/Compendio, mas nao sao criaturas e nao devem herdar automaticamente fluxos de NPC.

## 2. Problema Resolvido
O Mestre precisa consultar, preparar e futuramente criar perigos de cena que sejam desafiadores, legiveis e justos para os jogadores.

Hazards possuem estrutura propria: stealth/seek, disable, rotina, reset, defesas, dano e gatilhos. Misturar esses dados ao contrato de criatura criaria acoplamento mecanico indevido e comportamentos errados no VTT, como transformar uma armadilha em token NPC.

## 3. Tipos de Hazard
Categorias de design esperadas:

* **Trap:** armadilha mecanica ou magica. Geralmente usa Thievery, Arcana, Nature, Occultism, Religion ou outra pericia coerente para desativacao.
* **Environmental:** perigo ambiental, fenomeno natural, flora/fauna irracional ou terreno hostil. Geralmente usa Survival, Nature, Athletics ou pericias contextuais.
* **Haunt:** manifestacao espiritual, trauma local ou assombracao. Geralmente usa Religion, Occultism, exorcismo, rituais ou acoes narrativas alinhadas ao local.

Essas categorias sao taxonomia de produto e ruleset. O core deve recebe-las apenas como tags/display ou `systemData` opaco.

Diretrizes narrativas por categoria:

* **Trap mecanica:** costuma proteger uma area, tesouro, passagem ou segredo fisico. O contra-jogo esperado envolve perceber mecanismos, bloquear acionadores, desmontar engrenagens ou contornar a zona de risco.
* **Trap magica:** costuma proteger informacao, reliquias, selos ou locais arcanos/divinos. O contra-jogo esperado envolve detectar magia, identificar a tradicao e neutralizar runas, encantamentos ou efeitos persistentes.
* **Environmental:** representa a cena ou o terreno como adversario. Normalmente nao deve ser tratado como alvo convencional de ataque; o jogo gira em torno de navegar, sobreviver, escapar, conter ou mitigar o fenomeno.
* **Haunt:** representa trauma, memoria espiritual ou emocao residual. Normalmente deve responder melhor a exorcismo, dano de vitalidade, Religion, Occultism, rituais, reparacao narrativa ou acoes que resolvam a causa ficcional.

## 4. Regras de Negocio
* Hazards nao sao criaturas.
* Hazards nao criam `Character`.
* Hazards nao entram no toolbar de tokens preparados como NPC.
* Hazards podem ter uma toolbar propria de acesso rapido do Mestre, separada da toolbar de tokens.
* Hazards podem aparecer no Bestiario como categoria filtravel `hazard`.
* Hazards preparados na toolbar representam referencias de catalogo ou instancias de cena prontas para uso, nao criaturas.
* Hazards simples representam um efeito unico, disparo ou consequencia imediata.
* Hazards complexos possuem rotina, podem agir em ciclos e futuramente podem participar de encontro/iniciativa.
* O nivel recomendado de um Hazard nao deve exceder o nivel do grupo em mais de 3, salvo decisao deliberada do Mestre para perigo extremo.
* A criacao assistida deve favorecer clareza, telegraphing e justica: jogadores precisam ter pistas razoaveis, meios de deteccao e meios de resposta.
* Pericias alternativas devem ser permitidas quando fizerem sentido ficcional, possivelmente com DC ajustada para recompensar criatividade.
* Hazards complexos devem usar dano menor que Hazards simples de mesmo nivel, pois podem repetir efeitos por rotina.
* A criacao de Hazard deve comecar pelo papel na historia: o que ele protege, revela, pune, pressiona ou transforma na cena.
* Um Hazard deve ter proposito de mesa claro: quebrar monotonia de combate, reforcar tema, criar tensao, revelar lore, gastar recursos, dividir escolhas ou mudar o ritmo da exploracao.
* Hazards simples devem resolver seu impacto em um disparo ou consequencia imediata. Hazards complexos devem ter rotina operacional clara para rodadas sucessivas.
* O triangulo Seek/Disable/Efeito deve evitar design punitivo demais. Um eixo pode ser extremo, outro alto e outro baixo/moderado, mas todos extremos ao mesmo tempo devem exigir intencao explicita de perigo letal.

## 5. Personas
* **Mestre:** consulta Hazards oficiais, adapta perigos existentes e futuramente cria Hazards customizados para cenas.
* **Jogador:** interage com pistas, tentativas de Seek, desativacao e consequencias em cena, mas nao acessa o catalogo do Mestre neste momento.
* **Desenvolvedor:** modela contratos especificos do ruleset sem contaminar bestiario generico, VTT ou core.

## 6. Casos de Uso
* Filtrar Bestiario por Hazards.
* Buscar por nome, trait, nivel, raridade, pack e tipo de Hazard.
* Abrir ficha de Hazard em modal.
* Consultar stealth, disable, defesas, rotina, reset, descricoes e acoes.
* Preparar Hazards em uma toolbar de acesso rapido do Mestre.
* Futuramente criar Hazards customizados com um assistente em 8 passos: conceito, tipo, nivel, complexidade, triangulo de poder, pericias alternativas, tabelas de referencia e formatacao final.
* Iniciar encontro a partir de um Hazard preparado ou de sua ficha.
* Futuramente adicionar Hazard a uma cena como elemento interativo, nao como token NPC.
* Futuramente inserir Hazard complexo em encontro/iniciativa quando suas regras exigirem rotina repetida.

## 7. Limites
Pertence a este submodulo:

* contrato interno PF2e para Hazards;
* normalizacao de documentos Foundry `type = "hazard"`;
* regras de apresentacao de ficha de Hazard;
* diretrizes para criacao assistida de Hazards;
* futuras validacoes de nivel, complexidade, DCs, dano e defesas conforme PF2e.

Nao pertence a este submodulo:

* estado vivo de uma instancia de Hazard em cena;
* automacao completa de gatilhos;
* engine generica de colisao, area, luz ou terreno;
* persistencia de cenas;
* turno/iniciativa generica;
* regras de criaturas NPC.

## 8. Decisao de Produto
Hazards devem permanecer acessiveis dentro de Bestiario/Compendio por enquanto, usando filtro ou abas por categoria. Uma pagina top-level separada so deve ser criada se o fluxo de criacao, preparacao e execucao de Hazards crescer a ponto de competir com a consulta de NPCs.

Nome de UX recomendado para evolucao futura:

* curto prazo: `Bestiario` com filtros `NPCs`, `Hazards`, `Todos`;
* medio prazo: `Compendio do Mestre` ou `Bestiario & Perigos`, se outras categorias como veiculos, exercitos e templates entrarem no mesmo espaco.

## 9. Roadmap Funcional
Ordem recomendada para evoluir Hazards no QuestHub:

1. **Toolbar de Hazards:** permitir que o Mestre prepare Hazards para acesso rapido, paralelamente aos tokens preparados.
2. **Iniciar Encontro com Hazard:** permitir iniciar um encontro manual a partir da ficha ou toolbar, com dados de disable, rotina, defesas e notas.
3. **Instancia de Hazard em Cena:** permitir posicionar ou vincular o Hazard a uma area/objeto da cena, com estados como oculto, revelado, disparado e desativado.
4. **Participante Especial de Encontro:** permitir que Hazards complexos entrem no encontro/iniciativa como participante nao-criatura, com rotina visivel ao Mestre.
5. **Automacao Opcional:** por ultimo, adicionar gatilhos, rotina automatizada, prompts de dano/efeito e integracoes mais profundas com mapa e regras.

As etapas 1 a 4 devem entregar um fluxo funcional mesmo com controle manual pelo Mestre. A etapa 5 deve ser incremental e opcional, para evitar automacao prematura ou rigida demais.
