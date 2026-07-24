import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_11_BESTIARY_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sportlebore",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:42e15c4fa402c540c544c89a878bb5263a50f23f62f9bb234748f41e93996f9d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Esportelebore",
      "description": "Um sportlebore se esconde entre os alimentos em um prato de comida ou dentro de um pacote de rações para trilhas.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "Uma criatura que notar o sportlebore pode removê-lo da comida em que está escondido automaticamente como uma ação de Interagir.",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "WleycA2DC7Pz8RYR": {
          "name": "Imitar comida",
          "description": "Gatilho Uma criatura come comida dentro da qual o sportlebore está escondido\nEfeito O sportlebore se multiplica rapidamente no estômago do hospedeiro, expondo o hospedeiro à infestação por sportlebore"
        },
        "nCcx1LK7XrbDnVXI": {
          "name": "Infestação de Sportlebore",
          "description": "Teste de Salvamento (fortitude, dc:22, básico)\nPortador de estágio 1 sem efeito nocivo (1 dia)\nEstágio 2 Enfraquecido 1 (1 hora)\nEstágio 3 Enfraquecido 2 (1 hora)\nEstágio 4 4d6 de dano por concussão (teste (fortitude, dc:25, básico) salvamento) enquanto o hospedeiro vomita dolorosamente um enxame de sportlebore e retorna ao estágio 1"
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:resurrection-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1734ce0d77e33bd560fb2b2779267917209e51e2b8ab05af6fff47b54740435f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão da Ressurreição (Antigo)",
      "description": "Os dragões da ressurreição oscilam entre a vida e a morte. Eles têm domínio das energias vitais, permitindo-lhes restaurar a vida aos mortos, e domínio das energias vazias, para conceder a morte a outros. Eles fazem uso de suas habilidades para brincar com a vida dos mortais, invocando espíritos para ajudá-los ou revivendo criaturas que consideram importantes ou interessantes. O covil de um dragão da ressurreição geralmente é um lugar árido. Embora eles ainda acumulem riquezas como outros dragões, eles pouco fazem para decorar seus covis e os tesouros são geralmente mantidos em nichos escuros, como se o dragão tivesse pouco cuidado com seus bens. No entanto, os dragões da ressurreição tendem a receber fichas daqueles que ressuscitam ou planejam ressuscitar, e estas são mantidas particularmente seguras.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "paralisado",
          "dormir"
        ],
        "resistances": [
          "espírito 20"
        ],
        "weaknesses": []
      },
      "attacks": {
        "I4Fc31lnhp82weCJ": {
          "name": "Maxilas",
          "damage": "3d12+15 perfurante; 1d6 vazio"
        },
        "nPF8Cb7ZRAMjmXSt": {
          "name": "Garra",
          "damage": "3d10+15 cortante"
        },
        "MgM7NXJsmS3NTvsO": {
          "name": "Cauda",
          "damage": "3d12+15 contundente"
        }
      },
      "actions": {
        "NMPK6lhp2OOB6OWm": {
          "name": "Desperte!",
          "description": "Gatilho Uma criatura viva que o dragão da ressurreição pode ver morre\nEfeito O dragão da ressurreição usa energia divina e vital para religar a alma ao seu corpo morto. A criatura voluntária retorna à vida com metade de seu total de Pontos de Vida. Uma criatura pode ser ressuscitada por esta habilidade apenas uma vez."
        },
        "hpxkGqOrHF4syPRM": {
          "name": "Comandante Ressuscitado",
          "description": "Um dragão da ressurreição tem uma forte conexão com seus lacaios e pode Invocar Mortos-Vivos por Sustentação ou Invocar Espíritos como uma ação livre uma vez por turno."
        },
        "SHGSNKhRLCJ5x8DV": {
          "name": "Vida Sifão",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) usa um efeito de cura que restaura pontos de vida\nEfeito O dragão da ressurreição redireciona as energias vitais para longe do efeito, minimizando seu impacto. O efeito desencadeador resulta na quantidade mínima em qualquer jogada de dados para restaurar Pontos de Vida, e quaisquer valores fixos para restaurar Pontos de Vida (como os Pontos de Vida adicionais para um magia de Cura de duas ações) são cortados pela metade. O dragão então ganha 3d8 Pontos de Vida temporários que duram 1 rodada."
        },
        "AVeCp0hrGkLxjYtI": {
          "name": "Surgir!",
          "description": "O dragão da ressurreição usa seu domínio sobre a energia vital para lançar sua própria alma no Boneyard e puxar a alma de uma criatura voluntária de volta ao seu corpo em um processo que leva 1 hora. Isso tem os efeitos de Raise Dead, exceto que o nível máximo do alvo é o 13º e a alma está amarrada à do dragão. Apenas uma criatura pode ser amarrada à alma do dragão por vez. Se a criatura e o dragão não estiverem mais no mesmo plano ou se o dragão morrer, a criatura ressuscitada morre e não pode ser ressuscitada com Arise! de novo. O dragão pode descartar a conexão a qualquer momento. Fazer isso não impede que o dragão crie a criatura com Arise! de novo.\nEmbora ressuscitada dessa maneira, a criatura ainda é um alvo válido para ressuscitar os mortos, ressuscitar e efeitos semelhantes. Retornar a criatura à vida desta forma restaura totalmente a criatura, cortando a conexão com o dragão e permitindo que o dragão estabeleça uma conexão com uma criatura diferente."
        },
        "Zhqu3PdvrWKykPMZ": {
          "name": "Frenesi Dracônico",
          "description": "O dragão dá dois golpes com as garras e um com a cauda em qualquer ordem."
        },
        "WIa9oPm47kC5weT9": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Sugador de Alma sempre que consegue um acerto crítico com um Golpe."
        },
        "t12q6tHImrfj9gBu": {
          "name": "Marionetista Necro",
          "description": "O dragão drena energia para uma criatura morta-viva, uma criatura moribunda ou um cadáver que ele possa ver dentro de 60 pés (18 metros). O dragão move a criatura alvo 30 pés (9 metros) e faz com que ela libere uma onda de energia do vazio em um tipo:emanação de 3 metros, causando 6d8 de dano do vazio (teste de resistência (reflexo, dc:32, básico, opções:efeito de área))."
        },
        "xocggVl34iamkAuY": {
          "name": "Respiração que suga a alma",
          "description": "O dragão libera uma torrente de energia divina, causando 16d6 de dano de vazio em um tipo:cone de 15 metros (teste (fortitude, dc:38, básico, opções:efeito de área) salvamento) que extrai a força vital das criaturas dentro dele. O dragão ganha cura rápida 15 até que seu Sopro Sugador de Almas seja recarregado. O dragão da ressurreição não pode usar a Respiração Sifonadora de Almas novamente por [[/gmr 1d4 #Recarregar Respiração Sifonadora de Almas]]."
        }
      },
      "spellcasting": {
        "tKsTs82dmSyNYScu": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "2Lrt0rRtAiZirise": {
              "name": "Orientação"
            },
            "vhK6W5pvcMuMjGNX": {
              "name": "Estabilizar"
            },
            "Vt5ntcKYFooB3r4j": {
              "name": "Distorção do Vazio"
            },
            "CArRWyh5UaMCs8iE": {
              "name": "Cadáver Falante"
            },
            "bAIgvb81XSjPjIzy": {
              "name": "Ferir"
            },
            "71yzJ4lQ9yU6JrLV": {
              "name": "Invocar Espíritos"
            },
            "Lm7766u7DwCbb0mT": {
              "name": "Ressuscitar Mortos"
            },
            "t2AUpf72SQPiiIxc": {
              "name": "Convocar mortos-vivos (à vontade)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:resurrection-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9b13568420bfbbd06a90786c5cc9451075b06a73e0d1a2810d15581a961815f1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão da Ressurreição (Antigo, Feiticeiro)",
      "description": "Os dragões da ressurreição oscilam entre a vida e a morte. Eles têm domínio das energias vitais, permitindo-lhes restaurar a vida aos mortos, e domínio das energias vazias, para conceder a morte a outros. Eles fazem uso de suas habilidades para brincar com a vida dos mortais, invocando espíritos para ajudá-los ou revivendo criaturas que consideram importantes ou interessantes. O covil de um dragão da ressurreição geralmente é um lugar árido. Embora eles ainda acumulem riquezas como outros dragões, eles pouco fazem para decorar seus covis e os tesouros são geralmente mantidos em nichos escuros, como se o dragão tivesse pouco cuidado com seus bens. No entanto, os dragões da ressurreição tendem a receber fichas daqueles que ressuscitam ou planejam ressuscitar, e estas são mantidas particularmente seguras.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "paralisado",
          "dormir"
        ],
        "resistances": [
          "espírito 20"
        ],
        "weaknesses": []
      },
      "attacks": {
        "I4Fc31lnhp82weCJ": {
          "name": "Maxilas",
          "damage": "3d12+15 perfurante; 1d6 vazio"
        },
        "nPF8Cb7ZRAMjmXSt": {
          "name": "Garra",
          "damage": "3d10+15 cortante"
        },
        "MgM7NXJsmS3NTvsO": {
          "name": "Cauda",
          "damage": "3d12+15 contundente"
        }
      },
      "actions": {
        "NMPK6lhp2OOB6OWm": {
          "name": "Desperte!",
          "description": "Gatilho Uma criatura viva que o dragão da ressurreição pode ver morre\nEfeito O dragão da ressurreição usa energia divina e vital para religar a alma ao seu corpo morto. A criatura voluntária retorna à vida com metade de seu total de Pontos de Vida. Uma criatura pode ser ressuscitada por esta habilidade apenas uma vez."
        },
        "hpxkGqOrHF4syPRM": {
          "name": "Comandante Ressuscitado",
          "description": "Um dragão da ressurreição tem uma forte conexão com seus lacaios e pode Invocar Mortos-Vivos por Sustentação ou Invocar Espíritos como uma ação livre uma vez por turno."
        },
        "SHGSNKhRLCJ5x8DV": {
          "name": "Vida Sifão",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) usa um efeito de cura que restaura pontos de vida\nEfeito O dragão da ressurreição redireciona as energias vitais para longe do efeito, minimizando seu impacto. O efeito desencadeador resulta na quantidade mínima em qualquer jogada de dados para restaurar Pontos de Vida, e quaisquer valores fixos para restaurar Pontos de Vida (como os Pontos de Vida adicionais para um magia de Cura de duas ações) são cortados pela metade. O dragão então ganha 3d8 Pontos de Vida temporários que duram 1 rodada."
        },
        "AVeCp0hrGkLxjYtI": {
          "name": "Surgir!",
          "description": "O dragão da ressurreição usa seu domínio sobre a energia vital para lançar sua própria alma no Boneyard e puxar a alma de uma criatura voluntária de volta ao seu corpo em um processo que leva 1 hora. Isso tem os efeitos de Raise Dead, exceto que o nível máximo do alvo é o 13º e a alma está amarrada à do dragão. Apenas uma criatura pode ser amarrada à alma do dragão por vez. Se a criatura e o dragão não estiverem mais no mesmo plano ou se o dragão morrer, a criatura ressuscitada morre e não pode ser ressuscitada com Arise! de novo. O dragão pode descartar a conexão a qualquer momento. Fazer isso não impede que o dragão crie a criatura com Arise! de novo.\nEmbora ressuscitada dessa maneira, a criatura ainda é um alvo válido para ressuscitar os mortos, ressuscitar e efeitos semelhantes. Retornar a criatura à vida desta forma restaura totalmente a criatura, cortando a conexão com o dragão e permitindo que o dragão estabeleça uma conexão com uma criatura diferente."
        },
        "t12q6tHImrfj9gBu": {
          "name": "Marionetista Necro",
          "description": "O dragão drena energia para uma criatura morta-viva, uma criatura moribunda ou um cadáver que ele possa ver dentro de 60 pés (18 metros). O dragão move a criatura alvo 30 pés (9 metros) e faz com que ela libere uma onda de energia do vazio em um tipo:emanação de 3 metros, causando 6d8 de dano do vazio (teste de resistência (reflexo, dc:32, básico, opções:efeito de área))."
        },
        "xocggVl34iamkAuY": {
          "name": "Respiração que suga a alma",
          "description": "O dragão libera uma torrente de energia divina, causando 16d6 de dano de vazio em um tipo:cone de 15 metros (teste (fortitude, dc:38, básico, opções:efeito de área) salvamento) que extrai a força vital das criaturas dentro dele. O dragão ganha cura rápida 15 até que seu Sopro Sugador de Almas seja recarregado. O dragão da ressurreição não pode usar a Respiração Sifonadora de Almas novamente por [[/gmr 1d4 #Recarregar Respiração Sifonadora de Almas]]."
        }
      },
      "spellcasting": {
        "szmf9rRGIywfSuiY": {
          "name": "magias Divinos Preparados",
          "category": "preparado",
          "spells": {
            "KajTFfrkNkDW6vlx": {
              "name": "Comando"
            },
            "MViW4VoxPEhiAHcR": {
              "name": "Detectar magia"
            },
            "A7PoM8dMhH9DUd7e": {
              "name": "Gavinhas Sombrias"
            },
            "sr5EfYXB4H5B3ZAp": {
              "name": "Orientação"
            },
            "LO9XUNifkn80jB56": {
              "name": "Ferir"
            },
            "ubBQqsaxFVPpQUaF": {
              "name": "Hino Assombroso"
            },
            "ozGnnelWR5O7aVAZ": {
              "name": "Curar"
            },
            "SY2CTBSWAwGpE7g0": {
              "name": "Infundir Vitalidade"
            },
            "jHf899WM252Tj9LH": {
              "name": "Leia aura"
            },
            "lamVW0wYBScRG6eZ": {
              "name": "Estabilizar"
            },
            "anSbCqdW6ATaJO7u": {
              "name": "Convocar Mortos-vivos"
            },
            "ctYhi2hs0ikjDyMx": {
              "name": "Dissipar Magia"
            },
            "lZS5WHoAeldQZsj9": {
              "name": "Sacrifício Final"
            },
            "OjgaFR4DGP0niAl7": {
              "name": "Compartilhe a vida"
            },
            "rFxoSt4WwXkN771q": {
              "name": "Sentido Espiritual"
            },
            "BXry4FFFzVX1Tnlm": {
              "name": "Praga Repentina"
            },
            "TN9v4JzNJHjVUHhj": {
              "name": "Festa Vampírica"
            },
            "EVeHhs0f2JXipgbG": {
              "name": "Cadáver Falante"
            },
            "CMBwJvPyicto0jec": {
              "name": "Invocar Espíritos"
            },
            "MbrtaLhnSHFZj9FI": {
              "name": "Campo da Vida"
            },
            "itJ4Im4HXUgrHsUD": {
              "name": "Ressuscitar Mortos"
            },
            "C60j6dv60tjmbD8S": {
              "name": "Executar"
            },
            "RuT1I6F0P7wQJaPj": {
              "name": "Regenerado"
            },
            "MRPdlF0DTmHOsj8r": {
              "name": "Momento de Renovação"
            }
          }
        },
        "tKsTs82dmSyNYScu": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "2Lrt0rRtAiZirise": {
              "name": "Orientação"
            },
            "vhK6W5pvcMuMjGNX": {
              "name": "Estabilizar"
            },
            "Vt5ntcKYFooB3r4j": {
              "name": "Distorção do Vazio"
            },
            "CArRWyh5UaMCs8iE": {
              "name": "Cadáver Falante (à vontade)"
            },
            "bAIgvb81XSjPjIzy": {
              "name": "Ferir"
            },
            "71yzJ4lQ9yU6JrLV": {
              "name": "Invocar Espíritos"
            },
            "Lm7766u7DwCbb0mT": {
              "name": "Ressuscitar Mortos"
            },
            "t2AUpf72SQPiiIxc": {
              "name": "Convocar mortos-vivos (à vontade)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:coral-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7eac773f155ca447d52539996a12813ad5ac9829e584da9e87430276b62de093",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Coral (Antigo, Feiticeiro)",
      "description": "Os dragões de coral são os guardiões primordiais dos vastos recifes de coral vivos encontrados nos oceanos de Golarion. Mesmo para os padrões dracônicos, os dragões de coral se destacam por sua arrogância e vaidade, ostentando orgulho excessivo nos tons vibrantes de suas próprias escamas incrustadas de corais e no esplendor deslumbrante dos recifes que protegem. Os dragões de coral gostam de decorar seus recifes, que eles consideram como covis, com objetos bonitos, pontilhados com objetos de valor ocasionais, como moedas. Aqueles que buscam o favor de um dragão coral muitas vezes descobrem que a criatura é facilmente influenciada pela bajulação, especialmente quando combinada com presentes brilhantes ou coloridos que complementam a beleza cintilante do dragão e seu domínio subaquático.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "wavesense-imprecise-60": "ondasense-impreciso-60"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [
          "deslumbrado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "OPzELGn6ZKAMLLQ6": {
          "name": "Maxilas",
          "damage": "3d12+17 perfurante"
        },
        "dnY6CWQb134wKiOt": {
          "name": "Garra",
          "damage": "3d8+17 cortante"
        },
        "OY0h3cpcfWVhHPf4": {
          "name": "Cauda",
          "damage": "3d10+17 contundente"
        }
      },
      "actions": {
        "jsLeYfUGQHAMlEI3": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "dhF6fJi6O0G9ZKmt": {
          "name": "Biomineralizar",
          "description": "Gatilho O dragão é atingido criticamente por uma arma corpo a corpo sem alcance ou por um ataque desarmado que causa dano cortante ou perfurante\nEfeito Uma gota de sangue jorra do ferimento do dragão e instantaneamente se calcifica em um galho irregular de coral afiado. O galho de coral empala a criatura desencadeadora, causando 8d6 de dano perfurante (teste (reflexo, dc:38, básico)). A criatura desencadeadora também sofre 1d4 de dano de sangramento persistente em uma falha crítica. Independentemente do resultado, o coral então se desfaz em pó."
        },
        "OWtobT819Yt0FTNY": {
          "name": "Exibição caleidoscópica",
          "description": "90 pés (27 metros). As formações de coral que cobrem o corpo do dragão brilham e cintilam com cores vivas, sobrecarregando os sentidos e forçando qualquer criatura que entre ou inicie seu turno na aura a tentar um teste (fortitude, dc:36, opções:efeito de área,inflige:deslumbrado,inflige:cego) de salvamento. Independentemente do resultado, a criatura fica temporariamente imune à exibição caleidoscópica do dragão por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Deslumbrada por 1 rodada.\nFalha A criatura fica cega por 1 rodada.\nFalha Crítica A criatura fica cega por 1 rodada e deslumbrada por 1 minuto."
        },
        "P4udhPlUFL1dXZ9A": {
          "name": "Reef Bond",
          "description": "Cada dragão coral está misticamente ligado a um único recife de coral vivo. Se o dragão se mover mais de 3 milhas de seu recife, ele ficará Enjoado 1 e incapaz de se recuperar, com o valor de enjoado aumentando em 1 a cada 6 horas, a menos que tenha sucesso em um teste de resistência (fortitude, dc:40). Após 24 horas, o dragão fica Drenado 1; seu valor drenado aumenta em 1 a cada 24 horas.\nSe o recife do dragão sofrer danos significativos, eles imediatamente tomam conhecimento do local onde o recife foi danificado, mas não da fonte ou natureza do dano. Se o recife for completamente destruído, o dragão será morto imediatamente."
        },
        "27lO5hJcHjPjslLT": {
          "name": "Respiração Hidráulica",
          "description": "O dragão exala um jato pressurizado de água que causa 18d6 de dano de concussão em um tipo: linha de 36 metros (teste (reflexo, CC: 38, básico, opções: efeito de área, movimento forçado, inflige: prostrado) salvamento). Criaturas que falham criticamente no teste de Reflexos contra a Respiração Hidráulica são empurradas para trás 10 pés (3 metros) e derrubadas. O dragão não pode usar Sopro Hidráulico novamente por [[/gmr 1d4 #Recarregar Sopro Hidráulico]]."
        },
        "Foxebihcova9nAO9": {
          "name": "Armadura de Recife",
          "description": "Frequência uma vez por dia\nEfeito O dragão se envolve em uma concha de coral protetor, ganhando 50 Pontos de Vida temporários e resistência 10 a danos perfurantes e cortantes até que os Pontos de Vida temporários se esgotem. O efeito dura 1 minuto, até ser destruído ou até o dragão Dispensar o efeito."
        },
        "DrGbBNaXvcBQvYSR": {
          "name": "Fusão de recifes",
          "description": "Frequência uma vez por dia\nRequisitos O dragão coral está em contato físico com o recife vinculado\nEfeito O dragão se funde fisicamente com o recife e desaparece, junto com até oito criaturas voluntárias, em um espaço extradimensional onde não pode afetar nem ser afetado pelo mundo exterior. O efeito dura indefinidamente ou até que o dragão o dispense. Uma vez fundido, o dragão pode gastar 1 minuto viajando e emergindo de qualquer ponto de seu recife a até 16 quilômetros de distância."
        },
        "AvrgY4fX7eFf5LtE": {
          "name": "Impulso aprimorado",
          "description": ""
        }
      },
      "spellcasting": {
        "W2m2P4SmozPmYDkZ": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "MjBddG7oJ1OEUSOX": {
              "name": "Bolha de ar"
            },
            "orJekilBmWUtFhHj": {
              "name": "Criar Água"
            },
            "YgI9apYvqPMdANgg": {
              "name": "Detectar magia"
            },
            "0y5ICJbB2Ozmdks2": {
              "name": "Conheça o caminho"
            },
            "gzQLLQiLjLgXXWFH": {
              "name": "Prestidigitação"
            },
            "5tKRmLH15ugKkpux": {
              "name": "Bico"
            },
            "mDPY81XDQbICRTnW": {
              "name": "Estabilizar"
            },
            "zNchat4MmYeEFUGk": {
              "name": "Vento favorável"
            },
            "EMruWDoHZLVEI1Dh": {
              "name": "Névoa"
            },
            "j53qDZZTUzymGHMs": {
              "name": "Respiração na água"
            },
            "QRiBt2hbx1d1JYA1": {
              "name": "Caminhada Aquática"
            },
            "kjs6INu8fRficPxr": {
              "name": "Orbe Aquoso"
            },
            "AHxHHl181eVmcfBz": {
              "name": "Onda quebrando"
            },
            "a0e7rN9rNqsw1AUs": {
              "name": "Lento"
            },
            "Mmpy7EvzBg2cX4JG": {
              "name": "Torrente Hidráulica"
            },
            "88MElNYmZMb7Mv6e": {
              "name": "Miragem"
            },
            "2jDZEC1VyEmmEnYi": {
              "name": "Forma de Vapor"
            },
            "62FBbSdwtJ0SWAJt": {
              "name": "Casaco Camaleão"
            },
            "Ag22VFyFImHAWa7B": {
              "name": "Controle a água"
            },
            "Dn1uw1GM7qSvamCm": {
              "name": "Maldição do Marinheiro"
            },
            "2S862DaG0P1H1v3F": {
              "name": "Petrificar"
            },
            "y9Ws9AB1QSpoFRZe": {
              "name": "Regenerado"
            },
            "DF2RzilPHpF4Wahk": {
              "name": "Pacote Livre"
            },
            "7P8obsrQezs8uvbO": {
              "name": "Dessecar"
            },
            "SWJRh7LdJD4hoy4O": {
              "name": "Momento de Renovação"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ximtal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e507c5bea734803dd8947c51cde850e8993ce718dfab0b07809a1aded7b0a49c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ximtal",
      "description": "As lutas contra a solidão e a ansiedade que acompanha esse sentimento atormentam muitas criaturas, e os ximtals deleitam-se em explorar esse medo para seu próprio ganho perverso. Aparecendo como híbridos de ratos e caranguejos com tentáculos ávidos, esses demônios intrigantes manipulam suas vítimas por longos períodos de tempo, como os pakalchis, para saborear o máximo de medo que puderem. Ximtals usam sutileza para capturar suas presas e muitas vezes não atacam diretamente seus alvos. Eles usam as inseguranças como uma ferramenta e forçam o mau comportamento dos mortais que visam. Eles preferem concentrar suas maquinações em mortais obstinados e bem-intencionados, na esperança de corroer seu orgulho e valor próprio e, em última análise, levá-los a evitar esforços altruístas.\nEm vez de se concentrar em uma única vítima, um ximtal pode procurar uma causa específica de interesse para os apetites do sahkil. Essas criaturas frequentemente vagam pelo multiverso buscando sabotar cruzadas sociais ou suprimir ideologias divergentes.\nEmbora a maioria dos ximtals trabalhem sozinhos, eles às vezes recorrem à ajuda de pakalchis, que compartilham gostos semelhantes no medo mortal. Juntos e focados, esses dois tipos de demônios podem dissolver a autoestima individual, os relacionamentos e até mesmo organizações inteiras.\nHá muito tempo, quando este ciclo do multiverso ainda era adolescente, uma conspiração de psicopompos que já se sentiam entediados e contidos no seu papel de conduzir as almas ao seu local de descanso final rebelou-se contra a sua posição. Foi essa corrupção do ciclo das almas que gerou os primeiros sahkils.\nAmbivalentes à ordem prescrita do multiverso e rancorosos com os mortais, os sahkils deleitam-se em espalhar medo e desconforto a todos os seres, obstruindo o ciclo metafísico com mortais dominados pela ansiedade e demasiado assustados para alcançar o seu potencial. Esses demônios mudaram drasticamente em relação aos seus dedicados predecessores psicopompos. São criaturas de despeito e tormento, medo e repulsa. Eles exploram os medos mais comuns e raros para sua própria satisfação perversa, e nada mais querem do que assustar os mortais e fazê-los questionar a razão de sua existência.\nA maioria dos sahkils se esconde no Plano Etéreo, mas frequentemente invadem o Plano Material para atormentar os mortais e espalhar o terror. Eles usam sua habilidade inata de deslizar entre os véus do Etéreo e do Material sem esforço, muitas vezes perseguindo seus alvos por dias ou semanas antes de executar seus planos tortuosos.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "diabolic": "diabólico",
        "empyrean": "empíreo",
        "requian": "requian"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 10"
        ]
      },
      "attacks": {
        "AF48h2X3hAjthWZX": {
          "name": "Maxilas",
          "damage": "3d12+17 perfurante; 2d6 espiritual"
        },
        "7cU2Ki9ZUte4XeOY": {
          "name": "Garra",
          "damage": "3d8+17 cortante; 2d6 espiritual"
        }
      },
      "actions": {
        "tYuLpzQVztYcrBmM": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "OU34B5fiyPMmjnXO": {
          "name": "Fácil de ligar",
          "description": "O nível de um ximtal é considerado 2 abaixo para o propósito de ser conjurado pelo ritual do Círculo de Aprisionamento (e potencialmente outros rituais, a critério do Mestre), mas ele está sempre livre para atacar ou sair em vez de negociar, a menos que o teste do conjurador primário seja um sucesso crítico."
        },
        "CK5NsrPLZx91r8av": {
          "name": "magias Constantes",
          "description": ""
        },
        "gpsZOiwpAEi2TKTL": {
          "name": "Despoiler",
          "description": "1000 pés (300 metros). As criaturas dentro da aura sofrem –2 de penalidade de circunstância em todos os testes de resistência contra venenos, doenças e drogas.\nEfeito: Despoiler"
        },
        "fmxx7smV9KEkfRN8": {
          "name": "Isolar inimigos",
          "description": "Frequência uma vez por dia\nEfeito O ximtal tenta isolar os companheiros de seu inimigo, forçando a impressão de que os amigos e aliados de cada criatura desapareceram e estão sozinhos contra uma ameaça intransponível. O ximtal escolhe até quatro criaturas, cada uma das quais deve estar adjacente a um outro alvo. Cada alvo deve tentar um teste de resistência (vontade, dc:38). Em caso de falha, o alvo fica fora de fase com todos os aliados. As criaturas afetadas não podem perceber seus aliados ou interagir com eles de qualquer forma, e podem se mover para os espaços dos aliados como se eles simplesmente não estivessem lá. Da mesma forma, os aliados não podem perceber ou interagir com as criaturas afetadas, com uma exceção: um aliado pode atingir uma criatura afetada com Cleanse Affliction para remover os efeitos. A cada 24 horas, uma criatura afetada pode tentar um novo teste de resistência para encerrar este efeito."
        },
        "89pRruq95QsvuZYX": {
          "name": "Febre Sensorial",
          "description": "Os ataques fulminantes de um ximtal causam uma doença debilitante que atinge os sentidos\nTeste de salvamento (fortitude, dc:36)\nA criatura do estágio 1 perde um sentido determinado aleatoriamente: paladar, olfato, audição ou visão (1 dia)\nA criatura do estágio 2 perde um sentido adicional da lista do estágio 1 (1 dia)\nA criatura do estágio 3 perde um sentido adicional da lista do estágio 1 (1 dia)\nA criatura do estágio 4 perde o último sentido da lista do estágio 1 e quaisquer sentidos especiais, como sentido de tremor ou sentido de vida (1 dia)\nNo estágio 5, todos os sentidos perdidos são permanentes, a menos que sejam restaurados por meio do Sound Body ou de um efeito semelhante."
        },
        "zj5lykgkozQXgCYv": {
          "name": "Pular entre",
          "description": "O sahkil se move do Universo para o Plano Etéreo ou vice-versa. Enquanto estão no Plano Etéreo, eles são incapazes de afetar qualquer coisa no Universo e não podem ser vistos por seres ou habilidades no Universo, a menos que estes tenham uma habilidade que possa olhar para o Plano Etéreo. Enquanto estiver no Plano Material, o inverso é verdadeiro para qualquer coisa no Plano Etéreo. Um sahkil convocado não pode usar Skip Between."
        }
      },
      "spellcasting": {
        "B3PHbeLF2gRQOeiE": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "deqn3ghZ7DGreuEE": {
              "name": "Detectar magia"
            },
            "9CkT3hi0Gg6sbZ9m": {
              "name": "Dessecar"
            },
            "oO5skXG5ftXBZMOy": {
              "name": "Medo (à vontade)"
            },
            "mAnSlmlZdeGck3Z5": {
              "name": "Dilema"
            },
            "tGQoXYsXkBD0QJqW": {
              "name": "Sugestão (à vontade)"
            },
            "mfMQfHlseAniOEDn": {
              "name": "Voar (constante)"
            },
            "vhqkYjS61HJPKQvd": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kadamel",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:dcba190d418c55595d2e8055548717b9a99728e4369718ac0756d8b8db93ae69",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Kadamel",
      "description": "Os demônios espalham a corrupção em todos os lugares dos planos – todos os lugares que podem alcançar. Os Kadamels guardam os caminhos mais importantes e os santuários sagrados. Eles mantêm uma vigília paciente, nunca distraídos de sua tarefa. Mais importante ainda, eles vigiam os portais planares, impedindo a passagem de todas as defesas, exceto as mais poderosas. Quando encontrados, esses arcontes falam e reagem pouco. Eles raramente se movem ou reagem, embora aceitem prontamente qualquer ajuda para derrotar invasores fenícios. Mesmo isso, eles aceitam apenas com um aceno sinistro.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "utopian": "utópico"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo"
        ],
        "resistances": [],
        "weaknesses": [
          "profano 15"
        ]
      },
      "attacks": {
        "52OgLjC1xlgRtKS8": {
          "name": "Machado de Pedra",
          "damage": "3d10+15 cortante; 2d12 eletricidade"
        },
        "Hu9HG4NrRIBbcEPg": {
          "name": "Machado de Pedra",
          "damage": "3d10+15 cortante; 2d12 eletricidade"
        }
      },
      "actions": {
        "GzPQqwg1lc90FiFL": {
          "name": "Escudo de Pedra",
          "description": "O kadamel pode criar um escudo de pedra para defesa, que concede +2 de bônus de circunstância à CA e tem Dureza 15, HP 120 e BT 60."
        },
        "YcmMuTVDMlGyehbN": {
          "name": "Visão Geral",
          "description": ""
        },
        "gLpBcRyze5jaQR3x": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "TkUzxf9ya6Oqy96g": {
          "name": "Proteção do Arconte",
          "description": "Acionamento Um inimigo causa dano ao aliado do arconte e ambos estão dentro de 15 pés (4,5 metros) do arconte\nEfeito O aliado ganha resistência 20 a todos os danos contra o dano desencadeador, e o arconte pode desferir um Golpe contra o inimigo.\nEfeito: Proteção do Arconte"
        },
        "daXutD2J6MIsWA1H": {
          "name": "Paciência de Pedra",
          "description": "10 pés (3 metros). Qualquer inimigo que termine seu turno na aura deve ter sucesso em um teste (fortitude, dc:36, opções:efeito de área,infligir:lentidão) no salvamento ou sofrerá Lentidão 1 por 1 minuto. Se a criatura tiver sucesso, ela ficará temporariamente imune por 24 horas."
        },
        "rORsP64sPWT0bP8l": {
          "name": "Bloco de Escudo",
          "description": ""
        },
        "hrNpW5vBm1YlAgA4": {
          "name": "Nuvem Calcificante",
          "description": "Requisitos O kadamel atingiu com um golpe de machado de pedra durante sua ação mais recente\nEfeito O machado do kadamel explode em pó calcificante. A criatura atingida pelo machado e cada criatura não-arconte em um tipo: emanação de 1,5 metro devem ter sucesso em um teste (fortitude, CC: 38, opções: efeito de área, infligir: lentidão, infligir: petrificado) no salvamento ou ficarão Retardados 1 por 1 minuto. Se a criatura já foi retardada por uma das habilidades do Kadamel, uma falha na resistência faz com que ela fique petrificada permanentemente."
        },
        "GBMBMc3ptaAPJPqr": {
          "name": "Glifo Guardião",
          "description": "Frequência uma vez por dia\nEfeito O kadamel altera as inscrições em seu corpo para armazenar um magia do 8º Rank, escolhendo entre Decreto Divino, Imolação Divina, Ira Divina ou Selo Planar. Ao armazenar o magia, o kadamel escolhe uma área que está guardando, normalmente uma sala contendo um portal planar. Quando um intruso entra na área, o magia é lançado automaticamente e gasto. Se a mágica for direcionada, ela terá como alvo a criatura desencadeadora e, se tiver uma área, a área será centralizada na criatura desencadeadora. Perceber o glifo requer um teste bem-sucedido (percepção, dc:38). O glifo tem duração ilimitada e termina se o kadamel usar essa habilidade novamente ou dispensar o glifo."
        },
        "anx0Mh6T878Ca0zi": {
          "name": "Rearmar",
          "description": "O kadamel forma um novo machado de pedra ou escudo de pedra com a mão livre"
        },
        "Fwzhj2ueizrjBGiJ": {
          "name": "Estátua",
          "description": "Até a próxima vez que agirem, o kadamel parece ser uma estátua. Eles têm um resultado automático de 50 em testes de Enganação e CDs para se passarem por estátuas. Enquanto permanece imóvel desta forma, o kadamel tem cura rápida 20."
        }
      },
      "spellcasting": {
        "MiaL4Ts2r5HTX7E4": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "g3lXoOiPVZQbwh2i": {
              "name": "Luz"
            },
            "1bOv4CoSGkGYOMzu": {
              "name": "Translocar (à vontade)"
            },
            "abOJxa2Oy1f4XqTa": {
              "name": "Fronteira Abençoada"
            },
            "VOXROsKKBKwygHmI": {
              "name": "Teletransporte Interplanar"
            },
            "HqSXBbNYjbyFMaaS": {
              "name": "Amarração Planar"
            },
            "jkHfmsFGGvgZY9t5": {
              "name": "Selo Planar"
            },
            "HAbUUKwQPx6xRBsg": {
              "name": "Visão Verdadeira (Constante)"
            },
            "Znlp4T2gmNHvHHYN": {
              "name": "Truespeech (constante)"
            },
            "k1z19JPq8aurOFYy": {
              "name": "Véu de Privacidade (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phasmadaemon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:54bbb17b80e733522c19f872906a0208e3df63bb0f0ef09f4cc5c3e7dc67c82b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fasmadaemon",
      "description": "Os horríveis phasmadaemons fazem uso de ilusões e de suas próprias aparências assustadoras (a de serpentes com caudas ósseas, crânios de crocodilianos com chifres no lugar de cabeças e várias pinças de inseto) para causar medo nos corações dos outros. Eles representam mortes provocadas pelo medo. Em última análise, qualquer tipo de medo pode levar à criação de um phasmadaemon, mas uma alma que se transforma em tal demônio deve rapidamente encontrar outros medos para se alimentar e construir sua própria força. Sem a nutrição do medo humano, o phasmadaemon recém-nascido começa a definhar, eventualmente “morrendo” e tornando-se a quintessência planar. Apenas os phasmadaemons mais inteligentes e capazes sobrevivem à fome inicial, aprendendo como atacar até mesmo as almas mais corajosas.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
        "daemonic": "demoníaco"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "efeitos do medo"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "mAgs54KfKOGCX0su": {
          "name": "Maxilas",
          "damage": "3d10+19 perfurante"
        },
        "YIwPQWP7YuFAa73b": {
          "name": "Garra",
          "damage": "3d8+19 cortante"
        }
      },
      "actions": {
        "mZ7xTP9hQa2Ol0JR": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "cFfZrAZTt2J9XqLs": {
          "name": "magias Constantes",
          "description": ""
        },
        "fABPf8ocjTyx8gpJ": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "osNdvwv5r9amDfjr": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:35, opções:efeito de área,inflige:assustado)"
        },
        "9sgT96Y5W35hJXLZ": {
          "name": "Terror sem fim",
          "description": "Fugir do medo perto de um phasmadaemon não é uma tarefa simples. As criaturas não reduzem automaticamente sua condição de Assustado enquanto estiverem dentro da aura de Presença Aterrorizante do phasmadaemon. Em vez disso, eles devem tentar um salvamento de Vontade no final do turno contra a CD do efeito que causou a condição. Se obtiver sucesso, a condição de assustado da criatura é reduzida em 1."
        },
        "pXAdWYUV5VQxQGEs": {
          "name": "Contrair",
          "description": "(3d10+9)[concussão], teste (fortitude, dc:35, básico)"
        },
        "yVkFmFVbB6g9Iyno": {
          "name": "Consumir Medo",
          "description": "Requisitos O phasmadaemon tem uma criatura Agarrada ou Restringida\nEfeito O phasmadaemon se alimenta da mortalidade e do terror inato da criatura, causando 6d8 de dano mental. A criatura deve tentar um teste de resistência (vontade, dc:38).\nSucesso Crítico A criatura não sofre dano e consegue se libertar do Agarrão do phasmadaemon.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total e aumenta seu condicionamento de Assustado em 1, até um máximo de Amedrontado 4.\nFalha Crítica A criatura sofre o dobro de dano e aumenta sua condição de assustada em 2, até um máximo de assustada 4. Se a criatura já estiver assustada 4, ela deve tentar um teste de resistência (fortitude, dc:38). Se falhar, ele será reduzido a 0 Pontos de Vida e morrerá. Este efeito possui características de morte e incapacitação."
        },
        "0FXMcfinGX0dztEM": {
          "name": "Forma Inescapável",
          "description": "O phasmadaemon pode se espremer em espaços apertados como se fosse uma criatura pequena. Enquanto aperta, ele pode se mover em velocidade máxima. O phasmadaemon pode até mesmo Espremer através de espaços que normalmente cabem apenas em uma criatura Minúscula, mas o faz na velocidade padrão para Espremer."
        },
        "tMkt2eYm6UhxBsoX": {
          "name": "Rasgar",
          "description": "Garra"
        },
        "vh2ymbYqQ3pbRq4B": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "bGv7AwfTXpXCsBRX": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "bACA0Q4axetDjm52": {
              "name": "Pesadelo (à vontade)"
            },
            "QGwqew7WFUDrQbJQ": {
              "name": "Translocar (à vontade)"
            },
            "LNaQdElwCt7cR4lL": {
              "name": "Explosão de Sombra"
            },
            "K6l6Ad5tJaNtNzDw": {
              "name": "Translocar"
            },
            "aK6I3Ya94r5vV9ML": {
              "name": "Explosão de Sombra"
            },
            "BvzTdot3iy8v5yE1": {
              "name": "Explosão de Sombra"
            },
            "K4N7ZtunQPipVw7P": {
              "name": "Visão da Morte"
            },
            "oA1PsMH59QQTRCEw": {
              "name": "Máscara do Terror"
            },
            "9KdpeXGhqIpkfBJY": {
              "name": "Inimigo duplicado"
            },
            "4933UV3lza9uV60F": {
              "name": "Fantasmagoria"
            },
            "FezflIkbobJhPBDA": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:coral-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ba9d3ab8cbd6c1c446c5e8fa75c752194755f21cd6d20a311c85d14d82ad5388",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Coral (Antigo)",
      "description": "Os dragões de coral são os guardiões primordiais dos vastos recifes de coral vivos encontrados nos oceanos de Golarion. Mesmo para os padrões dracônicos, os dragões de coral se destacam por sua arrogância e vaidade, ostentando orgulho excessivo nos tons vibrantes de suas próprias escamas incrustadas de corais e no esplendor deslumbrante dos recifes que protegem. Os dragões de coral gostam de decorar seus recifes, que eles consideram como covis, com objetos bonitos, pontilhados com objetos de valor ocasionais, como moedas. Aqueles que buscam o favor de um dragão coral muitas vezes descobrem que a criatura é facilmente influenciada pela bajulação, especialmente quando combinada com presentes brilhantes ou coloridos que complementam a beleza cintilante do dragão e seu domínio subaquático.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "wavesense-imprecise-60": "ondasense-impreciso-60"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [
          "deslumbrado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "OPzELGn6ZKAMLLQ6": {
          "name": "Maxilas",
          "damage": "3d12+17 perfurante"
        },
        "dnY6CWQb134wKiOt": {
          "name": "Garra",
          "damage": "3d8+17 cortante"
        },
        "OY0h3cpcfWVhHPf4": {
          "name": "Cauda",
          "damage": "3d10+17 contundente"
        }
      },
      "actions": {
        "Yiei1c0o3eTFwLUa": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "dhF6fJi6O0G9ZKmt": {
          "name": "Biomineralizar",
          "description": "Gatilho O dragão é atingido criticamente por uma arma corpo a corpo sem alcance ou por um ataque desarmado que causa dano cortante ou perfurante\nEfeito Uma gota de sangue jorra do ferimento do dragão e instantaneamente se calcifica em um galho irregular de coral afiado. O galho de coral empala a criatura desencadeadora, causando 8d6 de dano perfurante (teste (reflexo, dc:38, básico)). A criatura desencadeadora também sofre 1d4 de dano de sangramento persistente em uma falha crítica. Independentemente do resultado, o coral então se desfaz em pó."
        },
        "Vwzh2ZT18smQFh7V": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "OWtobT819Yt0FTNY": {
          "name": "Exibição caleidoscópica",
          "description": "90 pés (27 metros). As formações de coral que cobrem o corpo do dragão brilham e cintilam com cores vivas, sobrecarregando os sentidos e forçando qualquer criatura que entre ou inicie seu turno na aura a tentar um teste (fortitude, dc:36, opções:efeito de área,inflige:deslumbrado,inflige:cego) de salvamento. Independentemente do resultado, a criatura fica temporariamente imune à exibição caleidoscópica do dragão por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Deslumbrada por 1 rodada.\nFalha A criatura fica cega por 1 rodada.\nFalha Crítica A criatura fica cega por 1 rodada e deslumbrada por 1 minuto."
        },
        "P4udhPlUFL1dXZ9A": {
          "name": "Reef Bond",
          "description": "Cada dragão coral está misticamente ligado a um único recife de coral vivo. Se o dragão se mover mais de 3 milhas de seu recife, ele ficará Enjoado 1 e incapaz de se recuperar, com o valor de enjoado aumentando em 1 a cada 6 horas, a menos que tenha sucesso em um teste de resistência (fortitude, dc:40). Após 24 horas, o dragão fica Drenado 1; seu valor drenado aumenta em 1 a cada 24 horas.\nSe o recife do dragão sofrer danos significativos, eles imediatamente tomam conhecimento do local onde o recife foi danificado, mas não da fonte ou natureza do dano. Se o recife for completamente destruído, o dragão será morto imediatamente."
        },
        "hqcT43pkMnsO31x0": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega sua Respiração Hidráulica sempre que consegue um acerto crítico com um Golpe."
        },
        "27lO5hJcHjPjslLT": {
          "name": "Respiração Hidráulica",
          "description": "O dragão exala um jato pressurizado de água que causa 18d6 de dano de concussão em um tipo: linha de 36 metros (teste (reflexo, CC: 38, básico, opções: efeito de área, movimento forçado, inflige: prostrado) salvamento). Criaturas que falham criticamente no teste de Reflexos contra a Respiração Hidráulica são empurradas para trás 10 pés (3 metros) e derrubadas. O dragão não pode usar Sopro Hidráulico novamente por [[/gmr 1d4 #Recarregar Sopro Hidráulico]]."
        },
        "fI9l9alXTyrPjxOo": {
          "name": "Armadura de Recife",
          "description": "Frequência uma vez por dia\nEfeito O dragão se envolve em uma concha de coral protetor, ganhando 50 Pontos de Vida temporários e resistência 10 a danos perfurantes e cortantes até que os Pontos de Vida temporários se esgotem. O efeito dura 1 minuto, até ser destruído ou até o dragão Dispensar o efeito."
        },
        "DrGbBNaXvcBQvYSR": {
          "name": "Fusão de recifes",
          "description": "Frequência uma vez por dia\nRequisitos O dragão coral está em contato físico com o recife vinculado\nEfeito O dragão se funde fisicamente com o recife e desaparece, junto com até oito criaturas voluntárias, em um espaço extradimensional onde não pode afetar nem ser afetado pelo mundo exterior. O efeito dura indefinidamente ou até que o dragão o dispense. Uma vez fundido, o dragão pode gastar 1 minuto viajando e emergindo de qualquer ponto de seu recife a até 16 quilômetros de distância."
        },
        "OZLuQyz46ZEwHaYh": {
          "name": "Nocaute aprimorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ninkonda",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9388cd129bdc86e07e7f99da20c80d6030507cb5b653d67431843ee5b0114a3b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ninkonda",
      "description": "Quando mortais outrora honrados caem na maldade e cometem atrocidades terríveis, Ninkondas decidem localizá-los. Vestidos com uma armadura de placas que apresenta um espelho brilhante no peito e com pontas e pregos cravados em seus corpos, os ninkondas servem como caçadores de forças celestiais. No entanto, em vez de matar imediatamente suas presas, os ninkondas fazem o possível para encorajar uma mudança de opinião e promover uma eventual redenção em seus alvos. Ninkondas usam seus espelhos para refletir os pecados do alvo e mostrar o estado de sua alma, e muitos alvos procuram mudar após vislumbrar esse reflexo. Aqueles que não o fazem logo se vêem enfrentando o poder silencioso de seu caçador.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-30": "visão verdadeira-30"
      },
      "languages": {
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "profano 15"
        ]
      },
      "attacks": {
        "6iNuw4E8JzhNWIg3": {
          "name": "Punho Pregado",
          "damage": "2d8 perfurante; 2d6+17 contundente"
        },
        "VfMjb0JfXxAHI6ky": {
          "name": "Explosão de unhas",
          "damage": "3d8+8 perfurante; 2d8 sangramento"
        }
      },
      "actions": {
        "IMrhT7ZTCCE5wbK3": {
          "name": "Aura de Reflexão",
          "description": "60 pés (18 metros). O espelho do ninkonda reflete as fraquezas das almas das criaturas. Uma criatura que entra ou inicia seu turno na aura deve ser bem sucedida em um teste (vontade, dc:36, opções:efeito de área,infligir:deslumbrado) ou ficará Deslumbrada e sofrerá -2 de penalidade nos testes de Vontade contra as habilidades do ninkonda por 1 rodada.\nEfeito: Aura de Reflexão"
        },
        "L4e2qN0vXu0ZekxT": {
          "name": "Ataque reativo",
          "description": ""
        },
        "f8pZew4jc9KVpmrS": {
          "name": "magia de Refleto",
          "description": "Gatilho O ninkonda é alvo de um ataque mágico à distância\nEfeito O ninkonda tenta refletir o magia com o espelho em sua armadura. Eles ganham um bônus de circunstância de +4 na CA contra o ataque desencadeador. Se o ataque falhar, o magia é refletido de volta ao lançador, que deve lançar um segundo ataque de magia à distância contra sua própria CA para determinar se o magia o atinge."
        },
        "15m85YW5E3xihSjQ": {
          "name": "Barragem de Pregos",
          "description": "O ninkonda lança uma massa de pregos que causam 14d8 de dano perfurante em um tipo:emanação de 6 metros com um teste de resistência (reflexo, dc:38, básico, opções:efeito de área). Eles não podem usar Nail Barrage novamente para [[/gmr 1d4 #Recharge Nail Barrage]]."
        },
        "RC9Ywa7wvr7GzLsT": {
          "name": "Reflexão da Alma",
          "description": "O ninkonda aponta o espelho em sua armadura para uma criatura Deslumbrada por sua aura de reflexo para forçar a criatura a contemplar seus pecados passados. A criatura deve ter sucesso em um teste de resistência (irá, dc:38) ou ficará Lentidão 1 por 1 rodada conforme ela reflete sobre suas ações (ou 1 minuto em caso de falha crítica, já que as ações da criatura continuam a pesar sobre ela). Uma criatura sagrada ou uma criatura moralmente correta (conforme determinado pelo Mestre) usa o resultado que é um grau de sucesso melhor do que o obtido no teste de resistência. Uma criatura que falhar no teste fica temporariamente imune a Soul Refection por 1 minuto."
        }
      },
      "spellcasting": {
        "HgFkJLcacV4e3Va3": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "f8Mp3Wxqjx04LZpz": {
              "name": "Lança Divina"
            },
            "lXCJUzn2enOooCVw": {
              "name": "Luz"
            },
            "y01mR7biGS3IgfMx": {
              "name": "Anel da Verdade (à vontade)"
            },
            "BQSXikSMv4sCiTvm": {
              "name": "Fala Verdadeira"
            },
            "gl10uoLC25hFO3Eq": {
              "name": "Visão Verdadeira (Constante)"
            },
            "GASMwuOc08s2QbDx": {
              "name": "Truespeech (constante)"
            },
            "ZbXHNP4xP2wV3vui": {
              "name": "Teletransporte Interplanar (somente para si)"
            },
            "9O8nd5uA87MFD1EL": {
              "name": "Identificar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vaspercham",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f84030711f322ecb0dc3e9d32959772abd1121b04be9c3ff9c3bf3f27d5b762e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Vaspercham",
      "description": "Vasperchams são horrores aquáticos que se deleitam com a violência, espreitando nas águas rasas perto da costa. Uma vez que um vaspercham se instala em uma casa, eles permanecem lá teimosamente, independentemente de quaisquer comunidades que morem nas proximidades. O poder físico e as habilidades de deformação mágica de um vaspercham tornam-no incrivelmente difícil de desalojar uma vez entrincheirados. Os Vasperchams respondem apenas à força, então é preciso vencê-los em combate para obter sua cooperação relutante. Mas uma vez que um vaspercham recupere sua força, ele inevitavelmente trairá qualquer aliança temporária.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "see-invisibility": "ver-invisibilidade"
      },
      "languages": {
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "frio 10",
          "eletricidade 10"
        ],
        "weaknesses": [
          "fogo 15"
        ]
      },
      "attacks": {
        "wzbVzgCl8Ejv0s18": {
          "name": "Tentáculo",
          "damage": "3d10+16 contundente"
        },
        "drqzKqFXOw70bPmE": {
          "name": "Explosão de água",
          "damage": "2d8+16 contundente"
        }
      },
      "actions": {
        "7BpL9qbiSLI8Fp6k": {
          "name": "magias Constantes",
          "description": ""
        },
        "auspxEF3QavdLLBP": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "Fd8Zr9WjpFqLtgVz": {
          "name": "Aura de Deformação Mágica",
          "description": "30 pés (9 metros). A concha de um vaspercham distorce a magia próxima. Qualquer criatura na aura que Conjurar um magia deve tentar um teste (fará, dc:37) de salvamento.\nSucesso Crítico O magia não é afetado e o lançador fica temporariamente imune à aura de distorção mágica por 1 minuto.\nSucesso A magia não é afetada, mas se a magia permitir um teste de resistência, o vaspercham ganha um bônus de circunstância de +1 para resistência contra ela.\nFalha Se o magia tiver um alvo e houver um ou mais alvos viáveis ​​dentro do seu alcance, o alvo do magia muda, determinado aleatoriamente pelo Mestre. Se não houver outro alvo possível dentro do alcance ou se a magia não tiver alvo, a magia será interrompida.\nFalha Crítica Em vez disso, o lançador Conjura outro magia, escolhendo aleatoriamente de seu repertório de magias, magias preparados ou magias de foco disponíveis (conforme apropriado) e selecionando quaisquer alvos aleatoriamente."
        },
        "UatiISk7rst9v1bD": {
          "name": "Salmoura Alucinatória",
          "description": "Uma criatura atingida pelos Golpes do vaspercham ou pela Maré Deformante Mental deve tentar um teste de resistência (fortitude, dc:38). Em caso de falha, a criatura é dominada por visões fantasmagóricas, ficando Confusa por 1 rodada (1 minuto em caso de falha crítica)."
        },
        "pQNTOJ37q0yg6EkQ": {
          "name": "Maré distorcida",
          "description": "O vaspercham libera um derrame de água nociva de sua concha. Criaturas dentro de um tipo: emanação de 4,5 metros devem se proteger contra a salmoura alucinatória do vaspercham."
        },
        "jrrylK7A3Yr4alC7": {
          "name": "Chicoteando Tentáculos",
          "description": "O vaspercham faz quatro golpes de tentáculos, cada um contra um alvo diferente. Esses ataques contam para a penalidade de ataque múltiplo do vaspercham, mas a penalidade de ataque múltiplo não aumenta até que o vaspercham realize todos os seus ataques."
        }
      },
      "spellcasting": {
        "xcWPp5PiZiT28mlA": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "FgWm0D6J046GOf3J": {
              "name": "Controle a água (à vontade)"
            },
            "8sz3adTjUoBrx4gq": {
              "name": "magia"
            },
            "M6jLg7HBK2BRWpNp": {
              "name": "Regenerado"
            },
            "UIdrHtM1AixVpQWf": {
              "name": "Veja o Invisível (Constante)"
            },
            "w60iNJG9t0jMelt9": {
              "name": "Relâmpago"
            },
            "5pDdIXOgnZp1M6RW": {
              "name": "Dissipando Globo"
            },
            "4C05GQZLjkLd6yhQ": {
              "name": "Nevasca uivante"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:radiant-warden",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1c44cc7f6be7ff4b25c1600db7967277d93e6c1ebf39561d700b5175f7fb5aa6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Guardião Radiante",
      "description": "Os enigmáticos e estranhos guardas radiantes foram construídos há milhares de anos para proteger observatórios e estudiosos contra a incursão de agressores alienígenas do Domínio dos Negros. Com o tempo, seus papéis como guardiões se expandiram para incluir a vigilância de qualquer região onde as leis do tempo e do espaço se desgastaram, especialmente perto de portais e portões permanentes entre planetas, planos ou dimensões.\nNomeados tanto pela natureza radial dos anéis concêntricos que compõem seus corpos quanto pelo brilho radiante de seus ataques, os guardas radiantes cumprem suas ordens, defendendo locais de invasões com um propósito obstinado.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [
          "mentais 15",
          "físico 15 exceto adamantino"
        ],
        "weaknesses": []
      },
      "attacks": {
        "Hjc58tHW1YMAxSZK": {
          "name": "Martelo",
          "damage": "3d12+15 contundente"
        },
        "lNgVZToQWNyd1cHl": {
          "name": "Feixe Radiante",
          "damage": "4d10+6 força"
        }
      },
      "actions": {
        "qNpcWI6cg5eouBeq": {
          "name": "Aura do Guardião",
          "description": "60 pés (18 metros). Uma criatura que usa uma habilidade de teletransporte dentro da emanação da aura ou entra nela através de uma habilidade de teletransporte deve ter sucesso em um teste (vontade, dc:38, opções:efeito de área,infligir:enjoado) salvar ou ficará Enjoado 1 e terá seu destino alterado para um ponto à escolha do diretor radiante dentro da aura. Se obtiver sucesso, a criatura chega como planejado, mas ainda fica doente 1."
        },
        "HtqQsx42P5qDV39A": {
          "name": "Planetário",
          "description": "Até que aja, o diretor radiante parece ser um planetário (ou uma grande engenhoca mecânica semelhante, como um telescópio). Ela tem um resultado automático de 53 em testes de Enganação e CDs para passar de forma convincente como tal máquina."
        },
        "8Nk4QrVg754PVlCV": {
          "name": "Explosão Radiante",
          "description": "O diretor radiante libera um tipo: cone de energia brilhante de 15 metros que causa 10d12 de dano de força (teste (reflexo, CC: 38, básico, opções: efeito de área)). O diretor radiante não pode usar Radiant Blast para [[/gmr 1d4 #Recharge Radiant Blast]]."
        },
        "I2rtFgA7ashRozwk": {
          "name": "Golpe Radiante",
          "description": "Quando uma criatura é atingida pelo golpe do martelo do diretor radiante, um flash de energia radiante tenta ancorar a criatura no lugar. A criatura deve tentar um teste de resistência (vontade, dc:38, opções:infligir:cego); em caso de falha, a criatura não pode usar nenhum efeito de teletransporte por 1 minuto. Em caso de falha crítica, a criatura também fica permanentemente cega."
        }
      },
      "spellcasting": {
        "QQcPmR7zBk9Qn2oX": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "Tf5kSstwd6TEIMpV": {
              "name": "Translocar (à vontade)"
            },
            "eUxvxzWuTNLyHCiP": {
              "name": "Selo Planar"
            },
            "G812LYgoPAPUTb5r": {
              "name": "Muralha da Força"
            },
            "9inXJxQnBoZxIcWR": {
              "name": "Transposição Coletiva"
            },
            "Ff7bYFayNBpe8sXp": {
              "name": "Identificar"
            },
            "HBj4CHsCw9iGRu0o": {
              "name": "Teleporte"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:deimavigga",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:481db363fbf8c12151691a2d3e847908ae5ca49be06727fef2a5057b2f7f5db6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Deimavigga",
      "description": "Como mestres da lógica fria e calculada e do proselitismo perfeitamente cronometrado, os repugnantes deimaviggas procuram colocar amigo contra amigo e desviar os fiéis de suas crenças em todas as oportunidades. Suas ferramentas mais comuns são o ego mortal e o desespero. Aqueles que ocupam posições elevadas ou são ambiciosos na sua fé são atraídos para o auto-engrandecimento até que vejam a si próprios em primeiro lugar e a sua divindade e clero em segundo. Aqueles propensos à dúvida ou à dor de cabeça ficam isolados, pois o deimavigga interrompe seus magias divinos e enfraquece sua fé.\nExistem inúmeras legiões de demônios legais nas nove camadas do Inferno, guerreando contra os planos celestiais e vasculhando o Plano Material em busca de almas para corromper.",
      "size": "Médio",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "fogo"
        ],
        "resistances": [
          "físico 15 exceto prata"
        ],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "xUovRSHL0ImgkXwW": {
          "name": "Garra",
          "damage": "3d8+18 cortante"
        }
      },
      "actions": {
        "vrYCafAUKL8c1AqG": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "iSb0ggfBLG0UH0a0": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "RfnALQOTvViQPec5": {
          "name": "+4 de bônus na percepção para sentir o motivo",
          "description": ""
        },
        "AKn4Oke8VMoU85yk": {
          "name": "Oração Indomável",
          "description": "Qualquer criatura capaz de compreender a fala entende o deimavigga, como se falasse constantemente em todas as línguas ao mesmo tempo."
        },
        "vGPorxL6swyKt73y": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "cyqkRqwp35f8CtAJ": {
          "name": "Sussurros de discórdia",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) é alvo de um magia que restauraria Pontos de Vida ou forneceria um bônus de status (o deimavigga reconhece automaticamente tais efeitos)\nEfeito O deimavigga sussurra mentiras perturbadoras, audíveis apenas para o alvo, para abalar a fé do alvo no lançador do magia. O alvo deve tentar um teste de resistência (vontade, dc:38).\nSucesso Crítico O alvo não acredita nas mentiras e recebe o benefício pretendido da magia; o alvo fica temporariamente imune a Sussurros da Discórdia por 24 horas.\nSucesso Como sucesso crítico, mas o alvo não está temporariamente imune.\nFalha A magia não consegue afetar o alvo. O alvo recusa toda ajuda daquele conjurador por 1 rodada e não conta como aliado do conjurador.\nFalha Crítica Como falha, mas a duração é de 1 minuto."
        },
        "Fk0okw5jh318HfC0": {
          "name": "Alcance ilimitado",
          "description": "As garras afiadas de um deimavigga podem cortar a realidade, permitindo-lhes fazer ataques de garras e usar magias com alcance de toque contra qualquer criatura que possam ver diretamente ou por meio de magia. Uma criatura alvo desta forma pode retaliar até o início do próximo turno do deimavigga; ele pode atingir as garras do diabo como se o diabo estivesse fisicamente presente e adjacente ao alvo, embora as garras estejam ocultas."
        },
        "vjjTR5hrPf5pDmGk": {
          "name": "Alterar forma",
          "description": "O deimavigga pode assumir a aparência de qualquer humanóide. Isso não altera sua velocidade ou bônus de ataque e dano com golpes, mas pode alterar o tipo de dano que seus golpes causam (normalmente para concussão)."
        },
        "LrGPFAVrLLeOkRJj": {
          "name": "Verme de ouvido sussurrante",
          "description": "O deimavigga sussurra uma terrível verdade multiversal para uma criatura adjacente, abalando sua fé na realidade e na divindade. O alvo deve tentar um teste de resistência (vontade, dc:38). Celestiais e demônios ganham +2 de bônus de status neste teste.\nSucesso Crítico O alvo não é afetado e fica temporariamente imune ao Whisper Earworm por 24 horas.\nSucesso O alvo não é afetado.\nFalha Na próxima vez que o alvo descansar, ele ruminará sobre as palavras do deimavigga em vez de dormir ou descansar e acordará Fatigado. O alvo também fica Drenado 1 e Estupefato 1 até não estar mais cansado.\nFalha Crítica Como falha, mas Drenado 2. Após esse descanso, o alvo deve tentar outro teste de salvamento (vontade, dc:38). Em caso de falha, o alvo fica Estupefato 2 e sofre –4 de penalidade de status nos testes de Vontade contra efeitos de criaturas profanas. Esses efeitos duram até que o alvo desaprende a verdade dita pelo deimavigga, exigindo um magia Reescrever Memória, outros meios de modificar sua memória ou magia poderosa, como um ritual de Desejo.\nEfeito: Whisper Earworm (Falha Crítica)"
        }
      },
      "spellcasting": {
        "ocaP6LaliHuaCU2C": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "kycAUAYz8r93C0rh": {
              "name": "Mensagem de sonho (à vontade)"
            },
            "c7YpC1Ci4OMIRnBv": {
              "name": "Translocar (à vontade)"
            },
            "oouqd15CTcFX0aG1": {
              "name": "Disfarce Ilusório"
            },
            "pZv6rsGlTUq8kBna": {
              "name": "Vidência"
            },
            "RihYX3cP67J9yWkR": {
              "name": "Estupefaça (à vontade)"
            },
            "3zFMZCBt4olio0o7": {
              "name": "Translocar"
            },
            "yvQzm7VO7AAHiLQL": {
              "name": "Mente Distorcida"
            },
            "qvXVB3A4zd7I77XB": {
              "name": "Decreto Divino"
            },
            "Lhuv3WNAEMk0TbbT": {
              "name": "Dominar"
            },
            "LrGNMndnfZN9X3Nf": {
              "name": "Cena Ilusória"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:eseneth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:89e92cdb925ebb7e0b13f00b8fcb265c3cca6389536d6d16390afd0984699a6b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Eseneth",
      "description": "Eseneths, comumente conhecidos como costuradores de almas, são cirurgiões imparciais que reparam almas danificadas. Eles operam com eficiência profissional, manifestando grandes agulhas de costura compostas de energia espiritual para realizar o trabalho necessário. Um eseneth aparece como um humanóide magro, sem pêlos, de pele cinza e sem características faciais. Manchas de carne escura e saliente pontilham a parte superior do peito e dos ombros.\nMuitos psicopompos estão intimamente envolvidos com a enorme burocracia do Boneyard. Poucos buscam misericórdia, justiça ou ganho pessoal; seus deveres para com Pharasma e seu Boneyard são supremos. No entanto, os psicopompos individuais interpretam seus deveres de maneiras diferentes, o que pode colocá-los em conflito com os mortais ou mesmo entre si.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-120": "sentido de vida-120"
      },
      "languages": {
        "chthonian": "chthoniano",
        "diabolic": "diabólico",
        "empyrean": "empíreo",
        "requian": "requian"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença"
        ],
        "resistances": [
          "veneno 15",
          "nulo 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "Eg2Adq54lq90U6gF": {
          "name": "Agulha Espiritual",
          "damage": "3d10+14 perfurante"
        },
        "FgQr9udZ1295hNZ3": {
          "name": "Agulha Espiritual",
          "damage": "3d10+14 perfurante"
        }
      },
      "actions": {
        "Bnk1kYVLPXkeGjla": {
          "name": "Lifesense 120 pés (36 metros)",
          "description": ""
        },
        "OseXGVFGFvhKRUWb": {
          "name": "magias Constantes",
          "description": ""
        },
        "2cx2PQA7lix3P8oo": {
          "name": "Consertar Alma",
          "description": "Frequência uma vez por rodada\nEfeito O eseneth restaura 25 HP de cura para si mesmo ou para uma criatura incorpórea que ele tenha agarrado."
        },
        "HURkm00g5oujRpFn": {
          "name": "Aproveite a alma",
          "description": "Requisitos O eseneth tem uma criatura corpórea Agarrada ou Restringida\nEfeito O eseneth tenta arrancar a alma da criatura requerida. O eseneth tenta um teste de Atletismo contra a CD de Fortitude do alvo.\nSucesso Crítico O eseneth agarra a alma do alvo. O corpo é liberado e fica paralisado por 2 rodadas. Quando o corpo deixa de estar paralisado, sua alma retorna instantaneamente e o alvo acorda. A alma – capturada pelo eseneth – é incorpórea, é Invisível, tem uma Velocidade de voo igual à Velocidade da criatura e, fora isso, tem todas as mesmas estatísticas. Ele não pode atacar, lançar magias ou tentar qualquer teste de perícia que exija um corpo físico além dos testes de Fuga (CD 38), e deve sempre manter a linha de efeito com seu corpo.\nSucesso Como sucesso crítico, mas a paralisia termina após 1 rodada.\nFalha O alvo permanece agarrado ou contido, mas sua alma permanece em seu corpo.\nFalha Crítica O alvo não está mais agarrado ou contido."
        },
        "L1Bx8YGunhWmzUhS": {
          "name": "Toque de pastor",
          "description": "Os Golpes de Eseneth afetam criaturas incorpóreas com os efeitos de uma runa de propriedade Toque Fantasma e causam 2d6 de dano de vazio a criaturas vivas e 2d6 de dano de vitalidade a mortos-vivos."
        },
        "YY5wQP6SvaLjjpZK": {
          "name": "Destruir Alma",
          "description": "Frequência uma vez por rodada\nRequisitos O eseneth tem uma criatura incorpórea agarrada ou contida\nEfeito O eseneth causa (3d10+14)[força] de dano à criatura necessária."
        },
        "KxtuVKre78DIfkgK": {
          "name": "Aperto Espiritual",
          "description": "Um eseneth pode agarrar criaturas incorpóreas apesar de ser corpóreo. O eseneth usa Atletismo para agarrar criaturas incorpóreas normalmente, mas não pode usar Atletismo para outras ações contra criaturas incorpóreas, como Empurrar ou Trip."
        },
        "gm5IV41NyjW38Y7O": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "jsZmimnHZ0Fb3dFD": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "hhn9TPlE4G033rH6": {
              "name": "Invisibilidade (à vontade, somente para si mesmo)"
            },
            "pGpSixuPq9eT1fTt": {
              "name": "Translocar (à vontade)"
            },
            "1Os5JLH8fn88E3n0": {
              "name": "Movimento irrestrito (constante)"
            },
            "mYVZrvc4OzJGwhnW": {
              "name": "Explosão Espiritual"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:despair-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ad893a3509b10339a002626b848f1398c1058e81bb9a092393d7ec270daf3501",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão do Desespero (Antigo)",
      "description": "O medo é uma das emoções mais poderosas, e os dragões do desespero são mestres em canalizar esses sentimentos de terror e desesperança para seu próprio benefício. Tal como acontece com outros dragões ocultos, os dragões do desespero são movidos por uma compulsão inata, no caso deles, o desejo de causar terror nos outros. Dragões do desespero tendem a se estabelecer perto de assentamentos, então eles têm uma fonte de medo para se inspirar. Os itens mais comuns nos tesouros dos dragões desesperados são pergaminhos, tomos e relíquias que servem como material de pesquisa. Através deles, os dragões do desespero aprendem sobre o folclore local, lendas urbanas e muito mais para melhor assombrar seus alvos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "mq904JVyNxtmFV4X": {
          "name": "Maxilas",
          "damage": "3d12+20 perfurante"
        },
        "SYPLTHqAQmYgxKer": {
          "name": "Garras",
          "damage": "3d10+20 cortante"
        },
        "17WZ0S8ST7vMcthy": {
          "name": "Cauda",
          "damage": "3d8+18 contundente"
        }
      },
      "actions": {
        "zU9nOUxSthPhZozR": {
          "name": "Telepatia 90 pés (27 metros)",
          "description": ""
        },
        "LQtS71i0MUK191tk": {
          "name": "Sentido do Medo",
          "description": "O dragão sente todas as criaturas com a condição assustada no alcance listado."
        },
        "0urWxnGpb1Pz0gP8": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "ogo4m8E85pSwAqbt": {
          "name": "Consumir Medo",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) perde a condição de assustado\nEfeito O dragão se deleita com o medo que deixa o corpo da criatura desencadeadora, ganhando 7d8 Pontos de Vida temporários que duram 1 minuto."
        },
        "gEfh2JBGmxpYDpno": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:40, opções:efeito de área,inflige:assustado)"
        },
        "jguPXubA9RRMJmGr": {
          "name": "Pensamentos não solicitados",
          "description": "Gatilho O dragão é atingido criticamente por uma arma ou ataque desarmado\nEfeito A mente do atacante se enche de visões de seus piores medos que dominam seus sentidos, e ele deve escolher um dos seguintes resultados: ou o ataque desencadeador torna-se um sucesso normal, ou o acerto crítico não é afetado, mas a criatura desencadeadora fica Amedrontada 2."
        },
        "tFsdlv6jCbltJ3u3": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "JzeDzMLmHSZ7TFVn": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Gritante sempre que consegue um acerto crítico com um Golpe."
        },
        "oFMxWaLY4skr3wjR": {
          "name": "Olhe atrás de você",
          "description": "Acionar O dragão se esconde com sucesso de uma criatura dentro de 90 pés (27 metros)\nEfeito O dragão se teletransporta para um espaço diretamente atrás da criatura alvo. O dragão é imediatamente detectado, a menos que a posição escolhida tenha cobertura ou outro meio de permanecer Oculto."
        },
        "XaV9EbmhjP3b8nYt": {
          "name": "Respiração Gritante",
          "description": "O dragão solta um som cacofônico feito de cada grito que o dragão extraiu de um inimigo aterrorizado, causando 17d6 de dano sônico em um salvamento de tipo:cone de 15 metros (teste (vontade, dc:40, básico, opções:efeito de área)). As criaturas que falharem no teste de Vontade devem passar a primeira ação do próximo turno sem fazer nada além de gritar. O dragão não pode usar Sopro Gritante novamente por [[/gmr 1d4 #Recarregar Sopro Gritante]]."
        },
        "IgQebS6T9lTVTa9g": {
          "name": "Chamariz de língua",
          "description": "O dragão do desespero infla várias bexigas na ponta da língua para criar a forma básica de uma criatura. Este processo leva 1 minuto para ser concluído, durante o qual o dragão fica fora de guarda. Se o dragão parar ou for interrompido neste processo, as bexigas esvaziam e o dragão deve recomeçar. Assim que o processo for concluído, o dragão pode manter as bexigas infladas indefinidamente e pode dispensar para esvaziar as bexigas e retrair sua língua instantaneamente.\nA língua inflada assume a forma básica de um animal ou humanóide e pode ser inflada para ser Pequena ou Média. A forma lembra a silhueta geral de uma criatura, embora uma inspeção mais detalhada e sucesso em um teste (percepção, dc:30) possam determinar a verdadeira natureza da língua. Enquanto inflado, o dragão pode enviar sua voz através da isca, embora manter sua língua inflada torne difícil falar, fazendo com que o dragão sofra -4 de penalidade de circunstância em quaisquer testes relacionados à fala, como testes de Enganação para Mentir.\nA língua do dragão pode se estender até 90 pés (27 metros) do corpo do dragão e pode estender totalmente a língua como parte do processo de inflar as bexigas. O dragão pode mover a parte inflada de sua língua até 15 pés (4,5 metros) de cada vez com uma ação, que possui as características concentrar, manipular e mover. Enquanto estendida, a extremidade inflada da língua ocupa espaço como uma criatura de tamanho apropriado, mas o resto da língua não impede ou bloqueia o movimento de forma alguma. O cheiro do dragão funciona através dos cílios na ponta da língua, mas fora isso o dragão não tem como saber o que está perto de sua língua.\nAtacar a língua é o mesmo que atacar o dragão, exceto que a língua está sempre fora de guarda. Se a língua sofrer algum dano, ela murcha imediatamente e permanece para fora. O dragão permanece desprevenido enquanto sua língua estiver para fora, mas o dragão pode retrair sua língua com duas ações consecutivas de Interação. Se a língua sofrer dano, o dragão não poderá usar sua isca de língua novamente por 1 dia."
        }
      },
      "spellcasting": {
        "2WgNRvMvvtQdUMc5": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "BREqjedSaVUlCdCL": {
              "name": "Truespeech (constante)"
            },
            "W27gXnK1HHLVBUYt": {
              "name": "Medo (à vontade)"
            },
            "BdFDFCote9xdad5D": {
              "name": "Onda de Desespero"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:urveth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:06a038a7f2f71660d704c12d4b04ec9f38145b80d861edc07a0255b0b88d9336",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Urveth",
      "description": "Um urveth é um enorme terror escavador de quatro braços, com um corpo semelhante a um verme e uma boca aberta que devora tudo o que pode. Urveths escavam profundamente no subsolo para se esconder do sol, emergindo sob o manto da escuridão para matar e consumir.\nDarvakkas, também chamados de nightshades, são um mal voraz composto de partes iguais de escuridão e malícia. Originalmente criaturas dos Planos Exteriores que viajam para a convergência do Plano das Sombras e do Vazio – onde o poder do nada os destrói – essas abominações mortas-vivas são a personificação física da entropia. Eles queimam com um ódio intenso por toda a vida, trabalhando para trazer uma noite final e escura ao Plano Material, onde nada resta além de cinzas e gelo.\nComo criaturas distorcidas pela escuridão e pelas sombras, os darvakkas têm uma grande aversão à luz solar e a todas as fontes de energia vital. No Plano Material, eles passam as horas da luz do dia escondidos abaixo do solo, em meio a ruínas, ou submersos nas profundezas dos abismos mais escuros do oceano, além do alcance dos raios solares, emergindo quando a escuridão os protege acima.\nDarvakkas têm uma aura de entropia que atrai escravos mortos-vivos para servirem como guerreiros e arautos. Eles raramente buscam alianças entre si ou com outras criaturas, existindo na solidão como chefes de exércitos individuais de mortos.",
      "size": "Imenso",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "lifesense-60": "sentido de vida-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "diabolic": "diabólico",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença",
          "paralisado",
          "tóxico",
          "inconsciente",
          "sangrar"
        ],
        "resistances": [
          "frio 15"
        ],
        "weaknesses": [
          "santo 15",
          "prata 15"
        ]
      },
      "attacks": {
        "es9ibq62fqcl30pn": {
          "name": "Maxilas",
          "damage": "3d10+14 cortante; 2d10 frio"
        },
        "p3fyg7e66y8gq61g": {
          "name": "Garra",
          "damage": "3d6+14 cortante; 2d10 frio"
        },
        "1y7qe4eff55izld8": {
          "name": "Ferrão",
          "damage": "3d6+14 perfurante; 2d10 frio"
        }
      },
      "actions": {
        "a0e3JLzKlammUKQN": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "zg7Z1iRkgMeZ4dln": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "IeIZXKmchA7BgVL3": {
          "name": "Lifesense 60 pés (18 metros)",
          "description": ""
        },
        "c0cED5WAyOCC6wwV": {
          "name": "magias Constantes",
          "description": ""
        },
        "f55now7bu1g173vg": {
          "name": "Sombra da Entropia",
          "description": "60 pés (18 metros). Urveths vazam entropia e corrupção de seu próprio ser. Uma criatura viva que entra ou inicia seu turno na aura sofre 5d6 de dano de vazio com um teste (fortitude, dc:38, básico). Se falhar, também é Enfraquecido 1 por 1 minuto e puxado 10 pés (3 metros) em direção ao Urveth."
        },
        "3QjbF2vO8TMt8aUt": {
          "name": "Ataque reativo",
          "description": "Apenas garra. Um urveth ganha 3 reações extras a cada rodada, que só podem ser usadas para realizar Ataques Reativos."
        },
        "43rtpaawc0hyjxs2": {
          "name": "Impotência à luz solar",
          "description": "Um urveth capturado pela luz solar fica Atordoado 2 e Desajeitado 2."
        },
        "P7FUCg0CYhhrSYXp": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "H9XeL3LQ06KgkEE1": {
          "name": "Frenesi",
          "description": "O urveth desfere dois golpes de garra e um golpe de ferrão em qualquer ordem."
        },
        "dIjjf4Tqor8DWWHu": {
          "name": "Engula inteiro",
          "description": "Enorme, (2d10+5)[espancamento], Ruptura 35\nUma criatura viva que termina seu turno engolida inteira por um urveth torna-se Drenada 1 ou aumenta sua condição drenada em 1, e o urveth ganha 10 Pontos de Vida temporários. Uma criatura cuja condição drenada aumenta para 5 desta forma morre."
        },
        "266u1f6h9sli518d": {
          "name": "Veneno de Urveth",
          "description": "Teste de salvamento (fortitude, dc:37)\nDuração Máxima 6 rodadas\nEstágio 1 3d6 dano vazio] (1 rodada)\nEstágio 2 3d6 de dano vazio] e Enfraquecido 2 (1 rodada)\nEstágio 3 3d6 de dano vazio] e Enfraquecido 4 (1 rodada)"
        },
        "DyODtsSqvxOCAjTD": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "Yv49fZ7FOxFBIwPP": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "vIj3tpNmmkyj6gZJ": {
              "name": "Detectar magia"
            },
            "YPP8yxLHuW6dBk3A": {
              "name": "Escuridão (à vontade)"
            },
            "EnlzUbGagNisi8kc": {
              "name": "Explosão de Eclipse"
            },
            "SNMKCPwnj2TgJsVv": {
              "name": "Teletransporte Interplanar (somente para o Universo, Vazio ou Submundo)"
            },
            "0jCZ6yhd1GVqTb8m": {
              "name": "Visão Verdadeira"
            },
            "EdWcUGG4FLEKqJxo": {
              "name": "Ferir"
            },
            "IJB57vOyZxNyssuR": {
              "name": "Voar (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phase-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b939f1ecf0c61b3f5360dd9db6a715d21f8fa91b2fec556458d76d098b780ccd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Fase (Antigo)",
      "description": "Nenhum lugar pode conter um dragão de fase ou mesmo manter seu interesse por muito tempo; sua conexão arcana inata os liga à magia de teletransporte e reposicionamento. Exploradores e estudiosos, os dragões de fase se movem à vontade, descobrindo novos locais e os segredos misteriosos do teletransporte. Eles freqüentemente estabelecem vários covis em lugares distantes que visitam repetidamente. Além da riqueza típica encontrada em covis, os dragões de fase tendem a manter itens de valor sentimental em suas viagens, como uma flor particularmente rara da região ou uma peça de um artista local.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "imobilizado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "hwVTHE65N85DrHL2": {
          "name": "Maxilas",
          "damage": "3d12+12 perfurante"
        },
        "KudDtuUSae43oIRA": {
          "name": "Garra",
          "damage": "3d8+12 cortante"
        },
        "ukNVJkk1tnyP3Vs7": {
          "name": "Cauda",
          "damage": "3d10+12 contundente"
        }
      },
      "actions": {
        "JF2Uc2JjaJccnY8l": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "Y2kAReDuNOZUARtX": {
          "name": "Xô!",
          "description": "Acionar Um inimigo dentro de 15 pés (4,5 metros) causa dano ao dragão\nEfeito O dragão teletransporta a criatura até 35 pés (10,5 metros). O destino deve ser no solo e em um espaço sem perigos."
        },
        "XxJKecC13F9ZMVC0": {
          "name": "Localização infalível",
          "description": "O dragão tenta automaticamente neutralizar qualquer efeito de teletransporte que o atinja (neutralizar Rank 9º, neutralizar modificador [[/r 1d20+32 #Counteract]]). O dragão pode escolher ser afetado normalmente. Outras criaturas alvo do mesmo efeito permanecem afetadas normalmente."
        },
        "xvkd6bkDrndweeuM": {
          "name": "Barragem Piscando",
          "description": "O dragão canaliza toda a sua habilidade de teletransporte em uma notável série de golpes. O dragão se teletransporta até 60 pés (18 metros) para um espaço adjacente a uma criatura e desfere um Golpe de garra contra aquela criatura. O dragão pode fazer isso até quatro vezes, teletransportando-se para uma criatura diferente a cada vez. Cada ataque conta para sua penalidade de ataque múltiplo, mas a penalidade não aumenta até que todos os ataques tenham sido feitos. O dragão não pode realizar ações com a característica teletransporte novamente até o final do próximo turno."
        },
        "z6zrzAGUnQzvtxt2": {
          "name": "Respiração Deslocante",
          "description": "O dragão exala um redemoinho de energia que separa as criaturas, causando 17d6 de dano de força em um salvamento do tipo:cone de 15 metros (teste (reflexo, dc:40, básico, opções:efeito de área)). O dragão pode teletransportar qualquer criatura que falhe no teste de resistência, teletransportando-a até 50 pés (15 metros) (ou o dobro em caso de falha crítica) em qualquer direção. O destino deve ser no solo e em um espaço sem perigos. O dragão não pode usar Sopro Dislocante novamente por [[/gmr 1d4 #Recharge Dislocating Breath]]."
        },
        "O6kyu3EStwpikOKy": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "VlzllOaXXNnvU4jJ": {
          "name": "Momento Dracônico",
          "description": "Sempre que acerta um golpe crítico com um Golpe, o dragão escolhe entre recarregar Dislocating Breath ou recuperar um magia de teletransporte gasto."
        },
        "DR5DVel5zxSC5osK": {
          "name": "Salto de Fase",
          "description": "Frequência uma vez por rodada\nEfeito O dragão se teletransporta até 75 pés (22,5 metros). Se estiverem no ar, eles mantêm seu impulso e não caem no final do turno, mesmo que não tenham usado uma ação para Voar."
        },
        "urfhl0ShllPM8lPS": {
          "name": "Ataque do Portal",
          "description": "O dragão abre momentaneamente um pequeno portal e dá um golpe de garra contra uma criatura dentro de 90 pés (27 metros). O alvo está desprevenido para o ataque."
        }
      },
      "spellcasting": {
        "qH04eSMfzZOzMeXE": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "QbcvybUu3KKlRX29": {
              "name": "Detectar magia"
            },
            "2iRhf5JAH4ahbNbQ": {
              "name": "Conheça o Caminho (Constante)"
            },
            "PV8VRLRdLIgjW4cc": {
              "name": "Leia aura"
            },
            "o2p2js0hQnXgWrbQ": {
              "name": "Cintilação"
            },
            "lRB9F7iRqsq7qOuT": {
              "name": "Amarração Planar"
            },
            "BD2nNYaIt8DdSnwL": {
              "name": "Translocar (à vontade)"
            },
            "KYFpPg8ROHgzuv8f": {
              "name": "Translocar"
            },
            "KotFZYRmB3SQKd98": {
              "name": "Teleporte"
            },
            "uXEJcyP95LbuGtWk": {
              "name": "Teletransporte Interplanar"
            },
            "XNOi31ntupEdSto1": {
              "name": "Selo Planar"
            },
            "qlGv3qzCqyOEOxwT": {
              "name": "Dilema"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phase-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9e163cc5b8e5c7b7754e24dbd969db02aff590ca32d79499c326052a0a9789b1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Fase (Antigo, Feiticeiro)",
      "description": "Nenhum lugar pode conter um dragão de fase ou mesmo manter seu interesse por muito tempo; sua conexão arcana inata os liga à magia de teletransporte e reposicionamento. Exploradores e estudiosos, os dragões de fase se movem à vontade, descobrindo novos locais e os segredos misteriosos do teletransporte. Eles freqüentemente estabelecem vários covis em lugares distantes que visitam repetidamente. Além da riqueza típica encontrada em covis, os dragões de fase tendem a manter itens de valor sentimental em suas viagens, como uma flor particularmente rara da região ou uma peça de um artista local.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "imobilizado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "hwVTHE65N85DrHL2": {
          "name": "Maxilas",
          "damage": "3d12+12 perfurante"
        },
        "KudDtuUSae43oIRA": {
          "name": "Garra",
          "damage": "3d8+12 cortante"
        },
        "ukNVJkk1tnyP3Vs7": {
          "name": "Cauda",
          "damage": "3d10+12 contundente"
        }
      },
      "actions": {
        "JF2Uc2JjaJccnY8l": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "Y2kAReDuNOZUARtX": {
          "name": "Xô!",
          "description": "Acionar Um inimigo dentro de 15 pés (4,5 metros) causa dano ao dragão\nEfeito O dragão teletransporta a criatura até 35 pés (10,5 metros). O destino deve ser no solo e em um espaço sem perigos."
        },
        "XxJKecC13F9ZMVC0": {
          "name": "Localização infalível",
          "description": "O dragão tenta automaticamente neutralizar qualquer efeito de teletransporte que o atinja (neutralizar Rank 9º, neutralizar modificador [[/r 1d20+32 #Counteract]]). O dragão pode escolher ser afetado normalmente. Outras criaturas alvo do mesmo efeito permanecem afetadas normalmente."
        },
        "xvkd6bkDrndweeuM": {
          "name": "Barragem Piscando",
          "description": "O dragão canaliza toda a sua habilidade de teletransporte em uma notável série de golpes. O dragão se teletransporta até 60 pés (18 metros) para um espaço adjacente a uma criatura e desfere um Golpe de garra contra aquela criatura. O dragão pode fazer isso até quatro vezes, teletransportando-se para uma criatura diferente a cada vez. Cada ataque conta para sua penalidade de ataque múltiplo, mas a penalidade não aumenta até que todos os ataques tenham sido feitos. O dragão não pode realizar ações com a característica teletransporte novamente até o final do próximo turno."
        },
        "z6zrzAGUnQzvtxt2": {
          "name": "Respiração Deslocante",
          "description": "O dragão exala um redemoinho de energia que separa as criaturas, causando 17d6 de dano de força em um salvamento do tipo:cone de 15 metros (teste (reflexo, dc:40, básico, opções:efeito de área)). O dragão pode teletransportar qualquer criatura que falhe no teste de resistência, teletransportando-a até 50 pés (15 metros) (ou o dobro em caso de falha crítica) em qualquer direção. O destino deve ser no solo e em um espaço sem perigos. O dragão não pode usar Sopro Dislocante novamente por [[/gmr 1d4 #Recharge Dislocating Breath]]."
        },
        "DR5DVel5zxSC5osK": {
          "name": "Salto de Fase",
          "description": "Frequência uma vez por rodada\nEfeito O dragão se teletransporta até 75 pés (22,5 metros). Se estiverem no ar, eles mantêm seu impulso e não caem no final do turno, mesmo que não tenham usado uma ação para Voar."
        },
        "urfhl0ShllPM8lPS": {
          "name": "Ataque do Portal",
          "description": "O dragão abre momentaneamente um pequeno portal e dá um golpe de garra contra uma criatura dentro de 90 pés (27 metros). O alvo está desprevenido para o ataque."
        }
      },
      "spellcasting": {
        "zs8F4fATLIzqtu8O": {
          "name": "magias Arcanos Preparados",
          "category": "preparado",
          "spells": {
            "C6JeilJpxIl2mgZr": {
              "name": "Transporte de formigas"
            },
            "ydJjbvAodnLdQJ0L": {
              "name": "Detectar magia"
            },
            "kkP9yce8k1YYiL6k": {
              "name": "Invenção"
            },
            "oyV2MAJJsSXf6OTc": {
              "name": "Barragem de Força"
            },
            "WlHZhF4n4UEb6vx8": {
              "name": "Mensagem"
            },
            "hvcbzQm2IN8jnOSI": {
              "name": "Leia aura"
            },
            "4CNBXNmUfeWTawzY": {
              "name": "Vento favorável"
            },
            "DB66dnNV18eKwpfv": {
              "name": "Projétil Telecinético"
            },
            "USVNvE3GWgzC49eG": {
              "name": "Borrão"
            },
            "GqXB1pqZrLxlNjmM": {
              "name": "Dissipar Magia"
            },
            "LUjIzizabp1KMEJJ": {
              "name": "Forma humanóide"
            },
            "AHxMDGrUoh9bMjXv": {
              "name": "Clariaudiência"
            },
            "ZZghjZHgNwd1zYXQ": {
              "name": "Pressa"
            },
            "UfMVjUnmhvjBrgIP": {
              "name": "Passagem Segura"
            },
            "MYFwOd7oVoxBsmsG": {
              "name": "Porta Liminal"
            },
            "DxEqADdH4fMb9EMi": {
              "name": "Miragem"
            },
            "8uFgLXwwZmt0u94U": {
              "name": "Movimento desenfreado"
            },
            "9Z1bw6pM5pGWuNmP": {
              "name": "Banimento"
            },
            "JG6Xu8Ejun3RS4Eh": {
              "name": "Enviando"
            },
            "MZPWwvtEYYTtJQFn": {
              "name": "Desintegrar"
            },
            "FleVVhva5e6zZn71": {
              "name": "Vidência"
            },
            "Sn04T2LjqTD8s6Zs": {
              "name": "Teleporte"
            },
            "zu5rpEGwkRrCF9CX": {
              "name": "Muralha da Força"
            },
            "PC7XxCb0u6D6CrL1": {
              "name": "Contingência"
            },
            "72c0ZaUG9BTHehfy": {
              "name": "Égide Energética"
            },
            "DTsMiSvI8WN0PeBw": {
              "name": "Retrocognição"
            },
            "JjjdNpHfdUZYYsQn": {
              "name": "Identificar"
            }
          }
        },
        "qH04eSMfzZOzMeXE": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "QbcvybUu3KKlRX29": {
              "name": "Detectar magia"
            },
            "2iRhf5JAH4ahbNbQ": {
              "name": "Conheça o Caminho (Constante)"
            },
            "PV8VRLRdLIgjW4cc": {
              "name": "Leia aura"
            },
            "o2p2js0hQnXgWrbQ": {
              "name": "Cintilação"
            },
            "lRB9F7iRqsq7qOuT": {
              "name": "Amarração Planar"
            },
            "BD2nNYaIt8DdSnwL": {
              "name": "Translocar (à vontade)"
            },
            "KYFpPg8ROHgzuv8f": {
              "name": "Translocar"
            },
            "KotFZYRmB3SQKd98": {
              "name": "Teleporte"
            },
            "uXEJcyP95LbuGtWk": {
              "name": "Teletransporte Interplanar"
            },
            "XNOi31ntupEdSto1": {
              "name": "Selo Planar"
            },
            "qlGv3qzCqyOEOxwT": {
              "name": "Dilema"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shoggoth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:93f20f6aeaf65503fbb97b1b2080d963cb114335416e8e6062dfdba6df5394f8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Shoggoth",
      "description": "Embora até fanáticos delirantes e profetas apocalípticos afirmem desesperadamente que o monstruoso shoggoth nada mais é do que uma visão induzida por drogas ou um pesadelo felizmente irreal, a verdade é ainda mais terrível. Shoggoths existem, mas eles tendem a se manter nas mais profundas fossas oceânicas ou nas mais remotas cavernas e ruínas, emergindo para espalhar o caos e a destruição em seus rastros viscosos.\nOs primeiros shoggoths foram criados por uma espécie alienígena para servir como bestas de carga estúpidas. Seu grande volume, força incrível e natureza amorfa os tornavam um trabalho escravo útil, e sua capacidade de formar espontaneamente quaisquer novos olhos, bocas, membros e outros órgãos de que pudessem precisar os tornava incrivelmente versáteis. Eventualmente, os shoggoths desenvolveram inteligência suficiente para se rebelarem contra seus mestres, e agora eles espreitam, pacientes, mas potentes, nas profundezas escuras.\nUm shoggoth tem objetivos e métodos desconhecidos pelos seres humanóides. Eles se lembram de seus eras de servidão e, comparados aos seus misteriosos mestres, humanos, elfos, anões e outros seres inteligentes são meras partículas que rastejam pela superfície do mundo, indistinguíveis dos animais. Quando um shoggoth rola seu corpo imenso e hediondo sobre um bando de exploradores, engolfando-os em uma pressão gelatinosa de carne e dentes roedores, ele não é tanto malvado quanto indiferente.\nShoggoths podem se tornar objeto de adoração de cultos humanóides dedicados ao caos e à entropia. O shoggoth não responde a essa adoração, mas pode-se contar com ele para consumir qualquer vítima infeliz que o culto possa capturar e sacrificar a ele. Rumores de que shoggoths desenvolveram intelectos ainda maiores são, seria de se esperar, apenas isso, pois o dano que um shoggoth capaz de raciocinar poderia causar em um mundo é, no mínimo, perturbador.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)",
        "tremorsense-imprecise-60": "tremorsensível-impreciso-60"
      },
      "languages": {
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "cego",
          "controlado",
          "acertos críticos",
          "ensurdecido",
          "precisão",
          "dormir"
        ],
        "resistances": [
          "ácido 20",
          "frio 20",
          "Sônico 20"
        ],
        "weaknesses": []
      },
      "attacks": {
        "yrfY15KIhcsy07PS": {
          "name": "Pseudópode",
          "damage": "4d10+18 contundente"
        }
      },
      "actions": {
        "EISoRK24Azg22k0m": {
          "name": "Tremorsense (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "d1Cp4BUTiymkJs98": {
          "name": "Visão Geral",
          "description": ""
        },
        "HO9oEygHulZKXSSM": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "Dy5EMIJUvL46ibmR": {
          "name": "Cura Rápida 20",
          "description": ""
        },
        "6Y0H1qKcOuLLE2PK": {
          "name": "Cacofonia enlouquecedora",
          "description": "60 pés (18 metros). Um shoggoth constantemente emite sílabas e murmúrios que os mortais não deveriam ouvir. Uma criatura que entra na aura ou inicia seu turno na aura deve ter sucesso em um teste (vontade, dc:38, opções:efeito de área,infligir:confuso) ou ficará Confusa por 1 rodada ([[/gmr 2d4 #rounds]] em uma falha crítica). Uma criatura que consegue salvar com sucesso fica temporariamente imune por 24 horas."
        },
        "HknPH5MLDixmpO4o": {
          "name": "Contrair",
          "description": "(2d10+15)[concussão], teste (fortitude, dc:40, básico)"
        },
        "avV91CD5YGdSAFSf": {
          "name": "Coma fora",
          "description": "Uma criatura que comece seu turno dentro do shoggoth sofre 9d6 de dano ácido."
        },
        "GSyhdPMQNpUa9LQJ": {
          "name": "Engolir",
          "description": "verificação (reflexo, dc:40, opções:efeito de dano,inflige:agarrado,inflige:lento), 6d6 de dano ácido, [[/act escape dc=40]], Ruptura 40"
        },
        "COj5z6LGtivQPuf0": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:katpaskir",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5ed723f6403ff188fb1190f6cd4c5ed5317037406c0e8f11d738564e4fad6d3c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Katpaskir",
      "description": "Nascidos das almas de pessimistas e líderes de cultos que buscaram minar e desvendar a realidade, os katpaskirs são demônios do niilismo e da destruição. Eles se intrometem nos limites da realidade, colocando-se nas fendas entre os reinos e arranhando a própria compostura da existência. Katpaskirs têm um senso incrível para localizar portais e outras convergências planares. Eles procuram corromper e expandir esses portais, libertando-os para se expandirem por conta própria ou vagarem pelo multiverso. Ao fazê-lo, contribuem lentamente para o desvendamento final da realidade. Os Katpaskirs geralmente aparecem como humanóides inseticidas com múltiplos braços ou pernas, cada um capaz de arranhar e arranhar as costuras da existência.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "see-invisibility": "ver-invisibilidade"
      },
      "languages": {
        "aklo": "aklo",
        "chthonian": "chthoniano",
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "tóxico"
        ],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15",
          "santo 15"
        ]
      },
      "attacks": {
        "TEusVaKtUP4r9pct": {
          "name": "Garra",
          "damage": "3d12+14 cortante; 1d6 espiritual"
        },
        "CeMnX0QFo8I8Rb95": {
          "name": "Garra",
          "damage": "3d8+14 cortante; 1d6 espiritual"
        }
      },
      "actions": {
        "4A3T6njQ9VRFvp6m": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "KX50wCOuxXd6QMHv": {
          "name": "magias Constantes",
          "description": ""
        },
        "07YDS12fytfqO5il": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "zJMxnCoMxMuUOhQ4": {
          "name": "Violação de Sentinelas Planares",
          "description": "Gatilho Um efeito tenta impedir que o katpaskir use um efeito de teletransporte ou conjure Invocar Demônio\nEfeito O katpaskir tenta neutralizar o efeito desencadeador (modificador de neutralização de [[/r 1d20+29 #Counteract]]). O katpaskir falha automaticamente contra o efeito de um artefato."
        },
        "wv2jreZ6OKD7iboM": {
          "name": "Campo de Distorção",
          "description": "30 pés (9 metros). A realidade se curva e distorce no nível de todos os sentidos sem deslocar a localização real do katpaskir. As criaturas à escolha do katpaskir que iniciam seu turno na aura devem ter sucesso em um teste (irá, dc:37) salvar ou tratar a área como um terreno mais difícil e irregular ([[/act balance dc=20]]). Uma criatura bem-sucedida ainda trata a área como um terreno difícil. Para tais criaturas, a distância através da aura é duplicada para determinar a penalidade de alcance."
        },
        "KyMj8mEHMYtcr0nn": {
          "name": "Invocações Espelhadas",
          "description": "Ativar Uma criatura dentro de 30 pés (9 metros) que o katpaskir esteja ciente conjura Invocar Celestial ou de outra forma invoca uma criatura sagrada\nEfeito O katpaskir conjura invocar demônio, recuperando a habilidade diária de fazê-lo se necessário. Este efeito é sustentado automaticamente enquanto a invocação desencadeadora for sustentada, por até 1 minuto."
        },
        "KCMKv3sljGPTzd6c": {
          "name": "Sentido de distorção",
          "description": "O katpaskir sente mudanças na estrutura planar dentro de 1 milha, incluindo qualquer efeito de teletransporte, sentindo a direção e distância da perturbação. Se sentir tal perturbação dentro de 500 pés (150 metros), o katpaskir pode lançar Scouting Eye para observar a área sem precisar de linha de visão para o local."
        },
        "TJUpGJx18jtv9pnw": {
          "name": "Emboscada Dimensional",
          "description": "O katpaskir lança Translocar e, em seguida, realiza um Golpe corpo a corpo que causa três dados extras de dano. Este Golpe conta como dois ataques ao calcular a penalidade de ataque múltiplo do katpaskir."
        }
      },
      "spellcasting": {
        "bGqLe5wJ9e5cypB9": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "mlxyIrg5LsLVXlwY": {
              "name": "Tether Planar (à vontade)"
            },
            "FdqNXgYytrpbJjkQ": {
              "name": "Olho Escoteiro (à vontade)"
            },
            "z4YqT5T6vgw63tMx": {
              "name": "Translocar (à vontade)"
            },
            "Dt4AB3dgWjriU696": {
              "name": "Teletransporte Interplanar"
            },
            "RsyzUgxXV4ylVXnG": {
              "name": "Teleporte"
            },
            "eHZhwn88cHIQVsBK": {
              "name": "Banimento"
            },
            "8T2sNr0RHZH7SQal": {
              "name": "Desintegrar"
            },
            "QpWsGyyviBVaXk0y": {
              "name": "Cintilação"
            },
            "fJLGPCu3WqUm616T": {
              "name": "Veja o Invisível (Constante)"
            },
            "SsKeitRXd8FXK4L4": {
              "name": "Convocar Demônio (somente Demônios)"
            },
            "6s50vozD5NGq0QEX": {
              "name": "Movimento irrestrito (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:adamant-sentinel",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:eb4c027e39422861f1338dca40107adb5f4955aad193658e6b85c86cd6322d56",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sentinela Adamant",
      "description": "Fabricadas a partir de um metal quase indestrutível e de grande raridade, as sentinelas inflexíveis só podem ser destruídas pelos inimigos mais poderosos. Criar uma sentinela adamantina requer uma quantidade de adamantina tão grande que coletá-la geralmente requer a montagem de uma expedição de mineração a um planeta distante, o Plano da Terra ou um Plano Externo.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [
          "físico 20 exceto vorpal-adamantine",
          "magias 20"
        ],
        "weaknesses": []
      },
      "attacks": {
        "RVKn86nfvO4Zlgzq": {
          "name": "Punho",
          "damage": "3d10+17 contundente"
        }
      },
      "actions": {
        "vzKvAZRlu4GWvWhV": {
          "name": "Modo de reparo",
          "description": "Quando a sentinela inflexível está com 0 HP, ela não é destruída. Em vez disso, ele entra no modo de reparo, durante o qual fica Lento 1, não pode realizar reações e pode realizar apenas a ação de Auto-Reparo. Uma vez que tenha mais de 30 HP, ele pode usar qualquer tipo de ação e reações, embora permaneça lento 1 e não possa realizar nenhuma reação até o início do próximo turno. Se um acerto crítico com uma arma adamantina Vorpal reduzir o sentinela a 0 HP, ou se tal arma atingi-lo enquanto já está com 0 HP, o sentinela é destruído."
        },
        "CH5GoYz2ZgnnwodL": {
          "name": "Ataque Destrutivo",
          "description": "Em um acerto crítico, o golpe de punho do sentinela inflexível quebra a armadura do alvo, se houver, além de causar dano ao alvo. Se o alvo tiver um escudo levantado, o sentinela quebra o escudo."
        },
        "BMzVFs0AdPpW1E9J": {
          "name": "Março Inexorável",
          "description": "A sentinela inflexível avança até sua velocidade, empurrando para trás cada criatura cujo espaço ela se move e causando dano a elas se tentarem interromper seu movimento. Uma criatura pode tentar barrar o caminho tentando um teste de resistência (fortitude, dc:45, opções:efeito de dano).\nSucesso Crítico O sentinela interrompe seu movimento e não pode entrar no quadrado da criatura.\nSucesso Como sucesso crítico, mas a criatura resistente sofre (3d10+17)[concussão] de dano.\nFalha A criatura resistente sofre (3d10+17)[concussão] de dano e sua armadura, se houver, é quebrada. Se a criatura resistente tiver um escudo levantado, o sentinela quebra o escudo."
        },
        "zheqb66ZfWQy3rCc": {
          "name": "Auto-reparo",
          "description": "A sentinela se repara, recuperando 30 pontos de vida de cura."
        },
        "LcTLFm6mVOfK9AEb": {
          "name": "Ventilação",
          "description": "A sentinela libera um cone de vapor superaquecido de 9 metros de sua forja interna. Isso causa 15d6 de dano de fogo a todas as criaturas no cone (verificação (reflexo, dc:40, básico, opções:efeito de área)). O sentinela não pode usar Vent novamente por [[/gmr 1d6 #Recharge Vent]]."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:despair-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9818ad7e04e2ce46170d26934dcfefa56252fe377cc65d3e2d55c9db5ff12f97",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão do Desespero (Antigo, Feiticeiro)",
      "description": "O medo é uma das emoções mais poderosas, e os dragões do desespero são mestres em canalizar esses sentimentos de terror e desesperança para seu próprio benefício. Tal como acontece com outros dragões ocultos, os dragões do desespero são movidos por uma compulsão inata, no caso deles, o desejo de causar terror nos outros. Dragões do desespero tendem a se estabelecer perto de assentamentos, então eles têm uma fonte de medo para se inspirar. Os itens mais comuns nos tesouros dos dragões desesperados são pergaminhos, tomos e relíquias que servem como material de pesquisa. Através deles, os dragões do desespero aprendem sobre o folclore local, lendas urbanas e muito mais para melhor assombrar seus alvos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "mq904JVyNxtmFV4X": {
          "name": "Maxilas",
          "damage": "3d12+20 perfurante"
        },
        "SYPLTHqAQmYgxKer": {
          "name": "Garras",
          "damage": "3d10+20 cortante"
        },
        "17WZ0S8ST7vMcthy": {
          "name": "Cauda",
          "damage": "3d8+18 contundente"
        }
      },
      "actions": {
        "XuUiLZ0Z6tYuTEdN": {
          "name": "Telepatia 90 pés (27 metros)",
          "description": ""
        },
        "LQtS71i0MUK191tk": {
          "name": "Sentido do Medo",
          "description": "O dragão sente todas as criaturas com a condição assustada no alcance listado."
        },
        "0urWxnGpb1Pz0gP8": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "ogo4m8E85pSwAqbt": {
          "name": "Consumir Medo",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) perde a condição de assustado\nEfeito O dragão se deleita com o medo que deixa o corpo da criatura desencadeadora, ganhando 7d8 Pontos de Vida temporários que duram 1 minuto."
        },
        "gEfh2JBGmxpYDpno": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:40, opções:efeito de área,inflige:assustado)"
        },
        "jguPXubA9RRMJmGr": {
          "name": "Pensamentos não solicitados",
          "description": "Gatilho O dragão é atingido criticamente por uma arma ou ataque desarmado\nEfeito A mente do atacante se enche de visões de seus piores medos que dominam seus sentidos, e ele deve escolher um dos seguintes resultados: ou o ataque desencadeador torna-se um sucesso normal, ou o acerto crítico não é afetado, mas a criatura desencadeadora fica Amedrontada 2."
        },
        "oFMxWaLY4skr3wjR": {
          "name": "Olhe atrás de você",
          "description": "Acionar O dragão se esconde com sucesso de uma criatura dentro de 90 pés (27 metros)\nEfeito O dragão se teletransporta para um espaço diretamente atrás da criatura alvo. O dragão é imediatamente detectado, a menos que a posição escolhida tenha cobertura ou outro meio de permanecer Oculto."
        },
        "XaV9EbmhjP3b8nYt": {
          "name": "Respiração Gritante",
          "description": "O dragão solta um som cacofônico feito de cada grito que o dragão extraiu de um inimigo aterrorizado, causando 17d6 de dano sônico em um salvamento de tipo:cone de 15 metros (teste (vontade, dc:40, básico, opções:efeito de área)). As criaturas que falharem no teste de Vontade devem passar a primeira ação do próximo turno sem fazer nada além de gritar. O dragão não pode usar Sopro Gritante novamente por [[/gmr 1d4 #Recarregar Sopro Gritante]]."
        },
        "IgQebS6T9lTVTa9g": {
          "name": "Chamariz de língua",
          "description": "O dragão do desespero infla várias bexigas na ponta da língua para criar a forma básica de uma criatura. Este processo leva 1 minuto para ser concluído, durante o qual o dragão fica fora de guarda. Se o dragão parar ou for interrompido neste processo, as bexigas esvaziam e o dragão deve recomeçar. Assim que o processo for concluído, o dragão pode manter as bexigas infladas indefinidamente e pode dispensar para esvaziar as bexigas e retrair sua língua instantaneamente.\nA língua inflada assume a forma básica de um animal ou humanóide e pode ser inflada para ser Pequena ou Média. A forma lembra a silhueta geral de uma criatura, embora uma inspeção mais detalhada e sucesso em um teste (percepção, dc:30) possam determinar a verdadeira natureza da língua. Enquanto inflado, o dragão pode enviar sua voz através da isca, embora manter sua língua inflada torne difícil falar, fazendo com que o dragão sofra -4 de penalidade de circunstância em quaisquer testes relacionados à fala, como testes de Enganação para Mentir.\nA língua do dragão pode se estender até 90 pés (27 metros) do corpo do dragão e pode estender totalmente a língua como parte do processo de inflar as bexigas. O dragão pode mover a parte inflada de sua língua até 15 pés (4,5 metros) de cada vez com uma ação, que possui as características concentrar, manipular e mover. Enquanto estendida, a extremidade inflada da língua ocupa espaço como uma criatura de tamanho apropriado, mas o resto da língua não impede ou bloqueia o movimento de forma alguma. O cheiro do dragão funciona através dos cílios na ponta da língua, mas fora isso o dragão não tem como saber o que está perto de sua língua.\nAtacar a língua é o mesmo que atacar o dragão, exceto que a língua está sempre fora de guarda. Se a língua sofrer algum dano, ela murcha imediatamente e permanece para fora. O dragão permanece desprevenido enquanto sua língua estiver para fora, mas o dragão pode retrair sua língua com duas ações consecutivas de Interação. Se a língua sofrer dano, o dragão não poderá usar sua isca de língua novamente por 1 dia."
        }
      },
      "spellcasting": {
        "LfsJktPWqZDu90OD": {
          "name": "magias Ocultos Preparados",
          "category": "preparado",
          "spells": {
            "0JhEHH4NzGfeHjCq": {
              "name": "Comando"
            },
            "R7EfsHhhz56UUyQX": {
              "name": "Detectar magia"
            },
            "4k1aL0ZZZR1BqKrR": {
              "name": "Invenção"
            },
            "LT9DGBfiDhfZhHUF": {
              "name": "Hino Assombroso"
            },
            "QqIWHMWdlEmmVDw0": {
              "name": "Mau presságio"
            },
            "LDPwE8ngyiyny8ei": {
              "name": "Mensagem"
            },
            "TaadLhwLjwafQ3Hn": {
              "name": "Dormir"
            },
            "5K1mrVl9GPxO9uQ8": {
              "name": "Projétil Telecinético"
            },
            "1HvJZV4Rum19HFLj": {
              "name": "Ventriloquismo"
            },
            "4Nk4tM4UmY9qjMFt": {
              "name": "Escuridão"
            },
            "AyXNv8hpdSmrL9Ns": {
              "name": "Explosão de ruído"
            },
            "zFpZGatoPeLqgZvQ": {
              "name": "Paranóia"
            },
            "yBpXoXBgjnOZHxV3": {
              "name": "Estupefaça"
            },
            "UldhgAYSDHNN5h60": {
              "name": "Leitura da Mente"
            },
            "07S2PE07wqKAjOMi": {
              "name": "Lento"
            },
            "Mq749yJKAQgUlp8Y": {
              "name": "Detectar Vidência"
            },
            "jNiAb8NMMWGZhMhw": {
              "name": "Pesadelo"
            },
            "p0y2FMM1TqcXb1hk": {
              "name": "Geometria Estranha"
            },
            "6KBfu5ZZDtF8MjCO": {
              "name": "Pulso Sináptico"
            },
            "QN5MnDiBr4MQk87T": {
              "name": "Onda de Desespero"
            },
            "yWWFMObeiF19kfKG": {
              "name": "Enganar"
            },
            "Maf6LXbkBFHo0ibf": {
              "name": "Calamidade Fantasmagórica"
            },
            "dpeHp1d7mU6rSvvi": {
              "name": "Vidência"
            },
            "6MpuYfd1IzcMp0Vr": {
              "name": "Máscara do Terror"
            },
            "JQTDhyZa6Wic5NSP": {
              "name": "Visões de Perigo"
            },
            "6L1cCCYwpXFMytjD": {
              "name": "Cântico da Dor Eterna"
            },
            "gmnJjXdFclvMiJgV": {
              "name": "Mente Oculta"
            },
            "dg0NhFa1hOBVWUuy": {
              "name": "Identificar"
            }
          }
        },
        "2WgNRvMvvtQdUMc5": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "BREqjedSaVUlCdCL": {
              "name": "Truespeech (constante)"
            },
            "W27gXnK1HHLVBUYt": {
              "name": "Medo (à vontade)"
            },
            "BdFDFCote9xdad5D": {
              "name": "Onda de Desespero"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:obcisidaemon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c4fd8a5a2babd9f705800155bddb1e900d9d16b4d366ec4b5fea26181587eef9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Obcisidaemon",
      "description": "Embora a guerra possa ter muitas facetas, os obscisidaemons só se preocupam com a brutalidade e a violência que o conflito traz. Esses demônios devastadores buscam apenas destruir, deixando escombros e cinzas em seu rastro. Refletindo o desejo mortal de erradicar completamente o inimigo, os obcisidaemons nunca deixam intencionalmente uma alma para trás em seus caminhos de guerra. Eles reivindicam as almas daqueles que matam, acrescentando-as a um manto profano que escorre de seus corpos como uma névoa pegajosa. As almas adicionadas ao manto são incapazes de viajar para a vida após a morte, e a maioria dos obcisidaemons só consegue conter um punhado dessas almas por vez. Sempre que o manto de um obcisidaemon está sobrecarregado ou durante momentos em que o demônio precisa de maior poder, eles consomem uma alma e recebem rejuvenescimento ou o poder que precisam para causar mais destruição.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
        "daemonic": "demoníaco"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 20"
        ]
      },
      "attacks": {
        "Qdc3rwbtDJafOhc0": {
          "name": "Alabarda",
          "damage": "3d10+23 perfurante"
        },
        "vsmkhx2KExY8JeAO": {
          "name": "Maxilas",
          "damage": "4d6+20 perfurante"
        }
      },
      "actions": {
        "yU6CGgm8we5hKDNy": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "FlD58esbuTTmEz45": {
          "name": "Manto das Almas",
          "description": "Um obcisidaemon está sempre envolto em um manto de almas capturadas. Ele pode conter um número de almas igual ao modificador de Carisma do daemon. Destruir o daemon liberta as almas, embora isso não devolva a vida às criaturas falecidas. Uma criatura cuja alma esteja presa dentro deste manto não pode ser ressuscitada exceto por um ritual de Ressurreição do 9º Rank ou magia similarmente poderosa."
        },
        "otF69WqTYD7RJsAK": {
          "name": "magias Constantes",
          "description": ""
        },
        "LtvcUFUOeqJ7S8zl": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "0qFN4QwW7PNkz1OJ": {
          "name": "Ataque reativo",
          "description": ""
        },
        "t8fwxSEacZkh0vFB": {
          "name": "Terra Queimada",
          "description": "60 pés (18 metros). Qualquer criatura que morrer dentro da aura e não for atraída para o Manto das Almas do obcisidaemon via Herdar Alma deve tentar um teste de resistência (fortitude, dc:38). Em caso de falha, o corpo da criatura (mas não seu equipamento) é imediatamente reduzido a uma fina mancha de cinzas."
        },
        "Dn7wQCPFEtj3HcX3": {
          "name": "Consumir Alma",
          "description": "O obcisidaemon consome uma alma de seu manto para ganhar um dos seguintes efeitos. Uma alma consumida desta forma não pode ser ressuscitada exceto por um ritual de desejo ou por um efeito similarmente poderoso.\nFortalecer magia O obcisidaemon ganha +2 de bônus de status em suas CDs de magia e modificadores de ataque de magia até o final do próximo turno.\nFortalecer Arma A arma do obcisidaemon ganha os efeitos de uma runa de chama maior, gelo maior, choque maior ou ferimento até o final do próximo turno.\nCura (cura, vitalidade) O daemon recupera 8d8+64 Pontos de Vida de cura.\nEfeito: Consumir Alma"
        },
        "up62eMECQNjF6sQA": {
          "name": "Herdar Alma",
          "description": "Gatilho O obcisidaemon mata uma criatura\nEfeito O obcisidaemon tenta atrair a alma da criatura para seu manto de almas. A criatura desencadeadora deve tentar um teste de resistência (fortitude, dc:38). Em caso de falha, sua alma é consumida e adicionada ao manto das almas. Se o manto do obcisidaemon não puder conter mais almas, o daemon pode libertar uma das almas como uma ação livre; caso contrário, a alma não será absorvida."
        },
        "KLdcI6Rcf3lnwyyb": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "GkUJBHLSdNPoskjG": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "CoSDJ1SXNya5967t": {
              "name": "Translocar"
            },
            "p4A4J5qzRWDNRXkd": {
              "name": "Translocar"
            },
            "q6WH6aBSkK7w6AL7": {
              "name": "Nuvem tóxica"
            },
            "vzJ4VzkAmjC1fRPu": {
              "name": "Paralisar"
            },
            "mkztgvrvPfT308oo": {
              "name": "magia de resposta"
            },
            "Ggcmmioek3hJVlrH": {
              "name": "Desintegrar"
            },
            "SzA2mTHPgT0AQazD": {
              "name": "Estrelas cadentes"
            },
            "epXdBP1oRcEmiKpF": {
              "name": "Massacre"
            },
            "5cEDQQAXp8sQ584v": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hesperid-queen",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f27401c523901250d015afb7f9c440dc554aee4c5333268afc8b672c696c8656",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Rainha Hespérida",
      "description": "As rainhas Hespéridas governam regiões isoladas banhadas pela luz do pôr do sol. Eles guardam inúmeros tesouros e segredos, embora para aqueles que os abordam com respeito e oferecem uma barganha intrigante, eles estão dispostos a abrir mão de conhecimentos ou itens além daqueles segredos ou valores que juraram guardar para si.\nÉ relativamente provável que as rainhas Hespéridas tenham objetos poderosos sob sua proteção, como relíquias ou artefatos antigos. Como tal, eles estão bem cientes do perigo representado por caçadores de tesouros inescrupulosos que procuram obter esses itens a qualquer custo, e usam suas mentes incríveis para estabelecer contramedidas tortuosas para proteger seus pupilos, mesmo no caso de suas próprias mortes.\nAs ninfas são fadas guardiãs da natureza possuidoras de grande beleza e formas que fundem características humanóides de tirar o fôlego com os elementos naturais que protegem. As rainhas ninfas são ninfas poderosas que governam e protegem um território muito maior de natureza selvagem intocada. Por exemplo, um lampad pode proteger uma bela caverna subterrânea, mas uma rainha lampad pode chamar de domínio um sistema inteiro de cavernas.",
      "size": "Médio",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico",
        "utopian": "utópico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15"
        ]
      },
      "attacks": {
        "6DJ5UGod5sVQIgQ8": {
          "name": "Fita do pôr do sol",
          "damage": "4d10+13 cortante; 1d6 fogo; 1d6 vitalidade"
        },
        "VvTUZ7JyzVpWPNRj": {
          "name": "Raio do pôr do sol",
          "damage": "4d12+13 fogo; 1d6 vitalidade"
        }
      },
      "actions": {
        "1Skzxnout1K9TVNP": {
          "name": "Amarrado à Terra",
          "description": "Uma rainha hespérida está intrinsecamente ligada a uma região isolada, geralmente uma ilha ou cadeia de ilhas, uma costa remota ou um vale isolado. Contanto que a rainha esteja saudável, o ambiente é excepcionalmente resiliente, permitindo que a rainha hespérida tente automaticamente neutralizar magias e rituais como Praga que prejudicariam o ambiente, com um modificador de neutralização [[/r 1d20+37 #Counteract]] e um Rank de neutralização de 10.\nEntretanto, quando a rainha hespérida se torna fisicamente ou psicologicamente insalubre, sua região protegida eventualmente se torna distorcida ou insalubre também. Nesse caso, restaurar a rainha hespérida cura rapidamente toda a região."
        },
        "ajC29c9gmHsNUgs1": {
          "name": "A beleza da ninfa",
          "description": "30 pés (9 metros). Criaturas que iniciam seu turno na aura devem ter sucesso em um teste (vontade, dc:38, opções:efeito de área,infligir:atordoado) salvar ou ficar paralisadas de espanto, fazendo com que fiquem atordoadas por 1 rodada."
        },
        "GBOycFh1m1Y5Jb9h": {
          "name": "Alterar forma",
          "description": "Rainhas Hespéridas podem se transformar entre sua forma original, que se parece muito com uma ninfa típica de sua espécie, e qualquer forma humanóide Pequena ou Média, normalmente escolhendo uma versão de sua forma natural que mais se assemelhe a um humanóide."
        },
        "iRJk9tacSkOQcb2p": {
          "name": "Crie uma maçã dourada",
          "description": "Enquanto a rainha hespérida está dentro de seu local de ligação, ela pode girar luz dourada em torno de um objeto que segura com até 20 pés cúbicos de volume e até 80 de volume. Fazer isso condensa o objeto em uma maçã mágica feita de luz dourada com volume leve.\nA maçã dourada volta à sua forma original após um dia inteiro longe do local de ligação da hespérida, ou quando a rainha hespérida gasta uma única ação (que tem a característica concentração) para encerrar o efeito."
        },
        "yO6YNvoUDLZPlNwE": {
          "name": "Foco Beleza",
          "description": "A rainha hespérida concentra sua beleza em um alvo dentro de sua aura. A criatura deve tentar um teste de resistência (vontade, dc:38). Em caso de falha, ele é afetado como se fosse pela aura de beleza da ninfa da rainha hespérida; se já foi afetado pela aura, fica dominado por visões de felicidade e beleza. A criatura sai do domínio da rainha hespérida o mais rápida e eficientemente possível por 1 hora, após o qual ela se esquece de ter alcançado o domínio da rainha hespérida, como o fez e de tudo o que aconteceu enquanto ela estava dentro do domínio."
        },
        "fXKjy8wUG1Jgkyga": {
          "name": "Inspiração",
          "description": "Uma rainha hespérida pode inspirar uma única criatura inteligente dando a essa criatura um símbolo de seu favor, normalmente uma mecha de seu cabelo. Contanto que a criatura carregue sua ficha e permaneça em situação regular com a rainha lampad, a criatura ganha um bônus de status de +1 em todos os testes de Artesanato, testes de Desempenho e salvamentos de Vontade.\nSe uma rainha hespérida conceder sua Inspiração a um bardo e ele for a musa desse bardo, o bardo ganha um benefício adicional dependendo do tema de sua musa: para a musa do conhecimento, o bardo também ganha um bônus de status de +1 em todos os testes de Conhecimento; para o maestro muse, o bônus de status nos testes de Performance aumenta para +2 com o propósito de determinar os efeitos das composições; para a musa polímata, o bardo ganha +4 de bônus de status em testes de perícia não treinados; e para todas as outras musas, o bônus de resistência de Vontade aumenta para +2 contra fadas.\nEfeito: Inspiração da Rainha Ninfa"
        }
      },
      "spellcasting": {
        "8i5X0cG9TunkPc2L": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "cHt1B7KVqlsEl8fT": {
              "name": "Detectar magia"
            },
            "EZkP2Y0UJiO5mxn4": {
              "name": "Arco Elétrico"
            },
            "k71O1BKLuF6ZUYbT": {
              "name": "Pouso Suave"
            },
            "siVmRhdKrR24Aofo": {
              "name": "Orientação"
            },
            "Tx64Av84z9rfCDCS": {
              "name": "Rajada de Vento"
            },
            "3wNJDCtYXKtL6Lky": {
              "name": "Prestidigitação"
            },
            "KeEGf6MEowqqOdzk": {
              "name": "Leia aura"
            },
            "dEOlp2k0rMSUlDEE": {
              "name": "Trilhas desaparecendo"
            },
            "Ob1PMIWUIYBx5FPn": {
              "name": "Mensageiro Animal"
            },
            "Equ8MakdpMyQgfXA": {
              "name": "Dissipar Magia"
            },
            "jAWr5HLOzRYsfKsE": {
              "name": "Resistir à Energia"
            },
            "zC7q9qMIjToZ4zU8": {
              "name": "Revelando Luz"
            },
            "PxWXOoHjpUCozcvv": {
              "name": "Respiração na água"
            },
            "yFU0TA1H3N20zBGM": {
              "name": "Ligação à Terra"
            },
            "hIyOeYtCbeZqv5GH": {
              "name": "Pressa"
            },
            "lpVvvR2oJuhQMqy4": {
              "name": "Um com pedra"
            },
            "VtMuXGcpVox1Xrl5": {
              "name": "Lento"
            },
            "uPBDbIrLX00PMmiZ": {
              "name": "Miragem"
            },
            "19G9AHDIIOQfmzCG": {
              "name": "Resiliência da Montanha"
            },
            "1d96k4WjWxOE15bS": {
              "name": "Movimento desenfreado"
            },
            "6eSmbqS5iyL3k3i6": {
              "name": "Farol Vital"
            },
            "d2S3rRfjtJNM2wmd": {
              "name": "Sopro de Vida"
            },
            "RrfT0kGXiywobhIm": {
              "name": "Controle a água"
            },
            "USsf6ZHU0bB2hSON": {
              "name": "Visão Verdadeira"
            },
            "3QgWRIhnP9YuEzMD": {
              "name": "Égide Energética"
            },
            "yZjkrP4J1bk4NeWG": {
              "name": "Regenerado"
            },
            "Ry3vbJMeCkRk7p1v": {
              "name": "Raio de sol"
            },
            "O5yTe4WCAHlWbY5a": {
              "name": "Erupção Vulcânica"
            },
            "6ySkv3JfPCWa7lgY": {
              "name": "Migração"
            },
            "YQwfXnNQcnMoE3zm": {
              "name": "Ventos punitivos"
            },
            "w3gNuh8FxzxbKZsX": {
              "name": "Estrelas cadentes"
            },
            "ROpvNSf2ugb7BZeS": {
              "name": "Tempestade Furiosa"
            },
            "vnkEF9xZ9UuIdIOy": {
              "name": "Manifestação"
            }
          }
        },
        "TjuBXxdJpElgZfcg": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "kU701eGTplmZmdN1": {
              "name": "Luz"
            },
            "RsQNeyTEoGegsO5h": {
              "name": "Curar"
            },
            "lbemcUtUwBV5rF5R": {
              "name": "Luz Sagrada"
            },
            "YVIckAUtDfgqSxG5": {
              "name": "Disfarce Ilusório"
            },
            "D2lLgKr0UIBUMFDq": {
              "name": "Revelando Luz"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cinder-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f4691d9e08f6988844055a8f7fc9446fb0b468cd2a194b4504557cdd011c212f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão de Cinzas (Antigo)",
      "description": "Entre os maiores e mais ferozes dragões, os dragões de cinza são tipicamente voláteis, exigindo respeito – até mesmo deferência – de criaturas inferiores. A aparência dos dragões de cinza evoca sua chama, muitas vezes em escamas com padrões mistos de vermelho, laranja e amarelo. Muitos dragões de cinzas habitam vulcões ativos e locais igualmente ígneos. Dragões de cinzas preferem tesouros que possam suportar o calor de seus corpos e covis, com pedras preciosas, ouro e prata comuns entre seus tesouros.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "pyric": "pírico"
      },
      "defenses": {
        "immunities": [
          "fogo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "frio 20"
        ]
      },
      "attacks": {
        "IrTg9nWwV4OiOQW8": {
          "name": "Maxilas",
          "damage": "1d8 fogo; 4d12+12 perfurante"
        },
        "yOmS98L3WqFRPhXZ": {
          "name": "Buzina",
          "damage": "3d12+16 perfurante"
        },
        "ZGe2glGQxF2jA1C2": {
          "name": "Garra",
          "damage": "4d10+12 cortante"
        },
        "nSwGIvjZwxGfs5ON": {
          "name": "Cauda",
          "damage": "4d8+12 contundente"
        },
        "Usl81LEUxCtzXkzk": {
          "name": "Asa",
          "damage": "4d8+12 cortante"
        }
      },
      "actions": {
        "9SJBTraIuJdXV6FB": {
          "name": "Visão de fumaça",
          "description": "A fumaça não prejudica a visão de um dragão de cinzas; eles ignoram a condição Oculto da fumaça."
        },
        "T5A6q7Af8YZ9uCkW": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "zNzGiGscx8mWgPNk": {
          "name": "Sangue fervente",
          "description": "Gatilho O dragão é atingido criticamente por um ataque corpo a corpo\nEfeito O sangue superaquecido do dragão derrama sobre o atacante. O alvo sofre 10d6 de dano de fogo (teste de resistência (reflexo, dc:41, básico))."
        },
        "SqfVOvexkATbeU7x": {
          "name": "Calor do Dragão",
          "description": "5 pés (1,5 metros). 4d6 de dano de fogo (teste (reflexo, dc:37, básico, opções:efeito de área) salvamento)"
        },
        "FvCzcBVRvmZ11mTe": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:39, opções:efeito de área,inflige:assustado)"
        },
        "QWxMF0tTh2JjNiIy": {
          "name": "Ataque Reativo (somente Mandíbulas)",
          "description": ""
        },
        "qg1YTpzUg6KvMuWQ": {
          "name": "Tudo vira chama",
          "description": "O dragão amaldiçoa uma criatura dentro de 60 pés (18 metros) para que sua magia seja substituída por chamas primordiais. A criatura deve tentar um teste de resistência (vontade, dc:39). Independentemente do resultado, o alvo fica temporariamente imune por 1 dia.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica amaldiçoada por 1 rodada. Enquanto amaldiçoado, qualquer dano que a criatura amaldiçoada causaria por qualquer meio torna-se dano de fogo, independentemente do tipo de dano original. A criatura amaldiçoada pode suprimir temporariamente a maldição por 1 rodada como uma ação.\nFalha Como sucesso, mas a duração da maldição é de 1 hora.\nFalha Crítica Como sucesso, mas a duração da maldição é de 1 dia."
        },
        "jJAaOJxctRpOQvaI": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de asa em qualquer ordem."
        },
        "ZxIcKCg8VlLaYO7J": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro da Pira sempre que consegue um acerto crítico com um Golpe."
        },
        "NEGCX9pCG8gyZcjL": {
          "name": "Respiração da Pira",
          "description": "O dragão cospe uma explosão de chamas que causa 18d6 de dano de fogo em um tipo de 18 metros:cone (teste (reflexo, dc:41, básico, opções:efeito de área) salvamento). Criaturas que falham criticamente em seu teste pegam fogo, sofrendo 2d6 de dano de fogo persistente. A área então se enche de fumaça preta por 1 minuto. Isto tem efeitos de névoa, exceto que preenche a área do cone. O dragão não pode usar Sopro da Pira novamente por [[/gmr 1d4 #Recarrega Sopro da Pira]]."
        },
        "jmrC9phVteComdYb": {
          "name": "Acenda as chamas",
          "description": "O dragão intensifica incêndios próximos. Cada inimigo dentro de 60 pés (18 metros) que esteja sofrendo dano de fogo persistente sofre 5d6 de dano de fogo."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:788a7f5f10836ad657eb1d06977703b0861e9fc8f8693781360b2b6a7070876a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Rúnico (Antigo, Feiticeiro)",
      "description": "Os dragões rúnicos têm uma visão inata sobre o poder das runas. A maioria dos dragões rúnicos mantém uma variedade de runas gravadas em suas escamas, que seus corpos podem fortalecer magicamente. Eles normalmente não lançam magias sozinhos, em vez disso, confiam em sua habilidade de criar runas instantaneamente para produzir os efeitos desejados. Um dragão rúnico geralmente se refere ao seu tesouro como sua biblioteca, pois está cheio de importantes textos históricos, peças, discursos, livros didáticos e livros de magias escritos por pessoas de diferentes culturas em uma variedade de idiomas. Embora muitas vezes possam falar uma língua com a ajuda da magia, eles preferem aprender línguas no contexto de seus falantes, para que possam compreender as nuances escondidas na sintaxe e na magia de seus símbolos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "magicsense-imprecise-60": "magicsense-imprecise-60",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "nMoAKfyDDAoQfjPJ": {
          "name": "Garra",
          "damage": "4d6+16 cortante"
        },
        "vWI3q4eiStz5qqHx": {
          "name": "Maxilas",
          "damage": "4d8+16 perfurante"
        },
        "8A5XIY3Hlr1wxzJm": {
          "name": "Cauda",
          "damage": "4d10+16 contundente"
        }
      },
      "actions": {
        "RlvDOe4pR33tuNVr": {
          "name": "Sentido Mágico",
          "description": "O dragão rúnico está ciente de quaisquer habilidades e efeitos mágicos ativos dentro do alcance listado. Quando o dragão Procura, ele ganha os benefícios de uma magia de detecção mágica de 4º Rank dentro do alcance listado (além dos benefícios normais de Procurar)."
        },
        "qwuKOZdikMj02pRU": {
          "name": "Escalas Rúnicas",
          "description": "As escamas do dragão rúnico funcionam como pedras rúnicas. O dragão rúnico não pode usar os efeitos ou habilidades das runas gravadas em suas escamas, mas pode transferir essas runas para objetos apropriados. Transferir uma runa para ou de um item desta forma requer 1 minuto, durante o qual o dragão fica fora de guarda. O processo é automático e não requer teste, mas se o dragão parar ou for interrompido neste processo, a runa é destruída. Um dragão rúnico pode ter qualquer número de runas gravadas em suas escamas, embora normalmente tenha apenas um punhado de runas gravadas em suas escamas por vez."
        },
        "5Nrc64gApPzUy279": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "SI4dLQQdhQ6nWs5J": {
          "name": "Cancelando Runa",
          "description": "Gatilho O dragão é alvo de um magia que requer um teste de resistência\nEfeito O dragão tenta desfazer as runas fundamentais do magia. Eles tentam neutralizar o magia (neutralizar Rank 10, modificador de neutralização [[/r 1d20+33 #Counteract]]). Se tiver sucesso, o dragão não será afetado pelo magia; outros assuntos são afetados pela magia normalmente. O dragão não pode usar a Runa de Cancelamento novamente para [[/gmr 1d4 #Recharge Canceling Rune]]."
        },
        "L8w8yFgsSTRZPPKw": {
          "name": "Runa Retributiva",
          "description": "Gatilho Uma criatura dentro de 15 pés (4,5 metros) causa dano ao dragão rúnico\nEfeito Com uma explosão de magia rúnica, o dragão rúnico usa sua habilidade rúnica detonadora na criatura desencadeadora e imediatamente faz com que a runa detone se não o fizer automaticamente."
        },
        "Rj2vwCAvhtc4VbOw": {
          "name": "Runa Detonante",
          "description": "Os ataques e habilidades do dragão rúnico podem deixar uma runa detonante em seus alvos. Se uma criatura receberia uma runa detonante enquanto já possui uma, em vez de adicionar outra runa, sua runa detonante atual será ativada, causando 6d6 de dano não tipificado ao alvo e gastando a runa. O tipo de dano da runa detonante corresponde à Runa de Mudança atual do dragão. Uma criatura pode usar uma ação de Interagir para remover a runa. Runas detonantes desaparecem após 1 minuto se não forem detonadas."
        },
        "DYsAQWK06hC13mD4": {
          "name": "Runa Enredadora",
          "description": "O dragão rúnico cria uma grande runa de armadilha em um tipo de 3 metros: explosão dentro de 60 pés (18 metros). Uma criatura que não seja o dragão que entra em uma área presa ou termina seu turno na área presa ativa a runa, fazendo com que ela os enrede. Essa criatura deve ser bem sucedida em um teste de resistência (reflexo, dc:41) ou ficará Imobilizada por 1 minuto ou até escapar. A runa pode prender apenas uma criatura por vez. A runa desaparece quando uma criatura obtém sucesso contra a runa, quando uma criatura consegue escapar da runa ou após 1 minuto. Uma criatura adjacente à runa pode usar uma ação de Interagir para remover a runa."
        },
        "i7kuaOQCvKjQ623q": {
          "name": "Respiração Rúnica",
          "description": "O dragão lança centenas de runas explosivas que detonam com o impacto, causando 17d6 de dano não digitado em um salvamento de tipo:cone de 15 metros (verificação (reflexo, dc:41, básico, opções:efeito de área)). O tipo de dano desta habilidade é determinado pela Shifting Rune. Criaturas que falham no salvamento também são afetadas pela runa detonante. O dragão não pode usar Sopro Rúnico novamente por [[/gmr 1d4 #Recarregar Sopro Rúnico]]."
        },
        "aXvfwxeI9u0AxsD4": {
          "name": "Runas Mutáveis",
          "description": "O dragão rúnico escolhe entre ácido, frio, eletricidade, fogo ou dano sônico. As runas gravadas no dragão mudam, formando runas dessa energia em suas escamas. O dragão ganha imunidade a esse tipo de dano, e suas runas detonantes e Sopro Rúnico causam esse tipo de dano. Qualquer pessoa treinada em Arcana pode reconhecer imediatamente o tipo de energia da runa gravada sem teste."
        },
        "CQ9nD7pDn1twxnL1": {
          "name": "Trilha de Runas",
          "description": "O dragão rúnico avança, deixando para trás uma coleção de runas onde quer que pise. O dragão escolhe deixar para trás runas detonantes ou runas emaranhadas. Cada espaço pelo qual o dragão se move, incluindo espaços ocupados por criaturas, ganha uma runa. Essas runas são ativadas automaticamente quando uma criatura que não seja o dragão rúnico entra no espaço ou termina seu turno no espaço. Caso contrário, as runas podem ser removidas ou desaparecer normalmente."
        },
        "B3ruyvS6l8vioWPg": {
          "name": "Push aprimorado 15 pés (4,5 metros)",
          "description": ""
        }
      },
      "spellcasting": {
        "nEyhWzDPgazwMsA7": {
          "name": "magias Arcanos Preparados",
          "category": "preparado",
          "spells": {
            "6V0YjvR0dQDedoUH": {
              "name": "Alarme"
            },
            "1AIMjaJEuOY6dpGd": {
              "name": "Detectar magia"
            },
            "1YJJutu8IkZVw1s6": {
              "name": "Temer"
            },
            "54j75KYBClp8c9iE": {
              "name": "Rajada de Vento"
            },
            "3p0oHMsmZGSKc2Tb": {
              "name": "Ignição"
            },
            "yrHGy1lB0AwO2mA3": {
              "name": "Mensagem"
            },
            "myzzlJQfRiNYxPCD": {
              "name": "Sigilo"
            },
            "O9yDmIXbdQXbbGN4": {
              "name": "Mão Telecinética"
            },
            "lfbmnQ4WgPBNOp4k": {
              "name": "Borrão"
            },
            "r6Mb7KCSSugAioi1": {
              "name": "Dissipar Magia"
            },
            "eCzurVg4BDjtDGnG": {
              "name": "Incorporar mensagem"
            },
            "DF25BOxvTUvURcOw": {
              "name": "Traduzir"
            },
            "OiykRQTKvyhzjRlD": {
              "name": "Bola de fogo"
            },
            "6TnwtPiQfcBjFwdt": {
              "name": "Poço Gravitacional"
            },
            "nSvr1M5jODicR5RW": {
              "name": "Véu de Privacidade"
            },
            "M3gDzozoz65dxKG3": {
              "name": "Muralha de Fogo"
            },
            "I3VYQf6KRTq03GjP": {
              "name": "Nevasca uivante"
            },
            "ijFc3zAbPPFzLO4a": {
              "name": "Cofre Imaginário"
            },
            "nBihXzDO5d93TvYh": {
              "name": "Fala Verdadeira"
            },
            "a773jSBk5DbxQqxs": {
              "name": "Cadeia de Relâmpagos"
            },
            "A4jKElUl7lYkJTEU": {
              "name": "Vidência"
            },
            "NPh3SL1S9c0IX8XG": {
              "name": "Muralha da Força"
            },
            "ZsqhFi5tBJqL2zSa": {
              "name": "Selo Planar"
            },
            "5A1ojLziOEYy2glF": {
              "name": "magia de resposta"
            },
            "eFUl1UhMwsJNf6vs": {
              "name": "Mente Oculta"
            },
            "RAwJd78wBkKLKwOf": {
              "name": "Dilema"
            },
            "t8Rc0aZokDd6k4RR": {
              "name": "Observação implacável"
            },
            "cBXY6ukY95UGdtbw": {
              "name": "Detonar Magia"
            },
            "ZwxZ7zhBHXvzvwJJ": {
              "name": "Estrelas cadentes"
            },
            "8Hyhq6XlMP6ZGRU9": {
              "name": "Previsão"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a6455d5aca3b89e9e304c83921c128ed572bf898479041a4a915312ffda3aee9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Rúnico (Antigo)",
      "description": "Os dragões rúnicos têm uma visão inata sobre o poder das runas. A maioria dos dragões rúnicos mantém uma variedade de runas gravadas em suas escamas, que seus corpos podem fortalecer magicamente. Eles normalmente não lançam magias sozinhos, em vez disso, confiam em sua habilidade de criar runas instantaneamente para produzir os efeitos desejados. Um dragão rúnico geralmente se refere ao seu tesouro como sua biblioteca, pois está cheio de importantes textos históricos, peças, discursos, livros didáticos e livros de magias escritos por pessoas de diferentes culturas em uma variedade de idiomas. Embora muitas vezes possam falar uma língua com a ajuda da magia, eles preferem aprender línguas no contexto de seus falantes, para que possam compreender as nuances escondidas na sintaxe e na magia de seus símbolos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "magicsense-imprecise-60": "magicsense-imprecise-60",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico"
      },
      "defenses": {
        "immunities": [
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "nMoAKfyDDAoQfjPJ": {
          "name": "Garra",
          "damage": "4d6+16 cortante"
        },
        "vWI3q4eiStz5qqHx": {
          "name": "Maxilas",
          "damage": "4d8+16 perfurante"
        },
        "8A5XIY3Hlr1wxzJm": {
          "name": "Cauda",
          "damage": "4d10+16 contundente"
        }
      },
      "actions": {
        "RlvDOe4pR33tuNVr": {
          "name": "Sentido Mágico",
          "description": "O dragão rúnico está ciente de quaisquer habilidades e efeitos mágicos ativos dentro do alcance listado. Quando o dragão Procura, ele ganha os benefícios de uma magia de detecção mágica de 4º Rank dentro do alcance listado (além dos benefícios normais de Procurar)."
        },
        "qwuKOZdikMj02pRU": {
          "name": "Escalas Rúnicas",
          "description": "As escamas do dragão rúnico funcionam como pedras rúnicas. O dragão rúnico não pode usar os efeitos ou habilidades das runas gravadas em suas escamas, mas pode transferir essas runas para objetos apropriados. Transferir uma runa para ou de um item desta forma requer 1 minuto, durante o qual o dragão fica fora de guarda. O processo é automático e não requer teste, mas se o dragão parar ou for interrompido neste processo, a runa é destruída. Um dragão rúnico pode ter qualquer número de runas gravadas em suas escamas, embora normalmente tenha apenas um punhado de runas gravadas em suas escamas por vez."
        },
        "5Nrc64gApPzUy279": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "SI4dLQQdhQ6nWs5J": {
          "name": "Cancelando Runa",
          "description": "Gatilho O dragão é alvo de um magia que requer um teste de resistência\nEfeito O dragão tenta desfazer as runas fundamentais do magia. Eles tentam neutralizar o magia (neutralizar Rank 10, modificador de neutralização [[/r 1d20+33 #Counteract]]). Se tiver sucesso, o dragão não será afetado pelo magia; outros assuntos são afetados pela magia normalmente. O dragão não pode usar a Runa de Cancelamento novamente para [[/gmr 1d4 #Recharge Canceling Rune]]."
        },
        "L8w8yFgsSTRZPPKw": {
          "name": "Runa Retributiva",
          "description": "Gatilho Uma criatura dentro de 15 pés (4,5 metros) causa dano ao dragão rúnico\nEfeito Com uma explosão de magia rúnica, o dragão rúnico usa sua habilidade rúnica detonadora na criatura desencadeadora e imediatamente faz com que a runa detone se não o fizer automaticamente."
        },
        "Rj2vwCAvhtc4VbOw": {
          "name": "Runa Detonante",
          "description": "Os ataques e habilidades do dragão rúnico podem deixar uma runa detonante em seus alvos. Se uma criatura receberia uma runa detonante enquanto já possui uma, em vez de adicionar outra runa, sua runa detonante atual será ativada, causando 6d6 de dano não tipificado ao alvo e gastando a runa. O tipo de dano da runa detonante corresponde à Runa de Mudança atual do dragão. Uma criatura pode usar uma ação de Interagir para remover a runa. Runas detonantes desaparecem após 1 minuto se não forem detonadas."
        },
        "eHozVgrHl2EW2OBo": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "IiyJK3dEYHm1gnNg": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Rúnico sempre que consegue um acerto crítico com um Golpe."
        },
        "DYsAQWK06hC13mD4": {
          "name": "Runa Enredadora",
          "description": "O dragão rúnico cria uma grande runa de armadilha em um tipo de 3 metros: explosão dentro de 60 pés (18 metros). Uma criatura que não seja o dragão que entra em uma área presa ou termina seu turno na área presa ativa a runa, fazendo com que ela os enrede. Essa criatura deve ser bem sucedida em um teste de resistência (reflexo, dc:41) ou ficará Imobilizada por 1 minuto ou até escapar. A runa pode prender apenas uma criatura por vez. A runa desaparece quando uma criatura obtém sucesso contra a runa, quando uma criatura consegue escapar da runa ou após 1 minuto. Uma criatura adjacente à runa pode usar uma ação de Interagir para remover a runa."
        },
        "i7kuaOQCvKjQ623q": {
          "name": "Respiração Rúnica",
          "description": "O dragão lança centenas de runas explosivas que detonam com o impacto, causando 17d6 de dano não digitado em um salvamento de tipo:cone de 15 metros (verificação (reflexo, dc:41, básico, opções:efeito de área)). O tipo de dano desta habilidade é determinado pela Shifting Rune. Criaturas que falham no salvamento também são afetadas pela runa detonante. O dragão não pode usar Sopro Rúnico novamente por [[/gmr 1d4 #Recarregar Sopro Rúnico]]."
        },
        "aXvfwxeI9u0AxsD4": {
          "name": "Runas Mutáveis",
          "description": "O dragão rúnico escolhe entre ácido, frio, eletricidade, fogo ou dano sônico. As runas gravadas no dragão mudam, formando runas dessa energia em suas escamas. O dragão ganha imunidade a esse tipo de dano, e suas runas detonantes e Sopro Rúnico causam esse tipo de dano. Qualquer pessoa treinada em Arcana pode reconhecer imediatamente o tipo de energia da runa gravada sem teste."
        },
        "CQ9nD7pDn1twxnL1": {
          "name": "Trilha de Runas",
          "description": "O dragão rúnico avança, deixando para trás uma coleção de runas onde quer que pise. O dragão escolhe deixar para trás runas detonantes ou runas emaranhadas. Cada espaço pelo qual o dragão se move, incluindo espaços ocupados por criaturas, ganha uma runa. Essas runas são ativadas automaticamente quando uma criatura que não seja o dragão rúnico entra no espaço ou termina seu turno no espaço. Caso contrário, as runas podem ser removidas ou desaparecer normalmente."
        },
        "B3ruyvS6l8vioWPg": {
          "name": "Push aprimorado 15 pés (4,5 metros)",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tzitzimitl",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:eae13da91dc0614e91181b859069efad2ad433cebbac6f8abf6ab4ee15eaf532",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Tzitzimitl",
      "description": "Devido à sua afinidade com a escuridão e o terror apocalíptico, os tzitzimitls são amplamente temidos como arautos da morte e da destruição. Um eclipse solar marca sua chegada, e eles extraem estranhos poderes de escuridão e eletricidade desses fenômenos. Alguns sábios acreditam que os tzitzimitls são instrumentos dos deuses, chamados para destruir mundos cujos tempos chegaram, enquanto outros afirmam que eles são restos mortos-vivos de exilados perdidos de uma civilização distante de gigantes viajantes espaciais. Tais lendas são antigas e fragmentadas, mas algumas falam de tzitzimitls sendo derrotados por grandes heróis e selados – embora essas histórias impliquem que os enormes mortos-vivos agora estão enterrados e esperando, logo para atacar novamente caso suas tumbas sejam violadas.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "aklo": "aklo",
        "chthonian": "chthoniano",
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "eletricidade",
          "paralisado",
          "tóxico",
          "inconsciente"
        ],
        "resistances": [
          "frio 15",
          "físico 15, exceto espancamento"
        ],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "HX7brgti33CpG500": {
          "name": "Garra",
          "damage": "4d12+10 cortante; 3d8 eletricidade"
        },
        "mBQOdRR8ip1bwowt": {
          "name": "Feixe ocular",
          "damage": "4d12 eletricidade; 10d6 força"
        }
      },
      "actions": {
        "HAgM1p434yiOuIsm": {
          "name": "magias Constantes",
          "description": ""
        },
        "QeKCPHhK6KpCJFHc": {
          "name": "Cura Rápida 15",
          "description": ""
        },
        "edfwgCM7hHGenY8w": {
          "name": "Claro para escuro",
          "description": "Gatilho Uma criatura usa uma habilidade ou magia com o traço vitalidade dentro de 120 pés (36 metros) do tzitzimitl\nEfeito O tzitzimitl inverte a energia usada na habilidade ou magia desencadeador, fazendo com que ele perca o traço de vitalidade e ganhe o traço de vazio, e mudando todas as ocorrências de energia de vitalidade ou cura na descrição da habilidade para energia do vazio."
        },
        "aRkL3pTg7b3AwDtI": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "MnxoiTB0KjKxqQyb": {
          "name": "Drenar Vida",
          "description": "Quando o Golpe da garra de um tzitzimitl causa dano a uma criatura viva, o tzitzimitl ganha 20 Pontos de Vida temporários, e o alvo deve ter sucesso em um teste (fortitude, dc:41, opções:inflige:drenado) ou fica Drenado 2. O dano adicional causado pelo Golpe da garra de um tzitzimitl aumenta o valor da condição drenado em 2 em caso de falha no salvamento, até um máximo de Drenado 4.\nEfeito: Drenar Vida"
        },
        "FD51vd3EOaMnqu67": {
          "name": "Eclipse",
          "description": "Efeito O tzitzimitl lança escuridão e drena o calor e o calor da área da magia escuridão. Cada criatura dentro da área da magia deve tentar um teste de resistência (fortitude, dc:41).\nSucesso Crítico A criatura sofre 4d8 de dano de frio.\nSucesso A criatura sofre 8d8 de dano de frio e fica 1 de Lentidão por 1 rodada.\nFalha A criatura sofre 16d8 de dano de frio e fica lenta em 1 por 1 minuto.\nFalha Crítica A criatura sofre 16d8 de dano de frio, fica Lentidão 2 por 1 minuto e está Condenada 1."
        }
      },
      "spellcasting": {
        "1r5gMk85DnCBJX6E": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "yPeVMbPHP0DBygq2": {
              "name": "Detectar magia"
            },
            "KlYBwTZ9vxurSSVa": {
              "name": "Pressa"
            },
            "3ct8sc1S4nXiK9Hu": {
              "name": "Escuridão"
            },
            "FJKJfYGvks8v0031": {
              "name": "Visão Verdadeira (Constante)"
            },
            "Hu1mowNKI2QBSQ6U": {
              "name": "Explosão de Eclipse"
            },
            "pLvCaQBJMCUyPCrN": {
              "name": "Teleporte"
            },
            "ATaUsqyi3sZyG74R": {
              "name": "Escuridão"
            },
            "VbbfnJlW8s4ctHGZ": {
              "name": "Teleporte"
            },
            "xJYDv1jtT7Q9Ad5e": {
              "name": "Lamentos dos Amaldiçoados"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cinder-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:41f6610f37c67bf83f827ea5f1354250cfd41030e714f6e7afd67879cb32fb68",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Cinzento (Antigo, Feiticeiro)",
      "description": "Entre os maiores e mais ferozes dragões, os dragões de cinza são tipicamente voláteis, exigindo respeito – até mesmo deferência – de criaturas inferiores. A aparência dos dragões de cinza evoca sua chama, muitas vezes em escamas com padrões mistos de vermelho, laranja e amarelo. Muitos dragões de cinzas habitam vulcões ativos e locais igualmente ígneos. Dragões de cinzas preferem tesouros que possam suportar o calor de seus corpos e covis, com pedras preciosas, ouro e prata comuns entre seus tesouros.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "pyric": "pírico"
      },
      "defenses": {
        "immunities": [
          "fogo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "frio 20"
        ]
      },
      "attacks": {
        "IrTg9nWwV4OiOQW8": {
          "name": "Maxilas",
          "damage": "1d8 fogo; 4d12+12 perfurante"
        },
        "yOmS98L3WqFRPhXZ": {
          "name": "Buzina",
          "damage": "3d12+16 perfurante"
        },
        "ZGe2glGQxF2jA1C2": {
          "name": "Garra",
          "damage": "4d10+12 cortante"
        },
        "nSwGIvjZwxGfs5ON": {
          "name": "Cauda",
          "damage": "4d8+12 contundente"
        },
        "Usl81LEUxCtzXkzk": {
          "name": "Asa",
          "damage": "4d8+12 cortante"
        }
      },
      "actions": {
        "9SJBTraIuJdXV6FB": {
          "name": "Visão de fumaça",
          "description": "A fumaça não prejudica a visão de um dragão de cinzas; eles ignoram a condição Oculto da fumaça."
        },
        "T5A6q7Af8YZ9uCkW": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "zNzGiGscx8mWgPNk": {
          "name": "Sangue fervente",
          "description": "Gatilho O dragão é atingido criticamente por um ataque corpo a corpo\nEfeito O sangue superaquecido do dragão derrama sobre o atacante. O alvo sofre 10d6 de dano de fogo (teste de resistência (reflexo, dc:41, básico))."
        },
        "SqfVOvexkATbeU7x": {
          "name": "Calor do Dragão",
          "description": "5 pés (1,5 metros). 4d6 de dano de fogo (teste (reflexo, dc:37, básico, opções:efeito de área) salvamento)"
        },
        "FvCzcBVRvmZ11mTe": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:39, opções:efeito de área,inflige:assustado)"
        },
        "QWxMF0tTh2JjNiIy": {
          "name": "Ataque Reativo (somente Mandíbulas)",
          "description": ""
        },
        "qg1YTpzUg6KvMuWQ": {
          "name": "Tudo vira chama",
          "description": "O dragão amaldiçoa uma criatura dentro de 60 pés (18 metros) para que sua magia seja substituída por chamas primordiais. A criatura deve tentar um teste de resistência (vontade, dc:39). Independentemente do resultado, o alvo fica temporariamente imune por 1 dia.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica amaldiçoada por 1 rodada. Enquanto amaldiçoado, qualquer dano que a criatura amaldiçoada causaria por qualquer meio torna-se dano de fogo, independentemente do tipo de dano original. A criatura amaldiçoada pode suprimir temporariamente a maldição por 1 rodada como uma ação.\nFalha Como sucesso, mas a duração da maldição é de 1 hora.\nFalha Crítica Como sucesso, mas a duração da maldição é de 1 dia."
        },
        "NEGCX9pCG8gyZcjL": {
          "name": "Respiração da Pira",
          "description": "O dragão cospe uma explosão de chamas que causa 18d6 de dano de fogo em um tipo de 18 metros:cone (teste (reflexo, dc:41, básico, opções:efeito de área) salvamento). Criaturas que falham criticamente em seu teste pegam fogo, sofrendo 2d6 de dano de fogo persistente. A área então se enche de fumaça preta por 1 minuto. Isto tem efeitos de névoa, exceto que preenche a área do cone. O dragão não pode usar Sopro da Pira novamente por [[/gmr 1d4 #Recarrega Sopro da Pira]]."
        },
        "jmrC9phVteComdYb": {
          "name": "Acenda as chamas",
          "description": "O dragão intensifica incêndios próximos. Cada inimigo dentro de 60 pés (18 metros) que esteja sofrendo dano de fogo persistente sofre 5d6 de dano de fogo."
        }
      },
      "spellcasting": {
        "Qegys3OfHC3yEFrw": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "ZLVe5r1kwiWun4ap": {
              "name": "Cozinha Limpa"
            },
            "U1ZZgdqQJvGBKTqQ": {
              "name": "Detectar magia"
            },
            "9hRQF2eGoNE3FekQ": {
              "name": "Temer"
            },
            "16eZNZYp1HwQvZbi": {
              "name": "Ignição"
            },
            "rC9lhD4oFfvYY1kW": {
              "name": "Mensagem"
            },
            "ziCFbNNdnLNZPN6Y": {
              "name": "Leia aura"
            },
            "DCiK3ztenhoQchRV": {
              "name": "Sigilo"
            },
            "ScAfboeIPOOvRArQ": {
              "name": "Ventriloquismo"
            },
            "e3OuYdLM1bGKLwtV": {
              "name": "Raio Flamejante"
            },
            "p8VdZNLYqCnVxp17": {
              "name": "Dissipar Magia"
            },
            "yk5hpXT2mPi6shcG": {
              "name": "Chama Flutuante"
            },
            "2P2SGh2CCimYDJKe": {
              "name": "Névoa"
            },
            "kWRPV4dim2iFtlXY": {
              "name": "Revelando Luz"
            },
            "W4WuqH7sifaPwDHN": {
              "name": "Bola de fogo"
            },
            "8RqgdakmnskbKZlG": {
              "name": "Pressa"
            },
            "VcKSTTNu3smhzrzg": {
              "name": "Escudo de Fogo"
            },
            "VKxNIiOg6ohyqdJV": {
              "name": "Resiliência da Montanha"
            },
            "6ozfJUt6YiQQ62Zx": {
              "name": "Muralha de Fogo"
            },
            "LeHl80popIZA0wNM": {
              "name": "Nuvem tóxica"
            },
            "DQpfnyDstiCfC7Pg": {
              "name": "Metamorfose Amaldiçoada"
            },
            "zem75ef0wYMCrupp": {
              "name": "Visão Verdadeira"
            },
            "5vFzSAmbYMW4Gccg": {
              "name": "Executar"
            },
            "aY1Ib1toijKUt5jd": {
              "name": "Corpo Ardente"
            },
            "1o49bQyDezgEJWtD": {
              "name": "Erupção Vulcânica"
            },
            "jAmeihv6QZevLpGt": {
              "name": "Dessecar"
            },
            "cWtYAsEgsIW2rHJ3": {
              "name": "Detonar Magia"
            },
            "jqLlqCDQp82VhNB5": {
              "name": "Estrelas cadentes (somente asteróides)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:draconal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:333602529139e573c464e57cf17767f3f9563719cc0ac6e9fd6d7bd12dbf18a6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Draconal",
      "description": "Os dragões agathions, conhecidos como draconais, estão entre os mais poderosos de seus parentes e também os mais sábios, incorporando a sabedoria de um benevolente rei-filósofo. Com sua sabedoria vem uma elevação acima dos assuntos materiais, tornando-os os mais afastados dos problemas e da vida dos mortais. Os Draconais servem como guardiões da magia poderosa e dispensam sua sabedoria a serviço do bem maior do Nirvana e dos planos celestes.\nComo seres celestiais, os dragonais se opõem a forças profanas e perversas. Eles são criaturas pacientes e eternas, e suas maquinações contra as forças do mal às vezes ocorrem em um ritmo glacial. Draconais tendem a ter um impacto mais imediato e direto trabalhando como mentores dos mortais. Eles podem fornecer conselhos e conhecimento a indivíduos ou grupos de heróis que trabalham contra a maldade, guiando os mortais a extirpar o mal com a precisão de um bisturi. Esta orientação também permite que um draconal mantenha seu foco em assuntos planares ou em um plano maior e de longo prazo contra o mal. Alguns draconais veem a presença do mal como algo útil, uma motivação para colocar criaturas benevolentes em ação. Para os mortais, essa perspectiva às vezes pode parecer indiferença, mas os dragonais raramente permitem conscientemente que um mal saia do controle.\nDraconais parecem mais dracônicos do que humanóides. Eles andam sobre as patas traseiras e se equilibram em suas longas caudas semelhantes a serpentes. Garras afiadas inclinam suas mãos humanóides escamosas. Cada dragão muitas vezes incorpora algum tipo de sabedoria central. Essa sabedoria muitas vezes afeta sua aparência física de maneiras distintas. Por exemplo, um dragão que acredita que a maior sabedoria está em compreender a si mesmo provavelmente terá escamas reflexivas, permitindo que aqueles que olham para elas se vejam plenamente. Por causa disso, os dragonais vêm em diferentes formas, tamanhos e cores.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "jM8u0XT9Sa7pRtSV": {
          "name": "Maxilas",
          "damage": "4d6 espiritual; 3d12+18 perfurante"
        },
        "KT7W9p8kGmSrImjf": {
          "name": "Garra",
          "damage": "3d8+18 cortante; 4d6 espiritual"
        }
      },
      "actions": {
        "h8RD2dr2488hXgPv": {
          "name": "Sopro de Sabedoria",
          "description": "O dragonal respira uma explosão de energia que causa 21d6 de dano espiritual às criaturas que ele escolher causar dano em um tipo de 18 metros: cone (teste (reflexo, dc:44, básico, opções:efeito de área) salvamento). Eles podem tornar esse efeito não letal para criaturas selecionadas na área ou optar por não causar dano a certas criaturas. Eles não podem usar Breath of Wisdom novamente por [[/gmr 1d4 #Recharge Breath of Wisdom]]."
        },
        "ESaeFbsRtq9zNe1L": {
          "name": "Sabedoria do Dragão",
          "description": "Os Draconais incorporam o valor central da sabedoria, e toda sabedoria é obtida através da compreensão. Se um dragonal recordar com sucesso o conhecimento sobre uma criatura, ele aprende sua maior fraqueza além de qualquer outro conhecimento obtido, e qualquer dano espiritual que ele causa a essa criatura torna-se dano de sua maior fraqueza conhecida."
        }
      },
      "spellcasting": {
        "bTWrHeFhzqKFfcTT": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "jaak7zWehU9263D0": {
              "name": "Fale com animais (constante)"
            },
            "IN3IEtcFSZw5DOe9": {
              "name": "Visão Verdadeira (Constante)"
            },
            "lv6AfezIYSklIqfZ": {
              "name": "Truespeech (constante)"
            },
            "Eewha27y6U3TnemO": {
              "name": "Sopro de Vida"
            },
            "77BJuK3o6qLYepDM": {
              "name": "Dissipar Magia"
            },
            "79sP0aVYxBPOyKVv": {
              "name": "Decreto Divino"
            },
            "Rc79YR6QnHs9Z9vR": {
              "name": "Terremoto"
            },
            "EXtPcYTrIgZOlu6K": {
              "name": "Curar"
            },
            "gosMKmQEqb3OWXLM": {
              "name": "Implosão"
            },
            "OhZJs8sPATjdhHPK": {
              "name": "Tempestade Furiosa"
            },
            "RMkWXBUEM8oUot68": {
              "name": "Manifestação"
            }
          }
        },
        "OkvUeU7hnlPh9jRR": {
          "name": "magia de Foco de Campeão",
          "category": "foco",
          "spells": {
            "J1wp5cLRhXki10bb": {
              "name": "Coloque as mãos"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:33253c3eb66233467ef54cba3f42f9bb061a603419447ad919477631df261ad5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Réquiem (Antigo)",
      "description": "Os dragões Requiem são administradores do Rio das Almas e do processo através do qual as almas chegam ao seu destino final na vida após a morte. A jornada segura de uma alma é de extrema importância para um dragão réquiem, e alguns seguirão almas individuais desde sua primeira entrada no rio até seu julgamento no Boneyard e, eventualmente, até seu local de descanso final. A maioria dos dragões de réquiem se ligam a planos específicos e pastoreiam quaisquer almas ligadas a esse plano, levando a dragões ligados a lugares como o Céu ou o Inferno, embora esses dragões nunca jurem lealdade verdadeira a esses planos. Dragões réquiem enchem seus covis ao longo do Rio das Almas – retalhos de arquitetura sombria resgatados de outros planos – com registros inestimáveis ​​e lembranças de grandes realizações.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-120": "lifesense-impreciso-120",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "daemonic": "demoníaco",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "requian": "requian"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "knzrD5SFrlVeyHhp": {
          "name": "Buzina",
          "damage": "4d10+15 perfurante; 2d8 espiritual"
        },
        "wyJW030tjlMqlOFy": {
          "name": "Garra",
          "damage": "4d6+15 cortante; 2d8 espiritual"
        },
        "MfU1Is4nFaLYi4YN": {
          "name": "Cauda",
          "damage": "4d8+15 contundente; 2d8 espiritual"
        }
      },
      "actions": {
        "qd9Km8K4PdsnWLbX": {
          "name": "Jornada da Alma",
          "description": "O dragão passa 1 hora viajando através de canais planares para chegar ao Rio das Almas e então chega a qualquer ponto ao longo do rio. Isto tem os efeitos do Teleporte Interplanar, exceto que o dragão pode chegar precisamente onde quiser em qualquer plano principal."
        },
        "cyDi0Va1gzTRN2G4": {
          "name": "Visão de status",
          "description": "O dragão réquiem conhece automaticamente os Pontos de Vida de todas as criaturas que pode ver."
        },
        "So4yBcmRWdbLG8JN": {
          "name": "Âncora da Alma",
          "description": "Uma criatura dentro de 60 pés (18 metros) cairia para 0 Pontos de Vida\nEfeito O dragão ancora a alma da criatura desencadeadora em seu corpo. A criatura permanece com 1 Ponto de Vida, fica Condenada 2 e ganha cura rápida igual ao nível do dragão por 1 minuto. A criatura fica temporariamente imune a novos usos da Soul Anchor por 24 horas.\nEfeito: Âncora da Alma"
        },
        "3kVLpqskZEeFu5Jc": {
          "name": "Reter a morte",
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O dragão resiste ao afrouxamento de sua própria alma, evitando alguns danos. O dragão ganha resistência 20 a todos os danos contra o ataque desencadeador."
        },
        "O3ebBljtcItTfmVr": {
          "name": "Respiração Condenadora",
          "description": "A energia da Forja da Criação irrompe da boca do dragão, causando 16d8 de dano espiritual em um salvamento de tipo: linha de 36 metros (verificação (reflexo, dc: 42, básico, opções: efeito de área)). Criaturas mortas-vivas que falharem no salvamento também devem ter sucesso em um teste (vontade, dc:42, opções:efeito de área,infligir:condenado) no salvamento ou se tornarão Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 4). O dragão não pode usar Dooming Breath novamente por [[/gmr 1d4 #Recharge Dooming Breath]]."
        },
        "OPtrKq8gnuusiAqH": {
          "name": "Frenesi Dracônico",
          "description": "O dragão dá dois golpes com as garras e um com a cauda em qualquer ordem."
        },
        "WS1ygMI5ueVbLBHQ": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Dooming sempre que consegue um acerto crítico com um Golpe."
        },
        "DEBBR8MAQkVMQvCH": {
          "name": "Redirecionar Rio",
          "description": "O dragão réquiem redireciona uma pequena porção do Rio das Almas, usando seu corpo como uma conexão espiritual. O rio cresce ao redor deles, preenchendo a área com uma emanação de 4,5 metros por 1 rodada, tornando-se terreno difícil para todas as outras criaturas. Além disso, as criaturas que iniciam seu turno na emanação ou entram nela pela primeira vez em cada rodada devem ser bem-sucedidas em um teste (fortitude, dc:42, básico, opções:efeito de área,infligir:drenado,infligir:condenado) salvar ou tornar-se Drenado 1 e Condenado 1. Se o alvo já estiver drenado ou condenado, o valor aumenta em 1 (até um máximo de 4). O dragão pode sustentar o efeito."
        },
        "pVA84K2nKuClLYVw": {
          "name": "Escudo da Alma",
          "description": "Frequência uma vez por dia\nEfeito O dragão réquiem usa sua essência vital para criar um escudo de energia espiritual ao redor de uma criatura dentro de 60 pés (18 metros). O escudo cria uma ligação entre o dragão e a criatura com os efeitos de Compartilhar Vida, exceto que o efeito não termina independentemente da distância e permanece por 1 hora. Além disso, a criatura ganha resistência 10 a danos físicos e espirituais que se aplicam à metade do dano que ela recebe. O dragão pode Dispensar o efeito."
        },
        "4A1V10giNIvOoOG4": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "G4dVxcO1EbpdB0xz": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "ofkR72Hv3Oee1zyU": {
              "name": "Estabilizar"
            },
            "3XiAKSCJlDJwf8no": {
              "name": "Curar"
            },
            "Fu2fOQrUhkn6hBVN": {
              "name": "Curar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:bikkhasura",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e989e5b412e43475a56c15193a568395b8d7181fd6f83713d71520e0cbbe869c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bikhasura",
      "description": "Asura que reencarnaram à força ao longo de inúmeras vidas, os bikkhasuras atingiram níveis de poder quase divinos.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico"
      },
      "defenses": {
        "immunities": [
          "xingamento",
          "doença",
          "ilusão",
          "tóxico",
          "polimorfo"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "co85oJMEYT4np1Ws": {
          "name": "Lâmina Espiritual",
          "damage": "4d6+15 cortante; 4d6 espiritual"
        },
        "t3W7x3vMgxBkz2rv": {
          "name": "Maxilas",
          "damage": "4d6 veneno; 4d10+15 perfurante"
        },
        "NVXYzTDStWOO8NBj": {
          "name": "Garra",
          "damage": "4d8+15 cortante; 1d6 espiritual"
        }
      },
      "actions": {
        "SXT1G9YECDHuUU9z": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "9qxyNm7RriAoZgT3": {
          "name": "Visão Geral",
          "description": ""
        },
        "pjKgG3BlSBcGOvHy": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "NLbEftfTzEEe0lJa": {
          "name": "Regeneração 20",
          "description": ""
        },
        "aFKzNiRVaunG84Pr": {
          "name": "Aura Inescapável",
          "description": "30 pés (9 metros). As criaturas não podem se teletransportar para dentro ou para fora da aura do bikkhasura. As criaturas que tentam se teletransportar para a aura se teletransportam para a borda mais próxima da aura. Qualquer tentativa de teletransporte para fora da aura é automaticamente interrompida."
        },
        "7t9Oam4tBklr87Er": {
          "name": "Ataque reativo",
          "description": "O bikkhasura ganha 5 reações adicionais no início de cada um de seus turnos, que só podem ser usadas para um Ataque Reativo."
        },
        "oarMdl7V46eiEQpW": {
          "name": "Tempestade de Lâminas",
          "description": "Requisitos O bikkhasura está segurando seis lâminas espirituais\nEfeito O bikkhasura realiza até seis golpes de lâmina espiritual, cada um contra um alvo diferente. Esses ataques contam para a penalidade de ataque múltiplo do bikkhasura, mas a penalidade de ataque múltiplo não aumenta até depois de todos os ataques."
        },
        "rDoIdBrmNSbmf70H": {
          "name": "Maldição da Sabedoria",
          "description": "Teste de salvamento (vontade, dc:42)\nEstágio 1 12d6 de dano mental e o alvo não pode usar reações (1 rodada)\nEstágio 2 14d6 de dano mental e o alvo fica Lento 2 (1 rodada)\nEstágio 3 15d6 de dano mental e o alvo fica paralisado (1 rodada)"
        },
        "hsqjHuz0M1HBbm0p": {
          "name": "Lâminas Espirituais Diretas",
          "description": "Requisitos O bikkhasura tem suas lâminas espirituais\nEfeito O bikkhasura direciona uma de suas lâminas espirituais para atacar um alvo até uma distância de 50 pés (15 metros). Uma vez que um bikkhasura direciona uma lâmina espiritual para atacar um inimigo, a lâmina continua a fazer um único ataque contra aquele inimigo a cada rodada no turno do bikkhasura até que seja orientado de outra forma pelo bikkhasura e enquanto o inimigo permanecer dentro de 50 pés (15 metros) do bikkhasura. Essas armas atacam usando as mesmas estatísticas do Golpe da lâmina espiritual do bikkhasura e usam a penalidade de ataque múltiplo do bikkhasura. Quaisquer lâminas que não estejam dentro de 50 pés (15 metros) do bikkhasura no final do turno desaparecem."
        },
        "4I1S8HFMMtC8fOp9": {
          "name": "Rosto Glorioso",
          "description": "O asura se santifica como sagrado ou profano, ganhando a característica correspondente à sua escolha e perdendo a característica oposta; seus golpes, magias e habilidades também ganham a característica correspondente à sua escolha. O asura também ganha fraqueza 15 à santificação oposta e perde qualquer fraqueza à santificação escolhida. A escolha é permanente até que o asura use esta habilidade para mudar sua santificação."
        },
        "56TN3B8LosXiCjw1": {
          "name": "Vislumbre horrível",
          "description": "Frequência uma vez por rodada\nAcionar O bikkhasura usa Glorious Visage\nEfeito O bikkhasura explode com energia espiritual, causando 9d6 de dano espiritual a todas as criaturas dentro de 30 pés (9 metros). Esta habilidade tem o traço sagrado se o bikkhasura tiver o traço sagrado e o traço profano quando o bikkhasura tiver o traço profano."
        },
        "GN6yyhXaCmNIepzW": {
          "name": "Lâminas Espirituais",
          "description": "Frequência uma vez por hora\nEfeito O bikkhasura invoca seis lâminas feitas de energia espiritual. As lâminas aparecem nas mãos do bikkhasura ou flutuam ao lado do bikkhasura até que o asura direcione uma ou gaste uma ação de Interagir para agarrá-la. As lâminas espirituais podem ser dissipadas com um teste de contra-ataque bem-sucedido (neutralizar Rank 10, neutralizar CD 42). Um contra-ataque bem-sucedido dissipa todas as lâminas, mesmo que algumas tenham sido direcionadas para longe do bikkhasura."
        },
        "JWDjkf5ALYjOtnRJ": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "MFIXbI8eKRTx1JTl": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "TETg5tutCN9137Kf": {
              "name": "Amarração Planar"
            },
            "qcMnhVzGf0Yk4uF4": {
              "name": "Translocar (à vontade)"
            },
            "umdv5cQIEtcsLoAi": {
              "name": "Onda de desespero (à vontade)"
            },
            "4m6bcDHhetOikQks": {
              "name": "Metamorfose Amaldiçoada"
            },
            "ppxkiIHxcT2RhBCW": {
              "name": "Dissipar Magia"
            },
            "bJvx5r13A1QV4mR7": {
              "name": "Movimento desenfreado"
            },
            "6jLJZ6cXzrHSNUjo": {
              "name": "Tempestade de Armas"
            },
            "fr1vMJFpl10mG1MZ": {
              "name": "Ferir"
            },
            "NvorHpL2zBBukd9e": {
              "name": "Curar"
            },
            "2vmco86q5Hoj0vYV": {
              "name": "Implosão"
            },
            "ZAZOeAfGgHLDETLS": {
              "name": "Metamorfose"
            },
            "IA0DhrJNoPvSlEPk": {
              "name": "Lamentos dos Amaldiçoados"
            },
            "yQRLNanvsFaz1dHQ": {
              "name": "Tempo de congelamento"
            },
            "kmNvZ6Hs6tu7dwYt": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kimenhul",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a2df09c158b6acb793d96618b2ba1f9dd7c0ea4dce925679a2be3f7df765cac8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Kimenhul",
      "description": "Entre os mais fortes de sua espécie, além dos algozes sahkil, os kimenhuls trabalham para fomentar o desespero naqueles que temem o fracasso, formando ciclos de auto-aversão. Esses poderosos sahkils concentram sua atenção em mortais que aparentemente estão no auge de suas habilidades, mas abrigam medos secretos de inadequação. As predações de um kimenhul podem deixar uma marca indelével em suas vítimas. O kimenhul sussurra ameaças e envia medos de fracasso esmagador para suas presas, aparentemente originadas de suas próprias mentes, um trauma que pode ser difícil de suportar sem ajuda. Esses sahkils atormentam suas presas enquanto as vítimas infelizes viverem, usando sua habilidade Medo Eterno todos os dias para lembrar psiquicamente suas vítimas anteriores de suas falhas.\nAlguns kimenhuls únicos encontram-se em uma posição de liderança em Xibalba, onde constroem seus próprios pequenos reinos e dirigem grupos de sahkils para ajudá-los a encontrar mortais para atormentar. Eles governam esses reinos de pesadelo através do terror, muitas vezes deliciando-se em atormentar novos peticionários ou planejando maneiras de trabalhar contra seus inimigos imortais.\nHá muito tempo, quando este ciclo do multiverso ainda era adolescente, uma conspiração de psicopompos que já se sentiam entediados e contidos no seu papel de conduzir as almas ao seu local de descanso final rebelou-se contra a sua posição. Foi essa corrupção do ciclo das almas que gerou os primeiros sahkils.\nAmbivalentes à ordem prescrita do multiverso e rancorosos com os mortais, os sahkils deleitam-se em espalhar medo e desconforto a todos os seres, obstruindo o ciclo metafísico com mortais dominados pela ansiedade e demasiado assustados para alcançar o seu potencial. Esses demônios mudaram drasticamente em relação aos seus dedicados predecessores psicopompos. São criaturas de despeito e tormento, medo e repulsa. Eles exploram os medos mais comuns e raros para sua própria satisfação perversa, e nada mais querem do que assustar os mortais e fazê-los questionar a razão de sua existência.\nA maioria dos sahkils se esconde no Plano Etéreo, mas frequentemente invadem o Plano Material para atormentar os mortais e espalhar o terror. Eles usam sua habilidade inata de deslizar entre os véus do Etéreo e do Material sem esforço, muitas vezes perseguindo seus alvos por dias ou semanas antes de executar seus planos tortuosos.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "diabolic": "diabólico",
        "empyrean": "empíreo",
        "requian": "requian"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "efeitos do medo"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 20"
        ]
      },
      "attacks": {
        "Gj7A4LTikw9f1cDC": {
          "name": "Maxilas",
          "damage": "4d12+18 perfurante; 3d6 espiritual"
        },
        "3xQc4jPhxkh2EbIF": {
          "name": "Garra",
          "damage": "4d8+18 cortante; 3d6 espiritual"
        }
      },
      "actions": {
        "MCwfL8BjOxB8qBiz": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "UYKJzdzZCg9KRzcD": {
          "name": "Fácil de ligar",
          "description": "O nível de um kimenhul é considerado 2 a menos para o propósito de ser conjurado pelo ritual do Círculo de Aprisionamento (e potencialmente outros rituais, a critério do Mestre), mas ele está sempre livre para atacar ou sair em vez de negociar, a menos que o teste do conjurador primário seja um sucesso crítico."
        },
        "Ol5nO6bgZS5cJIkA": {
          "name": "magias Constantes",
          "description": ""
        },
        "pgNaQm9L35oslwOp": {
          "name": "Visão Geral",
          "description": ""
        },
        "dWa7XGI4buL9uDdZ": {
          "name": "Alimente-se do medo",
          "description": "O kimenhul recupera 30 Pontos de Vida de cura no início de seu turno, desde que qualquer criatura Amedrontada esteja a até 30 metros de distância dele."
        },
        "E8sTp4v2QCJbCQmh": {
          "name": "Ataque Reativo (Especial)",
          "description": "Se a criatura desencadeadora estiver assustada, o kimenhul pode desferir dois golpes de garra contra a criatura em vez de um golpe."
        },
        "bnU4poD2v5S9mLDT": {
          "name": "Medo Eterno",
          "description": "O kimenhul contorce o rosto e se apresenta aos inimigos em uma exibição aterrorizante e traumática que causa medo persistente. Cada criatura dentro de 100 pés (30 metros) que puder observar o kimenhul deve fazer um teste (vontade, dc:42) de salvamento.\nEles ficam então temporariamente imunes por 10 minutos.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Amedrontado 3.\nFalha O alvo fica Amedrontado 3 e foge enquanto estiver assustado. Mesmo depois de se recuperar da experiência inicial, o trauma fica alojado na mente do alvo por 1 ano. Uma vez por dia, o kimenhul pode se comunicar telepaticamente com o alvo por 1 minuto, desde que ambas as criaturas estejam no mesmo plano. Sempre que uma criatura sob o efeito do Medo Eterno estiver em uma situação estressante (como combate ou pressão social intensa), ela deve ter sucesso em um teste (simples, dc:11) ou ficará Amedrontada 2. Enquanto o Medo Eterno durar, o alvo sempre se torna fugitivo enquanto estiver assustado, independentemente da fonte do medo. O alvo pode tentar um novo teste de resistência a cada semana para remover esses efeitos, mas eles só podem ser removidos por magia poderosa como Desejo.\nFalha Crítica Como falha, mas os efeitos são permanentes e o alvo não pode tentar um salvamento semanal para encerrar o efeito."
        },
        "N2oBeSLsFrTuwOTn": {
          "name": "Agitação assustadora",
          "description": "O kimenhul desfere um golpe de mandíbula e dois golpes de garra contra um único alvo, em qualquer ordem. O alvo fica Amedrontado com um valor de condição igual ao número de Golpes que o atingiram, até um máximo de 3 assustado se todos os três Golpes acertarem."
        },
        "4TqIsk44LcZm61Ws": {
          "name": "Rasgar",
          "description": "Garra"
        },
        "F9hcxqTd9pv3rmpZ": {
          "name": "Pular entre",
          "description": "O sahkil se move do Universo para o Plano Etéreo ou vice-versa. Enquanto estão no Plano Etéreo, eles são incapazes de afetar qualquer coisa no Universo e não podem ser vistos por seres ou habilidades no Universo, a menos que estes tenham uma habilidade que possa olhar para o Plano Etéreo. Enquanto estiver no Plano Material, o inverso é verdadeiro para qualquer coisa no Plano Etéreo. Um sahkil convocado não pode usar Skip Between."
        },
        "HiTMvvga2hoAWC9Y": {
          "name": "Arrebatar entre",
          "description": "Ao usar Skip Between, o kimenhul pode trazer consigo qualquer criatura que tenha agarrado."
        },
        "BHNm9PtnZ9Hrj6fQ": {
          "name": "Mente Inquieta",
          "description": "Qualquer criatura afetada por qualquer uma das magias ou habilidades mentais de um kimenhul fica Estupefata 3 enquanto durar esse efeito e por [[/gmr 1d4 #Duration Estupefata]] depois disso."
        },
        "1D6LEQGzk95aGl48": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "bm1p6Vp0YfRmEdMO": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "ncJ8HnYInZTkZibk": {
              "name": "Detectar magia"
            },
            "kUPRHHAJdkvqe2e8": {
              "name": "Confusão"
            },
            "PEOn8z7pdSJEfEv0": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "hoFifX6XQgPdwCZN": {
              "name": "Medo (à vontade)"
            },
            "irsJJWGBsP14ZQeM": {
              "name": "Mente Oculta (Constante)"
            },
            "WdIG7qExvn1SpJjV": {
              "name": "Máscara do Terror (à vontade)"
            },
            "HkfSCFXCDNPH4Cc9": {
              "name": "Fantasmagoria"
            },
            "LKGIHU6qykXFuUrx": {
              "name": "Calamidade Fantasmagórica"
            },
            "qAzTuZJKqbcHw1eu": {
              "name": "Sugestão (à vontade)"
            },
            "u2p7qhu0mpuxD7Ru": {
              "name": "Visão Verdadeira (Constante)"
            },
            "jtRMZ0Iw0fB5hHfo": {
              "name": "Mente Distorcida"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:baomal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5f91ec3f8af8ed0d19a7c9d4764b34ed9e1c39185ec698d1f96ca596e67988f2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Baomal",
      "description": "Poucos monstros marinhos são tão temidos e temidos quanto o baomal de duas cabeças. Essas enormes feras predadoras normalmente vivem nas águas mais profundas e competem com krakens e outros monstros por comida. Alimentam-se de baleias e outras grandes criaturas marinhas, às vezes seguindo-as até a superfície da água. Perto da superfície, os baomals que encontram navios aprendem rapidamente que eles contêm uma variedade de petiscos saborosos. As criaturas usam seus espinhos devastadores para rasgar os cascos dos navios e depois se alimentam dos marinheiros indefesos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-80": "faro impreciso 80 pés (24 metros)"
      },
      "languages": {
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "físico 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "SnCGhLws82aS8xpS": {
          "name": "Maxilas",
          "damage": "4d12+18 perfurante"
        },
        "SmRyQEGPbRIR82tT": {
          "name": "Jato Tsunami",
          "damage": "4d10+18 contundente"
        }
      },
      "actions": {
        "v2Vcuxvy5icZyHkj": {
          "name": "Visão Geral",
          "description": ""
        },
        "LZ3htI7JRHvcwAhU": {
          "name": "Reação Dupla",
          "description": "Um baomal ganha uma reação extra a cada rodada que só pode ser usada para realizar um Ataque Reativo. Ele deve usar uma cabeça diferente para cada tentativa e não pode realizar mais de um Golpe Reativo para a mesma ação desencadeadora."
        },
        "LkBIOwt4NW6BfYFE": {
          "name": "Aura Psíquica Estática",
          "description": "120 pés (36 metros). Todas as criaturas, exceto as aberrações, que iniciam seu turno na área sofrem 5d6 de dano mental."
        },
        "Y8YhMW3CgscQr8Cd": {
          "name": "Ataque reativo",
          "description": ""
        },
        "74Xu2C6KzxtSFcNe": {
          "name": "Duas cabeças",
          "description": "Qualquer habilidade que decepe a cabeça de um baomal (como um acerto crítico com uma arma Vorpal) corta uma cabeça aleatoriamente. Perder uma cabeça não mata um baomal, mas evita que o baomal faça Golpes com a cabeça perdida e use Reação Dupla ou Golpe de Duas Cabeças."
        },
        "ZuxcOScsfkdklfi8": {
          "name": "Respiração do Mar",
          "description": "Um baomal pode inalar enormes quantidades de água, aproximando tudo o que existe no mar próximo. Todas as criaturas e objetos na água dentro de uma emanação de 18 metros do baomal (incluindo navios) são puxados em direção a ele. As criaturas devem ter sucesso em um teste (atletismo, dc:42, opções:movimento forçado) ou serão puxadas até 20 pés (6 metros) em direção ao baomal (40 pés (12 metros) em uma falha crítica). Para navios, use o Conhecimento de Vela do capitão no lugar de Atletismo. Objetos não supervisionados são puxados automaticamente."
        },
        "y6bETzshaXTYx4Wq": {
          "name": "Ancinho de Concha",
          "description": "O baomal nada ou caminha ao lado de uma criatura ou do casco de uma embarcação, causando dano com os fortes espinhos em seu casco. Cada criatura ou navio ao qual o baomal está adjacente em qualquer ponto durante seu movimento sofre (6d6+10)[cortar,(6d6+10)[perfurar]] (teste (reflexo, dc:42, básico) salvamento). Contra embarcações, Shell Rake ignora as primeiras 5 Durezas e cria uma explosão de lascas que causa (3d6+5)[untyped|options:area-damage] dano a todas as criaturas dentro de uma explosão de 3 metros da borda do deck (check (reflex, dc:42, basic, options:area-effect) save)."
        },
        "2MJUBT30Vn8bziTk": {
          "name": "Golpe de Duas Cabeças",
          "description": "O baomal dá um Golpe com cada conjunto de mandíbulas, cada uma contra uma criatura diferente. Esses golpes contam como um ataque para a penalidade de ataque múltiplo do baomal, e a penalidade não aumenta até depois de ambos os ataques."
        },
        "5Jg7JbtLR6ciGJiV": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "uPAAssuXj8CktZTI": {
          "name": "Pressione 40 pés (12 metros)",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a32c546e93891d69c1a2e3dac1cf54cf865c875214f1f1723bb35dd4e35b1b35",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Requiem (Antigo, Feiticeiro)",
      "description": "Os dragões Requiem são administradores do Rio das Almas e do processo através do qual as almas chegam ao seu destino final na vida após a morte. A jornada segura de uma alma é de extrema importância para um dragão réquiem, e alguns seguirão almas individuais desde sua primeira entrada no rio até seu julgamento no Boneyard e, eventualmente, até seu local de descanso final. A maioria dos dragões de réquiem se ligam a planos específicos e pastoreiam quaisquer almas ligadas a esse plano, levando a dragões ligados a lugares como o Céu ou o Inferno, embora esses dragões nunca jurem lealdade verdadeira a esses planos. Dragões réquiem enchem seus covis ao longo do Rio das Almas – retalhos de arquitetura sombria resgatados de outros planos – com registros inestimáveis ​​e lembranças de grandes realizações.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-120": "lifesense-impreciso-120",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "daemonic": "demoníaco",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "requian": "requian"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "knzrD5SFrlVeyHhp": {
          "name": "Buzina",
          "damage": "4d10+15 perfurante; 2d8 espiritual"
        },
        "wyJW030tjlMqlOFy": {
          "name": "Garra",
          "damage": "4d6+15 cortante; 2d8 espiritual"
        },
        "MfU1Is4nFaLYi4YN": {
          "name": "Cauda",
          "damage": "4d8+15 contundente; 2d8 espiritual"
        }
      },
      "actions": {
        "qd9Km8K4PdsnWLbX": {
          "name": "Jornada da Alma",
          "description": "O dragão passa 1 hora viajando através de canais planares para chegar ao Rio das Almas e então chega a qualquer ponto ao longo do rio. Isto tem os efeitos do Teleporte Interplanar, exceto que o dragão pode chegar precisamente onde quiser em qualquer plano principal."
        },
        "cyDi0Va1gzTRN2G4": {
          "name": "Visão de status",
          "description": "O dragão réquiem conhece automaticamente os Pontos de Vida de todas as criaturas que pode ver."
        },
        "So4yBcmRWdbLG8JN": {
          "name": "Âncora da Alma",
          "description": "Uma criatura dentro de 60 pés (18 metros) cairia para 0 Pontos de Vida\nEfeito O dragão ancora a alma da criatura desencadeadora em seu corpo. A criatura permanece com 1 Ponto de Vida, fica Condenada 2 e ganha cura rápida igual ao nível do dragão por 1 minuto. A criatura fica temporariamente imune a novos usos da Soul Anchor por 24 horas.\nEfeito: Âncora da Alma"
        },
        "3kVLpqskZEeFu5Jc": {
          "name": "Reter a morte",
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O dragão resiste ao afrouxamento de sua própria alma, evitando alguns danos. O dragão ganha resistência 20 a todos os danos contra o ataque desencadeador."
        },
        "O3ebBljtcItTfmVr": {
          "name": "Respiração Condenadora",
          "description": "A energia da Forja da Criação irrompe da boca do dragão, causando 16d8 de dano espiritual em um salvamento de tipo: linha de 36 metros (verificação (reflexo, dc: 42, básico, opções: efeito de área)). Criaturas mortas-vivas que falharem no salvamento também devem ter sucesso em um teste (vontade, dc:42, opções:efeito de área,infligir:condenado) no salvamento ou se tornarão Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 4). O dragão não pode usar Dooming Breath novamente por [[/gmr 1d4 #Recharge Dooming Breath]]."
        },
        "DEBBR8MAQkVMQvCH": {
          "name": "Redirecionar Rio",
          "description": "O dragão réquiem redireciona uma pequena porção do Rio das Almas, usando seu corpo como uma conexão espiritual. O rio cresce ao redor deles, preenchendo a área com uma emanação de 4,5 metros por 1 rodada, tornando-se terreno difícil para todas as outras criaturas. Além disso, as criaturas que iniciam seu turno na emanação ou entram nela pela primeira vez em cada rodada devem ser bem-sucedidas em um teste (fortitude, dc:42, básico, opções:efeito de área,infligir:drenado,infligir:condenado) salvar ou tornar-se Drenado 1 e Condenado 1. Se o alvo já estiver drenado ou condenado, o valor aumenta em 1 (até um máximo de 4). O dragão pode sustentar o efeito."
        },
        "pVA84K2nKuClLYVw": {
          "name": "Escudo da Alma",
          "description": "Frequência uma vez por dia\nEfeito O dragão réquiem usa sua essência vital para criar um escudo de energia espiritual ao redor de uma criatura dentro de 60 pés (18 metros). O escudo cria uma ligação entre o dragão e a criatura com os efeitos de Compartilhar Vida, exceto que o efeito não termina independentemente da distância e permanece por 1 hora. Além disso, a criatura ganha resistência 10 a danos físicos e espirituais que se aplicam à metade do dano que ela recebe. O dragão pode Dispensar o efeito."
        },
        "9TJ7aB0wkzOsVuoX": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "fpjdfWubC2WyLhEd": {
          "name": "magias Divinos Preparados",
          "category": "preparado",
          "spells": {
            "rpJKhtNvYIRTOmmp": {
              "name": "Orientação"
            },
            "JKmKgIj0iBXKpN71": {
              "name": "Hino Assombroso"
            },
            "TtqS7Au0EmcIsn6b": {
              "name": "Mensagem"
            },
            "bTZZNnq91PUBCVxt": {
              "name": "Proteção"
            },
            "G4aXseCIPuKdoKrq": {
              "name": "Santuário"
            },
            "BajUh2rL9u3mNv5K": {
              "name": "Sigilo"
            },
            "ApurIolcB4VrTM3m": {
              "name": "Elo Espiritual"
            },
            "ACrUKEeNAabGlIqw": {
              "name": "Estabilizar"
            },
            "ytB2F1Jr9tdzxtFs": {
              "name": "Presente atencioso"
            },
            "EGTFLACKTnbNRPaw": {
              "name": "Veja o invisível"
            },
            "2rHlT3ISeI05Jxap": {
              "name": "Compartilhe a vida"
            },
            "zPUiYtaYNhMoGraw": {
              "name": "Anel da Verdade"
            },
            "kL10PKTPGK6Sd7ZY": {
              "name": "Passagem Segura"
            },
            "dX9w451e4lWAnCHS": {
              "name": "Tragédia Fantasmagórica"
            },
            "2Sxd0JBEKJIeBngO": {
              "name": "Cadáver Falante"
            },
            "DlYz4fFyMplRopkM": {
              "name": "Farol Vital"
            },
            "4eFm4uZ3aMRUxiuV": {
              "name": "Banimento"
            },
            "G8Ok4AJuqQxVFTUo": {
              "name": "Sopro de Vida"
            },
            "5HxSCkNUrJCOM9BW": {
              "name": "Invocar Espíritos"
            },
            "WbUapHsHOkq8A6ba": {
              "name": "Campo da Vida"
            },
            "96eqY3v3DFeXDm2u": {
              "name": "Ressuscitar Mortos"
            },
            "30DmNZZ3RkyRkEZV": {
              "name": "Teletransporte Interplanar"
            },
            "fWIWlOVB0xwDVL6D": {
              "name": "Selo Planar"
            },
            "Mz54OsPtkPCguHz4": {
              "name": "Regenerado"
            },
            "2qZLkBZMIRUhXowa": {
              "name": "Canção Espiritual"
            },
            "hD028t874wWPcVsw": {
              "name": "Previsão"
            },
            "8DkeqBnmczDHQ4jx": {
              "name": "Aproveite a alma"
            }
          }
        },
        "G4dVxcO1EbpdB0xz": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "ofkR72Hv3Oee1zyU": {
              "name": "Estabilizar"
            },
            "3XiAKSCJlDJwf8no": {
              "name": "Curar"
            },
            "Fu2fOQrUhkn6hBVN": {
              "name": "Curar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:veranallia",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5255db30b0eab3aab9a8efde74cfb1c9db624fa23493aa0fc39b02938b90aef7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Veranallia",
      "description": "Veranallias representam a liberdade da vida para crescer, mudar e se adaptar. Eles raramente interagem diretamente com os não-azatas, já que a maioria dos outros seres acham sua natureza difícil de compreender, mas aqueles que garantem sua ajuda os consideram aliados poderosos. A metade inferior do corpo de uma veranália é feita de vegetação que repete constantemente um ciclo vertiginoso de brotação, floração, prosperidade e murcha. A metade superior de seu corpo aparece como a de um humanóide de qualquer gênero – é raro que um veranallia permaneça consistente em seu gênero por mais do que algumas temporadas de cada vez.\nVeranallias transformam a paisagem em seu rastro, trazendo criação e destruição. O mundo ao seu redor transborda de vegetação abundante, com fartura de alimento para os animais próximos, e quando trazem destruição, o fazem sem crueldade, pois às vezes é necessário abrir espaço para uma nova vida. Eles provocam incêndios florestais em florestas antes que os arbustos secos se acumulem a níveis perigosos e trazem invernos rigorosos para áreas infestadas de parasitas que prosperam em climas quentes.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-120": "tremorsensível-impreciso-120"
      },
      "languages": {
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "fogo 20",
          "frio 20"
        ],
        "weaknesses": [
          "ferro frio 20",
          "profano 20"
        ]
      },
      "attacks": {
        "ImVU4G37cmGJMDoA": {
          "name": "Foice",
          "damage": "3d4+12 cortante; 4d6 frio; 1d6 espiritual"
        },
        "PgZtqgPtRR9DRaGz": {
          "name": "Videira",
          "damage": "4d12+16 contundente; 1d6 espiritual"
        }
      },
      "actions": {
        "QVlwvsf0cmEupKV2": {
          "name": "Tremorsense 120 pés (36 metros)",
          "description": ""
        },
        "vPzVhI5rLf9ZTI5N": {
          "name": "magias Constantes",
          "description": ""
        },
        "9WzRmRmcle5Fmp7N": {
          "name": "Alterar o clima",
          "description": "Frequência três vezes ao dia\nEfeito A veranallia altera drasticamente os padrões climáticos na área circundante, produzindo qualquer um dos resultados de um ritual de controle climático do 9º Rank bem-sucedido."
        },
        "iCMR05ML275h0Gek": {
          "name": "Renascimento",
          "description": "Frequência uma vez por dia\nEfeito A veranallia gasta um minuto para encerrar em um casulo uma criatura que esteja morta há não mais que um ano. Após 24 horas, a criatura volta à vida e o casulo explode em uma chuva de flores coloridas. Se a veranália escolher, o Renascimento pode mudar a ancestralidade ou herança da criatura, normalmente para um nefilim."
        },
        "ZATwHrEH0dFylWzW": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "hyuJvmXFcS4R6bfc": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "T1jTn0jRuZqV93CM": {
              "name": "Metamorfose Amaldiçoada (à Vontade)"
            },
            "ISGa39OKNaOBS5Rb": {
              "name": "Trepadeiras emaranhadas (à vontade)"
            },
            "A3hsg1sR7EY6G9Ne": {
              "name": "Fenda Ártica (à vontade)"
            },
            "IHpzMqwVP4Qwisa6": {
              "name": "Sunburst (à vontade)"
            },
            "V36tT2G4lUfNUNVI": {
              "name": "Inimizade da Natureza"
            },
            "4qmaoet30Rr2gRnV": {
              "name": "Caminho da Natureza (à vontade)"
            },
            "r7jklHq5DEK3sMRb": {
              "name": "Regenerado"
            },
            "4wGOi1Y9QjvOIUWd": {
              "name": "Fale com animais (constante)"
            },
            "X8HPyH2dWuDAiYT3": {
              "name": "Fale com as plantas (constante)"
            },
            "r9Vti0pP2In1fPgO": {
              "name": "Truespeech (constante)"
            },
            "aqTE0mNiRzVxxeCY": {
              "name": "Tempestade Furiosa"
            },
            "PdBEp2mT1BlLgcrf": {
              "name": "Cataclismo"
            },
            "gapottkCkDGz63Yv": {
              "name": "Manifestação (uma vez por ano)"
            },
            "5UtjlyksOFdxQt2b": {
              "name": "Reavivamento"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nasurgeth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b13bb2840988661b8ed861e5371d60ec032c2b6d7c394b9a5002497d57ff82c2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Nasurge",
      "description": "Nasurgeths são vazios famintos com olhos brilhantes e milhares de dentes. Eles se escondem nas profundezas das ondas, onde a luz do sol não chega. À noite, eles sobem aos céus e causam destruição e destruição sobre todos os vivos.\nDarvakkas, também chamados de nightshades, são um mal voraz composto de partes iguais de escuridão e malícia. Originalmente criaturas dos Planos Exteriores que viajam para a convergência do Plano das Sombras e do Vazio – onde o poder do nada os destrói – essas abominações mortas-vivas são a personificação física da entropia. Eles queimam com um ódio intenso por toda a vida, trabalhando para trazer uma noite final e escura ao Plano Material, onde nada resta além de cinzas e gelo.\nComo criaturas distorcidas pela escuridão e pelas sombras, os darvakkas têm uma grande aversão à luz solar e a todas as fontes de energia vital. No Plano Material, eles passam as horas da luz do dia escondidos abaixo do solo, em meio a ruínas, ou submersos nas profundezas dos abismos mais escuros do oceano, além do alcance dos raios solares, emergindo quando a escuridão os protege acima.\nDarvakkas têm uma aura de entropia que atrai escravos mortos-vivos para servirem como guerreiros e arautos. Eles raramente buscam alianças entre si ou com outras criaturas, existindo na solidão como chefes de exércitos individuais de mortos.",
      "size": "Imenso",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "lifesense-60": "sentido de vida-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "diabolic": "diabólico",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "frio",
          "efeitos de morte",
          "doença",
          "paralisado",
          "tóxico",
          "inconsciente",
          "sangrar"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 15",
          "prata 15"
        ]
      },
      "attacks": {
        "7lt4725ubnitaecg": {
          "name": "Maxilas",
          "damage": "3d10+19 perfurante; 2d10 frio"
        },
        "ezj7d0ajdqts6n00": {
          "name": "Cauda",
          "damage": "3d6+19 contundente; 2d10 frio"
        }
      },
      "actions": {
        "U0g3auuSZ4pwJU82": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "pPFQRbQlLR10sSbh": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "MFUrmw36LIlgw5UX": {
          "name": "Lifesense 60 pés (18 metros)",
          "description": ""
        },
        "hndwksut71ohgybj": {
          "name": "Profundezas da meia-noite",
          "description": "60 pés (18 metros). A entropia de um nasurgeth fica ainda mais forte debaixo d'água. Toda a água dentro da aura é completamente escura (como Escuridão do 4º Rank). A luz mágica com um Rank neutralizante de 4º nível ou inferior, juntamente com truques de luz mágica, são suprimidas. Uma criatura viva que entra ou inicia seu turno na aura sofre 4d6 de dano de vazio, e a criatura também sofre 2d10 de dano de frio adicional se estiver na água (teste (fortitude, dc:39, básico, opções: efeito de área, movimento forçado, inflige: enfraquecido)). Se falhar, também é Enfraquecido 1 por 1 minuto e puxado 10 pés (3 metros) em direção ao nasurgeth."
        },
        "15ji0gz9dw3xxfog": {
          "name": "Spray de bile negra",
          "description": "Gatilho O nasurgeth sofre dano cortante ou perfurante de um acerto crítico, ou uma criatura engolida se liberta\nEfeito Escuridão e energia do vazio vazam do ferimento do nasurgeth, causando 8d8 de dano de vazio às criaturas dentro de 20 pés (6 metros) (teste (fortitude, dc:40, básico))."
        },
        "ssocwemmugpprhuc": {
          "name": "Impotência à luz solar",
          "description": "Um nasurgeth capturado pela luz solar fica Atordoado 2 e Desajeitado 2."
        },
        "sjrL9SViifyZvj1G": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "tvvsxwr3fxjxf5ho": {
          "name": "Farpa Quebrada",
          "description": "Requisitos Uma criatura é agarrada ou contida nas mandíbulas do nasurgeth\nEfeito O nasurgeth quebra um dente do alvo, que sofre 3d10 de dano de sangramento persistente e não é mais agarrado ou contido. Se o alvo estiver adjacente a uma superfície, o dente também o fixa no lugar, tornando-o imobilizado ([[/act escape dc=45]])."
        },
        "7avv9wov0dsg3srf": {
          "name": "Vazio Voraz",
          "description": "O nasurgeth avança com a boca aberta, nadando duas vezes em linha reta e se movendo pelos espaços de criaturas enormes ou menores. O nasurgeth causa o dano de seu Golpe de mandíbula a cada criatura cujo espaço ele entra (verificação (reflexo, dc:45, básico)). Qualquer criatura que falhe criticamente é automaticamente engolida inteira."
        },
        "0jGEzNSvC3mj1gAv": {
          "name": "Engula inteiro",
          "description": "Enorme, (2d10+9)[espancamento], Ruptura 40\nUma criatura viva que termina seu turno engolida inteira por um nasurgeth fica Drenada 1 ou aumenta sua condição drenada em 1, e o nasurgeth ganha 20 Pontos de Vida temporários. Uma criatura cuja condição drenada aumenta para 5 desta forma morre."
        },
        "tLqZsl7HmPDlI9X7": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "sUsdrW2eEA7nzp6P": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "g4nAs8DaVHUEISTF": {
              "name": "Detectar magia"
            },
            "3rKCigKvwBeinC4a": {
              "name": "Teletransporte Interplanar (somente para o Universo, Vazio ou Submundo)"
            },
            "LchpmrFeDQkys77y": {
              "name": "Visão Verdadeira"
            },
            "ohQx5dugLsoCEut1": {
              "name": "Explosão de Eclipse"
            },
            "2iedxp0Ne7Wbbp94": {
              "name": "Ferir"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:izfiitar",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5648f44a636bc42efbb05d0dc0f208b3dee294a5560ad240d4d101e0459577f6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Izfiitar",
      "description": "Ocupando o auge do frouxo sistema de castas multiforme, os izfiitars executam os planos em constante mudança dos alardeados senhores multiformes e dos divinos Oradores das Profundezas.\nMetamorfoses são manifestações do caos encarnado, nativos do Maelstrom que incorporam a potência primordial da entropia em suas formas serpentinas.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "chthonian": "chthoniano",
        "empyrean": "empíreo",
        "protean": "multiforme"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "ácido 20",
          "precisão 20",
          "anatomia proteana 25"
        ],
        "weaknesses": []
      },
      "attacks": {
        "2i7RkOuFOY9hzi25": {
          "name": "Maxilas",
          "damage": "4d10+19 perfurante"
        },
        "MaC47StIgiYcbjOR": {
          "name": "Garra",
          "damage": "4d8+19 cortante"
        },
        "9bcCo1mQae8WAr6u": {
          "name": "Cauda",
          "damage": "4d12+19 contundente"
        }
      },
      "actions": {
        "tDMBFQ69nPNIDvVL": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "Tw3YjNactlZkz6f5": {
          "name": "Sentido de entropia (impreciso) 120 pés (36 metros)",
          "description": "Um Izfiitar pode antecipar a localização mais provável de uma criatura através de sua visão sobrenatural das forças das probabilidades caóticas e do acaso. Isso concede ao izflitar a habilidade de sentir criaturas dentro do alcance listado.\nO sentido de entropia do izflitar não detecta criaturas sob os efeitos do Véu de Privacidade ou que estejam protegidas de adivinhações e previsões."
        },
        "w1yLYqB1KxZJBs5w": {
          "name": "magias Constantes",
          "description": ""
        },
        "54WOsqAo6qC3BpxR": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "ChRMEkPy5PRSWPqu": {
          "name": "Cura Rápida 20",
          "description": ""
        },
        "zcXmXYiey1ALgBc2": {
          "name": "Beijo dos palestrantes",
          "description": "O izfiitar continuamente mexe com as inúmeras possibilidades em que pode mover ou manipular magia. O izfiitar é sempre Acelerado e pode usar a ação extra apenas para Step, Stride ou como parte de lançar um magia."
        },
        "K1G5PkDyd9v0F4cW": {
          "name": "Revisão Presciente",
          "description": "Gatilho O izfiitar falha em uma verificação\nEfeito O izfiitar rola novamente o teste de ativação e obtém o melhor resultado. Por [[/gmr 1d4 #rounds]], ele perde os efeitos do Beijo dos Oradores e não pode usar Remodelar Realidade."
        },
        "zsVt4kFtUsLstrgv": {
          "name": "Anatomia Protéica 25",
          "description": "Os órgãos vitais de um izfiitar mudam e mudam de forma e posição constantemente. Imediatamente após o izfiitar sofrer dano ácido, elétrico ou sônico, ele ganha a quantidade listada de resistência para aquele tipo de dano. Isso dura 1 hora ou até a próxima vez que o proteano sofrer dano de um dos outros tipos (nesse caso, sua resistência muda para corresponder a esse tipo), o que ocorrer primeiro.\nO izfiitar é imune a efeitos polimórficos, a menos que seja um alvo voluntário. Se estiver cego ou surdo, o izfiitar se recupera automaticamente no final do próximo turno à medida que novos órgãos sensoriais crescem para substituir os comprometidos.\nEfeito: Anatomia Protéica"
        },
        "vQPlPvqwhvVQLqDP": {
          "name": "Alterar forma",
          "description": "O izfiitar assume a aparência de qualquer criatura Enorme ou menor. Isso não altera sua Velocidade nem seus bônus de ataque e dano com seus Golpes, mas pode alterar o tipo de dano que seus Golpes causam."
        },
        "tgoQM79wjs7GKqej": {
          "name": "Contrair",
          "description": "(2d8+17)[concussão] dano, teste (fortitude, dc:44, básico)"
        },
        "eNBZq39osfEn6lxc": {
          "name": "Ataque Warpwave Maior",
          "description": "Qualquer criatura atingida e danificada pelas mandíbulas ou golpe de garra de um izfiitar deve ter sucesso em um teste (fortitude, dc:42) ou estará sujeita a uma Warpwave particularmente poderosa.\nRole duas vezes e aplique ambos os efeitos, rolando novamente quaisquer duplicatas."
        },
        "PSp8p0TXeXlS7tms": {
          "name": "Remodelar a realidade",
          "description": "Quando o izfiitar lança Miragem, ele infunde na ilusão uma substância quase real. Criaturas que não descreem na ilusão tratam estruturas e terrenos criados através da magia como se fossem reais, subindo escadas ilusórias, ficando presos em areia movediça ilusória e assim por diante."
        },
        "eAVEsQrBLcSiqErs": {
          "name": "Tempestade de Garras",
          "description": "O izfiitar realiza até seis golpes de garra, cada um contra um alvo diferente."
        },
        "2PS4rb2U1m5GYgMq": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "DBIuCC9Q0DlOtiTX": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "5TRv4sIpACTh1KJD": {
              "name": "Translocar (à vontade)"
            },
            "dOgIA29XvZTYnTAn": {
              "name": "Movimento irrestrito (constante)"
            },
            "O1gJKj4GFYZ8y48Q": {
              "name": "Criação (à vontade)"
            },
            "u9Zwc7GZo3XKkQAJ": {
              "name": "Mirage (à vontade, veja remodelar a realidade)"
            },
            "z53CxBPNB10jJuGb": {
              "name": "Translocar"
            },
            "nEsKHRDs6rvaMkzS": {
              "name": "Truespeech (constante)"
            },
            "Baw1DOhmcqyCapp2": {
              "name": "Teletransporte (à vontade, somente para si)"
            },
            "wSDqyxkHEX7eUEDr": {
              "name": "Warp Mind (à vontade)"
            },
            "Nbb46hq2eYsrL0WA": {
              "name": "Confusão"
            },
            "cwds0IRzkuv1AOhV": {
              "name": "Metamorfose Amaldiçoada"
            },
            "ROGkkzNljbiAHBjZ": {
              "name": "Desintegrar"
            },
            "ynxSRWlpkmglj00Q": {
              "name": "Dissipar Magia"
            },
            "uoXFUeNjxbHlfsh1": {
              "name": "Ira Divina"
            },
            "BCsBma1eBqSe3eKo": {
              "name": "Massacre"
            },
            "F89Fz9gbr9Q0hB8c": {
              "name": "Presença esmagadora"
            },
            "W5bbvpuKlT6SLesH": {
              "name": "Manifestação"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:eremite",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8f20a335effdc661c1c1d2f7588890e9180737bf0f1fd56df1f0c1eacd374ad0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Eremita",
      "description": "",
      "size": "Médio",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "truesight-5": "visão verdadeira-5"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "shadowtongue": "língua das sombras"
      },
      "defenses": {
        "immunities": [
          "frio",
          "efeitos do medo",
          "ataques não letais"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 20",
          "prata 20"
        ]
      },
      "attacks": {
        "RK2j6TDKNEv5UzMs": {
          "name": "Maxilas",
          "damage": "2d6 sangramento; 4d8+19 perfurante"
        },
        "WqYO71OiVV3AVqoy": {
          "name": "Garra",
          "damage": "3d6+19 cortante; 2d6 sangramento"
        }
      },
      "actions": {
        "lZmpfqnhczYxmC3k": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "2AUsdKKeOILPLmtd": {
          "name": "Visão dolorosa",
          "description": "Um velstrac sabe automaticamente se uma criatura que vê tem alguma das condições Condenado, Morrendo e Ferido, bem como o valor dessas condições."
        },
        "teom9TUDDfzqDhSs": {
          "name": "Regeneração 25 (desativada por Holy ou Silver)",
          "description": ""
        },
        "fUk5Evip1bKzDM4z": {
          "name": "Ignorar a dor",
          "description": "As ações de um eremita não podem ser interrompidas devido a danos ou Golpes (como Golpe Reativo)."
        },
        "aD4aMwhqekfn6aOd": {
          "name": "Perfeição Paralítica",
          "description": "30 pés (9 metros). Quando uma criatura termina seu turno na aura, ela se sente compelida a oferecer pedaços de sua própria carne ao eremita. A criatura deve ter sucesso em um teste (vontade, dc:40, opções:efeito de área,infligir:paralisado) para salvar ou ficará Paralisada por 1 rodada."
        },
        "1LFp8O8agv2KqacK": {
          "name": "Evisceração",
          "description": "Requisitos O eremita tem uma criatura Agarrada ou Restringida\nEfeito O eremita extirpa carne ou osso de uma criatura que ele agarrou ou restringiu. O alvo sofre 6d10 de dano de sangramento persistente."
        },
        "TPyLMUdPql12YgPE": {
          "name": "Dor Requintada",
          "description": "O conhecimento de um eremita sobre pontos de pressão e centros de dor é insuperável. Uma criatura atingida pelos Golpes corpo a corpo de um eremita deve ter sucesso em um teste (fortitude, dc:40, opções:inflige:atordoado) ou ficará Atordoado 2 (Atordoado 4 em uma falha crítica). Uma criatura que obtiver sucesso crítico fica temporariamente imune por 24 horas."
        },
        "MiOeL8gu2oDPwjX8": {
          "name": "Olhar Focado",
          "description": "O eremita encara uma criatura que pode ver dentro de 30 pés (9 metros). A criatura deve imediatamente tentar um teste de Vontade contra a perfeição paralisante. Além disso, se a criatura já estava Paralisada, em caso de falha no teste de resistência, seu desejo não natural faz com que ela se torne Condenada 1. Depois de tentar este teste de resistência, a criatura fica temporariamente imune a Focus Gaze até o início do próximo turno do eremita."
        },
        "dIlHFr1dhXc6lGR3": {
          "name": "Enxerto de Carne",
          "description": "Requisitos O eremita segura um pedaço de carne coletado por meio de Evisceração\nEfeito O eremita anexa a carne roubada a si mesmo. Eles recuperam 100 Pontos de Vida; reduza o valor de sua condição Desajeitado, Drenado, Enfraquecido ou Estupefato em 3; ou reduzir o estágio de qualquer aflição que os afete em 3."
        },
        "ybRytrWk5mQ1tODD": {
          "name": "Viajante das Sombras",
          "description": "Quando um eremita usa o Teleporte Interplanar, ele chega exatamente ao destino pretendido."
        },
        "vYmXaGsxJAjvJvFW": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "dS5QpaAGaBluN6Vd": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "QHajacAJGfL7p2bn": {
              "name": "Estabilizar"
            },
            "TPshjpi5CKdU8nuU": {
              "name": "Teletransporte Interplanar (apenas para o Submundo ou o Universo)"
            },
            "Hg6qc00Ial6ZJucI": {
              "name": "Selo Planar"
            },
            "nyZyBmYgkvCAVRVk": {
              "name": "Explosão de Sombra"
            },
            "zlpRDfSMKpTAaiZe": {
              "name": "Translocar (à vontade)"
            },
            "cnt9UFcWkTeMjOvz": {
              "name": "Mente Distorcida"
            },
            "xNbuWcPRfnco1Yea": {
              "name": "Fronteira Abençoada"
            },
            "1nwj0nE3sgMZETbh": {
              "name": "Ferir"
            },
            "adVy5JcoezKB7Wbk": {
              "name": "Curar"
            },
            "81Of45a5Ny3a6dI9": {
              "name": "Aproveite a alma"
            },
            "dwPLCsQdXzYWscPH": {
              "name": "Explosão de Sombra"
            },
            "2bNHB9QBsVQPAoTx": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ravener",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f6a0747ee040f8ed6176d9181002bb5f292e23137012c77ff55a481f6604dcdd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ravener",
      "description": "O corvo apresentado aqui já foi um antigo dragão de cinzas.\nEmbora sua expectativa de vida possa durar milênios, todos os dragões acabarão morrendo. Enquanto muitos fazem isso nas lâminas ou sob os magias dos matadores de dragões, alguns conseguem sobreviver aos seus inimigos e devem, com o tempo, enfrentar a verdade que aguarda todas as criaturas vivas no final de sua vida natural. Tal como acontece com muitas outras criaturas, alguns dragões respondem mal a esses lembretes iminentes de sua própria mortalidade, e os particularmente orgulhosos ou coléricos de sua espécie muitas vezes atacam com raiva quando confrontados por esta verdade sombria. Paz e aceitação são encontradas por alguns dragões, mas os mais teimosos de sua laia (e invariavelmente os mais perversos) podem buscar uma resposta diferente para o problema. Esses dragões procuram ritos sinistros que podem transformá-los em criaturas mortas-vivas conhecidas como raveners.\nA carne de um Ravener é arrancada como parte da transformação, deixando apenas ossos. O que eles perdem em carne, no entanto, o dragão ganha em poder destruidor de almas, pois sua energia espiritual forma uma barreira protetora ao redor de seu corpo, mantendo-o intacto e permitindo o voo com asas agora esqueléticas. Esta existência não é tão fácil de manter como outras formas de mortos-vivos, entretanto, e o ravener deve se alimentar regularmente de almas vivas para alimentar seu metabolismo profano. Sua fome é muito maior do que a de um dragão vivo, então os vorazes são forçados a se mudar regularmente, viajando para novos locais de caça cada vez que despojam suas presas atuais.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "necril": "necril",
        "pyric": "pírico"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "fogo",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "frio 20",
          "santo 20"
        ]
      },
      "attacks": {
        "7vC2Ax7gT2rVncuX": {
          "name": "Maxilas",
          "damage": "4d12+13 perfurante; 2d6 fogo; 2d6 vazio"
        },
        "ojYLClOcYqfHY4B2": {
          "name": "Buzina",
          "damage": "2d6 vazio; 4d12+17 cortante"
        },
        "1P2v1ZZGD1tc4uhc": {
          "name": "Garra",
          "damage": "4d10+13 cortante; 2d6 vazio"
        },
        "ZZvgnbaQFzbbLYCE": {
          "name": "Cauda",
          "damage": "4d8+13 cortante; 2d6 vazio"
        },
        "sISxV6zXMFsaq8k8": {
          "name": "Asa",
          "damage": "4d8+13 cortante; 2d6 vazio"
        }
      },
      "actions": {
        "xcv5RqQDqPUZO64y": {
          "name": "Visão de fumaça",
          "description": "A fumaça não prejudica a visão de um corvo de cinzas; ele ignora a condição Oculto da fumaça."
        },
        "oERaiyaSRysA2sZ2": {
          "name": "Soulsense 60 pés (18 metros)",
          "description": "Um corvo sente a essência espiritual de criaturas vivas e mortas-vivas dentro do alcance listado. Criaturas cujos corpos materiais são uma unidade com suas almas, como celestiais e demônios, parecem mais brilhantes neste sentido."
        },
        "UaJYVpVyFCLmyzSf": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "ET8pngtbf9wgjHPR": {
          "name": "Medo encolhido",
          "description": "90 pés (27 metros). verificar (vontade, dc:42, opções:efeito de área,inflige:assustado,inflige:imobilizado)\nA presença assustadora de um corvo faz com que as criaturas também se encolham de medo. Contanto que uma criatura esteja pelo menos Amedrontada 2 ou mais como resultado da presença assustadora do corvo, ela também estará Imobilizada pelo medo."
        },
        "gXGuh7J7RRLkbzSe": {
          "name": "Desincorporar",
          "description": "Gatilho O ravener sofre dano excessivo em sua proteção de alma, mas ainda tem pelo menos 51 pontos de vida em sua proteção de alma\nEfeito O ravener se aprofunda profundamente em sua proteção de alma, desincorporando seu corpo em energia de alma para escapar. Eles sofrem 50 de dano não tipificado em sua proteção de alma e seu corpo físico desaparece, reaparecendo [[/gmr 1d4 #hours]] mais tarde em um local aleatório dentro de 1,6 km do local onde usaram Descorporar."
        },
        "a85DzEynRWXcWgON": {
          "name": "Ataque reativo (somente mandíbulas)",
          "description": ""
        },
        "BTIzB29OCX9LdUn5": {
          "name": "Ala das Almas",
          "description": "200 CV\nUm campo intangível de energia necromântica protege um corvo da destruição total. Um Soul Ward tem 150 pontos de vida máximos, ou 200 se o Ravener estiver no nível 21 ou superior. Sempre que um Ravener for reduzido abaixo de 1 Ponto de Vida, todo o dano que exceder o que o reduziria a 1 Ponto de Vida será causado à sua proteção de alma. Se este dano reduzir a proteção da alma a menos de 0 Pontos de Vida, o ravener será destruído. Os pontos de vida de um protetor de alma só podem ser restaurados por meio de habilidades ravener específicas, como Consumir Alma, Respiração do Vazio ou críticos cruéis. Um ravener que passa mais de uma semana sem usar Consume Soul para se alimentar de uma criatura moribunda morre de fome e sua alma protegida perde 1d4 Pontos de Vida a cada dia até se alimentar. Se a proteção espiritual do ravener perder todos os seus pontos de vida enquanto o ravener ainda tiver mais de 1 HP, eles se tornarão uma casca de ravener."
        },
        "jnw1jAEdaxQu19ow": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "f3zHkq2zmnlBI36y": {
          "name": "Tudo vira chama",
          "description": "O Ravener amaldiçoa uma criatura dentro de 60 pés (18 metros) para que sua magia seja substituída por chamas primordiais. A criatura deve tentar um teste de resistência (vontade, dc:42). Independentemente do resultado, o alvo fica temporariamente imune por 1 dia. Sucesso Crítico A criatura não é afetada.\nSucesso A criatura fica amaldiçoada por 1 rodada. Enquanto amaldiçoado, quaisquer magias que a criatura conjura ganham o traço de fogo e têm seu tipo de dano alterado para dano de fogo, independentemente do tipo de dano original ou tipos do magia. Além disso, quaisquer itens mágicos que o alvo amaldiçoado possua ou empunhe são afetados da mesma maneira, como alterar o dano de frio de uma runa de gelo para dano de fogo. A criatura amaldiçoada pode tentar suprimir temporariamente a maldição como uma ação, que possui a característica concentração. Se a criatura obtiver sucesso em um teste de resistência (vontade, dc:42), a maldição será suprimida até o final do turno dela.\nFalha Como sucesso, mas a duração da maldição é de 1 hora.\nFalha Crítica Como sucesso, mas a duração da maldição é de 1 dia e a CD para suprimir a maldição aumenta para CD 44."
        },
        "xxO9fB5wdVjIMq5m": {
          "name": "Consumir Alma",
          "description": "Gatilho Uma criatura viva dentro de 30 pés (9 metros) do ravener morre\nEfeito O Ravener arranca a alma da criatura de seu corpo com sua boca e a engole. A criatura moribunda deve tentar um teste de resistência (fortitude, dc:44) com a mesma CD da habilidade sopro do corvo.\nSucesso Crítico A criatura não é afetada.\nSucesso O corvo arranca um pequeno pedaço da alma da criatura. Se a vítima voltar à vida, ela será Drenada 1, além de quaisquer outros efeitos colaterais do retorno à vida. O ravener adiciona um número de Pontos de Vida à sua proteção de alma igual à metade do nível da criatura.\nFracasso Como sucesso, mas a alma da criatura é devastada. A criatura é Drenada 3 e o ravener adiciona um número de Pontos de Vida à sua proteção de alma igual ao nível da criatura.\nFalha Crítica Como falha, mas o corvo devora a alma inteira. A vítima não pode ser restaurada à vida enquanto o corvo existir, exceto através de magia poderosa, como um ritual de desejo, e o corvo adiciona um número de Pontos de Vida à sua proteção de alma igual ao dobro do nível da criatura."
        },
        "rErZsPXNuFbptayx": {
          "name": "Manipular Chamas",
          "description": "O Ravener intensifica incêndios próximos. Cada inimigo dentro de 60 pés (18 metros) que sofre dano de fogo persistente sofre 5d6 de dano de fogo."
        },
        "FHYUjs1iNFgXMFd5": {
          "name": "Críticas cruéis",
          "description": "O corvo trata uma jogada de ataque como um acerto crítico em uma jogada de 19 ou 20, desde que a jogada de ataque tenha sido um sucesso. Além disso, sempre que o corvo fizer um acerto crítico com um de seus Golpes, o alvo deve ser bem sucedido em um teste (fortitude, dc:42) ou ganhará a condição Drenado 1. Se o alvo já tiver um valor drenado maior que 0, seu valor drenado aumenta em 1, até um máximo de drenado 4. Sempre que o ravener aplicar drenagem a uma criatura dessa forma, seu protetor de alma ganha 5 Pontos de Vida."
        },
        "XvT3rzgSxpBmdzd1": {
          "name": "Respiração Vazia",
          "description": "O corvo exala uma explosão de chama necrótica que causa 20d6 de dano de fogo | opções: dano de área] de dano (teste (reflexo, dc: 44, básico, opções: efeito de área, inflige: drenado) salvamento). Uma criatura que falhar no teste também será Drenada 1 (ou Drenada 2 em caso de falha crítica). Se uma criatura for drenada pelo Void Breath do Ravener, a proteção de alma do Ravener ganha 5 HP. O corvo não pode usar Respiração do Vazio novamente por [[/gmr 1d4 #Recarregar Respiração do Vazio]]."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:elysian-titan",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e935c75eda527c3de9d3e4d776ec3542c3ce8735d9d792392ccb0dd1521918f1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Titã Elísio",
      "description": "Aqueles titãs que permaneceram fiéis aos seus criadores, recusando-se a participar na rebelião dos seus pares, ganharam a sua liberdade enquanto os outros estavam presos. Muitos titãs Elíseos treinam aspirantes a campeões da liberdade, do sacrifício e do altruísmo.\nCriados por divindades antigas muito antes do surgimento dos ancestrais mortais, os titãs se uniram e tentaram derrubar seus progenitores deíficos. A guerra resultante ainda figura com destaque nos mitos mortais, nos quais a maioria dos titãs foram derrubados e aprisionados por eras.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "rfOg5NKnws2VtxfU": {
          "name": "Ótima escolha",
          "damage": "4d10+20 perfurante"
        },
        "ZKlu5Rcj7aPQWIqR": {
          "name": "Punho",
          "damage": "4d8+20 contundente"
        },
        "uEg92TegciEioxUO": {
          "name": "Flash Perfurante",
          "damage": "2d10 fogo; 3d12+10 perfurante"
        }
      },
      "actions": {
        "F3uEsWGDl6JMsUMC": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "H7zBL2zGojuMZHs8": {
          "name": "+4 Status para todos os salvamentos vs.",
          "description": ""
        },
        "IuheuN8Mn3uMbRb7": {
          "name": "Estatura Impossível",
          "description": "100 pés (30 metros). Os Titãs distorcem a percepção e a distância ao seu redor para parecerem ainda maiores e mais imponentes. Uma criatura que entra ou começa seu turno dentro da emanação deve ter sucesso em um teste de resistência (vontade, dc:44, opções:efeito de área) ou seu movimento em direção ao titã será um movimento sobre terreno difícil (terreno difícil maior em uma falha crítica) por 1 rodada."
        },
        "hm8LWYr2a28rjFMo": {
          "name": "Aperto Titânico",
          "description": "O titã dá um soco em uma criatura afetada por sua estatura impossível, mesmo que esteja fora do alcance normal do titã. Ao acertar, o titã automaticamente agarra a criatura e, se estiver fora de seu alcance, puxa-a para perto."
        },
        "6ZblyWwq5cYJAhMd": {
          "name": "Clivagem ampla",
          "description": "O titã ataca cada inimigo ao seu alcance com uma arma corpo a corpo. Isso conta como três ataques para a penalidade de ataque múltiplo do titã, mas a penalidade não aumenta até que todos os ataques tenham sido feitos."
        }
      },
      "spellcasting": {
        "EsrBm06U5yVs9TW2": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "ZUmmTkAyHwFJwOyX": {
              "name": "Enviando"
            },
            "GtdalJyNgPLARtUZ": {
              "name": "Vidência"
            },
            "sgtzTdbawtyaiimV": {
              "name": "Teletransporte Interplanar (à vontade)"
            },
            "spU5guuyXwyMxznn": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "RRkfgWXW0cl7nq6z": {
              "name": "Movimento irrestrito (à vontade)"
            },
            "0mxN9LBYp82oUyJw": {
              "name": "Estrelas cadentes"
            },
            "c51SjLHFINDNMXoK": {
              "name": "Reavivamento"
            },
            "HpRgymwj9MvfisFt": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:thanatotic-titan",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:52e300f9596090a21b1fc46c3f368276c597901b7900ada68ec67c29760d01ed",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Titã Tanatótico",
      "description": "Titãs tanatóticos serviram como assassinos na guerra contra as divindades. Eles aprenderam a cortar as conexões divinas de seus alvos, assassinando tanto sacerdotes mortais quanto arautos divinos. Titãs tanatóticos foram trancados nas Fendas Exteriores, mas alguns se libertaram e saíram das Fendas Exteriores para que pudessem continuar sua onda de assassinatos e caos. Eles mantêm uma devoção ao seu propósito e um rancor, e até hoje procuram os fiéis para o abate.\nCriados por divindades antigas muito antes do surgimento dos ancestrais mortais, os titãs se uniram e tentaram derrubar seus progenitores deíficos. A guerra resultante ainda figura com destaque nos mitos mortais, nos quais a maioria dos titãs foram derrubados e aprisionados por eras.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "iKjCxLql2lhfuXDL": {
          "name": "Alabarda",
          "damage": "4d10+25 perfurante"
        },
        "MIlxJti4iMxIIWGc": {
          "name": "Pé",
          "damage": "4d8+20 contundente"
        },
        "bfc0W3IxSMkDXCjG": {
          "name": "Pedaço Vazio",
          "damage": "3d12 contundente; 2d10 vazio"
        }
      },
      "actions": {
        "kJOpmqcMPeRBZ3ym": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "njXyzU8c5iZjJXwG": {
          "name": "+4 Status para todos os salvamentos vs. Mental ou Divino",
          "description": ""
        },
        "1IpSC5BgfkhuN2in": {
          "name": "Estatura Impossível",
          "description": "100 pés (30 metros). Os Titãs distorcem a percepção e a distância ao seu redor para parecerem ainda maiores e mais imponentes. Uma criatura que entra ou começa seu turno dentro da emanação deve ter sucesso em um teste de resistência (vontade, dc:47, opções:efeito de área) ou seu movimento em direção ao titã será um movimento sobre terreno difícil (terreno difícil maior em uma falha crítica) por 1 rodada."
        },
        "OIsH1o10P4w9aMfp": {
          "name": "Ataque reativo",
          "description": "O titã pode usar seu Ataque Reativo quando uma criatura ao seu alcance usa uma ação concentrada, além de seu gatilho normal. Eles interrompem as ações em qualquer acerto, não apenas em um acerto crítico, incluindo o acionamento de ações concentradas."
        },
        "tnmr6jdcqoKKxVeM": {
          "name": "Matador de deuses",
          "description": "Gatilho O titã causa dano a uma criatura capaz de usar magias ou habilidades divinas\nEfeito A criatura deve tentar um teste de resistência (vontade, dc:45, opções:infligir:assustado).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura não pode usar magias ou habilidades divinas por 1 rodada e fica Amedrontada 2. Somente magia não-divina poderosa, como manifestação, pode desfazer este efeito.\nFalha Como sucesso, mas a duração é de 1 minuto.\nFalha Crítica Como sucesso, mas a duração é ilimitada."
        },
        "BOO1q9hsqVtL948K": {
          "name": "Carga Titânica",
          "description": "O titã dá dois passos largos e dá um ataque corpo a corpo. Se o Golpe acertar, o titã pode lançar Terremoto centrado no alvo como uma ação livre."
        },
        "rGH5e5TzVneH5FLM": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pa:45, básico)"
        },
        "a9G1B1m6bCxIXwdz": {
          "name": "Explosão do Vazio",
          "description": "Se o golpe do pedaço vazio do titã não for uma falha crítica, o pedaço explode, causando 10d6 de dano vazio a todas as criaturas em um tipo de 6 metros: explosão (teste (reflexo, dc: 45, básico, opções: efeito de área) salvamento)."
        },
        "Icg3lA70DW5ox8xJ": {
          "name": "Clivagem ampla",
          "description": "O titã ataca cada inimigo ao seu alcance com uma arma corpo a corpo. Isso conta como três ataques para a penalidade de ataque múltiplo do titã, mas a penalidade não aumenta até que todos os ataques tenham sido feitos."
        }
      },
      "spellcasting": {
        "u2MLddH7GhOuvZaz": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "3RRRDaa3vAPMvPYZ": {
              "name": "Enviando"
            },
            "iHGWh3iCx3qvGbVc": {
              "name": "Vidência"
            },
            "qKZOLPNYGRuEEx1N": {
              "name": "magia de resposta"
            },
            "SbEPXgfioeOQz0RI": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "EUER3AvSzAxCaeel": {
              "name": "Epidemia espiritual (à vontade)"
            },
            "ke25kCsvoS3ZDDFf": {
              "name": "Sugestão (à vontade)"
            },
            "6QXGFf0oyvtE15YP": {
              "name": "Estrelas cadentes"
            },
            "CLuHdgsZjv1YYdYB": {
              "name": "Massacre"
            },
            "r0Vikc9RGQDe4k7l": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:volnagur",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:da414785560b555f467d8982dbd111c462c397ece3bc3695fa02aba32aab54f0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Volnagur",
      "description": "De todas as crias de Rovagug, a criatura conhecida como Volnagur é a que mais se distanciou do Dead Vault no núcleo de Golarion, em vez disso fez seu lar entre os céus. Volnagur possui muitas asas, e elas são incompatíveis, assimétricas e descoordenadas, mas a enorme prole é capaz de um vôo poderoso que o leva até Arcádia, Tian Xia e até mesmo Sarusan. Embora seja capaz de causar grande destruição com suas muitas línguas afiadas e poderosas rajadas de energia de seus quatro olhos, a habilidade mais temível de Volnagur é a canção discordante produzida pelo ângulo preciso de suas asas contra o vento, que leva todos que o ouvem à violência, colocando vizinho contra vizinho.\nEmbora não tenha sido detectado durante décadas, os astrónomos localizaram recentemente um satélite nos limites superiores da atmosfera de Golarion, onde Volnagur paira imóvel. À medida que flutua de continente em continente, os seus olhos parecem voltar-se alternadamente para a Lua e depois para Golarion, como se esperassem por um sinal.\nEmbora o deus destruidor Rovagug esteja preso no centro do planeta como uma mosca presa no âmbar, aprisionado desde a Era da Criação por uma coalizão de divindades, sua jaula enfraqueceu com o passar do tempo, permitindo que sua influência se espalhasse e tomasse forma como calamidades vivas conhecidas como a Prole de Rovagug. Essas enormes criaturas têm atormentado Golarion há eras, seus ataques são responsáveis ​​por montanhas destruídas, desertos destruídos e oceanos que agora preenchem crateras na terra, e suas habilidades regenerativas garantem que sejam uma ameaça eterna, nunca totalmente morta. O fato de essas criaturas de destruição total terem um controle tão inextinguível sobre a vida é um paradoxo que os estudiosos lutam para resolver. Alguns acreditam que cada Spawn possui o menor fragmento das bênçãos de seus pais divinos; outros postulam que sua imortalidade vem da destruição que causam, ganhando um futuro eterno para cada um roubado de suas vítimas.\nOs relatos dos ataques dos Spawns ao longo da história têm uma linha estranha: cada ataque é seguido por uma notável, embora breve, era de ouro para a região. Embora a maioria atribua isso à cooperação necessária para se defender ou pelo menos sobreviver às depredações de um Spawn, alguns vêem que este é um sinal distorcido de que as criaturas são portadoras da “verdadeira” paz. Esses crentes muitas vezes lideram cultos com a intenção de invocar ou reviver qualquer Spawn recentemente morto.\nEmbora muitos Spawn não sejam vistos há anos, a morte do deus Gorum – um dos arquitetos originais do Dead Vault – enfraqueceu o selo mais uma vez, enviando uma onda da vontade de Rovagug por toda Golarion. Como que em resposta, muitos de seus Spawn começaram a ressurgir, alarmando os líderes, estudiosos e guerreiros de Golarion. Afinal, se um único Spawn é um desastre que define uma geração, exigindo o sacrifício de exércitos apenas para minimizar os danos que pode causar, que destruição inimaginável ocorreria se todos eles despertassem de uma vez?",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "desajeitado",
          "doença",
          "drenado",
          "debilitado",
          "mental",
          "paralisado",
          "petrificado",
          "tóxico",
          "polimorfo",
          "sonoro",
          "estupefato"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "AdONeXiMlE2HZrcA": {
          "name": "Maxilas",
          "damage": "4d10+24 perfurante"
        },
        "w5ewzi0XNevqNEw7": {
          "name": "Línguas de navalha",
          "damage": "4d8+24 cortante"
        },
        "DuwsGSfkCicsyv4w": {
          "name": "Feixe ocular",
          "damage": "6d12 sônico"
        }
      },
      "actions": {
        "6i35bofGCBImK7Fi": {
          "name": "Armagedom adormecido",
          "description": "O sono de Volnagur aumenta a taxa de ataques à vida selvagem, enxames de vermes e pragas e crimes violentos.\nA prole de Rovagug pode dormir durante séculos em uma hibernação regenerativa. Enquanto dorme, um Spawn não precisa comer, beber ou mesmo respirar, e suas resistências dobram de valor. Ele não pode ser localizado por detecção, revelação ou efeitos de vidência e, para qualquer teste de resistência, ele usa o resultado um grau de sucesso melhor que o resultado. Sem saída enquanto o Spawn dorme, suas enormes energias destrutivas se voltam para fora e infectam seus arredores, fazendo com que desastres naturais de um tipo semelhante ao do Spawn ocorram com mais frequência e com maior severidade em uma emanação de 1,6 km do local de descanso do Spawn, aumentando em raio em cerca de um quilômetro a cada década em que o Spawn dorme."
        },
        "PxikUNFCB3jNXy1N": {
          "name": "Regeneração Absoluta",
          "description": "A regeneração de Volnagur pode ser desativada se um coro de pelo menos 12 indivíduos extremamente habilidosos e inspirados cantar uma canção de começos e esperança sobre seu cadáver por 1 ano e 1 dia sem pausa ou falha.\nFunciona como regeneração, embora exija ações muito específicas para ser desativado. A regeneração de um Spawn of Rovagug é poderosa o suficiente para revivê-lo mesmo se for morto por um efeito de morte. Se o Spawn falhar em um teste de resistência contra um efeito que o mataria instantaneamente, ele ressuscitará da morte 3 rodadas depois com 1 Ponto de Vida. Um Spawn ainda pode ser banido, aprisionado ou transportado como forma de salvar uma região ou mantido em estado de morte por um efeito que causa dano constante."
        },
        "11CRC34uLvzuS1BU": {
          "name": "Harmônicos Alienígenas",
          "description": "60 pés (18 metros).\nVolnagur emite constantemente uma cacofonia que abafa o som e o pensamento enquanto reforça a música de Volnagur. As criaturas que entram na aura devem tentar um teste (fortitude, dc:43, opções:efeito de área,infligir:ensurdecido) para salvar ou a canção de Volnagur se torna tudo o que podem ouvir enquanto permanecerem dentro da aura, tornando as criaturas ensurdecidas contra todas as fontes, exceto Volnagur.\nEm caso de falha crítica, o efeito é permanente e a cacofonia ressoa nos ouvidos do alvo, independentemente do alcance. A aura também tenta neutralizar qualquer efeito auditivo, qualquer efeito que forneça resistência ou imunidade a efeitos auditivos ou sonoros, ou qualquer efeito que crie silêncio (neutralizar Rank 10, neutralizar modificador [[/r 1d20+33 #Counteract]])."
        },
        "78iUNBR6nybyHlsn": {
          "name": "Presença assustadora",
          "description": "300 pés (90 metros). verificar (vontade, dc:42, opções:efeito de área,inflige:assustado)"
        },
        "VNbpBk2pVWYd7pM2": {
          "name": "Interceptando Olhos",
          "description": "Trigger Volnagur é alvo de um ataque à distância\nRequisitos Volnagur está ciente do ataque e não está desprevenido\nEfeito Um dos olhos de Volnagur fixa-se no ataque, abatendo-o com um raio ocular. O ataque se torna uma falha crítica."
        },
        "VwtuwlF25fRtFuwl": {
          "name": "Reativo",
          "description": "Volnagur ganha 3 reações a cada rodada. Ele ainda pode usar apenas uma reação por gatilho."
        },
        "M3T6RMWUAwxIV9v4": {
          "name": "Ataque reativo",
          "description": ""
        },
        "0BNDWrvoySpF4N3s": {
          "name": "Fim da música",
          "description": "Vibrações sutis associadas aos ataques de Volnagur confundem seus alvos e enchem suas mentes com o desejo de destruir. Uma criatura danificada por um dos Golpes de Volnagur deve tentar um teste de resistência (vontade, dc:45).\nSucesso Crítico O alvo não é afetado e fica temporariamente imune por 24 horas ou até receber dano de Grito do Fim.\nSucesso O alvo não é afetado.\nFalha O alvo fica Confuso por [[/gmr 1d4 #rounds]]. Ele nunca tenta atacar Volnagur ou outra criatura afetada pelo fim da canção.\nFalha Crítica Como falha, mas o alvo fica confuso por 1 hora. Embora confuso, seus golpes ressoam com a música de Volnagur, causando 1d6 de dano sônico adicional e forçando o alvo a salvar contra o final da canção."
        },
        "9ngplMQctzFP1NHv": {
          "name": "Contemplar",
          "description": "Volnagur faz um ataque de raio ocular contra todas as criaturas em um tipo de cone de 36 metros. Esses ataques contam para a penalidade de ataque múltiplo de Volnagur, mas a penalidade de ataque múltiplo não aumenta até que Volnagur faça todos os seus ataques. Ele não pode usar Gaze Upon novamente para [[/gmr 1d4 #Recharge Gaze Upon]], mas até o início do próximo turno de Volnagur, ele pode usar Intercepting Eyes como uma ação livre."
        },
        "OB3ZWGUreeenpfwH": {
          "name": "Grito do Fim",
          "description": "Requisitos Volnagur tem uma criatura agarrada ou contida\nEfeito Volnagur segura uma criatura perto de seus olhos antes de explodir a criatura à queima-roupa. Volnagur causa 23d6 de dano sônico ao alvo (teste de resistência (reflexo, dc:46, básico)). Independentemente do resultado do salvamento, o alvo não é mais agarrado ou contido, é empurrado 120 pés (36 metros) para longe de Volnagur e cai no chão."
        },
        "Mpwmw4x7ELbkdZ6A": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:danava-titan",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d0f5a5114fbbfdd15d628964aed0f57d3d76ac9c53f2eff48de208d66e3309b6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Danava Titã",
      "description": "Os titãs Danava já regularam as forças fundamentais que moldaram a realidade. Repreendidos pelos deuses por serem supervisores severos e inflexíveis, esses titãs rejeitados juntaram-se a seus irmãos na guerra fracassada contra seus criadores. Derrotados, os danavas foram lançados nas profundezas paralisantes dos mares do cosmos. Os poucos titãs danava que escaparam agora exercem o frio, a escuridão e a pressão esmagadora de suas prisões em busca de suas antigas visões da realidade. Danavas dividem montanhas, despertam feras primordiais ou destroem civilizações inteiras de acordo com grandes projetos que eles criaram no início dos tempos. Outros caçam e colhem os aeons que impõem o equilíbrio, a quem vêem como usurpadores da sua responsabilidade divina.\nCriados por divindades antigas muito antes do surgimento dos ancestrais mortais, os titãs se uniram e tentaram derrubar seus progenitores deíficos. A guerra resultante ainda figura com destaque nos mitos mortais, nos quais a maioria dos titãs foram derrubados e aprisionados por eras.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60",
        "wavesense-imprecise-100": "ondasense-impreciso-100"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "empyrean": "empíreo",
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "VC7GF4m402xkxeEZ": {
          "name": "Grande clube",
          "damage": "2d12 frio; 4d10+20 contundente"
        },
        "eRAeYQ2PY2ilSwSi": {
          "name": "Pé",
          "damage": "2d12 frio; 4d8+20 contundente"
        },
        "lquMaNYp8mYioGgS": {
          "name": "Onda Bentônica",
          "damage": "2d12 frio; 4d6+20 contundente"
        }
      },
      "actions": {
        "eG60B7eDA6vgPraQ": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "drcreUYOEtB2eRWu": {
          "name": "+4 Status para todos os salvamentos vs. Mental ou Divino",
          "description": ""
        },
        "EerNckNJMB7FhQxU": {
          "name": "Presença Hadálica",
          "description": "Criaturas que falham em seu teste de Vontade contra a aura de estatura impossível do titã também experimentam as profundezas esmagadoras e a escuridão do fundo do oceano. Tais criaturas enxergam como se estivessem em uma área de Escuridão (10º Rank), e o titã pode usar seu sentido de ondas para detectar tais criaturas com um sentido preciso, mesmo que nenhuma delas esteja na água. Em caso de falha crítica, a criatura também fica Imobilizada."
        },
        "xr5BJ4GnCyarIA0N": {
          "name": "Estatura Impossível",
          "description": "100 pés (30 metros). Os Titãs distorcem a percepção e a distância ao seu redor para parecerem ainda maiores e mais imponentes. Uma criatura que entra ou começa seu turno dentro da emanação deve ter sucesso em um teste de resistência (vontade, dc:46, opções:efeito de área) ou seu movimento em direção ao titã será um movimento sobre terreno difícil (terreno difícil maior em uma falha crítica) por 1 rodada."
        },
        "uifzZ1VIYzUs1rIn": {
          "name": "Implacável",
          "description": "O titã está em constante movimento como as ondas do oceano. Eles são permanentemente acelerados e a ação extra pode ser usada apenas para avançar, atacar ou sustentar um magia, ou como uma das ações necessárias para lançar dissipar magia."
        },
        "kMk5ApEZUJgW23lq": {
          "name": "Repreensão turbulenta",
          "description": "Gatilho Uma criatura dentro de 200 pés (60 metros) atinge o titã ou inclui o titã na área de um ataque, magia ou outro efeito\nEfeito O titã faz uma onda bentônica Golpe contra a criatura desencadeadora. Se o Golpe acertar, o titã interrompe a ação desencadeadora."
        },
        "WUlYOu0PnwqFXxfW": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pa:46, básico)"
        },
        "euGd1sr7zVM2YQAQ": {
          "name": "Clivagem ampla",
          "description": "O titã ataca cada inimigo ao seu alcance com uma arma corpo a corpo. Isso conta como três ataques para a penalidade de ataque múltiplo do titã, mas a penalidade não aumenta até que todos os ataques tenham sido feitos."
        }
      },
      "spellcasting": {
        "a3t3OQweb0D68SN0": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "G6gDxqxIeWctEafW": {
              "name": "Controle a água (à vontade)"
            },
            "LFf59CKuXvcdlzmQ": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "y2KNxFWDK9bYehwW": {
              "name": "Explosão de Eclipse"
            },
            "z4paekEeTh3FGNoD": {
              "name": "Curar"
            },
            "lmtW7GeLQFKoB7b4": {
              "name": "Impulso Hidráulico"
            },
            "HMa0R9mv6qRQ9PVs": {
              "name": "Torrente Hidráulica"
            },
            "5u4DJz3qKzm0QWDI": {
              "name": "Implosão"
            },
            "HIEEo9lndlwKQjsG": {
              "name": "Visão Verdadeira (Constante)"
            },
            "MC1HTmEjvPWwjn6G": {
              "name": "Caminhada na Água (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hekatonkheires-titan",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:83480e7327351f6f75ec8a719f9a490c216f98ee0b3842dd5e02c86b3caaa785",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Hekatonkheires Titã",
      "description": "Os primeiros três hekatonkheires deveriam proteger os portões das Fendas Exteriores, mas se mostraram muito aterrorizantes e rebeldes – e então, enojados, os deuses os lançaram nos abismos entre os planos. Os titãs de Hekatonkheire são descendentes monstruosos e incompletos dos três originais, dos quais esses titãs nasceram como icebergs. Hekatonkheires usam a escuridão interestelar como arma e rejeitam os limites da realidade física, literalmente alcançando o espaço com seus incontáveis ​​braços. Cheios de um desejo de descobrir sua identidade perdida ou criar uma nova, eles estripam metafisicamente seres antigos e magias cósmicas, usando as entranhas para encontrar pistas sobre sua própria natureza e ascendência ou para servir como matéria-prima para alimentar alguma apoteose alienígena.\nCriados por divindades antigas muito antes do surgimento dos ancestrais mortais, os titãs se uniram e tentaram derrubar seus progenitores deíficos. A guerra resultante ainda figura com destaque nos mitos mortais, nos quais a maioria dos titãs foram derrubados e aprisionados por eras.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "aklo": "aklo",
        "chthonian": "chthoniano",
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "sJGimQAnB7Ajh01b": {
          "name": "Arma Vazia",
          "damage": "4d12+18 contundente"
        },
        "7wN1CJskLk0J87LG": {
          "name": "Arma Vazia",
          "damage": "4d12+18 contundente"
        }
      },
      "actions": {
        "nabnxrUY71hiOkK7": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "Kxh6sYGll5ANl6jP": {
          "name": "Visão Geral",
          "description": ""
        },
        "TkY7iWoNGBkC753V": {
          "name": "+4 Status para todos os salvamentos vs. Mental ou Divino",
          "description": ""
        },
        "qOEGvrqLvYESF0K4": {
          "name": "Estatura Impossível",
          "description": "120 pés (36 metros). Os Titãs distorcem a percepção e a distância ao seu redor para parecerem ainda maiores e mais imponentes. Uma criatura que entra ou começa seu turno dentro da emanação deve ter sucesso em um teste de resistência (vontade, dc:48, opções:efeito de área) ou seu movimento em direção ao titã será um movimento sobre terreno difícil (terreno difícil maior em uma falha crítica) por 1 rodada."
        },
        "GnOERW3B2fZAtnvB": {
          "name": "Ataque reativo",
          "description": "Os hekatonkheires ganham 99 reações extras em seu turno, que só podem ser usadas para realizar Ataques Reativos."
        },
        "TdLxPZk0EVDr9Q9c": {
          "name": "Demolir Véu",
          "description": "Frequência uma vez por mês\nAcionar O titã lança Teleporte Interplanar\nEfeito O titã chega em meio a uma tempestade de barreiras planares destruídas. Isso tem os efeitos de uma Tempestade Furiosa de 10º Rank."
        },
        "TzgJuOy9d6ud4UfQ": {
          "name": "Aperto de Cem Dimensões",
          "description": "O titã avança entre as realidades para aproximar os inimigos. Eles tentam um teste (atletismo, contra:fortitude, opções:efeito de área,inflige:paralisado) e comparam o resultado com as CDs de Fortitude de todos os inimigos dentro de 120 pés (36 metros). Em caso de sucesso, um inimigo é teletransportado para qualquer quadrado que o titã escolher dentro de 120 pés (36 metros); em caso de sucesso crítico, ele também fica paralisado por 1 rodada. O titã pode Agarrar qualquer inimigo colocado dentro de 30 pés (9 metros) como uma ação livre."
        },
        "yKIJVkzzwZ5BKOlN": {
          "name": "Redemoinho de Cem Mãos",
          "description": "O titã domina os oponentes com golpes convencionais e interplanares. Eles executam um golpe com arma vazia contra cada inimigo ao seu alcance. Mesmo em um ataque fracassado (mas não em uma falha crítica), o titã causa 24 de dano de força ao alvo. Isso conta como três ataques para a penalidade de ataque múltiplo do titã, mas a penalidade não aumenta até que todos os ataques tenham sido feitos."
        },
        "6KvIkhBbUU6e1rTa": {
          "name": "Enviar além",
          "description": "Requisitos O titã tem uma criatura agarrada ou contida\nEfeito O titã empurra a criatura para um reino de pesadelo cheio de mãos e olhos sem luz. Isso tem os efeitos do Dilema (CD 48). O titã não pode usar Send Beyond para [[/gmr 1d4 #Recharge Send Beyond]]."
        },
        "cICaV0tZHykBk7xk": {
          "name": "Vazio de forma",
          "description": "O titã molda uma arma da escuridão interestelar. Esta arma vazia é uma arma de ataque principal +3 em qualquer forma. O titã não pode ser desarmado com esta arma e ela causa 2d12 de dano de força adicional. Se Liberada, uma arma vazia desaparece."
        }
      },
      "spellcasting": {
        "3PEFPC1Q7M18JMjJ": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "DfDx9tPhBEjEy5Vw": {
              "name": "Teletransporte Interplanar"
            },
            "QhWileQvnPTPApCf": {
              "name": "Fantasmagoria"
            },
            "aKr7oVMme42CrsMA": {
              "name": "Aproveite a alma"
            },
            "YGbDouXSq4uaGblt": {
              "name": "Translocar"
            },
            "4afUuH1ju3eaUiKB": {
              "name": "Visão Verdadeira (Constante)"
            },
            "lvWAYsHVWyupACrD": {
              "name": "Movimento irrestrito (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:green-man",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:920d2aa84828c088ef5237725dd6f8c9627a23f2b6a13e967f7ce5cbc45052c9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Homem Verde",
      "description": "Os homens verdes são antigas e enigmáticas divindades inferiores das florestas primitivas, encarnações vivas da natureza e das plantas. Quando uma floresta ou outro terreno florestal gera espíritos da natureza suficientes, seres do mesmo tipo de essência vital que incorpora os leshys ou responde ao chamado de uma comunhão com a natureza, eles naturalmente se unem e se transformam em apoteose em um homem verde. Os homens verdes não estão preocupados com todos os múltiplos processos da natureza como Gozreh ou muitas outras divindades da natureza. Em vez disso, eles concentram quase toda a sua atenção nas plantas de sua casa, preocupando-se apenas com animais, minerais e coisas semelhantes, na medida em que afetam as plantas. Apesar do nome, os homens verdes não são necessariamente homens; como criaturas de puro poder natural, para muitos deles o conceito de género não tem significado e, para aqueles que o têm, podem ser de qualquer género.\nA maioria dos homens verdes são neutros e tendem a ignorar os “animais”, que para eles incluem criaturas sapientes como os humanos. No entanto, existem homens verdes bons e maus. É muito mais provável que esses indivíduos tentem espalhar a sua influência por toda parte, seja para o bem ou para o mal. Bons homens verdes fornecem socorro a todos que entram em sua casa, não apenas às plantas, proporcionando sabedoria como um pai nutridor. Os homens verdes maus, no entanto, permitem que plantas raras e perigosas prosperem nos seus domínios, espalhando o medo e a devastação a todos aqueles que possam ameaçar a vida vegetal, embora possam manter alguns animais por perto para caçar por desporto.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "arboreal": "arbóreo",
        "fey": "feérico",
        "wildsong": "canção selvagem"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "espancamento 20",
          "piercing 20"
        ],
        "weaknesses": [
          "vulnerabilidade do machado 20",
          "fogo 20"
        ]
      },
      "attacks": {
        "hyj6N5o5oSyNgbJd": {
          "name": "Videira",
          "damage": "4d10 + 27 contundente"
        },
        "Q9YkvCkVgM00oIy8": {
          "name": "Espinho",
          "damage": "4d8 + 27 perfurante"
        }
      },
      "actions": {
        "hVTC4rrt8IWJq51F": {
          "name": "Língua Verde",
          "description": "Um homem verde pode se comunicar com as plantas, com os efeitos de Falar com as Plantas, e pode usar a Diplomacia para causar uma impressão nas plantas e solicitar coisas das plantas."
        },
        "UmrTl2VeCsF3GsBm": {
          "name": "Plantsense 60 pés (18 metros)",
          "description": "Um homem verde pode sentir a força vital através das plantas. Isso permite que eles observem a essência vital de uma criatura viva ou morta-viva dentro de 60 pés (18 metros) do homem verde, mas eles também podem usar esse sentido preciso para observar qualquer criatura viva ou morta-viva dentro de 60 pés (18 metros) de qualquer matéria vegetal dentro de 120 pés (36 metros) do homem verde. Isso permite que o homem verde veja os seres vivos através da matéria vegetal sólida, bem como veja através de outras barreiras se há plantas do outro lado."
        },
        "7lG8jBDPOKE6KGt2": {
          "name": "Carícia Verde",
          "description": "60 pés (18 metros). As criaturas vivas na área, exceto as plantas, lentamente se transformam em plantas não-criaturas. O homem verde pode excluir criaturas deste efeito, mas ele deve estar ciente da presença e localização de uma criatura para fazer isso. Uma criatura que não seja uma planta na área deve tentar um teste de resistência (fortitude, dc:45) imediatamente antes do início de seu turno.\nSucesso Crítico A criatura não é afetada ou, se for retardada por carícia verde, reduz seu valor de desaceleração em 2.\nSucesso A criatura não é afetada ou, se for retardada pela carícia verde, reduz seu valor de lentidão em 1.\nFalha A criatura fica desacelerada 1, ou se já foi desacelerada pela carícia verde, aumenta o valor de desaceleração em 1, à medida que seu corpo se transforma cada vez mais em uma planta que não é uma criatura. Se a criatura ficar lenta a ponto de não ter mais ações para seu turno, ela se tornará uma planta inanimada, uma condição que só pode ser revertida pelo Fenômeno Primordial ou magia similarmente poderosa.\nFalha Crítica Como falha, exceto que a criatura fica Lentidão 2 (ou aumenta o valor da condição em 2)."
        },
        "7OHhyz8S9jaICp6G": {
          "name": "Raiz no lugar",
          "description": "Gatilho Uma criatura dentro do alcance do homem verde usa uma ação de movimento ou sai de um quadrado durante uma ação de movimento que está usando\nEfeito O homem verde ataca para manter o inimigo no lugar. O homem verde faz um golpe de videira contra a criatura que acionou. Se o ataque acertar, o homem verde interrompe a ação. Se a criatura estava Voando quando sua ação foi interrompida, ela cai."
        },
        "iFhR8LsLMNJ2v6O0": {
          "name": "Absorver Magia",
          "description": "As vinhas do homem verde lixiviam a magia e a transformam em essência de vida para o homem verde. Em um ataque de videira bem-sucedido, o homem verde tenta neutralizar um magia ativo no alvo (normalmente um que irrita o homem verde, ou determinado aleatoriamente se ele não estiver ciente dos efeitos específicos), com um Rank de neutralização de 10 e um modificador de [[/r 1d20+38 #Contratar]].\nSe o efeito for neutralizado, o homem verde ganha [[/r 30 #Temporary Hit Points]] que duram 10 minutos."
        },
        "bDZ6kq6HqfFLK2PU": {
          "name": "Incorporar",
          "description": "Os espinhos do homem verde se cravam em qualquer criatura que ele danifique, criando raízes no solo. Um alvo danificado por um espinho tem sua Velocidade reduzida pela metade e não pode Pisar, Voar ou sair do chão até que o espinho seja removido. Remover um espinho requer 3 ações de Interação, que não precisam ser consecutivas. Se a criatura que executa a ação final não obtiver sucesso em um teste (medicina, cd:45) como parte dessa ação, o alvo sofre 10d6 de dano perfurante após a remoção do espinho."
        },
        "vTV8lwwNuVs4eL7F": {
          "name": "Vinhas de foco",
          "description": "O homem verde concentra todas as suas vinhas contra um único inimigo irritante, fazendo um único golpe na vinha.\nSe obtiver sucesso, o alvo sofre 5d10 de dano adicional e é afetado por Absorver Magia três vezes. Mesmo em caso de falha, o alvo sofre os efeitos normais de um golpe com um Golpe de Vinha, mas em caso de falha crítica, as vinhas erram completamente."
        },
        "nEE49kEL2IsSaPcv": {
          "name": "Agarre Verde",
          "description": "Um homem verde pode usar sua ação Agarrar Aprimorado contra uma criatura de qualquer tamanho."
        },
        "ICqXmQ1I3WhSNBF7": {
          "name": "Rituais Verdes",
          "description": "Um homem verde pode realizar todos os seus rituais sem conjuradores secundários, confiando em seus próprios laços primordiais com a essência vital dos espíritos da natureza.\nOs rituais Despertar Animal e Chamado Primordial do homem verde funcionam nas plantas, em vez de em sua gama usual de escolhas.\nA maioria dos homens verdes também conhece o ritual para criar vários tipos de Leshys e possivelmente até magia que permite a criação de criaturas arbóreas ou plantas mais poderosas."
        },
        "MGarveOJoEZEZRDb": {
          "name": "Floresta de Vinhas",
          "description": "O homem verde ataca com todas as seis vinhas para atacar muitos oponentes. Eles realizam até seis ataques de videira, cada um contra um alvo diferente; isso conta como um ataque para sua penalidade de ataque múltiplo, aumentando somente depois que todos os ataques forem feitos."
        },
        "bTNygOkcj07sIda5": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "qki0wO5XwHHhxpMl": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "SRhEvuVcADf4oYP4": {
              "name": "Detectar magia"
            },
            "p1szTSDCzHjFDFZB": {
              "name": "Leia aura"
            },
            "rqUzCByCeFdvD2ZW": {
              "name": "Voar"
            },
            "08Xykf7g5uDssr20": {
              "name": "Movimento desenfreado"
            },
            "FVOkoy07iXgrB1sy": {
              "name": "Égide Energética"
            },
            "mXvmPCHrU57vHHEG": {
              "name": "Curar"
            },
            "xlHkYvaiTYowQxRz": {
              "name": "Manifestação"
            },
            "pCYui6n9e9HBtE9b": {
              "name": "Caminho da Natureza (à vontade)"
            },
            "VljZIJFtT5dam4yO": {
              "name": "Regenerado"
            },
            "vlXGzutBWKtj2GzX": {
              "name": "Visão Verdadeira"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sorvuth-ka",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ef2d812a33aca6462c1a807220c56bd41eeb0af6c11af6dc5ecd00b42889e58b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sorvuth-Ka",
      "description": "Sorvuth-ka é o mais jovem da geração de Rovagug. Nunca foi visto comendo; sem a fome voraz observada nos outros Spawn, ele parece destruir simplesmente pelo prazer de fazê-lo, abordando cada um de seus ataques com uma crueldade nova e inventiva. Sorvuth-ka pode fazer uma pausa enquanto destrói uma cidade para dar à população tempo suficiente para fugir, apenas para eles perceberem, em desespero, que sua única rota de fuga é uma passagem na montanha que Sorvuth-ka já desabou. No entanto, a criatura fica entediada facilmente, despachando rapidamente a presa com membros laminados se seus jogos pararem de correr conforme o planejado ou demorarem muito para se concretizarem.\nCuriosamente, apesar das habilidades regenerativas de Sorvuth-ka – poderosas até mesmo para um Spawn e capazes de torná-lo resistente a ataques que o feriram – ele possui vários ferimentos que se recusam a curar, principalmente um grande corte em seu rosto. Alguns estudiosos teorizam que essas feridas são algum desígnio cruel de Rovagug, para melhor permitir o acesso ao sangue âmbar que é o principal instrumento de destruição de Sorvuth-ka. Outros tomam isso como prova da existência de uma arma capaz de acabar de uma vez por todas com a ameaça do Spawn de Rovagug.\nEmbora o deus destruidor Rovagug esteja preso no centro do planeta como uma mosca presa no âmbar, aprisionado desde a Era da Criação por uma coalizão de divindades, sua jaula enfraqueceu com o passar do tempo, permitindo que sua influência se espalhasse e tomasse forma como calamidades vivas conhecidas como a Prole de Rovagug. Essas enormes criaturas têm atormentado Golarion há eras, seus ataques são responsáveis ​​por montanhas destruídas, desertos destruídos e oceanos que agora preenchem crateras na terra, e suas habilidades regenerativas garantem que sejam uma ameaça eterna, nunca totalmente morta. O fato de essas criaturas de destruição total terem um controle tão inextinguível sobre a vida é um paradoxo que os estudiosos lutam para resolver. Alguns acreditam que cada Spawn possui o menor fragmento das bênçãos de seus pais divinos; outros postulam que sua imortalidade vem da destruição que causam, ganhando um futuro eterno para cada um roubado de suas vítimas.\nOs relatos dos ataques dos Spawns ao longo da história têm uma linha estranha: cada ataque é seguido por uma notável, embora breve, era de ouro para a região. Embora a maioria atribua isso à cooperação necessária para se defender ou pelo menos sobreviver às depredações de um Spawn, alguns vêem que este é um sinal distorcido de que as criaturas são portadoras da “verdadeira” paz. Esses crentes muitas vezes lideram cultos com a intenção de invocar ou reviver qualquer Spawn recentemente morto.\nEmbora muitos Spawn não sejam vistos há anos, a morte do deus Gorum – um dos arquitetos originais do Dead Vault – enfraqueceu o selo mais uma vez, enviando uma onda da vontade de Rovagug por toda Golarion. Como que em resposta, muitos de seus Spawn começaram a ressurgir, alarmando os líderes, estudiosos e guerreiros de Golarion. Afinal, se um único Spawn é um desastre que define uma geração, exigindo o sacrifício de exércitos apenas para minimizar os danos que pode causar, que destruição inimaginável ocorreria se todos eles despertassem de uma vez?",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "desajeitado",
          "doença",
          "drenado",
          "debilitado",
          "mental",
          "paralisado",
          "petrificado",
          "tóxico",
          "polimorfo",
          "estupefato",
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "WtCnY7UFjuIpHAqq": {
          "name": "Garra",
          "damage": "4d8+27 cortante"
        },
        "jl8rDGyGlBcKj81e": {
          "name": "Sangue Cristalizado",
          "damage": "5d6+21 cortante"
        }
      },
      "actions": {
        "YJv8jxIk5OdnsIIS": {
          "name": "Armagedom adormecido",
          "description": "O sono de Sorvuth-ka acelera a erosão e o desgaste, programado para sempre quebrar no ponto de dano máximo por meio de deslizamentos de rochas, buracos, quedas de árvores e outros colapsos.\nA prole de Rovagug pode dormir durante séculos em uma hibernação regenerativa. Enquanto dorme, um Spawn não precisa comer, beber ou mesmo respirar, e suas resistências dobram de valor. Ele não pode ser localizado por detecção, revelação ou efeitos de vidência e, para qualquer teste de resistência, ele usa o resultado um grau de sucesso melhor que o resultado. Sem saída enquanto o Spawn dorme, suas enormes energias destrutivas se voltam para fora e infectam seus arredores, fazendo com que desastres naturais de um tipo semelhante ao do Spawn ocorram com mais frequência e com maior severidade em uma emanação de 1,6 km do local de descanso do Spawn, aumentando em raio em cerca de um quilômetro a cada década em que o Spawn dorme."
        },
        "VvGebuOtezYnHBYc": {
          "name": "Regeneração Absoluta",
          "description": "A regeneração de Sorvuth-ka pode ser desativada matando-o com uma arma feita de ossos de Chemnosit, Kothogaz, Ulunat, Volnagur e Xotani.\nFunciona como regeneração, embora exija ações muito específicas para ser desativado. A regeneração de um Spawn of Rovagug é poderosa o suficiente para revivê-lo mesmo se for morto por um efeito de morte. Se o Spawn falhar em um teste de resistência contra um efeito que o mataria instantaneamente, ele ressuscitará da morte 3 rodadas depois com 1 Ponto de Vida. Um Spawn ainda pode ser banido, aprisionado ou transportado como forma de salvar uma região ou mantido em estado de morte por um efeito que causa dano constante."
        },
        "dcg3u5ovHBNc8pFR": {
          "name": "Defesas Adaptativas",
          "description": "Quando ferido, o corpo de Sorvuth-ka se adapta para garantir que o insulto desencadeador não possa prejudicá-lo novamente. Imediatamente após sofrer dano, ele se torna imune a esse tipo de dano. Dessa forma, ele pode se tornar imune a três tipos diferentes de danos, com imunidades mais recentes substituindo as mais antigas."
        },
        "4WBvZhaArTY9jOPO": {
          "name": "Destruição de Sangramento",
          "description": "Gatilho Sorvuth-ka sofre dano físico\nEfeito Sangue âmbar jorra do ferimento de Sorvuth-ka, criando uma poça de sangue em um quadrado adjacente a Sorvuth-ka. O sangue permanece na área até ser removido ou secar, o que normalmente leva 1 dia."
        },
        "SEMsJGIh2w443p2M": {
          "name": "Presença assustadora",
          "description": "300 pés (90 metros). verificar (vontade, dc:45, opções:efeito de área,inflige:assustado)"
        },
        "eOxUYUXTjbx8fnb5": {
          "name": "Reativo",
          "description": "Sorvuth-ka ganha 3 reações a cada rodada. Ele ainda pode usar apenas uma reação por gatilho."
        },
        "RJ4SyBBmOwFdwp1h": {
          "name": "Ataque reativo",
          "description": ""
        },
        "VbINFr4N3zDmmk8h": {
          "name": "Ataques de âmbar",
          "description": "Requisitos A ação anterior de Sorvuth-ka foi um ataque bem-sucedido contra o alvo\nEfeito Depois de acertar um Golpe, Sorvuth-ka comanda o sangue para continuar o ataque, escolhendo uma das três opções a seguir: Cristalizar, Injetar ou Respingar. Se o ataque anterior foi um acerto crítico, Amber Strikes é uma ação livre.\n• Cristalizar o sangue de Sorvuth-ka flui ao redor dos membros do alvo antes de endurecer. A criatura deve ser bem sucedida em um teste de resistência (reflexo, dc:48) ou ficará imobilizada e fora de guarda até escapar. Se a criatura estava voando, ela cai.\n• Injetar o sangue de Sorvuth-ka invade o alvo através de seus ferimentos. O alvo deve ter sucesso em um teste de resistência (fortitude, dc:48) ou ficará Enjoado 2 (Enjoado 3 em uma falha crítica). Enquanto o alvo estiver doente, o sangue de Sorvuth-ka tentará neutralizar qualquer efeito que possa restaurar Pontos de Vida ao alvo (neutralizar Rank 10, neutralizar modificador [[/r 1d20+38 #Counteract]]).\n• Splash O sangue de Sorvuth-ka espirra violentamente, ofuscando o alvo até o final do próximo turno e criando uma poça de sangue em um quadrado adjacente ao alvo."
        },
        "Mmdee5NRIxNVJtld": {
          "name": "Detonar Sangue",
          "description": "Requisitos Uma poça de sangue de Sorvuth-ka está dentro de 500 pés (150 metros)\nEfeito O sangue de Sorvuth-ka detona em flechas âmbar cristalinas. Cada criatura no quadrado da poça de sangue necessária ou em uma emanação do tipo de 3 metros daquela poça que não seja Sorvuth-ka sofre 20d8 de dano perfurante (teste de resistência (reflexo, dc:48, básico)). Em caso de falha crítica, qualquer resistência a dano físico que a criatura tenha é reduzida em 10 por 1 minuto."
        },
        "VbLqJNITCGyQpWMD": {
          "name": "Fúria violenta",
          "description": "Requisitos Sorvuth-ka tem pelo menos uma criatura agarrada ou contida\nEfetua Sorvuth-ka Strides, arrastando consigo quaisquer criaturas que ele tenha agarrado ou contido. Cada criatura agarrada ou contida sofre 11d6 de dano de concussão (teste de resistência (fortitude, dc:48, básico)). Em caso de falha, a criatura também fica Desajeitada 2 (ou Desajeitada 3 em caso de falha crítica) até escapar."
        },
        "C8fyP1hihBwXtGf2": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:hidden-pit",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2a0ceadf0f5e17bc102b67debcb16b236f9a41c2c490f4be669b8f23e1f13d84",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Poço Escondido",
      "description": "Um alçapão de madeira cobre um poço com 10 pés (3 metros) quadrado e 20 pés (6 metros) profundo.",
      "size": "Médio",
      "stealthDetails": "(ou 0 se o alçapão estiver desativado ou quebrado)",
      "disable": "check (roubo, dc:12, nome:Remover o alçapão) para remover o alçapão",
      "routine": "",
      "reset": "As criaturas ainda podem cair na armadilha, mas o alçapão deve ser reiniciado manualmente para que a armadilha fique escondida novamente.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "lY83oUjx0DLxDByK": {
          "name": "Armadilha",
          "description": "Gatilho Uma criatura entra no alçapão.\nEfeito A criatura desencadeadora cai e sofre dano de queda (normalmente 10 de dano de concussão). Essa criatura pode usar a reação Agarrar uma Borda para evitar cair."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:snowfall",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:fe17cf2be2fb23ca05c3ce35d7cd2caa768bac662ce4716f3ccb6f432a5a393e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Queda de neve",
      "description": "Neve solta e gelo acumularam-se numa superfície alta, como um galho de árvore ou um telhado. Sua aderência à superfície é tênue e é provável que caia se a superfície se mover.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (sobrevivência, dc:19, nome:Desalojar a neve com segurança) (treinado) para desalojar a neve com segurança ou causar qualquer quantidade de dano de fogo para destruir o perigo sem ativá-lo",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "hoSnbd89PgLy85mP": {
          "name": "Gota de neve",
          "description": "Gatilho Uma criatura se move abaixo de onde a neve está repousando.\nEfeito Gelo e neve caem sobre a criatura desencadeadora, causando (2d6+3)[concussão] de dano (teste de resistência (reflexo, dc:18, básico)) e encharcando suas roupas. Até que coloquem roupas limpas ou passem pelo menos uma hora em uma área com temperatura normal ou mais alta, eles tratam os ambientes frios como um passo mais frios (por exemplo, frio leve como frio intenso)."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:slamming-door",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7593e54172531fe1427b7019f2bd51508852587362299b049947480a4257626e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Porta batendo",
      "description": "Painéis sensíveis à pressão no piso se conectam a uma laje de pedra escondida no teto de um corredor.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "cheque (roubo, dc:15, nome:Desativar painel de piso) (treinado) nos painéis de piso antes que a laje caia",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "34y07VryqAVeJhfG": {
          "name": "Fechar",
          "description": "A pressão de gatilho é colocada em qualquer piso.\nEfeito A porta cai, fechando o corredor. A laje de pedra causa 3d8 de dano de concussão a qualquer pessoa abaixo ou adjacente à laje quando cai e empurra-os para fora de seu espaço em uma direção aleatória. Uma criatura que obtiver sucesso em um teste de resistência (reflexo, cd:17, características:efeito de dano) não sofre dano e rola para fora do caminho em uma direção aleatória. Com um sucesso crítico, eles podem escolher a direção.\nLevantar a laje caída requer um teste bem-sucedido (atletismo, dc:25, nome:Levantar uma laje Atletismo, mostrarDC:todos).\nBater nos painéis do chão aciona a armadilha. A laje usa a mesma AC e salva que a armadilha, mas tem Dureza 12, HP 48 (BT 24)."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:hampering-web",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:bdc11a522b384d11838f59ca56d5cc9d51df7d69991163e2c061a027a6deede3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dificultando a Web",
      "description": "Folhas semitransparentes de teia abrangem a entrada, prontas para capturar pequenos insetos ou dificultar a passagem de criaturas maiores.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "check (survival, dc:17, name:Dislodge Web) (treinado) para desalojá-lo",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "CHZ0RRKgpq6eI2AS": {
          "name": "Enredar",
          "description": "Gatilho Uma criatura que não seja uma aranha entra na teia\nEfeito A teia envolve o corpo da criatura desencadeadora, agarrando-se aos seus membros. A criatura acionadora deve ser bem sucedida em um teste de resistência (reflexo, CC: 20) ou sofrer uma penalidade de circunstância de -3 metros em todas as suas Velocidades até escapar da teia (CD 20). Em uma falha crítica, a teia também gruda no rosto da criatura, deixando-a Enjoada 1, e ela não pode tentar reduzir essa condição até escapar da teia."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:summoning-rune",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:cdb06f0af81a59a3a45571e0aafa7c41211f241617b4aaa580ad80e7dec07c2c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Runa de Invocação",
      "description": "Uma nuvem de sensores mágicos invisíveis em um raio de 3 metros envolve uma parede invisível ou runa de chão do tamanho da criatura a ser invocada.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (acrobacia, dc: 15, nome: Runa de Aproximação) para se aproximar sem acionar a armadilha seguido de teste (roubo, dc: 17, nome: Apagar Runa, características: ação: desativar um dispositivo) (treinado) para apagar a runa, ou Dissipar Magia (1º Rank; neutralizar CD 15) para neutralizar a runa",
      "routine": "",
      "reset": "A armadilha é reiniciada todos os dias ao amanhecer.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "1M9OasbKWAPME9IC": {
          "name": "Invocar Monstro",
          "description": "Gatilho Uma criatura entra na nuvem de sensores mágicos\nEfeito Esta armadilha invoca uma criatura específica de 1º nível, determinada quando a armadilha é criada. A criatura rola a iniciativa e permanece por [[/br 2d6 #rounds]], após o qual a magia termina e a criatura desaparece. A criatura também desaparece se alguém desabilitar a armadilha antes que a duração expire. A criatura invocada pode usar 3 ações em cada rodada e pode usar reações, diferentemente da maioria das criaturas invocadas."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:poisoned-lock",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:019bfb7d9b0f46d35eb6f2bf6eabe9364156a0266472399109150d3d10c8998a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fechadura Envenenada",
      "description": "Uma espinha envenenada com mola está escondida perto do buraco da fechadura de uma fechadura. Desabilitar ou quebrar a armadilha não desabilita ou quebra o bloqueio.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (roubo, dc:17, nome:Desarmar Armadilha, características:mecânica,armadilha) (treinado) no mecanismo de mola",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "1bvXbELRBoJTBqsR": {
          "name": "Primavera",
          "description": "Gatilho Uma criatura tenta destravar ou arrombar a fechadura.\nEfeito Uma espinha se estende para atingir a criatura desencadeadora."
        },
        "HoWRGPkBlJjsL9zl": {
          "name": "Veneno de Cladis",
          "description": "Teste de salvamento (fortitude, dc:19)\nDuração Máxima 4 horas\nEstágio 1 1d6 de dano venenoso e Drenado 1 (1 hora)\nEstágio 2 2d6 de dano venenoso e Drenado 2 (1 hora)\nEstágio 3 3d6 de dano venenoso e 2 drenados (1 hora)"
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:poisonous-mold",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c5ef3952951317f5f90c88afa830282da7a1d04fa464e5a08f681eb62e451d96",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Molde Venenoso",
      "description": "Este fungo grotesco libera esporos venenosos quando uma criatura se aproxima.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "cheque (sobrevivência, dc:18) (treinado) para remover o mofo com segurança",
      "routine": "",
      "reset": "A menos que seja totalmente erradicado (normalmente com ácido ou fogo), o mofo volta a crescer ao longo de 2 semanas.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": [
          "fogo 10"
        ]
      },
      "actions": {
        "748inOlksdAeFB0A": {
          "name": "Alimente-se da Decadência",
          "description": "O mofo se expande quando alimentado por sangue ou decomposição. Se em qualquer ponto uma criatura sofrer dano de sangramento enquanto estiver adjacente ao molde ou um corpo moribundo ou morto estiver adjacente ao molde, o molde crescerá e se expandirá em todos os quadrados adjacentes ao seu espaço atual. Isso pode acontecer apenas uma vez por dia."
        },
        "ZN34eJalpkCoNMeM": {
          "name": "Explosão de esporos",
          "description": "Frequência uma vez por dia\nGatilho Uma criatura toca o molde, atinge-o ou danifica-o\nEfeito O mofo explode em uma explosão de esporos e aglomerados de mofo, causando (2d6+6)[veneno] de dano a criaturas dentro de 10 pés (3 metros) dele, com um teste de resistência (fortitude, dc:18, básico)."
        },
        "h7tMZClq2efB1OYA": {
          "name": "Esporos Flutuantes",
          "description": "5 pés (1,5 metros). Uma criatura que entre ou comece seu turno na aura sofre 2d6 de dano venenoso."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:spear-launcher",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9aa7101e9e5b3cc7a43ae60f6c6c04c81e753f7731656a205b3fb71e0fccabac",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Lançador de lança",
      "description": "Uma tomada de parede carregada com uma lança se conecta a um piso em um quadrado de 1,5 metro.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "cheque (roubo, dc:18, nome:Desabilitar Roubo) (treinado) no piso ou tomada de parede",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "0KrOaCLFSEcIdcej": {
          "name": "Lança",
          "description": "A pressão de disparo é aplicada ao piso.\nEfeito A armadilha atira uma lança, desferindo um Golpe contra a criatura ou objeto no piso."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:electric-latch-rune",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c1c5b596a9e784c04b1866bb48f92dab07f280db5d1c1f2134237862023c194f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Runa de Trava Elétrica",
      "description": "Uma runa invisível impressa na trava de uma porta libera uma poderosa descarga elétrica.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (roubo, dc:20, nome:arranhar a runa, características:ação:desabilitar-um-dispositivo) (especialista) para riscar a runa sem permitir que a eletricidade flua, ou Dissipar Magia (2º Rank; neutralizar CD 18) para neutralizar a runa",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "FzfgLXTt6R8bYmTP": {
          "name": "Eletrocussão",
          "description": "Gatilho Uma criatura agarra a trava da porta diretamente ou com uma ferramenta\nEfeito A armadilha causa 3d12 de dano elétrico à criatura acionadora (teste de resistência (reflexo, dc:22, básico).)."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:quicksand",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6d34929d6b5c6e0ea572b2c755ef49c74d50053000a24fbe769bd624cabb55e2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Areia movediça",
      "description": "Um pedaço de água e areia com 4,5 metros de largura tenta submergir as criaturas que pisam nele.",
      "size": "Médio",
      "stealthDetails": "(treinado) (ou -10 e sem proficiência mínima se a superfície for perturbada)",
      "disable": "teste (sobrevivência, dc:18, nome:Perturbar a superfície com segurança) (treinado) para perturbar a superfície",
      "routine": "(1 ação) Por sua iniciativa, a areia movediça derruba cada criatura dentro dela. Uma criatura que foi submersa até a cintura fica submersa até o pescoço, e uma criatura que foi submersa até o pescoço é puxada para baixo e precisa prender a respiração para evitar asfixia. Uma criatura na areia movediça pode tentar um teste (atletismo, cd:20, características:ação:natação) para nadar para se elevar um passo se estiver submerso até o pescoço ou pior, ou para se mover 5 pés (1,5 metros) se estiver submerso apenas até a cintura. Em caso de falha crítica, a criatura é puxada um degrau para baixo. Uma criatura que nada para fora da areia movediça escapa do perigo e fica prostrada em um espaço adjacente à área de areia movediça. Outras criaturas podem Ajudar a criatura, normalmente usando uma corda ou ajuda semelhante, ou tentar puxá-la para fora com seu próprio teste (atletismo, dc:20, nome:Ajudar Outra Criatura em Areia Movediça), com os mesmos resultados como se a criatura tentasse o teste.",
      "reset": "O perigo ainda submerge qualquer pessoa que entre nele, mas a superfície não fica oculta novamente até que se estabeleça ao longo de 24 horas.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "Ey8CknllSG5csxdG": {
          "name": "Submergir",
          "description": "Gatilho Uma criatura enorme ou menor caminha pela areia movediça\nEfeito A criatura desencadeadora afunda na areia movediça até a cintura. A areia movediça rola a iniciativa, se ainda não o fez."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:drowning-pit",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6d579449305eeb4463156756effd29472c91b59b7dfa495aee66af99f3d875f3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Poço de afogamento",
      "description": "Um alçapão cobre um poço de 10 pés quadrados com 30 pés (9 metros) de profundidade e 5 pés (1,5 metros) de água no fundo. Quatro bicas de água nas paredes conectam-se a tanques de água escondidos. Cada bica de água se estende para fora de uma parede diferente, a 15 centímetros do topo do poço.",
      "size": "Médio",
      "stealthDetails": "(treinado); teste (percepção, dc:22, traços:ação:busca) (especialista) para notar os jatos de água quando o poço se abre",
      "disable": "teste (roubo, dc:18) (treinado) para selar cada bica de água, teste (roubo, dc:22) (treinado) para abrir o alçapão, ou teste (atletismo, dc:22) para forçar a abertura: Atletismo do alçapão",
      "routine": "(4 ações) A ​​armadilha perde 1 ação a cada turno para cada jato de água desativado. A cada ação da armadilha, uma bica despeja água, aumentando a profundidade da água em 5 pés (1,5 metros). Assim que o poço estiver cheio de água, o poço para de usar ações, mas as criaturas no poço começam a se afogar.",
      "reset": "O sifão pode ser reiniciado se a porta for reengatada manualmente e os tanques de água forem reabastecidos; ele pode ser redefinido sem drenar a fossa, mas isso torna a fossa menos eficaz.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "iji2yCS44gpqc5p3": {
          "name": "Armadilha",
          "description": "Gatilho Uma criatura entra no alçapão\nEfeito A criatura desencadeadora cai e sofre dano da queda, reduzido em 5 pés (1,5 metros) por cair na água (normalmente 12 de dano por concussão). Uma criatura pode Agarrar uma Borda para evitar cair. O alçapão então se fecha e o perigo rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:titanic-flytrap",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ac61f46b72166fa4546c97a7d7aa1704c94d5d5b536dbfea8dd53e72a35236e7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Armadilha Titânica",
      "description": "Na superfície, uma armadilha para moscas titânica parece ser um pedaço da planta armadilha para moscas mais comum, mas sob águas turvas ela esconde um conjunto muito maior de mandíbulas, atingindo 10 pés (3 metros) de largura, reforçadas com galhos lenhosos e revestidas com pêlos paralisantes.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (sobrevivência, dc:22, nome:Enganar os Sentidos da Flytrap) (treinado) para enganar a sensação de peso e pressão da flytrap",
      "routine": "",
      "reset": "1 hora (ou mais, após uma grande refeição)",
      "defenses": {
        "immunities": [
          "mental"
        ],
        "resistances": [
          "ácido 20",
          "fogo 10"
        ],
        "weaknesses": []
      },
      "actions": {
        "f9aVsy30iGDJTtb4": {
          "name": "Fechar",
          "description": "Gatilho Uma criatura Pequena ou Média se move para um quadrado que está ao alcance das mandíbulas ocultas da armadilha.\nEfeito As mandíbulas da flytrap se fecham, fazendo um Golpe de mandíbula contra a criatura acionadora."
        },
        "eauYGISAGprcOwH4": {
          "name": "Devorar",
          "description": "O alvo fica preso pelas mandíbulas da flytrap, ganhando a condição Agarrado até [[/act escape dc=21]]. Além disso, ele é exposto à toxina titânica da armadilha da mosca, proveniente das centenas de minúsculos pelos que revestem o interior de suas folhas. Se o Golpe nas Mandíbulas da Flytrap for um sucesso crítico, o alvo sofre -2 de penalidade de circunstância em seus testes de resistência contra este veneno. No final de cada turno do alvo em que ele permanecer agarrado, o alvo sofre 3d6 de dano ácido."
        },
        "qBQpsAk64L9c0sJ2": {
          "name": "Toxina Flytrap Titânica",
          "description": "Teste de salvamento (fortitude, dc:21)\nDuração Máxima 4 rodadas\nEstágio 1 2d6 de dano venenoso e Atordoamento 1 (1 rodada)\nEstágio 2 3d6 de dano venenoso e Atordoamento 2 (1 rodada)\nEstágio 3 4d6 de dano venenoso e Paralisado (1 rodada)"
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:scythe-blades",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f43425d2e9ef71bef4257f02158a6f8436724d79971664103b4b4e8208a73f98",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Lâminas de Foice",
      "description": "Duas lâminas, cada uma escondida em uma ranhura no teto de 4,5 metros de comprimento, estão ambas conectadas a um fio de disparo.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (roubo, dc:21, nome:Desabilitar uma Lâmina) (treinado) para desabilitar cada lâmina",
      "routine": "",
      "reset": "A armadilha é reiniciada após 15 minutos.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "0fjRyLkdj1a2kfGM": {
          "name": "Foices caindo",
          "description": "Gatilho O fio de disparo foi puxado ou cortado.\nEfeito Ambas as lâminas balançam para baixo, cada uma atingindo todas as criaturas sob as ranhuras do teto."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:spinning-blade-pillar",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:21929164c53e4c3220a74e264149e9cdd77fb216063242575974f7c81020ca09",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Pilar da Lâmina Giratória",
      "description": "Um poste de metal com três lâminas giratórias afiadas está escondido no chão, conectado a placas de acionamento em até oito pisos e um painel de controle oculto dentro do 30 pés (9 metros).",
      "size": "Médio",
      "stealthDetails": "(treinado) ou teste (percepção, dc:26, características:ação:busca) (especialista) para observar o painel de controle",
      "disable": "verificar (roubo, dc:21, nome:Desabilitar Pilar, traços:ação:desabilitar-um-dispositivo) (treinado) duas vezes no pilar, ou verificar (roubo, dc:19, nome:Desabilitar Armadilha (Painel de Controle), traços:ação:desabilitar-um-dispositivo) (especialista) uma vez no painel de controle desativa toda a armadilha. Quebrar o painel de controle evita que alguém desative o purgador usando o painel de controle e evita que o purgador seja desativado automaticamente.",
      "routine": "(3 ações) A ​​armadilha usa sua primeira ação para fazer um Golpe de lâmina giratória contra cada criatura adjacente, sua segunda ação para se mover em linha reta em uma direção aleatória (role [[/gmr 1d4 #Direção]] para determinar a direção), e sua terceira ação para fazer um Golpe de lâmina giratória contra cada criatura adjacente. Esta armadilha não sofre penalidade de ataque múltiplo.",
      "reset": "A armadilha é desativada e reiniciada após 1 minuto.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "F0I1pLJQm1AQtXPH": {
          "name": "Pilar Ascendente",
          "description": "Gatilho Uma criatura pisa em um dos pisos presos\nEfeito A armadilha aparece em uma interseção de grade e faz um golpe de lâmina giratória contra uma criatura adjacente (se houver), então rola a iniciativa."
        },
        "6wV9i41Jd4HThaAi": {
          "name": "Velocidade",
          "description": "10 pés (3 metros)"
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:fireball-rune",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:795c2a54e33ddee844edde6c68fcbf1beda94b3dd5bc2e53dd026d3fe310b944",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Runa Bola de Fogo",
      "description": "Uma runa invisível cria um sensor mágico esférico invisível com um raio de 6 metros.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "teste (roubo, dc:22, nome:Apagar a Runa) (especialista) para apagar a runa sem acionar o sensor, ou Dissipar Magia (3º Rank; neutralizar CD 20) para neutralizar a runa",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "uJpg7vUJ1qag7R3t": {
          "name": "Bola de fogo",
          "description": "Gatilho Uma criatura viva entra na área do sensor\nEfeito A runa detona uma Bola de Fogo centrada no quadrado da criatura acionadora. Este é um magia de bola de fogo de 3º Rank que causa 6d6 de dano de fogo (teste de resistência (reflexo, dc:22, básico))."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:spectral-reflection",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:92b948afc9dea13cbb98ba6c17f2952f5efd078520c987796eae48f890bc2513",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Reflexão Espectral",
      "description": "O reflexo no espelho distorce e distorce sutilmente, sua expressão assumindo um enervante sorriso de malícia.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "teste (religião, dc:23, nome:Exorcizar Espírito) (treinado) para exorcizar o espírito, ou teste (roubo, dc:23, nome:Cover o Espelho, características:ação:desabilitar-um-dispositivo) (treinado) para cobrir rapidamente o espelho",
      "routine": "",
      "reset": "A assombração se forma novamente após 1 minuto, manifestando-se em qualquer espelho dentro de sua área infundida (veja Especial abaixo).",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "hEtVGo9EpKcXlhPI": {
          "name": "Empalamento Espectral",
          "description": "Acionamento Uma criatura viva se aproxima dentro de 15 pés (4,5 metros) do espelho, e o espelho é iluminado com luz fraca ou mais brilhante.\nEfeito Farpas sombrias empalam o corpo da criatura refletida enquanto a assombração desfere um ataque de farpas sombrias."
        },
        "17gJOHIRtWXfYMKa": {
          "name": "Vitalidade da seiva",
          "description": "Uma criatura atingida pelas farpas sombrias do reflexo deve tentar um teste (fortitude, dc:22) enquanto a assombração tenta atrair uma porção de sua essência vital para o espelho. O alvo é Drenado 1 em caso de falha no teste de resistência ou Drenado 2 em caso de falha crítica."
        },
        "V7tWWuB9NSEsMEae": {
          "name": "Especial",
          "description": "Reflexões espectrais frequentemente infundem edifícios inteiros, manifestando-se em qualquer espelho suficientemente grande. Os exemplos de Pontos de Vida e Dureza dados representam um espelho típico reforçado pela assombração; a seu critério, a assombração pode aparecer em superfícies reflexivas que são mais difíceis de destruir. Derrotar uma manifestação através de dano destrói a superfície, impedindo que a assombração a utilize novamente. Se esta assombração aparecer em uma área com muitos espelhos, considere dar aos PJs o dobro ou até o triplo da XP por um perigo simples típico."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:ghostly-choir",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a1198d79b8cebf05a0d97a72052e194000ee41e50abb754f5b7dffa798c33163",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Coro Fantasmagórico",
      "description": "Um coro de almas perdidas surge do chão, cantando um canto sinistro que aterroriza seus ouvintes e atinge seus corpos com paredes de som.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "teste (atuação, dc:28, nome:Sing a Different Tune, traits:haunt) (treinado) para interromper a ressonância da música com outra música ou teste (religião, dc:28, name:Ritualmente Silence the Haunt, traits:haunt) (treinado) para silenciar ritualmente os espíritos",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "oZGdTS4jvoAj1myH": {
          "name": "Canto Profano",
          "description": "Gatilho Uma criatura se move dentro de 10 pés (3 metros) da seção do chão de onde o coro pode surgir\nEfeito O coro se eleva e sua canção causa (4d8+18)[mental] de dano a criaturas vivas dentro de 30 pés (9 metros) das formas espectrais das almas. Cada criatura afetada deve tentar um teste de resistência (vontade, dc:24, características:efeito de dano).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano e fica Amedrontada 1.\nFalha A criatura sofre dano total e fica Amedrontada 2.\nFalha Crítica A criatura sofre o dobro do dano. Também se torna Assustado 3 e Fugindo por 1 rodada."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:wheel-of-misery",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:17fc57fb2ecef365d554ae4ff752452def857ea6bbea5a42577ea94fb2435846",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Roda da miséria",
      "description": "Uma roda ornamentada colocada em uma parede - dividida em seis segmentos com runas coloridas em cada um - é controlada por um sensor mágico que detecta qualquer criatura dentro de 100 pés (30 metros) à sua frente.",
      "size": "Médio",
      "stealthDetails": "(especialista) para detectar o sensor mágico; percebendo que a roda tem um DC de 0",
      "disable": "verifique (roubo, dc: 26, nome: Impedir que a roda gire, características: ação: desativar um dispositivo) (especialista) na roda para impedi-la de girar, verifique (roubo, dc: 22, nome: Apagar Runa, características: ação: desativar um dispositivo) (mestre) para apagar cada runa, ou Dissipar Magia (4º Rank; neutralizar CD 22) para neutralizar cada runa",
      "routine": "(2 ações) Por sua iniciativa, a armadilha usa sua primeira ação para girar e então para. Role 1d6 para determinar qual segmento estará no topo quando a roda parar de girar. A roda usa sua segunda ação para replicar a magia listada para aquele segmento (3º Rank, CD 24, modificador de ataque de magia +14). O alvo desta magia está centrado ou inclui a criatura mais próxima na área. Isso aumenta o alcance do magia para 100 pés (30 metros), se necessário. Qualquer magia lançada por esta armadilha é misteriosa.\n1 dormir\n2 Paralisar\n3 Relâmpago (linha de 100 pés)\n4 Cegueira\n5Explosão Cáustica\n6 Enfraquecido",
      "reset": "A armadilha é desativada e reiniciada se passar 1 minuto sem que nenhuma criatura se mova dentro do alcance de seu sensor.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "ZS4b3rYv9jOgbMzm": {
          "name": "Giro da roda",
          "description": "Gatilho Uma criatura entra na área de detecção do sensor.\nEfeito A roda começa a girar e rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:hallucination-powder-trap",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:438335799754e6e12ecbc40768e8e901810cba9560139d0495b45179ae260489",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Armadilha de Pó de Alucinação",
      "description": "Um tubo de pólvora alucinógena armado com um explosivo em miniatura é conectado a uma maçaneta ou trava semelhante.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "Ladinagem CD 26 (especialista) para desativar o martelo que atinge a espoleta",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "NjmHPcx6IEA14Yul": {
          "name": "Explosão de Pó",
          "description": "Gatilho A trava é aberta ou o tubo é quebrado.\nEfeito O tubo explode, espalhando pó alucinógeno em um cone de 9 metros. Qualquer criatura no cone deve obter sucesso em um salvamento de Vontade CD 24 ou ficará confusa por 1 rodada e sofrerá –2 de penalidade de estado em testes de Percepção e salvamentos contra efeitos mentais por 1d4 horas. Em uma falha crítica, a penalidade passa a –4."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:pharaohs-ward",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0e7721d7f002c9fcacf2a109739b786138c9a9bba64bc75c397e7ba5d0d7efab",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ala do Faraó",
      "description": "Uma maldição está imbuída na soleira de uma entrada.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "teste (roubo, dc:27, nome:Remover o Lintel) (mestre) para remover meticulosamente o lintel sem ativar a magia, ou Dissipar Magia (4º Rank; neutralizar CD 25) para neutralizar a runa",
      "routine": "",
      "reset": "A armadilha é reiniciada quando a porta é fechada.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "Cc30YjKZ7qSxVjSC": {
          "name": "Amaldiçoe os Intrusos",
          "description": "Gatilho O selo da tumba foi quebrado por fora.\nEfeito Cada criatura viva dentro de 60 pés (18 metros) deve ter sucesso em um teste (vontade, dc:23) de resistência ou será sujeita à maldição do faraó. Uma criatura amaldiçoada sofre uma penalidade de -2 em testes de Fortitude, e qualquer cura natural ou mágica que ela receba é reduzida pela metade. A maldição permanece até ser removida por Cleanse Affliction ou magia similar."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:eternal-flame",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:14e0eda676067ff368c5f26be0b5f7bf74686c3a5a36d24029002942d4885a0d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Chama Eterna",
      "description": "Um furioso inferno espectral surge do nada, fortalecendo todas as criaturas mortas-vivas dentro de sua área. Essa assombração geralmente surge dos restos carbonizados de um grupo de três pessoas que morreram queimadas, seja em um acidente terrível ou em uma execução deliberada, e suas almas não vingadas queimam de raiva.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "teste (diplomacia, dc:27, nome:Acalmar a Fúria do Espírito) (especialista) para acalmar temporariamente a raiva de um dos três espíritos, ou teste (religião, dc:30, nome:Exorcizar Espírito) (treinado) para exorcizar um dos espíritos; três sucessos totais são necessários para desativar a assombração",
      "routine": "(1 ação) Chamas fantasmas se espalham pela área assombrada, causando 4d6 de dano de fogo a cada criatura viva dentro da área (teste de resistência (vontade, dc:23, básico)). Criaturas mortas-vivas na área serão infundidas com chamas na rodada seguinte. Eles ganham a característica fogo e imunidade ao fogo, e todos os seus ataques causam 1d6 de dano de fogo adicional. Os objetos na área não são afetados.",
      "reset": "As chamas cessam 1 minuto após todas as criaturas vivas deixarem a área, mas após 1 hora, a raiva e a dor aumentam e a assombração está pronta para disparar novamente.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "E8X8ETVNwXuUF08C": {
          "name": "Agonia Abrasadora",
          "description": "Gatilho Uma criatura viva se aproxima dentro de 10 pés (3 metros) dos restos mortais de uma vítima do incêndio original\nEfeito Memórias da dor sofrida pelas vítimas anteriores do incêndio assaltam a mente da criatura desencadeadora. A criatura deve tentar um teste de resistência (vontade, dc:25), e a assombração então joga a iniciativa.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura está Enjoada 1.\nFalha A criatura está Enjoada 2.\nFalha Crítica A criatura fica Enjoada 3 e fica Off-Guard enquanto permanecer na área da assombração e por 3 rodadas depois disso."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:poisoned-dart-gallery",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3996bbc33163b6b5a19c8bbd7d3ad97febb50b0c300509ad3b92437b738eb5f5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Galeria de Dardos Envenenados",
      "description": "Inúmeros buracos para lançar dardos venenosos se alinham em um longo corredor com um painel de controle oculto na extremidade.",
      "size": "Médio",
      "stealthDetails": "(especialista) ou verifique (percepção, dc:31, características:ação:busca) (mestre) para observar o painel de controle",
      "disable": "check (thevery, dc:21, name:Disable Trap (Control Panel), traits:action:disable-a-device) (expert) no painel de controle desativa a armadilha.",
      "routine": "(1 ação) A armadilha lança um dardo contra cada criatura na galeria como 1 ação. Por lançar dardos continuamente, a armadilha também pode usar a ação livre Barragem Contínua (veja abaixo) para lançar dardos em cada criatura durante o turno daquela criatura.",
      "reset": "A armadilha é desativada e reiniciada após 1 minuto.",
      "defenses": {
        "immunities": [
          "precisão",
          "acertos críticos"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "KFCwJINs8Uu4riRs": {
          "name": "Voleibol de dardos",
          "description": "Gatilho Uma criatura entra no corredor ou termina seu turno no corredor\nEfeito A armadilha acerta um dardo envenenado contra a criatura desencadeadora e então rola a iniciativa."
        },
        "hkSWLZaKG41zef8w": {
          "name": "Barragem Contínua",
          "description": "Gatilho Uma criatura dentro da galeria ativa conclui uma ação\nEfeito A armadilha acerta um dardo envenenado contra a criatura acionadora."
        },
        "eY731rvsYJZ2o5Sh": {
          "name": "Veneno Flesset",
          "description": "Teste de salvamento (fortitude, dc:22)\nDuração Máxima 6 rodadas\nEstágio 1 1d6 de dano venenoso e Desajeitado 1 (1 rodada)\nEstágio 2 2d6 de dano venenoso e Desajeitado 2 (1 rodada)\nEstágio 3 3d6 de dano venenoso e Desajeitado 3 (1 rodada)"
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:confounding-betrayal",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:94e588c78a06b3a517cb0304ee6b9c8d7f1c6a08e1dbc0aa5bb0b36a05dd2fae",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Traição confusa",
      "description": "Os aliados parecem abandonar seus disfarces e se revelarem monstros malévolos.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "teste (engano, dc:28, nome:Confundir o Assombrado) (especialista) duas vezes para confundir a assombração com seus próprios enganos, ou verifique (ocultismo, dc:28, nome:Criar uma Protecção Contra Influência) (treinado) duas vezes para criar uma proteção contra a influência mental da assombração",
      "routine": "(1 ação; ilusão, incapacitação, ocultismo) A assombração continua a confundir os sentidos das vítimas e a inspirá-las a cometer violência umas contra as outras. Cada criatura na área da assombração deve tentar um teste de resistência (vontade, dc:26).\nSucesso Crítico A criatura não é afetada e fica temporariamente imune por 1 minuto.\nSucesso A criatura não é afetada.\nFalha A criatura fica Confusa por 1 rodada.\nFalha Crítica A criatura fica confusa por 1 minuto.",
      "reset": "A assombração é desativada 1 minuto depois que todas as criaturas deixam a área, mas é reiniciada imediatamente depois disso.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "QrgnumULVnz8pWfK": {
          "name": "Desmascarar",
          "description": "Gatilho Duas ou mais criaturas entram na área da assombração\nEfeito Cada criatura vê as formas das criaturas próximas mudarem e mudarem, parecendo se transformar em seres diabólicos ou aberrantes com sede de sangue. Cada criatura na área deve tentar um teste de resistência (vontade, dc:30). A assombração então rola a iniciativa.\nSucesso Crítico A criatura enxerga completamente as ilusões e fica temporariamente imune à rotina da assombração por 1 minuto.\nSucesso A criatura não é afetada pelas imagens estranhas.\nFalha A criatura acredita que as ilusões são verdadeiras; se eles ficarem confusos com a rotina da assombração, eles não poderão tentar testes simples para encerrar a condição confusa quando sofrerem dano.\nFalha Crítica Como falha, mas a criatura fica com uma suspeita persistente dos outros e não pode se beneficiar das reações de Ajuda por 24 horas."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:bottomless-pit",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:825c117472533e3d6f2fd525ec2076e703433a92aa9d1d68b58ec0e58da16c33",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Poço sem fundo",
      "description": "Um alçapão de ferro cobre um poço infinitamente profundo de 3 metros quadrados.",
      "size": "Médio",
      "stealthDetails": "(ou 0 se o alçapão estiver desativado ou quebrado) ou detectar magia",
      "disable": "check (thevery, dc:28, name:Remove Trapdoor, traits:action:disable-a-device) (treinado) para remover o alçapão",
      "routine": "",
      "reset": "A armadilha ainda faz com que as criaturas caiam para sempre se caírem, mas o alçapão deve ser reiniciado manualmente para que a armadilha fique oculta novamente.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "WJtDPJzNrJO19H6k": {
          "name": "Armadilha Infinita",
          "description": "Gatilho Uma criatura entra no alçapão\nEfeito A criatura desencadeadora cai e continua a cair, potencialmente para sempre. Essa criatura pode tentar Agarrar uma Borda para evitar cair. A CD para Escalar as Paredes ou Agarrar uma Borda é 26. O poço contém muitos apoios para as mãos, então a criatura que cai pode tentar Agarrar uma Borda novamente a cada 6 segundos. Se a criatura tiver sucesso, ela poderá começar a Escalar a partir desse ponto (embora possa ser uma subida muito longa, dependendo de quão longe a criatura caiu). Como a criatura cai indefinidamente, ela pode descansar e até preparar magias enquanto cai, embora os itens que caem durante a queda geralmente sejam perdidos para sempre."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:bloodthirsty-urge",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b04b78ca7f6fbcc156069fc0446ed8a0f812ff5c86cc0509785560c95aebf8dc",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Desejo Sanguinário",
      "description": "Um objeto assombrado pelos ecos de uma mente cruel tenta matar alguém que se aproxima.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "cheque (religião, dc:29, nome:Exorcizar Espírito) (mestre) para exorcizar o espírito ou cheque (diplomacia, dc:31, nome:Reprimir o Espírito) (especialista) para acalmá-lo",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "0FpzSygcs7G688GT": {
          "name": "Quieto",
          "description": "Gatilho Uma criatura se move dentro de 10 pés (3 metros) do objeto assombrado\nEfeito A assombração assume o controle da criatura desencadeadora, forçando-a a atacar a si mesma. A criatura deve tentar um teste de resistência (vontade, dc:29).\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo desfere um Golpe contra si mesmo e acerta automaticamente; o alvo também fica Amedrontado 1.\nFalha O alvo desfere um Golpe contra si mesmo e automaticamente obtém um acerto crítico; o alvo também fica Amedrontado 2.\nFalha Crítica O alvo tenta um salvamento de Fortitude. Se o alvo tiver sucesso, ele estará sujeito aos efeitos de uma falha. Se o alvo falhar, ele será reduzido a 0 HP e morrerá"
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:hammer-of-forbiddance",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5a328d686364cb398075cceb10162536238e74a5ded61cbe518e897f349108ce",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Martelo da Proibição",
      "description": "Um enorme martelo na entrada de um edifício desce na tentativa de danificar uma criatura que entra em uma área, empurrá-la para trás e impedi-la de prosseguir.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "cheque (roubo, dc:28, nome:Evitar que o martelo balance, características:ação:desabilitar um dispositivo) (especialista) uma vez no próprio martelo e uma vez em sua junta para evitar que o martelo balance",
      "routine": "",
      "reset": "A armadilha é reiniciada ao longo da rodada e está pronta para balançar novamente 1 rodada depois.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "caUgV11OydLsLw1j": {
          "name": "Proibir entrada",
          "description": "Gatilho Uma criatura tenta entrar pela entrada.\nEfeito O martelo desce, desferindo um Golpe contra a criatura acionadora."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:flensing-blades",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:10b58d1a802e53040655e91fce483b1edbc728200b63cfd4901bc967787f013d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Lâminas de Flensagem",
      "description": "Um tornado rodopiante de vidro e aço com propulsão espectral corta em tiras tudo o que toca.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "verifique (roubo, dc:35, nome:Ajustar Lâminas, traços:ação:desabilitar-um-dispositivo) (mestre) para ajustar com precisão as lâminas para que elas destruam umas às outras, ou verifique (religião, dc:38, nome:Enfraquecer o Assombrado) (especialista) para enfraquecer a assombração; quatro sucessos são necessários para desativá-lo",
      "routine": "(3 ações) O tornado de lâminas usa 3 ações para se mover, viajando até 30 pés (9 metros) com cada ação e causando (2d10+10)[cortando] dano. Cada criatura em seu caminho deve tentar um teste (reflexo, dc:33).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total mais 1d10 de dano de sangramento persistente.\nFalha Crítica A criatura sofre o dobro de dano e 1d10 de dano de sangramento persistente. Ele também se torna Ferido 1 (ou aumenta seu valor de ferido em 1, se já estiver ferido).\nCada teste bem sucedido para desativar este perigo reduz o movimento da assombração em 30 pés (9 metros), e o quarto sucesso desativa-o completamente.",
      "reset": "A assombração atrai fragmentos irregulares de volta para sua área ao longo de uma hora, após a qual pode ser acionada novamente.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": [
          "vitalidade 15"
        ]
      },
      "actions": {
        "jSBfyDGUXAPbIJTT": {
          "name": "Lâminas Giratórias",
          "description": "Gatilho Três ou mais criaturas entram na área da assombração\nEfeito Fragmentos afiados se erguem do chão e começam a girar em círculos rápidos, ocupando um quadrado de 1,5 metro. A assombração rola a iniciativa."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:polymorph-trap",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c006035ea826aa238657863f385486e50adb251292a24aad94d589c7ce0a15d5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Armadilha Polimórfica",
      "description": "Um glifo druida tenta transformar um invasor em um animal.",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (roubo, dc:32, nome:Drenar Poder do Glifo, características:ação:desabilitar um dispositivo) (mestre) para drenar o poder do glifo inofensivamente, ou Dissipar Magia (6º Rank; neutralizar CD 30) para neutralizar o glifo",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "TxhvkFafggYWv5D7": {
          "name": "Metamorfose Amaldiçoada",
          "description": "Acionamento Uma criatura se move dentro de 30 pés (9 metros) do glifo sem falar a senha em Druídico\nEfeito A criatura é alvo de Metamorfose Amaldiçoada (teste (vontade, dc:32) de resistência)."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:planar-rift",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2edb487f72d931fdc697fca798d6992f74b22b2962fcff2dce6b82c62f1f0f30",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fenda Planar",
      "description": "Uma fenda tenta atrair criaturas para outro plano (o Mestre escolhe o plano específico).",
      "size": "Médio",
      "stealthDetails": "(treinado)",
      "disable": "teste (roubo, dc:33, nome:Montar um Selo de Fenda, características:ação:desabilitar-um-dispositivo) (mestre) para montar um selo de fenda usando objetos fortemente ancorados em seu plano, ou Dissipar Magia (7º Rank; neutralizar CD 31) para neutralizar a fenda",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "K7Ya0U5jerfvH0vw": {
          "name": "Para o Grande Além",
          "description": "Gatilho Uma criatura se move dentro de 10 pés (3 metros) da fenda.\nEfeito A criatura desencadeadora e todas as criaturas dentro de 30 pés (9 metros) da fenda são atraídas para outro plano. Cada criatura pode tentar um teste (reflexo, dc:33) para evitar esse destino."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:dance-of-death",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:89432d9a2a17f04634c8f7754c9571c43b9399536f7ca900295eb5e1cfaa60c6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dança da Morte",
      "description": "Uma orquestra misteriosa obriga todos que a ouvem a dançar até desmaiar de exaustão.",
      "size": "Médio",
      "stealthDetails": "(mestre)",
      "disable": "verifique (intimidação, dc:42, nome:Assustar a Orquestra, traços:ação:desmoralizar) (especialista) três vezes para assustar dançarinos e músicos espectrais para longe de participarem da performance mortal, verifique (atuação, dc:40, nome:Interromper Compulsão) (mestre) duas vezes para produzir uma melodia discordante o suficiente para interromper a compulsão, ou verifique (religião, dc:42, nome:Banir Espíritos) (mestre) três vezes para banir o espíritos com orações",
      "routine": "(1 ação; auditiva, incapacitação, mental, oculta) A orquestra executa uma melodia estridente, obrigando todas as criaturas que podem ouvi-la a gastar ações dançando. A cada rodada, a criatura deve tentar um teste de resistência (vontade, dc:37); os resultados deste salvamento modificam o número de ações que a criatura deve gastar dançando a cada rodada. Se isso fizer com que a criatura gaste mais ações dançando do que pode usar em seu turno, a criatura sofre 10d6 de dano (ou o dobro em uma falha crítica) por se mover mais rápido do que seu corpo pode suportar.\nSucesso Crítico A criatura diminui o número de ações que ela deve gastar dançando em 1.\nSucesso Sem efeito.\nFalha A criatura aumenta em 1 as ações que deve gastar dançando.\nFalha Crítica A criatura aumenta em 2 as ações que deve gastar dançando.",
      "reset": "A sinistra orquestra passa uma hora reafinando seus instrumentos fantasmagóricos, após o que está pronta para recomeçar sua rotina.",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "Bov9feGVYpn5nmUl": {
          "name": "Prelúdio",
          "description": "Gatilho Uma criatura se aproxima dentro de 30 pés (9 metros) da orquestra\nEfeito A orquestra obriga todas as criaturas que podem ouvi-la a começar a dançar. Cada criatura deve tentar um teste de resistência (vontade, dc:41), com os seguintes efeitos. A assombração então rola a iniciativa.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura está fora de guarda e não pode usar reações. Além disso, ele deve gastar 1 de suas ações dançando em cada rodada. Dançar é uma ação de movimento que permite à criatura avançar até metade de sua velocidade.\nFalha Como sucesso, exceto que a criatura deve gastar 2 de suas ações dançando em cada rodada.\nFalha Crítica Como falha, exceto que a criatura deve gastar 3 de suas ações dançando em cada rodada."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:vorpal-executioner",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4765c9b04cd96ad69691455705b9f4c4651a69436d9e24a0f65448ed8a14b1c0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Executor Vorpal",
      "description": "Uma lâmina de serra extremamente afiada desce e percorre ranhuras em um caminho complexo pela sala, tentando decapitar todos que estão dentro dela.",
      "size": "Médio",
      "stealthDetails": "(especialista)",
      "disable": "verifique (roubo, dc:41, nome:Jam Saw Blade, traits:action:disable-a-device) (especialista) em quatro junções diferentes para bloquear todos os caminhos possíveis da lâmina de serra, evitando que ela se desloque pela sala",
      "routine": "",
      "reset": "A armadilha é reiniciada ao longo da rodada e pode ser acionada novamente 1 rodada depois.",
      "defenses": {
        "immunities": [
          "acertos críticos",
          "precisão"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "4QF1yNgj2FX7rO4C": {
          "name": "Decapitação Total",
          "description": "Gatilho Uma criatura tenta sair da sala.\nEfeito A lâmina da serra percorre seu caminho, desferindo um Golpe contra cada criatura na sala, girando e variando sua altura para aumentar a chance de decapitar seus alvos."
        },
        "mPVesRXUMN4Ws9IR": {
          "name": "Decapitação",
          "description": "Em um acerto crítico, um alvo deve ser bem sucedido em um teste (fortitude, dc:39, características:efeito de dano) ou será decapitado, morrendo instantaneamente, a menos que consiga sobreviver sem cabeça."
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:hazards:armageddon-orb",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ed8be3035a0da32d0fd5bb7bf84e550ed9222ce18d369b7d737df8781be9dae1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Orbe do Armagedom",
      "description": "Um orbe vermelho turbulento, forjado a partir de uma gota do sangue do deus Rovagug, faz chover fogo do céu quando uma condição específica é atendida.",
      "size": "Médio",
      "stealthDetails": "ou detectar magia",
      "disable": "check (thevery, dc:48, name:Imbue Thieves' Tools, traits:action:disable-a-device) (lendário) para imbuir um kit de ferramentas de ladrões com aspectos representando Asmodeus e Sarenrae e usá-los para drenar o poder do orbe ao longo de 10 minutos; o personagem que tentar este teste sofre 5 de dano de fogo a cada rodada até que o orbe se esgote",
      "routine": "",
      "reset": "",
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": {
        "KaYeYfefttO5X9OF": {
          "name": "Queime tudo",
          "description": "Gatilho Ocorre uma condição especial definida pelo criador da armadilha, normalmente no caso de sua morte.\nEfeito Chove fogo do céu em um raio de 160 quilômetros, causando 10d6 de dano de fogo a criaturas e objetos na área. Cada criatura ou objeto pode tentar um teste de resistência (reflexo, dc:46, básico). Qualquer criatura reduzida a 0 Pontos de Vida por este dano morre instantaneamente. Isso não é dano suficiente para queimar completamente uma floresta ou destruir uma montanha ou cidade inteira, mas normalmente mata a maioria das criaturas na área."
        }
      }
    }
  }
]
