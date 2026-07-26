import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_20_SPELLS_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:spell:spells-srd:mark-of-blood",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f78428805fe2495cc4a4af0547abc87f6e749fc16a4177b22c729d99fec900a3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Marca de Sangue",
      "description": "Você coloca uma gota de seu sangue em uma arma e a carrega com magia para transferir uma pequena quantidade de sua essência vital com seu ataque. A próxima criatura que você atingir com sucesso com a arma durante a duração da magia sofre o dano normal do ataque e deve então tentar um salvamento de Vontade; independentemente do resultado deste teste de resistência, a duração da marca de sangue termina. Você pode ter até uma criatura amaldiçoada pela marca de sangue por vez. Se você usar esta magia para marcar uma criatura diferente, a maldição que aflige a criatura anterior termina.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura ganha uma marca suavemente brilhante que se assemelha ao símbolo de Achaekek em algum lugar do corpo (como a testa ou as costas da mão). Esta marca pode ser ocultada pelas roupas, mas é permanente até que a maldição seja removida.\nFalha Como sucesso, mas você pode tentar saber a direção e a distância geral (dentro de um quilômetro) até a criatura marcada se a criatura estiver viva e você e a criatura estiverem no mesmo plano de existência. Quando você Procura dessa forma, você tenta um teste de Percepção contra a CD de Vontade da criatura marcada. Com um sucesso, você obtém a informação que é precisa no momento que você procura. Em caso de falha crítica, a maldição termina e a marca da criatura desaparece.\nFalha Crítica Como falha, mas seus testes de Percepção para Procurar a criatura marcada são automaticamente bem-sucedidos.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 arma perfurante ou cortante que você está empunhando",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bone-flense",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5ae9af02dcdbe929d5ad077e514f79c8cd99859b126f150621dcfc414e10f5da",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Osso Flense",
      "description": "A arma alvo fica imbuída do poder de Achaekek e brilha suavemente com uma luz carmesim semelhante à emitida por uma vela. Quando uma criatura com um esqueleto ou exoesqueleto sofre dano de um Golpe desferido por esta arma, os ossos da criatura mais próximos do ferimento brotam instantaneamente esporas irregulares e afiadas que cortam os músculos e a carne de dentro para fora. A criatura sofre 1d6 de dano de sangramento persistente adicional pelo Golpe. Você pode usar a reação Erupting Spurs.\nEfeito: Flesse Óssea (Dano)\nEfeito: Bone Flense (Reação)\nAprimorada 2 O dano de sangramento persistente aumenta em 1d6. O dano das Esporas em Erupção aumenta em 4d6.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 arma que é empunhada por um membro do Louva-a-deus Vermelho ou é o golpe de perna de um louva-a-deus",
      "duration": "1 minuto",
      "heightening": "Aprimorada 2 O dano de sangramento persistente aumenta em 1d6. O dano das Esporas em Erupção aumenta em 4d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantiss-grasp",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c01bc7913f760815843a1940069e39572f8175eedd28964f48af2bd65e8751c4",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Aperto do Louva-a-deus",
      "description": "Você faz braços de louva-a-deus vermelhos e fantasmagóricos brotarem de uma superfície próxima e esmagar uma criatura, causando 8d6 de dano de força e tentando fixar o alvo no lugar. Os efeitos são determinados pelo teste de Reflexos da criatura.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo sofre metade do dano.\nFalha O alvo sofre dano total e fica imobilizado por 1 rodada.\nFalha Crítica O alvo sofre o dobro do dano e fica imobilizado por 1 minuto. No final de cada um dos seus turnos, o alvo pode tentar Escapar. A CD de Fuga é igual à CD do sua magia.\nAprimorada (7º) Você pode escolher até 5 criaturas.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura",
      "duration": "",
      "defense": "teste de Reflexos",
      "heightening": "Aprimorada (7º) Você pode escolher até 5 criaturas."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sawtooth-terrain",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:293bcdb61b308372111c0bc3e6afbae8376ca54b5771cae1dab029550c5d009f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Terreno dente de serra",
      "description": "Você faz com que membros longos e serrilhados do louva-a-deus apareçam, atacando e obstruindo as criaturas na área. A área é um terreno difícil. Cada criatura na área quando a magia é lançada e que termina seu turno dentro da área sofre 3d6 de dano cortante e 2d6 de dano de sangramento persistente, conforme determinado por seu teste de Reflexos.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano e nenhum dano persistente.\nFalha A criatura sofre dano total e uma penalidade de circunstância de –3 metros em sua Velocidade até receber cura mágica ou se beneficiar de um teste de Medicina bem-sucedido contra sua CD de magia para Administrar Primeiros Socorros.\nFalha Crítica A criatura sofre o dobro de dano e uma penalidade de circunstância de -15 pés em sua Velocidade até receber cura mágica ou se beneficiar de um teste de Medicina bem-sucedido contra sua CD de magia para administrar Primeiros Socorros.\nAprimorada 2 O dano aumenta em 3d6 e o ​​dano de sangramento persistente aumenta em 1d6.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "area": "20 explosão",
      "duration": "1 minuto",
      "defense": "teste de Reflexos",
      "heightening": "Aprimorada 2 O dano aumenta em 3d6 e o ​​dano de sangramento persistente aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:crimson-breath",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2c65d394ed26117ffe2c7999f10e7dd947b828778875e9ae8edecfd136a64389",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Hálito Carmesim",
      "description": "Você vira uma criatura em sua direção e exala uma rajada de névoa carmesim de sua boca, expondo o alvo a um miasma tóxico. Os efeitos são determinados pelo teste de Fortitude da criatura.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo sofre 8d6 de dano venenoso.\nFalha O alvo é afetado pelo veneno do sopro do deus louva-a-deus no estágio 1.\nFalha Crítica O alvo é afetado pelo veneno do sopro do deus louva-a-deus no estágio 2.\nSopro do Deus Louva-a-deus\nTeste de salvamento (fortitude, dc:29)\nDuração Máxima 6 minutos\nEstágio 1 3d6 sangramento persistente e drenado 1 (1 minuto)\nEstágio 2 3d8 sangramento persistente e drenagem 1 (1 minuto)\nEstágio 3 3d10 sangramento persistente e drenado 2 (1 minuto)",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "",
      "defense": "teste de Fortitude",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:briny-bolt",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6d745c64e962569e5b42cd1b72278f8358be7497c1c825c029be2449c7bf17fe",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Parafuso Salgado",
      "description": "Você lança um jato de água salgada com a mão estendida. Faça um ataque mágico à distância contra um alvo dentro do alcance.\nSucesso Crítico A criatura sofre 4d6 de dano de concussão e fica Cegada por 1 rodada e Deslumbrada por 1 minuto enquanto água salgada espirra em seus olhos. A criatura pode gastar uma ação de Interagir para esfregar os olhos e acabar com a condição cega, mas não com a condição ofuscada.\nSucesso A criatura sofre 2d6 de dano de concussão e fica cega por 1 rodada. A criatura pode gastar uma ação de Interagir limpando a água salgada dos olhos para acabar com a condição de cegueira.\nAprimorada 1 O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "60 pés (18 metros)",
      "target": "1 criatura",
      "duration": "",
      "heightening": "Aprimorada 1 O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:advanced-scurvy",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:de304ddbfab0fd14be60f052acc931d050c804388d57909a4850fafba39f3bbf",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Escorbuto Avançado",
      "description": "Seu toque aflige o alvo com uma forma avançada de escorbuto, uma doença dos marinheiros decorrente de uma alimentação inadequada. Os sintomas do escorbuto incluem fadiga, dores nas articulações, dentes soltos e hemorragia interna.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Enfraquecido 1 por 1 minuto.\nFalha O alvo sofre de escorbuto avançado no estágio 1.\nFalha Crítica O alvo sofre de escorbuto avançado no estágio 2.\nEscorbuto Avançado (doença)\nNível 4\npor 1 dia após comer frutas frescas, uma criatura ganha +2 de bônus de circunstância em seu próximo teste de resistência contra esta aflição\nEstágio 1 enfraquecido 1 e o dano causado por efeitos de sangramento persistentes é aumentado em 1 (1 dia)\nEstágio 2 debilitado 1, Fatigado, e o dano causado por efeitos de sangramento persistentes é aumentado em 1d4 (2 dias)\nEstágio 3 Enfraquecido 2, fatigado e o dano causado por efeitos de sangramento persistentes aumenta em 1d6 (4 dias)",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "",
      "defense": "teste de Fortitude",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lashing-rope",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e80ea3cb0d63541a57eae2006759bfbdee531702c3fea6b1b395bc9a51ae6ed6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Corda de amarração",
      "description": "Você faz com que uma seção de corda ou um objeto parecido com uma corda se anime, deslize até seu quadrado e o envolva, envolvendo-o em fibras retorcidas e amarradas.\nQuando você lança a magia e cada vez que mantém a magia, você pode fazer um ataque corpo a corpo com a corda, que usa e contribui para sua penalidade de ataque múltiplo. Esses ataques de corda são ataques mágicos corpo a corpo; ter as características de arma mágica, de alcance e de tropeço; e causa 3d6 de dano cortante.\nSe você falhar criticamente em um teste de Desviar usando a corda, você não poderá fazer mais nenhum Golpe com ela neste turno, nem poderá usá-la para fazer um Ataque de Oportunidade até o início do seu próximo turno. Isso substitui os resultados usuais de uma falha crítica no Trip.\nAprimorada 2 O dano de seus golpes de corda aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "50 pés (15 metros)",
      "target": "até 50 pés (15 metros) de uma corda não supervisionada ou de um objeto inanimado semelhante a uma corda",
      "duration": "1 minuto",
      "heightening": "Aprimorada 2 O dano de seus golpes de corda aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lashuntas-life-bubble",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4f06c99bf38b58d830cbbb7e8aa33901f3b03ba06d085b9c489783e186973565",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bolha de vida de Lashunta",
      "description": "Você cria uma bolha protetora de ar fresco e temperado ao redor do alvo. A concha de ar permite que o alvo respire mesmo debaixo d'água ou no vácuo, protege contra frio e calor intensos e concede um bônus de status de +1 aos salvamentos do alvo contra perigos inalados, como venenos inalados e Nuvem Tóxica.\nEfeito da magia: Bolha de Vida de Lashunta\nAumentado (6º) A bolha dura até a próxima preparação.\nAprimorada (8º) A bolha dura até sua próxima preparação, protege contra frio e calor extremos e concede um bônus de status de +2 em vez de +1.",
      "castingTime": "1 ação",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "8 horas",
      "heightening": "Aumentado (6º) A bolha dura até a próxima preparação.\nAprimorada (8º) A bolha dura até sua próxima preparação, protege contra frio e calor extremos e concede um bônus de status de +2 em vez de +1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cycle-of-retribution",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5554f2c7f0d9f55390c8b4ee62677efb5999095409e8257924bad2fc6814f8d8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ciclo de Retribuição",
      "description": "Uma compreensão de como a violência gera mais violência preenche seu alvo, causando-lhe angústia mental na forma de fortes dores de cabeça quando tenta realizar ações violentas. O alvo deve tentar um teste de resistência de Vontade, com os seguintes resultados.\nSucesso Crítico O alvo não é afetado.\nSucesso Na próxima vez que o alvo realizar uma ação hostil, ele sofrerá 1d4 de dano mental; a duração da magia então termina.\nFalha Na primeira vez em uma rodada, quando o alvo realiza uma ação hostil, o alvo sofre 1d4 de dano mental.\nFalha Crítica Cada vez que o alvo realiza uma ação hostil, o alvo sofre 1d4 de dano mental.\nAprimorada 1 O dano mental aumenta em 1d4.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada 1 O dano mental aumenta em 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fated-healing",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:bb2fa89d81641b5e2878d10cb14a1b96492e088c849a2d10dd209be4c686b72a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Cura Predestinada",
      "description": "Você fala sobre as consequências das ações que as pessoas tomam umas contra as outras e como é possível quebrar ciclos de violência simplesmente fazendo uma escolha diferente. Os alvos recuperam 1d4 Pontos de Vida no final de cada um de seus turnos enquanto a magia estiver em vigor. Se um alvo usar uma ação hostil contra o outro alvo, a magia termina para o alvo que usou a ação hostil.\nAprimorada 1 Os alvos recuperam 1d4 Pontos de Vida adicionais no final de seus próprios turnos.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "2 criaturas que são hostis entre si",
      "duration": "5 rodadas",
      "heightening": "Aprimorada 1 Os alvos recuperam 1d4 Pontos de Vida adicionais no final de seus próprios turnos."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entangle-fate",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:55e92498e2ea81a1a582ce4edfcedd9fd12196d1212254a7e84ea1f2136a55a1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Enredar o destino",
      "description": "Você causa um redemoinho de energia que envolve o destino de todos os que são pegos pela explosão. Cada criatura na área deve tentar um salvamento de Vontade.\nSucesso Crítico A criatura não é afetada.\nSucesso O destino da criatura fica distorcido e vislumbres momentâneos e conflitantes do futuro imediato fazem com que a criatura fique Desprevenida até o início de seu próximo turno.\nFalha Como sucesso, mas a criatura fica desprevenida durante a duração da magia. Se mais de um dos alvos não conseguiu resistir a esta magia, a criatura também fica Estupefata 1 durante a duração da magia, pois seu destino e o das outras criaturas continuam a se chocar e se esforçar um contra o outro.\nFalha Crítica Como falha, mas qualquer criatura que fique estupefata 1 durante a magia também se torna Enfraquecida 1 e Desajeitada 1 durante a duração da magia.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "2 a 4 criaturas ao alcance",
      "duration": "3 rodadas",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lifes-fresh-bloom",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4fe70b43f8e28848fb02818cd6e54402546e14f1556c124e45bdac176c608375",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "O frescor da vida",
      "description": "O chão ao seu redor floresce com vida, brotando grama brilhante, flores e pequenos arbustos. Cada criatura viva e não-nindoru que começa seu turno parada no chão da área recupera 1d6 Pontos de Vida e ganha um bônus de status de +1,5 metro em sua Velocidade até o final do próximo turno. Demônios Nindoru e mortos-vivos que iniciam seu turno na área de florescimento da vida ficam Enjoados 1, a menos que tenham sucesso em um teste de resistência de Fortitude.\nEfeito da magia: Flor Fresca da Vida\nAprimorada (7º) Aumenta os Pontos de Vida restaurados para 1d8 e Enjoado 2.\nAprimorada (10º) Aumenta os Pontos de Vida restaurados para 1d10 e Enjoado 3.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "area": "20 explosão",
      "duration": "5 rodadas",
      "defense": "teste de Fortitude",
      "heightening": "Aprimorada (7º) Aumenta os Pontos de Vida restaurados para 1d8 e Enjoado 2.\nAprimorada (10º) Aumenta os Pontos de Vida restaurados para 1d10 e Enjoado 3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tomorrows-dawn",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:36e658c27dd16646d0bf3b2a72ae5c41fa7dd95737de63ccffb21d6ab74a315b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Amanhecer de amanhã",
      "description": "A luz dourada de um novo amanhecer e a promessa de vida além da morte irradiam de seu corpo. Você irradia luz brilhante em um raio de 6 metros (e luz fraca durante o próximo 20 pés (6 metros)) e ganha resistência mental 5. Qualquer demônio nindoru ou morto-vivo que comece seu turno adjacente a você deve tentar um salvamento de Vontade com os seguintes resultados.\nEfeito da magia: Amanhecer de Amanhã\nSucesso Crítico A criatura não é afetada e fica imune aos efeitos desta magia pelo restante da duração da magia.\nSucesso A criatura fica Enjoada 1 até o final do turno dela.\nFalha A criatura fica enjoada 1. Além disso, ela fica Lentidão 1 até o final do próximo turno.\nFalha Crítica Como falha, mas Enjoado 2 e a criatura permanece desacelerada 1 pelo resto da duração da magia.\nAprimorada (6º) Você ganha resistência mental 10.\nAprimorada (8º) Você ganha resistência mental 15.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada (6º) Você ganha resistência mental 10.\nAprimorada (8º) Você ganha resistência mental 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lifes-flowing-river",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a9cef620b25fd7ba8e4d56e94dc0a1a1fd326510ee9bcef59bac69624d7359b5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "O rio que flui da vida",
      "description": "Você cria um rio fluindo de água fantasmagórica que emite luz fraca para 10 pés (3 metros) em cada lado. O rio começa em um quadrado adjacente a você e se estende em um caminho reto de 1,5 metro até seu alcance máximo ou até atingir uma barreira sólida, o que ocorrer primeiro. Uma criatura que comece seu turno nas águas brilhantes do rio ou que entre em um dos espaços do rio deve tentar um teste de Vontade. Se a criatura for um morto-vivo ou um nindoru, ela sofre 4d6 de dano mental, modificado pelo resultado de seu teste de Vontade.\nSucesso Crítico A criatura ignora os efeitos do rio até o início do seu próximo turno. Se a criatura for um morto-vivo ou um nindoru, ela não sofrerá nenhum dano.\nSucesso A criatura trata todos os quadrados ocupados pelo rio como terreno difícil até o início do seu próximo turno. Se a criatura for um morto-vivo ou um nindoru, ela sofre metade do dano.\nFalha Como sucesso, mas a criatura também cai no chão. Se a criatura for um morto-vivo ou um nindoru, ela sofre dano total.\nFalha Crítica Como falha, mas a criatura é empurrada 20 pés (6 metros) ao longo do caminho do rio na direção do fluxo. Se a criatura for um morto-vivo ou um nindoru, ela sofre o dobro de dano mental.\nAprimorada 1 O dano mental aumenta em 1d6.",
      "castingTime": "3 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada 1 O dano mental aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-mirrors",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e82c0524e02e8835080727c296644f55f0b7c07712674791b1ee8a10066bb8a1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Parede de espelhos",
      "description": "Você cria uma parede sólida de vidro reflexivo cintilante de até 50 pés (15 metros) de comprimento e 20 pés (6 metros) de altura. A parede tem uma polegada de espessura e fica vertical. Você deve criar a parede em um espaço aberto e contínuo para que suas bordas não passem por nenhuma criatura ou objeto, ou a magia será perdida. Cada seção de 3 por 3 metros da parede tem CA 10, Dureza 10 e 40 Pontos de Vida, e é imune a acertos críticos e danos de precisão. Tudo em cada lado da parede está escondido das criaturas do lado oposto. Se uma criatura atingir a parede, a parede fará com que a criatura suporte também a angústia mental da dor daquele ataque; a criatura sofre 4d4 de dano mental e pode resistir a esse dano com um teste básico de Vontade.\nAprimorada 1 Os Pontos de Vida de cada seção da parede aumentam em 10.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "duration": "",
      "heightening": "Aprimorada 1 Os Pontos de Vida de cada seção da parede aumentam em 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sacred-nimbus",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:033b6c4f9da0fae80b4dba9aaba955f42114a710e3a21cc9a38df8575805e29c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Nimbo Sagrado",
      "description": "Você invoca uma pequena e fofa nuvem branca que flutua 10 pés (3 metros) acima do solo e faz chover água santificada agradavelmente quente. A chuva causa 5d6 de dano espiritual a demônios, mortos-vivos e criaturas que tenham fraqueza a dano espiritual na área no final do seu turno. Ao Sustentar a magia, você pode mover a nuvem a uma velocidade de voo de 15 pés (4,5 metros) para qualquer lugar dentro do alcance da magia. A água se dissipa ao entrar em contato com quaisquer criaturas ou superfícies, deixando apenas um pouco de umidade em seu lugar.\nAprimorada 1 O dano aumenta em 1d6.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "area": "10 quadrados",
      "duration": "1 minuto",
      "defense": "teste de Reflexos",
      "heightening": "Aprimorada 1 O dano aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prophets-luck",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4cd17f2fa860dfbd86100aeef8a4b2fb0c24a724df5b67fa8da5b59bb43ce329",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sorte do Profeta",
      "description": "Acionar Você ou uma criatura dentro do alcance tenta um teste de resistência contra uma ameaça óbvia.\nVocê profetiza o resultado do teste de resistência desencadeado como um sucesso (incluindo um sucesso crítico) ou um fracasso (incluindo uma falha crítica). O alvo ganha +1 de bônus de status no teste de resistência se você prever sucesso ou -1 de penalidade de status se você prever fracasso. Se você prever o resultado corretamente, a sorte o favorecerá e você ganhará +1 de bônus de status em testes de resistência. Se você prever incorretamente, a sorte rejeitará o alvo, concedendo uma penalidade de status de -1 em seus testes de resistência.\nAprimorada (6º) O bônus ou penalidade de resistência aumenta para +2 ou –2.\nAprimorada (9º) O bônus ou penalidade de resistência aumenta para +3 ou –3.",
      "castingTime": "reação",
      "range": "60 pés (18 metros)",
      "target": "1 criatura",
      "duration": "10 minutos",
      "heightening": "Aprimorada (6º) O bônus ou penalidade de resistência aumenta para +2 ou –2.\nAprimorada (9º) O bônus ou penalidade de resistência aumenta para +3 ou –3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fateful-condemnation",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:53c97bf60901539ebe64096ada5c258e5ca01ff16313f156d5857631b295f711",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Condenação fatídica",
      "description": "Você recorre ao destino negativo do alvo, fazendo com que esse destino persistente aflija ele e seus aliados próximos com as consequências não intencionais de suas vidas passadas. Ecos espirituais das vidas passadas do alvo instilam sentimentos avassaladores de dúvida, arrependimento e desespero nas mentes do alvo e de seus aliados próximos. Os efeitos dependem do salvamento de Vontade do alvo, com os seguintes resultados.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre 4d6 de dano mental e então uma aura de névoa cintilante com uma emanação de 3 metros envolve a criatura. Esta névoa não é densa o suficiente para afetar a visão, mas faz com que a criatura e qualquer um de seus aliados na aura recebam –1 de penalidade de status em todos os testes de perícia.\nFalha É um sucesso, mas a criatura sofre inicialmente 8d6 de dano mental e fica então desacelerada 1 pela duração do efeito.\nFalha Crítica Como sucesso, mas a criatura sofre inicialmente 16d6 de dano mental e depois sofre lentidão em 1 pela duração do efeito. Qualquer um dos aliados do alvo que iniciar seu turno na emanação de 3 metros sofre lentidão em 1 por 1 rodada.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura viva",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bee-mans-summons",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f1cb0f3d6b55a02ccb65c1f001dc46936d7c36e47145d075ada4a08e3a074d12",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Invocação do Bee-Man",
      "description": "Você recria a infame habilidade do Bee-Man de sentir quando alguém pronuncia seu nome. Durante a duração da magia, você sente mentalmente sempre que alguém (chamado de locutor) fala seu nome completo enquanto estiver dentro da área da magia. Você ganha uma vaga noção da identidade do falante, como “um fazendeiro local” ou “um halfling em perigo”, a menos que o falante seja alguém que você já conheceu e com quem interagiu antes, caso em que você reconhece o falante especificamente. Como reação dentro de 1 minuto após a fala do locutor, você pode enviar ao locutor um aviso telepático, perguntando se ele pretende convocá-lo. Se eles responderem afirmativamente, a duração restante da magia diminui para sustentado (até 10 minutos), período durante o qual você sabe a direção para onde o locutor o nomeou e a que distância eles estão.\nAprimorada (4º) O raio da emanação aumenta para 1,0 pés (0 metros).\nAprimorada (7º) O raio da emanação aumenta para 1 milha e, em vez de localizar o locutor, você pode conversar com ele por 5 minutos. Caso contrário, isso funciona como envio.\nAprimorada (9º) Como 7º, exceto que o raio da emanação aumenta para 5 milhas e a duração da conversa é de 10 minutos.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "area": "500 emanações",
      "duration": "até a próxima vez que você fizer seus preparativos diários ou até receber alta",
      "heightening": "Aprimorada (4º) O raio da emanação aumenta para 1,0 pés (0 metros).\nAprimorada (7º) O raio da emanação aumenta para 1 milha e, em vez de localizar o locutor, você pode conversar com ele por 5 minutos. Caso contrário, isso funciona como envio.\nAprimorada (9º) Como 7º, exceto que o raio da emanação aumenta para 5 milhas e a duração da conversa é de 10 minutos."
    }
  }
]
