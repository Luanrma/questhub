import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_06_BESTIARY_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:rune-giant",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7656c3f8ee2b77e1deab1532d260b1a3c319c55318559a136ac74b3b5f77b4dc",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Gigante Rúnico",
      "description": "Gigantes rúnicos são tiranos entre sua própria espécie, com poder para comandar e controlar magicamente outros gigantes. Eles já serviram a mestres ainda mais poderosos — bruxos poderosos conhecidos como senhores rúnicos — e, ao fazê-lo, comandaram exércitos inteiros de gigantes a serviço dos impérios dos senhores rúnicos.\nNas eras desde o colapso desses impérios, os gigantes rúnicos persistiram, embora para o mundo exterior eles sejam pouco mais do que horrores lendários. Gigantes rúnicos geralmente habitam as mais remotas e acidentadas cadeias de montanhas, mas também podem ser encontrados em imensas ruínas no topo de ilhas perdidas, vales glaciais ou até mesmo em regiões mais remotas ou mágicas.\nDezenas de runas decoram a impressionante carne de carvão dos gigantes rúnicos. Eles são criaturas imponentes, com altura média de 40 pés (12 metros) e peso de 25.000 libras.\nGigantes são enormes criaturas humanóides que vivem em regiões remotas do mundo. Eles variam muito, mas estão unidos em sua fome, exigindo o sustento de seu próprio elemento junto com os banquetes que se esperaria de um humanóide tão grande. Embora seja uma questão simples para alguns gigantes, os tipos mais esotéricos consideram esta necessidade uma dura realidade. Enquanto um punhado enorme de gelo ou neve junto com a refeição satisfará um gigante do gelo, os gigantes das sombras anseiam pelas sombras coaguladas do Submundo.",
      "size": "Imenso",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun",
        "petran": "petran"
      },
      "defenses": {
        "immunities": [
          "fogo"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "yfHpnY9G1GCp6VVb": {
          "name": "Espada larga",
          "damage": "3d12+17 cortante"
        },
        "pVCudVc1B7mQVjP2": {
          "name": "Lança Longa",
          "damage": "2d8+17 perfurante"
        },
        "h2IphaAIOQxjJB7Y": {
          "name": "Punho",
          "damage": "3d8+17 contundente"
        }
      },
      "actions": {
        "fxy74wWSDj5riJSB": {
          "name": "magias Constantes",
          "description": ""
        },
        "GL9yPOZHTcwW41gZ": {
          "name": "Ataque Reativo (Especial)",
          "description": "O gigante rúnico ganha uma reação adicional no início de cada um de seus turnos, que só pode ser usada para um Golpe Reativo."
        },
        "uwBAscSuJG489hpI": {
          "name": "Comande Gigantes",
          "description": "Quando um gigante rúnico lança um magia mental contra outro gigante, a CD é 39, em vez de 35."
        },
        "Cu6pedSvnaK0fqOF": {
          "name": "Demanda",
          "description": "Quando um gigante rúnico lança seu magia de Envio inato, ele também pode lançar Sugestão no alvo."
        },
        "7CjSawx6weIPrIFL": {
          "name": "Runas Piscando",
          "description": "Gatilho O gigante rúnico usa uma habilidade arcana ou lança um magia arcano\nEfeito As runas no corpo do gigante brilham com energia mágica. Cada criatura dentro de um @Template[emanation|distance:10] deve tentar um teste de resistência (fortitude, dc:35).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Deslumbrada por 1 rodada.\nFalha A criatura fica cega por 1 rodada."
        },
        "JBksJycZVWAJ0ESS": {
          "name": "Invocar Runa",
          "description": "O gigante rúnico invoca uma das runas em seu corpo, fazendo com que a runa pulverize um @Template[cone|distance:30] de faíscas que causa 6d12[eletricidade|options:area-damage] de dano a todas as criaturas no cone (verificação (reflexo, dc:37, básico, opções:efeito de área) salvamento).\nO gigante não pode usar Invoke Rune novamente por [[/gmr 1d4 #Recharge Invoke Rune]]{1d4 rodadas}.\nUma cópia brilhante da runa invocada aparece em uma única arma que o gigante segura, concedendo à arma um efeito listado abaixo, à escolha do gigante. O efeito na arma dura 1 minuto. Se o gigante colocar uma nova runa em uma arma, qualquer runa colocada anteriormente desaparece imediatamente, encerrando seu efeito.\n• Runa da Destruição A arma ganha o traço mortal com três dados de dano da arma do mesmo tamanho da arma base, e uma criatura atingida pela arma é Drenada 1, a menos que tenha sucesso em um teste de resistência (fortitude, dc:35).\n• Runa das Chamas A arma causa 3d6[fogo] de dano adicional em todos os ataques.\n• Runa de Smiting Quando a arma acerta, o gigante pode Empurrar o alvo para trás 10 pés (3 metros), ou 20 pés (6 metros) em um acerto crítico.\n• Runa do Espaço Durante o turno do gigante rúnico, o alcance da arma é aumentado para 60 pés (18 metros)."
        },
        "yUMh1Oa8g3zZ6utm": {
          "name": "Balanço amplo",
          "description": "O gigante rúnico executa um único golpe de espada larga e compara o resultado da jogada de ataque com as CAs de até dois inimigos ao seu alcance. Isso conta como dois ataques para a penalidade de ataque múltiplo do gigante."
        }
      },
      "spellcasting": {
        "dvenwngmH8FFaPNZ": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "xeRH37MTBNYg5VvM": {
              "name": "Charme (à vontade)"
            },
            "jTCynZS3NcEx1n1y": {
              "name": "Sugestão (à vontade)"
            },
            "Bo0iHrI89wUjaaMr": {
              "name": "Enviando"
            },
            "Zn45kXPOSnKBMwJ8": {
              "name": "Dominar"
            },
            "9lOmSLJKqMDHJURU": {
              "name": "Visão Verdadeira"
            },
            "QEtmxa7gWeEQIrTf": {
              "name": "Voar (constante)"
            },
            "SceKBtcG4lUT4V25": {
              "name": "Charme"
            },
            "TEbZ6NkNjsi7WbvZ": {
              "name": "Sugestão"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:horned-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:06312aaa57d9db2e06c14607138a95b903792ec38cc5bfd9a15e10ef55408027",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão com Chifres (Antigo, Feiticeiro)",
      "description": "A magia que flui através dos dragões primitivos pode manifestar características mais animalescas ou bestiais em um determinado tipo de dragão. Notavelmente entre eles estão os enormes chifres emparelhados do dragão com chifres. Embora sua estrutura volumosa, coloração natural e escamas estriadas proeminentes sejam notáveis ​​à sua maneira, são os chifres que são mais óbvios e impressionantes à primeira vista. Dragões com chifres usam seus chifres para empalar suas presas em uma demonstração rápida e brutal de seu poder. Geralmente são contemplativos e têm fixação no conhecimento e na autodisciplina, características desmentidas por sua aparência bestial. Como resultado, os dragões com chifres são geralmente mais abertos a falar com estranhos.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.\nConjuradores Dracônicos\nCada dragão apresenta uma barra lateral sobre dragões conjuradores desse tipo. Para criar um conjurador de dragão, remova as habilidades Draconic Frenzy e Draconic Momentum do dragão e dê a eles os magias descritos na barra lateral. Você pode trocar qualquer número deles por outros magias, desde que mantenha o mesmo número de magias para cada Rank. Você também pode querer aumentar o modificador de Inteligência, Sabedoria ou Carisma do dragão em 1 ou 2 para refletir seu domínio da magia.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "elven": "elfo",
        "fey": "feérico",
        "chthonian": "chthoniano",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "s6adAtDXbmqHceWK": {
          "name": "Maxilas",
          "damage": "3d12+15 perfurante; 4d4 veneno"
        },
        "zLSUNYt5ukMkU9zC": {
          "name": "Garra",
          "damage": "3d10+15 cortante"
        },
        "BWkGmIVrerzvJg6A": {
          "name": "Cauda",
          "damage": "3d10+13 contundente"
        },
        "zgg5I2ssn7V4bFRq": {
          "name": "Buzina",
          "damage": "2d10+13 perfurante"
        }
      },
      "actions": {
        "lseWqsEmPmayLsqf": {
          "name": "Camuflar",
          "description": "O dragão pode [[/agir se esconder]] em ambientes naturais mesmo que não tenha cobertura."
        },
        "DH9dqEVVGTZe7G9s": {
          "name": "+1 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "HJiQ5csE8Zk6bsoQ": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:37, opções:efeito de área,inflige:assustado)"
        },
        "2y5PjoJxmfA6wGl8": {
          "name": "Miasma",
          "description": "20 pés (6 metros).\nApós o dragão usar seu Sopro Venenoso, uma nuvem de gás venenoso continua a emanar de seu corpo por 1 rodada. Qualquer criatura que termine seu turno no miasma sofre 4d6[veneno|opções:dano de área] de dano (teste (fortitude, dc:37, básico, opções:efeito de área) salvamento).\nQualquer criatura no miasma fica Oculta e trata as outras criaturas como ocultas. O dragão pode ver através desta ocultação."
        },
        "ItyDWQiPz0eJ2hOb": {
          "name": "Torcendo a cauda",
          "description": "Gatilho Uma criatura ao alcance da cauda do dragão usa uma ação de movimento ou sai de um quadrado durante uma ação de movimento que está usando\nEfeito O dragão ataca a criatura com uma penalidade de -2. Se o Golpe acertar, o dragão interrompe a ação da criatura."
        },
        "1FbPUVt1mVdHjwrB": {
          "name": "Passagem Florestal",
          "description": "O dragão com chifres ignora qualquer terreno difícil causado por plantas, como arbustos, vinhas e vegetação rasteira. Mesmo as plantas manipuladas por magia não impedem o seu progresso."
        },
        "3Fn7wuVzeuI4kT5H": {
          "name": "Carga Empaladora",
          "description": "Requisitos O dragão não tem uma criatura empalada em seu chifre\nEfeito O dragão tenta ferir um inimigo. Eles Stride, em seguida, tentam um golpe de chifre. Se acertar, o alvo fica empalado no chifre do dragão. A criatura é agarrada enquanto estiver na buzina (e pode tentar escapar normalmente). O dragão não precisa usar ações adicionais para manter a criatura empalada agarrada. Se o dragão se mover, eles trazem a criatura agarrada junto com eles."
        },
        "VPryni3E3RGw5MdV": {
          "name": "Hálito Venenoso",
          "description": "O dragão respira uma nuvem tóxica que causa 18d6[veneno|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (fortitude, dc:37, básico, opções:efeito de área)).\nEles não podem usar Poison Breath novamente por [[/gmr 1d4 #Recharge Poison Breath]]{1d4 rodadas}."
        },
        "O3Pp2Vb15TQKafR0": {
          "name": "Jornada sem trilhas",
          "description": "O dragão com chifres sempre ganha os benefícios de Cover Tracks em ambientes naturais, mesmo enquanto se move a toda velocidade."
        }
      },
      "spellcasting": {
        "1yTD4w4sLVXeUsEt": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "JbFB5voUqMv5Dzob": {
              "name": "Detectar magia"
            },
            "74i4623LAEczxjMA": {
              "name": "Rajada de Vento"
            },
            "ONGlxMyfQwcPhiXx": {
              "name": "Conheça o caminho"
            },
            "CjtMFUkyFVuxXESc": {
              "name": "Luz"
            },
            "ANUOo49n5spg7gOH": {
              "name": "Leia aura"
            },
            "CzcQeFfxiZHmHrwc": {
              "name": "Videira Emaranhada"
            },
            "hniEmuvcnupj6bVc": {
              "name": "Trilhas desaparecendo"
            },
            "EHtcNjlZC8srnPNv": {
              "name": "Ventriloquismo"
            },
            "5uE9HyhVa2541gUH": {
              "name": "Dissipar Magia"
            },
            "7PS9u8RXNruDw5au": {
              "name": "Forma humanóide"
            },
            "d5ePTQ8ynM4YMDUC": {
              "name": "Um com plantas"
            },
            "p75xUIcS0jv5wZKu": {
              "name": "Corpo Som"
            },
            "tBM472djKIeVdb0S": {
              "name": "Lento"
            },
            "ucTZJ03Sh9XGZqVt": {
              "name": "Véu de Privacidade"
            },
            "Fl8yBPHJi5IMHlTU": {
              "name": "Muro de Espinhos"
            },
            "fln2LAE7ycI661Tc": {
              "name": "Torrente Hidráulica"
            },
            "dEXogGZijYSsqZD3": {
              "name": "Resiliência da Montanha"
            },
            "CAcx1HmgA4PQxd5b": {
              "name": "Movimento desenfreado"
            },
            "8t0IxQFBoZ3oB7U2": {
              "name": "Nuvem tóxica"
            },
            "xxbCgPhFvoZbxSk1": {
              "name": "Campo da Vida"
            },
            "fBnffzHbeakOetxu": {
              "name": "Trepadeiras emaranhadas"
            },
            "8LsvNDLmPxhM2nKc": {
              "name": "Visão Verdadeira"
            },
            "WwQ91gw8EuqpUo0D": {
              "name": "Executar"
            },
            "22XqEOdEIFjkXFes": {
              "name": "Máscara do Terror"
            },
            "EqMfE5jnHrbLiVSt": {
              "name": "Dessecar"
            },
            "1WEhL4ZmV2HMfYgL": {
              "name": "Ventos punitivos"
            }
          }
        },
        "m9dIszotbO8vukOI": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "lgDxJmtHFjvOF0sM": {
              "name": "Flora emaranhada (à vontade)"
            },
            "fZbXpVIUqe3JYgab": {
              "name": "Charme (à vontade)"
            },
            "B7a0hx6Z6c3B3OrK": {
              "name": "Sugestão"
            },
            "CT08HmGXwoMgCqla": {
              "name": "Dominar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:conspirator-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1bb52d10b53958629ee7488400e0022602a19a79562a11c5e7abec77cdcc8028",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Conspirador (Antigo)",
      "description": "Escondidos entre as sombras e os altos escalões da sociedade estão os dragões conspiradores. Esses dragões são intrigantes, sempre procurando manipular e controlar os outros, seja para ganho pessoal ou simplesmente pela emoção de ver suas maquinações acontecerem. Dragões conspiradores se veem acima dos outros e normalmente falam em tons e palavras infantilizantes. No entanto, como a maioria dos dragões conspiradores encontram outros disfarçados, eles fazem o possível para manter o disfarce.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "shadowtongue": "língua das sombras",
        "sussuran": "sussuran",
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "controlado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "QWLB0M0TCS4KHd4W": {
          "name": "Maxilas",
          "damage": "3d8+17 perfurante"
        },
        "aHZHZh4OikvB5foL": {
          "name": "Garra",
          "damage": "3d6+17 cortante"
        },
        "WYzVKov6bCQKHrul": {
          "name": "Cauda",
          "damage": "2d10+17 contundente"
        },
        "ece3eTIYzV4ZCJsH": {
          "name": "Explosão Mental",
          "damage": "6d6+6 mental"
        }
      },
      "actions": {
        "UqzJSLnhM806Vpw7": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "Ef4Gp3twf8DfarI2": {
          "name": "+2 para Sentir Motivo",
          "description": ""
        },
        "EHlHjhHk7jncKixn": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "OpdWoyPywj7o3f4N": {
          "name": "Retrair corpo",
          "description": "Gatilho O dragão é atingido ou criticamente atingido por um ataque feito por uma criatura que o dragão pode ver\nEfeito O dragão retrai a parte do corpo alvo ou gira para evitar o ataque, ganhando +2 de bônus de circunstância na CA contra o ataque desencadeador."
        },
        "mVB17TASKITmaKOR": {
          "name": "Conjurar Disfarce",
          "description": "Frequência uma vez por dia\nEfeito O dragão conjura uma réplica perfeita de um humanóide que ele viu de seu tamanho ou menor e se comprime nele, além de gerar roupas apropriadas para o humanóide. Este processo leva 1 minuto para ser concluído, durante o qual o dragão fica fora de guarda. Se o dragão parar ou for interrompido neste processo, o traje será destruído. Assim que o processo for concluído, o dragão pode permanecer neste disfarce indefinidamente.\nA transformação tem os efeitos de Alterar Forma, exceto que o disfarce não é ativamente mágico por natureza e não é registrado como mágico para detectar magia e efeitos similares. O dragão perde Retrair Corpo enquanto está transformado.\nSe o dragão for atingido criticamente enquanto estiver usando o disfarce, o traje será destruído e explodirá imediatamente. Isso tem os efeitos de Detonar Disfarce, exceto que as criaturas usam o resultado um grau de sucesso melhor do que obtiveram no teste de resistência."
        },
        "kK41S41L533fMggZ": {
          "name": "Detonar Disfarce",
          "description": "Requisitos O dragão está usando seu disfarce conjurado\nEfeito O dragão irrompe do disfarce, destruindo-o. A revelação explosiva causa 18d6[concussão|options:area-damage] de dano a criaturas em um @Template[emanation|distance:5] com um teste de resistência (reflexo, dc:39, básico, opções:efeito de área). Uma criatura que falhe no teste fica Deslumbrada por 1 rodada enquanto fica coberta de restos do disfarce.\nQualquer criatura que compartilhe um espaço com o dragão após sua erupção é empurrada para o espaço vazio mais próximo."
        },
        "IUwmirxfv4K0PcJf": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "HwgYIjME0WVAR2y8": {
          "name": "Momento Dracônico",
          "description": "Quando o dragão consegue um acerto crítico com um Golpe, eles recarregam Smoke Breath."
        },
        "uyo6N99p8gLhdfCs": {
          "name": "Transformação Apressada",
          "description": "Frequência uma vez por hora\nEfeito Usando a ajuda da magia e uma quantidade exaustiva de esforço, o dragão rapidamente remodela seu corpo na forma de uma figura humanóide genérica. Isso tem os efeitos da Forma Humanóide, exceto que dura apenas 1 minuto, e o dragão não ganha o bônus de status +4 para Enganação, pois a transformação faz uso do corpo do dragão para imitar grosseiramente uma forma humanóide. O dragão pode Dispensar o efeito.\nSempre que o efeito termina, o dragão deixa para trás restos de carne conjurada magicamente, que podem denunciar a presença do dragão."
        },
        "ab0Z4gMjfbVX1DVf": {
          "name": "Hálito de fumaça",
          "description": "O dragão libera uma nuvem nociva de fumaça que causa 16d6[veneno|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (fortitude, dc:39, básico, opções:efeito de área)). A fumaça permanece por 1 minuto. Isto tem os efeitos da Névoa, exceto que preenche a área do cone.\nO dragão não pode usar Smoke Breath novamente por [[/gmr 1d4 #Recharge Smoke Breath]]{1d4 rodadas}."
        },
        "lhnqwfK5RkPmG7XJ": {
          "name": "Ataque furtivo",
          "description": "Os Golpes do dragão causam 3d6 de dano de precisão adicional aos alvos Desprotegidos."
        }
      },
      "spellcasting": {
        "vMzkI80zGmPn011P": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "PVV9ShzfXdXEEjmV": {
              "name": "Charme (à vontade)"
            },
            "1b9uIaKeGGrSaf0G": {
              "name": "Reescrever a memória (à vontade)"
            },
            "suHkOwe5abK5hPib": {
              "name": "Dominar"
            },
            "FW2HOOgL7gGvDDVV": {
              "name": "Sonda Mental"
            },
            "WuqqgROOGcJWKepq": {
              "name": "Leitura da mente (à vontade)"
            },
            "kJfHKnZbhbgRt7Yx": {
              "name": "Reescrever memória"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:conspirator-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f31342ad3c68ef3766bdd6825b9acdbeb142cf6ac2d5967c5988e62f97fb99c7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Conspirador (Antigo, Feiticeiro)",
      "description": "Escondidos entre as sombras e os altos escalões da sociedade estão os dragões conspiradores. Esses dragões são intrigantes, sempre procurando manipular e controlar os outros, seja para ganho pessoal ou simplesmente pela emoção de ver suas maquinações acontecerem. Dragões conspiradores se veem acima dos outros e normalmente falam em tons e palavras infantilizantes. No entanto, como a maioria dos dragões conspiradores encontram outros disfarçados, eles fazem o possível para manter o disfarce.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.\nConjuradores Dracônicos\nCada dragão apresenta uma barra lateral sobre dragões conjuradores desse tipo. Para criar um conjurador de dragão, remova as habilidades Draconic Frenzy e Draconic Momentum do dragão e dê a eles os magias descritos na barra lateral. Você pode trocar qualquer número deles por outros magias, desde que mantenha o mesmo número de magias para cada Rank. Você também pode querer aumentar o modificador de Inteligência, Sabedoria ou Carisma do dragão em 1 ou 2 para refletir seu domínio da magia.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "shadowtongue": "língua das sombras",
        "sussuran": "sussuran",
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "controlado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "QWLB0M0TCS4KHd4W": {
          "name": "Maxilas",
          "damage": "3d8+17 perfurante"
        },
        "aHZHZh4OikvB5foL": {
          "name": "Garra",
          "damage": "3d6+17 cortante"
        },
        "WYzVKov6bCQKHrul": {
          "name": "Cauda",
          "damage": "2d10+17 contundente"
        },
        "ece3eTIYzV4ZCJsH": {
          "name": "Explosão Mental",
          "damage": "6d6+6 mental"
        }
      },
      "actions": {
        "UqzJSLnhM806Vpw7": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "Uph3sLzjynIfrD4G": {
          "name": "+2 para Sentir Motivo",
          "description": ""
        },
        "EHlHjhHk7jncKixn": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "OpdWoyPywj7o3f4N": {
          "name": "Retrair corpo",
          "description": "Gatilho O dragão é atingido ou criticamente atingido por um ataque feito por uma criatura que o dragão pode ver\nEfeito O dragão retrai a parte do corpo alvo ou gira para evitar o ataque, ganhando +2 de bônus de circunstância na CA contra o ataque desencadeador."
        },
        "mVB17TASKITmaKOR": {
          "name": "Conjurar Disfarce",
          "description": "Frequência uma vez por dia\nEfeito O dragão conjura uma réplica perfeita de um humanóide que ele viu de seu tamanho ou menor e se comprime nele, além de gerar roupas apropriadas para o humanóide. Este processo leva 1 minuto para ser concluído, durante o qual o dragão fica fora de guarda. Se o dragão parar ou for interrompido neste processo, o traje será destruído. Assim que o processo for concluído, o dragão pode permanecer neste disfarce indefinidamente.\nA transformação tem os efeitos de Alterar Forma, exceto que o disfarce não é ativamente mágico por natureza e não é registrado como mágico para detectar magia e efeitos similares. O dragão perde Retrair Corpo enquanto está transformado.\nSe o dragão for atingido criticamente enquanto estiver usando o disfarce, o traje será destruído e explodirá imediatamente. Isso tem os efeitos de Detonar Disfarce, exceto que as criaturas usam o resultado um grau de sucesso melhor do que obtiveram no teste de resistência."
        },
        "kK41S41L533fMggZ": {
          "name": "Detonar Disfarce",
          "description": "Requisitos O dragão está usando seu disfarce conjurado\nEfeito O dragão irrompe do disfarce, destruindo-o. A revelação explosiva causa 18d6[concussão|options:area-damage] de dano a criaturas em um @Template[emanation|distance:5] com um teste de resistência (reflexo, dc:39, básico, opções:efeito de área). Uma criatura que falhe no teste fica Deslumbrada por 1 rodada enquanto fica coberta de restos do disfarce.\nQualquer criatura que compartilhe um espaço com o dragão após sua erupção é empurrada para o espaço vazio mais próximo."
        },
        "uyo6N99p8gLhdfCs": {
          "name": "Transformação Apressada",
          "description": "Frequência uma vez por hora\nEfeito Usando a ajuda da magia e uma quantidade exaustiva de esforço, o dragão rapidamente remodela seu corpo na forma de uma figura humanóide genérica. Isso tem os efeitos da Forma Humanóide, exceto que dura apenas 1 minuto, e o dragão não ganha o bônus de status +4 para Enganação, pois a transformação faz uso do corpo do dragão para imitar grosseiramente uma forma humanóide. O dragão pode Dispensar o efeito.\nSempre que o efeito termina, o dragão deixa para trás restos de carne conjurada magicamente, que podem denunciar a presença do dragão."
        },
        "ab0Z4gMjfbVX1DVf": {
          "name": "Hálito de fumaça",
          "description": "O dragão libera uma nuvem nociva de fumaça que causa 16d6[veneno|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (fortitude, dc:39, básico, opções:efeito de área)). A fumaça permanece por 1 minuto. Isto tem os efeitos da Névoa, exceto que preenche a área do cone.\nO dragão não pode usar Smoke Breath novamente por [[/gmr 1d4 #Recharge Smoke Breath]]{1d4 rodadas}."
        },
        "lhnqwfK5RkPmG7XJ": {
          "name": "Ataque furtivo",
          "description": "Os Golpes do dragão causam 3d6 de dano de precisão adicional aos alvos Desprotegidos."
        }
      },
      "spellcasting": {
        "yQV23AhbKuy6NxBB": {
          "name": "magias Ocultos Preparados",
          "category": "preparado",
          "spells": {
            "4e905o66s16KYT9z": {
              "name": "Banimento"
            },
            "vaUIaXQGf7t6RCsM": {
              "name": "Atordoamento"
            },
            "1J2bDPpf4FZsKYRp": {
              "name": "Detectar magia"
            },
            "o09mHvYWqbK3LU9p": {
              "name": "Temer"
            },
            "6HR0izstA2nhWq1z": {
              "name": "Invenção"
            },
            "WbCkX2z92hsy08ca": {
              "name": "Mensagem"
            },
            "48AU2ogP6C31qmPl": {
              "name": "Dor Fantasma"
            },
            "hE2qhMA2jeGJcnIm": {
              "name": "Projétil Telecinético"
            },
            "DcADSDyRiJUz9XaY": {
              "name": "Calma"
            },
            "Ka7xLLQ7KcJZ2MxP": {
              "name": "Invisibilidade"
            },
            "uEVHkz70uGksaNtx": {
              "name": "Paranóia"
            },
            "YfpP4sGmG2WjEu1h": {
              "name": "Clariaudiência"
            },
            "qky70BQDrRjnOzwk": {
              "name": "Paralisar"
            },
            "DJlqhJCYPh6Wq1Kt": {
              "name": "Véu de Privacidade"
            },
            "QlOosHfrrLHtWYe0": {
              "name": "Clarividência"
            },
            "y80wLZEprMJdPGcg": {
              "name": "Palavras melosas"
            },
            "2BavdNcuTrCEv9gX": {
              "name": "Sugestão"
            },
            "F2TPa03aFhvjMa9E": {
              "name": "Olho Escoteiro"
            },
            "Au66YaMrC7C2GosK": {
              "name": "Pulso Sináptico"
            },
            "WzjtobUGSfX7xchY": {
              "name": "Fala Verdadeira"
            },
            "zjZOHNmCfzNJLAl1": {
              "name": "Enganar"
            },
            "eZOGqDtHyeCzgRBc": {
              "name": "Vidência"
            },
            "76wzXoyiOroZZrsl": {
              "name": "Visão Verdadeira"
            },
            "uXwiKDr5wKLsq4Yi": {
              "name": "Inimigo duplicado"
            },
            "NUKhuzChqWROPI7M": {
              "name": "Imagem do projeto"
            },
            "pDrzc0aTIjE9frAq": {
              "name": "Mente Distorcida"
            },
            "6GHycah3Hs6fA1U9": {
              "name": "Mente Oculta"
            },
            "ZozIWI00jK5IRcmV": {
              "name": "Observação implacável"
            }
          }
        },
        "vMzkI80zGmPn011P": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "PVV9ShzfXdXEEjmV": {
              "name": "Charme (à vontade)"
            },
            "1b9uIaKeGGrSaf0G": {
              "name": "Reescrever a memória (à vontade)"
            },
            "suHkOwe5abK5hPib": {
              "name": "Dominar"
            },
            "FW2HOOgL7gGvDDVV": {
              "name": "Sonda Mental"
            },
            "WuqqgROOGcJWKepq": {
              "name": "Leitura da mente (à vontade)"
            },
            "kJfHKnZbhbgRt7Yx": {
              "name": "Reescrever memória"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:horned-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:754a7a9aa871764133bbb4b1cccfd64a3eaf93fb35fc919766487bd1b079d094",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão com Chifres (Antigo)",
      "description": "A magia que flui através dos dragões primitivos pode manifestar características mais animalescas ou bestiais em um determinado tipo de dragão. Notavelmente entre eles estão os enormes chifres emparelhados do dragão com chifres. Embora sua estrutura volumosa, coloração natural e escamas estriadas proeminentes sejam notáveis ​​à sua maneira, são os chifres que são mais óbvios e impressionantes à primeira vista. Dragões com chifres usam seus chifres para empalar suas presas em uma demonstração rápida e brutal de seu poder. Geralmente são contemplativos e têm fixação no conhecimento e na autodisciplina, características desmentidas por sua aparência bestial. Como resultado, os dragões com chifres são geralmente mais abertos a falar com estranhos.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "elven": "elfo",
        "fey": "feérico",
        "chthonian": "chthoniano",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "s6adAtDXbmqHceWK": {
          "name": "Maxilas",
          "damage": "3d12+15 perfurante; 4d4 veneno"
        },
        "zLSUNYt5ukMkU9zC": {
          "name": "Garra",
          "damage": "3d10+15 cortante"
        },
        "BWkGmIVrerzvJg6A": {
          "name": "Cauda",
          "damage": "3d10+13 contundente"
        },
        "zgg5I2ssn7V4bFRq": {
          "name": "Buzina",
          "damage": "2d10+13 perfurante"
        }
      },
      "actions": {
        "lseWqsEmPmayLsqf": {
          "name": "Camuflar",
          "description": "O dragão pode [[/agir se esconder]] em ambientes naturais mesmo que não tenha cobertura."
        },
        "DH9dqEVVGTZe7G9s": {
          "name": "+1 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "HJiQ5csE8Zk6bsoQ": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:37, opções:efeito de área,inflige:assustado)"
        },
        "2y5PjoJxmfA6wGl8": {
          "name": "Miasma",
          "description": "20 pés (6 metros).\nApós o dragão usar seu Sopro Venenoso, uma nuvem de gás venenoso continua a emanar de seu corpo por 1 rodada. Qualquer criatura que termine seu turno no miasma sofre 4d6[veneno|opções:dano de área] de dano (teste (fortitude, dc:37, básico, opções:efeito de área) salvamento).\nQualquer criatura no miasma fica Oculta e trata as outras criaturas como ocultas. O dragão pode ver através desta ocultação."
        },
        "ItyDWQiPz0eJ2hOb": {
          "name": "Torcendo a cauda",
          "description": "Gatilho Uma criatura ao alcance da cauda do dragão usa uma ação de movimento ou sai de um quadrado durante uma ação de movimento que está usando\nEfeito O dragão ataca a criatura com uma penalidade de -2. Se o Golpe acertar, o dragão interrompe a ação da criatura."
        },
        "Iv8LMCTGw5NLD5aD": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de chifre em qualquer ordem."
        },
        "XhU4mCNUkX4dqLS7": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Venenoso sempre que consegue um acerto crítico com um Golpe."
        },
        "1FbPUVt1mVdHjwrB": {
          "name": "Passagem Florestal",
          "description": "O dragão com chifres ignora qualquer terreno difícil causado por plantas, como arbustos, vinhas e vegetação rasteira. Mesmo as plantas manipuladas por magia não impedem o seu progresso."
        },
        "3Fn7wuVzeuI4kT5H": {
          "name": "Carga Empaladora",
          "description": "Requisitos O dragão não tem uma criatura empalada em seu chifre\nEfeito O dragão tenta ferir um inimigo. Eles Stride, em seguida, tentam um golpe de chifre. Se acertar, o alvo fica empalado no chifre do dragão. A criatura é agarrada enquanto estiver na buzina (e pode tentar escapar normalmente). O dragão não precisa usar ações adicionais para manter a criatura empalada agarrada. Se o dragão se mover, eles trazem a criatura agarrada junto com eles."
        },
        "VPryni3E3RGw5MdV": {
          "name": "Hálito Venenoso",
          "description": "O dragão respira uma nuvem tóxica que causa 18d6[veneno|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (fortitude, dc:37, básico, opções:efeito de área)).\nEles não podem usar Poison Breath novamente por [[/gmr 1d4 #Recharge Poison Breath]]{1d4 rodadas}."
        },
        "O3Pp2Vb15TQKafR0": {
          "name": "Jornada sem trilhas",
          "description": "O dragão com chifres sempre ganha os benefícios de Cover Tracks em ambientes naturais, mesmo enquanto se move a toda velocidade."
        }
      },
      "spellcasting": {
        "m9dIszotbO8vukOI": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "lgDxJmtHFjvOF0sM": {
              "name": "Flora emaranhada (à vontade)"
            },
            "fZbXpVIUqe3JYgab": {
              "name": "Charme (à vontade)"
            },
            "B7a0hx6Z6c3B3OrK": {
              "name": "Sugestão"
            },
            "CT08HmGXwoMgCqla": {
              "name": "Dominar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:bandersnatch",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f421966a4517cebff328ddda4f4725933ec616a9c86a45bdb82ea44a14d33f0c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bandersnatch",
      "description": "Bandersnatches são grandes gatos de seis patas com espinhos perversos percorrendo todo o comprimento de seus corpos até as pontas de suas poderosas caudas. Tal como acontece com outras criaturas lendárias do Primeiro Mundo, como o jabberwock, os bandersnatches pertencem ao infame grupo de criaturas conhecidas coletivamente como “Tane”. Esses terríveis caçadores têm grande prazer em derrubar outros predadores mortais ou inteligentes, adaptando-se perfeitamente a qualquer ambiente em que se encontrem. Um bandersnatch persegue sua presa antes de atacar com velocidade e ferocidade. Aqueles que sobreviverem a um ataque de Bandersnatch confirmarão que, embora as presas e garras dos gatos sejam mortais, seus olhos são a maior arma de todas. Os olhos de um Bandersnatch estão constantemente mudando de cor, intensidade e design, fazendo com que aqueles que eles olham caiam em pânico confuso.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-120": "perfume-120"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "confuso"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "4WaSsGcstf79Y44R": {
          "name": "Maxilas",
          "damage": "3d12+19 perfurante"
        },
        "PhsmxJZ4aqEowjOn": {
          "name": "Garras",
          "damage": "3d8+19 cortante"
        },
        "QDw6f81ZeMuIueQP": {
          "name": "Cauda",
          "damage": "3d4+19 perfurante"
        },
        "YaqUxn6Ybbvxv3gB": {
          "name": "Pena",
          "damage": "3d4+19 perfurante"
        }
      },
      "actions": {
        "HYnUw0h1bJQMkzBc": {
          "name": "Aclimatação Planar",
          "description": "O Bandersnatch trata o avião em que está como seu avião natal."
        },
        "pPppryZClUfw47fK": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "HtScT1S9mxNqMylg": {
          "name": "Cura Rápida 15",
          "description": ""
        },
        "hhOHcOSPkhLdvric": {
          "name": "Olhar Confuso",
          "description": "20 pés (6 metros).\nQuando uma criatura termina seu turno na aura, ela deve ter sucesso em um teste (vontade, dc:35, opções: efeito de área, infligir: confuso) salvar ou ficará Confusa por 1 rodada."
        },
        "6qAaC77CfOknbaMv": {
          "name": "Recuperação rápida",
          "description": "O Bandersnatch se recupera com uma velocidade assustadora. No final de seu turno, ele reduz o valor de uma condição debilitante que sofre (com exceção de Morrer) em 1. Se estiver Cegado, Deslumbrado, Ensurdecido, Fatigado, Fugindo ou Petrificado, ele pode, em vez disso, ter sucesso em um teste (flat, dc:16) para encerrar uma dessas condições de sua escolha; ele não pode usar a recuperação rápida em outras condições sem valores."
        },
        "6f3aVVLykcFzdJrr": {
          "name": "Ataque reativo (somente cauda)",
          "description": ""
        },
        "kfdzBPs02IvVMabf": {
          "name": "Olhar Focado",
          "description": "O Bandersnatch fixa seu olhar em uma criatura que pode ver em 20 pés (6 metros). O alvo deve imediatamente tentar um salvamento de Vontade contra o Olhar Confuso do Bandersnatch. Depois de tentar salvar, a criatura fica temporariamente imune ao Olhar Confuso de um Bandersnatch até o início do próximo turno do Bandersnatch."
        },
        "IW0bpDD32dNAHnum": {
          "name": "Carga Frumosa",
          "description": "O Bandersnatch Strides, ignorando terreno difícil, então faz dois golpes de garra no final de seu movimento."
        },
        "3Ygn2F1yeN3UTO2S": {
          "name": "Dor",
          "description": "Os espinhos de um Bandersnatch criam feridas excepcionalmente dolorosas. A criatura ferida deve ser bem sucedida em um teste (fortitude, dc:38, opções:inflige:drenado) para resistir a ser Drenada 1 (Drenada 2 em uma falha crítica) por esta dor. Outros golpes de Bandersnatch que causam dor aumentam a quantidade de drenagem em 1 para cada falha no salvamento, até um máximo de 4 drenados."
        },
        "WhCqHDOg0A8FK3IF": {
          "name": "Rastreador Implacável",
          "description": "O Bandersnatch pode rastrear enquanto se move a toda velocidade."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ice-linnorm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7a1572031bb4f202ee9b9390a6c081c61d32fcf062b9fc2ebe0b32e5a6265d85",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Linnorm de gelo",
      "description": "A norma de gelo habita entre fendas glaciais, no topo de picos de montanhas soprados pelo vento ou dentro de cavernas brilhantes escavadas no coração dos mais poderosos icebergs.\nImensos e primitivos dragões das regiões setentrionais do mundo, os Linnorms odeiam aqueles que consideram criaturas inferiores e procuram infligir o máximo de sofrimento possível às suas infelizes vítimas. Embora essas monstruosidades serpentinas possam não ser os poderosos dragões alados que a maioria imagina, eles possuem uma força incrível e poderes mortais que muitas vezes rivalizam com a autêntica brutalidade do dragão.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "aklo": "aklo",
        "draconic": "dracônico",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "frio",
          "xingamento",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15",
          "fogo 10"
        ]
      },
      "attacks": {
        "13YXYsRSLVocnnzA": {
          "name": "Maxilas",
          "damage": "3d12+17 perfurante"
        },
        "j2n6AMiW1Ve4yYnf": {
          "name": "Garra",
          "damage": "3d8+17 cortante"
        },
        "ySnTknzJunTGUgYX": {
          "name": "Cauda",
          "damage": "3d6+17 contundente"
        }
      },
      "actions": {
        "cGPPwZfpkBdll6m3": {
          "name": "magias Constantes",
          "description": ""
        },
        "yA3EfugwTMvPqKVg": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "B8eTnDbhYn9WARrP": {
          "name": "Regeneração 10 (desativada por ferro frio)",
          "description": ""
        },
        "88O2MErrb1dOjHJh": {
          "name": "Maldição de Gelo",
          "description": "Quando uma criatura mata o linnorm de gelo, ela deve ter sucesso em um teste (vontade, dc:40) de resistência ou ganhará fraqueza ao frio 15 com duração ilimitada.\nEfeito: Maldição do Gelo"
        },
        "GrUmNFWsGcEdaXm3": {
          "name": "Ataque reativo (somente cauda)",
          "description": ""
        },
        "MNTsZcEEgZLgHBMp": {
          "name": "Contrair",
          "description": "(2d6+18)[concussão], teste (fortitude, dc:38, básico)"
        },
        "TfUyAj18NAaa1ZGV": {
          "name": "Veneno de Gelo Linnorm",
          "description": "Teste de salvamento (fortitude, dc:38)\nDuração máxima 10 rodadas\nEstágio 1 5d6[frio] de dano e Drenado 1 (1 rodada);\nEstágio 2 7d6[frio] de dano e Drenado 2 (1 rodada)"
        },
        "4uy8ctqHkWgUS4KY": {
          "name": "Respiração do Pântano Gelado",
          "description": "O linnorm de gelo expele uma explosão de lodo viscoso e congelante em um @Template[cone|distance:60] que causa 15d6[cold|options:area-damage] de dano a criaturas dentro da área (verificação (reflexo, dc:38, básico, opções:efeito de área) salvamento).\nO lodo gelado gruda naqueles atingidos e endurece em espessas camadas de gelo. Uma criatura que falhar no teste de resistência é imobilizada pelo gelo até ter sucesso em um teste para [[/act escape dc=34]] ou ela ou um aliado [[/act force-open dc=34]]{Forças abrir} o gelo (CD 34 para ambos os casos). No início do seu turno, uma criatura ainda imobilizada pelo gelo sofre 4d6[frio] de dano. Outra criatura pode libertar um alvo congelado causando um total de 20 de dano de fogo ao alvo congelado. Se não for supervisionado, o gelo se desfaz sozinho em 1 minuto.\nCriaturas com a característica fogo não podem ser congeladas pelo Icemire Breath. Criaturas voadoras caem se congeladas, e criaturas nadadoras congeladas sobem em direção à superfície da água a uma velocidade de 60 pés (18 metros) por rodada.\nO linnorm não pode usar Sopro do Atoleiro Gelado novamente por [[/gmr 1d4 #Recharge Sopro do Atoleiro Gelado]]{1d4 rodadas}."
        },
        "Vy7eGgsZwEtFCJod": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "gYnpwjAaRfAevtAE": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "RgFmd7UFsdE5qwLk": {
              "name": "Visão Verdadeira (Constante)"
            },
            "HBXRcdXGAmxhP7u3": {
              "name": "Movimento irrestrito (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:island-oni",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:851f906e1186757d34e0d52537fa05a9e81989e5b20d1ef285cda2ec76d51fa1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ilha Oni",
      "description": "Os Oni insulares são aqueles poderosos o suficiente para reivindicar pequenas ilhas costeiras, muitas vezes criando exércitos improvisados ​​de Oni inferiores que saqueiam as terras e águas vizinhas. Os oni da ilha acumulam essa riqueza material, vestindo roupas luxuosas e adornando seus rostos monstruosos com todos os tipos de joias.\nOs oni da ilha normalmente vasculham navios naufragados em busca de armas, armaduras e tesouros. Isso também pode colocá-los em contato com marinheiros mortos-vivos, que os oni da ilha costumam colocar em serviço.\nOni são criaturas grandes e brutais originárias de Tian Xia que se assemelham a humanóides com pele, presas e chifres de cores vivas. Embora comumente confundidos com demônios, os primeiros oni eram originalmente kami, espíritos tutelares da natureza. Esses kami sofreram um trauma terrível, perdendo suas proteções sagradas devido a desastres dramáticos ou à insensibilidade de outros e, como resultado, transformaram-se nas criaturas violentas que são hoje. Embora alguns acreditem que o oni pode ser aplacado espiritualmente por meio de adoração ritual adequada que os transforma de volta em kami, muitos desses pretensos salvadores caem nas mãos da notória força bruta, dos dentes dilaceradores e do comando das tempestades do oni.\nOni possuem a habilidade de se disfarçar de outros humanóides. Eles raramente são criativos em seus disfarces, muitas vezes escolhendo uma aparência específica semelhante à sua forma oni e mantendo-a. Essa simplicidade pega muitos de surpresa, pois as pessoas presumem que o oni está limitado a uma única forma alternativa, o que não é de forma alguma o caso.",
      "size": "Enorme",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "common": "comum"
      },
      "defenses": {
        "immunities": [
          "eletricidade"
        ],
        "resistances": [],
        "weaknesses": [
          "espírito 20"
        ]
      },
      "attacks": {
        "00kCy3dtoRU8EnP9": {
          "name": "Lança Longa",
          "damage": "3d8+10 perfurante; 2d6 eletricidade"
        },
        "DryXaAfUqz1HN8lZ": {
          "name": "Maxilas",
          "damage": "3d6+10 perfurante; 2d6 eletricidade"
        },
        "8qNsivFnCww0jFZo": {
          "name": "Raio",
          "damage": "3d12+12 eletricidade"
        }
      },
      "actions": {
        "mTsKSxGS9jWZPCar": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "IQ7VqIL6X2jYVFJw": {
          "name": "Visão da Névoa",
          "description": "O oni da ilha ignora a condição Oculto da neblina e neblina."
        },
        "RMCsutKfNLtikzWK": {
          "name": "magias Constantes",
          "description": ""
        },
        "weR36ps3liBMdBu8": {
          "name": "+1 Status para todos os salvamentos versus água",
          "description": ""
        },
        "Qk9uAi6gzL2mlrno": {
          "name": "Pânico de Feijão",
          "description": "Curiosamente, os Oni têm medo de feijão, especialmente quando as estações começam a mudar. Se uma criatura interagir para jogar um punhado de feijões no oni, o oni ficará Amedrontado 2. Enquanto estiver assustado dessa forma, sua fraqueza ao dano espiritual aumenta em 5. O oni então se torna imune ao pânico do feijão por 24 horas."
        },
        "uCFpzX8rzkx2BjyC": {
          "name": "Ilha Perdida Oni",
          "description": "Um oni insular pode reivindicar uma ilha com raio de até 1,6 km em um processo que leva 1 semana, durante a qual o oni deve derrotar qualquer um que venha contestar sua reivindicação. Se for bem-sucedido, o oni pode controlar livremente o clima em sua ilha e em um raio de 1,6 km da costa, com o efeito de um ritual de Controle do Clima bem-sucedido.\nEste clima alterado envolve a ilha em uma névoa espessa, miragens marítimas ou outros fenômenos que aumentam a CD dos testes para localizar e navegar até a ilha (como Conhecimento de Navegação ou Sobrevivência) para 40, embora o oni possa permitir que aliados passem livremente. Se o oni morrer ou sair da ilha, o clima volta ao normal imediatamente."
        },
        "zYJRHl6hbvBe1zVk": {
          "name": "Ataque reativo",
          "description": ""
        },
        "H97yITJBuctoMctx": {
          "name": "Alterar forma",
          "description": "O oni da ilha pode assumir a aparência de qualquer criatura humanóide Média ou Grande. Isso não altera sua velocidade ou seus bônus de ataque e dano com seus golpes, mas pode alterar o tipo de dano que seus golpes causam (normalmente para concussão)."
        },
        "EmbWNidhhft8HXB7": {
          "name": "Chuva Condutiva",
          "description": "O oni da ilha dispara um raio no ar, que imediatamente se agita com nuvens escuras. A chuva cai em um @Template[emanation|distance:60]{emanação de raio de 60 pés}, centrada no oni, por 1 minuto, enchendo o ar e acumulando-se no chão.\nAs criaturas na aura ganham fraqueza 10 à eletricidade, e toda a área é um terreno difícil maior para criaturas Voadoras, e terreno difícil para criaturas no solo ou Escaladas, a menos que elas também tenham Velocidade de natação.\nEfeito: Chuva Condutiva"
        },
        "Y2EMKk7GwfhPvWS0": {
          "name": "Pierce Eletrizante",
          "description": "Requisitos A última ação do oni da ilha foi um ataque de lança longa bem-sucedido contra um alvo Médio ou menor\nEfeito O oni da ilha enfia a lança no alvo e invoca um raio para atingir a lança. O alvo sofre 6d6[eletricidade] de dano com um teste de resistência (fortitude, dc:37, básico). Em caso de falha, a criatura também é empalada na lança. É Agarrado, e se o oni se mover, ele traz a criatura agarrada junto com ele.\nO oni da ilha não precisa usar ações adicionais para manter a criatura agarrada; a criatura permanece agarrada enquanto for empalada. A criatura agarrada pode tentar escapar normalmente. O oni da ilha só pode ter uma criatura empalada dessa forma por vez."
        },
        "TFFWvw8pxkUHYXm4": {
          "name": "Engula inteiro",
          "description": "Médio, (3d8+10)[concussão], Ruptura 30"
        },
        "AzI191A2HnKNQL2z": {
          "name": "Maré de tropeço",
          "description": "O oni da ilha gira sua lança em um círculo completo, liberando ondas de água do mar. Todas as criaturas em um @Template[emanation|distance:20] devem ser bem sucedidas em um teste de resistência (reflexo, dc:37) ou cairão propensas."
        },
        "6nTCovyYhG00o6m8": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "3KyuJoHTxD577UTr": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "fJpBA59NWP7mj89s": {
              "name": "Invisibilidade (à vontade, somente para si)"
            },
            "YIqJExB59uzjU9bX": {
              "name": "Caminhada na Água (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:banshee",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1868b6ed7c9e3b9304d52fdfc6370fe638b2d321b4a54c3bea88771643654a58",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Banshee",
      "description": "Banshees são as almas furiosas e atormentadas daqueles que estão presos ao mundo por uma traição que definiu as horas finais de suas vidas. Algumas banshees surgem daqueles que foram mortos por amigos e aliados de confiança, ou cujos entes queridos os traíram em seus leitos de morte. Outros surgem daqueles cujos atos traiçoeiros, pouco antes de suas mortes, deixaram uma mancha em suas almas. Independentemente de sua origem, as banshees desprezam os vivos. Esse ódio pela vida é muitas vezes uma inversão horrível de suas personalidades na vida. Alguns especulam que quanto mais bondosa a pessoa (e mais dolorosa a traição), mais cruel é a banshee.\nBanshees raramente se afastam de onde morreram e normalmente assombram florestas densas e pântanos cobertos onde pouca luz enfeita o solo. Muitos banshees são elfos e podem ser encontrados na nação élfica de Kyonin, especificamente em Tanglebriar, o domínio sinistro do demônio Treerazer. Da mesma forma, um grande número de banshees pode ser encontrado à espreita nos desertos congelados do norte de Avistan, criados a partir de uma traição cruel e generalizada que já dura séculos.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "elven": "elfo"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "paralisado",
          "paralisado",
          "tóxico",
          "precisão",
          "inconsciente"
        ],
        "resistances": [
          "todos os danos 12, exceto força, toque fantasma, espírito, vitalidade"
        ],
        "weaknesses": []
      },
      "attacks": {
        "n9emNHUVKTSFk58a": {
          "name": "Mão",
          "damage": "4d10+14 vazio"
        }
      },
      "actions": {
        "cXH3rtQJHLu0xATa": {
          "name": "Ouve batimentos cardíacos",
          "description": "O banshee pode ouvir batimentos cardíacos dentro de 60 pés (18 metros) como um sentido impreciso."
        },
        "gqEF4zsvNcNJ7MVP": {
          "name": "Impotência à luz solar",
          "description": "Uma banshee à luz do sol é Desajeitada 2 e Atordoada 2."
        },
        "Tph2HlfD7An1YiKs": {
          "name": "Ondulação Espectral",
          "description": "Quando um banshee avança pelo menos 10 pés (3 metros), ele fica oculto até o início do próximo turno."
        },
        "pGFt8iou5QIqqqnJ": {
          "name": "Toque aterrorizante",
          "description": "Uma criatura danificada pelo toque da banshee que ainda não esteja assustada deve tentar um teste (vontade, dc:38) de resistência (teste (vontade, dc:43) se o ataque foi um acerto crítico). Se a criatura falhar no teste, ela ficará Assustada 2; em uma falha crítica, a criatura também se encolhe de medo e fica Atordoada 4. Se a criatura estiver protegida contra o medo por uma magia ou item mágico, o toque da banshee primeiro tenta neutralizar o efeito de proteção, com o efeito de um magia Dissipar Magia de 9º Rank."
        },
        "i86nIQHO0OYhOwn1": {
          "name": "Despeito Vingativo",
          "description": "Acionamento Um inimigo atinge criticamente o banshee, ou o banshee falha criticamente em seu salvamento contra o efeito de dano de um inimigo\nEfeito A banshee ataca seu algoz, causando (4d10+14)[mental] de dano com um teste de resistência (vontade, dc:38, básico) e aplicando os efeitos do toque aterrorizante com base nos resultados do mesmo teste de resistência de Vontade."
        },
        "XF5b5q7FRowlzTG5": {
          "name": "Lamento",
          "description": "A banshee desencadeia um arrepiante Lamento dos Amaldiçoados (teste (fortitude, dc:38, características:vazio, opções:efeito de dano,item:tipo:magia), 8d10[void]). Este Wail supera o silêncio e efeitos semelhantes do 5º Rank ou inferior. Em vez disso, o banshee pode usar Wail como uma atividade de três ações para superar esses efeitos de até o 8º Rank.\nO Lamento da banshee ressoa por 1 rodada, e qualquer criatura que entre na área durante esse tempo deve tentar um teste de resistência contra o efeito. Uma criatura não pode ser afetada mais de uma vez pelo mesmo Lamento. A banshee não pode Lamentar novamente por [[/gmr 1d4 #Recharge Wail]] rodadas."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:keketar",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:04c4aa2e0362dcef3ce3044b7b1ad06512ffe564ad63d9f865cd5fcef9ec537a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Keketar",
      "description": "A casta dominante dos multiformes, os keketars orquestram ataques contra os bastiões da lei e julgam disputas multiformes com confiança e capricho. Um keketar se assemelha a uma criatura serpentina brilhante com espinhos, garras e uma cabeça de dragão. A aparência real de um keketar está em constante mudança, mas eles geralmente permanecem por cerca de 18 pés (5,4 metros) e pesam cerca de 1.500 libras. Embora suas formas físicas possam variar, duas coisas permanecem constantes: primeiro, os olhos de um keketar são sempre de um tom penetrante de âmbar ou violeta. Segundo, a marca do cargo do keketar – uma coroa de símbolos mutáveis ​​que paira sobre sua cabeça – nunca muda. Um keketar não pode remover sua coroa, mas pode suprimi-la, embora a maioria relute em fazê-lo e considere tal ato um ato de covardia ou vergonha.\nOs Keketars desempenham um papel na sociedade proteana de uma espécie de sacerdócio, operando como intermediários entre os outros proteanos e os Oradores das Profundezas. Todos os outros proteanos se submetem aos keketars, tratando-os de maneira semelhante à forma como os cidadãos de uma cidade mortal tratariam nobres respeitados; proteans ainda mais poderosos obedecem à vontade dos keketars. Tal como acontece com muitas religiões, o dogma e a teologia são propensos a interpretação e mudança, e entre os proteanos a situação é ainda mais pronunciada. Qualquer que seja a natureza e os desejos dos Oradores das Profundezas, os keketars individuais muitas vezes chegam a conclusões dramaticamente diferentes quanto à sua vontade e intenção. Para os proteanos, contudo, esta dissonância inerente é mais uma força do que uma fraqueza.\nGuardiões da desordem e nativos do plano primordial do caos conhecido como Maelstrom, os proteanos consideram seu chamado espalhar a confusão e apressar os fins entrópicos. Os proteanos mais poderosos são semideuses conhecidos coletivamente como senhores proteanos, embora sejam entidades misteriosas cujos cultos no Universo tendem a ser obscuros e secretos.\nOs proteans se dividem em um sistema de castas flexível e possuem uma variedade estonteante de poderes. A maioria dos proteanos tem um corpo serpentino com a cabeça de uma fera primitiva. Os estudiosos há muito que ficam intrigados com este facto – que os descendentes da dissolução e da desordem partilhariam tantas características – salientando que existe alguma aparência de ordem mesmo no mais puro caos. Outros observam que a forma serpentina é uma das formas mais primitivas, talvez sugerindo que, na realidade, no início dos tempos, tais formas eram tudo o que poderia existir. Os próprios multiformes têm pouco a dizer sobre o assunto, o que, talvez ironicamente, apenas aumenta a confusão e a falta de consenso que rodeia a sua espécie. Afinal, se nem mesmo o caos pode ser considerado caótico, não seria essa a forma mais pura de entropia?",
      "size": "Grande",
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
          "precisão 10",
          "anatomia proteana 25"
        ],
        "weaknesses": []
      },
      "attacks": {
        "jt4PpVxiITWfM8ox": {
          "name": "Maxilas",
          "damage": "3d12+16 perfurante"
        },
        "ETwwR7V1iIbvqCuB": {
          "name": "Garra",
          "damage": "2d12+16 cortante"
        },
        "gUMIzpDGWwaygeXn": {
          "name": "Cauda",
          "damage": "2d12+16 contundente"
        }
      },
      "actions": {
        "Mb8JbA884rcKgMkO": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "X5DctZ32pPLyBZnM": {
          "name": "Sentido de entropia (impreciso) 60 pés (18 metros)",
          "description": "Um keketar pode antecipar a presença mais provável de uma criatura através de uma visão sobrenatural de probabilidades e acasos caóticos. Isso lhes concede a habilidade de sentir criaturas dentro do alcance listado. Véu de Privacidade evita que uma criatura seja detectada automaticamente através do sentido de entropia (sem um teste de neutralização)."
        },
        "ZKFDBSkBr0B38G7d": {
          "name": "magias Constantes",
          "description": ""
        },
        "9UvuMlLHVEKID1Jq": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "PeH9Tlr3y5ABJu0g": {
          "name": "Cura Rápida 10",
          "description": ""
        },
        "hZqtsipwFmuBYwC2": {
          "name": "Anatomia Protéica 25",
          "description": "Os órgãos vitais de um keketar mudam e mudam de forma e posição constantemente. Imediatamente após o keketar sofrer dano ácido, elétrico ou sônico, ele ganha a quantidade listada de resistência a esse tipo de dano. Isso dura 1 hora ou até a próxima vez que o proteano sofrer dano de um dos outros tipos (nesse caso, sua resistência muda para corresponder a esse tipo), o que ocorrer primeiro.\nO keketar é imune a efeitos polimórficos, a menos que seja um alvo voluntário. Se estiver cego ou surdo, o keketar se recupera automaticamente no final do próximo turno, à medida que novos órgãos sensoriais crescem para substituir os comprometidos.\nEfeito: Anatomia Protéica"
        },
        "2UNkHFc41bmtixGg": {
          "name": "Ataque reativo",
          "description": ""
        },
        "0rf640gBxRc7gfuM": {
          "name": "Contracorrente Espacial",
          "description": "30 pés (9 metros).\nUma criatura usando uma habilidade de teletransporte dentro da aura ou chegando nela via teletransporte deve ter sucesso em um teste (fortitude, dc:38) de resistência ou desaparecer da existência por [[/gmr 1d4 #rounds]]{1d4 rodadas} antes de completar o teletransporte. A criatura não pode agir, sentir nada ou ser alvo. Se obtiver sucesso, a criatura completa o teletransporte normalmente, mas fica Atordoada 1.\nKeketars são imunes a este efeito."
        },
        "AniyCnlqZmw3IO9L": {
          "name": "Alterar forma",
          "description": "O keketar pode assumir a aparência de qualquer criatura Enorme ou menor. Isso não altera sua velocidade nem seus bônus de ataque e dano com seus golpes, mas pode alterar o tipo de dano que seus golpes causam."
        },
        "aWJTgaTUKotr2LWA": {
          "name": "Contrair",
          "description": "(1d10+15)[concussão], teste (fortitude, dc:42, básico)"
        },
        "KCUHGmNla57hO2ZK": {
          "name": "Remodelar a realidade",
          "description": "Quando o keketar lança Miragem, ele infunde na ilusão uma substância quase real. Criaturas que não descreem na ilusão tratam estruturas e terrenos criados através da magia como se fossem reais, subindo escadas ilusórias, ficando presos em areia movediça ilusória e assim por diante."
        },
        "BudK3JDDVjbWqw8G": {
          "name": "Ataque de onda de dobra",
          "description": "Uma criatura atingida pelas mandíbulas ou golpe de garra de um keketar deve ter sucesso em um teste de resistência (fortitude, dc:36) ou será sujeita a uma Onda de Dobra."
        },
        "QblhIHkvSph67WTI": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "iz8CpHkcAiNnZfvZ": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "i9YzZMqmXmStM7Z1": {
              "name": "Confusão (à vontade)"
            },
            "l1UZUREbjmCUBYbF": {
              "name": "Translocar (à vontade)"
            },
            "zRZZeZva3ClH9YM3": {
              "name": "Movimento irrestrito (constante)"
            },
            "k0gn3GfnDaghAyzJ": {
              "name": "Criação (à vontade)"
            },
            "hhi1VyP0vfAqylda": {
              "name": "Mirage (Veja Remodelar a Realidade)"
            },
            "Z5mSwII4yNBVa0Sq": {
              "name": "Translocar"
            },
            "PueIXntgodLGRS6d": {
              "name": "Truespeech (constante)"
            },
            "JxgWGY0WPlgYpARq": {
              "name": "Teletransporte (à vontade, somente para si)"
            },
            "boMVDT4jAgsJbnVj": {
              "name": "Desintegrar"
            },
            "A0xEQtg8fWGsufnj": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "8vTXTctF0UmpRqUZ": {
              "name": "Quebrar (à vontade)"
            },
            "frQbmD2ucvo2IHxB": {
              "name": "Mente Distorcida"
            },
            "qG1HirXZcVj1Z3Z6": {
              "name": "Confusão"
            },
            "eaLSYD66AQtItL2A": {
              "name": "Metamorfose Amaldiçoada"
            },
            "g2uv0emYBqIHpx2p": {
              "name": "Ira Divina"
            },
            "7LlrBXCerWd653zp": {
              "name": "Canção Insondável"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kraken",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e79693fbbc49c6b7be78f0c430896e29b4e01d096a96c5e6f81a94206da30278",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Kraken",
      "description": "Um kraken é um enorme leviatã parecido com uma lula, com uma inteligência cruel. Ele caça navios, baleias e heróis. O ódio e a inveja que os krakens sentem por Alghollthus, seus rivais, levou muitos krakens a construir seus covis em cidades submersas, onde podem vasculhar tradições antigas e descobrir segredos misteriosos há muito perdidos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [
          "controlado",
          "emoção"
        ],
        "resistances": [
          "frio 10",
          "veneno 20"
        ],
        "weaknesses": []
      },
      "attacks": {
        "FX1GZJoTSgtAlICB": {
          "name": "Braço",
          "damage": "4d10+17 contundente"
        },
        "D0Bef8hMS0mQSDNY": {
          "name": "Tentáculo",
          "damage": "3d10+17 contundente"
        },
        "XLiAwm5JWDoSNIPF": {
          "name": "Bico",
          "damage": "3d10+17 perfurante"
        }
      },
      "actions": {
        "ri68Bk0TcV1k9lqS": {
          "name": "Tempo alterado",
          "description": "Um kraken remodela o clima dentro de um raio de 3 quilômetros dele, com o efeito do ritual de Controle do Clima centrado no kraken e baseado em seu estado emocional, a critério do Mestre. Se o kraken morrer, o tempo volta ao normal imediatamente."
        },
        "DtiXNG3ROuAaBhN3": {
          "name": "Contrair",
          "description": "(2d10+17)[concussão], teste (fortitude, dc:40, básico). Em uma falha no teste, uma criatura que está prendendo a respiração perde [[/gmr 1d4 #Lost rounds of air from Constrict]]{1d4 rounds} de ar."
        },
        "95k2q11INtOhFqCd": {
          "name": "Ataque Duplo",
          "description": "O kraken faz dois ataques com dois braços ou tentáculos diferentes, cada membro visando uma criatura diferente. O Ataque Duplo conta como dois ataques para a penalidade de ataque múltiplo do kraken, mas a penalidade não aumenta até que ambos os ataques sejam feitos.\nSe o kraken posteriormente usar a ação Agarrar, ele agarra qualquer número de criaturas que atingir com Ataque Duplo."
        },
        "heW1rCJfQ2KMmuqd": {
          "name": "Nuvem de tinta",
          "description": "O kraken libera uma nuvem de tinta preta venenosa em um @Template[emanation|distance:80]. Esta nuvem não tem efeito fora da água.\nAs criaturas dentro da nuvem de tinta são expostas ao veneno da tinta kraken e não são detectadas enquanto estão dentro da nuvem.\nO kraken não pode usar Nuvem de Tinta novamente por [[/br 2d6 #Recharge Ink Cloud]]{2d6 rodadas}, e a nuvem se dissipa após 1 minuto."
        },
        "I3pFXc7fvS41popk": {
          "name": "Jato",
          "description": "O kraken se move pela água até 280 pés (84 metros) em linha reta sem desencadear reações."
        },
        "EkSi5KM6hOWO5WxD": {
          "name": "Tinta Kraken",
          "description": "Krakens são imunes a este veneno\nTeste de Salvamento (fortitude, dc:39);\nDuração máxima 10 rodadas\nEstágio 1 4d6[veneno] de dano e Enjoado 1 (1 rodada)\nEstágio 2 5d6[veneno] de dano e Enjoado 2 (1 rodada)"
        },
        "5UO7IHt7Yn75Z9rL": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "RCcD66otbEEUJwke": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "wA4oCOqAmbsIN7Qi": {
              "name": "Resistir à Energia"
            },
            "j2B0o9HQDgwRl8QD": {
              "name": "Ventos punitivos"
            },
            "bTOywO9RTYBgmCfo": {
              "name": "Dominar (somente animais)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mirage-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:235c0f62a5830a97f7565023ec8b98e0f0ce7abc4d4421a342340b3b1f06f9b9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Miragem (Antigo, Feiticeiro)",
      "description": "Os dragões miragem são mestres da magia de ilusão e usam seus poderes para enganar os outros e promover seus próprios planos. Além de suas proezas mágicas, os dragões miragem possuem uma série de recursos adicionais para ajudá-los em caçadas ou enganar os atacantes, como suas escamas camufladas e um sopro alucinatório que pode confundir vários inimigos ao mesmo tempo. Os dragões miragem são figuras vaidosas e egoístas. Em última análise, eles se preocupam mais consigo mesmos do que com os outros.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "fascinado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "EP5MaU6sQliS5DTZ": {
          "name": "Maxilas",
          "damage": "3d10+15 perfurante"
        },
        "87YSOEdnlPfUeHN2": {
          "name": "Garras",
          "damage": "3d6+15 cortante"
        },
        "Yhg16IWJyaM5UijW": {
          "name": "Cauda",
          "damage": "3d8+15 contundente"
        }
      },
      "actions": {
        "N3VyfMfoQe5DSb63": {
          "name": "Camuflar",
          "description": "O dragão pode [[/agir se esconder]] em ambientes naturais mesmo que não tenha cobertura."
        },
        "rLaISXF1UEzlgNVu": {
          "name": "Sentido de Ilusão",
          "description": "Quando o dragão se move dentro de 30 pés (9 metros) de uma ilusão que pode ser desacreditada, ele automaticamente tenta um teste secreto para desacreditar, mesmo que não tenha gasto uma ação para Interagir."
        },
        "o4iFaQcPDYy49SAA": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "PjUGlZciMNB5ad4R": {
          "name": "Defesa Cintilante",
          "description": "Gatilho O dragão é alvo de um ataque\nEfeito O dragão mostra suas escamas iridescentes na criatura desencadeadora para desviar o ataque. O dragão ganha Ocultação contra o ataque desencadeador."
        },
        "9XSp9GMrL4MBcCPF": {
          "name": "Exibição cativante",
          "description": "Frequência uma vez a cada 10 minutos\nEfeito O dragão abre as barbatanas da cabeça, criando uma exibição radiante de cores fascinantes. Cada criatura em @Template[emanation|distance:30] deve ter sucesso em um teste (vontade, dc:41, opções:efeito de área,inflige:deslumbrado,inflige:lentidão) salvar ou ficará Deslumbrada e Desacelerada 1 (ou Desacelerada 2 em uma falha crítica) por 1 rodada. Independentemente do resultado, a criatura fica temporariamente imune à Exibição Cativante por 1 minuto."
        },
        "cuSg2YxJeOWsi3XS": {
          "name": "Respiração Alucinatória",
          "description": "O dragão respira uma nuvem que ataca os sentidos e causa 17d6[mental|options:area-damage] de dano em um salvamento de @Template[cone|distance:50] (check (will, dc:41, options:area-effect)). Uma criatura que falhe no teste também fica Confusa por 1 rodada (1 minuto em caso de falha crítica) e fica temporariamente imune a ser confundida por Respiração Alucinatória por 1 hora.\nO dragão não pode usar Respiração Alucinatória novamente por [[/gmr 1d4 #Recharge Respiração Alucinatória]]{1d4 rodadas}."
        },
        "YGFIBzztMdCKAOGu": {
          "name": "Mordida Pulmonante",
          "description": "O dragão lança a cabeça para frente, fazendo um golpe de mandíbula com alcance estendido de 25 pés (7,5 metros)."
        },
        "5Ta2GgqbQiT1PrJW": {
          "name": "Ataque furtivo",
          "description": "Os Golpes do dragão causam 3d6 de dano de precisão adicional aos alvos Desprotegidos."
        }
      },
      "spellcasting": {
        "QnRechWWGPliClC6": {
          "name": "magias Arcanos Preparados",
          "category": "preparado",
          "spells": {
            "spnhpw2nuDEuSLTO": {
              "name": "Atordoamento"
            },
            "QzQFoBVWjClcIGiW": {
              "name": "Detectar magia"
            },
            "r51Jnz3XUdMbPlcx": {
              "name": "Disfarce Mágico"
            },
            "zeH4ZGz5g4DHAKT8": {
              "name": "Fachada de itens"
            },
            "uEZuQd19ewCkCqzF": {
              "name": "Luz"
            },
            "IKazxMD7BfGrc7Ze": {
              "name": "Lacaio Fantasma"
            },
            "wM6EgaAzdP4xPrlb": {
              "name": "Prestidigitação"
            },
            "b1Q8D9PBlWhpICOt": {
              "name": "Leia aura"
            },
            "XjguzNwh08Ub2MxO": {
              "name": "Ventriloquismo"
            },
            "Vcu55mxzGXsxJsXh": {
              "name": "Incorporar mensagem"
            },
            "EIZQpIlpr9WEl2Yb": {
              "name": "Revelando Luz"
            },
            "P0JW0RKhC35tDNI3": {
              "name": "Veja o invisível"
            },
            "v8nh05PdP746ykgW": {
              "name": "Encantar"
            },
            "rTcH1VMX8x3jqZYs": {
              "name": "Hipnotizar"
            },
            "WY4zCdyFF95oDYNs": {
              "name": "Confusão"
            },
            "Dh2EC1PkXXsAZams": {
              "name": "Forma de Vapor"
            },
            "kYELM80ydB43dnKq": {
              "name": "Visão da Morte"
            },
            "nHxssrYktnTMaG1B": {
              "name": "Falsa Visão"
            },
            "2xT06VS3aMgpbwyI": {
              "name": "Alucinação"
            },
            "qW4ODb0fIl5c2Z0M": {
              "name": "Enviando"
            },
            "EfRZCoDdijv09GWi": {
              "name": "Transporte Telecinético"
            },
            "Lgrjin5HWpV8RBAu": {
              "name": "Enganar"
            },
            "3sYuWM3OGHdlsbrk": {
              "name": "Calamidade Fantasmagórica"
            },
            "mnGBorL7salqDwCE": {
              "name": "Visão Verdadeira"
            },
            "7VDaKsGPRfahM1Ef": {
              "name": "Contingência"
            },
            "qpcDTkvSOUCitI25": {
              "name": "Máscara do Terror"
            },
            "GQm7yrPEvguZAMS8": {
              "name": "Imagem do projeto"
            },
            "kxDt7QOKpjfXRVZA": {
              "name": "Desaparecimento"
            },
            "kXTCWZ7ROAGYBh2V": {
              "name": "Mente Oculta"
            }
          }
        },
        "NzgVuRgGbWE2SrTH": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "XAClejVzvQ6gaog3": {
              "name": "Invenção"
            },
            "p3WN3lOSUGzin4Q1": {
              "name": "Mensagem"
            },
            "cKGQeFiBAqMWWCN1": {
              "name": "Invisibilidade (à vontade)"
            },
            "gEZdho1SCqhDvajU": {
              "name": "Criatura Ilusória"
            },
            "vH3TQfdep5LoEkrk": {
              "name": "Objeto Ilusório (à vontade)"
            },
            "kNrGHpBqCkbxuQ7O": {
              "name": "Cena Ilusória (à vontade)"
            },
            "RYOFS8QFhNhg60w0": {
              "name": "Miragem"
            },
            "CIc82lCAl8cQEyC9": {
              "name": "Padrão Vibrante"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:magma-worm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:93b5abfca4080c21e4d569524000005855045b96911b85d3df65e6566cf5a895",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Verme de magma",
      "description": "Entre os mais perigosos desse tipo estão os vermes do magma ígneo. Além de ser ainda maior que os vermes bentônicos, o verme do magma tem uma propensão para escavar regiões vulcânicas que, ao longo das gerações, infundiram nele uma ligação sobrenatural com o Plano Elemental do Fogo. O coração ardente de um vulcão ativo é um covil atraente para um verme de magma, assim como os extensos campos de rocha derretida encontrados nas profundezas das Terras Negras. Lendas de antigas sociedades anãs e colonos dos Planos Elementais povoando fossos de lava com vermes de magma provavelmente têm alguma base na verdade, embora os métodos usados ​​para manter esses \"vermes de fosso\" contidos - e impedidos de abrir caminho através das fundações da fortaleza - devam ter sido significativos.\nOs vermes de magma às vezes freqüentam áreas na superfície onde o vulcanismo cria fontes termais ou outras características geotérmicas, mas mesmo assim preferem passar a maior parte do tempo escavando o solo em sua busca incessante por sustento. As terras superficiais reivindicadas pelos vermes do magma são notáveis ​​pelas tocas em forma de monte que essas criaturas deixam para trás enquanto cavam.\nOs vermes das cavernas são necrófagos gigantescos que perfuram as profundezas do mundo, comendo qualquer material que encontram. Nomeados por seus habitats distintos, esses vermes são vorazes e exibem capacidades destrutivas impressionantes. Vermes das cavernas de diferentes tipos e habilidades espreitam nos cantos mais remotos do mundo – histórias falam de vermes árticos que vivem em imensas geleiras ou icebergs e vermes graves que escavam os cemitérios de ruínas há muito esquecidas, para citar alguns.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-100": "tremorsensível-impreciso-100"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "fogo"
        ],
        "resistances": [],
        "weaknesses": [
          "frio 15"
        ]
      },
      "attacks": {
        "HGrl3b1F23RjZkR7": {
          "name": "Maxilas",
          "damage": "3d10+18 perfurante; 2d6 fogo"
        },
        "0fQVIqLvgnfSP4JM": {
          "name": "Ferrão",
          "damage": "2d12+18 perfurante; 2d6 fogo"
        },
        "yOxa8PKiBE6PbRBA": {
          "name": "Corpo",
          "damage": "2d10+16 contundente; 2d6 fogo"
        }
      },
      "actions": {
        "IyKWWIgBkLnO2AXB": {
          "name": "Tremorsense (impreciso) 100 pés (30 metros)",
          "description": ""
        },
        "FsFg8KtMHYPQyyIC": {
          "name": "Cura pelo Fogo",
          "description": "Enquanto um verme de magma estiver em contato com um fogo ou corpo de magma pelo menos tão grande quanto ele, ele ganha cura rápida 20. Quando atingido por um efeito de fogo mágico de qualquer coisa que não seja ele mesmo, um verme de magma recupera Pontos de Vida iguais a metade do dano de fogo que o efeito causaria de outra forma."
        },
        "tphsLfLbrYV16pth": {
          "name": "Inexorável",
          "description": "O verme de magma se recupera das condições Paralisado, Lento e Atordoado no final do seu turno. Ele também é imune a penalidades em suas Velocidades e na condição Imobilizado, e ignora terrenos difíceis e terrenos mais difíceis."
        },
        "Y5momV4CWpuw5vhk": {
          "name": "Pele de lama",
          "description": "Frequência uma vez por dia\nGatilho O verme de magma seria afetado por uma condição ou efeito adverso (como Metamorfose Amaldiçoada)\nEfeito O verme do magma anula a condição ou efeito desencadeador, descamando uma camada externa de sua pele. Efeitos de artefatos, divindades ou fontes igualmente poderosas não podem ser evitados desta forma."
        },
        "fifv91vxtwlIpzXx": {
          "name": "Engolir Rápido",
          "description": "Acionar O verme agarra uma criatura\nEfeito O verme usa engolir inteiro."
        },
        "hdZW9dGdp8kUzUjv": {
          "name": "Sopro de Fogo",
          "description": "O verme de magma exala uma explosão de chamas em um @Template[cone|distance:60] que causa 18d6[fire|options:area-damage] de dano a todas as criaturas na área (check (reflex, dc:41, basic, options:area-effect) save).\nEle não pode usar Fire Breath novamente por [[/gmr 1d4 #Recharge Fire Breath]]{1d4 rodadas}."
        },
        "t1G2FbWy88tYUk7w": {
          "name": "Veneno de verme de magma",
          "description": "Teste de salvamento (fortitude, dc:41)\nDuração Máxima 6 rodadas\nEstágio 1 1d6[veneno] de dano e Drenado 1 (1 rodada)\nEstágio 2 2d6[veneno] de dano e 1 drenado (1 rodada)\nEstágio 3 2d6[veneno] de dano e Drenado 2 (1 rodada)."
        },
        "NBXY2jJ5QKUZlI60": {
          "name": "Túnel de rocha",
          "description": "Um verme de magma pode escavar rocha sólida a uma velocidade de 20 pés (6 metros). Ele pode deixar um túnel se desejar, e geralmente o faz."
        },
        "8VCoSCtEbUqhtmnI": {
          "name": "Engula inteiro",
          "description": "Enorme, (3d10+10)[concussão,2d6[fogo]], Ruptura 36"
        },
        "D1ZUrE1107HIW39r": {
          "name": "lixo",
          "description": "O verme realiza um Golpe uma vez contra cada criatura ao seu alcance. Ele pode atacar até uma vez com suas mandíbulas, até uma vez com seu ferrão e inúmeras vezes com seu corpo. Cada ataque conta para a penalidade de ataque múltiplo do verme, mas a penalidade de ataque múltiplo não aumenta até que ele faça todos os ataques."
        },
        "oCe57tAkaWpqe976": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:adamantine-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0e8d124e91c34e3ca0d862a46a69c916e2462c82756de7d15db58cb180d824bd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Adamantino (Antigo)",
      "description": "Os poderosos dragões adamantinos são um dos vários dragões conhecidos como dragões skymetal. A magia inata que flui através desses dragões faz com que eles atraiam metais específicos para seus corpos como ímãs ou, em alguns casos, façam crescer naturalmente esses metais celestes em seus corpos. Os dragões Adamantinos começam suas vidas com escamas resistentes que são naturalmente substituídas por um revestimento adamantino mais espesso e ainda mais resistente à medida que envelhecem. Os dragões Adamantinos são tipicamente firmes e leais. Depois que eles se comprometem com um determinado propósito, mudar de ideia é quase impossível.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)",
        "tremorsense-imprecise-120": "tremorsensível-impreciso-120"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "fey": "feérico",
        "petran": "petran",
        "sakvroth": "sakvroth",
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "paralisado",
          "petrificado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "2p6i5BA3VT0Awpw6": {
          "name": "Maxilas",
          "damage": "3d12+18 perfurante"
        },
        "s64qcOc82MfOM1BV": {
          "name": "Garra",
          "damage": "3d8+18 cortante"
        },
        "T1zx1v2pNRTAUXUg": {
          "name": "Cauda",
          "damage": "3d10+18 contundente"
        },
        "xYDMD5k7o0XYnpVq": {
          "name": "Pedra",
          "damage": "3d8+18 contundente"
        }
      },
      "actions": {
        "iXclwbR0Bu7kLFdn": {
          "name": "Tremorsense (impreciso) 120 pés (36 metros)",
          "description": ""
        },
        "LUwtdpWWfHRKXjmJ": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "eiF3caXCeUyEeCyp": {
          "name": "Abandonar Armadura",
          "description": "Uma vez que o dragão adamantino é reduzido a menos da metade de seus Pontos de Vida, sua resistência é reduzida em 10 e eles ganham um bônus de circunstância de +10 em suas Velocidades."
        },
        "2Fy5iLD2TzN5Y4ks": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:37, opções:efeito de área,inflige:assustado)"
        },
        "Bd6m642VMIE5yoVM": {
          "name": "Formulário Resiliente",
          "description": "Gatilho O dragão é atingido criticamente por uma arma ou ataque desarmado;\nEfeito As escamas duras do dragão evitam ataques mortais. O dragão tenta um xeque (flat, dc:17). Com um sucesso, o ataque desencadeador se torna um golpe normal."
        },
        "Nsq37LYvx8Gc8M1O": {
          "name": "Corpo Adamantino",
          "description": "Os ataques corpo a corpo desarmados do dragão são inflexíveis."
        },
        "S1Ztj3jcXHNboSRl": {
          "name": "Respiração de Avalanche",
          "description": "O dragão arrota uma massa de pedras que causa 15d8[concussão|opções:dano de área] de dano em um salvamento de @Template[cone|distance:40] (verificação (reflexo, dc:40, básico, opções:efeito de área)).\nEles não podem usar Sopro de Avalanche novamente por [[/gmr 1d4 #Recharge Sopro de Avalanche]]{1d4 rodadas}."
        },
        "oIGArcTy5v4hSbt2": {
          "name": "Ataque Escavador",
          "description": "Requisitos O dragão está enterrado\nEfeito O dragão Burrows, então salta do chão, pousando em um ponto dentro de 25 pés (7,5 metros). O dragão desfere um golpe corpo a corpo contra uma criatura ao seu alcance quando ela pousa. Se o Golpe for um acerto crítico, o alvo fica caído."
        },
        "HCxDD7AHLDXLnBaG": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "EkcaWZenNTH0adjS": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro de Avalanche sempre que acerta um golpe crítico com um Golpe."
        },
        "kqrMTY4rXUkU8TAS": {
          "name": "Engolir Rápido",
          "description": "Acionar O dragão agarra uma criatura\nEfeito O dragão usa Engolir Inteiro."
        },
        "GxvACJ69DbxdcfgE": {
          "name": "Túnel de rocha",
          "description": "O dragão pode cavar através de pedra sólida a uma velocidade de 20 pés (6 metros). Eles podem sair de um túnel se desejarem, e geralmente não o fazem."
        },
        "uFP1Yw0V53Uii1mE": {
          "name": "Engula inteiro",
          "description": "Grande, (3d12+14)[concussão], Ruptura 35"
        },
        "2iyCQPtD05LBG8Gz": {
          "name": "Jogue pedra",
          "description": ""
        },
        "gdjy3xyy8xjmihqH": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "U7XnR0V6Ep934osJ": {
          "name": "Derrubar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:aolaz",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0c2164ee4ac8f119e9b372bd4c0ffca3949a9467d3a04a325bd99bbd0d5135de",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Aolaz",
      "description": "Aolazes são grandes feras esculpidas em pedra e metal e magicamente imbuídas da essência da vida. O meio exato de sua criação é um segredo há muito perdido e são tão raros que os estudiosos têm poucas oportunidades de estudar espécimes ativos. Os aolazes mais conhecidos são peças de museu ou relíquias de campos de batalha destruídas ou desativadas há séculos, embora registos fragmentados sugiram que muitos mais foram feitos e podem permanecer, ainda por serem desenterrados.\nA maioria dos aolazes são construídos no formato de grandes animais terrestres, como elefantes, rinocerontes ou dinossauros. Independentemente da criatura específica para a qual um aolaz foi construído, ele não é obrigado a andar pela terra como suas inspirações – ele está imbuído da habilidade mágica de perseguir através da água e até mesmo do ar. Poucos conseguem escapar da ira de um aolaz depois de conquistá-lo.",
      "size": "Imenso",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "sonoro"
        ],
        "resistances": [
          "físico 15 exceto adamantino"
        ],
        "weaknesses": []
      },
      "attacks": {
        "0Y47YuHl29LzryME": {
          "name": "Porta-malas",
          "damage": "5d10+17 contundente"
        },
        "YMLwRoRwaGIKGsjv": {
          "name": "Pé",
          "damage": "5d8+15 contundente"
        }
      },
      "actions": {
        "bEnEcBaXcq0xrckT": {
          "name": "Audição impecável",
          "description": "Um aolaz tem um sentido de audição incrível. Ele pode ouvir qualquer som emitido dentro de 1,0 pés (0 metros) como se estivesse a apenas 5 pés (1,5 metros) de distância da fonte do som, e qualquer som dentro de 1,6 km como se estivesse apenas 30 pés (9 metros) de distância da fonte do som. A audição de um aolaz é um sentido preciso."
        },
        "yKM6d3CSPA4ymKUk": {
          "name": "magias Constantes",
          "description": ""
        },
        "QleXAKxC6oYMhWIK": {
          "name": "Rolar",
          "description": "O aolaz abaixa a cabeça e enrola em uma esfera blindada. Enquanto rola, um aolaz tem AC 44, Fort +37, Ref +29, Will +33 e Speed ​​100 pés (30 metros), mas não pode usar seus ataques de tronco ou sua explosão ultrassônica. Ele pode dar golpes com os pés enquanto rola, mas apenas como parte de um Atropelar. O aolaz pode usar esta ação novamente para desenrolar e retomar sua forma permanente."
        },
        "KmdxRqIdBe3pc6XL": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pa:40, básico)"
        },
        "IZ5Q9oQE8jylYahf": {
          "name": "Explosão Ultrassônica",
          "description": "O aolaz libera uma tremenda explosão de energia sônica de seu tronco em uma @Template[line|distance:150], causando 12d10[sonic|options:area-damage] de dano. A frequência deste som é tal que é completamente imperceptível para os humanóides, mas o dano que causa é demasiado evidente. Cada criatura na área deve tentar um teste de resistência (fortitude, dc:40, opções: efeito de área, efeito de dano, infligir: atordoado).\nO aolaz não pode usar Explosão Ultrassônica novamente por [[/gmr 1d4 #Recharge Ultrasonic Blast]]{1d4 rodadas}.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano e fica Atordoada 1.\nFalha A criatura sofre dano total e fica Atordoada 2.\nFalha Crítica A criatura sofre o dobro de dano e fica Atordoada 3."
        },
        "mHMefxDyPXjW4mKt": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "pE48e3bWFRDs19oA": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "sr3zEIpVnOEylZ3R": {
              "name": "Voar (constante)"
            },
            "v3MNBWrVRN9SQv9V": {
              "name": "Caminhada na Água (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:thulgant",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:205118521a07a9d12fce16e2c8df808e8fc8198bb19c088c322cf56fb9d1af2d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "bandido",
      "description": "Thulgants são qlippoths poderosos e inteligentes criados a partir da alimentação canibal dos augnagars. Embora passem a maior parte do tempo caçando e lutando contra demônios pelo controle das Fendas Exteriores, os bandidos se divertem com uma variedade de diversões, como manter galerias de mortais petrificados ou construir enormes covis semelhantes a colméias cheios de lacaios escravizados. Cada bandido é um horrível emaranhado de membros, com pernas semelhantes a aranhas, tentáculos contorcidos emergindo do topo de sua cabeça e três ferrões semelhantes a escorpiões.\nMuito antes de as criaturas conhecidas como demônios se tornarem a força dominante nas Fendas Exteriores, os qlippoth governavam as inúmeras fendas da Esfera Exterior. Essas criaturas inimigas são uma forma de mal primordial e alienígena que antecede a vida mortal, e também a maior parte da vida imortal. Desde a ascensão do pecado mortal e a expansão associada da vida demoníaca através das Fendas Exteriores, os qlippoth foram levados aos seus lugares mais profundos e fervilham de rancor pela perda de seus reinos. No entanto, em vez de se oporem diretamente aos demônios, os qlippoth voltam-se para a fonte – o pecado mortal – e travam uma guerra sem fim para erradicar todas as criaturas capazes de atos pecaminosos, para que a maré demoníaca possa ser revertida. Para garantir que não reforçam as fileiras dos seus inimigos, eles realizam transformações horríveis nos seus alvos, convertendo as suas vítimas em seres incapazes de discernir o certo do errado; isso os torna incapazes de serem julgados pelos tribunais de Pharasma e, portanto, incapazes de se tornarem demônios. A maioria dos mortais considera os cuidados de um qlippoth muito piores do que qualquer destino que os aguarda na vida após a morte.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano"
      },
      "defenses": {
        "immunities": [
          "controlado",
          "efeitos do medo"
        ],
        "resistances": [
          "mentais 15",
          "físico 15, exceto ferro frio"
        ],
        "weaknesses": []
      },
      "attacks": {
        "ErIhDSVTBd7aGHeC": {
          "name": "Ferrão",
          "damage": "3d12+17 perfurante; 4d6 mental"
        },
        "0q3s792vZI0wANuc": {
          "name": "Tentáculo",
          "damage": "3d8+17 contundente; 3d6 ácido"
        }
      },
      "actions": {
        "P4BV5OJUyj3rfr1E": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "qWb7LRbSfICoEdcJ": {
          "name": "magias Constantes",
          "description": ""
        },
        "ZpwdhSclQeUAlEM1": {
          "name": "Cura Rápida 10",
          "description": ""
        },
        "0dNqhk5KI3nAaTlu": {
          "name": "Caçador de Demônios",
          "description": "O bandido faz com que um demônio dentro de 30 pés (9 metros) sofra o efeito de sua vulnerabilidade pecaminosa."
        },
        "2R71xX6zTcFcPntf": {
          "name": "Maior Constrição",
          "description": "(2d6+17)[concussão,1d6[ácido]], teste (fortitude, dc:40, básico, opções:inflige:inconsciente)"
        },
        "34NmTbXjw24GQVju": {
          "name": "Picada alucinante",
          "description": "Requisitos O bandido atinge o mesmo inimigo com dois golpes consecutivos na mesma rodada\nEfeito O bandido causa (3d12+17)[mental] de dano ao inimigo. Se o inimigo for afetado por veneno bandido, esse veneno ganha a característica virulenta."
        },
        "uY2J1JrUYcVbFp2j": {
          "name": "Exibição impressionante",
          "description": "O bandido se ergue sobre seus membros trêmulos e apresenta seus numerosos tentáculos e ferrões em uma horrível demonstração de horror. As criaturas em um @Template[emanation|distance:30] devem tentar um teste (will, dc:40) de salvamento, após o qual ficam temporariamente imunes a outras Exibições Atordoantes por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica atordoada 1.\nFalha A criatura fica atordoada 4.\nFalha Crítica A criatura fica Atordoada 8."
        },
        "p1rxtsKx33vjytn0": {
          "name": "Veneno Thulgante",
          "description": "Teste de salvamento (fortitude, dc:40)\nDuração Máxima 6 rodadas\nEstágio 1 3d6[veneno] de dano e a vítima ganha um dos seguintes itens aleatoriamente: Desajeitado 1, Debilitado 1 ou Estupefato 1 (1 rodada)\nEstágio 2 6d6[veneno] de dano e a vítima ganha dois dos seguintes itens aleatoriamente: Desajeitado 2, Debilitado 2 ou Estupefato 2 (1 rodada)\nEstágio 3 9d6[veneno] de dano e a vítima ganha todos os três seguintes: Desajeitado 3, Enfraquecido 3 e Estupefato 3 (1 rodada)"
        },
        "1BrHXN7JmOnmyeOk": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "fEKfgiJvpDVUGTI9": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "6cN8U29BNrbPFOy6": {
              "name": "Atordoamento"
            },
            "xCwBjT53m5eJT9Ma": {
              "name": "Detectar magia"
            },
            "CSFQGvW25ao0hwUf": {
              "name": "Movimento irrestrito (constante)"
            },
            "V8L7mMCh2rV29Sdv": {
              "name": "Visão Verdadeira (Constante)"
            },
            "YG7PnzMpsTUPdchv": {
              "name": "Teletransporte Interplanar"
            },
            "dAjoWu1fhgkCd2Pu": {
              "name": "Dissipar Magia"
            },
            "T5AJFOtirxYv9Qou": {
              "name": "Decreto Divino"
            },
            "rh3r8h8vvPD97SCU": {
              "name": "Dor Fantasma"
            },
            "zhfVZunlOYTfhDwI": {
              "name": "Dilema"
            },
            "PbY0sCT3wSlXACbJ": {
              "name": "Petrificar"
            },
            "Mq8wWC82SXOqMo2o": {
              "name": "Calamidade Fantasmagórica"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:adamantine-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e34d54689653194586d5cc992bc9b175f54e84f28ba72d3b03d215eabb9e0d77",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Adamantino (Antigo, Feiticeiro)",
      "description": "Os poderosos dragões adamantinos são um dos vários dragões conhecidos como dragões skymetal. A magia inata que flui através desses dragões faz com que eles atraiam metais específicos para seus corpos como ímãs ou, em alguns casos, façam crescer naturalmente esses metais celestes em seus corpos. Os dragões Adamantinos começam suas vidas com escamas resistentes que são naturalmente substituídas por um revestimento adamantino mais espesso e ainda mais resistente à medida que envelhecem. Os dragões Adamantinos são tipicamente firmes e leais. Depois que eles se comprometem com um determinado propósito, mudar de ideia é quase impossível.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.\nConjuradores Dracônicos\nCada dragão apresenta uma barra lateral sobre dragões conjuradores desse tipo. Para criar um conjurador de dragão, remova as habilidades Draconic Frenzy e Draconic Momentum do dragão e dê a eles os magias descritos na barra lateral. Você pode trocar qualquer número deles por outros magias, desde que mantenha o mesmo número de magias para cada Rank. Você também pode querer aumentar o modificador de Inteligência, Sabedoria ou Carisma do dragão em 1 ou 2 para refletir seu domínio da magia.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)",
        "tremorsense-imprecise-120": "tremorsensível-impreciso-120"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "fey": "feérico",
        "petran": "petran",
        "sakvroth": "sakvroth",
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "paralisado",
          "petrificado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "2p6i5BA3VT0Awpw6": {
          "name": "Maxilas",
          "damage": "3d12+18 perfurante"
        },
        "s64qcOc82MfOM1BV": {
          "name": "Garra",
          "damage": "3d8+18 cortante"
        },
        "T1zx1v2pNRTAUXUg": {
          "name": "Cauda",
          "damage": "3d10+18 contundente"
        },
        "xYDMD5k7o0XYnpVq": {
          "name": "Pedra",
          "damage": "3d8+18 contundente"
        }
      },
      "actions": {
        "iXclwbR0Bu7kLFdn": {
          "name": "Tremorsense (impreciso) 120 pés (36 metros)",
          "description": ""
        },
        "LUwtdpWWfHRKXjmJ": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "eiF3caXCeUyEeCyp": {
          "name": "Abandonar Armadura",
          "description": "Uma vez que o dragão adamantino é reduzido a menos da metade de seus Pontos de Vida, sua resistência é reduzida em 10 e eles ganham um bônus de circunstância de +10 em suas Velocidades."
        },
        "2Fy5iLD2TzN5Y4ks": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:37, opções:efeito de área,inflige:assustado)"
        },
        "Bd6m642VMIE5yoVM": {
          "name": "Formulário Resiliente",
          "description": "Gatilho O dragão é atingido criticamente por uma arma ou ataque desarmado;\nEfeito As escamas duras do dragão evitam ataques mortais. O dragão tenta um xeque (flat, dc:17). Com um sucesso, o ataque desencadeador se torna um golpe normal."
        },
        "Nsq37LYvx8Gc8M1O": {
          "name": "Corpo Adamantino",
          "description": "Os ataques corpo a corpo desarmados do dragão são inflexíveis."
        },
        "S1Ztj3jcXHNboSRl": {
          "name": "Respiração de Avalanche",
          "description": "O dragão arrota uma massa de pedras que causa 15d8[concussão|opções:dano de área] de dano em um salvamento de @Template[cone|distance:40] (verificação (reflexo, dc:40, básico, opções:efeito de área)).\nEles não podem usar Sopro de Avalanche novamente por [[/gmr 1d4 #Recharge Sopro de Avalanche]]{1d4 rodadas}."
        },
        "oIGArcTy5v4hSbt2": {
          "name": "Ataque Escavador",
          "description": "Requisitos O dragão está enterrado\nEfeito O dragão Burrows, então salta do chão, pousando em um ponto dentro de 25 pés (7,5 metros). O dragão desfere um golpe corpo a corpo contra uma criatura ao seu alcance quando ela pousa. Se o Golpe for um acerto crítico, o alvo fica caído."
        },
        "kqrMTY4rXUkU8TAS": {
          "name": "Engolir Rápido",
          "description": "Acionar O dragão agarra uma criatura\nEfeito O dragão usa Engolir Inteiro."
        },
        "GxvACJ69DbxdcfgE": {
          "name": "Túnel de rocha",
          "description": "O dragão pode cavar através de pedra sólida a uma velocidade de 20 pés (6 metros). Eles podem sair de um túnel se desejarem, e geralmente não o fazem."
        },
        "uFP1Yw0V53Uii1mE": {
          "name": "Engula inteiro",
          "description": "Grande, (3d12+14)[concussão], Ruptura 35"
        },
        "2iyCQPtD05LBG8Gz": {
          "name": "Jogue pedra",
          "description": ""
        },
        "gdjy3xyy8xjmihqH": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "U7XnR0V6Ep934osJ": {
          "name": "Derrubar",
          "description": ""
        }
      },
      "spellcasting": {
        "gswbQEU3diJm7Yu5": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "A8BK5OAJHPBRZAkN": {
              "name": "Bolha de ar"
            },
            "GNhG5zlj0EsIwhni": {
              "name": "Explosão Cáustica"
            },
            "CWAKqhlgHRYEh958": {
              "name": "Detectar magia"
            },
            "d2hcLwHsovHgchWl": {
              "name": "Conheça o caminho"
            },
            "ZmKyyRBcGNqzY6IS": {
              "name": "Sigilo"
            },
            "mW25a7XTLye2hRPx": {
              "name": "Vento favorável"
            },
            "Tcm4EnwX5i7j3eBZ": {
              "name": "Videira Emaranhada"
            },
            "6tW77WoJksUwCy9C": {
              "name": "Trilhas desaparecendo"
            },
            "HnuxbvreaMKhZJTS": {
              "name": "Escuridão"
            },
            "C6WkJ5pZVvLDLMLd": {
              "name": "Quebrar"
            },
            "4YYxcZ1e4a2UsZvO": {
              "name": "Caminhada Aquática"
            },
            "1esJiPQoevHt2HaQ": {
              "name": "Ligação à Terra"
            },
            "zuTRdaa7TwaV3P72": {
              "name": "Um com pedra"
            },
            "FCCxg3UUOpwSIbIj": {
              "name": "Lento"
            },
            "pqV6RXsXJPq9LtG7": {
              "name": "Pedra Forma"
            },
            "nFnNvTT6iT4i0E2t": {
              "name": "Movimento desenfreado"
            },
            "hl2QcDkZ6kYyikGm": {
              "name": "Forma de Vapor"
            },
            "BFVMVNTV0FVpxP2S": {
              "name": "Espigão Empalador"
            },
            "kYKimUK2xmOCpAUc": {
              "name": "Passagem Mágica"
            },
            "cvEIfQzVcjAOL5nq": {
              "name": "Fale com pedras"
            },
            "wut87DYZ59aa8Rsz": {
              "name": "Campo da Vida"
            },
            "1WViAR0tF2GyRObl": {
              "name": "Petrificar"
            },
            "XkZx96II2hZUkFb3": {
              "name": "Trepadeiras emaranhadas"
            },
            "EdPpNUNiWY34BcT7": {
              "name": "Máscara do Terror"
            },
            "rNTkccSA9ys64T0u": {
              "name": "Regenerado"
            },
            "VGZ71hVFTpgJSG9u": {
              "name": "Erupção Vulcânica"
            },
            "vIhwGrwu6jQ8ZAoH": {
              "name": "Dessecar"
            },
            "TqZCpzRSI8evDmI0": {
              "name": "Terremoto"
            },
            "V0DttLELbwFtbaxG": {
              "name": "Momento de Renovação"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mirage-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d557898c93227969b2a3b6268f2b44b0834657a0b5b6281adcd1059061ff127b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Miragem (Antigo)",
      "description": "Os dragões miragem são mestres da magia de ilusão e usam seus poderes para enganar os outros e promover seus próprios planos. Além de suas proezas mágicas, os dragões miragem possuem uma série de recursos adicionais para ajudá-los em caçadas ou enganar os atacantes, como suas escamas camufladas e um sopro alucinatório que pode confundir vários inimigos ao mesmo tempo. Os dragões miragem são figuras vaidosas e egoístas. Em última análise, eles se preocupam mais consigo mesmos do que com os outros.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "fascinado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "EP5MaU6sQliS5DTZ": {
          "name": "Maxilas",
          "damage": "3d10+15 perfurante"
        },
        "87YSOEdnlPfUeHN2": {
          "name": "Garras",
          "damage": "3d6+15 cortante"
        },
        "Yhg16IWJyaM5UijW": {
          "name": "Cauda",
          "damage": "3d8+15 contundente"
        }
      },
      "actions": {
        "N3VyfMfoQe5DSb63": {
          "name": "Camuflar",
          "description": "O dragão pode [[/agir se esconder]] em ambientes naturais mesmo que não tenha cobertura."
        },
        "rLaISXF1UEzlgNVu": {
          "name": "Sentido de Ilusão",
          "description": "Quando o dragão se move dentro de 30 pés (9 metros) de uma ilusão que pode ser desacreditada, ele automaticamente tenta um teste secreto para desacreditar, mesmo que não tenha gasto uma ação para Interagir."
        },
        "o4iFaQcPDYy49SAA": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "PjUGlZciMNB5ad4R": {
          "name": "Defesa Cintilante",
          "description": "Gatilho O dragão é alvo de um ataque\nEfeito O dragão mostra suas escamas iridescentes na criatura desencadeadora para desviar o ataque. O dragão ganha Ocultação contra o ataque desencadeador."
        },
        "9XSp9GMrL4MBcCPF": {
          "name": "Exibição cativante",
          "description": "Frequência uma vez a cada 10 minutos\nEfeito O dragão abre as barbatanas da cabeça, criando uma exibição radiante de cores fascinantes. Cada criatura em @Template[emanation|distance:30] deve ter sucesso em um teste (vontade, dc:41, opções:efeito de área,inflige:deslumbrado,inflige:lentidão) salvar ou ficará Deslumbrada e Desacelerada 1 (ou Desacelerada 2 em uma falha crítica) por 1 rodada. Independentemente do resultado, a criatura fica temporariamente imune à Exibição Cativante por 1 minuto."
        },
        "WMdK1rdUjXn9ZjQJ": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "jgWjQm6QarRsD1eE": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega sua Respiração Alucinatória sempre que consegue um acerto crítico com um Golpe."
        },
        "cuSg2YxJeOWsi3XS": {
          "name": "Respiração Alucinatória",
          "description": "O dragão respira uma nuvem que ataca os sentidos e causa 17d6[mental|options:area-damage] de dano em um salvamento de @Template[cone|distance:50] (check (will, dc:41, options:area-effect)). Uma criatura que falhe no teste também fica Confusa por 1 rodada (1 minuto em caso de falha crítica) e fica temporariamente imune a ser confundida por Respiração Alucinatória por 1 hora.\nO dragão não pode usar Respiração Alucinatória novamente por [[/gmr 1d4 #Recharge Respiração Alucinatória]]{1d4 rodadas}."
        },
        "YGFIBzztMdCKAOGu": {
          "name": "Mordida Pulmonante",
          "description": "O dragão lança a cabeça para frente, fazendo um golpe de mandíbula com alcance estendido de 25 pés (7,5 metros)."
        },
        "5Ta2GgqbQiT1PrJW": {
          "name": "Ataque furtivo",
          "description": "Os Golpes do dragão causam 3d6 de dano de precisão adicional aos alvos Desprotegidos."
        }
      },
      "spellcasting": {
        "NzgVuRgGbWE2SrTH": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "XAClejVzvQ6gaog3": {
              "name": "Invenção"
            },
            "p3WN3lOSUGzin4Q1": {
              "name": "Mensagem"
            },
            "cKGQeFiBAqMWWCN1": {
              "name": "Invisibilidade (à vontade)"
            },
            "gEZdho1SCqhDvajU": {
              "name": "Criatura Ilusória"
            },
            "vH3TQfdep5LoEkrk": {
              "name": "Objeto Ilusório (à vontade)"
            },
            "kNrGHpBqCkbxuQ7O": {
              "name": "Cena Ilusória (à vontade)"
            },
            "RYOFS8QFhNhg60w0": {
              "name": "Miragem"
            },
            "CIc82lCAl8cQEyC9": {
              "name": "Padrão Vibrante"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:skulltaker",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a1d2c0df42680dcccd83a19b4ef5f5200f41d045db7be9f6ead0dd70be5756dd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Caçador de Crânios",
      "description": "Descendo de picos enevoados e através de passagens montanhosas uivantes como um vento maligno, o vórtice de ossos conhecido como quebra-crânios é uma manifestação terrível do delírio e da agonia vividos por alpinistas condenados e desbravadores perdidos pouco antes de encontrarem seu fim. Em alguns lugares, um Skulltaker também é conhecido como Saxra.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
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
        "resistances": [
          "perfurando 15",
          "cortando 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "64dsDb6VCwVbCOBD": {
          "name": "Maxilas",
          "damage": "3d10+14 perfurante; 3d6 vazio"
        },
        "RBSzDryfenHBXU42": {
          "name": "Garra",
          "damage": "3d6+14 cortante; 3d6 vazio"
        },
        "ztyTHwNIKhCgnOc2": {
          "name": "Dardo de Osso",
          "damage": "3d8+6 perfurante; 3d6 vazio"
        }
      },
      "actions": {
        "jj8vv07lGAp4FELU": {
          "name": "Conhecimento Esquelético",
          "description": "Um Skulltaker explora as memórias das criaturas cujos ossos compõem seu corpo. Isso lhe confere a habilidade Conhecimento Esquelético, que pode ser usada para Recuperar Conhecimento de qualquer tipo. Além disso, ele pode falar e compreender todos os idiomas conhecidos pelas criaturas cujos ossos compõem seu corpo (normalmente incluindo o Comum e o idioma regional da região natal do Skulltaker).\nO Skulltaker pode usar Skeletal Lore como teste de habilidade principal para o ritual de Memórias Coletivas e pode lançar memórias coletivas sem conjuradores secundários."
        },
        "SHBduQHQxTGNFYyK": {
          "name": "magias Constantes",
          "description": ""
        },
        "AMOJU0wX8r6flwf4": {
          "name": "+1 Status para todos os salvamentos vs. Vitalidade",
          "description": ""
        },
        "i9LmbR4DKZeW0lRN": {
          "name": "Tempestade de Fragmentos",
          "description": "10 pés (3 metros).\nUma nuvem de fragmentos de ossos envolve o tira-crânios. Quando uma criatura se move para a emanação ou começa seu turno lá, a tempestade de fragmentos causa 4d6[cortando,4d6[void]]{4d6 de dano cortante e 4d6 de dano vazio} à criatura, com um teste (reflexo, dc:40, básico) de salvamento.\nSe a criatura tiver resistência ou imunidade a dano de anulação, ou um efeito que a proteja contra efeitos de morte, ou um efeito que a proteja contra a condição condenada ou drenada, a criatura deve primeiro ter sucesso em um teste (vontade, dc:40) de resistência ou terá todos esses benefícios suprimidos por 1 minuto."
        },
        "3w2NERtypkviX5vW": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "o6Y376tDDVyc2Cf8": {
          "name": "Quebra-ossos",
          "description": "Sempre que uma criatura morre dentro de 60 pés (18 metros) de um Skulltaker, o Skulltaker puxa uma parte dos ossos da criatura para sua tempestade de fragmentos.\nA criatura deve ter sucesso em um teste (irá, dc:40) de salvamento ou ascender como Campeão Esquelético em [[/gmr 1d4 #rounds]]{1d4 rounds}. Esses campeões esqueléticos são controlados pelo Skulltaker."
        },
        "1QVkgQh59Pmq5fP3": {
          "name": "Terreno lascado",
          "description": "O Skulltaker faz com que ossos lascados irrompam de todas as superfícies sólidas em uma @Template[emanation|distance:100], exceto superfícies de pedra trabalhada. Uma criatura que se move através dos ossos sofre 10[piercing,10[void]|options:area-damage]{10 de dano perfurante e 10 de dano vazio} para cada 5 pés (1,5 metros) de movimento.\nNa primeira vez em cada rodada, uma criatura sofre dano perfurante desses ossos estilhaçados, ela deve ter sucesso em um teste (reflexo, CC:40, opções: efeito de área, efeito de dano) ou sofrer uma penalidade de circunstância de –3 metros em todos os Deslocamentos por 10 minutos, ou uma penalidade de circunstância de –4,5 metros por 24 horas em uma falha crítica.\nOs ossos permanecem no lugar até que o caçador de caveiras use esta ação novamente ou os ossos sejam removidos manualmente, o que leva 10 minutos para cada quadrado de 1,5 metro.\nEfeito: Solo Lascado\nEfeito: Solo Lascado (Falha Crítica)"
        },
        "JOlynEzl2UrSa16n": {
          "name": "Dreno de Vitalidade",
          "description": "Quando um Skulltaker acerta com um Golpe Corpo a Corpo, o alvo deve ser bem sucedido em um teste (Fortitude, DC:40) ou ficará Drenado 2 e Condenado 1."
        }
      },
      "spellcasting": {
        "Msmv4qRjU8FEJbcm": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "QOOaLzFKDR6OoihF": {
              "name": "Visão Verdadeira (Constante)"
            },
            "5dbOdsbMa8fLeuqB": {
              "name": "Dessecar"
            },
            "XDK7kcLKDyqIkUFV": {
              "name": "Executar"
            },
            "cKNOnxqVcqPfMhvu": {
              "name": "Ventos punitivos"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:terotricus",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2f269ba0f3118e842683235dce12d013ff6f601b3726340ea126e775cb35f064",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Terótrico",
      "description": "O lendário terotricus é um enorme fungo viscoso que vem das Fendas Exteriores. A sua consciência colectiva encapsula regiões inteiras, espalhando-se até onde a sua crescente nuvem de esporos o levar. Depois de penetrar no Universo a partir das Fendas, a agenda de um terotricus é alimentar-se de todas as criaturas vivas, infectando-as com seus esporos, e sua presença pode significar a ruína para qualquer um em seu caminho.\nOs Terotricus se movem expandindo e contraindo rapidamente seus \"corpos\" viscosos, que são capazes de escavar o solo, deslizar pela água e escalar encostas íngremes. Esses gigantes da podridão não precisam viajar para ver seus planos se concretizarem; seus esporos se prendem facilmente aos demônios e outros habitantes das Fendas Exteriores, que por sua vez trazem essa praga para o Universo quando os demônios são convocados.\nQuando um terotricus infecta uma criatura com seus esporos, crescimentos fúngicos em forma de teia começam a aparecer na pele da vítima até cobrirem todo o corpo, momento em que a mente da vítima também é subjugada e curvada à vontade do terotricus. As vítimas favoritas do terotricus incluem animais, elfos e fadas, embora ele fique feliz em infectar qualquer criatura que possa capturar. Cultos de Treerazer ocasionalmente tentam fazer contato com um terotricus, mas tais atos quase sempre resultam simplesmente em uma nova seita de servos contaminados por esporos.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-120": "tremorsensível-impreciso-120"
      },
      "languages": {
        "chthonian": "chthoniano",
        "elven": "elfo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "controlado",
          "doença",
          "paralisado",
          "dormir"
        ],
        "resistances": [
          "fogo 15"
        ],
        "weaknesses": [
          "frio 15",
          "ferro frio 15",
          "santo 15",
          "cortando 10"
        ]
      },
      "attacks": {
        "4Iw8N4ANO4rwmrYg": {
          "name": "Tentáculo",
          "damage": "4d10+18 contundente; 2d6 espiritual"
        },
        "8jF0NZz94zAMhCHA": {
          "name": "Esporos",
          "damage": "4d8+8 veneno; 2d6 espiritual"
        }
      },
      "actions": {
        "TkDV0wPhRzYy8sii": {
          "name": "Tremorsense (impreciso) 120 pés (36 metros)",
          "description": ""
        },
        "qSJwECMRJYL4xDUN": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "xpcbUoWx3vMpIFDi": {
          "name": "Regeneração 25 (desativada pelo frio)",
          "description": ""
        },
        "9YuL1pu4ZHOAaxcZ": {
          "name": "Nuvem de esporos",
          "description": "30 pés (9 metros).\nUma criatura que entra na aura ou inicia seu turno nela fica exposta à praga de esporos."
        },
        "4fyqV0qYe1BZBmnT": {
          "name": "Infestar ambientes",
          "description": "Frequência uma vez por dia\nRequisitos O terotricus está em um pântano ou área florestal\nEfeito O terotricus drena nutrientes das árvores e vegetação rasteira próximas, ao mesmo tempo que os infesta com o crescimento de fungos. Todas as plantas não-mágicas (embora não sejam criaturas vegetais) dentro de um @Template[emanation|distance:60] murcham e brotam mofo e cogumelos viscosos, removendo qualquer cobertura e ocultação fornecida por árvores e vegetação rasteira. Além disso, o terotricus recupera 200[cura,vitalidade]{200 pontos de vida} ​​(este é um efeito de vitalidade curativa)."
        },
        "fvSVZqV8GEHEzMVu": {
          "name": "Praga dos Esporos",
          "description": "Plantas e fungos são imunes.\nTeste de salvamento (fortitude, dc:40)\nEstágio 1 Enfraquecido 2 (1 dia)\nEstágio 2 Enfraquecido 4 e Lento 1 (1 dia)\nEstágio 3 Controlado pelo terotricus (como Dominação; [[/br 5d8 #Duration Controlled]]{5d8 dias})\nEstágio 4 morto"
        },
        "1Vdy1h0xvUBMB9Mg": {
          "name": "Esporos pegajosos",
          "description": "Uma criatura atingida pelos esporos de um Terotricus sofre uma penalidade de –3 metros em todas as suas Velocidades por 1 minuto. Se o Golpe foi um acerto crítico, a criatura também fica Imobilizada até [[/act escape dc=40]]{Escape}.\nEfeito: esporos pegajosos"
        },
        "ZfDN0qrqMsIVdq7W": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "pyVnqo4FLO0RWxrX": {
          "name": "Push 20 pés (6 metros) aprimorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:guthallath",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:992f0d716d1c5912a855f7459827481d8f76058b8a4958dd19e45a9de166201a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Guthallath",
      "description": "Um guthallath é uma enorme construção criada há muito tempo, provavelmente como uma máquina de guerra, por um império há muito esquecido. Com quase 100 pés (30 metros) de altura, esta enorme estátua de pedra normalmente se assemelha a um guerreiro robusto vestindo apenas uma tanga e um solidéu. Poucos viram o corpo inteiro de um guthallath; na maioria das vezes, a relíquia fica enterrada até o pescoço, coberta de musgo e encalhada em um lugar esquecido. No entanto, de vez em quando, um destes arautos da destruição é reactivado em resposta a algum estímulo desconhecido ou a um apelo de mobilização e, quando isso acontece, ai de quem se interpõe no seu caminho.\nEmbora os antigos inimigos de um guthallath provavelmente tenham desaparecido, ele ainda é um mecanismo de pura destruição, projetado para atacar por semanas, até meses. Ele não é inteligente o suficiente para desfrutar ou se arrepender de seus atos e não pode ser fundamentado – ele também não é afetado pela maior parte da magia e é imprevisível na forma como seleciona seus alvos (e as criaturas que poupa).",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [
          "físico 15 exceto adamantino",
          "magias 15 exceto frio, terra, água"
        ],
        "weaknesses": []
      },
      "attacks": {
        "5Yp3kZDHE8gZhhLe": {
          "name": "Punho",
          "damage": "4d12+18 contundente"
        },
        "ZrnTtQzYoMMf79j0": {
          "name": "Pé",
          "damage": "4d8+18 contundente"
        }
      },
      "actions": {
        "yPMc4avP8IHjveQY": {
          "name": "magias Constantes",
          "description": ""
        },
        "VVvneLCIn09BPxX7": {
          "name": "Aura de Erosão",
          "description": "120 pés (36 metros).\nO guthallath corrói a integridade física de todos ao seu redor. Criaturas e objetos na emanação que não sejam guthallath têm sua Dureza e resistências reduzidas em 10.\nNo início de seu turno, uma criatura na área da aura de erosão sofre 6d6[concussão] de dano com um teste de resistência (fortitude, dc:39, básico)."
        },
        "nCvEdtYwtDcpBscl": {
          "name": "Imunidade à Magia",
          "description": "O guthallath é imune a magias de 6º Rank ou inferior e ativações de itens mágicos de 13º nível ou inferior."
        },
        "D0q0aNWo1X51cNe4": {
          "name": "Feixes de Aniquilação",
          "description": "Um guthallath libera dois raios de destruição de seus olhos. Cada feixe é um @Template[line|distance:120]. Tudo em qualquer linha sofre 13d10[untyped|options:area-damage] de dano com um teste de salvamento (fortitude, dc:41, básico, opções:efeito de área).\nUma criatura reduzida a 0 HP é reduzida a um pó fino como o magia Desintegrar. Não há efeito adicional em criaturas em qualquer área onde os raios se sobreponham.\nO guthallath não pode usar essa habilidade novamente por [[/gmr 1d4 #Recharge Annihilation Beams]]{1d4 rodadas}."
        },
        "tDvcon2bK9xEGh90": {
          "name": "Lançamento Mortal",
          "description": "Requisitos O guthallath tem uma criatura agarrada ou contida\nEfeito O guthallath joga a criatura no ar, 100 pés (30 metros) para cima e 50 pés (15 metros) para longe. Se a criatura arremessada cair sobre outra criatura, a criatura sobre a qual ela cair sofre a mesma quantidade de dano de concussão.\nA criatura que está caindo pode tentar um teste de resistência (reflexo, dc:41, básico)."
        },
        "v8RLawIxRUNc3rnR": {
          "name": "Golpes poderosos",
          "description": "Se um guthallath acertar com um ataque e obtiver um 19 natural na jogada do d20, o ataque será um acerto crítico. Isto não terá efeito se o 19 for um fracasso."
        },
        "pSI2QoLhvn9RpREJ": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pa:45, básico)"
        },
        "ByItiXXLE0ZzOvm8": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "qa0M1ZbNy1NNa2x3": {
          "name": "Nocaute aprimorado",
          "description": ""
        },
        "Uzinvon7QqcS48NH": {
          "name": "Push 20 pés (6 metros) aprimorado",
          "description": ""
        }
      },
      "spellcasting": {
        "Z5lrTod89eL9ROFq": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "zHxfOvUJuKUsqaR4": {
              "name": "Aceleração (Constante)"
            },
            "WxXnLt5HTzEPK07R": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fortune-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1ce982a6952d347a384e2ec2b97e789fbb45dc5a8b9af8aa2b2d0af313ab6859",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão da Fortuna (Antigo)",
      "description": "Os dragões da fortuna têm a habilidade inata de aproveitar as energias mágicas brutas que os cercam. Eles usam constantemente essas energias mágicas para fortalecer suas habilidades mágicas e até mesmo seus corpos, pois a energia pode curar feridas. Um dragão da fortuna tem uma constituição típica de um dragão arcano, mas seus corpos apresentam uma característica marcante: seu tesouro. A natureza do dragão de recorrer à magia faz com que moedas, pedras preciosas e, mais notavelmente, itens mágicos se agarrem ao seu corpo como ferro atraído por ímãs. Um dragão extrai constantemente energias mágicas dos itens presos ao seu corpo e utiliza essas energias para lançar magias. As energias mágicas que fluem através de um dragão da fortuna também fluem constantemente através dos itens do dragão e, em muitos casos, os itens derretem com o calor produzido neste processo. Os dragões da fortuna buscam novas experiências. Esse desejo por originalidade leva os dragões da fortuna a abordar visitantes de outras ancestrais com curiosidade, embora esse interesse inicial diminua rapidamente se o visitante não tiver qualidades interessantes.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "dwarven": "anão",
        "petran": "petran"
      },
      "defenses": {
        "immunities": [
          "drenado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "V3RdFn1rzRknyFZk": {
          "name": "Maxilas",
          "damage": "4d10+15 perfurante; 1d6 força"
        },
        "ZtXhjfJCNa4QpidO": {
          "name": "Garra",
          "damage": "1d6 força; 4d6+15 perfurante"
        },
        "l85X7HFMtvq5VzZO": {
          "name": "Cauda",
          "damage": "1d6 força; 4d10+15 contundente"
        }
      },
      "actions": {
        "RvtzkMW1PTqja0gM": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "TeMGPTAgB6CQgUrI": {
          "name": "Aura de Disrupção",
          "description": "120 pés (36 metros).\nO dragão irradia energias perturbadoras que lhes permitem se alimentar de magia. Quando um magia é neutralizado ou interrompido dentro da aura, o dragão recupera um espaço de magia espontâneo gasto e ganha 35 Pontos de Vida temporários que duram 1 minuto."
        },
        "fLPSxVkoQyjEcOhg": {
          "name": "magia de Captura",
          "description": "Acionamento O dragão obtém sucesso ou sucesso crítico em um teste de resistência contra uma magia\nEfeito O dragão tenta capturar uma parte da magia do magia para se alimentar. Eles tentam neutralizar o magia (neutralizar Rank 10, modificador de neutralização [[/r 1d20+37 #Counteract]]{+37}). Se tiver sucesso, o dragão não é afetado pela magia e recupera um espaço de magia espontânea gasto; outros assuntos são afetados pela magia normalmente."
        },
        "Fd9jpCrOyon1zkTb": {
          "name": "Respiração perturbadora",
          "description": "O dragão libera um spray de energias perturbadoras da magia que causa 18d6[força|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (reflexo, dc:45, básico, opções:efeito de área)). As criaturas que falharem ficam Estupefatas 1 (Estupefadas 2 em uma falha crítica) por 1 minuto.\nO dragão não pode usar Respiração Disruptiva novamente por [[/gmr 1d4 #Recharge Respiração Disruptiva]]{1d4 rodadas}."
        },
        "wlFjZPNirGsmZHEX": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "xZbyHDzzCDYB7MD6": {
          "name": "Momento Dracônico",
          "description": "Sempre que consegue um acerto crítico com um Golpe, o dragão escolhe entre recarregar Respiração Disruptiva ou recuperar um espaço de magia espontâneo gasto."
        },
        "i9VTUX1hC7QRu6cr": {
          "name": "Drenar tesouro",
          "description": "Requisitos O dragão está dentro de 60 pés (18 metros) do seu tesouro\nFrequência uma vez por dia\nEfeito O dragão retira poder dos itens mágicos em seu tesouro, recuperando todos os espaços de magia espontânea gastos."
        },
        "HrKiO0jPCr68aaT0": {
          "name": "Compartilhe a riqueza",
          "description": "Requisitos O corpo do dragão está coberto de riquezas (este é normalmente o caso quando o dragão é encontrado pela primeira vez)\nEfeito O dragão balança seu corpo agressivamente, enviando moedas e outras riquezas voando em todas as direções, causando 18d10[concussão|opções:dano de área] de dano com um teste (reflexo, dc:40, básico, opções:efeito de área) salvo a todas as criaturas em um @Template[emanation|distance:50]. O corpo do dragão não estará mais coberto de riquezas."
        },
        "ZSBangxptZQWQrmm": {
          "name": "Mergulho no Tesouro",
          "description": "Requisitos O corpo do dragão não está coberto de riquezas e o dragão está adjacente ao seu tesouro\nEfeito O dragão avança ou se enterra em seu tesouro usando sua velocidade terrestre. Eles se revestem de moedas, itens mágicos e outros tesouros. Este contato com itens mágicos revitaliza o dragão, fazendo com que ele recupere um espaço de magia espontânea gasto.\nO dragão pode se mover através de outras criaturas enquanto se move dessa forma. As criaturas no caminho do dragão, ou acima dele se o dragão Toca, devem ter sucesso em um teste (reflexo, dc:38) de salvamento ou serão empurradas 10 pés (3 metros) (ou empurradas 20 pés (6 metros) e derrubadas em uma falha crítica)."
        }
      },
      "spellcasting": {
        "2ZLsaPJA5gu2RAy4": {
          "name": "magias Arcanos Espontâneos",
          "category": "espontâneo",
          "spells": {
            "EUdeG6pV7AvsMvbp": {
              "name": "Detectar magia"
            },
            "tkQzWdHkAQOzFXJ0": {
              "name": "Leia aura"
            },
            "aTL5hdhAXeigottA": {
              "name": "Cadeia de Relâmpagos"
            },
            "sNVPlrGHgUKc5ABj": {
              "name": "Bola de fogo"
            },
            "HCZoZXU257qlMRFY": {
              "name": "Barragem de Força"
            },
            "pMF6IAk67Qnd2DiA": {
              "name": "Implosão"
            },
            "9LNy0844UeJLnWQe": {
              "name": "Dilema"
            },
            "eOFpmxHj4Kqtf0ig": {
              "name": "Deslizar"
            },
            "AJ1yLigCUPDfpXUg": {
              "name": "Movimento desenfreado"
            },
            "FaVnIgs11nKc3n6Z": {
              "name": "Mente Distorcida"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fortune-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9cb4bcf49c2b2cc3aa986494304e01b020e988d9921b2384901072da33fd1226",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão da Fortuna (Antigo, Feiticeiro)",
      "description": "Os dragões da fortuna têm a habilidade inata de aproveitar as energias mágicas brutas que os cercam. Eles usam constantemente essas energias mágicas para fortalecer suas habilidades mágicas e até mesmo seus corpos, pois a energia pode curar feridas. Um dragão da fortuna tem uma constituição típica de um dragão arcano, mas seus corpos apresentam uma característica marcante: seu tesouro. A natureza do dragão de recorrer à magia faz com que moedas, pedras preciosas e, mais notavelmente, itens mágicos se agarrem ao seu corpo como ferro atraído por ímãs. Um dragão extrai constantemente energias mágicas dos itens presos ao seu corpo e utiliza essas energias para lançar magias. As energias mágicas que fluem através de um dragão da fortuna também fluem constantemente através dos itens do dragão e, em muitos casos, os itens derretem com o calor produzido neste processo. Os dragões da fortuna buscam novas experiências. Esse desejo por originalidade leva os dragões da fortuna a abordar visitantes de outras ancestrais com curiosidade, embora esse interesse inicial diminua rapidamente se o visitante não tiver qualidades interessantes.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.\nConjuradores Dracônicos\nCada dragão apresenta uma barra lateral sobre dragões conjuradores desse tipo. Para criar um conjurador de dragão, remova as habilidades Draconic Frenzy e Draconic Momentum do dragão e dê a eles os magias descritos na barra lateral. Você pode trocar qualquer número deles por outros magias, desde que mantenha o mesmo número de magias para cada Rank. Você também pode querer aumentar o modificador de Inteligência, Sabedoria ou Carisma do dragão em 1 ou 2 para refletir seu domínio da magia.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "dwarven": "anão",
        "petran": "petran"
      },
      "defenses": {
        "immunities": [
          "drenado",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "V3RdFn1rzRknyFZk": {
          "name": "Maxilas",
          "damage": "4d10+15 perfurante; 1d6 força"
        },
        "ZtXhjfJCNa4QpidO": {
          "name": "Garra",
          "damage": "1d6 força; 4d6+15 perfurante"
        },
        "l85X7HFMtvq5VzZO": {
          "name": "Cauda",
          "damage": "1d6 força; 4d10+15 contundente"
        }
      },
      "actions": {
        "RvtzkMW1PTqja0gM": {
          "name": "+2 Status para todos os salvamentos vs. Arcano",
          "description": ""
        },
        "TeMGPTAgB6CQgUrI": {
          "name": "Aura de Disrupção",
          "description": "120 pés (36 metros).\nO dragão irradia energias perturbadoras que lhes permitem se alimentar de magia. Quando um magia é neutralizado ou interrompido dentro da aura, o dragão recupera um espaço de magia espontâneo gasto e ganha 35 Pontos de Vida temporários que duram 1 minuto."
        },
        "fLPSxVkoQyjEcOhg": {
          "name": "magia de Captura",
          "description": "Acionamento O dragão obtém sucesso ou sucesso crítico em um teste de resistência contra uma magia\nEfeito O dragão tenta capturar uma parte da magia do magia para se alimentar. Eles tentam neutralizar o magia (neutralizar Rank 10, modificador de neutralização [[/r 1d20+37 #Counteract]]{+37}). Se tiver sucesso, o dragão não é afetado pela magia e recupera um espaço de magia espontânea gasto; outros assuntos são afetados pela magia normalmente."
        },
        "Fd9jpCrOyon1zkTb": {
          "name": "Respiração perturbadora",
          "description": "O dragão libera um spray de energias perturbadoras da magia que causa 18d6[força|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (reflexo, dc:45, básico, opções:efeito de área)). As criaturas que falharem ficam Estupefatas 1 (Estupefadas 2 em uma falha crítica) por 1 minuto.\nO dragão não pode usar Respiração Disruptiva novamente por [[/gmr 1d4 #Recharge Respiração Disruptiva]]{1d4 rodadas}."
        },
        "i9VTUX1hC7QRu6cr": {
          "name": "Drenar tesouro",
          "description": "Requisitos O dragão está dentro de 60 pés (18 metros) do seu tesouro\nFrequência uma vez por dia\nEfeito O dragão retira poder dos itens mágicos em seu tesouro, recuperando todos os espaços de magia espontânea gastos."
        },
        "HrKiO0jPCr68aaT0": {
          "name": "Compartilhe a riqueza",
          "description": "Requisitos O corpo do dragão está coberto de riquezas (este é normalmente o caso quando o dragão é encontrado pela primeira vez)\nEfeito O dragão balança seu corpo agressivamente, enviando moedas e outras riquezas voando em todas as direções, causando 18d10[concussão|opções:dano de área] de dano com um teste (reflexo, dc:40, básico, opções:efeito de área) salvo a todas as criaturas em um @Template[emanation|distance:50]. O corpo do dragão não estará mais coberto de riquezas."
        },
        "ZSBangxptZQWQrmm": {
          "name": "Mergulho no Tesouro",
          "description": "Requisitos O corpo do dragão não está coberto de riquezas e o dragão está adjacente ao seu tesouro\nEfeito O dragão avança ou se enterra em seu tesouro usando sua velocidade terrestre. Eles se revestem de moedas, itens mágicos e outros tesouros. Este contato com itens mágicos revitaliza o dragão, fazendo com que ele recupere um espaço de magia espontânea gasto.\nO dragão pode se mover através de outras criaturas enquanto se move dessa forma. As criaturas no caminho do dragão, ou acima dele se o dragão Toca, devem ter sucesso em um teste (reflexo, dc:38) de salvamento ou serão empurradas 10 pés (3 metros) (ou empurradas 20 pés (6 metros) e derrubadas em uma falha crítica)."
        }
      },
      "spellcasting": {
        "c1T9AjXCB62QXoKD": {
          "name": "magias Arcanos Preparados",
          "category": "preparado",
          "spells": {
            "eaKxlPHmkoyS11u9": {
              "name": "Arco Elétrico"
            },
            "PRK15EMFzmYXLZde": {
              "name": "Invenção"
            },
            "NwqfWJwFiIKTWvNT": {
              "name": "Graxa"
            },
            "CvPF0deCNVOB7kRt": {
              "name": "Rajada de Vento"
            },
            "sU0CMvbdSeeimAlv": {
              "name": "Fachada de itens"
            },
            "y5USshqecayj8xIA": {
              "name": "Lacaio Fantasma"
            },
            "v36ISsyb0rr1mUuM": {
              "name": "Prestidigitação"
            },
            "guhZpDnkDFMWIspo": {
              "name": "Escudo"
            },
            "S2Eiku7LsTuN8J72": {
              "name": "Mão Telecinética"
            },
            "DTkJoeTiWM9X3T8f": {
              "name": "Invisibilidade"
            },
            "SCTfOlUVQSQau9x6": {
              "name": "Névoa"
            },
            "QMGObw6isWOPuZpY": {
              "name": "Rede"
            },
            "3URPMTZM5tPvjbxv": {
              "name": "Orbe Aquoso"
            },
            "iV33dyAyMoBjfMVg": {
              "name": "Pressa"
            },
            "9ND0AERYCB0umgJl": {
              "name": "Cintilação"
            },
            "Fdzi5Q5kdJqZzPlk": {
              "name": "Translocar"
            },
            "aAcwMFXBfVYeBDD8": {
              "name": "Visão da Morte"
            },
            "hvtsjvq5XEbWddWS": {
              "name": "Nevasca uivante"
            },
            "rzXRDrJThxBUzDKP": {
              "name": "Olho Escoteiro"
            },
            "kmUH5LU9o8NzRzvY": {
              "name": "Nuvem tóxica"
            },
            "kNW4d5PNstVp4jnN": {
              "name": "Metamorfose Amaldiçoada"
            },
            "zjN0hN8GHMcFvJg0": {
              "name": "Teleporte"
            },
            "26QgQCyScQA4LRLc": {
              "name": "Muralha da Força"
            },
            "V6zTRd1lLFfrPHI4": {
              "name": "Contingência"
            },
            "XZ6VY8F1QW26n46o": {
              "name": "Égide Energética"
            },
            "G1X9AfsL4UtyzEwi": {
              "name": "Palácio Planar"
            },
            "hx0md6aEYPPT3cwZ": {
              "name": "Fenda Ártica"
            },
            "GImOKEZ5v2t3s9Mc": {
              "name": "Desaparecimento"
            },
            "83NfsYVKFB0DOJ6o": {
              "name": "Dança Incontrolável"
            },
            "LwAfTHYFDKHdxgac": {
              "name": "Detonar Magia"
            },
            "unL5HOLh5HN5UQzu": {
              "name": "Estrelas cadentes"
            },
            "DUOpHBukKkmQKU5K": {
              "name": "Fantasmagoria"
            }
          }
        },
        "2ZLsaPJA5gu2RAy4": {
          "name": "magias Arcanos Espontâneos",
          "category": "espontâneo",
          "spells": {
            "EUdeG6pV7AvsMvbp": {
              "name": "Detectar magia"
            },
            "tkQzWdHkAQOzFXJ0": {
              "name": "Leia aura"
            },
            "aTL5hdhAXeigottA": {
              "name": "Cadeia de Relâmpagos"
            },
            "sNVPlrGHgUKc5ABj": {
              "name": "Bola de fogo"
            },
            "HCZoZXU257qlMRFY": {
              "name": "Barragem de Força"
            },
            "pMF6IAk67Qnd2DiA": {
              "name": "Implosão"
            },
            "9LNy0844UeJLnWQe": {
              "name": "Dilema"
            },
            "eOFpmxHj4Kqtf0ig": {
              "name": "Deslizar"
            },
            "AJ1yLigCUPDfpXUg": {
              "name": "Movimento desenfreado"
            },
            "FaVnIgs11nKc3n6Z": {
              "name": "Mente Distorcida"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:empyreal-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f9286a66f94c7e311510b265767656bf2511d88cc63e2330ded0fee33fea3476",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Empíreo (Antigo)",
      "description": "Os três principais planos celestiais – Céu, Nirvana e Elysium – têm cada um seus respectivos dragões. Dragões Empíreos têm uma conexão direta com o Céu. Usando as bênçãos do Céu, os dragões empíreos protegem os outros e intercedem contra a maldade. Os dragões empíreos são sábios, atenciosos e compassivos. Ao falar com outras pessoas, os dragões empíreos são pacientes e compreensivos.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-30": "lifesense-impreciso-30",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "profano 15"
        ]
      },
      "attacks": {
        "PLkCVfc8da1kpFaM": {
          "name": "Maxilas",
          "damage": "1d8 espiritual; 4d10+16 perfurante"
        },
        "7Q0vXXKMcdqYWR0t": {
          "name": "Garras",
          "damage": "4d8+16 cortante; 1d8 espiritual"
        },
        "Dwo2UQS3Y2cbaR0u": {
          "name": "Cauda",
          "damage": "1d8 espiritual; 4d10+16 contundente"
        },
        "thc8iQSsjt0P5UbH": {
          "name": "Asa",
          "damage": "1d8 espiritual; 3d10+16 cortante"
        }
      },
      "actions": {
        "arPvj1DbTMkdSiTB": {
          "name": "Lifesense (impreciso) 30 pés (9 metros)",
          "description": ""
        },
        "dWRnyH4wHlRK0NV9": {
          "name": "magias Constantes",
          "description": ""
        },
        "Y6w2lBq7sglsX4fS": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "LLQTiCQhR3zcH4eU": {
          "name": "Deflexão Divina",
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O poder divino intercede, evitando alguns danos. O dragão ganha resistência 10 a todos os danos contra o ataque desencadeador."
        },
        "S375NGCdok3X6iek": {
          "name": "Presença inspiradora",
          "description": "60 pés (18 metros).\nA mera visão de um dragão empíreo motiva outras criaturas. Criaturas dentro da aura ganham +1 de bônus de status em testes de resistência e testes de perícia. O dragão empíreo não pode obter o benefício de sua própria aura ou de outras ações que utilizem a aura, e pode optar por excluir qualquer criatura de qualquer benefício da aura ou ação que utilize a aura."
        },
        "vUZ5gWFlcQncu9SL": {
          "name": "Halo direto",
          "description": "O dragão lança seu halo para um quadrado dentro de 90 pés (27 metros). Enquanto o halo é implantado dessa maneira, o dragão perde sua aura de presença inspiradora e a aura emana do halo com o mesmo raio de emanação. O dragão pode usar Sustentação para recuperar o halo de qualquer distância. O halo é feito de pura luz – não ocupa espaço e não pode ser alvejado ou destruído de forma alguma."
        },
        "1UjhkCYjIvtSrb71": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de asa em qualquer ordem."
        },
        "RnEmahwVd4Kt5m6l": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Espiritual sempre que consegue um acerto crítico com um Golpe."
        },
        "OjT0pleNnNeCjfub": {
          "name": "Pulso Halo",
          "description": "O dragão escolhe um efeito para impor às criaturas em sua aura de presença inspiradora.\nO dragão não pode usar Halo Pulse novamente por [[/gmr 1d4 #Recharge Halo Pulse]]{1d4 rodadas}.\n• Repulsão Cada criatura deve ser bem sucedida em um teste de resistência (fortitude, dc:41) ou será empurrada até que não esteja mais na aura.\n• Restauração (cura, vitalidade) Cada criatura recupera 9d8[cura]{9d8 Pontos de Vida}.\n• Restrição (incapacitação, mental) As criaturas devem ser bem-sucedidas em um teste de resistência (vontade, dc:41) ou sofrerão Redução de velocidade 1 (Redução de velocidade 2 em caso de falha crítica) enquanto permanecerem dentro da aura. Independentemente do resultado, a criatura fica temporariamente imune à restrição por 1 minuto."
        },
        "kvqqiXW7WeNRoofl": {
          "name": "Respiração Espiritual",
          "description": "O dragão libera uma explosão de fogo sagrado que causa 16d8[espírito|opções:dano de área] de dano em um salvamento de @Template[cone|distance:50] (verificação (reflexo, dc:41, básico, opções:efeito de área)).\nO dragão não pode usar Respiração Espiritual novamente por [[/gmr 1d4 #Recharge Respiração Espiritual]]{1d4 rodadas}."
        }
      },
      "spellcasting": {
        "BsBGEo42aDLylS80": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "dZPExCkBhDp7SQj4": {
              "name": "Truespeech (constante)"
            },
            "hFAMAgaBzuoDkhzV": {
              "name": "Luz Sagrada (à vontade)"
            },
            "8NuQrNNDVUquVrY5": {
              "name": "Teletransporte Interplanar (à vontade, somente para si)"
            },
            "DNFsu8UpAUYxjHO5": {
              "name": "Curar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:empyreal-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c15371f963d3d2b74e177ba9f2c4c69e229712d19289854bffb0d5a1eec4573f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Empíreo (Antigo, Feiticeiro)",
      "description": "Os três principais planos celestiais – Céu, Nirvana e Elysium – têm cada um seus respectivos dragões. Dragões Empíreos têm uma conexão direta com o Céu. Usando as bênçãos do Céu, os dragões empíreos protegem os outros e intercedem contra a maldade. Os dragões empíreos são sábios, atenciosos e compassivos. Ao falar com outras pessoas, os dragões empíreos são pacientes e compreensivos.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.\nConjuradores Dracônicos\nCada dragão apresenta uma barra lateral sobre dragões conjuradores desse tipo. Para criar um conjurador de dragão, remova as habilidades Draconic Frenzy e Draconic Momentum do dragão e dê a eles os magias descritos na barra lateral. Você pode trocar qualquer número deles por outros magias, desde que mantenha o mesmo número de magias para cada Rank. Você também pode querer aumentar o modificador de Inteligência, Sabedoria ou Carisma do dragão em 1 ou 2 para refletir seu domínio da magia.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-30": "lifesense-impreciso-30",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "profano 15"
        ]
      },
      "attacks": {
        "PLkCVfc8da1kpFaM": {
          "name": "Maxilas",
          "damage": "1d8 espiritual; 4d10+16 perfurante"
        },
        "7Q0vXXKMcdqYWR0t": {
          "name": "Garras",
          "damage": "4d8+16 cortante; 1d8 espiritual"
        },
        "Dwo2UQS3Y2cbaR0u": {
          "name": "Cauda",
          "damage": "1d8 espiritual; 4d10+16 contundente"
        },
        "thc8iQSsjt0P5UbH": {
          "name": "Asa",
          "damage": "1d8 espiritual; 3d10+16 cortante"
        }
      },
      "actions": {
        "arPvj1DbTMkdSiTB": {
          "name": "Lifesense (impreciso) 30 pés (9 metros)",
          "description": ""
        },
        "dWRnyH4wHlRK0NV9": {
          "name": "magias Constantes",
          "description": ""
        },
        "Y6w2lBq7sglsX4fS": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "LLQTiCQhR3zcH4eU": {
          "name": "Deflexão Divina",
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O poder divino intercede, evitando alguns danos. O dragão ganha resistência 10 a todos os danos contra o ataque desencadeador."
        },
        "S375NGCdok3X6iek": {
          "name": "Presença inspiradora",
          "description": "60 pés (18 metros).\nA mera visão de um dragão empíreo motiva outras criaturas. Criaturas dentro da aura ganham +1 de bônus de status em testes de resistência e testes de perícia. O dragão empíreo não pode obter o benefício de sua própria aura ou de outras ações que utilizem a aura, e pode optar por excluir qualquer criatura de qualquer benefício da aura ou ação que utilize a aura."
        },
        "vUZ5gWFlcQncu9SL": {
          "name": "Halo direto",
          "description": "O dragão lança seu halo para um quadrado dentro de 90 pés (27 metros). Enquanto o halo é implantado dessa maneira, o dragão perde sua aura de presença inspiradora e a aura emana do halo com o mesmo raio de emanação. O dragão pode usar Sustentação para recuperar o halo de qualquer distância. O halo é feito de pura luz – não ocupa espaço e não pode ser alvejado ou destruído de forma alguma."
        },
        "OjT0pleNnNeCjfub": {
          "name": "Pulso Halo",
          "description": "O dragão escolhe um efeito para impor às criaturas em sua aura de presença inspiradora.\nO dragão não pode usar Halo Pulse novamente por [[/gmr 1d4 #Recharge Halo Pulse]]{1d4 rodadas}.\n• Repulsão Cada criatura deve ser bem sucedida em um teste de resistência (fortitude, dc:41) ou será empurrada até que não esteja mais na aura.\n• Restauração (cura, vitalidade) Cada criatura recupera 9d8[cura]{9d8 Pontos de Vida}.\n• Restrição (incapacitação, mental) As criaturas devem ser bem-sucedidas em um teste de resistência (vontade, dc:41) ou sofrerão Redução de velocidade 1 (Redução de velocidade 2 em caso de falha crítica) enquanto permanecerem dentro da aura. Independentemente do resultado, a criatura fica temporariamente imune à restrição por 1 minuto."
        },
        "kvqqiXW7WeNRoofl": {
          "name": "Respiração Espiritual",
          "description": "O dragão libera uma explosão de fogo sagrado que causa 16d8[espírito|opções:dano de área] de dano em um salvamento de @Template[cone|distance:50] (verificação (reflexo, dc:41, básico, opções:efeito de área)).\nO dragão não pode usar Respiração Espiritual novamente por [[/gmr 1d4 #Recharge Respiração Espiritual]]{1d4 rodadas}."
        }
      },
      "spellcasting": {
        "MHJXN6jsqlO4l4bI": {
          "name": "magias Divinos Preparados",
          "category": "preparado",
          "spells": {
            "D0gVHBgBfkxpcai7": {
              "name": "Abençoar"
            },
            "2lzNhIoJe9999lBj": {
              "name": "Detectar magia"
            },
            "K1n2XdiRWY2Bg81v": {
              "name": "Lança Divina"
            },
            "7v3SbGWxWjP9PaJc": {
              "name": "Orientação"
            },
            "V5rpuab1ZpKaCQxw": {
              "name": "Consertando"
            },
            "uITCr1yKC7TIC4Zw": {
              "name": "Santuário"
            },
            "El9BYg4iJIfXJtgZ": {
              "name": "Escudo"
            },
            "9M3wxqHyIdPHopcO": {
              "name": "Estabilizar"
            },
            "7Su93rL1rOqLQM98": {
              "name": "Mente Clara"
            },
            "k3QOI590Y9OM3knN": {
              "name": "Dissipar Magia"
            },
            "s3saQJAPgU513ypB": {
              "name": "Everlight"
            },
            "0y8ivca1u8vZPSPJ": {
              "name": "Compartilhe a vida"
            },
            "ngVjZXFX4tXfLqaC": {
              "name": "Corpo Som"
            },
            "9p5fHitDHqRur7ZC": {
              "name": "Amarrar mortos-vivos"
            },
            "22TRhbpFPLmvOjkA": {
              "name": "Anel da Verdade"
            },
            "2NXRhyoMucb1auTF": {
              "name": "Movimento desenfreado"
            },
            "EArmgAkPxegCkR3S": {
              "name": "Farol Vital"
            },
            "O9yQg6KV0Q1KHUN9": {
              "name": "Sopro de Vida"
            },
            "Cxq6EVHhJdxpeaaq": {
              "name": "Enviando"
            },
            "Bd8O8TfhpKgunH5y": {
              "name": "Campo da Vida"
            },
            "lgrRyGEFE7BRYyQg": {
              "name": "Explosão Espiritual"
            },
            "trzfmjBiyMRmnFUQ": {
              "name": "Decreto Divino"
            },
            "wk6FzPfUuo3xK85b": {
              "name": "Égide Energética"
            },
            "vTls3jDegERUYVBY": {
              "name": "Selo Planar"
            },
            "0UnD8n8XDMy33NHP": {
              "name": "Regenerado"
            },
            "belJyX4lpgkgkPdO": {
              "name": "Raio de sol"
            },
            "UIgWh4D3jJYUqpE9": {
              "name": "Inspiração Divina"
            },
            "BHCMWNc7YzuEcD91": {
              "name": "Momento de Renovação"
            },
            "z92zjXTCWzgoq6IB": {
              "name": "Presença esmagadora"
            }
          }
        },
        "BsBGEo42aDLylS80": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "dZPExCkBhDp7SQj4": {
              "name": "Truespeech (constante)"
            },
            "hFAMAgaBzuoDkhzV": {
              "name": "Luz Sagrada (à vontade)"
            },
            "8NuQrNNDVUquVrY5": {
              "name": "Teletransporte Interplanar (à vontade, somente para si)"
            },
            "DNFsu8UpAUYxjHO5": {
              "name": "Curar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:yamaraj",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:782d026239db9dae9b44a750dd65c353ed78adb8a8f7758734669d8c9d11d321",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Yamaraj",
      "description": "Os maiores juízes entre os psicopompos são os yamarajes, cuja sabedoria é lendária e cujos decretos são inapeláveis, exceto para os porteiros ou para a própria Pharasma. Um yamaraj se assemelha a um imenso dragão com escamas escuras e emplumadas e um olhar desapaixonado e sem emoção por trás de uma máscara de penas. Quando não estão servindo como magistrados seniores, senhores e generais do Pátio dos Ossos, os yamarajes buscam hobbies altamente individualistas, como jardinagem ou literatura.\nOs psicopompos são guardiões e pastores dos mortos no Boneyard, o vasto plano de sepulturas onde as almas mortais são julgadas e enviadas para suas recompensas ou condenações eternas. Os psicopompos garantem que os mortos aceitem sua transição da mortalidade e sejam devidamente classificados para a vida após a morte apropriada. Eles também protegem as almas de serem atacadas por predadores sobrenaturais. Quase todos os psicopompos usam máscaras, especialmente quando estão interagindo com mortais, embora os tipos de máscaras que usam sejam tão variados quanto os próprios psicopompos. As cortes de Boneyard presidem Requian, uma linguagem sombria, porém melódica, falada lentamente com várias mudanças tonais.\nMuitos psicopompos estão intimamente envolvidos com a enorme burocracia do Boneyard. Poucos buscam misericórdia, justiça ou ganho pessoal; seus deveres para com Pharasma e seu Boneyard são supremos. No entanto, os psicopompos individuais interpretam seus deveres de maneiras diferentes, o que pode colocá-los em conflito com os mortais ou mesmo entre si.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-240": "sentido de vida-240",
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
          "doença",
          "eletricidade"
        ],
        "resistances": [
          "nulo 20",
          "veneno 20"
        ],
        "weaknesses": []
      },
      "attacks": {
        "2J8nRu7ryhdxrn6Q": {
          "name": "Maxilas",
          "damage": "4d8+18 perfurante"
        },
        "vOhew2ogdaZmv4TY": {
          "name": "Garra",
          "damage": "4d4+18 cortante"
        },
        "4PAeJHUBsggCTLYw": {
          "name": "Cauda",
          "damage": "4d10+18 contundente"
        }
      },
      "actions": {
        "GZeUcgFbUA7B68BW": {
          "name": "Telepatia 120 pés (36 metros)",
          "description": ""
        },
        "0UKsJtM3fEth21iR": {
          "name": "Lifesense 240 pés (72 metros)",
          "description": ""
        },
        "QB6MLb6aO9rvCPbS": {
          "name": "magias Constantes",
          "description": ""
        },
        "9qk6mNAYWoeUyyd8": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "qfAGiyqMgrNFUoSw": {
          "name": "Cura Rápida 20",
          "description": ""
        },
        "0s0zoTqBFyl1ZTjC": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:39, opções:efeito de área,inflige:assustado)"
        },
        "1ENGsx3BESdgdHnk": {
          "name": "Bebedor relâmpago",
          "description": "Sempre que um yamaraj sofreria dano elétrico se não fosse por sua imunidade, sua cura rápida aumenta para 40 no próximo turno.\nDurante esse turno, se usar Beetle Breath, os besouros causarão 2d12[eletricidade]{2d12 de dano elétrico adicional}."
        },
        "VKysBYdqHBzZ3aOg": {
          "name": "Respiração de besouro",
          "description": "O yamaraj respira uma rajada de besouros em um @Template[cone |\nEle não pode usar Sopro de Besouro novamente por [[/gmr 1d4 #Recharge Sopro de Besouro]]{1d4 rodadas}.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano e fica Enjoada 1.\nFalha A criatura sofre dano total e fica Enjoada 2.\nFalha Crítica A criatura sofre o dobro de dano e fica Enjoada 3."
        },
        "nEZNMODnNpwrnUPC": {
          "name": "Julgamento Final",
          "description": "Os magias de Manifestação de um yamaraj são usados ​​apenas para pronunciar julgamento, normalmente para restaurar a vida de uma criatura morta ou destruída, vincular uma criatura ao Boneyard ou banir uma criatura do Boneyard."
        },
        "LMv9Jl8QyuoKhMpw": {
          "name": "Toque de pastor",
          "description": "Os ataques de um yamaraj afetam criaturas incorpóreas com os efeitos de uma runa de propriedade Ghost Touch e causam 3d6[void] de dano a criaturas vivas e 3d6[vitality] de dano a mortos-vivos."
        },
        "WleXuHzXfn7II29b": {
          "name": "Veneno de Yamaraj",
          "description": "Enquanto uma criatura estiver desajeitada por causa deste veneno, ela estará Condenada com o mesmo valor;\nTeste de salvamento (fortitude, dc:42)\nDuração máxima 10 rodadas\nEstágio 1 3d8[veneno] de dano e Desajeitado 1 (1 rodada)\nEstágio 2 5d8[veneno] de dano e Desajeitado 2 (1 rodada)\nEstágio 3 7d8[veneno] de dano e Desajeitado 3 (1 rodada)"
        },
        "s4eMY3meCcZpGDrL": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "FhV61jMMGaGgOnmc": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "Spjq31pxaogHGJyr": {
              "name": "Sonda Mental (à vontade)"
            },
            "i3OPnBlqnTj1BNFQ": {
              "name": "Translocar (à vontade)"
            },
            "N21nhQea6LBlzdUE": {
              "name": "Cadeia de Relâmpagos"
            },
            "OuOkdbFCbzXkr4uF": {
              "name": "Dissipar Magia"
            },
            "EzR8P4VadQxtDKZh": {
              "name": "Muralha da Força"
            },
            "szpTTglSRPxKxqrf": {
              "name": "Ferir"
            },
            "IOSpy1IjKCTuzppo": {
              "name": "Curar"
            },
            "KoiqbGetyRjJtQSY": {
              "name": "Aproveite a alma"
            },
            "p2QWDEQDpsCG0AQ2": {
              "name": "Explosão Espiritual"
            },
            "xj7T4CUAaXOaBCCj": {
              "name": "Lamentos dos Amaldiçoados"
            },
            "kFY2qLfymd9D70To": {
              "name": "Manifestação"
            },
            "RiSiIOgt4pS0zcPS": {
              "name": "Reavivamento"
            },
            "9qyTnY9xZaDpBznS": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:norn",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d06b96965c471ce5f1e73752def2c6f62bddc2a5c0936e29de0f9ef19fcd269a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Norm",
      "description": "Antigas além da imaginação, as Norns são poderosas mulheres feéricas que têm em suas mãos a manifestação física do destino e do destino na forma de um fio dourado. Eles zelam por toda a vida, intervindo com relutância quando chamados – ou com vingança quando os fios do destino são distorcidos e abusados ​​por seres inferiores. Eles eram figuras imponentes, de altura 14 pés (4,2 metros) e pesando 800 libras.\nO relacionamento de Norns com o Ancião do Primeiro Mundo é complexo. Muitas entre as norns servem Magdh, os Três, o Ancião trino que algumas norns acreditam ser o primeiro triunvirato norn unido em uma entidade, já que Magdh tem três corpos: uma Donzela, uma Mãe e uma Matriarca. Magdh afirma estar observando os fios do destino em busca de algum sinistro cataclismo profetizado e, além de ajudar em suas adivinhações, Magdh espera que as Norns que a servem sigam seus comandos enigmáticos para ajudar a afastar o futuro do abismo. No entanto, as Norns são seres poderosos por si só, capazes de conceder poder divino, e muitos hesitam em servir o semideus enigmático. Essas Norns acham o outro Ancião ainda mais estranho e desafiador para interagir, pois acreditam que, embora o Ancião exerça grande poder, mesmo esses seres poderosos não deveriam ter permissão para interferir no destino tanto quanto desejassem.\nEmbora até mesmo os mais fracos dos Anciões possam destruir uma norn não afiliada com facilidade, eles tendem a obedecer às proclamações e julgamentos das norns quando são pronunciadas. Essas Nornas, por sua vez, usam criteriosamente sua aparente neutralidade. Eles sabem que não devem fazer muitas exigências ao Ancião, para que os caprichosos semideuses não fiquem frustrados. E assim o equilíbrio de poder permanece tênue entre as Norns não afiliadas e os Anciões, como tem acontecido há eras. Norns sabem que é apenas uma questão de tempo até que os Anciões percam o respeito por esta tradição e comecem a agir como bem entendem, apesar dos esforços dos Norns para controlar suas ações mais perturbadoras.\nSeguidores do Destino\nNo Universo mortal, alguns mortais adoram as Norns como divindades, enquanto outros, especialmente bruxas e bardos, as admiram como patronas ou musas. Aqueles que defendem as Norns como divindades são conhecidos como Seguidores do Destino. Norns não desencoraja esta veneração nem se esforça para apoiar tal adoração. Clérigos que veneram norns podem adorar um norn específico ou um triunvirato norn, ou todas as norns como um todo, mas eles ganham os mesmos benefícios independentemente de sua escolha. O símbolo religioso dos Seguidores do Destino é uma tesoura cortando um fio dourado, e suas áreas de preocupação são o destino, o destino e o processo de envelhecimento.",
      "size": "Grande",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "lifesense-120": "sentido de vida-120",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
        "fey": "feérico",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [
          "desprevenido",
          "vazio"
        ],
        "resistances": [],
        "weaknesses": [
          "ferro frio 20"
        ]
      },
      "attacks": {
        "giVESjdTpw33NygU": {
          "name": "Tesouras Norn",
          "damage": "4d4+15 cortante; 6d6 vazio"
        },
        "6oTpSA3IXew7MulO": {
          "name": "Mão do Destino",
          "damage": "4d10+15 vazio"
        }
      },
      "actions": {
        "avWzQnKIoQnTzxDr": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "OLwbn1vkUwxatzY5": {
          "name": "Lifesense 120 pés (36 metros)",
          "description": ""
        },
        "eQAeRO9fMIqYp05Q": {
          "name": "Sentir o Destino",
          "description": "Uma norn rola automaticamente um 20 ao testar a iniciativa."
        },
        "rkxRbGfC97VpayNy": {
          "name": "Triunvirato",
          "description": "Isso funciona como a habilidade Coven, exceto que apenas norns podem se juntar a um triunvirato, e funciona apenas enquanto exatamente três norns fizerem parte do triunvirato. Um triunvirato concede os seguintes magias: Cataclismo, Previsão, Manifestação (uma vez por dia), Identificar e Reavivamento."
        },
        "K5BMaVGszyeB9sm8": {
          "name": "magias Constantes",
          "description": ""
        },
        "guUOsE03Ck5JEoBu": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "3LE8g6DKV4fZYrQq": {
          "name": "Regeneração 20 (desativada por ferro frio)",
          "description": ""
        },
        "D0L9Y3ZIku07uMOk": {
          "name": "Destinado",
          "description": "Quando uma criatura está sujeita a um efeito de fortuna de uma norn e a um efeito de infortúnio de qualquer fonte que não seja uma norn (ou vice-versa), o efeito da norn neutraliza automaticamente o outro efeito e então ocorre normalmente, em vez de os dois efeitos se cancelarem. Se tanto o efeito de fortuna quanto o de infortúnio vierem de um norn, então os dois se anulam normalmente. A critério do Mestre, entidades poderosas relacionadas ao destino ou sorte, como Desna, Magdh ou Pharasma, não podem ter seus efeitos negados por esta habilidade."
        },
        "TNAO4qk6h9SrlrOP": {
          "name": "Severar o Destino",
          "description": "Quando uma norn causa dano nulo com um Golpe, ela recupera 10[cura]{10 Pontos de Vida}. O alvo deve ser bem sucedido em um teste de resistência (fortitude, dc:39) ou ficará Drenado 1 (Drenado 2 em uma falha crítica).\nO dano de vazio adicional causado pelo norn aumenta o valor da condição de drenagem em 1 em caso de falha na resistência (ou em 2 em caso de falha crítica), até um máximo de Drenado 4."
        },
        "EPXehWRhcO5caYov": {
          "name": "Mudar destino",
          "description": "Gatilho Uma criatura dentro de 120 pés (36 metros) tenta um teste de resistência\nEfeito A criatura faz o teste de resistência duas vezes e então o norn decide qual resultado se aplica. Se o norn escolher o teste inferior, isso será um efeito de infortúnio; se ela escolher o resultado mais alto, será um efeito de sorte; se forem iguais, ela decide qual característica aplicar."
        },
        "P92CxO5qbGv9LPbu": {
          "name": "Recortar tópico",
          "description": "Frequência três vezes ao dia\nEfeito A norn produz um fio dourado ligado ao destino de uma criatura dentro de 100 pés (30 metros) dela, e então o corta com sua tesoura. O alvo sofre 100[void] de dano (teste (fortitude, dc:42, básico) de salvamento). Se o alvo for reduzido a 0 Pontos de Vida devido a este dano, o fio é completamente cortado e a criatura morre imediatamente.\nUma criatura morta por Snip Thread não pode ser restaurada à vida, exceto por um ritual de Desejo ou magia similarmente poderosa; ou por intervenção divina. Independentemente do resultado do teste de resistência, uma criatura alvo de Snip Thread torna-se temporariamente imune por 24 horas.\nO norn não pode usar Fio de Corte novamente por [[/gmr 1d4 #Recharge Fio de Corte]]{1d4 rodadas}."
        }
      },
      "spellcasting": {
        "uGwzUQno6xI8LuEU": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "8yB7bnmUbCUMLm8V": {
              "name": "Detectar magia (constante)"
            },
            "8Cyh5kgEm1sJGjci": {
              "name": "Dissipar Magia"
            },
            "MffmA8n8KSdxy46d": {
              "name": "Leia presságios"
            },
            "tu0Zgl6Ep47ewufM": {
              "name": "magia"
            },
            "wBvX6w6QASgeRd0w": {
              "name": "Migração"
            },
            "mqpHtxd7grIvcKXj": {
              "name": "Dilema"
            },
            "Zbh1aD6SkPkZB1jH": {
              "name": "Executar"
            },
            "ykm3PUIuMkRUG4JF": {
              "name": "Fantasmagoria"
            },
            "XRFXDIEpOdtX06EH": {
              "name": "Retrocognição"
            },
            "6QdOZiSxD8oa7zc0": {
              "name": "Tempo de congelamento"
            },
            "ZW4n08Sqqo86nLCM": {
              "name": "Mente Oculta (Constante)"
            },
            "naZaipxgMGhdPCYa": {
              "name": "Visão Verdadeira (Constante)"
            },
            "gARMVLw91Mt9I16C": {
              "name": "Truespeech (constante)"
            }
          }
        },
        "cLCMWdwhY0w3KeZN": {
          "name": "magias de Triunvirato",
          "category": "inato",
          "spells": {
            "INpdI3kieMgE9xaY": {
              "name": "Augúrio"
            },
            "dqOPay67f79vRpqd": {
              "name": "Charme"
            },
            "zYaGkvMqKoqNk93N": {
              "name": "Clariaudiência"
            },
            "oGi6NnVkk6qE4RNn": {
              "name": "Clarividência"
            },
            "HcYjMI285WD5XQl6": {
              "name": "Mensagem de sonho"
            },
            "Qfj8PDDqDYKyPGQE": {
              "name": "Disfarce Ilusório"
            },
            "phyfMb2xBnMAzkvn": {
              "name": "Cena Ilusória"
            },
            "wI6nHk4BhJlggg8V": {
              "name": "Olho Escoteiro"
            },
            "sSQqw25fqNA1aZQc": {
              "name": "Cadáver Falante"
            },
            "XWWSkHUBM2RWIWNb": {
              "name": "Metamorfose Amaldiçoada"
            },
            "s3xky2174Vuhd6Vz": {
              "name": "Identificar"
            },
            "10VvTpISG24koyVB": {
              "name": "Previsão"
            },
            "LOIueQPLAZR48Foa": {
              "name": "Cataclismo"
            },
            "URYaFPLkQcPg76zY": {
              "name": "Manifestação"
            },
            "tR3bAd4LjSstJdm8": {
              "name": "Reavivamento"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:nessari",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3a00734e3da53d72ecb3e2cf748f8c76ea254eb7aa9e307e975d40e8d079d67c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Nessari",
      "description": "Quando um exército de demônios invade para banhar uma região com derramamento de sangue e fogo do inferno, é provável que um dos nessaris tenha planejado a incursão. Astutos, poderosos e implacáveis, os nessaris muitas vezes servem diretamente aos arquidiabos. Eles governam ducados infernais, subjugam mundos mortais e usurpam rivais infernais usando despotismo incomparável e ferocidade calculada. Para concretizar suas maquinações tirânicas, os nessaris reivindicam almas mortais que eles corrompem em servos ort, que podem então ser moldados e transformados através da manipulação infernal nos terríveis demônios que formam as formidáveis ​​legiões do Inferno. Eles frequentemente selecionam as forças mais perversas e cruéis para seus exércitos, recorrendo à depravação desses demônios menores durante poderosas cerimônias mágicas para criar abominações hediondas e aterrorizantes que podem intimidar e eviscerar os inimigos do nessari.\nCada nessari é criado nas profundezas das entranhas de pesadelo de Nessus, a nona camada do Inferno, para servir aos caprichos dos arquidiabos e duques infernais. Aqueles nessaris que não deixam Nessus para comandar legiões infernais nas camadas superiores do Inferno muitas vezes formam as cortes da elite do Inferno, reunindo amigos e seitas que moldam o cenário político do Inferno através de subterfúgios e manipulação. Mas muitos nessaris se consideram encarnações vivas do fogo do inferno, a ira abrangente do Inferno, e portanto preferem habitar em reinos consumidos pelo fogo. Em Avernus, Dis, Malebolge, Nessus e Phlegethon, nessaris constroem vastas cidadelas de enxofre envoltas em chamas para dominar.\nEm vez de estarem acima das constantes lutas pelo poder das fileiras diabólicas, os nessaris estão no meio dela. Até mesmo esquemas apocalípticos para conquistar ou despojar mundos mortais geralmente começam com um desejo de conquistar um único Rank na hierarquia imortal do Inferno. Por esta razão, o melhor, mas também o mais perigoso, aliado contra um nessari é o nessari próximo a ele.\nNessaris eleva-se sobre outros demônios, medindo pelo menos 16 pés (4,8 metros) de altura, pesando mais de 1.000 libras e brandindo envergadura superior a 20 pés (6 metros).\nDuques Infernais\nMembros de elite da infraestrutura política e hierarquia de liderança do Inferno, os duques do Inferno são escolhidos entre os demônios mais tirânicos, opressivos e coniventes. Embora nem todos os duques infernais sejam nessaris, a disposição natural de um nessari para a conquista e a opressão muitas vezes os torna candidatos ideais para esta posição. Para criar um duque infernal, ajuste o nessari para estar entre o 21º e o 25º nível. Por causa de suas proezas físicas, natureza manipuladora e poderosas habilidades de lançamento de magias, os duques infernais são excelentes vilões para campanhas de longa duração.\nMestres da corrupção e arquitetos da conquista, os demônios procuram tentar a vida mortal para se juntarem à sua busca por todas as coisas profanas e espalhar a tirania por todos os mundos. As tentações que eles oferecem aos mortais vão desde grandes poderes concedidos pela assinatura de um contrato infernal até favores distorcidos após uma promessa sussurrada a um patrono diabólico, ou qualquer outra troca ainda mais sutil. Aqueles que sucumbem a essas tentações são condenados a uma vida após a morte de tormento sem fim nas profundezas do Inferno, onde a única esperança de fuga reside na chance de serem promovidos a se tornarem demônios nas fileiras infernais.\nCada demônio tem um papel específico a desempenhar na manutenção da máquina burocrática implacável que é o Inferno, desde soldados e estudiosos até inquisidores, advogados, juízes e algozes. Orts inferiores realizam trabalho subserviente a demônios mais poderosos e especializados, como infantaria e demônios contratados, enquanto os maiores nessaris comandam exércitos infernais inteiros.\nAsmodeus está no ápice da estrutura que ele criou, mas as camadas abaixo dele são marcadas por uma constante disputa por posição. A maioria dos planos diabólicos serve, em última análise, para melhorar o lugar do conspirador na hierarquia.",
      "size": "Grande",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
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
          "físico 15 exceto prata",
          "veneno 15"
        ],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "mh9LAEOA50HTVL1T": {
          "name": "Maxilas",
          "damage": "4d10+17 perfurante"
        },
        "HvKkuW09C9ugdKrX": {
          "name": "Garra",
          "damage": "4d6+17 cortante; 2d6 espiritual"
        },
        "J3HCGhXaQnSxfglZ": {
          "name": "Cauda",
          "damage": "4d10+17 contundente"
        },
        "NUuZmLjmz4NPx29q": {
          "name": "Asa",
          "damage": "4d6+17 cortante"
        }
      },
      "actions": {
        "KLX51VJomJOpNAgE": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "yk9pyF9iVrRoe307": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "D5HDqkSWA0AZ7YAh": {
          "name": "magias Constantes",
          "description": ""
        },
        "uDEIHmI6TZbQLzHX": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "tzsc7ldZ2eR2z0XM": {
          "name": "Regeneração 30 (Desativada por Sagrado)",
          "description": ""
        },
        "tKTCH6a5g78miSHu": {
          "name": "Aura do Comandante",
          "description": "100 pés (30 metros).\nCriaturas profanas comandadas ou aliadas na aura de nível inferior ao do nessari ganham um bônus de circunstância de +1 para jogadas de ataque, jogadas de dano, CA, testes de resistência e testes de perícia.\nEfeito: Aura do Comandante"
        },
        "W6dNim4KEjBzAlMj": {
          "name": "Presença assustadora",
          "description": "20 pés (6 metros). verificar (vontade, dc:42, opções:efeito de área,inflige:assustado)"
        },
        "Vuf9BuaOfWRDE1dg": {
          "name": "Ataque Reativo (Especial)",
          "description": "O nessari pode realizar um Ataque Reativo quando uma criatura ao seu alcance usa uma ação concentrada, além do gatilho normal. O diabo pode interromper o desencadeamento de ações concentradas e interromper as ações em qualquer acerto, não apenas em um acerto crítico."
        },
        "lgo6Chb44AWipQBi": {
          "name": "Contrair",
          "description": "(2d10+17)[concussão], teste (fortitude, dc:43, básico)"
        },
        "I2ll4xGsFEeBgdRL": {
          "name": "Ataque rápido",
          "description": "O nessari voa e dá um golpe de asa em qualquer ponto durante seu movimento."
        },
        "5CiCYm71I6kB4UPC": {
          "name": "Fundição acelerada magistral",
          "description": "Frequência uma vez por rodada\nEfeito Se a próxima ação do nessari for lançar uma magia inata de 8º Rank ou inferior, reduza o número de ações para lançá-la em 1 (mínimo de 1 ação)."
        },
        "6THNxAaI4CZSj0oW": {
          "name": "Veneno Nessari",
          "description": "Teste de salvamento (fortitude, dc:43)\nDuração máxima 10 rodadas\nEstágio 1 6d6[veneno] de dano e Drenado 1 (1 rodada)\nEstágio 2 7d6[veneno] de dano e Drenado 2 (1 rodada)\nEstágio 3 8d6[veneno] de dano e Drenado 3 (1 rodada)"
        },
        "YpgcfJpD1jMhcu1X": {
          "name": "Demônios de Forma",
          "description": "O nessari transforma um grande número de orts dentro de uma emanação de 600 pés em demônios mais poderosos para aumentar as legiões do Inferno. O nessari deverá ter disponível a quantidade de sobras listada na tabela abaixo.\nNível do Diabo | Número de Orts |\n4 ou inferior | 4 |\n5-6 | 8 |\n7-8 | 16 |\n9-10 | 32 |\n11-12 | 64 |\n13-14 | 128 |\n15-16 | 256 |\n17-18 | 512 |\n19-20 | 1.024 |\nO nessari pode moldar 100 orts por dia, até um máximo de 1.100 orts em 11 dias. Os demônios criados desta forma são escravos do nessari e seguem suas ordens, com exceção dos nessaris criados ou outros demônios de poder semelhante, que são sempre independentes. Como resultado, poucos nessaris optam por criar pares. No final da atividade Shape Devils, o nessari tenta uma verificação incrivelmente difícil (religião) do nível do diabo desejado, com os resultados a seguir.\nSucesso Crítico O nessari molda dois demônios a partir dos restos concentrados em vez de um.\nSucesso O nessari molda um demônio do tipo e nível desejado.\nFalha O diabo moldado a partir dos restos está 2 níveis abaixo do diabo pretendido.\nFalha Crítica O nessari não consegue moldar nenhum demônio e atrai a ira de um arquidiabo por seu desperdício de recursos."
        },
        "uT4KswZKvsTixIVs": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "IsRnnfl27oJF1UGY": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "h4xUhqjIMpZJD3gs": {
              "name": "Translocar (à vontade)"
            },
            "2E9tmCVInGm6evcP": {
              "name": "Translocar"
            },
            "ZSNdsMrtDj0biKjg": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "fLRkrvxgSaPQJvJb": {
              "name": "Decreto Divino (à vontade)"
            },
            "CMnDUZ4PLSAkVFTy": {
              "name": "Bola de fogo (à vontade)"
            },
            "mVVuQxeU612W5yeh": {
              "name": "Vidência"
            },
            "BFXx4LFb1xSl92xx": {
              "name": "Visão Verdadeira (Constante)"
            },
            "j6zLd6qi8lJefGFJ": {
              "name": "Parede de Fogo (à vontade)"
            },
            "coAz3ihocOuPEwR1": {
              "name": "Aproveite a alma (à vontade)"
            },
            "5Da61QI56W0gDXHL": {
              "name": "Estrelas cadentes"
            },
            "TY5NM4GqJ1QYCO55": {
              "name": "Manifestação"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pleroma",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a8c260169f3bc70a348a05abdcc41f8039bfb1c5935d8d55e8e749c6ba6a2d95",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Pleroma",
      "description": "Entre os mais poderosos de todos os verdadeiros aeons, os pleromas são a manifestação máxima da dualidade de criação e destruição. A sua manifestação física é um estado constante de fluxo entre estes dois extremos; suas formas são envoltas em um manto negro da noite, onde galáxias e outros objetos celestes entram e desaparecem a cada momento, como se retratassem a vida, a morte e o renascimento constantes de um universo em miniatura e autocontido.\nOs Pleromas veem o multiverso como eterno e cíclico, condenado e maleável, terminando apenas se esses ciclos se tornarem desequilibrados. Eles acreditam que a Convergência atual é necessária para obter este equilíbrio essencial e agem para garantir que o grande projeto da Mônada seja executado nos mínimos detalhes.\nOs Aeons sempre foram os zeladores da realidade e os defensores da ordem natural do equilíbrio. Cada tipo de aeon assume alguma forma de dualidade em sua manifestação e funciona de alguma forma para moldar o multiverso dentro dos aspectos dessa dualidade, ou para corrigir desequilíbrios na ordem perfeita de existência. As maquinações de Aeons podem levantar uma nação, arrasá-la ou restaurá-la da ruína. As suas razões são próprias e raramente partilham as suas motivações com os outros – através do seu estranho modo de comunicação visionário, eles simplesmente criam os resultados que insistem ser necessários para manter o equilíbrio do multiverso.\nComo resultado das recentes mudanças na realidade, eras começaram a reafirmar uma presença na cidade plana perfeita do Eixo. Durante eras, este é apenas o último de um ciclo recorrente, embora um ciclo que os mortais ainda não testemunharam. Os Aeons têm um nome para este retorno cíclico, no qual dão as boas-vindas aos seus industriosos irmãos axiomitas de volta ao seu rebanho: a Convergência. No início da Convergência, um conselho de aeons pleroma apareceu na Cidade Eterna do Eixo, onde revelaram que os axiomitas eram aeons rebeldes, separados há muito tempo para prosseguir o ato de criação. Com o último ciclo de mudanças, chegou a hora dos axiomitas – e de suas criações e parentes mortais – se juntarem novamente à causa do aeon. Enquanto a maioria dos axiomitas se alinhou, percebendo talvez num nível fundamental de realidade que o que os aeons disseram era a verdade, alguns recusaram-se a atender ao chamado e esperaram pela ira dos aeons. Essa ira ainda está por vir. Os éons de natureza dupla responderam àqueles que declinaram de maneiras confusas. Com alguns eles tratam e até negociam, enquanto um punhado de outros eles destruíram, e alguns foram exterminados pelos axiomitas. Mas eles deixam a maioria destes insurgentes silenciosos em paz, permitindo que estes axiomitas continuem a criar em paz. Como – ou se – esta Convergência terminará é tão pouco compreendido quanto os próprios éons.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-120": "lifesense-impreciso-120",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "vitalidade",
          "vazio"
        ],
        "resistances": [],
        "weaknesses": [
          "espírito 20"
        ]
      },
      "attacks": {
        "zySTGNLYlP6ZsU1E": {
          "name": "Toque da Criação",
          "damage": "5d8+16 vitalidade"
        },
        "YUTApeXyU0NxK6eo": {
          "name": "Toque de Destruição",
          "damage": "5d8+16 vazio"
        }
      },
      "actions": {
        "99Cd71z8VqlNcRlF": {
          "name": "Prevendo",
          "description": "100 pés (30 metros)\nUm pleroma pode se comunicar mentalmente com qualquer criatura na aura usando projeções psíquicas sem palavras. Eles não precisam compartilhar um idioma, embora o significado do aeon para os não-aeons possa ser vago e muitas vezes misterioso. Um aeon pode usar essa habilidade para se comunicar perfeitamente com qualquer outro aeon no mesmo plano que ele."
        },
        "W7QEmXoDcc9c87sk": {
          "name": "Lifesense 120 pés (36 metros)",
          "description": ""
        },
        "9kBKtuPpfmaD9ryP": {
          "name": "magias à vontade",
          "description": ""
        },
        "2byLKfdbwYaWk0dH": {
          "name": "magias Constantes",
          "description": ""
        },
        "3M67E95wIHzmtnck": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "4lmUV3jKmzitWpqc": {
          "name": "Regeneração 20 (Desativada pelo Espírito)",
          "description": ""
        },
        "n8BVjvUXXVJkp5pA": {
          "name": "Torção da realidade",
          "description": "Gatilho O pleroma falha criticamente em um teste de resistência\nEfeito A falha crítica torna-se uma falha normal."
        },
        "U2tR8Q1CtVF8rXKj": {
          "name": "Gerar Esfera",
          "description": "O pleroma manifesta uma esfera de energia com 60 centímetros de diâmetro - uma esfera branca de criação que paira sobre a mão esquerda ou uma esfera negra de esquecimento acima da direita. Esta ação tem o traço de vitalidade para uma esfera de criação ou o traço de vazio para uma esfera de esquecimento. Uma esfera desaparece após 1 minuto, quando está a mais de 300 pés (90 metros) do pleroma, ou quando o pleroma gera uma esfera desse tipo novamente. Uma esfera de esquecimento desaparece quando desaparece, mas uma esfera de criação explode em uma luz ofuscante – cada criatura em um @Template[emanation|distance:30] deve ter sucesso em um teste (fortitude, dc:43) ou ficará permanentemente cega. Este é um efeito de luz."
        },
        "HkdKeka0PlRbo6fe": {
          "name": "Esfera de Propulsão",
          "description": "Requisitos O pleroma possui uma esfera de criação ou esfera de esquecimento ativa\nEfeito O pleroma faz uma de suas esferas voar 10 pés (3 metros) em qualquer direção, ignorando terrenos difíceis e terrenos mais difíceis. Uma esfera de criação cria uma nova matéria em seu caminho, que o pleroma pode manifestar como terreno normal, terreno difícil, terreno ainda mais difícil ou um cubo de matéria sólida (como argila, madeira ou pedra). Uma esfera do esquecimento destrói objetos abandonados que toca, embora objetos maiores sejam destruídos a uma taxa de um cubo de 3 metros por rodada de contato. A esfera pode entrar no espaço de uma criatura; quando isso acontece, a criatura sofre 20d6 de dano com um teste de resistência (fortitude, dc:43).\nEste é um efeito de incapacitação.\nSucesso A criatura não sofre dano e é empurrada para fora da esfera, para o espaço aberto mais próximo, à escolha do Mestre.\nFalha A criatura sofre dano total; isso representa 20d6[vitality]{vitality} de dano para uma esfera de criação ou 20d6[void]{void} de dano para uma esfera de esquecimento, mas pode causar dano a qualquer tipo de criatura, independentemente de suas imunidades normais. A criatura é então empurrada para fora da esfera com um sucesso. Uma criatura reduzida a 0 HP é morta em vez de ser empurrada para fora, seja fundida com nova matéria para uma esfera de criação ou completamente destruída para um vazio de esquecimento; a criatura só pode ser restaurada por meio de um ritual de Desejo ou de um efeito similarmente poderoso. Este é um efeito de morte.\nFalha Crítica Como falha, mas a criatura sofre o dobro do dano."
        }
      },
      "spellcasting": {
        "dzWvSinCbMaYI4A9": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "0kO0Wih3bgTar602": {
              "name": "Crie água (à vontade)"
            },
            "qtvcqkQX5JiEKopv": {
              "name": "Chicote de vitalidade"
            },
            "5f147I1RaUAn8ntc": {
              "name": "Distorção do Vazio"
            },
            "0NAnUBf5aNLZuTmY": {
              "name": "Moldar madeira (à vontade)"
            },
            "Pm2TidU4DVECCKki": {
              "name": "Hipercognição (à vontade)"
            },
            "1SbAsNj7buR1Ob6N": {
              "name": "Crie comida (à vontade)"
            },
            "oii6iYCEMBr2f8E4": {
              "name": "Pedra moldada (à vontade)"
            },
            "623mvPE6zCtezQBB": {
              "name": "Movimento irrestrito (constante)"
            },
            "mV2TcbImArncYN8J": {
              "name": "Criação (à vontade)"
            },
            "OsCl8TNW7TXzhPbv": {
              "name": "Teletransporte Interplanar"
            },
            "b58s8ffCdqyjwc5W": {
              "name": "Retrocognição"
            },
            "NYw2ijQmvPFPlExy": {
              "name": "Desintegrar"
            },
            "tDQB5z1MMFLyxoeD": {
              "name": "Visão Verdadeira (Constante)"
            },
            "fwtXpWk9VhAMNnE2": {
              "name": "Observação implacável"
            },
            "BePclCVQ5iCFOgrR": {
              "name": "Banimento"
            },
            "qr4KqgQyNhexcLVK": {
              "name": "Fronteira Abençoada"
            },
            "hAWO0aN8ZN8fGZhV": {
              "name": "Detonar Magia"
            },
            "NjuMYAUEGA115mKm": {
              "name": "Presença esmagadora"
            },
            "nVMTboErTev3VFtY": {
              "name": "Manifestação"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:vrolikai",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a8f7ef6f819f839a83bbabf08234bd002d8dad02501d32ed2cfa80a1793a7abd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Vrolikai",
      "description": "Os poderosos vrolikais comandam os exércitos indomados dos demônios, unindo-os por trás de seu desejo unificador de morte e destruição. Ao contrário de outros demônios, os temidos vrolikai não se formam diretamente de uma única alma – eles se manifestam quando um demônio devora tantas almas condenadas que seus próprios desejos individuais se perdem na cacofonia pecaminosa. Um vrolikai que sobrevive a esse processo ganha grande poder e pode reivindicar uma região das Fendas Exteriores como seu próprio domínio.\nA aceitação entusiástica da multidão de pecados por parte dos Vrolikais os torna especialmente adequados para liderar e unir demônios, de modo que até mesmo os Lordes Demônios muitas vezes precisam confiar nos vrolikais para comandar suas forças. As motivações caóticas e conflitantes dos demônios deixam pouco espaço para encontrar um terreno comum, mas os vrolikai podem expor a beleza de todo tipo de pecado enquanto marcham com exércitos demoníacos para a batalha.\nQuando uma alma mortal pecaminosa é julgada e enviada para as Fendas Exteriores, ela pode se tornar um demônio mortal – um demônio. Os demônios são encarnações vivas do pecado - sejam pecados clássicos como a ira ou a gula, ou depravações mais \"especializadas\", como a obsessão pela tortura ou o ato de traição ou traição. Uma vez formado, os objetivos motrizes de um demônio são duplos: acumular poder pessoal e corromper as almas mortais para torná-las contaminadas pelo pecado. Desta forma, os demônios garantem um suprimento interminável de novos demônios para reforçar suas fileiras cada vez maiores nas Fendas Exteriores.\nOs demônios são criaturas egoístas e egocêntricas, e acreditam firmemente que os mortais apenas fingem ser mais virtuosos do que os demônios. Eles gostam de tentar os mortais para a condenação, tanto para satisfazer seus egos quanto para aumentar seus exércitos. Como muitos outros demônios, uma das grandes recompensas desta manipulação é satisfazer a sua fome por almas. Aos seus olhos, o principal uso dessas almas é gerar novos demônios, que podem servir como soldados, escravos, peões ou até mesmo moeda para seus senhores mais poderosos.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte"
        ],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15",
          "santo 15"
        ]
      },
      "attacks": {
        "5tiASMinDzyHUAEv": {
          "name": "Maxilas",
          "damage": "4d12+18 perfurante"
        },
        "uLuSAexGwbZSdlkF": {
          "name": "Faca Chama Negra",
          "damage": "3d4+18 perfurante; 2d6 vazio"
        },
        "PFAC6dSt4RN7aRDz": {
          "name": "Ferrão",
          "damage": "4d8+18 perfurante"
        }
      },
      "actions": {
        "7rYYffte0B1eDFDt": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "c1COFBWgk0baYBNq": {
          "name": "magias Constantes",
          "description": ""
        },
        "mmU40z6zMLqnvDyN": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "28xyMG8bDPJrcRsP": {
          "name": "Olhar que rouba a morte",
          "description": "30 pés (9 metros). Quando um não-demônio termina seu turno na aura, ele deve tentar um teste de resistência (fortitude, dc:38). Se falhar, torna-se Drenado 1.\nUma criatura que morre enquanto foi drenada pelo olhar de um vrolikai ressuscita como um carniçal na meia-noite seguinte. O Mestre determina que tipo de carniçal."
        },
        "FQZGypLzxjxM8v3a": {
          "name": "Facas Chama Negra",
          "description": "O vrolikai manifesta uma lâmina em forma de adaga que parece uma chama negra cristalizada em cada uma de suas quatro mãos. Essas armas funcionam como adagas de ataque maiores +2 que causam 2d6 de dano de vazio adicional. Eles desaparecem no nada 1 minuto depois que um vrolikai não os carrega mais."
        },
        "Nl0sqXtr54YzMawN": {
          "name": "Consumir a Morte",
          "description": "Os vrolikai concentram seu olhar mortal em um único alvo que podem ver dentro de 30 pés (9 metros). O alvo deve imediatamente tentar um teste de Fortitude contra o olhar que rouba a morte.\nSucesso A criatura não é afetada.\nFalha A criatura é afetada pelo olhar que rouba a morte e fica Drenada 1. Se a criatura já foi drenada 1 pelo olhar que rouba a morte antes de tentar o salvamento, uma falha no teste aumenta o valor da condição drenado em 1, até um máximo de Drenado 4. O vrolikai ganha 10 Pontos de Vida temporários, e a criatura drenada fica temporariamente imune até o início do próximo turno do vrolikai.\nFalha Crítica Como falha, mas a criatura aumenta a quantidade de drenagem em 2."
        },
        "ej0lyLnZuPKMNMnI": {
          "name": "Chamas Focadas",
          "description": "O vrolikai ataca um único alvo com todas as suas facas de chama negra. O demônio faz um golpe de faca de chama negra com os seguintes efeitos adicionais. Isso conta para a penalidade de ataque múltiplo do vrolikai como um número de ataques igual ao número de facas de contra chama que o vrolikai usou.\nSucesso Crítico O alvo sofre 2d6 de dano de vazio adicional para cada faca além da primeira (normalmente 6d6 de dano extra) e sofre 4d6 de dano de vazio persistente.\nSucesso O alvo sofre 2d6 de dano de vazio adicional para cada faca além da primeira.\nFalha O vrolikai causa o dano que seu golpe de faca de chama negra normalmente causa ao acertar."
        },
        "JS74Gdm0nVhPpG4k": {
          "name": "Deformação mental",
          "description": "A ferroada de um vrolikai é alucinante. Uma criatura atingida deve tentar um teste de resistência (vontade, dc:44).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Estupefata 1 por 1 minuto.\nFalha A criatura fica estupefata 1. Se ela já estiver estupefata, seu valor de estupefação aumenta em 1 (até um máximo de Estupefato 4).\nFalha Crítica Como falha, mais a criatura fica Confusa por 1 minuto."
        }
      },
      "spellcasting": {
        "yinuvv1DAaHpt2dq": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "LFMYOAZVijC6GmzA": {
              "name": "Translocar (à vontade)"
            },
            "zmGi1QNStSaYC6ai": {
              "name": "Visão Verdadeira (Constante)"
            },
            "3NHClQSDi7To4Gye": {
              "name": "Regenerado"
            },
            "LwxQLt4FtqEqPMff": {
              "name": "Executar"
            },
            "D8ZnN3huVkGhtjgw": {
              "name": "Massacre"
            },
            "VXHcUTkP6nPksRoj": {
              "name": "Paralisar"
            },
            "spZBwgRe4opgwHuv": {
              "name": "Exsanguinação Vampírica"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:tarn-linnorm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6d204ece5911cee962d8f62a570565ccea7950e41adc3663c9cfac52af9ea847",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Tarn Linnorm",
      "description": "Embora existam Linnorms mais poderosos, o Tarn Linnorm de múltiplas cabeças pode causar uma devastação impressionante.\nImensos e primitivos dragões das regiões setentrionais do mundo, os Linnorms odeiam aqueles que consideram criaturas inferiores e procuram infligir o máximo de sofrimento possível às suas infelizes vítimas. Embora essas monstruosidades serpentinas possam não ser os poderosos dragões alados que a maioria imagina, eles possuem uma força incrível e poderes mortais que muitas vezes rivalizam com a brutalidade dos dragões mais notórios.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "aklo": "aklo",
        "draconic": "dracônico",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "ácido",
          "xingamento",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15"
        ]
      },
      "attacks": {
        "npD19zlFQ72xXHfo": {
          "name": "Maxilas",
          "damage": "4d12+18 perfurante"
        },
        "CQRb2PNLd84eBkAH": {
          "name": "Garra",
          "damage": "4d8+18 cortante"
        },
        "ySh7mxtzIvc9onNT": {
          "name": "Cauda",
          "damage": "4d6+18 contundente"
        }
      },
      "actions": {
        "lQO6RbVplN7WWnna": {
          "name": "magias Constantes",
          "description": ""
        },
        "SfTYucTXJbISe6Da": {
          "name": "Visão Geral",
          "description": ""
        },
        "5lNem5v3czqg4yta": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "MrSMiZ1i5groiYX1": {
          "name": "Regeneração 15 (desativada por ferro frio)",
          "description": ""
        },
        "YoKSGUjwXmt7kxnq": {
          "name": "Maldição da Morte",
          "description": "Quando uma criatura mata o tarn linnorm, ela deve ter sucesso em um teste de resistência (vontade, dc:46) ou não poderá mais recuperar Pontos de Vida por qualquer meio, como magias de cura, a perícia Medicina ou cura natural do repouso. Isto tem uma duração ilimitada."
        },
        "otfDOnqRfKoRXWJC": {
          "name": "Ataque reativo (somente cauda)",
          "description": ""
        },
        "RNVvCjM6WpoASTKg": {
          "name": "Contrair",
          "description": "(3d6+18)[concussão], teste (fortitude, dc:44, básico)"
        },
        "8MiIAzmA9gWbpF5s": {
          "name": "Respiração Corrosiva",
          "description": "O tarn linnorm pode expelir um @Template[line|distance:120] ou um @Template[cone|distance:60] de ácido, causando 20d6[acid|options:area-damage] de dano a criaturas dentro da área (verificação (reflexo, dc:44, básico, opções:efeito de área) salvamento).\nO linnorm não pode usar Respiração Corrosiva ou Respiração Dupla novamente por [[/gmr 1d4 #Recharge Respiração Corrosiva ou Respiração Dupla]]{1d4 rodadas}.\nO ácido cria vapores tóxicos. No início do próximo turno do linnorm, aqueles que falharam no salvamento de Reflexos da arma de sopro devem ter sucesso em um teste (fortitude, dc:42) ou ganharão Enjoado 4 com os vapores venenosos."
        },
        "TbFZxJr8aSgbgTZ6": {
          "name": "Mordida Dupla",
          "description": "O Tarn Linnorm avança e então dá um golpe de mandíbula com cada uma de suas cabeças, cada uma contra um alvo diferente. Ambos os ataques contam para a penalidade de ataque múltiplo do tarn linnorm, mas a penalidade de ataque múltiplo não aumenta até que o tarn linnorm faça todos esses ataques."
        },
        "DWRBHDiwImN0PCp9": {
          "name": "Respiração Dupla",
          "description": "O tarn linnorm usa Respiração Corrosiva duas vezes. Uma criatura tenta apenas um salvamento e só pode sofrer dano uma vez.\nO linnorm não pode usar Respiração Corrosiva ou Respiração Dupla novamente por [[/br 2d4 #Recharge Respiração Corrosiva ou Respiração Dupla]]{2d4 rodadas}."
        },
        "Bcm7iwcliF6ChhW7": {
          "name": "Veneno de Tarn Linnorm",
          "description": "Teste de salvamento (fortitude, dc:44)\nDuração máxima 10 rodadas\nEstágio 1 7d6[ácido] de dano e Drenado 1 (1 rodada)\nEstágio 2 11d6 de dano [ácido] e Drenado 2 (1 rodada)"
        },
        "yKfR5JdxSC3YITNP": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "cIlup2qYJhZmAmRn": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "EuaT5qjP1u5HzIZa": {
              "name": "Visão Verdadeira (Constante)"
            },
            "ZNAHsWeRdyO9ciJP": {
              "name": "Movimento irrestrito (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:diabolic-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5cac1157c4a6903ac7a974f03561df36cac6298b4d02ec1a44d002f88a47a711",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Diabólico (Antigo)",
      "description": "O inferno, segundo alguns teólogos, é uma entidade viva em si. Dragões diabólicos, argumentam esses estudiosos, são apenas extensões do plano, criaturas vivas que se separam do Inferno para cumprir sua vontade. Quer isso seja verdade ou se os dragões diabólicos são simplesmente almas renascidas de dragões enviados para o Inferno, o fato é que esses dragões são poderosos, astutos e tirânicos. O objetivo de todo dragão diabólico é promover a vontade do Inferno, embora a forma como isso acontece possa variar. Independentemente de seus objetivos, esses dragões sempre abordam os recém-chegados com uma calma perturbadora.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.",
      "size": "Imenso",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "necril": "necril",
        "pyric": "pírico",
        "aklo": "aklo",
        "chthonian": "chthoniano"
      },
      "defenses": {
        "immunities": [
          "fogo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "T5Di6QONcI9inDFW": {
          "name": "Maxilas",
          "damage": "2d6 fogo; 4d12+18 perfurante"
        },
        "swoyAmzvxZ40OwP5": {
          "name": "Garras",
          "damage": "2d6 fogo; 4d8+18 perfurante"
        },
        "i6lsvMDzNoy5XhNg": {
          "name": "Cauda",
          "damage": "4d8+18 contundente; 2d6 fogo"
        }
      },
      "actions": {
        "18RBgSWlCuh22J1R": {
          "name": "Visão de fumaça",
          "description": "A fumaça não prejudica a visão do dragão; eles ignoram a condição Oculto da fumaça."
        },
        "lzZO20Is7AdGnMVP": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "LrwjsBPW23HP1jKy": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:40, opções:efeito de área,inflige:assustado)"
        },
        "yDArgwXwN85q97A7": {
          "name": "Picada do Inferno",
          "description": "Gatilho O dragão é atingido criticamente por um ataque corpo a corpo\nEfeito O dragão canaliza o rancor do Inferno de volta através do corpo de seu inimigo, subjugando-o com um ataque infernal à mente. A criatura desencadeadora sofre 10d6[mental] de dano com um teste de resistência (vontade, dc:42, básico). Criaturas sagradas usam um resultado um grau de sucesso pior do que o obtido em seu teste de resistência."
        },
        "9Z9CTBimYbnQHZTU": {
          "name": "Ataque reativo",
          "description": ""
        },
        "sC6FZ4PWGfB7jJ5I": {
          "name": "Fogo Diabólico",
          "description": "Qualquer dano de fogo causado por um dragão diabólico, incluindo dano de fogo de magias, é imbuído do poder profano do Inferno para queimar o espírito também. Uma criatura sofre dano espiritual em vez de dano de fogo se isso for mais prejudicial para a criatura (conforme determinado pelo Mestre). Um dragão diabólico é imune ao fogo diabólico de outros dragões diabólicos, ao fogo da imolação divina e a efeitos semelhantes."
        },
        "Biez8RunTRAB4NCV": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "YqTwVDGKNZYnwpNe": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro do Fogo do Inferno sempre que consegue um acerto crítico com um Golpe."
        },
        "2SfnAmO0wAMNDsit": {
          "name": "Sopro do Fogo do Inferno",
          "description": "O dragão libera uma explosão de fogo infernal que causa 21d6[fogo|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (reflexo, dc:42, básico, opções:efeito de área)).\nO dragão não pode usar Sopro do Fogo do Inferno novamente por [[/gmr 1d4 #Recharge Sopro do Fogo do Inferno]]{1d4 rodadas}."
        },
        "GLvwhJcnT0YW1PUg": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "94q35docA6iq3SHD": {
          "name": "Nocaute aprimorado",
          "description": ""
        }
      },
      "spellcasting": {
        "9sTwfMhjiQ2a0xYi": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "5zMUvoyVHuEj9Hzq": {
              "name": "Ignição"
            },
            "sipjbNPvRlyczMGb": {
              "name": "Teletransporte Interplanar (à vontade, somente para si)"
            },
            "3yLw77x5Y9vy9Hbn": {
              "name": "Convocar Demônio (somente Phistophilus, à vontade)"
            },
            "0TYvXrz7QnBaoS2X": {
              "name": "Imolação Divina (à vontade)"
            },
            "KbgjBsmnhnehl0ma": {
              "name": "Estrelas cadentes (somente fogo)"
            },
            "LJ9KicbI160R5h15": {
              "name": "Parede de Fogo (à vontade)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:diabolic-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9d9af3a4bb84efcf07b39c7f72cf108e3994d4030aa0f307eb1cc89cd3588887",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Diabólico (Antigo, Feiticeiro)",
      "description": "O inferno, segundo alguns teólogos, é uma entidade viva em si. Dragões diabólicos, argumentam esses estudiosos, são apenas extensões do plano, criaturas vivas que se separam do Inferno para cumprir sua vontade. Quer isso seja verdade ou se os dragões diabólicos são simplesmente almas renascidas de dragões enviados para o Inferno, o fato é que esses dragões são poderosos, astutos e tirânicos. O objetivo de todo dragão diabólico é promover a vontade do Inferno, embora a forma como isso acontece possa variar. Independentemente de seus objetivos, esses dragões sempre abordam os recém-chegados com uma calma perturbadora.\nOs dragões vêm em inúmeras formas, muitos deles com habilidades mágicas ou conexões com a magia. Alguns dragões extraem maior poder da magia do que outros, permitindo-lhes manifestar habilidades ou alterar seus físicos com exposição prolongada à magia. Esses dragões se tornam mais poderosos à medida que envelhecem e fortalecem suas conexões com suas origens mágicas. Os estudiosos debatem a classificação desses dragões, com alguns preferindo o nome de dragões mágicos e outros usando dragões tradicionais devido à sua conexão com tradições mágicas específicas. Independentemente de seus nomes, esses dragões compartilham uma série de características: sua capacidade de explorar energias mágicas, poder e astúcia intensificados à medida que envelhecem e uma inclinação para acumular grandes quantidades de tesouros e riquezas.\nConjuradores Dracônicos\nCada dragão apresenta uma barra lateral sobre dragões conjuradores desse tipo. Para criar um conjurador de dragão, remova as habilidades Draconic Frenzy e Draconic Momentum do dragão e dê a eles os magias descritos na barra lateral. Você pode trocar qualquer número deles por outros magias, desde que mantenha o mesmo número de magias para cada Rank. Você também pode querer aumentar o modificador de Inteligência, Sabedoria ou Carisma do dragão em 1 ou 2 para refletir seu domínio da magia.",
      "size": "Imenso",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "necril": "necril",
        "pyric": "pírico",
        "aklo": "aklo",
        "chthonian": "chthoniano"
      },
      "defenses": {
        "immunities": [
          "fogo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "T5Di6QONcI9inDFW": {
          "name": "Maxilas",
          "damage": "2d6 fogo; 4d12+18 perfurante"
        },
        "swoyAmzvxZ40OwP5": {
          "name": "Garras",
          "damage": "2d6 fogo; 4d8+18 perfurante"
        },
        "i6lsvMDzNoy5XhNg": {
          "name": "Cauda",
          "damage": "4d8+18 contundente; 2d6 fogo"
        }
      },
      "actions": {
        "18RBgSWlCuh22J1R": {
          "name": "Visão de fumaça",
          "description": "A fumaça não prejudica a visão do dragão; eles ignoram a condição Oculto da fumaça."
        },
        "lzZO20Is7AdGnMVP": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "LrwjsBPW23HP1jKy": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:40, opções:efeito de área,inflige:assustado)"
        },
        "yDArgwXwN85q97A7": {
          "name": "Picada do Inferno",
          "description": "Gatilho O dragão é atingido criticamente por um ataque corpo a corpo\nEfeito O dragão canaliza o rancor do Inferno de volta através do corpo de seu inimigo, subjugando-o com um ataque infernal à mente. A criatura desencadeadora sofre 10d6[mental] de dano com um teste de resistência (vontade, dc:42, básico). Criaturas sagradas usam um resultado um grau de sucesso pior do que o obtido em seu teste de resistência."
        },
        "9Z9CTBimYbnQHZTU": {
          "name": "Ataque reativo",
          "description": ""
        },
        "sC6FZ4PWGfB7jJ5I": {
          "name": "Fogo Diabólico",
          "description": "Qualquer dano de fogo causado por um dragão diabólico, incluindo dano de fogo de magias, é imbuído do poder profano do Inferno para queimar o espírito também. Uma criatura sofre dano espiritual em vez de dano de fogo se isso for mais prejudicial para a criatura (conforme determinado pelo Mestre). Um dragão diabólico é imune ao fogo diabólico de outros dragões diabólicos, ao fogo da imolação divina e a efeitos semelhantes."
        },
        "2SfnAmO0wAMNDsit": {
          "name": "Sopro do Fogo do Inferno",
          "description": "O dragão libera uma explosão de fogo infernal que causa 21d6[fogo|opções:dano de área] de dano em um salvamento de @Template[cone|distance:60] (verificação (reflexo, dc:42, básico, opções:efeito de área)).\nO dragão não pode usar Sopro do Fogo do Inferno novamente por [[/gmr 1d4 #Recharge Sopro do Fogo do Inferno]]{1d4 rodadas}."
        },
        "GLvwhJcnT0YW1PUg": {
          "name": "Agarrar Melhorado",
          "description": ""
        },
        "94q35docA6iq3SHD": {
          "name": "Nocaute aprimorado",
          "description": ""
        }
      },
      "spellcasting": {
        "97zxNeHM8e5yOody": {
          "name": "magias Divinos Preparados",
          "category": "preparado",
          "spells": {
            "VlmMdelvlQFXtudR": {
              "name": "Comando"
            },
            "kv6Yrq15Fm4ugwX6": {
              "name": "Detectar magia"
            },
            "ZbZJsG5OcFZoLBm2": {
              "name": "Lança Divina"
            },
            "PAcPyOLNK1K7cUKl": {
              "name": "Temer"
            },
            "o2YJlsUAEkXgIhMJ": {
              "name": "Ferir"
            },
            "DZSD8iHUbaJ8Jn6D": {
              "name": "Mensagem"
            },
            "k5CEBfx17EvZ8Cfv": {
              "name": "Sigilo"
            },
            "rCPgQBi7S9nH6S0R": {
              "name": "Distorção do Vazio"
            },
            "vm7vKebUXgk6ZUfz": {
              "name": "Vingança de Sangue"
            },
            "CbFkmFry4HgCHB49": {
              "name": "Escuridão"
            },
            "l5zX9bqz8N2VqPFS": {
              "name": "Traduzir"
            },
            "OpB98ZHnl1nddYYm": {
              "name": "Cegueira"
            },
            "bWD2QNwo9OBqC36z": {
              "name": "Escuridão arrepiante"
            },
            "4UCd2JrUw4onsLkO": {
              "name": "Dissipando Globo"
            },
            "q43VCsPVxjV6vND7": {
              "name": "Ira Divina"
            },
            "3wHW8HDlhY9pFfCC": {
              "name": "Amarração Planar"
            },
            "jC8yOMaEMjLDB3NS": {
              "name": "Translocar"
            },
            "NmSFxY67HtFQhLch": {
              "name": "Banimento"
            },
            "F17hcf1lmns4m4vm": {
              "name": "Enviando"
            },
            "D5unlRAwEBe7mfFH": {
              "name": "Fala Verdadeira"
            },
            "W31MAsqXWkFFQ9FE": {
              "name": "Fronteira Abençoada"
            },
            "NG6So9uCiij3TpKS": {
              "name": "Dominar"
            },
            "o75LHM91SeHXnfcJ": {
              "name": "Explosão de Eclipse"
            },
            "gGdtNS8PROns0SnM": {
              "name": "Executar"
            },
            "Az1vR6iVReMhN0OX": {
              "name": "Selo Planar"
            },
            "Mq7MQc8Kpzn3fYXf": {
              "name": "Cântico da Dor Eterna"
            },
            "11NrhJMffaaAqHXg": {
              "name": "Identificar"
            },
            "1FLKh7VfX0PXR00N": {
              "name": "Massacre"
            },
            "0N98D0weAGOZhRmR": {
              "name": "Lamentos dos Amaldiçoados"
            }
          }
        },
        "9sTwfMhjiQ2a0xYi": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "5zMUvoyVHuEj9Hzq": {
              "name": "Ignição"
            },
            "sipjbNPvRlyczMGb": {
              "name": "Teletransporte Interplanar (à vontade, somente para si)"
            },
            "3yLw77x5Y9vy9Hbn": {
              "name": "Convocar Demônio (somente Phistophilus, à vontade)"
            },
            "0TYvXrz7QnBaoS2X": {
              "name": "Imolação Divina (à vontade)"
            },
            "KbgjBsmnhnehl0ma": {
              "name": "Estrelas cadentes (somente fogo)"
            },
            "LJ9KicbI160R5h15": {
              "name": "Parede de Fogo (à vontade)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:tor-linnorm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:854b2f9091f4087145b31f5a882915650bc0427d14b0f3dc7aa3f00e76eb5c6f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Tor Linnorm",
      "description": "Os Tor Linnorms habitam as montanhas vulcânicas mais altas, seja em cavernas formadas naturalmente ou em crateras derretidas. O temperamento de um Tor Linnorm pode ser tão quente e destrutivo quanto o magma com o qual a criatura se assemelha.\nImensos e primitivos dragões das regiões setentrionais do mundo, os Linnorms odeiam aqueles que consideram criaturas inferiores e procuram infligir o máximo de sofrimento possível às suas infelizes vítimas. Embora essas monstruosidades serpentinas possam não ser os poderosos dragões alados que a maioria imagina, eles possuem uma força incrível e poderes mortais que muitas vezes rivalizam com a brutalidade dos dragões mais notórios.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "aklo": "aklo",
        "draconic": "dracônico",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "xingamento",
          "fogo",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15"
        ]
      },
      "attacks": {
        "3TZWlkMSDjauBP7y": {
          "name": "Maxilas",
          "damage": "4d12+19 perfurante"
        },
        "jb3f12sfPd9nzwVN": {
          "name": "Garra",
          "damage": "4d8+19 cortante"
        },
        "xkve6W8Rg8tqIPX0": {
          "name": "Cauda",
          "damage": "4d6+19 contundente"
        }
      },
      "actions": {
        "JGlsPzMEmEwis19F": {
          "name": "magias Constantes",
          "description": ""
        },
        "zxbJYDbwhz45mMSX": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "nHYtHMopSyGQg3WT": {
          "name": "Regeneração 20 (desativada por ferro frio)",
          "description": ""
        },
        "zLUOcpj85OOnwvRh": {
          "name": "Maldição do Sangue Fervente",
          "description": "Quando uma criatura mata o linnorm, ela deve ter sucesso em um teste (vontade, dc:48) de resistência ou ganhará fraqueza ao fogo 20 e Lentidão 1 devido à dor agonizante que agora suporta o tempo todo, com duração ilimitada.\nEnquanto um personagem continuar sofrendo esta maldição, sua condição de lentidão nunca poderá ser reduzida abaixo de 1.\nEfeito: Maldição do Sangue Fervente"
        },
        "mgb2nO0WkJsnZogZ": {
          "name": "Afinidade de Lava",
          "description": "Um tor linnorm pode respirar e nadar livremente enquanto está submerso em lava e magma."
        },
        "Bk27VjwfpviLpWbA": {
          "name": "Ataque reativo (somente cauda)",
          "description": ""
        },
        "KzNMNX33tOGWTxJY": {
          "name": "Contrair",
          "description": "(3d6+21)[concussão], teste (fortitude, dc:46, básico)"
        },
        "JvFUFSxHH2EThNAC": {
          "name": "Respiração Piroclástica",
          "description": "O tor linnorm expele um @Template[cone|distance:60] de chamas e cinzas, causando 20d6[fire|options:area-damage] de dano a criaturas dentro da área (check (reflex, dc:46, basic, options:area-effect) save).\nO linnorm não pode usar Sopro Piroclástico novamente por [[/gmr 1d4 #Recharge Sopro Piroclástico]]{1d4 rodadas}.\nNo início do próximo turno do tor linnorm, a área do Sopro Piroclástico é coberta por uma fumaça espessa e abrasadora que queima os pulmões e os olhos, causando 10d6[fogo|opções:dano de área] adicional de dano a todas as criaturas na área (teste (reflexo, dc:46, básico, opções:efeito de área) salvamento). Uma criatura que passe uma rodada inteira na fumaça com os olhos abertos deve ser bem sucedida em um teste de resistência (fortitude, dc:44) ou ficará cega por 1 minuto.\nA fumaça se dissipa após 1 minuto; em ventos fortes, a fumaça se dissipa em 5 rodadas, e em ventos mais fortes, pode dissipar ainda mais rapidamente."
        },
        "CMfpQM5btdzVWxB5": {
          "name": "Garras Cortantes",
          "description": "O tor linnorm faz quatro ataques com suas garras, cada um contra um alvo diferente. Esses ataques contam para a penalidade de ataque múltiplo do tor linnorm, mas a penalidade de ataque múltiplo não aumenta até que o tor linnorm realize todos os seus ataques."
        },
        "oeOZCitfRoZXCLfy": {
          "name": "Veneno de Tor Linnorm",
          "description": "Teste de Salvamento (fortitude, dc:44);\nDuração máxima 10 rodadas\nEstágio 1 8d6[fogo] de dano e Drenado 1 (1 rodada)\nEstágio 2 12d6[fogo] de dano e Drenado 2 (1 rodada)"
        },
        "5pZXZ7pLE1RdGKX5": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "zQRbKmxdzecknTDu": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "g4YpY2bku4a31XWO": {
              "name": "Visão Verdadeira (Constante)"
            },
            "YPkNYxysmFk49ni2": {
              "name": "Movimento irrestrito (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:grim-reaper",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8ffe0309026e0bb0fba53b3954070d8a5dfdfddd60033c3528f7a8ffeee2fca5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ceifador",
      "description": "O Grim Reaper é a personificação inabalável da morte. Silencioso como um túmulo e tão inevitável quanto o próprio tempo, este ser lendário persegue e acaba com criaturas que escaparam da morte por muito tempo. Às vezes, o Grim Reaper chega sem avisar, enquanto outras vezes chega para terminar o trabalho que outras criaturas não conseguiram. O Grim Reaper não serve a nenhum deus, demônio ou aeon. É desprezado e temido por psicopompos e celestiais, mas poucos, se é que algum, se atrevem a ficar no seu caminho. Como uma praga eterna, mata aqueles que tentam curar o multiverso de sua presença. Ele permanece sozinho e mantém apenas seu próprio conselho, e as súplicas e raciocínios de mortais e imortais caem em ouvidos moucos quando o Grim Reaper se aproxima de sua presa. Seu próprio raciocínio é silencioso para os ouvidos mortais e inescrutável para a mente mortal, mas não importa o motivo, o resultado é inflexível e final.\nEmbora algumas lendas sustentem que o Grim Reaper aparece diante de todos quando eles morrem, a verdade é um pouco mais perturbadora. Na verdade, essas vigílias estão sob a providência dos psicopompos, uma raça de imortais encarregada da proteção e orientação das almas mortais durante a vida após a morte. O Grim Reaper tem pouco interesse em proteger almas ou guiá-las. Em vez disso, é compelido por agendas sinistras que surgem no reino noturno de Abaddon, onde governam os Cavaleiros do Apocalipse. Na verdade, existem muitas semelhanças na forma e na forma entre o Grim Reaper e Caronte, o Cavaleiro da Morte, mas não existe nenhum caso registrado dessas duas entidades poderosas trabalhando juntas. Em vez disso, o Grim Reaper serve como uma espécie de manifestação do próprio Abaddon e, a esse respeito, é considerado por alguns como uma encarnação do misterioso Primeiro Cavaleiro. Quando o Grim Reaper chega a um mundo, ele não o faz como um anjo de misericórdia, mas como um implacável ceifador de vida. Aqueles que caíram nas mãos do Grim Reaper não estavam destinados a morrer tanto quanto foram selecionados, caçados e assassinados.\nTalvez as lendas mais assustadoras em torno do Grim Reaper digam respeito à sua natureza como uma entidade singular, pois alguns acreditam que existe mais de um Grim Reaper no Grande Além. Esses sussurros falam de uma conspiração de pelo menos nove dessas criaturas que perseguem a realidade, selecionando os vivos como servos inexplicáveis ​​da verdadeira entropia. De acordo com os ensinamentos de alguns cultos da morte, o objetivo final do Grim Reaper é encerrar todo o ciclo de vida e morte e servir como um senhor silencioso de um universo vazio.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
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
          "todo o dano 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "qqpgMalbjoAykhjP": {
          "name": "Foice Afiada",
          "damage": "4d10+23 cortante"
        }
      },
      "actions": {
        "xDzg2v4rQ9wNAK3b": {
          "name": "Graça da Morte",
          "description": "O Grim Reaper pode escolher se conta ou não como morto-vivo para efeitos que afetam os mortos-vivos de maneira diferente. Mesmo que não conte como morto-vivo, o Grim Reaper ainda nunca conta como uma criatura viva."
        },
        "SWo4EQT4exBUG1zV": {
          "name": "Visão de status",
          "description": "O Grim Reaper conhece automaticamente os pontos de vida, condições, aflições e emoções de todas as criaturas que pode ver."
        },
        "doHZQiWCurTpCiMw": {
          "name": "magias Constantes",
          "description": ""
        },
        "dWgrFKYnx0FM8zl3": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "6aClhFTvO5NOf1iA": {
          "name": "Aura de infortúnio",
          "description": "20 pés (6 metros).\nAs criaturas vivas na aura devem rolar duas vezes em todas as jogadas de d20 e usar o resultado mais baixo.\nEfeito: Aura de Infortúnio"
        },
        "ei3nQVCq6MHIPrMy": {
          "name": "Morte à espreita",
          "description": "Gatilho Uma criatura dentro de 100 pés (30 metros) realiza um ataque à distância ou usa uma ação que tenha a característica concentração, manipulação ou movimento\nEfeito O Grim Reaper se teletransporta para um quadrado adjacente à criatura desencadeadora e desfere um Golpe corpo a corpo contra ela. Se o Golpe acertar, o Grim Reaper interrompe a ação desencadeadora."
        },
        "YMwe0HIrPrtpRdsx": {
          "name": "Cura do Vazio",
          "description": "O Grim Reaper pode escolher se sofrerá ou não dano de vitalidade."
        },
        "TzBbRiqiSDZj6VdK": {
          "name": "Golpe Mortal",
          "description": "Uma criatura atingida criticamente por qualquer um dos ataques do Ceifador ou que falhe criticamente contra qualquer um de seus magias deve ser bem sucedida em um teste de resistência (fortitude, dc:47) ou morrer."
        },
        "W3a4Bkc73B2bUZDE": {
          "name": "Dreno de energia",
          "description": "Quando o Grim Reaper atinge e causa dano com sua foice, ele recupera 20 Pontos de Vida [de cura], e o alvo deve ser bem sucedido em um teste (fortitude, dc:43) ou ficará Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 3)."
        },
        "Zp7ozjV5uBLnBo41": {
          "name": "Morte Final",
          "description": "Uma criatura morta pelo Grim Reaper não pode ser trazida de volta à vida por qualquer meio que não seja a intervenção divina."
        },
        "0qVGuAvlfZ7EplZ5": {
          "name": "Infundir Arma",
          "description": "Qualquer foice ganha o traço ágil, não pode ser desarmada e se torna uma foice afiada de ataque principal +3 enquanto o Grim Reaper a empunha.\nSe o Grim Reaper atingir uma criatura com fraqueza a qualquer tipo específico de dano, o dano da foice conta como esse tipo de dano, além do corte."
        }
      },
      "spellcasting": {
        "aRbpPF0TFfUG64dX": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "fx5g45f1vX9UtDKI": {
              "name": "Veja o Invisível (Constante)"
            },
            "9xvF2KBmoTPgqFeW": {
              "name": "Aceleração (Constante)"
            },
            "drbxOhoSGY2fBfCd": {
              "name": "Visão Verdadeira (Constante)"
            },
            "tMr1LDGa9W1tx27e": {
              "name": "Teletransporte Interplanar"
            },
            "4sLNRqssXF0vJIu2": {
              "name": "Executar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:treerazer",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c5c1dbf186537463ff9189bedac55e9b1ee42d89006ec4eb37970e950c574a21",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Arvorador",
      "description": "Treerazer, o autodenominado Senhor do Blasted Tarn, é um poderoso demônio prestes a ascender ao verdadeiro poder de um dos governantes do próprio Abismo - um lorde demônio. Por enquanto, mesmo sendo um lorde demônio nascente, Treerazer é um inimigo perigoso.\nTreerazer raramente sai de seu reino pantanoso de Tanglebriar - um grande matagal de folhagem contaminada e detritos apodrecidos ao sul da Floresta Fierani de Kyonin - mas pode ser encontrado em qualquer lugar dentro desse lamaçal tóxico, muitas vezes acompanhado por uma pequena legião de demônios, fadas corrompidas e outros aliados mortais. Certos rituais ocultos têm o poder de evocá-lo de Tanglebriar, concedendo-lhe a oportunidade de trabalhar diretamente seus males além do reino para o qual foi exilado. Alguns acreditam que nenhuma força sobrenatural contém Treerazer e que, se ele quisesse, ele poderia viajar por Golarion impunemente, espalhando as bênçãos distorcidas de seu toque e a corrupção de sua presença, mas o Senhor do Blasted Tarn é tão astuto e astuto quanto mortal, e prefere causar seus males no mundo a partir da segurança de seu reino de pesadelo.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "elven": "elfo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença",
          "mental",
          "tóxico"
        ],
        "resistances": [
          "ácido 20",
          "frio 15",
          "fogo 15",
          "físico 20 exceto ferro frio"
        ],
        "weaknesses": [
          "santo 20"
        ]
      },
      "attacks": {
        "sBRqXEDoaHJdg0SF": {
          "name": "Machado Negro",
          "damage": "5d12+18 cortante; 1d6 ácido"
        },
        "g2irWtwE4YUnllGP": {
          "name": "Maxilas",
          "damage": "5d10+20 cortante"
        }
      },
      "actions": {
        "UoKQ5xYxwkzldwhR": {
          "name": "magias Constantes",
          "description": ""
        },
        "9NSBH5zk6mEIcPjF": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "t3USaq2CKWLoaP9A": {
          "name": "Regeneração 50 (Desativada por Sagrado)",
          "description": ""
        },
        "spBsMqVOA8rbhE2e": {
          "name": "Aura de Corrupção",
          "description": "120 pés (36 metros).\nAs plantas próximas ao Treerazer se retorcem, deformam e se transformam em paródias espinhosas ou fungóides de suas formas naturais. Uma criatura viva nesta área deve ser bem sucedida em um teste (fortitude, dc:47) a cada rodada ou será parcialmente transformada em matéria vegetal. Aqueles que falham neste teste de resistência são tratados como se fossem plantas para efeitos de qualquer efeito que prejudique ou incomode particularmente as criaturas vegetais mais do que outras criaturas, mas não ganham nenhum benefício por serem criaturas vegetais.\nEste efeito dura enquanto a criatura permanecer dentro da área de corrupção e por 1 minuto depois disso.\nEfeito: Aura de Corrupção"
        },
        "7TG8awCuym8R9OVb": {
          "name": "Ataque reativo",
          "description": ""
        },
        "NWBV7oqS64HKJSkz": {
          "name": "Blackaxe - Autoridade do Proprietário",
          "description": "Requisitos Treerazer não está empunhando Blackaxe.\nEfeito Treerazer sente o mundo ao redor de Blackaxe como se você estivesse em sua localização e pode usar qualquer um de seus magias inatos através do link como se fosse a fonte do magia. Se outra criatura estiver empunhando Blackaxe, ela deve ter sucesso em um teste (irá, dc:50) de resistência ou sofrerá Lentidão 2 até abandonar a arma."
        },
        "c09zz4QRa6hJSZ6q": {
          "name": "Blackaxe - Recuperação do Proprietário",
          "description": "Requisitos Treerazer não está empunhando Blackaxe.\nEfeito Blackaxe aparece nas mãos de Treerazer, teletransportando-se instantaneamente de sua localização anterior."
        },
        "uyDcXzwKNRuKIzY5": {
          "name": "Machado Negro – Desmatamento Rejuvenescedor",
          "description": "Frequência uma vez por minuto.\nEfeito Faça um ataque contra uma árvore viva com Blackaxe. Se acertar, a árvore murcha e vira cinzas e você cura 250[cura]{250 Pontos de Vida} e ganha o benefício de um magia Corpo Som de 6º Rank."
        },
        "871udt0tIPBiUS63": {
          "name": "Desfolha",
          "description": "Treerazer emite um pulso de luz verde doentia em uma emanação de 9 metros de raio. Todas as plantas na área (incluindo criaturas sob o efeito de sua aura de corrupção) escurecem e murcham.\nAs plantas que não são criaturas murcham e morrem imediatamente. Criaturas de plantas e fungos sofrem 20d8[void] de dano com um teste de resistência (fortitude, dc:49, básico). Uma criatura que falhar no teste fica Condenada 1 por 1 minuto e Enjoada 3.\nTreerazer pode optar por excluir qualquer número de plantas ou fungos na área deste efeito, e geralmente faz isso para preservar plantas ou fungos retorcidos e corrompidos, ou criaturas vegetais e fungos que sejam aliadas à sua causa.\nTreerazer não pode usar Desfolha por [[/gmr 1d4 #Recharge Defoliation]]{1d4 rodadas}."
        },
        "veNUDgghA30FdVNB": {
          "name": "Dissipando Golpe",
          "description": "Frequência uma vez por rodada\nTrigger Treerazer atinge uma criatura, objeto ou efeito de magia com um Golpe de arma ou sujeita alguém à Desfolha;\nEfeito Treerazer lança seu Dispel Magic inato, visando a criatura que ele atingiu com seu Golpe ou um magia que afeta essa criatura."
        },
        "xkIBsOSynEo9Ii6k": {
          "name": "Golpe impressionante",
          "description": "Quando Treerazer consegue um acerto crítico com um ataque corpo a corpo, o alvo fica Atordoado 2."
        }
      },
      "spellcasting": {
        "4VHRW4Y0OmyqAHpQ": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "uPbUXSGeCm9kiaPK": {
              "name": "Projétil Telecinético"
            },
            "AamTxVMJbcV54qFO": {
              "name": "Manobra telecinética (à vontade)"
            },
            "nKm5RmEZ0Bc394rZ": {
              "name": "Ligação à Terra (à vontade)"
            },
            "rg9GusKAsOFsznvm": {
              "name": "Movimento irrestrito (constante)"
            },
            "lLvbub8jA8CLDQvx": {
              "name": "Trepadeiras emaranhadas (à vontade)"
            },
            "8zLDu6mjVhJQ7NI1": {
              "name": "Visão Verdadeira (Constante)"
            },
            "fwfhUSpq3brEqBbM": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "dRv6ZpfB26BpuzRK": {
              "name": "Dessecar"
            },
            "EGmapWbHWyErL5iU": {
              "name": "Tempo de congelamento"
            },
            "42qAfCY4hVzAueTL": {
              "name": "Muro de Espinhos"
            }
          }
        }
      }
    }
  }
]
