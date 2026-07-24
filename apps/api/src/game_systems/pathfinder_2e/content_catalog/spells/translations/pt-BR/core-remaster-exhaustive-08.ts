import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_08_SPELLS_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-calamity",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1131f6e06afff10bab47ea10917ff78106aff69606835e1ef4a1867f49c184e5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Calamidade Fantasmagórica",
      "description": "Uma visão de destruição apocalíptica preenche a mente de cada criatura na área. A visão causa 11d6 de dano mental (resistência básica de Vontade). Em uma falha crítica, a criatura também deve ter sucesso em um teste de resistência (reflexo) ou acreditar que está presa (presa em uma fissura, à deriva no mar ou algum outro destino de acordo com sua visão). Se falhar no segundo salvamento, ele também ficará atordoado por 1 minuto. Ele pode tentar um novo salvamento de Vontade no final de cada um de seus turnos e, se tiver sucesso, descrê da ilusão e se recupera da condição de atordoado.\nAprimorada (+1) O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "30 explosão",
      "duration": "",
      "defense": "básico vai economizar",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:never-mind",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:fca5f2ad16e55e6b57d346d8e98273ca964434d452191c528c508eee1304cc34",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Deixa para lá",
      "description": "Você reduz drasticamente as faculdades mentais do alvo. O alvo deve tentar um salvamento de Vontade. Os efeitos desta maldição podem ser removidos apenas através de efeitos que tenham como alvo maldições.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Estupefato 2 por 1 rodada.\nFalha O alvo fica Estupefato 4 com duração ilimitada.\nFalha Crítica O intelecto do alvo é permanentemente reduzido abaixo do de um animal e seus modificadores de Carisma, Inteligência e Sabedoria são tratados como -5. Ele perde todas as habilidades de classe que exigem faculdades mentais, incluindo todos os lançamentos de magias. Se o alvo for um PC, ele se torna um NPC sob o controle do GM.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "varia",
      "defense": "vai salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dragon-form",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0b22ca802940ac644d448fe311b3067fc3cc7379f1427aaa37d5172cbbd4ba3b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Forma de Dragão",
      "description": "Invocando magia poderosa, você ganha uma forma de batalha de dragão grande. Ao lançar este magia, escolha um tipo de dragão comum ou outro tipo ao qual seu mestre permita acesso. Enquanto estiver nesta forma, você ganha a característica dragão. Você tem mãos nesta forma de batalha e pode realizar ações de manipulação. Você pode descartar o magia.\nVocê ganha as seguintes estatísticas e habilidades, independentemente da forma de batalha escolhida:\n• CA = 18 + seu nível. Ignore a penalidade de teste e a redução de velocidade da sua armadura.\n• 10 pontos de vida temporários.\n• Velocidade 40 pés (12 metros), voo 100 pés (30 metros). Você ganha qualquer uma das seguintes Velocidades que o dragão escolhido possui, mas com a quantidade listada: escavar 20 pés (6 metros), escalar 40 pés (12 metros), nadar 60 pés (18 metros).\n• Resistência 10 contra o tipo de dano do seu Sopro do Dragão (veja abaixo).\n• Visão no escuro e aroma impreciso 60 pés (18 metros).\n• Os seguintes ataques corpo a corpo desarmados, que são os únicos ataques com os quais você pode atacar. Você é treinado com eles. Seu modificador de ataque é +22 e seu bônus de dano é +6. Esses ataques são baseados na Força (para o propósito da condição debilitada, por exemplo). Se o seu modificador de ataque desarmado for maior, você poderá usá-lo. Veja abaixo mais sobre esses ataques.\n• Corpo a corpo 1 mandíbula, Dano 2d12 perfurante mais 2d6 de dano do mesmo tipo de dano do seu Sopro do Dragão (veja abaixo);\n• Corpo a corpo 1 garra (ágil), Dano 3d10 cortante;\n• Corpo a corpo 1 cauda (alcance 10 pés (3 metros)), Dano 3d10 por concussão.\n• Modificador de Atletismo de +23, a menos que o seu seja maior.\n• Sopro do Dragão 2 Você exala energia mágica mortal em uma área, causando 10d6 de dano a cada criatura na área com um teste de resistência básico contra a CD do seu magia. A forma, o tipo de dano e o tipo de salvamento correspondem ao sopro do dragão escolhido. Se o sopro do dragão escolhido puder causar mais de um tipo de dano, escolha um ao conjurar a forma de dragão. A forma é um cone de 30 pés ou uma linha de 100 pés. Uma vez ativado, Dragon Breath não pode ser usado novamente por 1d4 rodadas. Dragon Breath tem a característica de tradição correspondente ao tipo de dragão e a característica de dano correspondente ao tipo de dano que ele causa, se aplicável.\n• Resistência à Tradição Se a tradição mágica do dragão corresponder à sua magia forma de dragão, você ganha a habilidade listada. Resistência arcana 5 contra magia; resistência divina 10 ao espírito, vitalidade e vazio; resistência oculta 10 a mental; resistência primária 5 a danos físicos.\nEfeito do magia: Forma de Dragão\nDragão | Tradição | Velocidades | Respiração do Dragão | Salvando lance |\nAdamantino | Primordial | Toca | Cone de espancamento | Reflexo |\nBarragem | Arcano | — | Cone de força | Reflexo |\nPântano | Primordial | Nadar | Cone de ácido | Reflexo |\nSalmoura | Primordial | Nadar | Linha de espancamento | Reflexo |\nCinza | Primordial | — | Cone de fogo | Reflexo |\nNuvem | Primordial | — | Cone de eletricidade | Reflexo |\nConspirador | Oculto | Subir | Cone de veneno | Fortaleza |\nCoral | Primordial | Nadar | Linha de espancamento | Reflexo |\nCristal | Primordial | — | Cone de piercing | Reflexo |\nDelícia | Divino | — | Cone de espírito | Reflexo |\nDesespero | Oculto | — | Cone de som | Vontade |\nDiabólico | Divino | — | Cone de fogo | Reflexo |\nEmpíreo | Divino | — | Cone de espírito | Reflexo |\nExecutor | Divino | — | Cone de som | Reflexo |\nFloresta | Primordial | — | Cone de piercing | Reflexo |\nFortuna | Arcano | — | Cone de força | Reflexo |\nChifrudo | Primordial | Nadar | Cone de veneno | Fortaleza |\nMagma | Primordial | Toca | Cone de fogo | Reflexo |\nMiragem | Arcano | Subir | Cone mental | Vontade |\nZombando | Oculto | — | Cone de espancamento | Reflexo |\nJuramento | Divino | — | Cone de espírito | Vontade |\nPresságio | Oculto | — | Cone mental | Vontade |\nFase | Arcano | — | Cone de força | Reflexo |\nRéquiem | Divino | Nadar | Linha de espírito | Vontade |\nRessurreição | Divino | — | Cone do vazio | Fortaleza |\nRima | Primordial | Nadar | Cone de frio | Reflexo |\nRuna | Arcano | — | Cone de fogo | Reflexo |\nSábio | Oculto | — | Cone mental | Vontade |\nMar | Arcano | Nadar | Cone de espancamento | Reflexo |\nCéu | Divino | — | Cone de eletricidade | Reflexo |\nSoberano | Oculto | — | Cone mental | Vontade |\nCoroa da Tempestade | Primordial | — | Linha de eletricidade | Reflexo |\nTempo | Arcano | — | Cone de força | Vontade |\nUmbral | Oculto | — | Cone do vazio | Reflexo |\nSubmundo | Arcano | Toca | Cone de fogo | Reflexo |\nVizir | Oculto | Nadar | Cone de fogo | Reflexo |\nVorpal | Arcano | — | Cone do vazio | Vontade |\nLamentando | Arcano | — | Cone de Sonic | Fortaleza |\nSussurro | Oculto | — | Cone mental | Vontade |\nDesejo | Arcano | Subir | Cone mental | Vontade |\nAprimorada (8º) Sua forma de batalha é Enorme, você ganha um bônus de status de +6 metros em sua Velocidade de voo e seus ataques têm alcance de 3 metros (ou alcance de 4,5 metros se anteriormente tinham alcance de 3 metros). Em vez disso, você ganha CA = 21 + seu nível, 15 HP temporários, um modificador de ataque de +28, um bônus de dano de +12 e Atletismo +28. Seu Sopro do Dragão causa 4d6 de dano adicional.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada (8º) Sua forma de batalha é Enorme, você ganha um bônus de status de +6 metros em sua Velocidade de voo e seus ataques têm alcance de 3 metros (ou alcance de 4,5 metros se anteriormente tinham alcance de 3 metros). Em vez disso, você ganha CA = 21 + seu nível, 15 HP temporários, um modificador de ataque de +28, um bônus de dano de +12 e Atletismo +28. Seu Sopro do Dragão causa 4d6 de dano adicional."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:teleport",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4ea80187280f15e735509f375ed90ec08537896026e3dee943dbb7c573e9b061",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Teleporte",
      "description": "Você e os alvos são instantaneamente transportados para qualquer local dentro do alcance, desde que você possa identificar o local com precisão tanto pela sua posição relativa à sua posição inicial quanto pela sua aparência (ou outras características de identificação). O conhecimento incorreto da aparência do local geralmente faz com que o magia falhe, mas em vez disso pode levar ao teletransporte para um local indesejado ou algum outro acidente incomum determinado pelo Mestre. O teletransporte não é preciso em grandes distâncias. Os alvos aparecem a uma distância do destino pretendido igual a aproximadamente 1% da distância total percorrida, em uma direção determinada pelo Mestre. Para viagens curtas, esta falta de precisão é irrelevante, mas para longas distâncias pode chegar a 1 milha.\nAprimorada (7º) Você e os outros alvos podem viajar para qualquer local num raio de 1.600 quilômetros.\nAprimorada (8º) Você e os outros alvos podem viajar para qualquer local no mesmo planeta. Se você viajar mais de 1.600 quilômetros, chegará a apenas 16 quilômetros do alvo.\nAprimorada (9º) Você e os outros alvos podem viajar para qualquer local em outro planeta dentro do mesmo sistema solar. Supondo que você tenha um conhecimento preciso da posição e aparência do local, você chegará ao novo planeta a 160 quilômetros do alvo.\nAprimorada (10º) Como a versão 9º-Rank, mas você e os outros alvos podem viajar para qualquer planeta dentro da mesma galáxia.",
      "castingTime": "10 minutos",
      "range": "100 milhas",
      "target": "você e até 4 alvos tocados, sejam criaturas voluntárias ou objetos aproximadamente do tamanho de uma criatura.",
      "duration": "",
      "heightening": "Aprimorada (7º) Você e os outros alvos podem viajar para qualquer local num raio de 1.600 quilômetros.\nAprimorada (8º) Você e os outros alvos podem viajar para qualquer local no mesmo planeta. Se você viajar mais de 1.600 quilômetros, chegará a apenas 16 quilômetros do alvo.\nAprimorada (9º) Você e os outros alvos podem viajar para qualquer local em outro planeta dentro do mesmo sistema solar. Supondo que você tenha um conhecimento preciso da posição e aparência do local, você chegará ao novo planeta a 160 quilômetros do alvo.\nAprimorada (10º) Como a versão 9º-Rank, mas você e os outros alvos podem viajar para qualquer planeta dentro da mesma galáxia."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-force",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f0cbd95c033b1008abf054e9feb1074a5e031aecb71c3b75315dc27232de2f15",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Muralha da Força",
      "description": "Você forma uma parede invisível de pura força mágica de até 50 pés (15 metros) de comprimento e até 20 pés (6 metros) de altura. A parede não tem espessura discernível. Você deve criar a parede em um espaço aberto e contínuo para que suas bordas não passem por nenhuma criatura ou objeto, ou a magia será perdida. A parede tem AC 10, Dureza 30 e 60 Pontos de Vida, e é imune a acertos críticos e danos de precisão. A parede impede que efeitos físicos passem por ela e, por ser feita de força, bloqueia também criaturas incorpóreas e etéreas. Os efeitos de teletransporte podem passar pela barreira, assim como os efeitos visuais (já que a parede é invisível). Muralha de força é imune a efeitos neutralizantes de seu nível ou inferior, mas a muralha é automaticamente destruída por um magia Desintegrar de qualquer Rank.\nAumentado (+2) Os Pontos de Vida da parede aumentam em 20.",
      "castingTime": "3 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aumentado (+2) Os Pontos de Vida da parede aumentam em 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spellwrack",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:78f1c372c0f7897b6453fe957ae4dad96f57e0f170f1195c537de5d4eb03e810",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "magia",
      "description": "Você faz com que qualquer magia lançado no alvo derrame sua energia em ondas prejudiciais. O alvo deve tentar um salvamento de Vontade.\nSucesso Crítico O alvo não é afetado.\nSucesso Sempre que o alvo for afetado por um magia com duração, o alvo sofre 2d12[persistente,força] de dano. Cada vez que sofre dano de força persistente da destruição de magias, ele reduz a duração restante dos magias que o afetam em 1 rodada. Somente um teste bem-sucedido (arcano) contra sua CD de magia pode ajudar o alvo a se recuperar do dano persistente; a maldição e o dano persistente terminam após 1 minuto.\nFracasso Como sucesso, mas a maldição e o dano persistente não terminam sozinhos.\nFalha Crítica Como falha, mas o dano de força persistente é 4d12[persistente,força].",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "",
      "defense": "vai salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cursed-metamorphosis",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:75b5e667f2ba5301da6556140a2b3144682d3ff573b7dd207cec3e191d707d7b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Metamorfose Amaldiçoada",
      "description": "Você transforma a criatura alvo em um animal inofensivo apropriado para a área, com efeitos baseados em seu teste de Fortitude.\nSucesso Crítico O alvo não é afetado.\nSucesso O corpo do alvo ganha características menores do animal inofensivo. Seu interior se agita à medida que se transforma parcialmente, fazendo com que ele fique Enjoado 1. Quando ele se recupera da condição de doente, suas características voltam ao normal.\nFalha O alvo se transforma por 1 minuto, mas mantém sua mente. Se ele gastar todas as suas ações em seu turno concentrando-se em sua forma original, ele pode tentar um teste (irá) salvar para encerrar o efeito imediatamente.\nFalha Crítica O alvo é transformado no animal inofensivo escolhido, corpo e mente, por um período ilimitado.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "varia",
      "defense": "fortaleza salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vampiric-exsanguination",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2ee11aacc6f4e7edbcd2610f59a56b4c2555d140c0d209d2a2733052d34803b5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Exsanguinação Vampírica",
      "description": "Você absorve o sangue e a força vital de outras criaturas através dos braços estendidos. Você causa 12d6 de dano de vazio a criaturas vivas na área com um teste básico de Fortitude.\nVocê ganha Pontos de Vida temporários iguais à metade do dano que uma única criatura sofre com esta magia; calcule esses Pontos de Vida temporários usando a criatura que sofreu mais dano. Você perde quaisquer Pontos de Vida temporários restantes após 1 minuto.\nAprimorada (+1) O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "area": "30 cones",
      "duration": "",
      "defense": "salvamento básico de fortaleza",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:zealous-conviction",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a0779b884ccf9827aef09e68845094075a09b64159a6ec32a9193f5eb5cae10c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Convicção Zelosa",
      "description": "Você ignora as mentes racionais de seus alvos, incutindo-lhes convicção e zelo inabaláveis. Cada alvo ganha 12 Pontos de Vida temporários e +2 de bônus de status em testes de resistência de Vontade contra efeitos mentais, já que sua fé substitui os sinais de seus próprios corpos e mentes. Se você disser a um alvo para fazer algo, ele deverá atender ao seu pedido, embora se normalmente achar a tarefa repugnante, ele poderá tentar um salvamento de Vontade no final de seu turno a cada rodada devido à dissonância cognitiva. Se obtiver sucesso, ele encerra completamente os efeitos da magia sobre si mesmo.\nEfeito do magia: Convicção Zelosa\nAprimorada (9º) Os Pontos de Vida temporários aumentam para 18, e o bônus de status para testes de Vontade aumenta para +3.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "até 10 criaturas dispostas",
      "duration": "10 minutos",
      "heightening": "Aprimorada (9º) Os Pontos de Vida temporários aumentam para 18, e o bônus de status para testes de Vontade aumenta para +3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:raise-dead",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4c49d97b25f0000a1db9bdf43fb53d72a7d4b03d151fd0931592ba481d0812c8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ressuscitar Mortos",
      "description": "Você tenta invocar a alma da criatura morta, exigindo que o corpo da criatura esteja presente e relativamente intacto. A criatura deve ter morrido nos últimos 3 dias. Se Pharasma decidiu que a hora da criatura chegou (a critério do Mestre), ou se a criatura não deseja retornar à vida, esta magia falha automaticamente, mas o custo não é consumido na conjuração.\nSe a magia for bem sucedida, a criatura retorna à vida com 1 Ponto de Vida, sem magias preparadas ou espaços de magia disponíveis, sem pontos em quaisquer reservas ou quaisquer outros recursos diários, e ainda com quaisquer debilitações de longo prazo do antigo corpo. O tempo gasto no Boneyard deixa o alvo temporariamente debilitado, tornando-o Desajeitado 2, Drenado 2 e Enfraquecido 2 por 1 semana; essas condições não podem ser removidas ou reduzidas de forma alguma até que uma semana tenha passado. A criatura também muda permanentemente com o tempo na vida após a morte, como uma ligeira mudança de personalidade, uma mecha branca no cabelo ou uma estranha nova marca de nascença.\nAprimorada (7º) O nível máximo do alvo aumenta para 15. O custo aumenta para o nível do alvo (mínimo 1) × 400 GP.\nAprimorada (8º) O nível máximo do alvo aumenta para 17. O custo aumenta para o nível do alvo (mínimo 1) × 800 GP.\nAprimorada (9º) O nível máximo do alvo aumenta para 19. O custo aumenta para o nível do alvo (mínimo 1) × 1.600 GP.\nAprimorada (10º) O nível máximo do alvo aumenta para 21. O custo aumenta para o nível do alvo (mínimo 1) × 3.200 GP.",
      "castingTime": "10 minutos",
      "range": "10 pés (3 metros)",
      "target": "1 criatura morta de 13º nível ou inferior",
      "duration": "",
      "heightening": "Aprimorada (7º) O nível máximo do alvo aumenta para 15. O custo aumenta para o nível do alvo (mínimo 1) × 400 GP.\nAprimorada (8º) O nível máximo do alvo aumenta para 17. O custo aumenta para o nível do alvo (mínimo 1) × 800 GP.\nAprimorada (9º) O nível máximo do alvo aumenta para 19. O custo aumenta para o nível do alvo (mínimo 1) × 1.600 GP.\nAprimorada (10º) O nível máximo do alvo aumenta para 21. O custo aumenta para o nível do alvo (mínimo 1) × 3.200 GP."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tangling-creepers",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7f6dd19f450442f54fc482fb86c1f6b4037313fe9b66e9bacf48b9868f59f741",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Trepadeiras emaranhadas",
      "description": "Trepadeiras densas e contorcidas brotam de todas as superfícies e enchem qualquer corpo de água na área. Qualquer criatura se movendo no terreno, ou escalando ou nadando dentro das trepadeiras, sofre uma penalidade de circunstância de –3 metros em suas Velocidades enquanto estiver na área. Uma vez por rodada, você pode Sustentar o magia para fazer uma videira atacar de qualquer quadrado dentro da extensão de trepadeiras. Esta videira tem um alcance de 15 pés. Faça uma jogada de ataque mágico corpo a corpo contra o alvo; se obtiver sucesso, a videira puxa o alvo para as trepadeiras e o deixa imobilizado por 1 rodada ou até a criatura escapar (contra a CD do seu magia), o que ocorrer primeiro.\nEfeito do magia: Trepadeiras Emaranhadas",
      "castingTime": "3 ações",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "40 explosão",
      "duration": "10 minutos",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blessed-boundary",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:73b58abb84f51d181f576cabd3a5699f3ca446a41b23c56a69069047b73d462c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fronteira Abençoada",
      "description": "Manifestações da força divina aparecem às centenas, girando em uma esfera enorme e protetora. Eles normalmente se parecem com fragmentos pontiagudos, mas geralmente assumem uma aparência temática da divindade do lançador. A esfera é oca, com as manifestações formando uma concha de 5 centímetros de profundidade na borda externa. Você pode optar por diminuir a explosão, em incrementos de 1,5 metro, ao lançá-la. A concha fornece cobertura e pode cruzar terreno sólido sem afetá-lo. A concha causa 7d8 de dano de força a cada criatura que cruza com a concha quando a esfera é criada, ou que tenta se mover através da concha. A criatura também sofre o dano no final do seu turno, mas apenas se ainda não tiver sofrido o dano do projétil naquele turno. Os efeitos são determinados pelo teste de Reflexos da criatura.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total, é empurrada até 10 pés (3 metros) na direção de sua escolha e encerra seu movimento.\nFalha Crítica A criatura sofre o dobro de dano, é empurrada até 20 pés (6 metros) na direção de sua escolha e encerra seu movimento.\nAumentado (+1) O dano aumenta em 1d8.",
      "castingTime": "3 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "area": "60 explosão",
      "duration": "1 minuto",
      "defense": "salvamento de reflexo básico",
      "heightening": "Aumentado (+1) O dano aumenta em 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dominate",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d817dada7f0f8e81f05419487dc6864d2ce41b33afe71c10ebaa1af033319712",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dominar",
      "description": "Você assume o comando do alvo, forçando-o a obedecer às suas ordens. Se você emitir uma ordem obviamente autodestrutiva, o alvo não agirá até que você emita uma nova ordem. O efeito depende do salvamento de Vontade.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Atordoado 1 enquanto luta contra seus comandos.\nFalha Você controla o alvo. Ele ganha a condição Controlado, mas pode tentar um salvamento de Vontade no final de cada um de seus turnos. Com um sucesso, a magia termina.\nFalha Crítica Como uma falha, mas o alvo recebe um novo salvamento apenas se você lhe der uma nova ordem que seja contra sua natureza, como matar seus aliados.\nAprimorada (10º) A duração é ilimitada.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "até a próxima vez que você fizer seus preparativos diários",
      "defense": "vai salvar",
      "heightening": "Aprimorada (10º) A duração é ilimitada."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-blast",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5e93d5b52aeab511311bd05f642ed8131842abd56f3b8d4dbbc4bdc8782d7b46",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Explosão Espiritual",
      "description": "Você concentra energia etérea e ataca o espírito de uma criatura, causando 16d6 de dano espiritual com um teste básico de Fortitude.\nAprimorada (+1) O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "",
      "defense": "salvamento básico de fortaleza",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scrying",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:013f7b81d5f78227a68c44adcb3b78489b20c519b72f1f1f3675aa4841672b00",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Vidência",
      "description": "Você espiona magicamente uma criatura de sua escolha. A vidência funciona como a Clarividência, exceto que a imagem que você recebe é menos precisa, insuficiente para teletransporte e magias semelhantes. Em vez de criar um olho em um local definido em 500 pés (150 metros), você cria um olho que se manifesta logo acima do alvo. Você pode escolher um alvo pelo nome ou tocando em um de seus pertences ou em um pedaço de seu corpo. Se você não encontrou o alvo pessoalmente, a CD da vidência é 2 a menos, e se você não tem conhecimento da identidade do alvo (talvez porque encontrou a presa de uma criatura desconhecida na cena do crime), a CD é 10 a menos.\nO efeito da vidência depende do teste de Vontade do alvo.\nSucesso Crítico O magia falha e o alvo fica temporariamente imune por 1 semana. O alvo também obtém um vislumbre de você e aprende a distância aproximada e a direção de você.\nSucesso O magia falha e o alvo fica temporariamente imune por 1 dia.\nFalha A magia foi bem-sucedida.\nFalha Crítica A magia é bem-sucedida e o olho segue o alvo se ele se mover, viajando até 60 pés (18 metros) por rodada.",
      "castingTime": "10 minutos",
      "range": "planetário",
      "target": "1 criatura",
      "duration": "10 minutos",
      "defense": "vai salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:disintegrate",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:09609a1f5e77e98dfcaad30efc755ab49c7566652bae8252f36dc21503782d08",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Desintegrar",
      "description": "Um raio rastreador preto voa em direção ao seu alvo e, ao fazer contato, intensifica-se em um poderoso feixe destrutivo. Faça um ataque mágico contra o alvo. Se você atingir um objeto ou construção de força (como uma parede de força), ele será destruído sem nenhum salvamento, a menos que seja um artefato ou similarmente poderoso. Um único lançamento não pode destruir mais do que um cubo de matéria de 3 metros. Se você acertar uma criatura, ela sofre 12d10 de dano (sem tipo de dano) com um teste básico de Fortitude. Se você acertar criticamente, o alvo obtém um resultado um grau de sucesso pior que o resultado de seu salvamento de Fortitude. Uma criatura reduzida a 0 HP é transformada em pó fino; seu equipamento permanece.\nAprimorada (+1) O dano aumenta em 2d10.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura, objeto autônomo ou construção de força",
      "duration": "",
      "defense": "salvamento básico de fortaleza",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vibrant-pattern",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c65597dedc67b9dbd7213f2b10ce5859fb69b45cedcc40cda24b468a0e841db2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Padrão Vibrante",
      "description": "Você cria um padrão de luzes que pulsa com intensidade. As criaturas ficam deslumbradas enquanto estão dentro do padrão. Além disso, uma criatura deve tentar um teste de resistência de Vontade se estiver dentro do padrão quando você a conjurou, entrar no padrão, terminar seu turno dentro do padrão ou usar uma ação de Procurar ou Interagir no padrão. Uma criatura atualmente cega pelo padrão não precisa tentar novos testes de resistência.\nSucesso A criatura não é afetada.\nFalha A criatura fica cega pelo padrão. Caso saia do padrão, ele poderá tentar um novo salvamento para se recuperar da condição Cego ao final de cada um de seus turnos, com duração máxima de 1 minuto.\nFalha Crítica A criatura fica cega por 1 minuto.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "area": "10 explosão",
      "duration": "1 minuto",
      "defense": "vai salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chain-lightning",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:29ccb2665bdf904b90cd919cba00a26dadbbe115d802bdc530f995c4a3a83939",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Cadeia de Relâmpagos",
      "description": "Você descarrega um poderoso raio no alvo, causando 8d12 de dano elétrico. O alvo deve tentar um salvamento básico de Reflexos. A eletricidade forma um arco para outra criatura dentro de 30 pés (9 metros) do primeiro alvo, salta para outra criatura dentro de 30 pés (9 metros) desse alvo e assim por diante. Você pode encerrar a cadeia a qualquer momento. Você não pode mirar na mesma criatura mais de uma vez e deve ter linha de efeito para todos os alvos. Role o dano apenas uma vez e aplique-o a cada alvo (dividindo pela metade ou dobrando conforme apropriado para o resultado do teste de resistência). A cadeia termina se qualquer um dos alvos obtiver sucesso crítico em seu salvamento.\nAprimorada (+1) O dano aumenta em 1d12.",
      "castingTime": "2 ações",
      "range": "500 pés (150 metros)",
      "target": "1 criatura, mais qualquer número de criaturas adicionais",
      "duration": "",
      "defense": "salvamento de reflexo básico",
      "heightening": "Aprimorada (+1) O dano aumenta em 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tree-of-seasons",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:359cf56fd30c617dcf2a1e28d4219fe0f0792dd4132d2ba82a50bfda05843a86",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Árvore das Estações",
      "description": "Você faz com que uma pequena árvore brote instantaneamente em um espaço desocupado no chão. Quatro vagens crescem da árvore, cada uma cheia da magia de uma estação diferente. Uma criatura pode Interagir para colher um dos frutos e pode então lançá-lo até 30 pés (9 metros) como parte da mesma ação ou fazê-lo com uma ação de Interagir separada posteriormente. Quando lançado, um pod explode em @Template[burst|distance:5], causando 6d6 de dano com um teste de Reflexos básico contra sua CD de magia. O tipo de dano depende da estação do fruto: eletricidade na primavera, fogo no verão, veneno no outono ou frio no inverno. Quando o magia termina, a árvore murcha e todos os frutos restantes apodrecem, deixando para trás sementes não-mágicas.\n(@item.level)d6[frio]\n(@item.level)d6[eletricidade]\n(@item.level)d6[fogo]\n(@item.level)d6[veneno]\nAumentado (+1) O dano da explosão aumenta em 1d6.",
      "castingTime": "2 ações",
      "range": "60 pés (18 metros)",
      "target": "",
      "duration": "1 minuto",
      "defense": "salvamento de reflexo básico",
      "heightening": "Aumentado (+1) O dano da explosão aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:truesight",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1c91d5df84d82d7de6cab7ab1a1811d537c996ef8efdcfb6ef3680810e8ea4e4",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Visão Verdadeira",
      "description": "Você vê as coisas em 60 pés (18 metros) como elas realmente são. O Mestre faz um teste secreto de contra-atacar contra qualquer efeito de ilusão, metamorfose ou polimorfia na área, mas apenas com o propósito de determinar se você vê através dele (por exemplo, se o teste for bem sucedido contra uma magia de metamorfose, você pode ver a verdadeira forma da criatura, mas não encerra a magia de metamorfose).",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "10 minutos",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mislead",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5511c12cfd1cbe207aa0d402771cea70d64373ce1a03ca4247db93bb5aa9f4bc",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Enganar",
      "description": "Você se torna invisível e cria uma duplicata ilusória de si mesmo. Quando você sustenta o magia, você pode ditar mentalmente um curso de ação para sua duplicata seguir naquela rodada. Sua duplicata age como se tivesse o número total de ações, embora na verdade não possa afetar nada no ambiente. Tanto a duplicata quanto sua invisibilidade persistem durante a duração do magia. Realizar uma ação hostil não acaba com a invisibilidade de enganar, assim como um magia de Invisibilidade de 4º Rank. Uma criatura que determina que a duplicata é uma ilusão não necessariamente sabe que você é invisível, e aquela que pode ver sua forma invisível não necessariamente sabe que sua duplicata é uma ilusão.\nSe você lançar um magia, atacar ou interagir de outra forma com outra criatura, como parte dessa ação, você pode tentar um teste de Enganação contra as CDs de Percepção dos observadores para convencê-los de que sua duplicata usou aquela ação. Isso não engana ninguém que sabe que sua duplicata é uma ilusão, nem funciona se o ataque obviamente não puder ter vindo da duplicata. Por exemplo, se você disparasse um raio, você poderia fazer com que parecesse que ele veio da duplicata, desde que a duplicata estivesse posicionada apropriadamente, mas se você atacasse com uma espada e sua duplicata estivesse do outro lado da sala em relação ao alvo, seu teste de Enganação falharia automaticamente.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "1 minuto",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:field-of-life",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:75b0945ff1365d7c8f492f6617c5b550c144acb00162c2c21070f8051bd048f9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Campo da Vida",
      "description": "Um campo de energia vital preenche a área, exalando calor e rejuvenescendo aqueles que estão dentro dela. Cada criatura viva que inicia seu turno na área recupera 1d8 Pontos de Vida, e qualquer criatura morta-viva que inicia seu turno na área sofre 1d8 de dano de vitalidade.\nAprimorada (8º) A cura e o dano aumentam para 1d10.\nAprimorada (9º) A cura e o dano aumentam para 1d12.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "area": "20 explosão",
      "duration": "1 minuto",
      "heightening": "Aprimorada (8º) A cura e o dano aumentam para 1d10.\nAprimorada (9º) A cura e o dano aumentam para 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:repulsion",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9a28868aee86a6ec839a494763628a8b0ca4e1ec3e535c1f32cc58eb5761059d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Repulsão",
      "description": "Você manifesta uma aura que impede as criaturas de se aproximarem de você. Ao lançar o magia, você pode fazer com que a área tenha qualquer raio que você escolher, até 40 pés (12 metros). Uma criatura deve tentar um teste de Vontade se estiver dentro da área quando você lançar o magia ou assim que entrar na área enquanto o magia estiver em vigor. Uma vez que uma criatura tenha tentado salvar, ela usa o mesmo resultado para aquela conjuração de repulsão. Quaisquer restrições ao movimento de uma criatura se aplicam somente se ela se mover voluntariamente em sua direção. Por exemplo, se você se aproximar de uma criatura, ela não precisará se afastar.\nSucesso Crítico O movimento da criatura não é restrito.\nSucesso A criatura trata cada quadrado na área como terreno difícil quando se aproxima de você.\nFalha A criatura não pode se aproximar de você dentro da área.",
      "castingTime": "2 ações",
      "range": "emanação de até 40 pés",
      "target": "",
      "duration": "1 minuto",
      "defense": "vai salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:petrify",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4e4e4b96f53d7b392aab219ae382b3a6e16083e3e5aa356e361882eeb993bee9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Petrificar",
      "description": "O corpo do alvo lentamente se transforma em uma estátua de pedra. O alvo deve tentar um salvamento de Fortitude.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica lento 1 por 1 rodada enquanto pedras começam a se formar em seu corpo.\nFalha O alvo fica lento 1 e deve tentar um salvamento de Fortitude no final de cada um de seus turnos; este salvamento contínuo tem o traço de incapacitação. Se falhar, a condição de lentidão aumenta em 1 (ou 2 em caso de falha crítica) à medida que pedras se espalham por seu corpo. Um teste bem-sucedido reduz a condição de lentidão em 1. Quando uma criatura se torna totalmente incapaz de agir devido à condição de lentidão de petrificar, o magia termina em um flash de luz cinza, deixando o alvo petrificado permanentemente enquanto se transforma em uma estátua. O magia também termina se a condição de lentidão for removida, o que faz com que a pedra se quebre inofensivamente.\nFalha Crítica Como falha, mas o alvo inicialmente fica Lento 2.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura feita de material orgânico",
      "duration": "varia",
      "defense": "fortaleza salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:project-image",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:bfea9af40e01bc39629f8ff8560310e1c9dc6781d2749c36c0413dec2eaf1186",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Imagem do projeto",
      "description": "Você projeta uma imagem ilusória de si mesmo. Você deve permanecer dentro do alcance da imagem e, se em algum momento não conseguir ver a imagem, o magia termina. Sempre que você conjurar um magia que não seja aquele cuja área seja uma emanação, você pode fazer com que o efeito do magia se origine de você mesmo ou da imagem. Como a imagem é uma ilusão, ela não pode se beneficiar de magias, embora apareçam manifestações visuais do magia. A imagem tem o mesmo AC e salva como você. Se for atingido por um ataque ou falhar no salvamento, o magia termina.\nAprimorada (+2) A duração máxima que você pode sustentar o magia aumenta para 10 minutos.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada (+2) A duração máxima que você pode sustentar o magia aumenta para 10 minutos."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eclipse-burst",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4777bb4a6c8b08d9ce878cfb68cd128edfa5c559ea789fa587d348d48d270cc6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Explosão de Eclipse",
      "description": "Um globo de escuridão congelante explode na área, causando 8d10 de dano de frio às criaturas na área, além de 8d4 de dano de vazio adicional às criaturas vivas. Cada criatura na área deve tentar um teste de Reflexos.\nSe o globo se sobrepõe a uma área de luz mágica ou afeta uma criatura afetada pela luz mágica, a explosão do eclipse tenta neutralizar o efeito da luz.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total.\nFalha Crítica A criatura sofre o dobro de dano e fica Cegada pela escuridão por tempo ilimitado.\nAprimorada (+1) O dano de frio aumenta em 1d10 e o dano de vazio contra os vivos aumenta em 1d4.",
      "castingTime": "2 ações",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "60 explosão",
      "duration": "",
      "defense": "salvamento reflexo",
      "heightening": "Aprimorada (+1) O dano de frio aumenta em 1d10 e o dano de vazio contra os vivos aumenta em 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:regenerate",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a6f833930831db06257508923c4dd34dc037e0c3ce8b2a5afe81c6a7197d2449",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Regenerado",
      "description": "Uma infusão de energia vital concede cura contínua à criatura. O alvo ganha temporariamente regeneração 15, o que restaura 15 Pontos de Vida no início de cada um de seus turnos. Enquanto tiver regeneração, o alvo não pode morrer por receber dano de Pontos de Vida e sua condição de Morrer não pode aumentar para um valor que o mataria (isso interrompe a condição de morte da maioria das criaturas ao morrer 3), embora se seu valor de Ferido se tornar 4 ou superior, ele permanecerá Inconsciente até que seus ferimentos sejam tratados. Se o alvo sofrer dano de ácido ou fogo, sua regeneração será desativada até o final do próximo turno.\nCada vez que a criatura recupera Pontos de Vida da regeneração, ela também regenera um órgão danificado ou arruinado (se houver). Durante a duração da magia, a criatura também pode recolocar partes do corpo cortadas gastando uma ação de Interagir para segurar a parte do corpo na área de onde foi cortada.\nEfeito do magia: Regenerar\nAprimorada (9º) A regeneração aumenta para 20.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura viva voluntária",
      "duration": "1 minuto",
      "heightening": "Aprimorada (9º) A regeneração aumenta para 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:interplanar-teleport",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8396a72c81aa3d350d1fd97839e9ebb66a315e65a021d0ec23f8a9046133add5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Teletransporte Interplanar",
      "description": "Requisitos Você tem uma chave planar para o plano de destino, usada como lugar geométrico\nVocê e seus aliados atravessam as barreiras entre os planos de existência. Os alvos se movem para outro plano, como o Plano do Fogo, o Submundo ou as Fendas Exteriores. Você deve saber que o plano de destino existe e usar uma chave planar mágica criada a partir de material daquele plano como local para a magia. Embora as chaves planares para os planos mais proeminentes sejam incomuns, assim como o magia teletransporte interplanar, planos e semiplanos mais obscuros geralmente têm chaves planares raras ou possivelmente únicas.\nA magia é altamente imprecisa e você aparece a 1d20×40 quilômetros do último lugar onde um dos alvos (de sua escolha) foi localizado na última vez que o alvo viajou até o avião. Se for a primeira vez que todos os alvos viajam para um avião específico, você aparecerá em um local aleatório no avião. O teletransporte interplanar não fornece um meio de viagem de retorno, embora lançar o teletransporte interplanar novamente permita que você retorne ao seu plano anterior, a menos que haja circunstâncias atenuantes.",
      "castingTime": "10 minutos",
      "range": "5 pés (1,5 metros)",
      "target": "até 8 criaturas dispostas",
      "duration": "",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:duplicate-foe",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d17f735aba8dd25f77a3fe95fdbb0a27a516bbca673815918ce68c5d4bf9e1d3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Inimigo duplicado",
      "description": "Você cria uma duplicata temporária de um inimigo para lutar em seu nome. O alvo pode tentar um teste de Fortitude para interromper o magia. A duplicata aparece em um espaço desocupado adjacente ao alvo e possui o modificador de ataque, CA, modificadores de testes de resistência, Percepção e modificadores de habilidade do alvo, mas possui apenas 70 Pontos de Vida e não possui as habilidades especiais do alvo, incluindo imunidades, resistências e fraquezas. Não possui itens mágicos, exceto runas de potência de arma.\nA duplicata ganha a característica de lacaio e só pode andar e atacar. Seus Golpes causam o dano normal do alvo, mas não aplicam efeitos adicionais, já que não possuem habilidades especiais. O magia termina automaticamente se os Pontos de Vida da duplicata caírem para 0.\nA duplicata ataca seus inimigos com o melhor de suas habilidades. Você também pode tentar fornecer instruções adicionais; quando você sustenta o magia, você também pode comandar um lacaio como parte de sua ação, mas o mestre determina se a duplicata segue seu comando.\nA duplicata é instável, então a cada turno após realizar suas ações, ela perde 4d6 Pontos de Vida. Não é uma criatura viva e nunca poderá recuperar seus Pontos de Vida perdidos de forma alguma.\nSucesso Crítico Você não consegue criar uma duplicata.\nSucesso A duplicata causa metade do dano com seus Golpes e a duração é reduzida para no máximo 2 rodadas.\nFalha A duplicata funciona conforme descrito.\nAprimorada (+1) O nível da criatura que você pode atingir aumenta em 2. A duplicata tem 10 HP a mais.",
      "castingTime": "3 ações",
      "range": "30 pés (9 metros)",
      "target": "1 inimigo de nível 15 ou inferior",
      "duration": "1 minuto",
      "defense": "fortaleza salvar",
      "heightening": "Aprimorada (+1) O nível da criatura que você pode atingir aumenta em 2. A duplicata tem 10 HP a mais."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warp-mind",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8a00820fe21efdc790f219b3c0b9b2e47320570fb7b9d588fedfe4bb29b0a31b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mente Distorcida",
      "description": "Você embaralha as faculdades mentais e as informações sensoriais de uma criatura. O alvo deve tentar um teste de resistência de Vontade. Independentemente do resultado desse salvamento, o alvo fica temporariamente imune por 10 minutos. Os efeitos da mente distorcida acontecem instantaneamente, então Dissipar Magia e outros efeitos que neutralizam magias não podem neutralizá-los. No entanto, os rituais e habilidades do Wish que podem remover efeitos não mágicos ainda podem neutralizar os efeitos.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo gasta a primeira ação no próximo turno com a condição Confuso.\nFalha O alvo fica Confuso por 1 minuto.\nFalha Crítica O alvo fica Confuso permanentemente.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura",
      "duration": "",
      "defense": "vai salvar",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sunburst",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4a1d46cea948d691af7555693377bd8e2ca6c234668cbca8079a52f67cebc04a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Raio de sol",
      "description": "Um poderoso globo de luz solar abrasadora explode na área, causando 8d10 de dano de fogo a todas as criaturas na área, além de um dano adicional de (@item.level+1)d10[vitality] a criaturas mortas-vivas. Cada criatura na área deve tentar um teste de Reflexos.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total.\nFalha Crítica A criatura sofre dano total e fica cega permanentemente.\nSe o globo se sobrepõe a uma área de escuridão mágica, o raio de sol tenta neutralizar o efeito de escuridão.\nAumentado (+1) O dano de fogo aumenta em 1d10, e o dano de vitalidade contra mortos-vivos aumenta em 1d10.",
      "castingTime": "2 ações",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "60 explosão",
      "duration": "",
      "defense": "salvamento reflexo",
      "heightening": "Aumentado (+1) O dano de fogo aumenta em 1d10, e o dano de vitalidade contra mortos-vivos aumenta em 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:true-target",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a121834b887e6fce1a9536f251f67786fe655009439644726c3dcf5fae774ad2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Alvo Verdadeiro",
      "description": "Você investiga os possíveis futuros dos próximos segundos para entender todas as maneiras pelas quais seu inimigo pode evitar danos e, em seguida, lança uma visão desse futuro para aqueles ao seu redor. Designe uma criatura. A primeira vez que cada alvo faz uma jogada de ataque contra aquela criatura durante a duração do alvo verdadeiro, o atacante rola duas vezes e usa o melhor resultado. O atacante também ignora penalidades de circunstância na jogada de ataque e qualquer teste simples necessário devido à criatura designada estar Oculta ou Oculta.\nEfeito do magia: Alvo Verdadeiro",
      "castingTime": "1 ação",
      "range": "60 pés (18 metros)",
      "target": "4 criaturas",
      "duration": "até o início do seu próximo turno",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfettered-pack",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0d65d48e525ced0d6e2f697a13aa8cce9f9fef398ad25534e6523359d3872dfb",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Pacote Livre",
      "description": "Você liberta aqueles que viajam ao seu lado dos obstáculos ambientais. Os alvos não sofrem penalidades de circunstância na Velocidade causada por vegetação, escombros, ventos ou outras propriedades do ambiente, e ignoram terrenos difíceis de tais propriedades ambientais.\nAprimorada (9º) Os alvos também ignoram terrenos mais difíceis das propriedades ambientais.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "até 10 criaturas",
      "duration": "1 hora",
      "heightening": "Aprimorada (9º) Os alvos também ignoram terrenos mais difíceis das propriedades ambientais."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:energy-aegis",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:838ed2f41f57f69d242f25e7bf5c253c569c4af4f32f3fa1b3ca71de318d4bae",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Égide Energética",
      "description": "Você protege o alvo com uma barreira de energia poderosa e duradoura. O alvo ganha resistência 5 a danos de ácido, frio, eletricidade, fogo, força, sônico, vitalidade e vazio.\nEfeito do magia: Égide Energética\nAprimorada (9º) As resistências aumentam para 10.",
      "castingTime": "1 minuto",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "até seus próximos preparativos diários",
      "heightening": "Aprimorada (9º) As resistências aumentam para 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mask-of-terror",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a3ba5aa1ccb87c6df4d2af8350f95965471fa9fa33e3fb95f68350faf2eb3ca6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Máscara do Terror",
      "description": "O alvo parece ser uma criatura horrível e aterrorizante. O efeito é único para cada observador, então um humano que observa o alvo pode ver um demônio com presas sangrentas, mas um demônio que observa o alvo pode ver um rosto angelical brilhante.\nQuando qualquer criatura tenta uma ação hostil contra o alvo, a criatura deve tentar um salvamento de Vontade. Ele fica temporariamente imune até o final do próximo turno.\nSucesso A criatura não é afetada.\nFalha A criatura fica Assustada 2 antes de usar sua ação.\nFalha Crítica A criatura fica Amedrontada 2 e sua ação falha e é desperdiçada.\nAprimorada (8º) Você pode escolher até 5 criaturas. Se uma criatura usar uma ação ou reação hostil que afete múltiplos alvos simultaneamente, ela precisará tentar apenas um teste de resistência contra máscara de terror.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "1 minuto",
      "defense": "vai salvar",
      "heightening": "Aprimorada (8º) Você pode escolher até 5 criaturas. Se uma criatura usar uma ação ou reação hostil que afete múltiplos alvos simultaneamente, ela precisará tentar apenas um teste de resistência contra máscara de terror."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:volcanic-eruption",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9439fd86c7e03ba45d6607bedb6e67a2e70341b426354ed621426d3ac0a3f393",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Erupção Vulcânica",
      "description": "Área com raio de 1,5 m, cilindro com 80 pés de altura\nO solo se abre, espalhando uma coluna de lava no ar em um cilindro vertical, causando 14d6 de dano de fogo às criaturas na área. A lava esfria rapidamente e envolve as criaturas na área. Uma criatura envolta em rocha é Desajeitada 1 e sofre uma penalidade de –3 metros em suas Velocidades. Todo terreno normal é terreno difícil para uma criatura voadora, e tais criaturas descem imediatamente 20 pés (6 metros) no momento em que são encapsuladas, mas não sofrem dano desta queda. Uma criatura envolta em rocha pode tentar escapar contra a CD do seu magia para encerrar o efeito. Caso contrário, a criatura permanece enclausurada até sofrer um total de 50 de dano, libertando-a da rocha. Além disso, as criaturas na área e aquelas dentro de 5 pés (1,5 metros) da coluna de lava recebem automaticamente (@item.Rank -4)d6[fogo] de dano do calor intenso, independentemente dos resultados de seus testes de resistência.\nEfeito do magia: Erupção Vulcânica\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total e é envolta.\nFalha Crítica A criatura sofre o dobro do dano e é envolta.\nAumentado (+1) O dano na área aumenta em 2d6, e o dano do calor intenso aumenta em 1d6.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "area": "5 cilindros",
      "duration": "",
      "defense": "salvamento reflexo",
      "heightening": "Aumentado (+1) O dano na área aumenta em 2d6, e o dano do calor intenso aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:retrocognition",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:79a76ea6e6fa8c45fdbe4b63e6025e82361f671b95ab2c54024d370f7be3d075",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Retrocognição",
      "description": "Abrindo sua mente para ecos mentais, você obtém impressões de eventos passados ​​que ocorreram em sua localização atual. A retrocognição revela impressões psíquicas de eventos que ocorreram ao longo do último dia durante o primeiro minuto de duração, seguidas por impressões do dia seguinte até o minuto seguinte, e assim por diante. Esses ecos não funcionam como uma visão, mas revelam impressões de emoções e metáforas que fornecem pistas e detalhes enigmáticos do passado. Se você testemunhar um evento traumático ou turbulento através de uma impressão, a magia termina a menos que você obtenha sucesso em um teste de Vontade com uma CD de pelo menos 30 e possivelmente até 50, dependendo da gravidade do evento. O Mestre determina se um evento é traumático e escolhe a CD.\nAprimorada (8º) Você ganha impressões de eventos que ocorreram no ano anterior para cada minuto que você se concentra, em vez do dia anterior, embora os detalhes diminuam, tornando mais difícil distinguir as impressões de todos os eventos, exceto os mais importantes.\nAprimorada (9º) Você ganha impressões de eventos que ocorreram no século anterior para cada minuto que você se concentra, em vez do dia anterior, embora os detalhes diminuam, tornando quase impossível distinguir as impressões de todos os eventos, exceto os mais importantes.",
      "castingTime": "1 minuto",
      "range": "",
      "target": "",
      "duration": "sustentado",
      "heightening": "Aprimorada (8º) Você ganha impressões de eventos que ocorreram no ano anterior para cada minuto que você se concentra, em vez do dia anterior, embora os detalhes diminuam, tornando mais difícil distinguir as impressões de todos os eventos, exceto os mais importantes.\nAprimorada (9º) Você ganha impressões de eventos que ocorreram no século anterior para cada minuto que você se concentra, em vez do dia anterior, embora os detalhes diminuam, tornando quase impossível distinguir as impressões de todos os eventos, exceto os mais importantes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-decree",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:03a4bb95161d5a2211243fe6f535ff06be39faa3173de424f5fb1a0e8f4a7c96",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Decreto Divino",
      "description": "Você profere uma poderosa ladainha de sua fé, um mandato que prejudica aqueles que se opõem aos seus ideais. Você causa 7d10 de dano espiritual aos seus inimigos na área; cada inimigo deve tentar um salvamento de Fortitude.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total e fica Enfraquecida 2 por 1 minuto.\nFalha Crítica A criatura sofre o dobro de dano e fica debilitada 2 por 1 minuto. Se você estiver em seu plano natal e a criatura não estiver, a criatura será enviada de volta ao seu plano natal. Uma criatura de 10º nível ou inferior também deve ter sucesso em um teste de Vontade ou ficará paralisada por 1 minuto; se falhar criticamente, ele morre (este é um efeito de morte).\nAprimorada (+1) O dano aumenta em 1d10, e o nível das criaturas que devem tentar um segundo teste de resistência em caso de falha crítica aumenta em 2.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "area": "40 emanação",
      "duration": "varia",
      "defense": "fortaleza salvar",
      "heightening": "Aprimorada (+1) O dano aumenta em 1d10, e o nível das criaturas que devem tentar um segundo teste de resistência em caso de falha crítica aumenta em 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:planar-palace",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d9f0baa0a5229b477baf942face9a1f268611e9128b3f17dd506fbe92b41eac5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Palácio Planar",
      "description": "Você desenvolve um semiplano extradimensional que consiste em uma habitação espaçosa com uma única entrada. A entrada se conecta ao plano onde você lança o magia, aparecendo em qualquer lugar dentro do alcance do magia como um retângulo vertical tênue e brilhante com 5 pés (1,5 metros) de largura e 10 pés (3 metros) de altura. Você designa quem pode entrar quando você lança o magia. Uma vez lá dentro, você pode fechar a entrada, tornando-a invisível. Você e as criaturas designadas podem reabrir a porta à vontade.\nNo interior, o semiplano parece ser uma mansão com um hall de entrada magnífico e numerosas câmaras opulentas. A mansão pode ter qualquer planta baixa que você imaginar ao lançar o magia, desde que caiba em um espaço 40 pés (12 metros) de largura, 40 pés (12 metros) de profundidade e 30 pés (9 metros) de altura. Enquanto a entrada da mansão estiver fechada, os efeitos de fora da mansão não conseguem penetrá-la, e vice-versa, exceto o Teleporte Interplanar, que pode ser usado para entrar na mansão. Você pode usar magia de vidência e efeitos similares para observar o exterior somente se eles forem capazes de cruzar planos.\nUma equipe de até 24 empregados atende qualquer pessoa dentro da mansão. Eles são como o servo criado pelo magia Phantasmal Minion, embora sejam visíveis, com uma aparência que você determina durante o lançamento. A mansão está abastecida com comida suficiente para servir um banquete de nove pratos para 150 pessoas.",
      "castingTime": "1 minuto",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "até a próxima vez que você fizer seus preparativos diários",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:contingency",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ad206080fa0475a71b716e6e0d7df094333c9c7f076e6f072b97f5910bc99649",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Contingência",
      "description": "Você prepara um magia que será ativado mais tarde. Ao lançar contingência, você também lança outro magia de 4º Rank ou inferior com um tempo de lançamento de no máximo 3 ações. Este magia companheiro deve ser aquele que pode afetar você. Você deve tomar qualquer decisão sobre a magia ao lançar contingência, como escolher um tipo de dano para resistir à energia. Durante o lançamento, escolha um gatilho sob o qual o magia será lançado, usando as mesmas restrições do gatilho de uma ação Preparar. Uma vez conjurada a contingência, você pode fazer com que a magia companheira entre em vigor como uma reação com aquele gatilho. Afeta apenas você, mesmo que afete mais criaturas. Se você definir condições complicadas, conforme determinado pelo Mestre, o gatilho poderá falhar. Se você conjurar contingência novamente, a conjuração mais recente substituirá a mais antiga.\nAprimorada (8º) Você pode escolher uma magia de 5º Rank ou inferior.\nAprimorada (9º) Você pode escolher uma magia de 6º Rank ou inferior.\nAprimorada (10º) Você pode escolher uma magia de 7º Rank ou inferior.",
      "castingTime": "10 minutos",
      "range": "",
      "target": "",
      "duration": "até a próxima vez que você fizer seus preparativos diários",
      "heightening": "Aprimorada (8º) Você pode escolher uma magia de 5º Rank ou inferior.\nAprimorada (9º) Você pode escolher uma magia de 6º Rank ou inferior.\nAprimorada (10º) Você pode escolher uma magia de 7º Rank ou inferior."
    }
  }
]
