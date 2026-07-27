import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_01_SPELLS_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:spell:spells-srd:figment",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:515ff6a1edc52d58c6505e19a57e2d1a453ae895d8cf8024bb11d789cf4fc18a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Invenção",
      "description": "Você cria um simples som ou visão ilusória. Um som adiciona o traço auditivo à magia e o som não pode incluir palavras inteligíveis ou música elaborada. Uma visão adiciona o traço visual, não pode ser maior que um cubo de 1,5 metro e é claramente grosseira e sem detalhes se vista de dentro de 15 pés (4,5 metros). Ao lançar ou sustentar a magia, você pode tentar criar uma distração com a ilusão, ganhando +2 de bônus de circunstância em seu teste de Enganação. Se a tentativa falhar contra uma criatura, essa criatura não acredita na invenção.\nEfeito da magia: Figment",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "sustentado",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:infuse-vitality",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9b86619e082aca91d4adc729e9b164866d580c9537cd090e29051c0249954451",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Infundir Vitalidade",
      "description": "Você fortalece ataques com energia vital. O número de alvos é igual ao número de ações que você gastou para lançar esta magia. Os ataques desarmados e com arma de cada alvo causam 1d4 de dano extra de vitalidade. (Esse dano normalmente causa dano apenas a mortos-vivos). Se você tiver o traço sagrado, poderá adicioná-lo a esta magia e aos Golpes afetados pela magia.\nAprimorada (3º) O dano aumenta para 2d4 de dano.\nAprimorada (5º) O dano aumenta para 3d4 de dano.\nEfeito da magia: Infundir Vitalidade",
      "castingTime": "1 a 3 ações",
      "range": "30 pés (9 metros)",
      "target": "1 a 3 criaturas dispostas",
      "duration": "1 minuto",
      "heightening": "Aprimorada (3º) O dano aumenta para 2d4 de dano.\nAprimorada (5º) O dano aumenta para 3d4 de dano.\nEfeito da magia: Infundir Vitalidade"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:illusory-object",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2a80f834ff4031c66828434dbd79e77226658350c731123ac7adf60171da4096",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Objeto Ilusório",
      "description": "Você cria uma imagem visual ilusória de um objeto estacionário. A imagem inteira deve caber na área da magia. O objeto parece animar-se naturalmente, mas não emite sons nem gera cheiros. Por exemplo, a água pareceria escorrer por uma cachoeira ilusória, mas seria silenciosa.\nQualquer criatura que toque a imagem ou use a ação Procurar para examiná-la pode tentar descrer da sua ilusão.\nAprimorada (2º) Sua imagem emite sons apropriados, gera cheiros normais e parece adequada ao toque. A magia ganha traços auditivos e olfativos. A duração aumenta para 1 hora.\nAprimorada (5º) Como a versão de 2º nível, mas a duração é ilimitada.",
      "castingTime": "2 ações",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "20 explosão",
      "duration": "10 minutos",
      "heightening": "Aprimorada (2º) Sua imagem emite sons apropriados, gera cheiros normais e parece adequada ao toque. A magia ganha traços auditivos e olfativos. A duração aumenta para 1 hora.\nAprimorada (5º) Como a versão de 2º nível, mas a duração é ilimitada."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:daze",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4814fd5e3dbce8dffe05fa8d00350f95764bca9334193454df2ebaa4f428aee7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Atordoamento",
      "description": "Você entra na mente do alvo e o atordoa com um choque mental. O choque causa 1d6 de dano mental, com um teste básico de Vontade. Se o alvo falhar criticamente no salvamento, ele também ficará atordoado 1.\nAprimorada (+2) O dano aumenta em 1d6.",
      "castingTime": "2 ações",
      "range": "60 pés (18 metros)",
      "target": "1 criatura",
      "duration": "",
      "defense": "teste básico de Vontade",
      "heightening": "Aprimorada (+2) O dano aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fear",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d4f5d091df0d81f0ce3fc7a90ae066fa75e97fe566ee03597f71c911d1c41b0c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Temer",
      "description": "Você planta medo no alvo; ele deve tentar um salvamento de Vontade.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo está assustado 1.\nFalha O alvo está Assustado 2.\nFalha Crítica O alvo fica Amedrontado 3 e Fugindo por 1 rodada.\nAprimorada (3º) Você pode ter como alvo até cinco criaturas.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "varia",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada (3º) Você pode ter como alvo até cinco criaturas."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:alarm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9311d2e55d27f9222c8987ae82089470e85e58036527c63993ca1bd051028cdc",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Alarme",
      "description": "Você protege uma área para alertá-lo quando criaturas entram sem sua permissão. Ao lançar o alarme, selecione uma senha. Sempre que uma criatura corpórea Pequena ou maior entra na área da magia sem falar a senha, o alarme envia à sua escolha um alerta mental (nesse caso a magia ganha o traço mental) ou um alarme sonoro com o som e o volume de um sino de mão (nesse caso a magia ganha o traço auditivo). Qualquer uma das opções desperta você automaticamente, e o sino permite que cada criatura na área tente um teste (percepção, dc:15) para acordar. Uma criatura ciente do alarme deve ter sucesso em um teste de Furtividade contra a CD da magia ou ativar a magia ao se mover para a área.\nAprimorada (3º) Você pode especificar um gatilho para quais tipos de criaturas soam a magia de alarme.",
      "castingTime": "10 minutos",
      "range": "tocar",
      "target": "",
      "area": "20 explosão",
      "duration": "8 horas",
      "heightening": "Aprimorada (3º) Você pode especificar um gatilho para quais tipos de criaturas soam a magia de alarme."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-animal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:606b81b2e72c75fab99d72ba7ccad9fdadced6c362666451c86a9aa97c1b5d3b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Convocar Animal",
      "description": "Você invoca uma criatura que possui a característica animal e cujo nível é –1 para lutar por você.\nAprimorada Conforme listado no traço de invocação.",
      "castingTime": "3 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada Conforme listado no traço de invocação."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:item-facade",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3381433e0ddcaa2407926a47681e0e34e020ef06e2f2d05e64448fb178e1a3b4",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fachada de itens",
      "description": "Você faz com que o objeto alvo pareça estar em condições físicas muito melhores ou piores. Ao lançar esta magia, decida se deseja fazer o objeto parecer decrépito ou perfeito. Um item feito para parecer decrépito parece quebrado e de má qualidade. Um item intacto feito para ter uma aparência melhor parece novo e altamente polido ou bem conservado. Um item quebrado parece estar intacto e funcional. Itens destruídos não podem ser afetados por esta magia. Uma criatura que interaja com o item pode tentar descrer da ilusão.\nAprimorada (2º) A duração é de 24 horas.\nAprimorada (3º) A duração é ilimitada.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 objeto não superior a 10 pés (3 metros) por 10 pés (3 metros) por 10 pés (3 metros)",
      "duration": "1 hora",
      "heightening": "Aprimorada (2º) A duração é de 24 horas.\nAprimorada (3º) A duração é ilimitada."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-projectile",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:cdc6057145f2f6ecbf5399d9949c34c6ad5d834b928b2d78bc8262c29e553d29",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Projétil Telecinético",
      "description": "Você arremessa um objeto solto e desacompanhado que esteja dentro do alcance e que tenha 1 Volume ou menos no alvo. Faça uma jogada de ataque mágico contra o alvo. Se você acertar, você causa 2d6 de dano de concussão, perfurante ou cortante – conforme apropriado para o objeto que você arremessou. Nenhuma característica específica ou propriedade mágica do item arremessado afeta o ataque ou o dano.\nSucesso Crítico Você causa dano duplo.\nSucesso Você causa dano total.\nAprimorada (+1) O dano aumenta em 1d6.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "",
      "heightening": "Aprimorada (+1) O dano aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ignition",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:863030ec1aad5e220bf434cdb02efc65e278c3bf52f13a89edbff05e164c71d8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ignição",
      "description": "Você estala os dedos e aponta para um alvo, que começa a arder. Faça uma jogada de ataque mágico contra a CA do alvo, causando 2d4 de dano de fogo ao acertar. Se o alvo estiver ao seu alcance corpo a corpo, você pode escolher fazer um ataque mágico corpo a corpo com a chama em vez de um ataque mágico à distância, o que aumenta todos os dados de dano da magia para d6s.\nSucesso Crítico O alvo sofre o dobro de dano e 1d4 de dano de fogo persistente.\nSucesso O alvo sofre dano total.\nAumentado (+1) O dano inicial aumenta em 1d4 e o dano de fogo persistente em um acerto crítico aumenta em 1d4.\n(@item.rank)d4[persistent,fire]{Escalando dano de fogo persistente}\n(@item.rank)d6[persistent,fire]{Escalando o dano de fogo persistente (corpo a corpo)}",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "",
      "heightening": "Aumentado (+1) O dano inicial aumenta em 1d4 e o dano de fogo persistente em um acerto crítico aumenta em 1d4.\n(@item.rank)d4[persistent,fire]{Escalando dano de fogo persistente}\n(@item.rank)d6[persistent,fire]{Escalando o dano de fogo persistente (corpo a corpo)}"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ill-omen",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d293d09892375f34b130e3857fde6e2eb1b4ed2703c0862ffc4d578eed6f4fe1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mau presságio",
      "description": "O alvo é atingido pelo infortúnio, o que o desequilibra. O alvo deve tentar um salvamento de Vontade.\nSucesso O alvo não é afetado.\nFalha Na primeira vez durante o período em que o alvo tenta uma jogada de ataque ou teste de perícia, ele deve rolar duas vezes e usar o pior resultado.\nFalha Crítica Toda vez que o alvo tentar uma jogada de ataque ou teste de habilidade, ele deve rolar duas vezes e usar o pior resultado.\nEfeito da magia: Mau Presságio",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "1 rodada",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bane",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6e4b73443f40d64b48720fbf085669d3eede4c36d945773bbf5fd0f6a7b3bc68",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Banimento",
      "description": "Você enche as mentes dos seus inimigos com dúvidas. Os inimigos na área devem ter sucesso em um teste de Vontade ou sofrer uma penalidade de -1 nas jogadas de ataque enquanto estiverem na área. Uma vez por rodada nos turnos subsequentes, você pode Sustentar a magia para aumentar o raio da emanação em 10 pés (3 metros) e forçar os inimigos na área que ainda não foram afetados a tentar outro teste de resistência.\nBane pode neutralizar Bless.\nEfeito da magia: Banimento",
      "castingTime": "2 ações",
      "range": "",
      "target": "inimigos na área",
      "area": "10 emanação",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sanctuary",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3467bb281886e0daaa55e1b754c86b1378c96bf99e35850806e78a83e58bb27f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Santuário",
      "description": "Você protege uma criatura com energia protetora que impede ataques. As criaturas que tentarem atacar o alvo devem tentar um teste de Vontade a cada vez. Se o alvo usar uma ação hostil, a magia termina.\nO Santuário do Sucesso Crítico termina.\nSucesso A criatura pode tentar seu ataque e quaisquer outros ataques contra o alvo neste turno.\nFalha A criatura não pode atacar o alvo e desperdiça a ação. Ele não pode tentar mais ataques contra o alvo neste turno.\nFalha Crítica A criatura desperdiça a ação e não pode tentar atacar o alvo pelo resto da duração do santuário.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "1 minuto",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-undead",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0e18779ab327078080578097c651326c271350d0b5b817999369bbd379aaa136",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Convocar Mortos-vivos",
      "description": "Você invoca uma criatura que possui a característica de morto-vivo e cujo nível é -1 para lutar por você.\nAprimorada Conforme listado no traço de invocação.",
      "castingTime": "3 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada Conforme listado no traço de invocação."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mystic-armor",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:09ad7b2b29dcccfc24abefbf856432a608f550abdb6da75aa0a53f48e6e40b12",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Armadura Mística",
      "description": "Você se protege com energia mágica cintilante, ganhando +1 de bônus de item na CA e um modificador máximo de Destreza de +5. Enquanto estiver usando armadura mística, você usa sua proficiência sem armadura para calcular sua CA.\nEfeito da magia: Armadura Mística\nAprimorada (4º) Você ganha +1 de bônus de item em testes de resistência.\nAprimorada (6º) O bônus de item na CA aumenta para +2, e você ganha +1 de bônus de item em testes de resistência.\nAprimorada (8º) O bônus de item na CA aumenta para +2, e você ganha +2 de bônus de item em testes de resistência.\nAprimorada (10º) O bônus de item na CA aumenta para +3, e você ganha +3 de bônus de item em testes de resistência.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "até seus próximos preparativos diários",
      "heightening": "Aprimorada (4º) Você ganha +1 de bônus de item em testes de resistência.\nAprimorada (6º) O bônus de item na CA aumenta para +2, e você ganha +1 de bônus de item em testes de resistência.\nAprimorada (8º) O bônus de item na CA aumenta para +2, e você ganha +2 de bônus de item em testes de resistência.\nAprimorada (10º) O bônus de item na CA aumenta para +3, e você ganha +3 de bônus de item em testes de resistência."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fleet-step",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d7d3d325fec9f30de508fbdcb9578ba9ce3de6f273628d36b8ff9674b422d8e8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Etapa da Frota",
      "description": "Você ganha um bônus de status de +9 metros em sua Velocidade.\nEfeito da magia: Passo Frota",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "1 minuto",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:command",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4ca2a9bc327982ab569b1d6c18cc437020e82fe76a49df4ad04e89b307cf01ed",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Comando",
      "description": "Você grita um comando que é difícil de ignorar. Você pode ordenar que o alvo se aproxime de você, fuja (como se ele tivesse a condição de Fuga), solte o que está segurando, deixe-o cair ou fique no lugar. Ele não pode atrasar ou reagir até que obedeça ao seu comando. Os efeitos dependem do salvamento de Vontade do alvo.\nSucesso A criatura não é afetada.\nFalha Na primeira ação do próximo turno, a criatura deve usar uma única ação para fazer o que você ordena.\nFalha Crítica O alvo deve usar todas as suas ações no próximo turno para obedecer ao seu comando.\nAprimorada (5º) Você pode escolher até 10 criaturas.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "até o final do próximo turno do alvo",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada (5º) Você pode escolher até 10 criaturas."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sigil",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:cb16a8cfd046d7c8ddd07ab077adff442136fd0e14b7719ecf2459a0eb6a0643",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sigilo",
      "description": "Você coloca inofensivamente seu sigilo mágico único, que tem cerca de 1 polegada quadrada de tamanho, na criatura ou objeto alvo. A marca pode ser visível ou invisível e você pode alterá-la de um estado para outro usando uma ação de Interação para tocar o alvo. A marca pode ser esfregada ou raspada com 5 minutos de trabalho. Se estiver em uma criatura, desaparece naturalmente ao longo de uma semana. O tempo antes que a marca desapareça aumenta dependendo da sua classificação elevada.\nAprimorada (3º) O sigilo desaparece após 1 mês.\nAprimorada (5º) O sigilo desaparece após 1 ano.\nAprimorada (7º) O sigilo nunca desaparece.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura ou objeto",
      "duration": "ilimitado",
      "heightening": "classificação elevada.\nAprimorada (3º) O sigilo desaparece após 1 mês.\nAprimorada (5º) O sigilo desaparece após 1 ano.\nAprimorada (7º) O sigilo nunca desaparece."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lock",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4592b7733761f2dc3ef8a326e2775052bdc4a04d3a6ad70409133b54f5a73384",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Trancar",
      "description": "O mecanismo de trava do alvo se fecha, mantido firmemente por proteções mágicas invisíveis. Quando você bloqueia magicamente um alvo, você define uma CD de Atletismo e Ladro para abri-lo igual à sua CD de magia ou à CD de bloqueio base com um bônus de status de +4, o que for maior. Qualquer chave ou combinação que tenha aberto uma fechadura afetada por esta magia não o faz durante a duração da magia, embora a chave ou combinação conceda um bônus de circunstância de +4 em testes para abrir a porta. Se o alvo for aberto, a magia termina. Supondo que o alvo não esteja barrado ou bloqueado de alguma forma adicional, você pode destravá-lo e abri-lo com uma ação de Interagir durante a qual você toca o alvo. Isso não encerra a magia. Você pode Dispensar esta magia a qualquer momento e de qualquer distância.\nAprimorada (2º) A duração é ilimitada, mas você deve gastar 6 PO em metais preciosos como um custo adicional.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 fechadura ou uma porta ou contêiner com trava",
      "duration": "até seus próximos preparativos diários",
      "heightening": "Aprimorada (2º) A duração é ilimitada, mas você deve gastar 6 PO em metais preciosos como um custo adicional."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mindlink",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:da586cf198e8e34ff8e9126cfd169f34b3dc7390817c8e3c6c4a911c0be19406",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Link mental",
      "description": "Você liga sua mente à mente do alvo e transmite mentalmente a esse alvo uma quantidade de informações em um instante que de outra forma poderia ser comunicada em 10 minutos.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura voluntária",
      "duration": "",
      "heightening": ""
    }
  }
]
