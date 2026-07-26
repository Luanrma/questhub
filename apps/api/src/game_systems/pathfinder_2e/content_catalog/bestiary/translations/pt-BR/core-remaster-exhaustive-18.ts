import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_18_BESTIARY_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:mirror-door",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:daff8191e530bfe78f648201977d8f2ce4a920130011507060fe869bb764b9c0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Porta Espelho",
      "description": "O reflexo de uma parede mostra uma porta fantasma onde não existe nenhuma. Esta porta só pode ser manipulada enquanto vista através do reflexo do espelho.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "check (thevery, dc:18, name:Open the Door, traits:action:disable-a-device) para abrir a porta enquanto visualiza o reflexo",
      "routine": "",
      "reset": "A armadilha é reiniciada quando a porta é fechada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "dXHZxCKOYXB0IsAL": {
          "name": "Aparecer",
          "description": "Gatilho Uma criatura vê a parede através do reflexo de um espelho\nEfeito Uma porta aparece no reflexo do espelho na parede. A criatura acionadora pode abrir e manipular esta porta apenas enquanto a visualizar através do espelho e apenas obtendo sucesso em um teste (roubo, dc:18, nome:Desativar a Armadilha, características:ação:desativar-um-dispositivo) para desativar a armadilha."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:shuffling-hall",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:40021224fb911fe03bd19760e445ae04b3c6e47fc2bb2c8176cd90c6d3dd0b34",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Salão de embaralhamento",
      "description": "Quatro placas de pressão ao longo deste corredor espelhado giram verticalmente quando pisadas, fazendo com que uma criatura na placa de pressão tombe para uma sala adjacente sem características características, ao mesmo tempo que substitui a placa de pressão e as paredes do corredor. Cada placa de pressão despeja criaturas em uma sala diferente.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "check (roubo, dc:12, nome:Desativar uma placa, características:ação:desativar um dispositivo) para desativar uma placa de pressão",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 rodada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "mLNLTTi0YhxCWKWq": {
          "name": "Virar",
          "description": "Gatilho Uma criatura pisa em uma placa de pressão\nEfeito O chão e a parede adjacente giram para cima e para cima em um eixo central, derrubando a criatura acionada em uma sala adjacente sem características características e, simultaneamente, substituindo a placa de pressão e a parede por outro conjunto no mesmo eixo. A criatura desencadeadora é empurrada para uma sala adjacente, sofre 1d8 de dano de concussão e cai no chão. Uma criatura que obtiver sucesso em um teste de resistência (reflexo, cd:19, características:efeito de dano) não sofre dano e rola para fora do caminho da armadilha, retornando ao espaço em que estava antes de pisar na placa de pressão."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:confounding-portal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:137adaab759bbf2bf110e962b8d116e3d1cb160c905c80cb2927495269c81076",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Portal confuso",
      "description": "Pequenas runas esculpidas em torno de um batente de porta ou nas paredes de um corredor confundem sub-repticiamente as criaturas, fazendo-as circular pela sala ou corredor por onde tentaram sair ou passar.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "verifique (roubo, dc: 17, nome: Raspe Runas, características: ação: desativar um dispositivo) para riscar as runas ou verifique (arcano, dc: 16, nome: Destrua as Runas) para destruir as runas",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 rodada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "K7zv6GnWMFnvcN2z": {
          "name": "Desorientação confusa",
          "description": "Gatilho Uma criatura passa pela porta ou corredor esculpido com runas\nEfeito A criatura fica confusa com as ilusões e é direcionada de volta para a sala da qual tentou sair por outra porta ou de volta ao início do corredor. Para a criatura desencadeadora, isso não parece diferente de caminhar pela porta ou corredor, e os espectadores ficam igualmente confusos. Uma criatura que obtiver sucesso em um teste de resistência (vontade, dc:19) resiste a essa ilusão e sai da sala ou segue pelo corredor sem ser mal direcionada."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:reflected-desires",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:922a7644143985670c28638955aa232f1cf7607c871fa84185af11079866404d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Desejos refletidos",
      "description": "Este espelho reflete os desejos mais profundos do observador.",
      "size": "Médio",
      "stealthDetails": "(0 para notar o espelho)",
      "disable": "teste (roubo, dc:18, nome:Encobrir o Espelho, características:ação:desabilitar-um-dispositivo) (treinado) para encobrir o espelho sem olhar para ele, ou teste (ocultismo, dc:17, nome:Erigir Barreiras Mentais) (treinado) para erguer barreiras mentais",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 rodada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "1MnFDLD3UqAsLnmn": {
          "name": "Tentar",
          "description": "Gatilho Uma criatura olha no espelho\nEfeito A criatura desencadeadora se vê desfrutando de seus desejos mais profundos no reflexo do espelho, ficando Fascinada (teste (vontade, dc:20, opções:inflige:fascinado) nega). Esse fascínio termina automaticamente quando o espelho se quebra ou fica encoberto."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:disorienting-illusions",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:171eebd306a8a0f6436466facac5268d3965dce07b67c6f656d0e710ad33d6e2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ilusões Desorientadoras",
      "description": "As ilusões que ocultam esta câmara fazem com que suas paredes e todo o seu conteúdo pareçam inclinados, irregulares e em movimento.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "teste (criação, dc:17, nome:Calcular as Dimensões da Sala) (treinado) para calcular as dimensões da sala apesar das ilusões, ou Dissipar Magia (1º Rank; neutralizar CD 17) para neutralizar as ilusões",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 minuto.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "ZJEa0ERwBrbsozjF": {
          "name": "Desorientar",
          "description": "Gatilho Uma criatura entra na sala\nEfeito Ilusões fazem com que a aparência da sala e dos objetos dentro dela se deformem, se desloquem, dobrem e distorçam constantemente por 1 minuto. Cada criatura na sala enquanto estiver distorcida deve tentar um teste (percepção, dc:17).\nSucesso Crítico A criatura não acredita nas ilusões e não é afetada.\nSucesso A criatura não acredita nas ilusões, mas ainda assim as vê. Trata a sala como um terreno difícil.\nFalha A criatura é enganada pelas ilusões. Ele trata a sala como um terreno difícil e fica Enjoado 1. Enquanto permanecer na sala, não poderá reduzir seu valor de Enjoado abaixo de 1.\nFalha Crítica Como falha, mas cada vez que a criatura Arquivo tenta uma ação de movimento, ela deve ter sucesso em um teste (simples, dc:5) ou perde a ação, e em uma falha crítica, ela também cai Pronada."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:shrinking-hall",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:384368c30f598bcc7e111a70fa91c557f749b5c861324f2dc915215c9a30a1b9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Salão Encolhendo",
      "description": "Este corredor foi projetado para encolher à medida que as criaturas o atravessam, tornando impossível o acesso à porta no final do corredor.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "check (roubo, dc:21, nome:Jam the Scales, traits:action:disable-a-device) (treinado) para prender as balanças embutidas no chão",
      "routine": "",
      "reset": "Após 10 minutos sem colocar peso no chão deste corredor, esta armadilha é reiniciada, retornando o corredor ao seu tamanho original.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "jGLOByWSFpkvum9N": {
          "name": "Encolher",
          "description": "Gatilho com peso de 100 libras ou mais colocado no chão do corredor\nEfeito O último 40 pés (12 metros) das paredes do corredor se inclina para dentro, fazendo com que o corredor encolha e se contraia, atingindo 15 centímetros de altura e largura na extremidade do corredor e bloqueando completamente o acesso à porta de saída do corredor para qualquer coisa, exceto uma criatura minúscula se espremendo."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:false-floor",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:534ac64a52e5e0f2e1c074e013c4f40b79712ab90870ba4ce99d4b2449eda004",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Piso Falso",
      "description": "O piso desta câmara é uma ilusão, que esconde uma queda de 12 metros até o piso verdadeiro abaixo. Além disso, a área abaixo do piso é silenciada magicamente – nenhum som é audível dentro nem sai deste espaço.",
      "size": "Médio",
      "stealthDetails": "(treinado; ou 0 se o piso ilusório for dissipado)",
      "disable": "Ter sucesso em um teste (percepção, dc:21) contra a CD de Furtividade de 21 (incluindo o teste para encontrar a armadilha) desacredita o piso ilusório, ou Dissipar Magia (2º Rank; neutralizar CD 18) para dissipar o piso ilusório; dissipar magia (2º Rank; neutralizar CD 20) para dissipar o silêncio mágico",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 rodada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "0bSHLXIeRbwxpKtv": {
          "name": "Derrubar",
          "description": "Gatilho Uma criatura caminha pelo chão ilusório\nEfeito A criatura desencadeadora cai do chão ilusório e sofre dano de queda (normalmente 20 de dano de concussão). Essa criatura pode usar a reação Agarrar uma Borda para evitar cair. A CD para Escalar as Paredes (CD 20) ou Agarrar uma Borda (CD 20) é 20."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:quartz-spawned-shadow",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a7bd33da22a4832bcabf3d65ca275756549737b29013c31ddfe9ea6d36365fe6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sombra Gerada por Quartzo",
      "description": "Os misteriosos mortos-vivos conhecidos como sombras espreitam em lugares escuros e se alimentam daqueles que se afastam muito da luz. Aqueles que negociam com as sombras, normalmente mantendo-as afastadas com uma arma brilhante, podem aprender grandes segredos, pois são espiões ideais.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "paralisado",
          "tóxico",
          "precisão",
          "inconsciente"
        ],
        "resistances": [
          "dano total 5, exceto força, toque fantasma, vitalidade"
        ],
        "weaknesses": []
      },
      "attacks": {
        "x47iDfIE9albveGl": {
          "name": "Mão Sombria",
          "damage": "2d6+3 vazio"
        }
      },
      "actions": {
        "ACHlnYzXVxizzqPw": {
          "name": "Vulnerabilidade leve",
          "description": "Um objeto que emite luz mágica (como a magia Luz) é tratado como mágico quando usado para atacar a sombra."
        },
        "LkqCkG3YFw362zdS": {
          "name": "Sifão de Cristal",
          "description": "Requisitos A sombra e o alvo estão dentro de 40 pés (12 metros) do cristal que gerou a sombra, e o cristal não está coberto ou obstruído\nEfeito Sombras em forma de gavinhas enrolam-se ao redor do alvo, extraindo uma parte da vitalidade do alvo e sugando-a para o cristal. O alvo sofre 4d6 de dano de vazio (teste (fortitude, dc:21, básico)). Em caso de falha, eles também ficam Enfraquecidos 1. Esta condição enfraquecida é cumulativa com outras condições enfraquecidas de sombras geradas por quartzo, até um máximo de enfraquecido 4. Se Sifão de Cristal aumentar o valor de enfraquecido da criatura para 3 ou mais, a sombra do alvo é puxada inteiramente para dentro do cristal da sombra.\nEnquanto a sombra do alvo está presa, ele sente uma ligação invisível ligando-o ao cristal e fica com Lentidão 1 sempre que estiver a mais de 40 pés (12 metros) de distância dele. A condição enfraquecida do Sifão de Cristal não pode ser reduzida até que o cristal seja quebrado; se o cristal for quebrado, o efeito termina imediatamente."
        },
        "0QWVJ7Of8cQNKp0N": {
          "name": "Esgueirar-se nas sombras",
          "description": "A sombra pode Ocultar-se ou encerrar sua Furtividade na sombra de uma criatura ou objeto."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:entrapping-chair",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0862c597abd3bc1e641300915d90eb04a09118c5780fd6891a923607f86840ab",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Cadeira envolvente",
      "description": "Uma cadeira com trilhos ocultos avança, derrubando uma criatura no assento da cadeira e prendendo-a no lugar com apoios de braços.",
      "size": "Médio",
      "stealthDetails": "(0 para notar a cadeira)",
      "disable": "check (roubo, dc:23, nome:Interromper os rastros, características:ação:desativar um dispositivo) (especialista) para interromper os rastros",
      "routine": "",
      "reset": "A armadilha é reiniciada automaticamente após 2 rodadas se a cadeira estiver desocupada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "V4xSx1Z7pl5RTlY8": {
          "name": "Sente-se!",
          "description": "Gatilho Uma criatura pisa na pista\nEfeito A cadeira avança ao longo do trilho e bate na criatura acionadora, causando (3d8 + 15 de dano de concussão. Uma criatura que obtiver sucesso em um teste (reflexo, CC: 22, características: efeito de dano) não sofre dano e se move para fora do caminho da cadeira para um quadrado adjacente aleatório que não contém o trilho. uma falha crítica: Fuga CD 26)."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:false-step-floor",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8368913a4d52e572d0dda5b10d41e2714e00173471530d13426b3df1513106f9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Piso falso",
      "description": "Cada vez que uma criatura entra na sala, ela escorrega pelo chão, cai em um vazio interdimensional e cai de volta na sala pelo teto, caindo no chão.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "teste (roubo, dc:28, nome:Interromper a Energia Mágica, características:ação:desabilitar-um-dispositivo) (treinado) para interromper a energia mágica, ou teste (arcano, dc:27, nome:Realinhar a Magia) ou teste (ocultismo, dc:27, nome:Realinhar a Magia) (treinado) para realinhar a energia mágica",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 rodada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "WYeWa4hUK5Lu9dLb": {
          "name": "Passo Falso",
          "description": "Gatilho Uma criatura entra na sala e pisa no chão\nEfeito A criatura escorrega pelo chão; ele cai através de um vazio interdimensional antes de cair de volta na sala através do teto e cair no chão. A criatura desencadeadora sofre 40 de dano de concussão pela queda. Essa criatura pode tentar Agarrar uma Borda CD 24 para evitar cair."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:reflection",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4994955c90887c13a916022bf3d94ceaef7a3d2f887e763307a3baff09af5a35",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Reflexão",
      "description": "",
      "size": "Médio",
      "senses": {},
      "languages": {},
      "defenses": {
        "immunities": [
          "imunidades a objetos"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "TpYNcJKE1v9ktu1H": {
          "name": "Arma refletida",
          "damage": "2d6+8 contundente"
        }
      },
      "actions": {
        "qTHgALlk6FGnqd7W": {
          "name": "Rotina de Reflexão",
          "description": "Cada reflexão tem 2 ações que usa para Step, Stride ou Strike (em qualquer combinação). Os reflexos podem atuar no mesmo turno em que são criados."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:clone-mirrors",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2e8ba8e525884b53a5188f8dc6e0d317381784169dd2bff3682947b8d1fee2fd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Clonar espelhos",
      "description": "Dois espelhos opostos geram infinitas duplicatas ilusórias de criaturas no salão.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "teste (roubo, dc:28, nome:Reposicionar Espelho, características:ação:desabilitar-um-dispositivo) (especialista) para reposicionar cada espelho, ou Dissipar Magia (3º Rank; neutralizar CD 25) para neutralizar cada espelho",
      "routine": "(2 ações) Esta armadilha perde 1 ação para cada espelho desabilitado. Cada espelho usa 1 ação para gerar um reflexo de uma criatura refletida no espelho. O perigo pode ter no máximo quatro reflexos gerados ao mesmo tempo.",
      "reset": "A armadilha é reiniciada após 1 dia.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "M6pVTXxAJ26CuNx5": {
          "name": "Reflexo de geração",
          "description": "Gatilho Uma criatura é refletida no espelho\nEfeito O espelho cria um Reflexo da criatura desencadeadora, que sai do espelho e entra no corredor. A armadilha então rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:verdures-moonflower",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:db54ee169574fce0ff9a72b8dce11c376a4811e7a26cfa9179240d0fb401cb69",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Flor da Lua de Verdure",
      "description": "Essas plantas enormes têm troncos grossos e nodosos, enfeitados com flores com presas. Uma boca aberta fica no topo do tronco, capaz de engolir inteira a maioria das criaturas menores que a flor da lua. Moonflowers podem se mover lentamente em suas raízes poderosas ou usá-las para atacar, mas geralmente elas as enterram profundamente no solo circundante e permanecem estacionárias para aguardar a presa.\nEmbora as flores lunares não possam falar no sentido convencional, elas se comunicam telepaticamente com outras flores lunares. Os exploradores que encontrarem uma única flor lunar podem ter certeza de que quaisquer outras flores lunares nas proximidades estarão preparadas para eles. Aqueles que conseguem interceptar as comunicações telepáticas de uma flor da lua são assaltados por visões de selvas primitivas e terríveis governadas por plantas titânicas. Não se sabe se isso é alguma visão do passado ou um sonho do futuro compartilhado por todas as flores da lua.\nMoonflowers são formas de vida alienígenas de um planeta há muito morto, mas sua proliferação por toda a galáxia foi garantida através das maquinações do Dominion of the Black, uma organização alienígena sinistra dos lugares escuros entre as estrelas.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "eletricidade"
        ],
        "resistances": [
          "físico 10, exceto corte"
        ],
        "weaknesses": [
          "fogo 10"
        ]
      },
      "attacks": {
        "SDF2zWv6zGkmcQH9": {
          "name": "Morder",
          "damage": "2d10+10 perfurante"
        },
        "MvwGFLtsnf8ZFqhG": {
          "name": "Raiz",
          "damage": "2d8+10 contundente"
        }
      },
      "actions": {
        "7pxsxbazh1PpK8A4": {
          "name": "Cura Rápida 10",
          "description": ""
        },
        "6Psn5RSYm8UGDpwM": {
          "name": "Prisão de cápsula",
          "description": "Requisitos Uma criatura é engolida pela flor da lua\nEfeito A flor da lua envolve a criatura engolida em um casulo e a expulsa para um quadrado adjacente. A criatura continua sendo engolida inteira e sofre metade do dano causado ao casulo. Uma vez rompido o casulo, ele murcha e se decompõe."
        },
        "Uoxf8sSuS6pG7QQF": {
          "name": "Geração de pods",
          "description": "Se uma criatura pequena ou maior morrer dentro de uma prisão de cápsula, a cápsula se transforma em uma flor lunar adulta com Pontos de Vida completos após 1d4 de crescimento. O equipamento da criatura morta permanece dentro da nova flor da lua e pode ser recuperado se a flor da lua for morta."
        },
        "uOpDNZG0ysnNMkxM": {
          "name": "Flores em spray",
          "description": "A flor da lua expele pétalas alucinantes em um tipo de cone de 9 metros. As criaturas na área sofrem 4d6 de dano mental e 4d6 de dano venenoso (teste de resistência (vontade, dc:26, básico)). Uma criatura que falhar fica Estupefata 2 por 1 minuto e Confusa por 1 rodada se obtiver uma falha crítica. A flor da lua não pode borrifar flores novamente por 1d4."
        },
        "kjaeBRLTBCSOl9cS": {
          "name": "Engula inteiro",
          "description": "Grande, 2d10+10 de dano de concussão], Ruptura 21"
        },
        "0D7DkzCzV4iv9Q0r": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:constricting-hall",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:261511471632faff605524ec9773162faef5e23f2321b9349761c53c533106e6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Salão Restritivo",
      "description": "As quatro paredes de um salão tornam-se fluidas e elásticas quando uma criatura atinge o ponto médio do salão.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "teste (roubo, dc:28, nome:Estabilizar Parede, características:ação:desabilitar um dispositivo) (treinado) para estabilizar cada parede, ou Dissipar Magia (4º Rank; neutralizar CD 26) para neutralizar cada parede",
      "routine": "(4 ações) Esta armadilha perde 1 ação a cada rodada para cada parede que foi desativada. Cada parede usa 1 ação para bater para frente e para trás rapidamente, golpeando uma criatura no corredor com um Golpe na parede. Ao acertar, o alvo também é derrubado. As paredes distribuem os ataques tão uniformemente quanto possível entre as criaturas no salão, e os Golpes não aplicam a penalidade de ataque múltiplo da armadilha.",
      "reset": "A armadilha é reiniciada após 1 hora.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "Q0howoIf0TfR9YuR": {
          "name": "Perder forma",
          "description": "Gatilho Uma criatura atinge o ponto médio do salão\nEfeito As paredes do salão perdem a rigidez, tornando-se fluidas e elásticas. O salão se torna um terreno difícil, e cada criatura no salão é derrubada, a menos que obtenha sucesso em um teste de resistência (reflexo, dc:26). A armadilha então rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:mother-mitera",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8aff9b3680deed511657f0ba1e97e7f24cd0b1a87c3f7936e5625633fdb05b74",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mãe Mitera",
      "description": "",
      "size": "Médio",
      "senses": {},
      "languages": {
        "common": "comum"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "IWLtNJgGKZE4sql1": {
          "name": "Punhal",
          "damage": "2d4+7 perfurante; 1d6 mental; 1d6 sangramento"
        },
        "wOS1PPw34UfnTuPS": {
          "name": "Punhal",
          "damage": "2d4+7 perfurante; 1d6 mental; 1d6 sangramento"
        }
      },
      "actions": {
        "GTidGY6vXi9cj9yz": {
          "name": "Link de vitalidade cristalina",
          "description": "O poder da ilha liga a vitalidade de Mitera aos seus seguidores. Contanto que qualquer uma das três formações de quartzo esteja intacta, sempre que Mitera sofrer dano, qualquer um de seus seguidores em um raio de 16 quilômetros perderá a mesma quantidade de HP."
        },
        "5n8EB4Rkx3GH7H9F": {
          "name": "A Ascensão está próxima",
          "description": "Frequência uma vez por ritual de ascensão\nEfeito Mitera ativa o link moonflower com seus seguidores. Qualquer seguidor dentro de uma emanação de 9 metros que falhar em seu teste de resistência contra o chá de flor da lua ficará Enjoado 1. Qualquer um que falhar criticamente e não receber um antídoto explode (isto é cerca de metade da congregação de Mitera se os PJs não administrarem o antídoto com sucesso). Se o corpo de alguém explodir, Mitera ganha 30 HP temporários e fica Acelerado por 3 rodadas; ela pode usar esta ação adicional a cada rodada apenas para ações de Golpe e Passo."
        }
      },
      "spellcasting": {
        "nvyRpGOfcTh5qgcI": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "BZ6ImkvcN7tkndVv": {
              "name": "Congelamento"
            },
            "1w9Nr80CFnCiCwmU": {
              "name": "Orientação"
            },
            "LOSt89VL0JGiWlCa": {
              "name": "Curar"
            },
            "swcdboevab9SEqlS": {
              "name": "Luz"
            },
            "XkKmROR7CCzvyCFi": {
              "name": "Mensagem"
            },
            "G95EfCljHVJJi6w5": {
              "name": "Videira Emaranhada"
            },
            "hKvDpjrSwg1EwNKf": {
              "name": "Flora emaranhada"
            },
            "mgH92DEZacVAaFkD": {
              "name": "Um com plantas"
            },
            "5hsi0VsOtAEtsdeO": {
              "name": "Revelando Luz"
            },
            "7RuVy6QQbUz2IEqz": {
              "name": "Relâmpago"
            },
            "p6bLwZ2urt9t45S2": {
              "name": "Capa da Tempestade"
            },
            "zK7vXxc2zDaAlGVA": {
              "name": "Agarrando a Terra"
            },
            "QNKUEg6uwAsEwmwh": {
              "name": "Raízes que drenam a vida"
            },
            "27gvcHsNqsw223ci": {
              "name": "Movimento desenfreado"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:exhaling-portal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b8155988ecc0fbf72fb5e331fe237738581d7f070522a95b5d749948f15197ab",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Portal Exalador",
      "description": "Runas mágicas esculpidas em um batente de porta conectam uma porta ao Plano do Ar quando aberta, soprando criaturas pelo corredor de conexão.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "teste (roubo, dc:30, nome:Arranha Runas, características:ação:desabilitar-um-dispositivo) (especialista) duas vezes para riscar as runas, ou Dissipar Magia (5º Rank; neutralizar CD 30) para neutralizar as runas planares; cheque (atletismo, dc:32, nome:Fechar a porta) para fechar a porta se ela estiver aberta (usar Atletismo apenas interrompe a armadilha, não a desativa totalmente)",
      "routine": "(1 ação) A armadilha usa 1 ação para soprar ventos poderosos pelo corredor. Cada criatura no salão deve tentar um teste de resistência (fortitude, dc:32) com os mesmos resultados de Gust. Se este movimento forçado fizer com que uma criatura colida com um objeto sólido ou caia de uma escada ou de uma janela, aquela criatura sofre um adicional (2d10 + 11 de dano de concussão (ou 20 de dano de concussão devido a uma queda).",
      "reset": "A armadilha é reiniciada quando a porta é fechada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "0l35fQJcnzJb7vMi": {
          "name": "Rajada",
          "description": "Gatilho Uma criatura abre a porta\nEfeito O salão é fustigado por ventos fortes enquanto a porta permanecer aberta. Uma criatura deve ser bem sucedida em um teste (atletismo, dc:32) para se mover em direção à porta. Uma criatura que falhe neste teste é empurrada para trás 5 pés (1,5 metros) e cai propensa.\nAlém disso, a criatura desencadeadora é atingida por uma poderosa rajada de vento e deve tentar um teste de resistência (fortitude, dc:32). A armadilha então rola a iniciativa.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura é empurrada para trás 5 pés (1,5 metros).\nFalha A criatura é empurrada para trás 10 pés (3 metros).\nFalha Crítica A criatura é empurrada para trás 10 pés (3 metros) e derrubada."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:call-of-the-void",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:26e1b9dffc776c19b7b84d7f5137ac9056818b6e5dd7da0de62c732a235251a0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Chamado do Vazio",
      "description": "Uma compulsão sobrenatural de saltar para o desconhecido exerce-se sobre qualquer um que se aproxime da borda.",
      "size": "Médio",
      "stealthDetails": "(especialista) notar uma leve sensação de puxão",
      "disable": "teste (ocultismo, dc:34, nome:Expelir Compulsão Mágica) ou teste (arcano, dc:36, nome:Expelir Compulsão Mágica) para expulsar a compulsão mágica da ilha atual e de qualquer uma das cordas vermelhas diretamente presas a ela, escurecendo a cor da corda. O Eco também desativa automaticamente o perigo de qualquer ilha em que ele esteja, e de qualquer uma das cordas vermelhas diretamente ligadas a ela, quando ele se reconstitui a partir do pensamento naquela ilha.",
      "routine": "(1 ação) O chamado tem como alvo todas as criaturas adjacentes a uma borda ou em uma das cordas vermelhas e puxa suas mentes. Uma criatura que já tenha caído nesta rodada está imune.",
      "reset": "O chamado do vazio persiste enquanto o Eco existir, embora não seja ativado até que o Eco tenha rolado a iniciativa. O perigo é reiniciado a cada dia.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "eA8cwxuJWpDq8jgk": {
          "name": "Salte para o desconhecido",
          "description": "Gatilho Uma criatura entra em um quadrado adjacente à borda de uma ilha ou pisa em uma das cordas vermelhas\nEfeito O chamado do vazio atrai a mente dos intrusos, forçando-os a saltar da borda. A criatura deve ter sucesso em um teste (vontade, dc:34) de resistência ou teste (acrobacia, dc:32, características:ação:equilíbrio) para Equilibrar-se ou então cair da borda. Se a criatura cair, ela cai 100 pés (30 metros), percorre o espaço fechado da paisagem mental e cai no quadrado de onde caiu, sofrendo dano de queda normalmente (geralmente 50 de dano de concussão). O chamado do vazio então rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:thalassophobia-pool",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a3f6b895520612c883c270eedab4cd7776d1c35676c877451b0b2256438d0f18",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Piscina Talassofobia",
      "description": "A piscina suga as criaturas que caem nela, fazendo-as afundar em suas profundezas infinitas.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "verificar (diplomacia, dc:32, nome:Acalmar a Piscina) (mestre) para acabar com o medo e acalmar a piscina ou verificar (intimidação, dc:35, nome:Assustar a Piscina) para dar à piscina algo pior para temer; são necessários três sucessos.",
      "routine": "(3 ações) A ​​água do cálice aumenta a profundidade da água em 10 pés (3 metros) para cada ação. Cada vez que isso acontece, as criaturas na poça são empurradas 10 pés (3 metros) para baixo e sofrem 1d6 de dano de concussão. Como a piscina não tem fundo, as criaturas nela contidas podem cair indefinidamente; eles devem Nadar para evitar o afogamento, mas a água é especialmente agitada, então a CD de Atletismo é verificada (atletismo, cd:25, características:ação:natação). A piscina nunca transborda. Cada teste bem-sucedido para Desabilitar reduz as ações da piscina em 1, e uma vez que a piscina esteja completamente Incapacitada, a água fica parada e a CD de Atletismo para Nadar se torna um teste (atletismo, CC: 10, características: ação: nadar).",
      "reset": "A armadilha é reiniciada quando não há mais criaturas em movimento nela.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "GReYolkvohIlgdbM": {
          "name": "Aguaceiro",
          "description": "Gatilho Uma criatura cai na piscina\nEfeito Mais água jorra do cálice. As criaturas na poça tornam-se Desajeitadas 1 e não podem diminuir sua condição de desajeitado enquanto permanecerem na poça. A armadilha então rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:amalgamite",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c325fd22ce4388a9a1865d4bf164bef3b8d71db546a5870934a0499bea8f7a19",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Amalgamita",
      "description": "A magia de teletransporte pode ser uma tarefa difícil, mesmo para conjuradores experientes. Requer cálculo e tempo precisos, conhecimento do destino pretendido e controle meticuloso sobre o surgimento de magias de conjuração. Um erro, mesmo no mais ínfimo elemento de tal magia, pode levar a resultados desastrosos para os envolvidos. Quando um conjurador particularmente poderoso comete um erro desse tipo, seja por arrogância ou simples erro de julgamento, ele pode se transformar em um amálgama.\nUma massa de carne e membros desalinhados, um amálgama é o corpo deformado de um ex-conjurador, às vezes unido a outra versão de si mesmo para incorporar membros adicionais ou outras irregularidades. Eles ainda estão vivos, mas se tornaram aberrantes mental e fisicamente, com apenas vagas lembranças de sua existência anterior, o que os torna um inimigo perigoso e desconcertante. Sua anatomia estranha e distorcida muda e cresce constantemente, permitindo que as criaturas evitem golpes físicos, exceto aqueles que perfuram sua carne e penetram em seu núcleo.\nO resíduo mágico da criação de um amálgama irradia dele, infiltrando-se e desestabilizando qualquer ser vivo que se aproxime demais. As criaturas infectadas espalham ainda mais a aura do amálgama entre grupos maiores de aliados e inimigos. O amálgama usa esse poder para manipular e confundir seus inimigos, os quais eles podem teletransportar para armadilhas, forçar confrontos com outros inimigos ou aproximar-se do alcance de ataque com seus próprios apêndices estranhos.",
      "size": "Médio",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "controlado",
          "mental"
        ],
        "resistances": [
          "espancamento 10",
          "cortando 10"
        ],
        "weaknesses": [
          "perfurando 10"
        ]
      },
      "attacks": {
        "REbcJzGp6sT7jOuZ": {
          "name": "Membro",
          "damage": "3d10+11 contundente"
        },
        "6Jhrih75LDb7Tovl": {
          "name": "Raio Deformado",
          "damage": "3d8+8 força"
        }
      },
      "actions": {
        "rU17t3NM7TJ3u03o": {
          "name": "Regeneração 10 (desativada por perfuração)",
          "description": ""
        },
        "rGx3BT8mbRKRUpA2": {
          "name": "Campo Desestabilizador",
          "description": "40 pés (12 metros). Uma criatura que começa seu turno dentro da área sente seu corpo começar a se esticar e deve ter sucesso em um teste (fortitude, dc:33) de resistência ou ficará desestabilizada. Uma criatura desestabilizada emite uma aura de campo desestabilizadora de 3 metros e fica Enjoada 1. A desestabilização termina quando a criatura não está mais enjoada. Uma criatura que obtiver sucesso no teste de resistência contra a aura fica temporariamente imune a todos os campos desestabilizadores por 1 minuto."
        },
        "bpvnWZi8sukcfy9H": {
          "name": "Deslocar",
          "description": "Gatilho O amálgama é atingido por um Golpe\nEfeito O amálgama se realoca ou se transpõe com outra criatura. Se o amálgama mudar de local com sucesso, ele e qualquer criatura transposta sofrerão metade do dano do Golpe desencadeador."
        },
        "4oz5vNIBQ0PmHw6p": {
          "name": "Realocar",
          "description": "O amálgama se teletransporta para um espaço desocupado que pode ser visto em 50 pés (15 metros)."
        },
        "XBz2toYQ5LlpBAkp": {
          "name": "Transpor",
          "description": "O amálgama teletransporta até duas criaturas desestabilizadas dentro de 50 pés (15 metros) que elas podem ver. Eles podem mover uma única criatura para um espaço desocupado ou trocar as posições de duas criaturas do mesmo tamanho. Se o amálgama trocar duas criaturas, ele poderá escolher a si mesmo como um alvo. Uma criatura relutante pode tentar um teste de resistência (vontade, dc:33). Se qualquer um dos alvos obtiver sucesso neste teste de resistência, ambos não serão afetados."
        }
      },
      "spellcasting": {
        "NCoWkgKyY8nUdbrO": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "I8ARxfDqb1nGXEGH": {
              "name": "Cintilação"
            },
            "W2u0YOs2X63gtblX": {
              "name": "Mente Distorcida"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:darkside-mirror",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5c9c77031fcfacd828328beb4063d3a89e72bfd60a50cab1b0941395c861f493",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Espelho do Lado Negro",
      "description": "Um espelho mágico substitui personagens por duplicatas de espelhos maliciosos de outra dimensão.",
      "size": "Médio",
      "stealthDetails": "(mestre) perceber que não é um espelho normal",
      "disable": "teste (roubo, dc:34) (lendário) para recuperar uma criatura da outra dimensão dentro de 10 minutos após a troca (possível apenas se sua duplicata de espelho estiver morta), verifique (roubo, dc:39) (mestre) para desabilitar permanentemente o espelho quando todas as duplicatas de espelho estiverem mortas, ou Dissipar Magia (7º Rank; neutralizar CD 32) para neutralizar o espelho por 1 minuto e evitar substituições adicionais durante esse tempo.",
      "routine": "(1 ação) O espelho absorve outra criatura refletida e a substitui por uma duplicata do espelho. Uma duplicata espelhada ataca por sua própria iniciativa, usando as mesmas estatísticas da criatura original, mas odeia todas as outras criaturas não duplicadas. Uma duplicata do espelho pode gastar 3 ações em contato com o espelho para retornar à sua dimensão original e libertar a criatura duplicada.",
      "reset": "O espelho está sempre pronto para absorver criaturas para a outra dimensão. Dez minutos depois de uma criatura ser sugada para dentro do espelho, se um aliado não resgatar a criatura, ela alcançará a outra dimensão. Na dimensão espelhada, conta como uma duplicata espelhada. Essas dimensões são realidades alternativas, não aviões, então mesma magias como Teleporte Interplanar não podem alcançá-las.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "JEXj6WkaqB0iscnL": {
          "name": "Reflexo da Malícia",
          "description": "Gatilho Uma criatura é refletida no espelho\nEfeito O espelho absorve a criatura, substituindo-a por uma duplicata de espelho maliciosa (verifique (reflexo, dc:34) para evitar ser absorvido pelo espelho) e rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:the-morrowkin",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4ae4b42c7e61f6f46585705ef7cdde2c63c2c3ba1372305ee167dc72c2e36324",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "O Morrowkin",
      "description": "",
      "size": "Médio",
      "senses": {},
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "41MourwRyz9uDnd8": {
          "name": "Garra",
          "damage": "3d8 + 14 cortante"
        }
      },
      "actions": {
        "C5zKC61h7GcivnD5": {
          "name": "Nojo de comida",
          "description": "O morrowkin come sonhos e potencial, não comida. Uma criatura que gasta uma ação para brandir comida para o morrowkin automaticamente deixa a criatura Enjoada 1 (ou aumenta seu valor de enjoado em 1, até um máximo de enjoado 6), diminuindo a CA, jogadas de ataque, salvamentos, habilidades e CDs de habilidade do morrowkin de acordo, como normal para a condição enjoada. O morrowkin não consegue vomitar para reduzir sua condição de doença."
        },
        "GufPL7fXAz1R4tFA": {
          "name": "Sem fim",
          "description": "Se reduzido a 0 Pontos de Vida ou incapacitado por mais de algumas rodadas, o morrowkin desaparece. Em 1 minuto, ele reaparece completamente atualizado, como se a batalha anterior nunca tivesse acontecido, com HP cheio, com todos os efeitos apagados e com sua habilidade Swallow Future pronta para ser usada novamente."
        },
        "Vcb2fzxMkjOhWNPz": {
          "name": "Potencial de drenagem",
          "description": "O morrowkin tenta drenar a motivação de seu alvo, que deve tentar um teste de resistência (fortitude, dc:31). Se o alvo falhar, ele será Condenado 1 (Condenado 2 em uma falha crítica) e deverá rolar duas vezes e usar o pior resultado em todos os testes por 1 minuto. Criaturas usando um talismã de esperança não são afetadas."
        },
        "sxD01nPswudJsjzS": {
          "name": "Engula o futuro",
          "description": "Frequência uma vez por minuto\nEfeito O morrowkin inala e extrai os feitos futuros de todas as criaturas ao seu redor. Todas as criaturas dentro de um tipo:emanação de 9 metros do morrowkin sofrem 6d8+18 de dano mental dependendo de seu teste (vontade, dc:39) de resistência. Criaturas usando talismãs de esperança podem optar por deixar seu talismã de esperança quebrar para ignorar o efeito depois de ver o resultado de seu salvamento de Vontade.\nSucesso Crítico A criatura não sofre dano.\nSucesso A criatura sofre metade do dano e está Condenada 1.\nFalha A criatura sofre dano total e está Condenada 2.\nFalha Crítica A criatura sofre o dobro de dano e fica Condenada 4 (provavelmente fazendo com que ela morra imediatamente)."
        },
        "pAa1q5ts9oP6qdky": {
          "name": "Fúria de amanhã",
          "description": "O morrowkin faz ataques com garras contra qualquer número de alvos ao seu alcance. Os ataques de garra contam para a penalidade de ataque múltiplo do morrowkin, mas não aplicam a penalidade até que todos os ataques tenham sido feitos."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:distortion-mirror",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:08a5de53f651d9c438dda19a2d4d83cdf1e0bb943a49cdfad2290e71f88ce93b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Espelho de Distorção",
      "description": "Os espelhos das casas de diversão distorcem o reflexo do observador, remodelando dolorosamente seu corpo para corresponder ao que aparece nas imagens refletidas.",
      "size": "Médio",
      "stealthDetails": "0 para notar o espelho",
      "disable": "teste (roubo, dc:38, nome:Desfigurar o Espelho, características:ação:desabilitar-um-dispositivo) (mestre) para desfigurar o painel do espelho, ou Dissipar Magia (7º Rank; neutralizar CD 36) para dissipar o espelho ou neutralizar a transformação",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 dia.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "rKdbdgqCvS4u8s4L": {
          "name": "Transformação Dolorosa",
          "description": "Gatilho Uma criatura é refletida no espelho\nEfeito O corpo da criatura desencadeadora é dolorosamente esmagado, esticado e distorcido para corresponder ao seu reflexo. A criatura sofre (6d10 + 30 de dano de força e deve tentar um teste de resistência (fortitude, dc:39, características:efeito de dano).\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo sofre metade do dano e fica Desajeitado 1 e Enfraquecido 1 por 1 rodada.\nFalha O alvo sofre dano total e fica Desajeitado 2 e Enfraquecido 2 por 4 rodadas.\nFalha Crítica O alvo sofre o dobro de dano e fica desajeitado 2 e debilitado 2 por 1 minuto. Enquanto a criatura estiver desajeitada ou debilitada, ela sofrerá adicionalmente uma penalidade de status de –3 metros em suas Velocidades.\nQuando os efeitos desta armadilha terminam, a transformação da criatura acionadora termina e seu corpo volta à sua forma natural."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:k-h-w-s-echo",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:64991a0a7ec43b1043d1287e766915f82b074fa9b9d15167a3bc5718ed4c1d62",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Eco de K. H. W.",
      "description": "",
      "size": "Médio",
      "senses": {},
      "languages": {
        "common": "comum",
        "tien": "tien"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "6LPHouUKdhwChveQ": {
          "name": "Dardo de corda",
          "damage": "4d4 + 13 perfurante; 2d6 mental"
        },
        "hwQM6l4pirYi7vuV": {
          "name": "Dardo de corda",
          "damage": "4d4 + 13 perfurante; 2d6 mental"
        }
      },
      "actions": {
        "g86YWdXagoWqk0OQ": {
          "name": "Forma Desestabilizada",
          "description": "Quando o Eco tem menos de 140 Pontos de Vida, sua forma se desestabiliza, grandes pedaços se desintegrando de seu rosto, membros e torso. Mariposas brancas fluem constantemente dos espaços perdidos, criando uma emanação de 3 metros que causa 6d6 de dano mental com um teste (vontade, dc:34, básico, opções:efeito de área).\nEnquanto a aura persistir, ele pode se dissolver em mariposas e se reformar em outro local dentro de 15 pés (4,5 metros) como uma ação livre no início de cada um de seus turnos; isso tem características de ocultismo e teletransporte."
        },
        "p8vS3GT8MXVMDs8P": {
          "name": "Ataque Reativo (Especial)",
          "description": "O Eco atingiu 15 com o propósito de determinar quando o Ataque Reativo é acionado e ao fazer Ataques Reativos."
        },
        "9AePbujsZky8xUjK": {
          "name": "Implemento Spindel Astral",
          "description": "O Eco carrega um fuso que gira constantemente o fio astral vermelho, que é tanto seu instrumento taumatúrgico quanto sua arma. Se seu dardo de corda for perdido ou quebrado, ele poderá reformá-lo com uma ação de Interagir. Se ele obtiver sucesso crítico em um ataque de dardo de corda, pensamentos e invenções avassaladoras fluem pelo fio até a mente do alvo. O alvo fica Confuso por 1 rodada."
        },
        "PSN0OsnaXCyM9qu3": {
          "name": "Controle de Fio Astral",
          "description": "Frequência uma vez por rodada\nRequisitos A ação anterior do Echo foi um ataque de dardo de corda lançado com sucesso\nEfeito O Eco balança seu pulso e dá um golpe de dardo de corda lançado em sequência em um alvo diferente dentro de 30 pés (9 metros) do primeiro alvo, usando a mesma penalidade de ataque múltiplo de seu Golpe anterior. Independentemente de seu ataque acertar, ele recupera a arma."
        },
        "gjGhslPt9ZQSI0yX": {
          "name": "Juramento de Contingência-Nove-Rova",
          "description": "Frequência uma vez por dia\nAcionar O turno do Eco começa e ele fica atordoado, lento, confuso, controlado, imobilizado, agarrado, paralisado, contido ou não pode agir de outra forma\nEfeito O Echo criou inúmeras contingências caso ele seja comprometido. Talismãs em seu corpo se quebram, neutralizando o efeito desencadeador. O Eco pode usar esta ação livre mesmo que não possa agir."
        },
        "crjSzGgHUw6zPIVX": {
          "name": "Reconstituir do Pensamento",
          "description": "Requisitos O Echo está em uma das oito grandes ilhas do mapa, e a ilha não escureceu\nEfeito O Eco lança seu dardo de corda na ilha e o usa para absorver a essência mental da paisagem mental, reparando-se. Ele recupera 45 pontos de vida de cura e a ilha fica cinza dessaturada por 1 dia, evitando absorção futura e desativando o perigo do Chamado do Vazio naquela ilha."
        },
        "vt810lsvoNHLaCNF": {
          "name": "Teia do fuso",
          "description": "O eixo do Echo gira cada vez mais rápido até se tornar um borrão, lançando fios vermelhos em todas as direções. Os fios causam 7d6 de dano cortante a todas as criaturas em uma emanação de 9 metros, com um teste (reflexo, dc:34, básico, opções:efeito de área). Se uma criatura falhar no teste, os fios despertam a âncora da paisagem mental dentro dela, afetando-a de maneira diferente com base na âncora que a criatura usou para obter acesso ao centro da paisagem mental. (Se houver um PJ que não absorveu uma âncora de paisagem mental, por exemplo, porque há mais de quatro PJs no grupo, então use a âncora do PJ mais próximo a eles.)\nO Eco então não pode usar a Teia do Spindle por 1d4.\n• Lanterna A lanterna contorna a criatura com uma Luz Reveladora abrasadora que causa 2d6 de dano de fogo persistente.\n• Espelho O espelho reflete a criatura para outro local, teletransportando-a para um espaço livre dentro de 25 pés (7,5 metros) de sua localização atual.\n• Cálice O cálice drena a força vital, concedendo ao Eco HP temporário igual a metade do dano causado.\n• Tomo O tomo inunda a mente da criatura com informações; o alvo fica lento 1 por 1 rodada."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:sigil-of-deepest-fears",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:bd7001c63f4df2c3645ed6891843365121ba678002f144c542c1743c85493762",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sigilo dos medos mais profundos",
      "description": "Um sigilo arcano força as criaturas a enfrentarem seu maior medo.",
      "size": "Médio",
      "stealthDetails": "(mestre)",
      "disable": "teste (roubo, dc:43, nome:Drenar o Poder do Sigilo, características:ação:desabilitar-um-dispositivo) (mestre) para drenar o poder do sigilo inofensivamente, ou Dissipar Magia (9º Rank; neutralizar CD 42) para neutralizar o sigilo",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 dia.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "mF3Y5psHWHrkB81u": {
          "name": "Enfrente seu medo",
          "description": "Acionamento Uma criatura se move dentro de 10 pés (3 metros) do sigilo\nEfeito Todas as criaturas dentro de 120 pés (36 metros) do sigilo são afetadas por uma magia Fantasmagoria (teste (vontade, dc:40, opções: efeito de área, efeito de dano) salvamento)."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:shrouded-assailant",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6030065c0175cdc6998a2e120d4148b096464b73c24c6a75e04997234b31f77f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Assaltante Encoberto",
      "description": "Um espírito sai de um espelho coberto, arrancando-se e ficando envolto no pano, que revela o espelho. A figura envolta ataca os vivos até que o pano seja arrancado, o que expulsa o espírito sem forma.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "teste (roubo, dc:43, nome:Roubar a Armadura, características:ação:desabilitar-um-dispositivo) (mestre) para roubar a roupa antes que o espírito se manifeste, ou teste (atletismo, dc:47, nome:Tirar a Armadura) para puxar a roupa do espírito depois que ele se manifestar",
      "routine": "(3 ações) O espírito usa 3 ações para Pisar, voar 60 pés (18 metros) ou Golpear, em qualquer ordem. Com um ataque bem sucedido, o alvo do espírito fica Amedrontado 1, e com um sucesso crítico, o alvo fica Amedrontado 2.",
      "reset": "A assombração é reiniciada quando o espelho é coberto novamente.",
      "defenses": {
        "immunities": [],
        "resistances": [
          "dano total 20, exceto força, toque fantasma, espírito, vitalidade"
        ],
        "weaknesses": []
      },
      "actions": {
        "ljtEKeEjWZpLfCLL": {
          "name": "Dom Sudário",
          "description": "Gatilho Uma criatura entra na área\nEfeito O espírito sai do espelho, usando o pano como mortalha e revelando o espelho. A criatura desencadeadora fica Amedrontada 3, a menos que tenha sucesso em um teste (vontade, dc:38) de resistência. A assombração então rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:spirit-window",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:29b5634ef30560a34a51bb5283c8595e112aa4cef9a72e9c1bf21e01f012ca95",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Janela Espiritual",
      "description": "Os espíritos presos dentro de uma janela mal-assombrada prejudicam aqueles que tocam na janela.",
      "size": "Médio",
      "stealthDetails": "",
      "disable": "cheque (ocultismo, dc:48, nome:Liberte os Espíritos) (lendário) para libertar os espíritos do espelho, ou cheque (religião, dc:48, nome:Banir os Espíritos) (lendário) para banir os espíritos",
      "routine": "",
      "reset": "A armadilha é reiniciada após 1 rodada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "2WfGqYcBTEQfIJje": {
          "name": "Alma Sifão",
          "description": "Gatilho Uma criatura toca a janela\nEfeito A criatura desencadeadora sofre 8d10+44 de dano de vazio com um teste (vontade, dc:42, básico) enquanto a janela tenta roubar sua alma. Se esse dano matar o alvo, a alma do alvo fica presa dentro da janela com os efeitos de Seize Soul."
        }
      }
    }
  }
]
