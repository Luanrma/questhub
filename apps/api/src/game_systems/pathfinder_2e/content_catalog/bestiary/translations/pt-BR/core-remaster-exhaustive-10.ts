import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_10_BESTIARY_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-young",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:685b131136b3974828476cedaf7fadc39ce21f5cc3e4260520d7f858923c1a59",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Rúnico (jovem)",
      "description": "Os dragões rúnicos têm uma visão inata sobre o poder das runas. A maioria dos dragões rúnicos mantém uma variedade de runas gravadas em suas escamas, que seus corpos podem fortalecer magicamente. Eles normalmente não lançam magias sozinhos, em vez disso, confiam em sua habilidade de criar runas instantaneamente para produzir os efeitos desejados. Um dragão rúnico geralmente se refere ao seu tesouro como sua biblioteca, pois está cheio de importantes textos históricos, peças, discursos, livros didáticos e livros de magias escritos por pessoas de diferentes culturas em uma variedade de idiomas. Embora muitas vezes possam falar uma língua com a ajuda da magia, eles preferem aprender línguas no contexto de seus falantes, para que possam compreender as nuances escondidas na sintaxe e na magia de seus símbolos.",
      "size": "Grande",
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
          "damage": "2d6+10 cortante"
        },
        "vWI3q4eiStz5qqHx": {
          "name": "Maxilas",
          "damage": "2d6+10 perfurante"
        },
        "8A5XIY3Hlr1wxzJm": {
          "name": "Cauda",
          "damage": "2d10+10 contundente"
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
        "L8w8yFgsSTRZPPKw": {
          "name": "Runa Retributiva",
          "description": "Gatilho Uma criatura dentro de 15 pés (4,5 metros) causa dano ao dragão rúnico\nEfeito Com uma explosão de magia rúnica, o dragão rúnico usa sua habilidade rúnica detonadora na criatura desencadeadora e imediatamente faz com que a runa detone se não o fizer automaticamente."
        },
        "Rj2vwCAvhtc4VbOw": {
          "name": "Runa Detonante",
          "description": "Os ataques e habilidades do dragão rúnico podem deixar uma runa detonante em seus alvos. Se uma criatura receberia uma runa detonante enquanto já possui uma, em vez de adicionar outra runa, sua runa detonante atual será ativada, causando 4d6[untyped] de dano ao alvo e gastando a runa. O tipo de dano da runa detonante corresponde à Runa de Mudança atual do dragão. Uma criatura pode usar uma ação de Interagir para remover a runa. Runas detonantes desaparecem após 1 minuto se não forem detonadas."
        },
        "eHozVgrHl2EW2OBo": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "IiyJK3dEYHm1gnNg": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Rúnico sempre que consegue um acerto crítico com um Golpe."
        },
        "i7kuaOQCvKjQ623q": {
          "name": "Respiração Rúnica",
          "description": "O dragão lança centenas de runas explosivas que detonam com o impacto, causando 9d6[untyped|options:area-damage] de dano em um @Template[type:cone|distance:30] (check (reflex, dc:29, basic, options:area-effect) save). O tipo de dano desta habilidade é determinado pela Shifting Rune. Criaturas que falham no salvamento também são afetadas pela runa detonante. O dragão não pode usar Sopro Rúnico novamente por [[/gmr 1d4 #Recharge Sopro Rúnico]]{1d4 rodadas}."
        },
        "aXvfwxeI9u0AxsD4": {
          "name": "Runas Mutáveis",
          "description": "O dragão rúnico escolhe entre ácido, frio, eletricidade, fogo ou dano sônico. As runas gravadas no dragão mudam, formando runas dessa energia em suas escamas. O dragão ganha imunidade a esse tipo de dano, e suas runas detonantes e Sopro Rúnico causam esse tipo de dano. Qualquer pessoa treinada em Arcana pode reconhecer imediatamente o tipo de energia da runa gravada sem teste."
        },
        "wdaIPUpxH6gu2jCd": {
          "name": "Pressione 10 pés (3 metros)",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:adlet",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f89b322dd0e7c045529c5cf7114f485aaf813c94b9aeabe334a7deac4a9c6dda",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Adlet",
      "description": "Adlets habitam os confins mais distantes e inóspitos da Coroa do Mundo, com alguns viajando além, para regiões igualmente frígidas em outros continentes. À primeira vista, essas pessoas isoladas se parecem muito com seus primos humanos Erutaki; eles normalmente têm cabelos lisos e pretos e constituição compacta e poderosa. No entanto, os adlets tendem a se mover com mais graça que seus parentes humanos. De perto, sua estranheza se revela, já que cada um tem rosto peludo e ostenta uma boca cheia de dentes de lobo. Suas pernas e cauda lembram as dos cães.\nAs lendas dos Adlets dizem que há muito tempo atrás, um poderoso caçador se perdeu longe de casa e encontrou uma casa feita de ossos de baleia e gelo. Uma mulher vestida com peles de raposa brancas cumprimentou-o, alimentou-o e cuidou de seu congelamento. Com o tempo, eles se casaram e tiveram 10 filhos, cinco dos quais tinham pernas e cauda de raposa. Essas crianças ficaram com a mãe, enquanto as outras cinco – nascidas com pernas e rabos de lobo – viajaram com o pai de volta às terras humanas e se tornaram os primeiros adlets.\nA maioria dos Adlets não é inerentemente má, mas sua cultura é guerreira, xenófoba e visivelmente carente de humildade. Eles se consideram os governantes naturais dos desertos árticos e veem todos os demais como invasores, na melhor das hipóteses, e, na pior, invasores. Um Adlet típico é mais forte e mais rápido que qualquer humano mundano, com a habilidade de andar nu em uma nevasca e invocar névoas geladas. Dado isso, não é de admirar que os adlets tenham desenvolvido uma espécie de complexo de superioridade. Ainda assim, embora os ataques de adlets sejam um problema comum para os viajantes na Coroa do Mundo, um punhado de mercadores astutos e intrépidos estabeleceram relações pacíficas com certas comunidades de adlets ao longo de rotas mais comuns.",
      "size": "Médio",
      "senses": {
        "low-light-vision": "visão na penumbra",
        "scent-imprecise-30": "faro impreciso 30 pés (9 metros)"
      },
      "languages": {
        "adlet": "Adlet",
        "common": "comum"
      },
      "defenses": {
        "immunities": [
          "frio"
        ],
        "resistances": [],
        "weaknesses": [
          "fogo 10"
        ]
      },
      "attacks": {
        "jhi0sreme2yjolfI": {
          "name": "Lança",
          "damage": "2d6+9 perfurante"
        },
        "uC8vf4vEv2zFOWgo": {
          "name": "Maxilas",
          "damage": "2d8+9 cortante; 1d6 frio"
        },
        "wVY7ijG6fY0kdgBv": {
          "name": "Lança",
          "damage": "2d6+9 perfurante"
        }
      },
      "actions": {
        "UQmOfNcYdQJoHq8o": {
          "name": "Mordida Vingativa",
          "description": "Gatilho Uma criatura ao alcance das mandíbulas de um adlet, Strike, ataca um dos aliados do adlet.\nEfeito O adlet dá um golpe de mandíbula contra a criatura que acionou."
        },
        "DAwhqp01jQeK2AM2": {
          "name": "Tempestade de lobo",
          "description": "60 pés (18 metros). Uma névoa úmida e fria surge à frente do adlet. As criaturas dentro da névoa ficam ocultas e as criaturas fora da névoa ficam ocultas para as criaturas dentro dela. Um Adlet pode ver através da aura sem penalidade."
        },
        "NsmFyn1MUaCrkX52": {
          "name": "Armas Congeladas",
          "description": "As armas empunhadas por um adlet ganham o efeito da runa da propriedade Frost."
        },
        "vPFPkp810JifvYk3": {
          "name": "Ataque de matilha",
          "description": "Os Golpes de um Adlet causam 2d6 de dano adicional a criaturas que estejam ao alcance de pelo menos dois aliados do Adlet."
        },
        "pgVVTGf6DwqRarDp": {
          "name": "Wolfrim",
          "description": "A névoa de um adlet se transforma em um frio cortante e se aglutina em uma camada espessa de gelo que causa 6d6[frio] de dano às criaturas dentro da aura da tempestade de lobos do adlet (teste (fortitude, dc:26, básico)), e a aura é desativada até o início do próximo turno do adlet."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:water-orm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ea17a99a6224b6d77bc47b65c2f67fbd4a5014bf0a9d8ee5774b8bcee8a7ecb9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Água Orm",
      "description": "Essas criaturas lendárias que espreitam em lagos remotos sempre parecem encontrar seu caminho nas histórias de tavernas das comunidades à beira do lago. Para alguns viajantes, todo lago de tamanho respeitável parece estar cercado por cidades cheias de pescadores que afirmam ter avistado uma forma aquática. Essas criaturas esquivas habitam lagos principalmente em regiões frias e sombrias. Alguns afirmam que as formas aquáticas são uma ramificação das serpentes marinhas e das linnormas, mas nenhuma ligação confiável entre essas criaturas foi encontrada.\nAs formas aquáticas têm muitas características que as serpentes marinhas não têm, como a capacidade de compreender os rudimentos da linguagem. A sua inclinação natural para evitar o contacto e permanecer escondido muitas vezes permanece em desacordo com a sua curiosidade igualmente irresistível sobre aqueles que podem espionar nas margens dos seus lagos. Avistamentos de formas aquáticas geralmente ocorrem quando eles não conseguem evitar subir à superfície para dar uma olhada em alguém (ou algo) particularmente incomum na praia ou flutuando na superfície da água.\nEssas criaturas têm vida extremamente longa e podem passar décadas, ou mesmo séculos, com muito pouco para comer. Isso permite que formas aquáticas subsistam em lagos sem emergir por muitos anos, mesmo em corpos de água doce sem amplas fontes de alimento. As formas aquáticas podem permanecer no leito lamacento de um lago por anos, e sua evasão apenas contribui para sua reputação mítica. Quando um animal de estimação ou uma criança desaparece perto de um lago, podem surgir rumores de que a fonte de água local é a responsável, o que leva a contos populares que alertam os residentes para não se aventurarem sozinhos perto da água.\nEmbora a maioria das formas aquáticas sejam descritas como répteis serpentinos ou de pescoço longo, outras se parecem com focas ou baleias bizarramente alongadas, cavalos-marinhos impossivelmente grandes ou criaturas de pescoço longo com remos que lembram os dos elasmossauros.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "frio 10",
          "fogo 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "ThxPmnrVtmNhwvZC": {
          "name": "Maxilas",
          "damage": "2d10+11 perfurante"
        },
        "g5mgwMKnHhK1J2KJ": {
          "name": "Cauda",
          "damage": "2d6+11 contundente"
        }
      },
      "actions": {
        "1DHVqLzll7CSy0lk": {
          "name": "Metabolismo Lento",
          "description": "Uma forma aquática pode passar 10 anos sem se alimentar. Além desse limite, a fome da forma aquática faz com que ela fique Retardada 1, mas de outra forma não afeta sua vida útil. Uma forma de água que fica lenta como resultado da fome pode remover essa condição usando engolir inteiro para engolir uma refeição."
        },
        "XDk7h1qohUJ5ciHb": {
          "name": "Indetectável",
          "description": "Uma forma aquática tenta automaticamente neutralizar qualquer habilidade de detecção, revelação ou vidência tentada contra ela, usando seu modificador de Furtividade para o teste de neutralização."
        },
        "LJRJNDe5UkkH77yh": {
          "name": "Engula inteiro",
          "description": "Grande, (2d8+8)[concussão], dano, Ruptura 22"
        },
        "ixP8S16Fob4NTRit": {
          "name": "Viagem aquática",
          "description": "Uma forma aquosa pode se dissolver em água, aparecendo apenas como um longo e escuro trecho de líquido serpentino. Enquanto estiver nesta forma, a Velocidade de natação de uma forma aquática aumenta para 600 pés (180 metros), ela obtém sucesso automaticamente em testes de Atletismo para Nadar e ganha +4 de bônus de circunstância em testes de Furtividade na água. Uma forma de água pode permanecer nesta forma por 8 horas, mas não pode entrar em água salgada ao usar esta habilidade. Uma forma de água pode retornar à sua forma normal ao descartar esta ação."
        },
        "7IAQQwEmCY5d3iRO": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:icewyrm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c13e0c82920d7f3f5e53039e9d13d217c8c7f4a45265c24e30805ee4c0bd895f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Serpente do Gelo",
      "description": "Assemelhando-se a dragões serpentinos sem asas, formados de gelo irregular e atravessados ​​por veias de água quase congelada, esses elementais habitam dentro de icebergs e gostam de atacar navios ou criaturas que passam. Eles são especialmente comuns em trechos gelados do oceano no Plano da Água, onde os icebergs se agrupam em enormes ilhas de gelo.\nElementais da água que são infundidos com frio ou névoa aumentam a mobilidade em regiões fora dos corpos d'água.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "frio",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "fogo 10"
        ]
      },
      "attacks": {
        "F4KhMZF8q2FrD0C9": {
          "name": "Maxilas",
          "damage": "2d12+13 perfurante"
        },
        "ZyGUPCguMG5TFxsJ": {
          "name": "Cauda",
          "damage": "2d6+13 cortante; 1d6 frio"
        },
        "W4pUHMSmLzdO1gCq": {
          "name": "Fragmento de Gelo",
          "damage": "1d6+13 perfurante; 1d6 frio"
        }
      },
      "actions": {
        "dX6FcyWbQOQCk2oe": {
          "name": "Explosão",
          "description": "Quando a serpente de gelo morre, ela explode, causando 8d6[cold|options:area-damage] de dano a cada criatura em um @Template[type:emanation|distance:10] (check (reflex, dc:27, basic, options:area-effect) save)."
        },
        "MDEbv4aN0989Tv7d": {
          "name": "Respire fragmentos de gelo",
          "description": "A serpente de gelo respira um @Template[type:line|distance:60] de fragmentos congelantes de gelo afiado como navalha, causando 3d12[cold,3d12[piercing]|options:area-damage] de dano a todas as criaturas na linha (verificação (reflexo, dc:29, básico, opções:efeito de área) salvamento). A Serpente do Gelo não pode usar Respirar Fragmentos de Gelo novamente por [[/gmr 1d4 #Recharge Respirar Fragmentos de Gelo]]{1d4 rodadas}."
        },
        "pS4qXZ47uGUH7efn": {
          "name": "Toca de Gelo",
          "description": "O Icewyrm pode Escavar através do gelo ou neve com uma Velocidade de 20 pés (6 metros). Ele se move em sua velocidade máxima de toca, não deixando túneis ou sinais de sua passagem."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9675be19266a119d478cceac395cd01e8ec5da5d1fac909945261a47239fbd4e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Sussurrante (Adulto)",
      "description": "Os dragões sussurrantes são ávidos colecionadores de rumores e segredos que passam séculos aprimorando suas redes de informações e relacionamentos. Eles geralmente fazem isso não com a intenção de reter a informação sobre os outros ou de usá-la para suas próprias maquinações, mas simplesmente porque o processo de aprendizagem e coleta de informações é gratificante. Seus tesouros são escassos em comparação com os de outros dragões, pois eles guardam seus verdadeiros tesouros – segredos – em suas mentes.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "confuso",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "wvf12gsmaiIEZNk8": {
          "name": "Maxilas",
          "damage": "2d12+11 perfurante"
        },
        "vfwwJaezS2MAmsRg": {
          "name": "Garra",
          "damage": "2d10+11 cortante"
        },
        "cdWBM7kdsVKs9q9W": {
          "name": "Cauda",
          "damage": "2d10+11 contundente"
        }
      },
      "actions": {
        "gV2dYZt1HHQFQVza": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "zkcQGrvQXeO0d4YV": {
          "name": "+2 para Sentir Motivo",
          "description": ""
        },
        "eyJ8okEtlxlLWhjy": {
          "name": "Rede de Informação",
          "description": "O dragão pode tentar um teste de Sociedade para Recordar Conhecimento no lugar de um teste para Coletar Informações, recordando informações de informantes anteriores."
        },
        "vSiPTgWIPTPTQIaI": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "VnvkdDxkW7wfBMjT": {
          "name": "Solução Diplomática",
          "description": "Acionar a iniciativa Dragon Rolls\nEfeito O dragão atinge todos os inimigos que pode ver dentro de @Template[emanation|distance:60]{60 pés (18 metros)} com Calm aumentado para um Rank igual à metade do nível do dragão arredondado para cima (verificar (vontade, dc:28) salvar). O dragão não precisa Sustentar este efeito, mas se o dragão realizar qualquer ação hostil contra os afetados, ele quebra o efeito para todas as criaturas."
        },
        "XZUptOpkSx0PYtkI": {
          "name": "Sussurro Distrativo",
          "description": "Gatilho O dragão é alvo de um ataque\nEfeito Uma voz misteriosa sussurra algo desconcertante no ouvido da criatura desencadeadora, infligindo uma penalidade de circunstância de -2 ao ataque desencadeador.\nEfeito: Sussurro Distrativo"
        },
        "WdFNthO0BdxIqruL": {
          "name": "Respiração de Cogitação",
          "description": "O dragão libera um miasma desconcertante, causando 10d6[mental|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (will, dc:30, basic, options:area-effect,inflicts:stupefied) save). Uma criatura que falhe no teste fica Estupefata 1 (Estupefada 2 em caso de falha crítica) por 1 minuto. O dragão não pode usar Sopro de Cogitação novamente por [[/gmr 1d4 #Recharge Sopro de Cogitação]]{1d4 rodadas}."
        },
        "foIbgbTavh92IEGM": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "gnFWINeBp8o39lnC": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro de Cogitação sempre que consegue um acerto crítico com um Golpe."
        },
        "EZmRWrf1EQnbLdow": {
          "name": "Roubar Conhecimento",
          "description": "O dragão arranca um fragmento de conhecimento da mente de uma criatura dentro de 60 pés (18 metros), escolhendo uma habilidade para afetar. A criatura deve tentar um teste de resistência (vontade, dc:28).\nSucesso A criatura não é afetada.\nFalha No minuto seguinte, a criatura sofre uma penalidade de -1 em testes usando aquela habilidade, e o dragão recebe um bônus de status de +1 por usar aquela habilidade.\nFalha Crítica Como falha, mas a penalidade é –2 e o bônus é +2."
        },
        "dWk0sE2yMPmzHdY2": {
          "name": "Revele o segredo",
          "description": "O dragão investiga a mente de uma criatura dentro de 60 pés (18 metros) em busca de segredos, descobrindo algo que a criatura acharia embaraçoso ou vergonhoso, a menos que obtivesse sucesso em um teste (vontade, dc:30) de resistência. O alvo fica Amedrontado 1 e não pode reduzir sua condição de medo por 1 minuto ou até que o dragão revele o segredo. Como reação quando a criatura afetada tenta um teste, o dragão pode revelar seu segredo para desconcertá-la, exigindo que ela role duas vezes e obtenha o resultado mais baixo; este é um efeito de infortúnio."
        }
      },
      "spellcasting": {
        "hQpLecGIr5JQkFUk": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "HKxrPd7BmHbJHUzU": {
              "name": "Atordoamento"
            },
            "WRO85FOUCRQYw8f6": {
              "name": "Mensagem"
            },
            "iBK9DfO7gl7b2LHG": {
              "name": "Incorporar mensagem"
            },
            "bFBjTjzbnNzg2hlz": {
              "name": "Clariaudiência (à vontade)"
            },
            "gTsBfiveHO30gIiq": {
              "name": "Leitura da Mente"
            },
            "oSegsy2nlB1nIiYd": {
              "name": "Anel da Verdade"
            },
            "uN0n5eW8uwlWZT33": {
              "name": "Clarividência (à vontade)"
            },
            "1vcENX05gySjee84": {
              "name": "Sonda Mental"
            },
            "3gTrRmpHmJp3nAXr": {
              "name": "Charme"
            },
            "isUZZ0SGjSZpuk1r": {
              "name": "Sugestão"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:garadasura",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:522b430f5e932cc02bcbcdd7db965073a1d14fd90f889464788178a43818f85a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Garadasura",
      "description": "Garadasuras são enormes espíritos ofídicos que cumprem deveres de tutela e carnificina. Muitos são antigos nagas que desistiram do seu papel de administradores da realidade e, em vez disso, voltaram os seus esforços para reverter o acto de criação. Garadasuras muitas vezes continuam com os deveres que tinham como naga, mas também podem se tornar destrutivos, atacando com a força de uma legião venenosa inteira.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico"
      },
      "defenses": {
        "immunities": [
          "xingamento",
          "doença",
          "tóxico"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "72nPC9ya8Pja98ic": {
          "name": "Cimitarra",
          "damage": "2d6 veneno; 1d6 espiritual; 2d6+9 cortante"
        },
        "7NukLdAJAEhxLP3u": {
          "name": "Presas",
          "damage": "1d6 espiritual; 2d6+9 perfurante"
        },
        "RpgHrdF21zrT7e1R": {
          "name": "Cauda",
          "damage": "2d6+9 contundente; 1d6 espiritual"
        },
        "Rx5l9fGIcaUzFT05": {
          "name": "Cuspe de Veneno",
          "damage": "2d6+6 veneno"
        }
      },
      "actions": {
        "MhHHG3A7thGtrMjQ": {
          "name": "Telepatia 60 pés (18 metros)",
          "description": ""
        },
        "0CXSgC7Ffh11AmdZ": {
          "name": "Cura Rápida 5",
          "description": ""
        },
        "6gYxcRdszco3xrhm": {
          "name": "Aura Circundante",
          "description": "50 pés (15 metros). Um garadasura exala uma aura de 15 metros sempre que permanece imóvel por pelo menos 1 rodada. Se o garadasura tiver o traço sagrado, todas as criaturas aliadas dentro da área ganham +1 de bônus de status na CA e nos testes de resistência. Se o garadasura tiver a característica profana, todas as criaturas não aliadas que entrarem nesta área devem ter sucesso em um teste (vontade, dc:30, opções: efeito de área, movimento forçado) salvar ou gastar sua próxima ação para se mover em direção ao local do garadasura. Se o garadasura se mover, o efeito termina para todas as criaturas atualmente afetadas."
        },
        "X1AhOOLp0GOitePh": {
          "name": "Ataque reativo",
          "description": ""
        },
        "tHm3wgkFyDMMjxiF": {
          "name": "Veneno de Massacre",
          "description": "Teste de salvamento (fortitude, dc:30)\nDuração Máxima 6 rodadas\nEstágio 1 3d6[veneno] de dano e Lentidão 1 (1 rodada)\nEstágio 2 4d6[veneno] de dano e Lentidão 2 (1 rodada)\nEstágio 3 6d6[veneno] de dano e paralisado por 1 hora"
        },
        "dehYiGG3Z2YxC2wA": {
          "name": "Contrair",
          "description": "(2d6+7)[concussão], teste (fortitude, dc:30, básico)"
        },
        "4DkqUzS2RotwTsdR": {
          "name": "Rosto Glorioso",
          "description": "O asura se santifica como sagrado ou profano, ganhando a característica correspondente à sua escolha e perdendo a característica oposta; seus golpes, magias e habilidades também ganham a característica correspondente à sua escolha. O asura também ganha fraqueza 10 à santificação oposta e perde qualquer fraqueza à santificação escolhida. A escolha é permanente até que o asura use esta habilidade para mudar sua santificação."
        },
        "rTL7mF7ksWTlVNw9": {
          "name": "Deslizar",
          "description": "O garadasura caminha ou nada até metade de sua velocidade, puxando consigo quaisquer criaturas que tenha agarrado."
        },
        "1SrblqAtXEROaDuv": {
          "name": "Engula inteiro",
          "description": "Grande, (2d10+9)[concussão], Ruptura 30"
        },
        "uMXKFqIG3ZKjHoNO": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spiral-centurion",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d86bdee4a2aded8af3bae165c3d0493620b0117305b0f7a18f9beb7ff2287310",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Centurião Espiral",
      "description": "Essas construções mecânicas foram criadas para servir como guardiões em uma era antiga e passada, embora exatamente quem as fez e os segredos de sua construção tenham sido perdidos há muito tempo na história. Da cintura para cima, eles se assemelham a humanóides feitos de metal, mas da cintura para baixo, seus corpos assumem a forma de piões de metal giratórios cercados por lâminas que são excelentes para derrubar inimigos próximos. A maioria dos centuriões espirais pode ser instruída a se retirar com uma senha, mas muitas vezes essas frases de comando foram perdidas nas brumas do tempo. Em casos raros, um centurião espiral também pode empunhar armas manufaturadas ou um escudo além de suas armas embutidas, dando-lhe acesso a ações adicionais além das listadas abaixo.\nA maioria dos centuriões espirais tem centenas ou mesmo milhares de anos, permanecendo funcionais apenas por causa da poderosa magia usada em sua criação. Ainda assim, milênios de negligência fizeram com que muitos centuriões espirais desenvolvessem pequenas falhas ou mau funcionamento.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "qAykd9NBCQzObEjm": {
          "name": "Lâmina",
          "damage": "2d12+12 cortante"
        }
      },
      "actions": {
        "8SO4HlejQGDEY7MZ": {
          "name": "Pesado",
          "description": "O design em forma de topo de um centurião em espiral o torna suscetível a efeitos que fariam com que ele caísse. A CD de qualquer tentativa de derrubar o centurião espiral é reduzida em 5. Se o centurião espiral tentar um teste ou teste de resistência para resistir a ser derrubado, ele sofrerá uma penalidade de status de –5. Um centurião espiral que tenha sido derrubado não pode usar nenhuma ação além de tentar Ficar de Pé, mas ele deve ter sucesso em um teste (acrobacia, cd:30) para fazê-lo."
        },
        "4gwjWKeZ1qsrbvjD": {
          "name": "Arremessar Lâmina",
          "description": "O centurião espiral lança uma de suas lâminas com um giro em ângulo para garantir uma trajetória de voo descendente. A lâmina causa 6d6[slashing|options:area-damage] de dano a cada criatura em um salvamento de @Template[type:line|distance:40] (check (reflex, dc:30, basic)).\nNo início do próximo turno do centurião espiral, a lâmina se volta e retorna ao longo da mesma trajetória de vôo, causando novamente 6d6[cortando|opções:dano de área] de dano (teste (reflexo, dc:30, básico) de salvamento) a cada criatura ao longo da mesma linha."
        },
        "w4QXU6YbX6hTA0ov": {
          "name": "Acelere",
          "description": "Requisitos O centurião espiral ainda não agiu neste turno\nEfeito O centurião espiral avança até sua velocidade. Ele então ganha um bônus de circunstância de +2 nas jogadas de ataque e dano até o final do seu turno."
        },
        "KAw4HNUZzVDNAT0n": {
          "name": "Atropelar",
          "description": "Médio ou menor, lâmina, xadrez (reflexo, dc:30, básico)"
        },
        "1uZRuK9pqKEMWCtB": {
          "name": "Morte Giratória",
          "description": "O centurião espiral gira furiosamente no lugar, suas lâminas estendidas para cortar criaturas próximas. Faz até cinco ataques de lâmina corpo a corpo. Nenhuma criatura pode ser alvo de mais de um golpe de lâmina durante o uso desta habilidade. Esses ataques contam para a penalidade de ataque múltiplo do centurião espiral, mas a penalidade de ataque múltiplo não aumenta até que todos os ataques sejam feitos."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:brainchild",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:474b047936c66965af3592c1fb7c8d82c89eadf34d98b204825a471eb70ee143",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ideia",
      "description": "Um boato pode se tornar tão vívido e persistente que ganha vida, criando uma ideia – uma ilusão viva que nasce de uma crença intensa em um assassino implacável e implacável. Freqüentemente, esses rumores vêm de vítimas de um magia Visão da Morte. As capacidades de uma ideia aumentam quando perseguem um crente, mas diminuem diante dos céticos, tornando-os tão perigosos quanto se acredita que sejam. Um simples impulso de perseguir, aterrorizar e matar impulsiona uma ideia, mas a criatura também pode exibir outros comportamentos atribuídos a ela por meio de fofocas.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença",
          "condenado",
          "vidência"
        ],
        "resistances": [],
        "weaknesses": [
          "mental 10"
        ]
      },
      "attacks": {
        "YKo3Am15Wz2kJyKI": {
          "name": "Arma Ilusória",
          "damage": "4d6+10 mental"
        },
        "JA8W1EoSKmMH74zg": {
          "name": "Arma Ilusória",
          "damage": "4d6+6 mental"
        }
      },
      "actions": {
        "YzA4FebdyXfdfD73": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "6u4WiGSgJcSBMIVQ": {
          "name": "Língua universal",
          "description": "Qualquer coisa falada pela ideia é percebida pelo ouvinte em sua língua nativa."
        },
        "X8q0VOcCAdQbazmw": {
          "name": "Lenda Urbana",
          "description": "Uma ideia é sustentada apenas pela reputação que a precede. Criaturas estúpidas são imunes a ideias e não podem percebê-las.\nO tamanho, as características e os itens da ideia, bem como a aparência de seus ataques, correspondem ao que os inimigos que os percebem esperam. Se os inimigos esperam ver coisas diferentes, a ideia escolhe qual manifestar. Se qualquer criatura que possa perceber a ideia acredita que a ideia tem uma das habilidades abaixo, a ideia tem essa habilidade.\nUma criatura pode Procurar ou Sentir Motivo (contra a CD de Enganação da criação) para tentar descrer de uma habilidade individual. Se em algum momento nenhuma criatura que perceba a ideia acreditar na habilidade, a ideia perde essa habilidade imediatamente. Se os inimigos esperam detalhes diferentes, como um acreditar que a ideia é imune ao fogo e outro acreditar que é imune a adivinhações, a ideia escolhe uma para ter.\n• Tremorsense (impreciso) 100 pés (30 metros)\n• Imunidade a um tipo de dano, escola de magia ou condição\n• Fraqueza 10 para um tipo de dano que não seja mental\n• Resistência 10 a danos físicos, com exceção de ferro frio ou prata\n• Presença Assustadora (aura, emoção, medo, mental) 100 pés (30 metros), DC 28\n• [[/r 1d6]]{1d6} Dano Extra em Golpes, de um tipo em que o inimigo acredita\n• magias adicionais Phantom Pain e Shadow Blast no 6º Rank"
        },
        "ia7nfgIs3ERJytZy": {
          "name": "Persistência de Memória",
          "description": "Quando uma ideia é destruída, ela retorna se alguém ainda acreditar plenamente que ela existe, reformando-se dentro de 100 pés (30 metros) de qualquer crente após [[/br 2d4 #Persistance of Memory]]{2d4 dias}."
        }
      },
      "spellcasting": {
        "gLEu7XWn7pQSVc6w": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "seP0NGUChpUSv1ig": {
              "name": "Invenção"
            },
            "8UUNPxok53FTJal7": {
              "name": "Mensagem"
            },
            "QWZACQakIZ1xcWb4": {
              "name": "Translocar"
            },
            "qaLXs7SGQuSpy8Dv": {
              "name": "Visão da Morte (a imagem lembra a ideia)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vigilia",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e723665a23b8644218257a71a9b6891566a76eecf84bdddf0cfedc12d3df04d7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Vigília",
      "description": "Os construtos guardiões do Eixo são construídos em grande número por axiomitas e patrulham regularmente as ruas daquela metrópole rigidamente estruturada. Fora da cidade, um vigilia pode ser convocado por mortais para proteger um local específico ou fazer cumprir os decretos de um líder.\nEmbora geralmente tenham forma humanóide, seus corpos são uma malha solta de tiras de latão em torno de um núcleo cristalino, como os árbitros nos quais se baseiam. O núcleo de cada vigilia é formado em torno de um fragmento diferente de texto jurídico das vastas bibliotecas da Axis. Este estatuto ou subseção, embora não seja necessariamente importante para outros, constitui a força motriz mística e emocional por trás dessas sentinelas.\nDeixados por conta própria, os vigilias normalmente aplicam as leis locais da melhor maneira possível, recorrendo às leis labirínticas do Eixo para preencher quaisquer lacunas. Embora os vigilantes se sintam desconfortáveis ​​em fazer julgamentos, eles são capazes de fazê-lo. Dito isto, este desconforto faz com que frequentemente procurem refúgio em áreas com leis mais complexas e completas.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "empyrean": "empíreo",
        "utopian": "utópico"
      },
      "defenses": {
        "immunities": [
          "doença",
          "emoção",
          "efeitos do medo"
        ],
        "resistances": [
          "eletricidade 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "CKDAHGZLeaxzfQbz": {
          "name": "Punho",
          "damage": "2d10+10 contundente; 1d10 eletricidade"
        }
      },
      "actions": {
        "vEYdUpBww370sGIX": {
          "name": "Purga Elétrica",
          "description": "A vigilia libera raios de seu corpo em um @Template[type:emanation|distance:30] causando 4d10[electricity|options:area-damage] de dano (teste (reflexo, dc:30, básico) de salvamento) a todas as criaturas que não são aeons ou construtos. A vigilia fica então desacelerada 1 por 1 rodada."
        },
        "j1ejW1HNjLpzBrmh": {
          "name": "Corrente Relâmpago",
          "description": "A vigilia envolve correntes momentâneas de energia elétrica em torno de uma criatura dentro de 60 pés (18 metros), causando 2d10[eletricidade] de dano (teste (reflexo, dc:30, básico)). Uma criatura que falhe no salvamento também é puxada 10 pés (3 metros) em direção à vigilia (20 pés (6 metros) em caso de falha crítica)."
        },
        "mab3JZW2e16yWiEC": {
          "name": "Faça prisioneiro",
          "description": "O vigilia interage para pegar uma criatura inconsciente média ou menor ao seu alcance e, em seguida, avança."
        }
      },
      "spellcasting": {
        "TfxIcQi8QBXUd1Hr": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "N9a5ZuH17pRQZZvK": {
              "name": "Veja o Invisível (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spinosaurus",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3840cb3860808da7cfc3c7738cf68745f606608dbb404a1ea899f0e64c794737",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Espinossauro",
      "description": "O espinossauro é mais do que apenas um dos maiores dinossauros carnívoros – é também um dos mais incomuns na aparência, com uma grande barbatana em forma de vela percorrendo sua espinha. Muitas vezes bastante colorida, esta vela permite que o espinossauro atraia parceiros, auxilia na natação e faz com que pareça ainda maior do que realmente é. Um espinossauro nadador também pode usar a vela como parte de um meio único de cambalear a presa, batendo com ela na água para formar uma onda esmagadora. Um espinossauro pode medir até 60 pés (18 metros) de comprimento e pesar 25.000 libras.\nO espinossauro se sente igualmente à vontade na água e na terra, e sua boca longa e cheia de dentes está bem adaptada para capturar presas nadadoras. As tentativas dos gigantes de capturar espinossauros para servirem como guardiões geralmente fracassam, pois esses dinossauros teimosos não domesticam bem. Suas atitudes rudes e aparência impressionante os tornam mais adequados para esportes sangrentos, e são prêmios populares para aqueles que administram arenas especializadas em batalhas que colocam gladiadores contra animais ou feras famintos. Essas produções são verdadeiros banquetes de sangue para os olhos e comandam públicos a centenas de quilômetros de distância. É claro que um dinossauro furioso forçado a lutar para a diversão dos outros não discriminará entre refeições potenciais no campo de batalha e aquelas sentadas nas arquibancadas ao redor, tornando os assentos mais próximos da borda da arena possivelmente parte do show também.\nA aparência e a força do espinossauro o tornam atraente para mais do que apenas gigantes e organizadores de esportes sangrentos. Os feiticeiros que transformam animais em guardiões mágicos há muito ficam intrigados com o potencial do espinossauro. Devido à reputação de violência da criatura, esses feiticeiros enfrentam grande perigo enquanto encantam alguém para trazê-lo para casa. No entanto, para aqueles que estão intrigados com as habilidades hipotéticas da criatura, esse risco vale a pena. Mais do que qualquer outro dinossauro, os espinossauros foram submetidos a procedimentos de deformação de carne, cruzamentos com monstros e outras técnicas mágicas nas mãos de feiticeiros reclusos que faziam experiências para aumentar a viabilidade das criaturas como guardiões eficazes.",
      "size": "Imenso",
      "senses": {
        "low-light-vision": "visão na penumbra",
        "scent-imprecise-30": "faro impreciso 30 pés (9 metros)"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "mmb4NGB4HueXi8Ty": {
          "name": "Morder",
          "damage": "2d12+14 perfurante"
        },
        "fysusPtWaa25MvUW": {
          "name": "Garra",
          "damage": "2d8+14 cortante"
        }
      },
      "actions": {
        "oQcnbbUjvuJ6yIaK": {
          "name": "Respiração Profunda",
          "description": "Um espinossauro pode prender a respiração por 2 horas."
        },
        "BYqZd7dW5USVQMnx": {
          "name": "Rasgar e rasgar",
          "description": "Requisitos O espinossauro tem uma criatura agarrada ou contida em suas mandíbulas\nEfeito O espinossauro se ergue e ataca com suas garras a criatura que agarrou, causando 4d8[cortante] de dano (teste de resistência (reflexo, dc:30, básico)). Uma criatura que falhar neste teste também sofre 1d6[persistente,sangramento] de dano."
        },
        "t0On0v7gyVoScNyY": {
          "name": "Vela impressionante",
          "description": "Requisitos O espinossauro nada na superfície da água\nEfeito Com uma estocada poderosa para o lado, o espinossauro usa sua vela para bater na superfície da água, criando uma onda esmagadora de água que causa 6d6[concussão|opções:dano de área] de dano em um @Template[cone|distance:30]. Cada criatura na água na área deve tentar um teste de resistência (reflexo, dc:30, opções:efeito de área,efeito de dano,inflige:lentidão,inflige:atordoado).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total e fica desacelerada 1 até o final do próximo turno.\nFalha Crítica A criatura sofre o dobro de dano e fica Atordoada 3."
        },
        "sW9lqWGbyXr7xeXh": {
          "name": "Engula inteiro",
          "description": "Médio, 2d12 de dano [concussão], Ruptura 19"
        },
        "C59c2YpUbKfcGuPp": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:skeleton-infantry",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2b21b243c4765c3fe08bf5cf57a046f8830dff25434da1a6316119f2fabf73d3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Infantaria Esqueleto",
      "description": "Esta tropa de esqueletos já foi uma coorte de infantaria altamente disciplinada com lanças e escudos de um antigo império.\nQuase qualquer criatura que teve ossos em vida e os deixou para trás na morte pode se tornar um esqueleto humanoide morto-vivo cambaleante, bestas, aberrações, fadas e muito mais.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "mental",
          "paralisado",
          "tóxico",
          "inconsciente"
        ],
        "resistances": [
          "frio 5",
          "eletricidade 5",
          "fogo 5",
          "perfurando 10",
          "cortando 10"
        ],
        "weaknesses": [
          "dano de área 10",
          "dano por respingo 10"
        ]
      },
      "attacks": {},
      "actions": {
        "AHL4n7RnueMnqqXS": {
          "name": "Forme uma falange",
          "description": "Muitos dos esqueletos levantam seus escudos para proteger os outros. A infantaria ganha um bônus de circunstância de +2 na CA até o início do próximo turno."
        },
        "Q7bhdveHuNg7fLZs": {
          "name": "Defesas de tropas",
          "description": "HP 180 (4 segmentos); Limiares 120 (3 segmentos), 60 (2 segmentos);"
        },
        "Bw2zDEye8SPrcS3G": {
          "name": "Movimento de tropas",
          "description": ""
        },
        "L4eZWrxPCscqkfv1": {
          "name": "Arremesse dardos!",
          "description": "Os membros da tropa lançam uma saraivada de dardos. Cada criatura em um @Template[type:burst|distance:10] dentro de 30 pés (9 metros) da tropa sofre (2d6+10)[piercing|options:area-damage] dano (verificação (reflexo, dc:27, básico, opções:efeito de área) salvamento). Quando a tropa é reduzida a 2 segmentos, esta área diminui para @Template[type:burst|distance:5]."
        },
        "2lp8axHkLWnfErrb": {
          "name": "Lanças inferiores!",
          "description": "1 a 3\nFrequência uma vez por rodada\nEfeito Os esqueletos se envolvem em um ataque coordenado de lança longa contra cada inimigo dentro de @Template[emanation|distance:10]{10 pés (3 metros)} (check (reflex, dc:27, basic, options:area-effect) save). O dano depende do número de ações.\n1 2d8[perfuração|opções:dano em área] de dano\n2 (3d8+7)[perfuração|opções:dano em área] de dano\n3 (4d8+7)[perfuração|opções:dano em área] de dano"
        },
        "n7LgURaW8hihxzYn": {
          "name": "Carga da Falange",
          "description": "Requisitos A infantaria está em uma falange\nEfeito Os esqueletos abaixam suas lanças longas e atacam. A tropa avança em linha reta até ficar adjacente a um inimigo e então usa Lanças Inferiores!, causando (3d8+7)[perfurante] de dano. Qualquer criatura que falhar no teste também será derrubada."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ash-giant",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:da09e0a5a3761a879aa360643af1334ce3d6d378ec15ebc0433b70f729cb5f36",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Gigante de Cinzas",
      "description": "Robustos e cobertos de pústulas e feridas provenientes da peregrinação por terrenos baldios, os gigantes das cinzas habitam regiões selvagens inóspitas. Suas vidas são difíceis, tornando-os criaturas totalmente cruéis, caprichosas e cruéis. Seu senso de humor sádico e amor por brincadeiras os tornam odiados por quase todos os humanóides que encontram. Apesar de serem grosseiros e rudes, os gigantes das cinzas são acima de tudo sobreviventes e usam sua engenhosidade para fabricar armas, armadilhas, arreios para montarias e ferramentas. Se o objetivo for crueldade, brutalidade ou uma pegadinha, um gigante das cinzas encontrará uma maneira de fabricar as ferramentas de que precisa. Os torrões de porquinho são uma construção favorita – engenhocas de sucata e outros metais transformadas em uma bola que explode com o impacto.\nEspalhados por todo o mundo, os gigantes são tão diversos quanto os lugares isolados que habitam. Um gigante causa uma grande impressão no meio ambiente local, especialmente nas criaturas menores e mais fracas.",
      "size": "Grande",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "PW9v8f6Hfu1ElFfp": {
          "name": "Mangual de Guerra",
          "damage": "2d10+13 contundente"
        },
        "7MKDLcP6s5TCT7Os": {
          "name": "Punho",
          "damage": "2d4+13 contundente"
        },
        "hHSP3HRNZQX1ww36": {
          "name": "Porquinho torrão",
          "damage": "2d8+7 cortante; 5 cortante"
        }
      },
      "actions": {
        "DcQ27Bip61jNm15p": {
          "name": "Empatia com vermes",
          "description": "O gigante das cinzas pode fazer perguntas, receber respostas e usar a habilidade Diplomacia com insetos, aracnídeos e criaturas semelhantes."
        },
        "WdWVS7B9f7eqMitv": {
          "name": "+2 Status para todos os salvamentos contra doenças",
          "description": ""
        },
        "5nUXyWhPLXUerMiA": {
          "name": "Ataque reativo",
          "description": ""
        },
        "F41YRBN6amA5eY2O": {
          "name": "Tumor Pop",
          "description": "Quando o gigante das cinzas sofre dano perfurante enquanto tem um tumor inchado, o tumor explode automaticamente, com o efeito de Blastboil."
        },
        "lIIwlGQD3NdnsK5t": {
          "name": "Fervura",
          "description": "O gigante das cinzas estoura uma das pústulas enormes e inchadas em seu corpo. Cada criatura em um @Template[type:cone|distance:15] sofre 5d8[veneno|options:area-damage] de dano com um teste de resistência (reflexo, dc:29, básico, opções:efeito de área,inflige:enjoado). Uma criatura que falhe no teste também fica Enjoada 1 (ou Enjoada 2 em caso de falha crítica). Esta habilidade e estourar tumor não podem ser usados ​​novamente até que outro tumor aumente até um tamanho adequado em [[/gmr 1d4 #rounds]]{1d4 rodadas}."
        },
        "ycGzzDkl7WG1FIsA": {
          "name": "Moedor Sangrento",
          "description": "Requisitos A última ação do gigante das cinzas foi um ataque de mangual de guerra bem-sucedido\nEfeito O gigante das cinzas envolve o alvo com a corrente do mangual e tritura sua carne. A criatura sofre 2d10[cortante,2d8[persistente,sangramento]]{2d8 de dano cortante e 2d8 de dano de sangramento persistente} com um teste de resistência (fortitude, dc:30, básico)."
        },
        "hYa3M7gNghfbyoPE": {
          "name": "Emaranhado-Topple",
          "description": "O gigante das cinzas faz um porquinho Strike. Se acertar, o alvo ficará emaranhado em pedaços irregulares. Está imobilizado, não consegue sair do chão e cai no chão se estiver voando. Isso termina se a criatura [[/act escape]]{Escapes} ou o metal for [[/act force-open dc=28]]{Forced Open}."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:meladaemon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8a51045afe7408c646520b5e82044645c129a611804002eeec925ec33c4ee65d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Meladaemon",
      "description": "Meladaemons personificam a morte por fome e sede, e deleitam-se em espalhar o mesmo desespero que causou sua morte mortal. Quando não estão destruindo campos, massacrando gado ou contaminando fontes de água, eles fazem experiências com prisioneiros para estudar quanto tempo as criaturas podem passar sem sustento e os efeitos deletérios que resultam de tal privação. Extremamente leais a Trelmarixian, Cavaleiro da Fome, eles não servem a outros seres. Eles trabalham ao lado de outros demônios se Trelmarixian assim o desejar, mas são notoriamente traidores.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-30": "lifesense-impreciso-30"
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
          "santo 10"
        ]
      },
      "attacks": {
        "jpeqjLFSGfQaHqwb": {
          "name": "Maxilas",
          "damage": "2d12+16 perfurante"
        },
        "zHWFkxssQtSSZH42": {
          "name": "Garra",
          "damage": "2d8+16 cortante"
        }
      },
      "actions": {
        "HRJpFIoBwbJ1rwnG": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "dTZURdZLg8n5enSz": {
          "name": "Lifesense (impreciso) 30 pés (9 metros)",
          "description": ""
        },
        "c3PzbXMSnqoOehvP": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "BmhdDSnmoRYLlefv": {
          "name": "Aura consumista",
          "description": "20 pés (6 metros). Um meladaemon emana uma aura de fome intensa. Cada rodada que uma criatura inicia seu turno na aura, ela deve tentar um teste de resistência (fortitude, dc:27, opções: efeito de área, efeito de dano, infligir: fatigado). Em caso de falha, a criatura sofre 1d6[void|options:area-damage] de dano (2d6[void|options:area-damage] de dano em uma falha crítica) e fica Fatigada. Esse cansaço termina assim que a criatura ingere algum alimento."
        },
        "rx9aGcoGrLLVPzhV": {
          "name": "Oportunidade fulminante",
          "description": "Gatilho O meladaemon é atacado por uma criatura adjacente e o ataque erra\nEfeito O meladaemon ataca a criatura acionadora, que deve imediatamente tentar um salvamento contra o toque fulminante do meladaemon."
        },
        "S8XYYEnqxZeY5C7K": {
          "name": "Fome Demoníaca",
          "description": "Teste de salvamento (fortitude, dc:29)\nPortador de estágio 1 sem efeito nocivo (1 dia)\nEstágio 2 Enfraquecido 1 (1 dia)\nEstágio 3 Debilitado 2 (1 dia)\nEstágio 4 como estágio 3\nEstágio 5 Debilitado 3 (1 semana)\nEstágio 6 morto"
        },
        "ERMHc3Xc7e0s0qGD": {
          "name": "Toque fulminante",
          "description": "Quando o meladaemon atinge com um Golpe de garra ou uma criatura começa seu turno Agarrada pelo meladaemon, a criatura deve tentar um teste de resistência (fortitude, dc:30, opções:efeito de dano,inflige:fatigado). Em caso de falha, a criatura sofre 1d6[void] de dano e fica Fatigada. Esse cansaço acaba quando a criatura bebe."
        },
        "d4npRCLSCUhI7iww": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "OACmutVuYdHoFbvw": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "ARgSXbi7YTyqxDpw": {
              "name": "Translocar (à vontade)"
            },
            "pSQCf3m3lML6XaSp": {
              "name": "Temer"
            },
            "8lQzvlhmZk1A0Cgw": {
              "name": "Barragem de Força (à vontade)"
            },
            "n9tpbLZJuCML2aEm": {
              "name": "Translocar"
            },
            "eWYkBia919BmhUz4": {
              "name": "Dor Fantasma"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:larabay",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:59e49a51cb3b78046e8197d673a4f128bbdb5a50af54ce695a06b1955dd1937a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Larabay",
      "description": "Larabays são fadas de olhos brilhantes e aparência humanóide com asas coloridas e dentes em forma de agulha que geralmente residem ao longo de regiões costeiras quentes e ilhas. Como outras fadas, eles gostam de brincadeiras luxuosas e ilusões fantásticas que criam trapaça e confusão. O desejo de um larabay por uma piada às vezes pode chegar a extremos terríveis, como empregar ilusões para atrair navios para as rochas e viajantes para fora dos penhascos. Embora alguns tenham se tornado heróis por acaso pregando peças em tiranos ou pessoas cruéis, isso é quase inteiramente coincidência, já que os larabays nem sempre consideram a moral ou os objetivos de seus alvos; eles simplesmente aproveitam os frutos do seu caos.",
      "size": "Médio",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "fey": "feérico",
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10"
        ]
      },
      "attacks": {
        "9fcLhRTwbEpswhYp": {
          "name": "Florete",
          "damage": "2d6+12 perfurante"
        },
        "NqTNTK0tl3QCKa5B": {
          "name": "Olhar Confuso",
          "damage": "2d8+10 mental"
        }
      },
      "actions": {
        "jhjJPtEMq18J1owa": {
          "name": "magias à vontade",
          "description": ""
        },
        "wnOoVALDen1uuvTp": {
          "name": "Visões confusas",
          "description": "O olhar do larabay cria desorientação e confusão. Uma criatura atingida por um olhar confuso deve tentar um teste de Vontade.\nSucesso Crítico O alvo não é afetado e fica temporariamente imune a visões confusas por 1 minuto.\nSucesso O alvo não é afetado.\nFalha O alvo fica desajeitado e Deslumbrado por 1 rodada.\nFalha Crítica O alvo fica Confuso por 1 rodada, e desajeitado e deslumbrado por 1 rodada depois."
        },
        "sKAr2cQ7HlVEltcZ": {
          "name": "Alterar forma",
          "description": "O larabay pode assumir a aparência de um humanóide Médio ou Pequeno específico. Isso remove sua velocidade de voo, mas não altera os modificadores de ataque e dano de seus golpes."
        },
        "c1QNAgPGujN03z8P": {
          "name": "Travessura",
          "description": "Requisitos A última ação do larabay foi um ataque de florete bem-sucedido\nEfeito O larabay tenta desarmar a criatura atingida. Eles ganham um bônus de status de +4 no teste de Atletismo. Esta tentativa não se aplica nem conta para a penalidade de ataque múltiplo do larabay."
        },
        "HEcM1oG1748cqEWv": {
          "name": "Vôo Arco-Íris",
          "description": "O larabay voa até sua velocidade de vôo, criando um arco-íris deslumbrante em seu rastro. Este movimento não provoca reações. Qualquer criatura adjacente ao larabay em qualquer ponto durante este movimento deve tentar um teste de resistência (vontade, dc:30) para resistir a olhar para o magnífico arco-íris. O larabay não pode usar o Rainbow Flight novamente por [[/gmr 1d4 #Recharge Rainbow Flight]]{1d4 rodadas}.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Deslumbrado por 1 rodada.\nFalha O alvo fica ofuscado por 1 rodada e desacelerado 1.\nFalha Crítica O alvo fica ofuscado por 1 minuto e Lento 2."
        }
      },
      "spellcasting": {
        "lKFIRb9TB714ct1E": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "l5vM1p9S8ja4fZNL": {
              "name": "Invenção"
            },
            "bvI0yXCKaBXmkD2a": {
              "name": "Projétil Telecinético"
            },
            "q9MUr76VZmGi6UuC": {
              "name": "Invisibilidade (à vontade)"
            },
            "avldvJFRLhlY8XIe": {
              "name": "Objeto Ilusório"
            },
            "9BRyjkDyMGlEDV3W": {
              "name": "Cena Ilusória"
            },
            "P9GRl8QRA7fsEGS0": {
              "name": "Metamorfose Amaldiçoada"
            },
            "lakyG785Lie8cdpA": {
              "name": "Alucinação"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:argorth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4e318e5bef07153391f317bb645591d73c4cf1b413415cf7eced05af334cf457",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Argorth",
      "description": "Um argorth é uma enorme criatura parecida com um verme, com três enormes mandíbulas pontiagudas circundando sua mandíbula rangente. Ele se move sobre uma série de ossos em forma de gancho que se projetam de sua barriga, complementados por um empurrão ocasional com a metade posterior de seus 9 metros de comprimento. O estúpido e cego argorth não conhece nada além de raiva e destruição, tornando-o mais parecido com um desastre natural do que qualquer animal conhecido do mundo natural.\nArgorths são a prole incompreensível dos dibrasgorths. Eles se desprendem totalmente formados da massa de tentáculos da criatura-mãe, embora estudiosos e sábios não saibam exatamente quando ou por que esse processo ocorre. O estudo de tais aberrações é dificultado pela sua natureza incrivelmente violenta; poucos conseguem escapar da fúria de um argorth, muito menos de um dibrasgorth em muda. Uma vez nascido, um argorth imediatamente se envolve na destruição desenfreada de tudo ao seu redor. Embora não tenha olhos, tanto sua capacidade de sentir instintivamente criaturas com bombeamento de sangue quanto os milhares de minúsculos pelos grossos que cobrem seu corpo, permitindo-lhe \"cheirar\" o ar ao seu redor, garantem que nada escape de sua violência.",
      "size": "Enorme",
      "senses": {
        "bloodsense-120": "sentido de sangue-120",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [
          "ácido 10",
          "frio 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "7KqASSnXr8Bhi09L": {
          "name": "Maxilas",
          "damage": "2d10+13 perfurante"
        },
        "AvuXA8VjNMqsc97A": {
          "name": "Cauda",
          "damage": "2d8+13 contundente"
        }
      },
      "actions": {
        "D2bAufXs98uxltKn": {
          "name": "Sentido de Sangue",
          "description": "O argorth pode detectar qualquer criatura que tenha batimentos cardíacos, como a maioria dos humanóides, ou qualquer criatura que tenha consumido sangue dentro de 1 semana, como um vampiro."
        },
        "LwhL0DrelXDydXZi": {
          "name": "Golpe da Morte",
          "description": "Acionar O argorth é reduzido a 0 Pontos de Vida\nEfeito Antes de ser nocauteado, o argorth dá um golpe de cauda contra uma criatura aleatória ao seu alcance."
        },
        "bdFAgVbAcmSp7PxU": {
          "name": "Contrair",
          "description": "O argorth só pode Constringir criaturas agarradas pela cauda.\n(2d8+7)[concussão], teste (fortitude, dc:27, básico)"
        },
        "nR8duCVvBdxwPkZG": {
          "name": "Libra terrestre",
          "description": "O argorth ergue seu enorme volume e o joga para baixo com uma força incrível. Cada criatura em um @Template[type:emanation|distance:10] sofre 5d8[concussão|options:area-damage] de dano (verificação (reflexo, dc:27, básico, opções:efeito de área,inflige:prone) salvamento). Uma criatura que falhar criticamente neste teste também será derrubada."
        },
        "ADEKj7WtXpaMTJsI": {
          "name": "Engula inteiro",
          "description": "Grande, (2d8+7)[concussão], Ruptura 24"
        },
        "xfLLF3SeG0v8yQNe": {
          "name": "Grito Não Natural",
          "description": "O argorth emite um uivo terrível que não pertence ao mundo mortal. Cada criatura sem aberração dentro de 120 pés (36 metros) deve tentar um teste de resistência (vontade, dc:30, opções:efeito de área,inflige:assustado). Independentemente do resultado, uma criatura fica temporariamente imune ao Grito Não Natural do argorth por 24 horas.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura está Assustada 1.\nFalha A criatura fica Estupefata 1 por 1 minuto e Assustada 2.\nFalha Crítica A criatura fica Estupefata 2 por 1 minuto e Assustada 3."
        },
        "QzamKAeEQgw5VvBA": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:atrixyl",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3bb1323a386a0c7780e5cfadb80960071182e7c75becab1b3922a36b280b6187",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Atrixil",
      "description": "Muito raramente, quando as crias do pecado (Núcleo do Monstro 310) sacrificam seres sencientes aos poços rúnicos, em vez das crias do pecado, um tipo completamente diferente de aberração é criado. Atrixyls são guerreiros humanóides inseticidas, cujos poderes são semelhantes, porém mais fortes do que os descendentes do pecado comuns, e que se dedicam a destruir poços rúnicos e artefatos feshwarping semelhantes. Alguns atrixyls procuram destruir os poços rúnicos devido a uma impressão de dor e sofrimento que ocorre durante sua criação, buscando prevenir o sofrimento futuro dos poços rúnicos. Outros procuram quebrar um poço rúnico e explorar suas energias mágicas para ganhar poder pessoal. Esta missão incansável lhes rendeu o epíteto de “quebradores de runas” e os colocou em conflito com as crias do pecado, cujas existências dependem desses poços rúnicos.\nAtrixyls atravessam as terras devastadas de Golarion em busca de antigos poços rúnicos e instalações mais contemporâneas de feshwarping.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "draconic": "dracônico",
        "elven": "elfo",
        "sakvroth": "sakvroth",
        "thassilonian": "talsilônico"
      },
      "defenses": {
        "immunities": [
          "controlado"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": [
          "ácido 10"
        ]
      },
      "attacks": {
        "RQNShsaROepiPbtE": {
          "name": "Punho",
          "damage": "2d12+10 contundente"
        }
      },
      "actions": {
        "YMARO505FZmjZpWY": {
          "name": "Aroma do verdadeiro pecado",
          "description": "Um atrixyl pode cheirar criaturas que refletem ou geralmente se deleitam com qualquer um dos sete pecados definidos pelo antigo império de Thassilon (inveja, gula, ganância, luxúria, orgulho, preguiça e ira) dentro de 60 pés (18 metros) como um sentido preciso e também pode distinguir entre diferentes pecados e criaturas. Isso normalmente inclui crias do pecado e certos demônios, embora o Mestre em última instância determine quais criaturas são apropriadamente pecaminosas."
        },
        "5juOtu2EkXmkejEA": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "d37h3mTK9ciNE4N1": {
          "name": "Ataque reativo",
          "description": ""
        },
        "SBzvpsaXBalZcAkX": {
          "name": "Quebra de magia",
          "description": "Gatilho O atrixyl tem sucesso crítico em um teste de resistência\nEfeito O atrixyl quebra a porção de magia que os afetaria e a utiliza para se fortalecer. O atrixyl ganha Pontos de Vida temporários iguais ao dobro do Rank do magia desencadeador e um bônus de status de +4 nas jogadas de dano por 1 rodada."
        },
        "MXDN7yyB77gPSzPT": {
          "name": "Absorver o Pecado",
          "description": "Gatilho O atrixyl reduz uma criatura que ele pode cheirar com seu verdadeiro cheiro de pecado a 0 Pontos de Vida\nEfeito O atrixyl recupera 6d6[cura] Pontos de Vida."
        },
        "GfR5Qqu6MOwUlJTK": {
          "name": "Alterar forma",
          "description": "O atrixyl assume a aparência de qualquer humanóide Médio. Isso não altera a velocidade do atrixyl ou seus modificadores de ataque e dano com seus golpes, mas pode alterar o tipo de dano que seus golpes causam."
        },
        "8k74w7FN74QZbTNm": {
          "name": "Agilidade Insectil",
          "description": "Quando os atrixyl Leaps, High Jumps ou Long Jumps, eles podem aumentar as distâncias horizontais e verticais percorridas em até 10 pés (3 metros). Eles também tratam as quedas como 50 pés (15 metros) mais curtas."
        },
        "WPvhK2T7FUSP1nqf": {
          "name": "Chute Ressonante",
          "description": "O atrixyl dá um soco. Se o alvo for uma aberração ou for capaz de lançar magias da tradição arcana, este ataque causa 2d12 de dano de força adicional."
        },
        "2bnofAiYGaisRrPN": {
          "name": "Quebra redonda",
          "description": "O atrixyl dá um golpe de punho e compara o resultado da jogada de ataque com a CA de até dois inimigos, cada um dos quais deve estar dentro do alcance corpo a corpo do atrixyl e adjacente um ao outro. Role o dano apenas uma vez e aplique-o a cada criatura atingida. Isso conta como dois ataques para a penalidade de ataque múltiplo do atrixyl."
        },
        "cpBYMwffWhKVMu41": {
          "name": "Impulso aprimorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:unrisen",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a40cb210dc693f815b1c82dd48ec98546d38e4027cefb0b92ab7c829f37e3edb",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Não ressuscitado",
      "description": "Um não ressuscitado é um conglomerado mutilado de ossos lascados, órgãos em decomposição e carne podre, criado quando um ritual como a ressurreição dá catastroficamente errado. Deve-se tomar imenso cuidado, pois se tal ritual falhar completamente, o resultado poderá ser um não-ressuscitado - como muitos ritualistas aprenderam, para seu horror.\nOs não ressuscitados são pouco inteligentes, conscientes apenas da agonia constantemente infligida por sua criação defeituosa e de seu ressentimento pelos vivos. Eles tendem a atacar primeiro os conjuradores envolvidos no ritual fracassado, antes de atacar todos os outros ao seu redor. Embora a forma distorcida de um não ressuscitado seja irreconhecível como o alvo pretendido da ressurreição, seus uivos sem palavras são muitas vezes perturbadoramente semelhantes à voz do falecido. Se um não ressuscitado for destruído antes de poder ressurgir, ele será reduzido a um punhado de sais metálicos azul-esverdeados, conhecidos como sais essenciais.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-30": "sentido de vida-30"
      },
      "languages": {
        "common": "comum"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "paralisado",
          "tóxico",
          "inconsciente"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "kF2ixmWSOxaKrnfA": {
          "name": "Maxilas",
          "damage": "3d8+13 perfurante"
        },
        "bMI6hrjVEXpgS37k": {
          "name": "Garra",
          "damage": "2d8+13 cortante"
        }
      },
      "actions": {
        "ZGbXzbuBf6OgU9Kz": {
          "name": "Lifesense 30 pés (9 metros)",
          "description": ""
        },
        "EKs1EmIvTAkaGDae": {
          "name": "Feito para viver",
          "description": "Sempre que um não ressuscitado sofreria dano de energia vital, ele curará metade desse número de Pontos de Vida."
        },
        "w7XvLv7sjGNlB7qE": {
          "name": "Vulnerabilidade de ressurreição",
          "description": "Uma criatura com uma magia preparada ou espontânea que pode restaurar a vida dos mortos (como Sopro de Vida ou Ressuscitar Mortos) pode gastar um espaço de magia apropriado como uma atividade de 2 ações para destruir um não ressuscitado dentro de 30 pés (9 metros). A tentativa falha se o não ressuscitado tiver sucesso em um teste de Vontade contra a CD do magia da criatura."
        },
        "hoHZ8oLoT2n6BKAo": {
          "name": "Levante-se novamente",
          "description": "Se o não ressuscitado for reduzido a 0 Pontos de Vida por outros meios que não sejam dano de fogo, desintegração ou vulnerabilidade de ressurreição, ele retornará à não-vida no início de seu próximo turno. Ele tem 100 pontos de vida e está caído no espaço em que foi destruído. O não ressuscitado não pode ser devolvido por esta habilidade novamente por 1 hora."
        },
        "62EYR1JeDqw2DzmO": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "k7Sj3Od8RCFh7XNG": {
          "name": "Uivo Agonizante",
          "description": "O não ressuscitado uiva de dor por sua existência amaldiçoada. Criaturas dentro de um @Template[type:emanation|distance:30] sofrem 9d8[mental|options:area-damage] de dano com um teste de resistência (vontade, dc:30, básico). Os que não ressuscitaram não podem usar Uivo Agonizado novamente por [[/gmr 1d4 #Recharge Uivo Agonizado]]{1d4 rodadas}."
        },
        "HEeo8Cny4nmBNF1e": {
          "name": "Abordagem horrível",
          "description": "Frequência uma vez a cada 10 minutos\nEfeito O que não surgiu remodela sua forma grotesca para se mover rapidamente. Ele avança duas vezes. Qualquer criatura viva que possa ver o que não ressuscita durante este movimento deve ser bem sucedida em um teste (fortitude, dc:28) ou ficará Enjoado 1 (ou Enjoado 2 em uma falha crítica); este é um efeito mental e visual."
        },
        "LHoHnZupawH74oRD": {
          "name": "Aperto Mortal",
          "description": "Requisitos O não ressuscitado tem uma criatura viva agarrada ou contida\nEfeito O não ressuscitado tenta destruir a força vital de sua vítima para que ela compartilhe o destino do não ressuscitado. A criatura deve ter sucesso em um teste de resistência (fortitude, dc:30) ou se tornará Condenada 1. Enquanto a maldição durar, a criatura recupera apenas metade do HP de efeitos com ambos os traços de cura e vitalidade; se morrer, qualquer tentativa de ressuscitá-lo dentre os mortos fará com que ele retorne como um não ressuscitado. A maldição termina automaticamente se o valor de condenação da criatura for reduzido a 0."
        },
        "wF4nBODngIaQgwK2": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hippopotamus-topiary",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:cd8695db64044322a6cf5a1db06e0721e9dd607e7f26094406c93fd4918ca6bb",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Topiária de hipopótamo",
      "description": "Um dos tipos mais raros de topiarias vivas é o hipopótamo. Esses grandes arbustos são formados por almas com personalidades grandiosas. Embora menos ágeis e perspicazes do que as topiárias menores, são muito mais agressivas e territoriais. Como tal, eles tendem a viver vidas solitárias em torno de pântanos e pântanos, dando-lhes bastante água e vegetação para passear.\nTopiárias são uma visão extremamente comum em Golarion, especialmente nos gramados reluzentes e bem cuidados da nobreza. As topiárias vivas se desenvolvem a partir da morte de uma alma solitária em uma área coberta de vegetação de profunda magia primitiva, com a alma explodindo nas plantas ao seu redor e fazendo com que elas cresçam juntas na forma de um animal, muitas vezes influenciada pela personalidade da pessoa que está morrendo. Uma vez totalmente formada, a topiaria viva carece de suas memórias originais; porém, estão cheios do desejo de proteger a área onde foram formados, afastando invasores e aqueles que fariam mal à flora e à fauna.",
      "size": "Enorme",
      "senses": {
        "low-light-vision": "visão na penumbra",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "muan": "Muan"
      },
      "defenses": {
        "immunities": [
          "sangrar"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "G3eo5ka1oJoKGxdi": {
          "name": "Maxilas",
          "damage": "2d10+15 perfurante"
        },
        "ef3hRZ21gP7xw1Lt": {
          "name": "Casco",
          "damage": "2d8+15 contundente"
        }
      },
      "actions": {
        "aRFymlyycYyjRUSU": {
          "name": "Localização da filial",
          "description": "A topiária do hipopótamo pode unir seus galhos e usar sua audição como um sentido preciso na faixa listada."
        },
        "OyJesxcN3psuwsUw": {
          "name": "Absorver Água",
          "description": "Quando na água ou exposto ao efeito da água, o hipopótamo perde sua fraqueza ao fogo até o início do próximo turno."
        },
        "lo1Mlm6FvPPWSnpf": {
          "name": "Esmagamento de mandíbula",
          "description": "Requisitos A topiária do hipopótamo tem uma criatura agarrada\nEfeito Ele morde com força tudo o que está em sua boca, causando 6d8[perfurante] de dano com um teste de resistência (reflexo, dc:27, básico). Em uma falha crítica, as criaturas sofrem 1d8[persistente,sangramento] de dano."
        },
        "flZJn7Bl2LsAHTB2": {
          "name": "Poda",
          "description": "A topiária do hipopótamo torce e contorce sua forma, soltando galhos e folhas conforme necessário para se transformar na topiaria de um animal médio ou menor. Até a próxima vez que agir, a topiaria terá um resultado automático de 43 para testes de Enganação e CDs para aparecer como uma topiaria mundana."
        },
        "b2lkrCb0lvBuiUxm": {
          "name": "Febre do Pântano",
          "description": "Teste de salvamento (fortitude, dc:26)\nInício 1 dia\nEstágio 1 Adoecido 1 (1 dia)\nEstágio 2 Adoecido 2 (1 dia)\nEstágio 3 adoeceu 2 e 1d8[persistente, sangramento] de dano (1 dia)\nEstágio 4 adoecido 2, drenado 1 e 2d8[persistente, sangramento] de dano (1 dia)\nEstágio 5 morto"
        },
        "NICp45nCAaGFefhe": {
          "name": "Caminhe pelas plantas",
          "description": "A topiaria do hipopótamo ignora terrenos difíceis causados ​​por vegetação densa."
        },
        "lHaWSRI3B4oitO8Y": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e7292acaf5b62ae6f14e8b737a9b7395ef704e9a1f0170658eac1f5a4898cce1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Sussurrante (Adulto, Feiticeiro)",
      "description": "Os dragões sussurrantes são ávidos colecionadores de rumores e segredos que passam séculos aprimorando suas redes de informações e relacionamentos. Eles geralmente fazem isso não com a intenção de reter a informação sobre os outros ou de usá-la para suas próprias maquinações, mas simplesmente porque o processo de aprendizagem e coleta de informações é gratificante. Seus tesouros são escassos em comparação com os de outros dragões, pois eles guardam seus verdadeiros tesouros – segredos – em suas mentes.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "confuso",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "wvf12gsmaiIEZNk8": {
          "name": "Maxilas",
          "damage": "2d12+11 perfurante"
        },
        "vfwwJaezS2MAmsRg": {
          "name": "Garra",
          "damage": "2d10+11 cortante"
        },
        "cdWBM7kdsVKs9q9W": {
          "name": "Cauda",
          "damage": "2d10+11 contundente"
        }
      },
      "actions": {
        "wzVfR4k7Fz2wqrWh": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "zkcQGrvQXeO0d4YV": {
          "name": "+2 para Sentir Motivo",
          "description": ""
        },
        "eyJ8okEtlxlLWhjy": {
          "name": "Rede de Informação",
          "description": "O dragão pode tentar um teste de Sociedade para Recordar Conhecimento no lugar de um teste para Coletar Informações, recordando informações de informantes anteriores."
        },
        "vSiPTgWIPTPTQIaI": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "VnvkdDxkW7wfBMjT": {
          "name": "Solução Diplomática",
          "description": "Acionar a iniciativa Dragon Rolls\nEfeito O dragão atinge todos os inimigos que pode ver dentro de @Template[emanation|distance:60]{60 pés (18 metros)} com Calm aumentado para um Rank igual à metade do nível do dragão arredondado para cima (verificar (vontade, dc:28) salvar). O dragão não precisa Sustentar este efeito, mas se o dragão realizar qualquer ação hostil contra os afetados, ele quebra o efeito para todas as criaturas."
        },
        "XZUptOpkSx0PYtkI": {
          "name": "Sussurro Distrativo",
          "description": "Gatilho O dragão é alvo de um ataque\nEfeito Uma voz misteriosa sussurra algo desconcertante no ouvido da criatura desencadeadora, infligindo uma penalidade de circunstância de -2 ao ataque desencadeador."
        },
        "WdFNthO0BdxIqruL": {
          "name": "Respiração de Cogitação",
          "description": "O dragão libera um miasma desconcertante, causando 10d6[mental|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (will, dc:30, basic, options:area-effect,inflicts:stupefied) save). Uma criatura que falhe no teste fica Estupefata 1 (Estupefada 2 em caso de falha crítica) por 1 minuto. O dragão não pode usar Sopro de Cogitação novamente por [[/gmr 1d4 #Recharge Sopro de Cogitação]]{1d4 rodadas}."
        },
        "EZmRWrf1EQnbLdow": {
          "name": "Roubar Conhecimento",
          "description": "O dragão arranca um fragmento de conhecimento da mente de uma criatura dentro de 60 pés (18 metros), escolhendo uma habilidade para afetar. A criatura deve tentar um teste de resistência (vontade, dc:28).\nSucesso A criatura não é afetada.\nFalha No minuto seguinte, a criatura sofre uma penalidade de -1 em testes usando aquela habilidade, e o dragão recebe um bônus de status de +1 por usar aquela habilidade.\nFalha Crítica Como falha, mas a penalidade é –2 e o bônus é +2."
        },
        "dWk0sE2yMPmzHdY2": {
          "name": "Revele o segredo",
          "description": "O dragão investiga a mente de uma criatura dentro de 60 pés (18 metros) em busca de segredos, descobrindo algo que a criatura acharia embaraçoso ou vergonhoso, a menos que obtivesse sucesso em um teste (vontade, dc:30) de resistência. O alvo fica Amedrontado 1 e não pode reduzir sua condição de medo por 1 minuto ou até que o dragão revele o segredo. Como reação quando a criatura afetada tenta um teste, o dragão pode revelar seu segredo para desconcertá-la, exigindo que ela role duas vezes e obtenha o resultado mais baixo; este é um efeito de infortúnio."
        }
      },
      "spellcasting": {
        "cRcIL2SXgdemjq4p": {
          "name": "magias Ocultos Preparados",
          "category": "preparado",
          "spells": {
            "oGxN8Dptzr9qHsee": {
              "name": "Comando"
            },
            "O88kR5J5SE3DST5O": {
              "name": "Atordoamento"
            },
            "PRAM9jvMAKa68okG": {
              "name": "Detectar magia"
            },
            "uisHs6IeQnrIWNsQ": {
              "name": "Disfarce Mágico"
            },
            "4Ot2vYWzmA3lnkbT": {
              "name": "Ala Proibida"
            },
            "cv6TM8d2MVxDKoxP": {
              "name": "Mensagem"
            },
            "ytfJdvX4cXWlusMU": {
              "name": "Link mental"
            },
            "agKADALez9cbUYML": {
              "name": "Mão Telecinética"
            },
            "Y99tw7IkPX5NpOHR": {
              "name": "Mente Clara"
            },
            "xinTbmaOHepnxb0G": {
              "name": "Forma humanóide"
            },
            "OFvSS0hmtTpAmVNo": {
              "name": "Veja o invisível"
            },
            "7CfPUs5wTKkyivI9": {
              "name": "Mensagem de sonho"
            },
            "QXpvAcJPi47LPfv5": {
              "name": "Hipercognição"
            },
            "3hfm7HDMQW3tWHXn": {
              "name": "Anel da Verdade"
            },
            "hxn7aBYboqdZTH3z": {
              "name": "Confusão"
            },
            "xTKfznWFdJqZoz9l": {
              "name": "Detectar Vidência"
            },
            "wkDHW4ofDUQB7Tfs": {
              "name": "Reescrever memória"
            },
            "LGyGFsYCV5U2dqKw": {
              "name": "Enviando"
            },
            "UVQzVd09ULPvZGZu": {
              "name": "Pulso Sináptico"
            }
          }
        },
        "hQpLecGIr5JQkFUk": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "HKxrPd7BmHbJHUzU": {
              "name": "Atordoamento"
            },
            "WRO85FOUCRQYw8f6": {
              "name": "Mensagem"
            },
            "iBK9DfO7gl7b2LHG": {
              "name": "Incorporar mensagem"
            },
            "bFBjTjzbnNzg2hlz": {
              "name": "Clariaudiência (à vontade)"
            },
            "gTsBfiveHO30gIiq": {
              "name": "Leitura da Mente"
            },
            "oSegsy2nlB1nIiYd": {
              "name": "Anel da Verdade"
            },
            "uN0n5eW8uwlWZT33": {
              "name": "Clarividência (à vontade)"
            },
            "1vcENX05gySjee84": {
              "name": "Sonda Mental"
            },
            "3gTrRmpHmJp3nAXr": {
              "name": "Charme"
            },
            "isUZZ0SGjSZpuk1r": {
              "name": "Sugestão"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-young-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:cf9775328b443e7bcde17175ecd4114b0cc2fa2f047ac709d0bdde2268349fd4",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Requiem (jovem, feiticeiro)",
      "description": "Os dragões Requiem são administradores do Rio das Almas e do processo através do qual as almas chegam ao seu destino final na vida após a morte. A jornada segura de uma alma é de extrema importância para um dragão réquiem, e alguns seguirão almas individuais desde sua primeira entrada no rio até seu julgamento no Boneyard e, eventualmente, até seu local de descanso final. A maioria dos dragões de réquiem se ligam a planos específicos e pastoreiam quaisquer almas ligadas a esse plano, levando a dragões ligados a lugares como o Céu ou o Inferno, embora esses dragões nunca jurem lealdade verdadeira a esses planos. Dragões réquiem enchem seus covis ao longo do Rio das Almas – retalhos de arquitetura sombria resgatados de outros planos – com registros inestimáveis ​​e lembranças de grandes realizações.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-60": "lifesense-impreciso-60",
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
          "damage": "2d10+10 perfurante; 1d8 espiritual"
        },
        "wyJW030tjlMqlOFy": {
          "name": "Garra",
          "damage": "2d8+10 cortante; 1d8 espiritual"
        },
        "MfU1Is4nFaLYi4YN": {
          "name": "Cauda",
          "damage": "2d8+10 contundente; 1d8 espiritual"
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
        "d0JuploAY8CGVIFJ": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "So4yBcmRWdbLG8JN": {
          "name": "Âncora da Alma",
          "description": "Uma criatura dentro de 60 pés (18 metros) cairia para 0 Pontos de Vida\nEfeito O dragão ancora a alma da criatura desencadeadora em seu corpo. A criatura permanece com 1 Ponto de Vida, fica Condenada 2 e ganha cura rápida igual ao nível do dragão por 1 minuto. A criatura fica temporariamente imune a novos usos da Soul Anchor por 24 horas.\nEfeito: Âncora da Alma"
        },
        "3kVLpqskZEeFu5Jc": {
          "name": "Reter a morte",
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O dragão resiste ao afrouxamento de sua própria alma, evitando alguns danos. O dragão ganha resistência 10 a todos os danos contra o ataque desencadeador."
        },
        "O3ebBljtcItTfmVr": {
          "name": "Respiração Condenadora",
          "description": "A energia da Forja da Criação irrompe da boca do dragão, causando 9d8[spirit|options:area-damage] de dano em um @Template[type:line|distance:60] (check (reflex, dc:30, basic, options:area-effect) save). Criaturas mortas-vivas que falharem no salvamento também devem ter sucesso em um teste (vontade, CC:30, opções:efeito de área,infligir:condenado) no salvamento ou se tornarão Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 4). O dragão não pode usar Sopro Dooming novamente por [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rodadas}."
        },
        "XmfhMGtLldAoQi0R": {
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:raelis",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:6759fef4eb34bb2e8023a3524619f3fe87a286f5a5dda868fc9e9e1c3604a26e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Raelis",
      "description": "Formados a partir das almas dos contadores de histórias, esses azatas turbulentos vagam pelos planos, em busca de histórias cada vez mais impressionantes para colecionar. Eles tentam espalhar alegria compartilhando essas histórias e corrigindo os erros que encontram. Sua busca constante por histórias traz raelises ao Universo mortal com mais frequência do que outros azatas.\nUm raelis geralmente conhece trilhas e direções, pois suas jornadas os levam a uma variedade de locais diferentes. Raelises prefere evitar fazer a mesma viagem duas vezes e fará de tudo para evitar isso. Após milênios de viagens constantes, um raelis se torna um atlas vivo, algo de que eles se orgulham.\nRaelises adoram brigas e lutas, e muitas vezes viajam disfarçados de mortais para não influenciar indevidamente os eventos que narram. Sua capacidade de viajar discretamente entre os assentamentos faz dos raelises excelentes espiões e agentes discretos de deuses com interesses semelhantes.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10",
          "profano 10"
        ]
      },
      "attacks": {
        "xO2VFEErrcyQWzUX": {
          "name": "Punho",
          "damage": "2d6+9 contundente"
        }
      },
      "actions": {
        "bdkr2er4ml6RNYiQ": {
          "name": "Alterar forma",
          "description": "Os raelis podem assumir a aparência de qualquer humanóide Pequeno ou Médio, ou de qualquer animal Médio ou menor. Isso não altera sua velocidade nem seus bônus de ataque e dano com seus golpes, mas pode alterar o tipo de dano que seus golpes causam."
        },
        "O8ght906VxYT0XnI": {
          "name": "Recontar épico",
          "description": "Os raelis contam uma história para inspirar seus aliados a feitos heróicos. Pelo próximo minuto, todas as criaturas aliadas que ouviram o épico ganham +1 de bônus de circunstância em testes de Acrobacia, Atletismo e Desempenho.\nEfeito: Recontagem Épica"
        },
        "TTBI8puLr7uK7ucG": {
          "name": "Pergaminho Sifão",
          "description": "O raelis lança um magia de um pergaminho em 60 pés (18 metros) que leu com o Word Caller; este pergaminho deve ser divino. Se este magia tiver o traço sagrado ou vitalidade, eles o lançam como um magia Rank superior. Isso gasta o pergaminho normalmente."
        },
        "1CbLB8lE9SpQxMZ1": {
          "name": "Chamador de palavras",
          "description": "O raelis sente a presença de palavras ao seu redor dentro de 60 pés (18 metros), lendo até 100 páginas de escrita não mágica ou obtendo sucesso automaticamente em uma Recuperação de Conhecimento para identificar 1 pergaminho mágico."
        },
        "nbLFbPVHbIJ9JWRc": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "EFyPoVsxgdwgH653": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "RSNDfAzThcPo1caI": {
              "name": "Abençoar"
            },
            "oUnBKiFx8E1Vyr42": {
              "name": "Detectar magia"
            },
            "1hJlyTdwsQGIEonz": {
              "name": "Lança Divina"
            },
            "O4qqKe1e7Y12mQ3T": {
              "name": "Invenção"
            },
            "Kq4fKk40egO6L1LU": {
              "name": "Hino Assombroso"
            },
            "8vYFhQJ1v5o1VNgh": {
              "name": "Leia aura"
            },
            "gESjokNo2O3a7Kzw": {
              "name": "Projétil Telecinético"
            },
            "lIgoCVc809iseGz9": {
              "name": "Encantar"
            },
            "b5ZI04Kwz28sCV3B": {
              "name": "Heroísmo"
            },
            "T5SU2MYVWtmL5qnr": {
              "name": "Relâmpago"
            },
            "3eLXusK8JQvyGTcR": {
              "name": "Movimento desenfreado"
            },
            "8nTFNZzg2bsqFF8A": {
              "name": "Movimento irrestrito (constante)"
            },
            "qbcKOvzXWTYe0pH9": {
              "name": "Véu de Privacidade (Constante)"
            },
            "xQogfvJkMIwYD9Jt": {
              "name": "Maldição do Pária"
            },
            "0kbOD1Z95S56mx64": {
              "name": "Truespeech (constante)"
            },
            "RjNh1NKb9t8FAFEt": {
              "name": "Padrão Vibrante"
            },
            "DqZNI8xK2NJA9AQx": {
              "name": "Convicção Zelosa"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-young",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f2b02d0907b409c36d9db3e4c13ab0fea347eedd84f884e531e0a37eeb0fbb3d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Réquiem (jovem)",
      "description": "Os dragões Requiem são administradores do Rio das Almas e do processo através do qual as almas chegam ao seu destino final na vida após a morte. A jornada segura de uma alma é de extrema importância para um dragão réquiem, e alguns seguirão almas individuais desde sua primeira entrada no rio até seu julgamento no Boneyard e, eventualmente, até seu local de descanso final. A maioria dos dragões de réquiem se ligam a planos específicos e pastoreiam quaisquer almas ligadas a esse plano, levando a dragões ligados a lugares como o Céu ou o Inferno, embora esses dragões nunca jurem lealdade verdadeira a esses planos. Dragões réquiem enchem seus covis ao longo do Rio das Almas – retalhos de arquitetura sombria resgatados de outros planos – com registros inestimáveis ​​e lembranças de grandes realizações.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-60": "lifesense-impreciso-60",
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
          "damage": "2d10+10 perfurante; 1d8 espiritual"
        },
        "wyJW030tjlMqlOFy": {
          "name": "Garra",
          "damage": "2d8+10 cortante; 1d8 espiritual"
        },
        "MfU1Is4nFaLYi4YN": {
          "name": "Cauda",
          "damage": "2d8+10 contundente; 1d8 espiritual"
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
        "d0JuploAY8CGVIFJ": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "So4yBcmRWdbLG8JN": {
          "name": "Âncora da Alma",
          "description": "Uma criatura dentro de 60 pés (18 metros) cairia para 0 Pontos de Vida\nEfeito O dragão ancora a alma da criatura desencadeadora em seu corpo. A criatura permanece com 1 Ponto de Vida, fica Condenada 2 e ganha cura rápida igual ao nível do dragão por 1 minuto. A criatura fica temporariamente imune a novos usos da Soul Anchor por 24 horas.\nEfeito: Âncora da Alma"
        },
        "3kVLpqskZEeFu5Jc": {
          "name": "Reter a morte",
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O dragão resiste ao afrouxamento de sua própria alma, evitando alguns danos. O dragão ganha resistência 10 a todos os danos contra o ataque desencadeador."
        },
        "O3ebBljtcItTfmVr": {
          "name": "Respiração Condenadora",
          "description": "A energia da Forja da Criação irrompe da boca do dragão, causando 9d8[spirit|options:area-damage] de dano em um @Template[type:line|distance:60] (check (reflex, dc:30, basic, options:area-effect) save). Criaturas mortas-vivas que falharem no salvamento também devem ter sucesso em um teste (vontade, CC:30, opções:efeito de área,infligir:condenado) no salvamento ou se tornarão Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 4). O dragão não pode usar Sopro Dooming novamente por [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rodadas}."
        },
        "OPtrKq8gnuusiAqH": {
          "name": "Frenesi Dracônico",
          "description": "O dragão dá dois golpes com as garras e um com a cauda em qualquer ordem."
        },
        "WS1ygMI5ueVbLBHQ": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Dooming sempre que consegue um acerto crítico com um Golpe."
        },
        "vmF6pw78GCCfMWfS": {
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:interlocutor",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4cec874790b58f6d27cfea9f8bad090f2ba21d39f4ff094f0f2c2902c3aa88fc",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Interlocutor",
      "description": "Os interlocutores são os mais talentosos cirurgiões-escultores dos velstracs, esculpindo carne e substituindo-a por novas partes do corpo de músculos, tendões e metal. Cada interlocutor estrutura sua aparência individual com cuidado, mas todos são amálgamas imponentes e com vários membros dos membros mais fortes, dos ossos mais densos e dos metais mais afiados que podem encontrar. Eles procuram continuamente por novos materiais para enxertar em suas formas, e seus inimigos mortos raramente são encontrados intactos, já que pouco é mais valioso para os interlocutores do que as pernas, os olhos ou mesmo o cérebro de um oponente poderoso. Devido às suas propriedades únicas, os depósitos de skymetals às vezes atraem interlocutores para o Universo mortal. Os interlocutores têm uma altura média de 9 pés (2,7 metros) e pesam aproximadamente 800 libras.\nTodos os demônios que vivem nas sombras, conhecidos como velstracs, compartilham uma preocupação horrível com a busca pela sensação definitiva por meio da automutilação. Os Velstracs transcendem seu distanciamento estóico apenas quando infligem dor e terror às suas vítimas, praticam novas formas de tortura ou voltam suas práticas agonizantes contra si mesmos. Eles se consideram seres iluminados, transcendendo limitações como a moralidade ou tabus mortais, mas suas vítimas os conhecem como algozes sem emoção que infligem sofrimento sádico. Esses demônios afirmam buscar a perfeição no pensamento, na forma e na ação, embora não reconheçam nenhum refinamento que não exija a dolorosa excisão da carne ou do espírito.\nVelstracs se manifestam a partir das almas dos mortais masoquistas ou sádicos mais extremos que são julgados e enviados para o Mundo Inferior. Eles assumem formas que atendem às suas predileções vis, desde os áugures de baixo escalão até os maestros do sofrimento e da mutilação, os eremitas. O processo de transformação distorce a alma passo a passo, com outros velstracs transportando seus novos membros através de incontáveis ​​câmaras de dor entre os confins sombrios do Submundo.",
      "size": "Grande",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "shadowtongue": "língua das sombras"
      },
      "defenses": {
        "immunities": [
          "frio"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 15",
          "prata 15"
        ]
      },
      "attacks": {
        "fGPymMGpO4rOUSJt": {
          "name": "Garra",
          "damage": "3d10+13 contundente; 2d6 sangramento"
        }
      },
      "actions": {
        "8CaNXEFOVDCT5P9x": {
          "name": "Visão dolorosa",
          "description": "Um velstrac sabe automaticamente se uma criatura que vê tem alguma das condições Condenado, Morrendo e Ferido, bem como o valor dessas condições."
        },
        "6uTX0UPYfsHi0eUs": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "YJlp2iyShGnQpO13": {
          "name": "Regeneração 20 (desativada por Holy ou Silver)",
          "description": ""
        },
        "rjQfFFzYDPW7gti5": {
          "name": "Vislumbre de carne roubada",
          "description": "30 pés (9 metros). Quando uma criatura termina seu turno na aura, ela vê pedaços de seu próprio corpo em meio à forma do interlocutor. A criatura deve ser bem sucedida em um teste (vontade, dc:29, opções:efeito de área,infligir:atordoado) para salvar ou ficará Atordoada 1."
        },
        "f8Hse5ctgkUmEUqc": {
          "name": "Ataque reativo",
          "description": ""
        },
        "MW1iGpocWyHZDBvP": {
          "name": "Sifão das Sombras",
          "description": "Gatilho O interlocutor sofreria dano de um magia ou efeito mágico\nEfeito Em vez disso, o interlocutor sofre metade do dano desencadeado."
        },
        "PrwUXoaZ6KDeiZiG": {
          "name": "Olhar Focado",
          "description": "O interlocutor olha para uma criatura que pode ver em 30 pés (9 metros). A criatura deve imediatamente tentar um teste de Vontade contra o vislumbre de carne roubada. Além disso, se a criatura já estiver atordoada, se falhar na resistência, ela sentirá seus órgãos internos se torcerem e se contorcerem, e ficará Desajeitada 2 por 1 minuto. Depois de tentar este salvamento, a criatura fica temporariamente imune ao Focus Gaze até o início do próximo turno do interlocutor."
        },
        "yH2u0x3ICS7IV150": {
          "name": "Rendimento Cirúrgico",
          "description": "Isso funciona como a habilidade Rend, causando dano de golpe de garra. Além disso, se o alvo for um ser vivo com órgãos e músculos, o interlocutor abre uma ferida precisa. Até que a criatura seja restaurada aos seus Pontos de Vida máximos, fechando assim o ferimento, os Golpes contra a criatura causam 1d6 de dano de precisão adicional."
        }
      },
      "spellcasting": {
        "0gHdU7ZbZBc4fdCu": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "RQ4vUB4GCLOV4ILu": {
              "name": "Estabilizar"
            },
            "xOd7nQyRYkybv69O": {
              "name": "Curar"
            },
            "LoFBY77U05O4sOn8": {
              "name": "Corpo Som"
            },
            "ST0N4xw26ietq4e2": {
              "name": "Sopro de Vida"
            },
            "qY0Myi7JJ7s9XiyN": {
              "name": "Teletransporte Interplanar (apenas para si mesmo, apenas para o Submundo ou para o Universo)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:coral-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e738ba8dc51656a076d70a01442135ed4d0d454bb9e32f3d9d346ce0b47b1c12",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Coral (Adulto, Feiticeiro)",
      "description": "Os dragões de coral são os guardiões primordiais dos vastos recifes de coral vivos encontrados nos oceanos de Golarion. Mesmo para os padrões dracônicos, os dragões de coral se destacam por sua arrogância e vaidade, ostentando orgulho excessivo nos tons vibrantes de suas próprias escamas incrustadas de corais e no esplendor deslumbrante dos recifes que protegem. Os dragões de coral gostam de decorar seus recifes, que eles consideram como covis, com objetos bonitos, pontilhados com objetos de valor ocasionais, como moedas. Aqueles que buscam o favor de um dragão coral muitas vezes descobrem que a criatura é facilmente influenciada pela bajulação, especialmente quando combinada com presentes brilhantes ou coloridos que complementam a beleza cintilante do dragão e seu domínio subaquático.",
      "size": "Enorme",
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
          "damage": "3d10+13 perfurante"
        },
        "dnY6CWQb134wKiOt": {
          "name": "Garra",
          "damage": "3d6+13 cortante"
        },
        "OY0h3cpcfWVhHPf4": {
          "name": "Cauda",
          "damage": "3d8+13 contundente"
        }
      },
      "actions": {
        "xSIQkJM4fmJ1yy23": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "dhF6fJi6O0G9ZKmt": {
          "name": "Biomineralizar",
          "description": "Gatilho O dragão é atingido criticamente por uma arma corpo a corpo sem alcance ou por um ataque desarmado que causa dano cortante ou perfurante\nEfeito Uma gota de sangue jorra do ferimento do dragão e instantaneamente se calcifica em um galho irregular de coral afiado. O galho de coral empala a criatura desencadeadora, causando 7d6[perfurante] de dano (teste (reflexo, dc:32, básico)). A criatura desencadeadora também sofre 1d4[persistente,sangramento] de dano em uma falha crítica. Independentemente do resultado, o coral então se desfaz em pó."
        },
        "OWtobT819Yt0FTNY": {
          "name": "Exibição caleidoscópica",
          "description": "90 pés (27 metros). As formações de coral que cobrem o corpo do dragão brilham e cintilam com cores vivas, sobrecarregando os sentidos e forçando qualquer criatura que entre ou comece seu turno na aura a tentar um teste (fortitude, dc:30, opções:efeito de área,inflige:deslumbrado,inflige:cego) de salvamento. Independentemente do resultado, a criatura fica temporariamente imune à exibição caleidoscópica do dragão por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Deslumbrada por 1 rodada.\nFalha A criatura fica cega por 1 rodada.\nFalha Crítica A criatura fica cega por 1 rodada e deslumbrada por 1 minuto."
        },
        "P4udhPlUFL1dXZ9A": {
          "name": "Reef Bond",
          "description": "Cada dragão coral está misticamente ligado a um único recife de coral vivo. Se o dragão se mover mais de 3 milhas de seu recife, ele ficará Enjoado 1 e incapaz de se recuperar, com o valor de enjoado aumentando em 1 a cada 6 horas, a menos que tenha sucesso em um teste de resistência (fortitude, dc:34). Após 24 horas, o dragão fica Drenado 1; seu valor drenado aumenta em 1 a cada 24 horas.\nSe o recife do dragão sofrer danos significativos, eles imediatamente tomam conhecimento do local onde o recife foi danificado, mas não da fonte ou natureza do dano. Se o recife for completamente destruído, o dragão será morto imediatamente."
        },
        "27lO5hJcHjPjslLT": {
          "name": "Respiração Hidráulica",
          "description": "O dragão exala um jato de água pressurizado que causa 13d6[concussão|opções:dano de área] de dano em um @Template[type:line|distance:100] (verificação (reflexo, dc:32, básico, opções:efeito de área,movimento forçado,inflige:prone) salvamento). Criaturas que falham criticamente no teste de Reflexos contra a Respiração Hidráulica são empurradas para trás 10 pés (3 metros) e derrubadas. O dragão não pode usar Sopro Hidráulico novamente por [[/gmr 1d4 #Recharge Sopro Hidráulico]]{1d4 rodadas}."
        },
        "DrGbBNaXvcBQvYSR": {
          "name": "Fusão de recifes",
          "description": "Frequência uma vez por dia\nRequisitos O dragão coral está em contato físico com o recife vinculado\nEfeito O dragão se funde fisicamente com o recife e desaparece, junto com até quatro criaturas voluntárias, em um espaço extradimensional onde não pode afetar nem ser afetado pelo mundo exterior. O efeito dura indefinidamente ou até que o dragão o dispense. Uma vez fundido, o dragão pode gastar 1 minuto viajando e emergindo de qualquer ponto de seu recife a até 8 quilômetros de distância."
        },
        "koec9QvnSf7vj2qI": {
          "name": "Pegar",
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
            "JXY081udEpFa9nVR": {
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
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:betobeto-san",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:294dfb78b45eed01a2e218e853f03632a318ed34349a4a0b628877ed93434969",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Betobeto-San",
      "description": "Um betobeto-san vagueia pelas estradas e atalhos do Plano Material, em busca de companheiros de viagem relutantes para sustentar o apetite do espírito pelo medo. Embora esse espírito sombrio seja invisível na escuridão ou na sombra, na luz ele aparece como uma massa disforme e sombria com dois pés calçados em sandálias. Essas sandálias são feitas de madeira ou osso que fazem com que os passos da criatura emitam o distinto som \"beto beto\" que deu origem ao seu nome. Uma boca larga e cheia de dentes sorri no meio de sua massa inexpressiva, e eles podem manifestar membros longos e com garras.\nTrilha de Betobeto-san atrás de viajantes noturnos, obrigados a seguir até que as criaturas se ofereçam verbalmente para deixar o betobeto-san passar. Essa compulsão geralmente não é maliciosa por natureza e ocorre mais pelo desejo equivocado de companhia e cortesia de um betobeto-san; infelizmente, eles não entendem como esse comportamento pode assustar outras pessoas. Betobeto-san não ataca aqueles que seguem, mas muitas vezes acabam em combate porque seu comportamento indesejável faz com que aqueles que seguem ataquem primeiro.",
      "size": "Médio",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "common": "comum",
        "shadowtongue": "língua das sombras"
      },
      "defenses": {
        "immunities": [
          "doença",
          "paralisado",
          "tóxico",
          "precisão"
        ],
        "resistances": [
          "dano total 10, exceto força, toque fantasma, vitalidade"
        ],
        "weaknesses": []
      },
      "attacks": {
        "yF5x6s4ZYEZtto6J": {
          "name": "Garra",
          "damage": "3d12+10 vazio"
        }
      },
      "actions": {
        "0eBQQnVqxlDicgcI": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "8FgEIFUzEgLTHjHc": {
          "name": "Fearsense (preciso) 60 pés (18 metros)",
          "description": "O betobeto-san está ciente de todas as criaturas Amedrontadas dentro do alcance listado."
        },
        "jEfZwLub2SXZ9ApN": {
          "name": "Passos sinistros",
          "description": "60 pés (18 metros). Os passos do betobeto-san parecem aproximar-se cada vez mais, mas a fonte continua difícil de identificar. Cada criatura que inicia seu turno dentro de 60 pés (18 metros) do betobeto-san deve tentar um teste (vontade, dc:29) de salvamento.\nSucesso Crítico A criatura não é afetada e fica temporariamente imune por 1 minuto.\nSucesso A criatura fica Amedrontada 1.\nFalha A criatura fica Amedrontada 2.\nFalha Crítica A criatura fica Amedrontada 4."
        },
        "uDYAOTcNICSCyK3S": {
          "name": "Invisibilidade das Sombras",
          "description": "O betobeto-san fica invisível a menos que esteja dentro de uma área de luz brilhante."
        },
        "cp5UE666Pg5Pz1gR": {
          "name": "Passo das Sombras",
          "description": "Gatilho Uma fonte de luz brilhante revela o betobeto-san.\nRequisitos O betobeto-san ainda não está dentro de uma área de luz intensa.\nEfeito O betobeto-san entra brevemente no Plano das Sombras e depois volta, aparecendo até 30 pés (9 metros) de onde eles começaram."
        },
        "iPdoOjHPIU1Zhkvd": {
          "name": "Isca de passo",
          "description": "Os Passos Betobeto-san. Eles então criam duas iscas ilusórias de som dentro de @Template[emanation|distance:15]{15 pés (4,5 metros)} deles que imitam os sons de seus passos ameaçadores.\nEssas iscas agem de forma independente por iniciativa do betobeto-san com 2 ações cada. Eles só podem Sneak ou Stride e têm uma velocidade de 35 pés (10,5 metros). Use a CD de Furtividade do betobeto-san (normalmente 37) contra tentativas de procurar ou desacreditar em uma isca.\nCada isca dura 1 minuto. Quaisquer iscas existentes desaparecem se o betobeto-san usar essa habilidade novamente."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:coral-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9707fd24676c5eda9d53cdf59bd420131934a500f7cc4fce419396401590330e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Coral (Adulto)",
      "description": "Os dragões de coral são os guardiões primordiais dos vastos recifes de coral vivos encontrados nos oceanos de Golarion. Mesmo para os padrões dracônicos, os dragões de coral se destacam por sua arrogância e vaidade, ostentando orgulho excessivo nos tons vibrantes de suas próprias escamas incrustadas de corais e no esplendor deslumbrante dos recifes que protegem. Os dragões de coral gostam de decorar seus recifes, que eles consideram como covis, com objetos bonitos, pontilhados com objetos de valor ocasionais, como moedas. Aqueles que buscam o favor de um dragão coral muitas vezes descobrem que a criatura é facilmente influenciada pela bajulação, especialmente quando combinada com presentes brilhantes ou coloridos que complementam a beleza cintilante do dragão e seu domínio subaquático.",
      "size": "Enorme",
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
          "damage": "3d10+13 perfurante"
        },
        "dnY6CWQb134wKiOt": {
          "name": "Garra",
          "damage": "3d6+13 cortante"
        },
        "OY0h3cpcfWVhHPf4": {
          "name": "Cauda",
          "damage": "3d8+13 contundente"
        }
      },
      "actions": {
        "14GpPXpVr9pIJT3O": {
          "name": "+2 Status para todos os salvamentos vs. Primal",
          "description": ""
        },
        "dhF6fJi6O0G9ZKmt": {
          "name": "Biomineralizar",
          "description": "Gatilho O dragão é atingido criticamente por uma arma corpo a corpo sem alcance ou por um ataque desarmado que causa dano cortante ou perfurante\nEfeito Uma gota de sangue jorra do ferimento do dragão e instantaneamente se calcifica em um galho irregular de coral afiado. O galho de coral empala a criatura desencadeadora, causando 7d6[perfurante] de dano (teste (reflexo, dc:32, básico)). A criatura desencadeadora também sofre 1d4[persistente,sangramento] de dano em uma falha crítica. Independentemente do resultado, o coral então se desfaz em pó."
        },
        "Vwzh2ZT18smQFh7V": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "OWtobT819Yt0FTNY": {
          "name": "Exibição caleidoscópica",
          "description": "90 pés (27 metros). As formações de coral que cobrem o corpo do dragão brilham e cintilam com cores vivas, sobrecarregando os sentidos e forçando qualquer criatura que entre ou comece seu turno na aura a tentar um teste (fortitude, dc:30, opções:efeito de área,inflige:deslumbrado,inflige:cego) de salvamento. Independentemente do resultado, a criatura fica temporariamente imune à exibição caleidoscópica do dragão por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Deslumbrada por 1 rodada.\nFalha A criatura fica cega por 1 rodada.\nFalha Crítica A criatura fica cega por 1 rodada e deslumbrada por 1 minuto."
        },
        "P4udhPlUFL1dXZ9A": {
          "name": "Reef Bond",
          "description": "Cada dragão coral está misticamente ligado a um único recife de coral vivo. Se o dragão se mover mais de 3 milhas de seu recife, ele ficará Enjoado 1 e incapaz de se recuperar, com o valor de enjoado aumentando em 1 a cada 6 horas, a menos que tenha sucesso em um teste de resistência (fortitude, dc:34). Após 24 horas, o dragão fica Drenado 1; seu valor drenado aumenta em 1 a cada 24 horas.\nSe o recife do dragão sofrer danos significativos, eles imediatamente tomam conhecimento do local onde o recife foi danificado, mas não da fonte ou natureza do dano. Se o recife for completamente destruído, o dragão será morto imediatamente."
        },
        "hqcT43pkMnsO31x0": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega sua Respiração Hidráulica sempre que consegue um acerto crítico com um Golpe."
        },
        "27lO5hJcHjPjslLT": {
          "name": "Respiração Hidráulica",
          "description": "O dragão exala um jato de água pressurizado que causa 13d6[concussão|opções:dano de área] de dano em um @Template[type:line|distance:100] (verificação (reflexo, dc:32, básico, opções:efeito de área,movimento forçado,inflige:prone) salvamento). Criaturas que falham criticamente no teste de Reflexos contra a Respiração Hidráulica são empurradas para trás 10 pés (3 metros) e derrubadas. O dragão não pode usar Sopro Hidráulico novamente por [[/gmr 1d4 #Recharge Sopro Hidráulico]]{1d4 rodadas}."
        },
        "DrGbBNaXvcBQvYSR": {
          "name": "Fusão de recifes",
          "description": "Frequência uma vez por dia\nRequisitos O dragão coral está em contato físico com o recife vinculado\nEfeito O dragão se funde fisicamente com o recife e desaparece, junto com até quatro criaturas voluntárias, em um espaço extradimensional onde não pode afetar nem ser afetado pelo mundo exterior. O efeito dura indefinidamente ou até que o dragão o dispense. Uma vez fundido, o dragão pode gastar 1 minuto viajando e emergindo de qualquer ponto de seu recife a até 8 quilômetros de distância."
        },
        "pC3lWBo6lqUsZ0ON": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ferrugon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7145dcd364259f9b3d494665b7311b2fb2bd41601e31b7c8ab474e5b73c72e4a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ferrugon",
      "description": "Esses demônios com cabeça de carneiro têm asas e carne feitas de metal enferrujado. Eles são forjados a partir das almas de mortais condenados que fizeram outros sofrerem através de seu trabalho criativo. Eles gostam de seduzir os do mesmo tipo, levando autores e diretores de palco à crueldade na busca pela grandeza. Ferrugons também gostam de levar os artistas ao extremo para quebrá-los. Eles mergulham os corpos dos mortais que levaram ao desespero em metal derretido para fazer estátuas horrivelmente malformadas, que depois adicionam aos seus covis.\nOs demônios da ferrugem preferem a tentação à luta e só entram em combate se estiverem protegendo algo que lhes é caro.",
      "size": "Médio",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "talican": "talicão"
      },
      "defenses": {
        "immunities": [
          "fogo"
        ],
        "resistances": [
          "físico 10 exceto prata"
        ],
        "weaknesses": [
          "santo 10"
        ]
      },
      "attacks": {
        "McbC0BrBzm6jXv1G": {
          "name": "Buzina",
          "damage": "3d8+16 contundente"
        },
        "7X6pzCuwIvpSEnHY": {
          "name": "Garra",
          "damage": "3d4+16 cortante"
        },
        "oNzYEEHyAi8ThGDL": {
          "name": "Pena de Ferro",
          "damage": "3d4 + 13 perfurante"
        }
      },
      "actions": {
        "C3zEAOjymoGJcHJ8": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "kfaQck7yWPgM2fTX": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "TddtdjaipJEYqpwC": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "TTwj9RU4LXllk71q": {
          "name": "Metálico",
          "description": "Um ferrugon é uma criatura metálica e, portanto, afetada por efeitos como a penalidade de circunstância infligida por Thunderstrike."
        },
        "7vO5tpXGCIZWw4dU": {
          "name": "Sussurros Vangloriosos",
          "description": "Acionamento Uma criatura não-diabólica dentro de 30 pés (9 metros) do ferrugon obtém sucesso (mas não criticamente) em uma jogada de ataque, teste de perícia ou teste de resistência\nEfeito O ferrugon sussurra mensagens subversivas para a criatura desencadeadora, fazendo com que ela se torne excessivamente confiante em suas habilidades, enquanto na verdade ela se torna menos talentosa no geral. O alvo deve tentar um teste de resistência (vontade, dc:32). Em caso de falha, o alvo ganha +2 de bônus de status em testes de resistência contra efeitos de medo, mas também sofre -2 de penalidade em todas as jogadas de ataque e testes de perícia por 1 hora. Durante esse tempo, a vítima não pode se beneficiar de reações de Ajuda, usar efeitos de cura em si mesma ou usar ações de Cobertura ou Levantar Escudo, pois essas ações parecem desnecessárias para a criatura neste momento. Ações defensivas semelhantes também podem não estar disponíveis para a vítima, a critério do Mestre. O alvo fica temporariamente imune a Vainglorious Whispers por 24 horas.\nEfeito: Sussurros Vangloriosos"
        },
        "m5jrurRSdWLjkAPv": {
          "name": "Ferrugon Tétano",
          "description": "Teste de salvamento (fortitude, dc:32)\nInício [[/gmr 1d4 #Days]]{1d4 dias}\nEstágio 1 Desajeitado 1 (1 semana)\nEstágio 2 Desajeitado 2 e não consigo falar (1 dia)\nEstágio 3 Paralisado (1 dia)\nMorte em estágio 4"
        },
        "CS1UMHIWSSdKkDlD": {
          "name": "Separar objetos",
          "description": "Quando um ferrugon danifica um item ou estrutura, ele causa 2d8 de dano adicional a esse item ou estrutura."
        }
      },
      "spellcasting": {
        "WoADfIU4m6m8ohSf": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "PBvTHDM3nc8F8LUG": {
              "name": "Sugestão"
            },
            "aUCR74haC1bXJSX3": {
              "name": "Translocar (à vontade)"
            },
            "NECiD0M7x3RJLkbj": {
              "name": "Criação"
            },
            "AhM1JXCImAX6Zu9M": {
              "name": "Quebrar"
            },
            "dGcGPtLJd8zonlZk": {
              "name": "Translocar"
            },
            "ZB3iW8avU46qIME6": {
              "name": "Parede de Pedra (a parede é feita de ferro enferrujado, não de pedra)"
            },
            "vzzcrnjqJ9EC3WeH": {
              "name": "Petrificar (o alvo é transformado em ferro enferrujado, não em pedra)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:resurrection-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:388d50986f859a0c5cce575969e4d18b5b5a90bd85ad6ca1e6386b3f7f2aa538",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão da Ressurreição (Adulto, Feiticeiro)",
      "description": "Os dragões da ressurreição oscilam entre a vida e a morte. Eles têm domínio das energias vitais, permitindo-lhes restaurar a vida aos mortos, e domínio das energias vazias, para conceder a morte a outros. Eles fazem uso de suas habilidades para brincar com a vida dos mortais, invocando espíritos para ajudá-los ou revivendo criaturas que consideram importantes ou interessantes. O covil de um dragão da ressurreição geralmente é um lugar árido. Embora eles ainda acumulem riquezas como outros dragões, eles pouco fazem para decorar seus covis e os tesouros são geralmente mantidos em nichos escuros, como se o dragão tivesse pouco cuidado com seus bens. No entanto, os dragões da ressurreição tendem a receber fichas daqueles que ressuscitam ou planejam ressuscitar, e estas são mantidas particularmente seguras.",
      "size": "Grande",
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
          "espírito 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "I4Fc31lnhp82weCJ": {
          "name": "Maxilas",
          "damage": "3d10+11 perfurante; 1d6 vazio"
        },
        "nPF8Cb7ZRAMjmXSt": {
          "name": "Garra",
          "damage": "3d8+11 cortante"
        },
        "MgM7NXJsmS3NTvsO": {
          "name": "Cauda",
          "damage": "3d10+11 contundente"
        }
      },
      "actions": {
        "NMPK6lhp2OOB6OWm": {
          "name": "Desperte!",
          "description": "Gatilho Uma criatura viva que o dragão da ressurreição pode ver morre\nEfeito O dragão da ressurreição usa energia divina e vital para religar a alma ao seu corpo morto. A criatura voluntária retorna à vida estabilizada em 0 HP. Uma criatura pode ser ressuscitada por esta habilidade apenas uma vez."
        },
        "hpxkGqOrHF4syPRM": {
          "name": "Comandante Ressuscitado",
          "description": "Um dragão da ressurreição tem uma forte conexão com seus lacaios e pode Invocar Mortos-Vivos por Sustentação ou Invocar Espíritos como uma ação livre uma vez por turno."
        },
        "SHGSNKhRLCJ5x8DV": {
          "name": "Vida Sifão",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) usa um efeito de cura que restaura pontos de vida\nEfeito O dragão da ressurreição redireciona as energias vitais para longe do efeito, minimizando seu impacto. O efeito desencadeador resulta na quantidade mínima em qualquer jogada de dados para restaurar Pontos de Vida, e quaisquer valores fixos para restaurar Pontos de Vida (como os Pontos de Vida adicionais para um magia de Cura de duas ações) são cortados pela metade. O dragão então ganha 2d8 Pontos de Vida temporários que duram 1 rodada."
        },
        "AVeCp0hrGkLxjYtI": {
          "name": "Surgir!",
          "description": "O dragão da ressurreição usa seu domínio sobre a energia vital para lançar sua própria alma no Boneyard e puxar a alma de uma criatura voluntária de volta ao seu corpo em um processo que leva 1 hora. Isso tem os efeitos de Raise Dead, exceto que o nível máximo do alvo é 8º e a alma está amarrada à do dragão. Apenas uma criatura pode ser amarrada à alma do dragão por vez. Se a criatura e o dragão não estiverem mais no mesmo plano ou se o dragão morrer, a criatura ressuscitada morre e não pode ser ressuscitada com Arise! de novo. O dragão pode descartar a conexão a qualquer momento. Fazer isso não impede que o dragão crie a criatura com Arise! de novo.\nEmbora ressuscitada dessa maneira, a criatura ainda é um alvo válido para ressuscitar os mortos, ressuscitar e efeitos semelhantes. Retornar a criatura à vida desta forma restaura totalmente a criatura, cortando a conexão com o dragão e permitindo que o dragão estabeleça uma conexão com uma criatura diferente."
        },
        "xocggVl34iamkAuY": {
          "name": "Respiração que suga a alma",
          "description": "O dragão libera uma torrente de energia divina, causando 11d6[void|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (fortitude, dc:32, basic, options:area-effect) save) que extrai a força vital das criaturas dentro dele. O dragão ganha cura rápida 10 até que seu Sopro Sugador de Almas seja recarregado. O dragão da ressurreição não pode usar Respiração Sifonadora de Almas novamente por [[/gmr 1d4 #Recharge Respiração Sifonadora de Almas]]{1d4 rodadas}."
        }
      },
      "spellcasting": {
        "0GqIPUbBxIxuBMWb": {
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
            "71yzJ4lQ9yU6JrLV": {
              "name": "Invocar Espíritos"
            },
            "bAIgvb81XSjPjIzy": {
              "name": "Ferir"
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:calikang",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f00411adf6cea194d96d191d044a56e27e89d6f95325a0d548cd4029fe288286",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Calikang",
      "description": "Calikangs são guardiões gigantes, de pele azul e seis braços, de tumbas e tesouros antigos. Cada um deles sente um desejo profundo e inerente de proteger e guardar, o que os torna muito procurados como diretores e guarda-costas. Como a maioria serve como guardiões solitários, existem poucas sociedades calikang.\nA fisiologia única dos Calikangs permite-lhes absorver e manipular magia elétrica, bem como outras energias. Eles podem viver 200 anos – embora possam prolongar ainda mais suas vidas por meio de animação suspensa. Por esta razão, muitos são escolhidos para guardar tumbas ou outros locais fechados onde os guardiões vivos morreriam e as construções se deteriorariam.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [
          "eletricidade"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "IH1oaRD65ApAyt5k": {
          "name": "Espada Longa",
          "damage": "2d8+15 cortante"
        },
        "xIt4uW4tEMRY5Y7p": {
          "name": "Punho",
          "damage": "3d8+13 contundente"
        }
      },
      "actions": {
        "yVpUeHZRYHGkXayx": {
          "name": "Animação Suspensa",
          "description": "Ao se concentrar por 5 minutos, o calikang pode entrar em um estado de animação suspensa, congelando no lugar e ficando imóvel, mas permanecendo consciente do que está ao seu redor.\nEnquanto estiver neste estado, o calikang ganha +4 de bônus de status em testes de Fortitude; não envelhece; e é imune a doenças, toxinas inaladas, veneno, fome e sede.\nO calikang pode sair da animação suspensa como uma ação livre. Se eles saírem deste estado para atacar, o calikang ganha +2 de bônus de circunstância em sua jogada de iniciativa."
        },
        "vdpzi8I0mzpB3lHw": {
          "name": "magias Constantes",
          "description": ""
        },
        "6d6cIadAucEYZpne": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "4k6Uvj17HBcW7ylM": {
          "name": "Conversão de Energia",
          "description": "Sempre que o calikang é atingido por uma jogada de ataque de um magia de eletricidade ou consegue um teste bem-sucedido contra um magia que causa dano de eletricidade, ele absorve a energia.\nIsso cura o calikang em uma quantidade de HP igual ao quádruplo do Rank do magia e recarrega sua arma de sopro. Um calikang não pode absorver seus próprios magias desta forma."
        },
        "JmeFujNsZiXeU7qA": {
          "name": "Respiração Energética",
          "description": "Frequência uma vez por dia.\nEfeito O calikang respira uma explosão de energia que causa 13d6[@item.flags.system.rulesSelections.breathWeapon|options:area-damage] de dano a criaturas em um @Template[line|distance:60] (check (reflex, dc:28, basic, options:area-effect) save). O calikang pode escolher o tipo de dano a cada vez: ácido, frio, eletricidade, fogo ou sônico.\nAumente o tamanho do dado para d8 se o calikang escolher eletricidade."
        },
        "zFuVmNNi7HexpunZ": {
          "name": "Agitação sêxtupla",
          "description": "O calikang realiza até dois golpes de espada longa e até quatro golpes de punho. Cada Golpe deve ser contra um alvo diferente.\nEsses ataques contam para a penalidade de ataque múltiplo do calikang, que não aumenta até que todos os ataques sejam concluídos.\nPor 1 rodada, o calikang ganha um bônus de circunstância em sua CA igual ao número de Golpes que ele escolheu não receber, até um máximo de +4 por receber apenas dois Golpes.\nEfeito: Agitação Sêxtupla"
        }
      },
      "spellcasting": {
        "d3CPZluPoEOBmUDr": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "XX6N64aoSGL9jWS6": {
              "name": "Arma Rúnica (à vontade)"
            },
            "OEMLkECo3INN8s3u": {
              "name": "Cadeia de Relâmpagos"
            },
            "2etpUEez5sWOqlMb": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:xiuh-coatl",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f727a7dbe24bdcfc6e2180a8d63850eede62c969dca790d1b7fae5f6c3bc52d4",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Xiuh Coatl",
      "description": "Mais ferozes do que outros coatls, os xiuh coatls (pronuncia-se \"shoo\") dedicam-se a procurar criaturas malévolas e a oferecer uma oportunidade final de redenção.\nCoatls são celestiais serpentinos que incansavelmente ajudam os mortais a alcançar seu maior potencial em todos os planos. Alguns servem a divindades benevolentes como intermediários, enquanto outros servem à causa do bem como bem entendem.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "thoughtsense-imprecise-60": "pensamentossenso-impreciso-60"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "eletricidade",
          "fogo"
        ],
        "resistances": [],
        "weaknesses": [
          "frio 8"
        ]
      },
      "attacks": {
        "XpzY4UQrwOlgO4km": {
          "name": "Maxilas",
          "damage": "2d10+10 perfurante; 2d8 fogo"
        }
      },
      "actions": {
        "6m61dIKarBky0Oue": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "JjTVprpY8GeQPnTT": {
          "name": "Sentido de pensamento (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "OC5iW5RWtphm9Mby": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "zLh5jRcxUaafQvod": {
          "name": "Maior Constrição",
          "description": "(1d10+10)[concussão,1d8[eletricidade]], teste (fortitude, dc:32, básico, opções:inflige:inconsciente)"
        },
        "oUqggV8Z8uzpYdNA": {
          "name": "Instrumento de Retribuição",
          "description": "O xiuh coatl se transforma em qualquer arma simples ou marcial. A arma é sempre uma arma de choque flamejante +2 maior e pode ser de qualquer tamanho, escolhida pelo xiuh coatl quando ele se transforma. Na forma de arma, o xiuh coatl ganha Dureza igual à da arma na qual ele se transforma e mantém seus Pontos de Vida, testes de resistência, sentidos, telepatia e características enquanto estiver na forma de arma. O xiuh coatl pode sustentar para voltar à sua forma normal."
        },
        "zzRvWHp5hTbs93tu": {
          "name": "Sopro Relâmpago Vulcânico",
          "description": "O xiuh coatl exala chamas e relâmpagos em um @Template[type:line|distance:80] que causa 5d8[eletricidade,5d8[fogo]|options:area-damage]{5d8 de dano elétrico e 5d8 dano de fogo} (verificação (reflexo, dc:32, básico, opções:efeito de área) salvamento). O xiuh coatl não pode usar Sopro de Relâmpago Vulcânico novamente por [[/gmr 1d4 #Recharge Sopro de Relâmpago Vulcânico]]{1d4 rodadas}."
        },
        "VzzWLmieSojZVoLh": {
          "name": "Enrole em bobinas",
          "description": "Requisitos O xiuh coatl tem uma criatura média ou menor agarrada ou contida em suas mandíbulas\nEfeito O mix coatl move a criatura em suas voltas, liberando suas mandíbulas para fazer ataques, e então usa Constrict contra a criatura. O mix coatl pode conter quantas criaturas em suas bobinas couberem em seu espaço."
        },
        "4923v7qhGbPOnzkA": {
          "name": "Veneno de Xiuh Coatl",
          "description": "Para criaturas profanas, isso é uma maldição em vez de veneno e causa dano espiritual em vez de dano venenoso\nTeste de salvamento (fortitude, dc:32)\nDuração Máxima 6 rodadas\nEstágio 1 2d8[veneno] de dano e Enfraquecido 1 (1 rodada)\nEstágio 2 2d10[veneno] de dano, enfraquecido 1 e –5 pés de penalidade de status para todas as Velocidades (1 rodada)\nEstágio 3 3d8[veneno] de dano, Enfraquecido 2 e penalidade de status de –3 metros para todas as Velocidades (1 rodada)\nContra o profano\nTeste de teste de resistência (fortitude, dc:32, características: maldição, sagrado, substituir características)\nDuração Máxima 6 rodadas\nEstágio 1 2d8[espírito] de dano e Enfraquecido 1 (1 rodada)\nEstágio 2 2d10[espírito] de dano, enfraquecido 1 e –5 pés de penalidade de status para todas as Velocidades (1 rodada)\nEstágio 3 3d8[espírito] de dano, Enfraquecido 2 e – penalidade de status de 3 metros para todas as Velocidades (1 rodada)"
        },
        "bx3k62vDUZ96bIL8": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "0UJ4qjLZlnk7jUKa": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "SdUumWRff3zjYA3m": {
              "name": "Detectar magia"
            },
            "gO4GZF5pdqFmrS2y": {
              "name": "Invenção"
            },
            "Y41jk6dBJ3SCQ2Wn": {
              "name": "Leia aura"
            },
            "hT2p1z5OCnav7stY": {
              "name": "Projétil Telecinético"
            },
            "iKvlDGKAD9PRJ3b6": {
              "name": "Invisibilidade (somente para si mesmo, à vontade)"
            },
            "et7gsaCprV080n1F": {
              "name": "Clariaudiência"
            },
            "lYQofSi6f7CcHD9L": {
              "name": "Clarividência"
            },
            "gSVa6IkUl39MpuBv": {
              "name": "Mensagem de sonho"
            },
            "9v1vdLlQazt9dACj": {
              "name": "Temer"
            },
            "CTstCKPxFjSYorC2": {
              "name": "Charme"
            },
            "qbqcujUaZEcx2n1a": {
              "name": "Veja o invisível"
            },
            "UgD6imWgQ1wF0rVW": {
              "name": "Enviando"
            },
            "XxnjTok2pwVQqzpb": {
              "name": "Onda de Desespero"
            },
            "3ffLaGmoYNPPrNty": {
              "name": "Dissipar Magia"
            },
            "1gKx27aYi8eOoL6h": {
              "name": "Cena Ilusória"
            },
            "QiXbvUx6uB5tBtwl": {
              "name": "Leitura da mente (à vontade)"
            },
            "f7TTpIm7QLVXgjZO": {
              "name": "Link mental"
            },
            "AYnuaMPLRzj8HQQn": {
              "name": "Dor Fantasma"
            },
            "X9epmLObWzSNgsaM": {
              "name": "Anel da Verdade"
            },
            "XomVPsbXtCErsmOC": {
              "name": "Teletransporte Interplanar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:grisantian-lion",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1a655bddbeb1c2c5cc244402ee54b1707ba7bb833fc27b0c95d13676133cff18",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Leão Grisantiano",
      "description": "O aparecimento do poderoso grogrisant é um evento que ocorre uma vez a cada geração, mas os descendentes dessas feras lendárias são bem conhecidos ao longo das Montanhas do Confim do Mundo e em todo Taldor. Esses predadores primitivos não viajam em bando como fazem os leões mundanos. Em vez disso, evitam outros da sua espécie, até mesmo para acasalar, e procuram leões comuns uma vez por ano para esse fim. Uma leoa grisantiana que dá à luz filhotes apenas cuida de seus filhotes por tempo suficiente para que eles se tornem autossuficientes – o que leva apenas alguns meses, graças ao crescimento e desenvolvimento incrivelmente rápidos de sua espécie.\nUm leão grisantiano adulto é tão grande quanto um elefante e extremamente agressivo, caçando tudo que encontra. Enquanto os leões comuns dependem de táticas furtivas e de matilha para garantir uma refeição, o leão grisantiano é grande demais para se esconder no meio da grama alta. Em vez disso, adaptou-se às montanhas, onde escolhe uma caverna grande e de difícil acesso como lar, muitas vezes matando qualquer criatura que tenha a infelicidade de já habitar o local. Um leão grisantiano pode rastrear por quilômetros e é um caçador astuto, escondendo-se ao longo de penhascos rochosos e afloramentos enquanto persegue a presa.\nEmbora sejam criaturas selvagens que nunca poderão ser domesticadas, os leões grisantianos entendem Taldane e ocasionalmente concordam em ajudar aqueles que defendem a natureza. No entanto, tais alianças são temporárias e, na melhor das hipóteses, pouco confiáveis.",
      "size": "Enorme",
      "senses": {
        "low-light-vision": "visão na penumbra",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum"
      },
      "defenses": {
        "immunities": [
          "doença"
        ],
        "resistances": [
          "fogo 10",
          "físico 10, exceto espancamento"
        ],
        "weaknesses": []
      },
      "attacks": {
        "bdjkq6x6bzqxv8rz": {
          "name": "Maxilas",
          "damage": "3d10+14 perfurante"
        },
        "2pn8en2vb5v309tj": {
          "name": "Garra",
          "damage": "3d8+12 cortante"
        }
      },
      "actions": {
        "i0MTO7779XmgdHqP": {
          "name": "Juba Cegante",
          "description": "Frequência uma vez por dia\nEfeito Baseando-se no poder de seu ancestral grogrisante, o leão grisantiano se concentra e faz com que sua juba brilhe com uma luz intensa. Todas as criaturas dentro de 20 pés (6 metros) devem tentar um teste de resistência (fortitude, dc:29).\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Cego até o início do próximo turno.\nFalha O alvo fica cego por 1 minuto.\nFalha Crítica O alvo fica cego permanentemente."
        },
        "dy0499e45s9un5ct": {
          "name": "Ataque duplo",
          "description": "O leão grisantiano avança e desfere dois golpes de garra contra a mesma criatura no final desse movimento. Cada ataque conta para a penalidade de ataque múltiplo do leão grisantiano, mas a penalidade não aumenta até que o leão grisantiano faça ambos os ataques. Se ambos os ataques acertarem, combine seus danos para fins de resistências e fraquezas."
        },
        "SbsDaImCI4BsHZJm": {
          "name": "Rasgar",
          "description": "garra.\nSe o leão grisantiano se rasgar após um Ataque Duplo bem-sucedido, combine o dano do Rend com o do Ataque Duplo para fins de resistências e fraquezas."
        },
        "x4qyyzn65gfw5lxo": {
          "name": "Rendimento Vicioso",
          "description": "Gatilho O leão grisantiano usa Rend\nEfeito A armadura do alvo sofre dano igual ao dano de Rend. O alvo pode tentar um teste de resistência (reflexo, dc:29, básico) para reduzir esse dano."
        },
        "ffbObMy3QNME9DgZ": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:girtablilu-seer",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4fc47d8107ac4789dba671de921d3a16dba750a9abe2841acf8d45461977fa1e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Vidente Girtablilu",
      "description": "A posição mais alta de autoridade em uma comunidade girtablilu é a do líder religioso do grupo. Este dever sagrado requer anos de estudo, meditação e dedicação para despertar uma fonte mística de magia divina dentro do girtablilu. Esses videntes garantem que cada ação tomada pela comunidade esteja de acordo até mesmo com o dogma mais obscuro de sua tradição, e eles não hesitam em direcionar sua fúria contra os membros de sua própria comunidade que violam seus mandatos.\nGirtablilus são guardiões que vivem no deserto, com a parte superior do corpo de humanóides musculosos e a parte inferior do corpo de escorpiões enormes. Eles são mais frequentemente encontrados defendendo templos antigos e artefatos religiosos com fervor zeloso. Alguns acreditam que eles foram criados por um deus morto há milênios para atuar como guardiões, mas os girtablilus consideram o assunto de sua origem um tabu e se recusam a abordar a teoria.\nComo os girtablilus aceitam uma ampla gama de religiões e sistemas de crenças, alguns estrangeiros acreditam que eles também adoram seu próprio panteão antigo. Na verdade, os girtablilus reverenciam e protegem exclusivamente locais dedicados a divindades consideradas perdidas para a civilização. Desta forma, actuam como preservadores de práticas sagradas que de outra forma teriam sido esquecidas sob as areias movediças do deserto.\nEmbora os girtablilus estejam acostumados com exploradores que buscam entrada nos locais que defendem, eles podem receber bem aqueles que desejam sinceramente aprender ou oferecer reverência. Alguns até compartilham orgulhosamente suas crenças com outros, ansiosos pela oportunidade de pregar para alguém novo. Contudo, não demonstram misericórdia para com aqueles que tentam profanar os locais e objectos do seu culto, ou para com aqueles que violam os princípios da sua fé.\nGirtablilus são lutadores habilidosos que mantêm escorpiões gigantes treinados como animais de estimação e permanecem incomparáveis ​​quando se trata de lutar no deserto. Eles requerem relativamente pouca comida ou água e dependem de sua resistência para sobreviver aos inimigos. Quando necessário, eles podem perseguir sua presa por dias ou até semanas, coordenando-se com seus animais de estimação para conduzir suas presas em círculos. Uma vez exaustos, poucos inimigos conseguem resistir às proezas físicas de um girtablilu — ou ao seu veneno mortal.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-60": "tremorsensível-impreciso-60"
      },
      "languages": {
        "common": "comum",
        "girtablilu": "girtablilu"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "hwPFfLY2WEiEx7HG": {
          "name": "Pinça",
          "damage": "3d8 + 12 contundente"
        },
        "6LAvrVOm3u6NsFBX": {
          "name": "Ferrão",
          "damage": "3d6 + 12 perfurante"
        }
      },
      "actions": {
        "fjb2phihzP3AYXVQ": {
          "name": "Tremorsense (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "q6IiqtiPOejOEMhP": {
          "name": "Égide Divina",
          "description": "Gatilho O vidente girtablilu tenta um teste de resistência contra um efeito mágico, mas ainda não rolou\nEfeito O vidente invoca energia divina para se proteger às custas de suas outras defesas mágicas. Até o início do próximo turno, eles ganham +1 de bônus de circunstância em testes de resistência contra efeitos mágicos não-divinos e -1 de penalidade de circunstância em testes de resistência contra efeitos divinos."
        },
        "YSYL4KNUxQSbIspZ": {
          "name": "Contrair",
          "description": "(3d8+6)[concussão], teste (fortitude, dc:30, básico)"
        },
        "reHPHVKdLSc8dk0Z": {
          "name": "Passagem do Deserto",
          "description": "Um girtablilu ignora terrenos naturais difíceis no deserto."
        },
        "33gLL2I6GxaQOjzn": {
          "name": "Veneno de Girtablilu",
          "description": "Teste de salvamento (fortitude, dc:30)\nDuração Máxima 6 rodadas\nEstágio 1 2d6[veneno] de dano e Enfraquecido 1 (1 rodada)\nEstágio 2 3d6[veneno] de dano e debilitado 1 (1 rodada)\nEstágio 3 3d6[veneno] de dano e Enfraquecido 2 (1 rodada)"
        },
        "DmCWtqxbwFUBkavN": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "lOLwMJZNPvWNAX0t": {
          "name": "magias Espontâneos Divinos",
          "category": "espontâneo",
          "spells": {
            "nkAELJCLv2bztqsd": {
              "name": "Cozinha Limpa"
            },
            "SEhUOq9zDvFfd7Fu": {
              "name": "Criar Água"
            },
            "CWEeTirAZiVoIcY9": {
              "name": "Atordoamento"
            },
            "YWImRhH0YQciBCLt": {
              "name": "Detectar magia"
            },
            "OOKPveG6BIQAhsOT": {
              "name": "Ala Proibida"
            },
            "jC3PbRUTmGn3ROL7": {
              "name": "Orientação"
            },
            "FMO2ItUj7M0Fw6Tw": {
              "name": "Leia aura"
            },
            "rGjrzBNt5m5LfzVl": {
              "name": "Santuário"
            },
            "PDBOAxmvSkfLNGxn": {
              "name": "Augúrio"
            },
            "4UyvDbquyx5dL9Gc": {
              "name": "Calma"
            },
            "YC2qlEUf8TP0LiSI": {
              "name": "Crie comida"
            },
            "AXHwvwOzVizmRBbr": {
              "name": "Solo Ungido"
            },
            "jvA6YB6u7Ylg3uyf": {
              "name": "Mensagem de sonho"
            },
            "nrCEg067wvbrbdvj": {
              "name": "Lento"
            },
            "QQnVM06gcjEJesK3": {
              "name": "Limpar Aflição"
            },
            "zBKSvT2u4rgQEXqU": {
              "name": "Maldição do Pária"
            },
            "EeOaT0Y0gmSeLtEn": {
              "name": "Movimento desenfreado"
            },
            "k9BT9IyitC0dNIdd": {
              "name": "Limpar Aflição"
            },
            "YPFDuTSiG1zlypO7": {
              "name": "Ira Divina"
            },
            "hAwKsy7Yhjwuutej": {
              "name": "Ferir"
            },
            "5h1zmseplyaoF9sO": {
              "name": "Fronteira Abençoada"
            },
            "5liFrvx53U5sOlXF": {
              "name": "Curar"
            },
            "F1LDIN0mFQPD4FBf": {
              "name": "Explosão Espiritual"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:worm-prophet",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ba9d5be67abc6f2f3c993574062a6a6e7b64f4560fb4e0f58afb8445bd49bbb7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Profeta Verme",
      "description": "Embora acreditem que viverão com sua divindade na vida após a morte, quando se aproximam da morte, alguns sacerdotes clamam desesperadamente por qualquer deus que esteja disposto a ouvir. Os vermes que consomem a carne de tal ex-sacerdote absorvem essas orações, transformando-se em um verme profeta, um devoto peregrino que pode adorar centenas de deuses sem chamar ninguém de seu patrono, talvez coletando dezenas de símbolos religiosos ou rasgando a esmo páginas de vários textos religiosos e vinculando-os em uma nova escritura contraditória. Essas criaturas muitas vezes perdem quaisquer decretos e anátemas que as prendiam na vida e, em vez disso, procuram avidamente converter outros à sua fé confusa - ou \"doutrinar\" as vítimas consumindo aqueles que não querem aderir voluntariamente. Os profetas vermes normalmente não têm reservas em entrar em sua forma de enxame sempre que acharem adequado.\nTodas as criaturas vivas eventualmente se tornam alimento para vermes. No entanto, se uma criatura perece dominada por uma emoção avassaladora ou por assuntos inacabados, sua carne pode ficar infundida com essas obsessões ou uma simples recusa em morrer, infectando quaisquer detritívoros que se alimentem do corpo. À medida que se alimentam, os invertebrados despertam para um tipo de inteligência coletiva, incluindo algumas das memórias e motivações da criatura morta. Depois que o corpo é despido, os vermes se aglomeram e se entrelaçam para recriar a forma da criatura morta a partir de milhares de corpos se contorcendo. Esses renascidos são conhecidos como striders do enxame.\nEmbora muitos peregrinos do enxame sejam criações acidentais, alguns raros mortais transformam-se propositalmente em peregrinos do enxame através de rituais poderosos. Na maioria das vezes, esse processo envolve preparar especialmente um túmulo com muitos necrófagos e encantar o local com magia oculta para ancorar sua alma até que ela possa viver dentro do enxame. Através da transformação, esses striders de enxame intencionais buscam o poder de escapar de qualquer defesa ou reivindicar a imortalidade virtual de uma horda em constante regeneração, assim como um strider de enxame pode reconstituir sua forma até mesmo a partir de um único verme. No entanto, a transformação deixa inevitavelmente cicatrizes na criatura – muitas vezes causando distanciamento emocional, a desintegração de velhos tabus e um sentido dissociado do eu, agora que uma mente se tornou mil. Em seu estado transformado, até mesmo o mais bem-intencionado strider do enxame pode abraçar a vilania e perder qualquer aparência de seu antigo eu ao longo de muitos anos.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-30": "tremorsensível-impreciso-30"
      },
      "languages": {
        "aklo": "aklo",
        "chthonian": "chthoniano",
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [
          "precisão",
          "mente de enxame",
          "inconsciente"
        ],
        "resistances": [
          "físico 10",
          "veneno 10",
          "espírito 10"
        ],
        "weaknesses": [
          "dano de área 10",
          "dano por respingo 10"
        ]
      },
      "attacks": {
        "5xIpndmX3Z6R8fT7": {
          "name": "Martelo de guerra",
          "damage": "2d8+11 contundente"
        },
        "xsYK4JxP1q6zXm9c": {
          "name": "Punho",
          "damage": "1d4+1 contundente"
        }
      },
      "actions": {
        "hb1zq2TbsLvednSs": {
          "name": "Visão Geral",
          "description": ""
        },
        "eBZJh8VtevnrI3AU": {
          "name": "Mente de Enxame",
          "description": ""
        },
        "5jSWTpXUjMgbM2mH": {
          "name": "Desincorporar",
          "description": "Quando o strider do enxame é reduzido a 0 HP, suas criaturas constituintes entram em colapso, espalhando-se pelo chão sob seu espaço e em cada quadrado adjacente. Se pelo menos uma das criaturas fugir, o strider do enxame pode eventualmente se formar novamente ao longo de 1d10 dias (potencialmente mais em áreas onde há poucos invertebrados). Os invertebrados espalhados devem ser destruídos dentro de 1 rodada para destruir o enxame de strider permanentemente. Os invertebrados têm uma reserva coletiva de 40 HP e a mesma CA, salvamentos, imunidades, resistências e fraquezas do strider do enxame. Os invertebrados não podem realizar ações, mas escapam automaticamente assim que a rodada termina. A critério do Mestre, meios inteligentes de capturar ou eliminar as criaturas podem ser suficientes para destruir o strider do enxame."
        },
        "w8F8nbp4IWZUSgyW": {
          "name": "Mil bocas em oração",
          "description": "As criaturas constituintes do profeta verme sussurram incontáveis ​​hinos aos seus deuses. O profeta verme tenta neutralizar (modificador de neutralização [[/gmr 1d20+24 #Counteract]]{+24}, neutralizar Rank 6) um efeito em uma criatura dentro de 30 pés (9 metros) que está impondo uma das seguintes condições: Cego, Desajeitado, Deslumbrado, Ensurdecido, Enfraquecido, Assustado, dano persistente, Enjoado, Lento ou Estupefato. Uma vez que o profeta verme neutraliza com sucesso um efeito desta forma, ele não poderá fazê-lo novamente por [[/gmr 1d4 #Recharge A Thousand Mouths In Prayer]]{1d4 rodadas}."
        },
        "4FSeHozk0lfay7Lq": {
          "name": "Resquícios Aderidos",
          "description": "Os ataques corpo a corpo e de longo alcance de um enxame feitos contra alvos dentro do primeiro alcance de sua arma depositam vermes mordedores no alvo, causando 3d4[persistente,perfurante] de dano."
        },
        "SOnKi5vgCGb1MNFn": {
          "name": "Desenhe insetos",
          "description": "O strider do enxame atrai mais artrópodes do ambiente ao seu redor para reconstituir parte de seu corpo danificado. Eles recuperam 15 HP. A critério do Mestre, o strider do enxame não recupera HP em áreas onde não há artrópodes suficientes para invocar."
        },
        "O2JgYhLmU4N79VHZ": {
          "name": "Abraço contorcido",
          "description": "O strider do enxame avança. Se eles terminarem seu movimento compartilhando um espaço com uma criatura, eles causarão 4d6[perfurante] de dano à criatura, com um teste (reflexo, dc:32, básico). O strider do enxame pode Tocar, Escalar, Voar ou Nadar em vez de Caminhar se tiver o tipo de movimento correspondente."
        },
        "aACTV1ltuDAs7DXj": {
          "name": "Forma de enxame",
          "description": "O enxame de striders se transforma em um enxame disforme de suas criaturas constituintes. Eles deixam cair todos os itens em sua posse. Nesta forma, o strider do enxame não pode usar ações de ataque e não pode lançar magias, mas pode se mover através de áreas pequenas o suficiente para que suas criaturas constituintes caibam sem precisar Apertar. Eles podem usar a mesma ação para se unirem de sua forma de enxame à sua forma normal."
        }
      },
      "spellcasting": {
        "hbuLj9sXjuEAzucw": {
          "name": "magias Divinos Preparados",
          "category": "preparado",
          "spells": {
            "lcOkW3uvHWrysBS4": {
              "name": "Atordoamento"
            },
            "Dxq6lFfU1sLSMdao": {
              "name": "Detectar magia"
            },
            "MdR5QNZhoPaYUx5Q": {
              "name": "Lança Divina"
            },
            "MMA0PIjGkg96eTtu": {
              "name": "Curar"
            },
            "WU6SfON9BZtzffBv": {
              "name": "Mensagem"
            },
            "JOCztctIUNB9wUqn": {
              "name": "Escudo"
            },
            "fcHP0COWUJ4X9XDK": {
              "name": "Dissipar Magia"
            },
            "eWuJ7eB3vDp5F5Zj": {
              "name": "Crise de Fé"
            },
            "7DbufueOS8hvCLyD": {
              "name": "Ira Divina"
            },
            "gkMLhYsQovVC2SgG": {
              "name": "Voar"
            },
            "YNBX2c5GMgCGo93c": {
              "name": "Cadáver Falante"
            },
            "0mRBAuB3dDri3qCa": {
              "name": "Guardião Espiritual"
            },
            "96n7kXnlOcHtSr1C": {
              "name": "Fronteira Abençoada"
            },
            "hEP5nECWPzseJUHh": {
              "name": "Exsanguinação Vampírica"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:valkyrie",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d17e2a33562bd0e75b4b01640f19cd7c0908649fff73ead1b070bd4a4ff93abf",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Valquíria",
      "description": "A canção das valquírias toca onde quer que o aço ressoe contra o aço. Escolhedoras dos mortos e dos chamados anjos da batalha, as valquírias são indivíduos humanóides de estatura física impressionante que buscam as batalhas mais épicas e os confitos lendários para que possam reivindicar as almas dos maiores guerreiros do mundo. As valquírias transformam essas almas em implacáveis ​​imortais conhecidos como einherjar.\nAs valquírias geralmente servem aos deuses da batalha e da guerra, embora alguém possa prometer seus serviços a qualquer divindade que considere digna. Gorum era particularmente conhecido por ter servos valquírias e einherjar. Besmara também tem servos valquírias, e muitas histórias de “navios fantasmas” na verdade fazem referência a relatos de encontros com navios tripulados por einherjar devotados à Rainha Pirata.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "eletricidade 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "OWa41XZ0GByISijn": {
          "name": "Lança",
          "damage": "2d6+15 perfurante; 1d12 eletricidade"
        },
        "EzVhFWQhs6axH99B": {
          "name": "Lança",
          "damage": "2d6+15 perfurante; 1d12 eletricidade"
        }
      },
      "actions": {
        "wPsE3OnHZcFptWrh": {
          "name": "Reivindicador dos Mortos",
          "description": "Valquírias podem detectar as almas daqueles que foram recentemente mortos em combate. Uma valquíria passa 10 minutos orando pelo corpo de uma criatura que está morta há não mais que 12 horas; se aquela criatura for digna de se tornar um Einherji, a valquíria transforma aquela criatura em um einherji."
        },
        "t9cow1t47Ns4t0H0": {
          "name": "Corvo Falante",
          "description": "Valquírias usam corvos como servos e espiões. Eles podem falar com corvos e podem ter até três servos corvos que seguem seus comandos. Valquírias podem observar constantemente qualquer que seja o sentido de seus corvos comandados."
        },
        "b8889HDEEpdiqYFf": {
          "name": "magias Constantes",
          "description": ""
        },
        "W0DoijaFJM8QcTWL": {
          "name": "Ataque reativo",
          "description": "Gatilho Uma criatura ao seu alcance usa uma ação de manipulação ou de movimento, faz um ataque à distância ou sai de um quadrado durante uma ação de movimento que está usando.\nVocê ataca um inimigo que deixa uma abertura. Faça um ataque corpo a corpo contra a criatura desencadeadora. Se o seu ataque for um acerto crítico e o gatilho for uma ação de manipulação, você interrompe essa ação. Este Golpe não conta para sua penalidade de ataque múltiplo, e sua penalidade de ataque múltiplo não se aplica a este Golpe."
        },
        "19AKAkXuEUEtoqkr": {
          "name": "Lembre-se dos caídos",
          "description": "Frequência uma vez por dia\nAcionamento Uma criatura aliada dentro de 60 pés (18 metros) que não seja um constructo ou morto-vivo é reduzida a 0 Pontos de Vida e seu valor de Morrer é 2 ou menos\nEfeito A valquíria restaura 5d10[cura] Pontos de Vida ao alvo."
        },
        "Hl6TVTFqmE0SOKoE": {
          "name": "Tempestade de Batalha",
          "description": "A valquíria lança sua lança no ar, criando uma enorme tempestade em @Template[burst|distance:100]. Lanças de relâmpagos caem sobre os inimigos na área, causando 4d12[eletricidade|opções:dano de área] de dano (teste (reflexo, dc:32, básico, opções:efeito de área) salvamento)."
        }
      },
      "spellcasting": {
        "CR2hQQQ9hlXe7miP": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "pBTKYygZGTdwD8cu": {
              "name": "Augúrio"
            },
            "ehgaBfb1f2q5tCvy": {
              "name": "Heroísmo"
            },
            "JK1K3KoJ0C1rdO1m": {
              "name": "Passagem Segura"
            },
            "cwUhMAFps7HlNpjJ": {
              "name": "Status"
            },
            "0bLepJRkzpudfQkz": {
              "name": "Infundir Vitalidade"
            },
            "eASrswNFoxu5Mo35": {
              "name": "Truespeech (constante)"
            },
            "9A3YnB5w5Tb8VpXK": {
              "name": "Curar"
            },
            "vUY6VV2NoK3leHKO": {
              "name": "Heroísmo"
            },
            "pahqS8TU0kTPmWyL": {
              "name": "Teleporte Interplanar (apenas para si e para montaria)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:catoblepas",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:041c29763f18fd1af824f43519a39251c94b56a41c45febb67cfaceb1552a431",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Catoblepas",
      "description": "O catoblepas é uma fera agressiva na melhor das hipóteses. Embora prefira pântanos, sabe-se que os catoblepas se alimentam em planícies e florestas por curtos períodos, deixando para trás áreas de caça contaminadas por seu mau hálito e resíduos nocivos que outros predadores e presas evitam durante dias ou até semanas depois disso. O catoblepas intimida as criaturas que acredita serem páreo para ele e come tudo o que é mais fraco.\nUm catoblepas tem 15 pés (4,5 metros) de comprimento e pesa 2.200 libras.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo"
      },
      "defenses": {
        "immunities": [
          "doença",
          "tóxico",
          "olfativo"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "61EkmT4Ba451hMDC": {
          "name": "Maxilas",
          "damage": "3d10+13 perfurante"
        },
        "76jTiA45mzSvkuz1": {
          "name": "Chifre",
          "damage": "3d12+13 perfurante"
        },
        "B2rF8mguredueRbP": {
          "name": "Casco",
          "damage": "3d10+11 contundente"
        }
      },
      "actions": {
        "x8pzzu8VRuRa5sdg": {
          "name": "Fedor",
          "description": "30 pés (9 metros). Uma criatura que entra na aura ou inicia seu turno na aura deve ter sucesso em um teste (fortitude, dc:30, opções:efeito de área,infligir:enjoado,infligir:lentidão) ou ficará Enjoado 1 (mais Lentidão 1 enquanto estiver enjoado em uma falha crítica).\nEnquanto estiverem dentro da aura, as criaturas afetadas sofrem -2 de penalidade de circunstância nos testes de resistência contra doenças e na recuperação da condição de doença. Uma criatura que obtiver sucesso no teste fica temporariamente imune por 1 minuto.\nEfeito: Fedor"
        },
        "XucZtbvC1QhYV0HW": {
          "name": "Ferocidade",
          "description": ""
        },
        "VDW4W2k1N88INhBp": {
          "name": "Hálito Venenoso",
          "description": "O catoblepas respira um @Template[cone|distance:60] de fumaça horrível, causando 13d6[veneno|opções:dano de área] de dano (teste (fortitude, dc:32, básico, opções:efeito de área) salvamento). A área deste cone é reduzida a @Template[cone|distance:30]{30 pés (9 metros)} debaixo d’água. Os alvos que falham no teste de resistência também ficam Enjoados 1 (Enjoados 2 em uma falha crítica).\nOs catoblepas não podem usar seu Sopro Venenoso novamente por [[/gmr 1d4 #Recharge Breath Weapon]]{1d4 rodadas}."
        },
        "lPlAVVeLD4qqvZ8q": {
          "name": "Atropelar",
          "description": "Médio ou menor, casco, xadrez (reflexo, dc:32, básico)"
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rusalka",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:80864abbe63b5a2eaa9904860d391c115e0a5684923778dfb74e9defcd1e2816",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Rusalka",
      "description": "Essas fadas andróginas que vivem nos rios adoram manipular as emoções daqueles infelizes o suficiente para cair em suas mãos, usando a humilhação para quebrar a vontade das vítimas. Os Rusalkas gostam de manter seus brinquedos quebrados por perto, tanto para entretenimento contínuo quanto para ajudar em sua defesa, já que a miséria de seus cativos muitas vezes os leva a se tornarem obsessivamente leais a essas fadas. Se uma pessoa escapar das garras de um rusalka, o rusalka provavelmente irá procurá-lo e envergonhá-lo por “abandonar” sua casa, tudo na esperança de que sua vítima regrida a um estado mental angustiado e retorne ao cativeiro.",
      "size": "Médio",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "fogo 10"
        ],
        "weaknesses": [
          "ferro frio 15"
        ]
      },
      "attacks": {
        "645l5baWgTH6yDhk": {
          "name": "Tranças",
          "damage": "3d8+10 contundente"
        }
      },
      "actions": {
        "THBsyQQ1TPn4QRXx": {
          "name": "magias Constantes",
          "description": ""
        },
        "hY0jrgvbD7p17qQK": {
          "name": "Forma desfocada",
          "description": "Uma rusalka fica escondida enquanto está debaixo d'água."
        },
        "I8j4nDu4JKTgvEbF": {
          "name": "Chamada de Aceno",
          "description": "A rusalka grita um convite convincente. Cada criatura não-fada dentro de um @Template[type:emanation|distance:300] deve tentar um teste de salvamento (vontade, dc:29, opções:efeito de área,inflige:fascinado). O efeito dura 1 rodada, mas se a rusalka usar Beckoning Call novamente nas rodadas subsequentes, a duração se estende por 1 rodada para todas as criaturas afetadas. Assim que uma criatura obtiver sucesso em qualquer teste de resistência contra Beckoning Call, essa criatura ficará temporariamente imune por 24 horas.\nSucesso A criatura não é afetada.\nFalha A criatura fica Fascinada e deve gastar cada uma de suas ações para se aproximar da rusalka, evitando perigos óbvios. Se uma criatura acenada estiver adjacente à rusalka, ela permanecerá imóvel e não agirá. Se for atacada pela rusalka, a criatura será libertada do cativeiro no final do turno da rusalka.\nFalha Crítica Como falha, mas se for atacada pela rusalka, a criatura poderá tentar um novo salvamento apenas no início do seu próximo turno, em vez de ser libertada no final do turno da rusalka."
        },
        "7difuXHglJeOajmt": {
          "name": "Contrair",
          "description": "(2d8+10)[concussão], teste (fortitude, dc:32, básico)"
        },
        "NpOi3QLviESjzouR": {
          "name": "Tranças emaranhadas",
          "description": "Uma rusalka pode ter até oito criaturas presas em suas tranças ao mesmo tempo."
        },
        "jtXmmFgx5PW2WGoi": {
          "name": "Cabelo esvoaçante",
          "description": "O rusalka tenta um teste (atletismo, contra:fortitude, opções:movimento forçado) contra a CD de Fortitude de cada criatura que ele tenha Agarrado ou Restringido por suas tranças. O rusalka move cada criatura contra a qual obtiver sucesso até 10 pés (3 metros) e cada criatura contra a qual obtiver sucesso crítico até 20 pés (6 metros). Esse movimento deve estar todo ao alcance de suas madeixas."
        },
        "uw1pWcCZmbGdd2S3": {
          "name": "Toque Vergonhoso",
          "description": "A rusalka toca uma criatura dentro de 5 pés (1,5 metros) usando a mão, despertando memórias de arrependimento e vergonha. O alvo deve tentar um teste de resistência (vontade, dc:35, opções:infligir:enjoado,infligir:atordoado).\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Enjoado 1.\nFalha A criatura fica enjoada 1 e atordoada 1.\nFalha Crítica A criatura fica enjoada 1, atordoada 1 e deve usar sua primeira ação em seu próximo turno para atacar a si mesma, acertando automaticamente."
        },
        "qB08JgkOjJGoAAYD": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "opwojONA0epjQmQi": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "qGxtuGKOVRySglug": {
              "name": "Invisibilidade (à vontade)"
            },
            "WdWB65jenJ7HRKQY": {
              "name": "Névoa (à vontade)"
            },
            "ZHUgXbdGnIvdJGaA": {
              "name": "Charme (à vontade)"
            },
            "gj8a4jEmXZnHpkMp": {
              "name": "Controle a água (à vontade)"
            },
            "6fcA60juNU839MBS": {
              "name": "Caminhada na Água (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:resurrection-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:dc3c4415a7087f07ff4b9a897d53ee3b3944043fc0c7a847f7906b18c232534d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão da Ressurreição (Adulto)",
      "description": "Os dragões da ressurreição oscilam entre a vida e a morte. Eles têm domínio das energias vitais, permitindo-lhes restaurar a vida aos mortos, e domínio das energias vazias, para conceder a morte a outros. Eles fazem uso de suas habilidades para brincar com a vida dos mortais, invocando espíritos para ajudá-los ou revivendo criaturas que consideram importantes ou interessantes. O covil de um dragão da ressurreição geralmente é um lugar árido. Embora eles ainda acumulem riquezas como outros dragões, eles pouco fazem para decorar seus covis e os tesouros são geralmente mantidos em nichos escuros, como se o dragão tivesse pouco cuidado com seus bens. No entanto, os dragões da ressurreição tendem a receber fichas daqueles que ressuscitam ou planejam ressuscitar, e estas são mantidas particularmente seguras.",
      "size": "Grande",
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
          "espírito 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "I4Fc31lnhp82weCJ": {
          "name": "Maxilas",
          "damage": "3d10+11 perfurante; 1d6 vazio"
        },
        "nPF8Cb7ZRAMjmXSt": {
          "name": "Garra",
          "damage": "3d8+11 cortante"
        },
        "MgM7NXJsmS3NTvsO": {
          "name": "Cauda",
          "damage": "3d10+11 contundente"
        }
      },
      "actions": {
        "NMPK6lhp2OOB6OWm": {
          "name": "Desperte!",
          "description": "Gatilho Uma criatura viva que o dragão da ressurreição pode ver morre\nEfeito O dragão da ressurreição usa energia divina e vital para religar a alma ao seu corpo morto. A criatura voluntária retorna à vida estabilizada em 0 HP. Uma criatura pode ser ressuscitada por esta habilidade apenas uma vez."
        },
        "hpxkGqOrHF4syPRM": {
          "name": "Comandante Ressuscitado",
          "description": "Um dragão da ressurreição tem uma forte conexão com seus lacaios e pode Invocar Mortos-Vivos por Sustentação ou Invocar Espíritos como uma ação livre uma vez por turno."
        },
        "SHGSNKhRLCJ5x8DV": {
          "name": "Vida Sifão",
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) usa um efeito de cura que restaura pontos de vida\nEfeito O dragão da ressurreição redireciona as energias vitais para longe do efeito, minimizando seu impacto. O efeito desencadeador resulta na quantidade mínima em qualquer jogada de dados para restaurar Pontos de Vida, e quaisquer valores fixos para restaurar Pontos de Vida (como os Pontos de Vida adicionais para um magia de Cura de duas ações) são cortados pela metade. O dragão então ganha 2d8 Pontos de Vida temporários que duram 1 rodada."
        },
        "AVeCp0hrGkLxjYtI": {
          "name": "Surgir!",
          "description": "O dragão da ressurreição usa seu domínio sobre a energia vital para lançar sua própria alma no Boneyard e puxar a alma de uma criatura voluntária de volta ao seu corpo em um processo que leva 1 hora. Isso tem os efeitos de Raise Dead, exceto que o nível máximo do alvo é 8º e a alma está amarrada à do dragão. Apenas uma criatura pode ser amarrada à alma do dragão por vez. Se a criatura e o dragão não estiverem mais no mesmo plano ou se o dragão morrer, a criatura ressuscitada morre e não pode ser ressuscitada com Arise! de novo. O dragão pode descartar a conexão a qualquer momento. Fazer isso não impede que o dragão crie a criatura com Arise! de novo.\nEmbora ressuscitada dessa maneira, a criatura ainda é um alvo válido para ressuscitar os mortos, ressuscitar e efeitos semelhantes. Retornar a criatura à vida desta forma restaura totalmente a criatura, cortando a conexão com o dragão e permitindo que o dragão estabeleça uma conexão com uma criatura diferente."
        },
        "Zhqu3PdvrWKykPMZ": {
          "name": "Frenesi Dracônico",
          "description": "O dragão dá dois golpes com as garras e um com a cauda em qualquer ordem."
        },
        "WIa9oPm47kC5weT9": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Sugador de Alma sempre que consegue um acerto crítico com um Golpe."
        },
        "xocggVl34iamkAuY": {
          "name": "Respiração que suga a alma",
          "description": "O dragão libera uma torrente de energia divina, causando 11d6[void|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (fortitude, dc:32, basic, options:area-effect) save) que extrai a força vital das criaturas dentro dele. O dragão ganha cura rápida 10 até que seu Sopro Sugador de Almas seja recarregado. O dragão da ressurreição não pode usar Respiração Sifonadora de Almas novamente por [[/gmr 1d4 #Recharge Respiração Sifonadora de Almas]]{1d4 rodadas}."
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
            "71yzJ4lQ9yU6JrLV": {
              "name": "Invocar Espíritos"
            },
            "bAIgvb81XSjPjIzy": {
              "name": "Ferir"
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tomb-giant",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:29d940850394c2fc52abfa6fe16882c7aeee635462a40a5598060483e73b94b7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Tumba Gigante",
      "description": "Mestres de mausoléus e guardiões de criptas, as terríveis criaturas chamadas gigantes das tumbas são um anátema para todos os seres vivos, mas especialmente para outros tipos de gigantes. Há muito tempo, dizem as lendas, os gigantes das tumbas venderam suas almas em troca de um poder insondável sobre os mortos-vivos. Gigantes das tumbas constroem enormes assentamentos góticos em vales assombrados e em encostas abandonadas, longe o suficiente das sociedades de pessoas menores para que permaneçam relativamente imperturbados, mas perto o suficiente para que possam atacar impunemente os cemitérios das aldeias próximas. Os gigantes da tumba mais velhos desfrutam da emoção de subjugar, matar e reanimar seus companheiros gigantes. Um gigante da tumba vê sua vida mortal como apenas uma parte de sua existência. Após a morte, a maioria dos gigantes das tumbas são reanimados como mortos-vivos, que então continuam a praticar suas artes necromânticas.\nEspalhados por todo o mundo, os gigantes são tão diversos quanto os lugares isolados que habitam. Um gigante causa uma grande impressão no meio ambiente local, especialmente nas criaturas menores e mais fracas.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-60": "lifesense-impreciso-60"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "g6Euvv1yMRdzztNy": {
          "name": "Foice",
          "damage": "2d10+13 cortante"
        },
        "sX9QoWtPnvTxNCRn": {
          "name": "Garra",
          "damage": "3d6+13 cortante"
        },
        "tRlQRgVMAJNHGCwY": {
          "name": "Pedra",
          "damage": "3d8+13 contundente"
        }
      },
      "actions": {
        "0bvk5XC5pgg7aduO": {
          "name": "Lifesense (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "LPkdxFZZqxuSkb35": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "4zBHeI8ktOSWiaN1": {
          "name": "Toque Condenador",
          "description": "As garras do gigante da tumba carregam o poder amaldiçoado de seus deuses imundos. Uma criatura atingida pelo Golpe da garra do gigante da tumba torna-se Condenada 1."
        },
        "wchhA2K9Ow4ppaJD": {
          "name": "Fonte da Morte",
          "description": "O gigante da tumba vira a maré espiritual sobre uma criatura que acabou de morrer, transformando-a temporariamente em um recipiente volátil movido pelo Vazio. O gigante da tumba toca uma criatura que morreu nas últimas 24 horas, infundindo energia do vazio em sua carne e ossos. Uma vez durante a próxima hora, o gigante da tumba pode gastar uma única ação (de qualquer distância) para liberar esse vazio do cadáver em uma explosão que causa 10d8[void|options:area-damage] de dano em um @Template[type:burst|distance:15] (teste (fortitude, dc:32, básico) de salvamento); se não for liberada antes do final da hora, a energia se dissipará inofensivamente. O gigante da tumba não pode usar Fonte da Morte enquanto um cadáver anterior permanecer infundido."
        }
      },
      "spellcasting": {
        "nv3QelLpz45iQ6qY": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "0XKH2RB0RTWe3H26": {
              "name": "Amarrar mortos-vivos"
            },
            "maqyhq7WU8Ju4Blo": {
              "name": "Ferir"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:arboreal-archive",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8eb6297833a361ad1559ec859141071032bcc66119eae7fb85a09282e9aafd6f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Arquivo Arbóreo",
      "description": "Arquivos arbóreos são seres solitários normalmente encontrados em áreas remotas. Esses antigos monólitos guardam as memórias de seus vastos territórios, mantendo registros mentais da passagem das estações do mundo ao seu redor. Seu conhecimento sobre assuntos humanóides varia, pois eles acham difícil compreender situações políticas em rápida mudança, mas através de redes de fungos, relatórios de guardas arborícolas e outras conversas florestais, arquivos arbóreos aprendem sobre cada tempestade, seca ou ameaça de exploração madeireira encontrada ao longo de seus longos anos. Eles principalmente observam e registram, em vez de interferir, mas oferecem sabedoria àqueles que os procuram respeitosamente. Os regentes arbóreos recorrem aos arquivos para obter conselhos em tempos de conflito, conferindo o melhor curso de ação para proteger seus reinos.\nÉ raro existir mais de um arquivo arbóreo numa determinada região. Quando um arquivo sente que está chegando ao fim de sua longa vida útil, um grupo de regentes se reúne para nomear o mais sábio entre eles para se tornar o próximo arquivo. Após quatro temporadas de deliberação, todos os arbóreos da área se reúnem para testemunhar o ritual de sucessão, durante o qual o arquivo arbóreo mais velho transfere sua sabedoria coletada para o substituto eleito antes de se aposentar.\nOs arbóreos são antigos guardiões das florestas, semelhantes a árvores, alimentando um novo crescimento e mantendo um ecossistema equilibrado como se a vasta região selvagem fosse o seu jardim. Arbóreos são atenciosos e deliberados – até que algo ameace seus reinos e atraia sua ira.",
      "size": "Enorme",
      "senses": {
        "low-light-vision": "visão na penumbra",
        "tremorsense-imprecise-60": "tremorsensível-impreciso-60"
      },
      "languages": {
        "arboreal": "arbóreo",
        "common": "comum",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "espancamento 10",
          "perfurando 10"
        ],
        "weaknesses": [
          "vulnerabilidade do machado 10",
          "fogo 15"
        ]
      },
      "attacks": {
        "QyBhco1VMbstqt4y": {
          "name": "Filial",
          "damage": "3d10+10 contundente"
        }
      },
      "actions": {
        "P6lMDdeaBGEoO8lA": {
          "name": "Tremorsense (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "BI9PPwdfEfP8sJv5": {
          "name": "magias Constantes",
          "description": ""
        },
        "CChXCrOyQxz6h0X9": {
          "name": "Fenda de Suspensão",
          "description": "Se um arquivo arbóreo morrer inesperadamente antes de transmitir seu conhecimento em um ritual de sucessão, o conhecimento acumulado em suas raízes e galhos explode em uma onda de choque que causa 8d10[mental|options:area-damage,inflicts:prone] de dano a criaturas dentro de @Template[emanation|distance:30]{30 pés (9 metros)} (check (will, dc:32, basic, options:area-effect) save) antes de se dissipar; aqueles que falham também ficam propensos."
        },
        "g4OWJGRw7uHmBmrk": {
          "name": "Vulnerabilidade do Machado",
          "description": "Um arquivo arbóreo sofre 10 danos adicionais de machados."
        },
        "ndQeCjr03ZZsI5o1": {
          "name": "Redemoinho de memória",
          "description": "O arquivo arbóreo tenta dominar os inimigos com uma onda de informações que absorveu ao longo de sua longa vida. Esta onda causa 5d6[mental|options:area-damage] de dano a cada inimigo dentro de @Template[emanation|distance:40]{40 pés (12 metros)}, que deve tentar um teste (vontade, dc:32, opções:efeito de área,efeito de dano,inflige:atordoado,inflige:confuso) salvamento.\nSucesso Crítico A criatura mantém a compostura, não sofre dano e fica temporariamente imune ao Memory Maelstrom por 1 minuto.\nSucesso A criatura fica Atordoada 1 e sofre metade do dano.\nFalha A criatura sofre dano total e fica Atordoada 3.\nFalha Crítica A criatura sofre o dobro de dano, fica Confusa por [[/gmr 2d4 #Confusion Duration]]{2d4 rodadas} e fica atordoada 3."
        },
        "6POqdcS7GEiqCyF1": {
          "name": "Nocaute aprimorado",
          "description": ""
        }
      },
      "spellcasting": {
        "EFidHtj7QBgjYsOb": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "oDu6TBJj3ZqEHwTo": {
              "name": "Flora emaranhada"
            },
            "1VZg8BVuvg7BFe9c": {
              "name": "Ligação à Terra (à vontade)"
            },
            "SUB1OncT9SQ2DofD": {
              "name": "Fale com as plantas (constante)"
            },
            "OpXEq1RYtDfa75DT": {
              "name": "Trepadeiras emaranhadas"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ayngavhaul",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:97a74e1693dd433c7d12a15fd1861044edcc6b0df877fe0a43813dd07943230f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ayngavhaul",
      "description": "Onde uma mente brilhante em busca de conhecimento é corrompida por mentiras eloquentes e verdades distorcidas, um ayngavhaul certamente estará à espreita. Muitas vezes vestidos com as vestes sagradas de outras religiões, numa zombaria distorcida dos seus princípios, estes diabos astutos e instruídos deleitam-se em usar o seu conhecimento para distorcer textos e ensinamentos religiosos em princípios perigosos contra os quais esses mesmos textos alertam. Embora muitos ayngavhauls desenvolvam conhecimentos avançados de especializações únicas, há muitos cuja profundidade de conhecimento de uma única religião rivaliza com a dos sacerdotes mais envelhecidos.\nQualquer informação que um ayngavhaul tenha lido ou aprendido é adicionada a um enorme volume vivo exclusivo do ayngavhaul. As informações contidas são classificadas com base no tópico e no ponto que seu proprietário está fazendo.\nEmbora esses demônios passem a maior parte do tempo nas bibliotecas do Inferno, na maioria das vezes eles são convocados em tentativas desesperadas por estudantes que buscam conhecimento perdido ou proibido, e esse conhecimento tem um custo. Esses demônios usam verdades e interpretações vagas de textos para dar credibilidade aos seus pontos de vista heréticos. Quando esses intelectuais outrora brilhantes são corrompidos em sacerdotes blasfemos, tiranos e déspotas espalhando as palavras distorcidas de um ayngavhaul, esse demônio ganha influência e renome dentro dos círculos acadêmicos do Inferno.",
      "size": "Médio",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
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
          "físico 10 exceto prata"
        ],
        "weaknesses": [
          "santo 10"
        ]
      },
      "attacks": {
        "khS4sF2nZEiplOBG": {
          "name": "Garra",
          "damage": "3d8+8 cortante"
        },
        "H69iZ2VZCBui1iYb": {
          "name": "Palavras abrasadoras",
          "damage": "1d6 fogo; 3d10+8 mental"
        }
      },
      "actions": {
        "NVuPFVDfD0Cn6gYx": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "46dLIVM7cpDD53uS": {
          "name": "Biblioteca Pessoal",
          "description": "Quaisquer tomos que um ayngavhaul esteja lendo ou referenciando para seu trabalho atual podem ser armazenados na biblioteca pessoal do diabo, uma coleção flutuante de tomos que gira em torno do diabo que pode ser usado ofensivamente ou defensivamente. Recuperar ou devolver um tomo requer uma ação de Interagir."
        },
        "jUAtoBpUZQvKebon": {
          "name": "Tomo do magia",
          "description": "Gatilho O ayngavhaul é alvo de um magia\nEfeito O ayngavhaul arremessa um tomo de seu grimório pessoal contra a magia. O diabo deve tentar um xeque (flat, dc:5). Se obtiver sucesso, o tomo absorve completamente os efeitos do magia e se transforma em uma pilha inofensiva de cinzas. Independentemente do resultado, o diabo não pode usar essa habilidade novamente por [[/gmr 1d4 #Recharge Spellblock Tome]]{1d4 rodadas}."
        },
        "rNubcNzojHn1anXP": {
          "name": "Herald Heresia",
          "description": "O ayngavhaul transmite pensamentos blasfemos às mentes de todas as criaturas não-demônios dentro de um @Template[type:burst|distance:20] até 60 pés (18 metros) de distância. Uma criatura afetada sofre 2d10[mental|options:area-damage] de dano mais 2d10[spirit|options:area-damage] de dano e deve tentar um teste de resistência (vontade, dc:33, opções:efeito de área,efeito de dano,inflige:lentidão). As criaturas afetadas ganham um bônus de circunstância cumulativo de +1 (até um total de +4) em testes de resistência contra todas as tentativas futuras de Arauto da Heresia por 1 minuto, à medida que se acostumam às blasfêmias.\nSucesso Crítico A criatura não é afetada e fica temporariamente imune por 1 hora.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total e fica Lentidão 1.\nFalha Crítica A criatura sofre o dobro de dano e fica Lentidão 2."
        },
        "Igt88kb16Bk6ajJg": {
          "name": "Mentes Venenosas",
          "description": "As criaturas atingidas pelas palavras abrasadoras do ayngavhaul devem ter sucesso em um teste de resistência (vontade, dc:33, opções:infligir:estupefato) ou ficarão Estupefatos 1 por 1 rodada (ou Estupefatos 2 em uma falha crítica). Se o alvo for treinado em Religião, ele sofre –2 de penalidade de circunstância em seu teste de resistência."
        }
      },
      "spellcasting": {
        "BrAxE5R5RRLv9VPC": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "VoNpRrgQkxtBG9Hb": {
              "name": "Atordoamento"
            },
            "3Strt5jh3OfiXX0A": {
              "name": "Detectar magia"
            },
            "vQ4TRDTCbr8zPfkL": {
              "name": "Invenção"
            },
            "2q6kMRhN1zifQ2DY": {
              "name": "Parafuso de fase"
            },
            "01vRCXGO8YRsGvt8": {
              "name": "Mão Telecinética"
            },
            "5ivEfatoVQV4EB8r": {
              "name": "Banimento"
            },
            "FWSnQZlCeAZfDnQ2": {
              "name": "Sonda Mental"
            },
            "yjSCFzjBD0cyCf4Y": {
              "name": "Sugestão Subconsciente"
            },
            "p3LMNtNQtHslJz5w": {
              "name": "Dominar"
            },
            "YVi6kmxtc2fYIkgS": {
              "name": "Deixa para lá"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:owb-prophet",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:22d9699842ffb742a35bf619fd7046e0535478a0dd886ea9127ce0e92204a341",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Owb Profeta",
      "description": "Um owb que entra em contato e é escolhido por um dos Renegados ganha um fragmento do poder daquele semideus e estabelece uma conexão permanente com ele. Este ato transforma o owb em uma criatura maior e mais poderosa e o imbui com o poder da transferência divina, permitindo que o owb ganhe seguidores e conceda magias a eles. Estes são profetas owb.\nOs profetas Owb podem ter alguma parte do poder dos Renegados, mas eles usam sua autoridade para ganhar mais influência sobre Calignis e outros adoradores.\nEsses antigos habitantes do Submundo aparecem como torsos humanóides acinzentados cobertos por véus fúnebres translúcidos de sombra. Silenciosos e misteriosos, eles flutuam, sem pernas para mantê-los no alto. Nunca falando uma palavra em voz alta, eles em vez disso alcançam as mentes das criaturas próximas para sussurrar maldições, ameaças e estranhos augúrios desesperados.\nEssas criaturas assustadoras são reverenciadas por Calignis como representantes dos Renegados – um estranho grupo de semideuses semelhantes a ancestrais que muitos Calignis adoram. Alguns até acreditam que os owbs são os Renegados manifestados e que são capazes de manipular sutilmente criaturas no Submundo sem deixar qualquer indicação.\nUma multidão de owbs visita e até permanece para aconselhar comunidades caligni, de personalidade tão variada quanto a dos Renegados. Todos os owbs compartilham o ódio pela luz e pela cor, exceto pelo brilho bruxuleante da magia fria e ardente que eles podem lançar como arma. Owbs que vivem entre os calignis tendem a proibir o uso de luz e cor, usando sua maldição das trevas para extinguir os infratores, se necessário. A única outra semelhança entre todos os owbs é seu desejo arraigado de manipular seus pupilos por meio de leitura de mentes e engano, embora tal manipulação possa ser sutil ou aberta.",
      "size": "Grande",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "aklo": "aklo",
        "caligni": "Caligni",
        "common": "comum",
        "sakvroth": "sakvroth"
      },
      "defenses": {
        "immunities": [
          "frio"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "qEjTHqZLDRx2o0dJ": {
          "name": "Garra",
          "damage": "2d8+11 cortante; 2d8 frio"
        },
        "WUrrk4eny3GFngud": {
          "name": "Queimando Frio",
          "damage": "4d8 frio; 2d8 frio"
        }
      },
      "actions": {
        "LhA2xtluaWsZrc1T": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "HV2jfujsvqwbfTpO": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "EtHDwrRNzkfZ50vn": {
          "name": "Patrono Abandonado",
          "description": "Cada profeta owb serve como um canal para um dos semideuses sombrios conhecidos como os Renegados. Os patronos abandonados são detalhados abaixo e cada um concede habilidades adicionais ao profeta owb.\nCada profeta owb ganha seu poder através de uma conexão com um patrono Abandonado. O patrono concede magias adicionais ao owb e tem seu próprio símbolo religioso e armas favoritas. Cada entrada indica qualquer habilidade ou magia oculto inato que o Renegado concede a seus profetas, além de sua arma favorita.\nEnkaar, o Prisioneiro Malformado Este horror mutilado é o patrono Renegado dos grilhões, da letargia e da corrupção física.\n• magia Dor Fantasma (4º, à vontade);\n• Corrente com pontas de arma favorita\nOlhos que Observam Este estranho trio de olhos felinos é o patrono Abandonado da inferioridade, dos gatos e dos estranhos.\n• Habilidade Lifesense 120 pés (36 metros)\n• Adaga de arma favorita\nAgarrando Iovett Uma bela forma de variedade indescritível, Iovett é o patrono Abandonado dos acidentes, dos parasitas e da luxúria imprudente.\n• magia (4º, à vontade);\n• Espada curta de arma favorita\nHusk Esta criatura andrógina é o patrono Abandonado do vazio, da solidão e do narcisismo.\n• magia Silêncio (4º, à vontade);\n• Espada curta de arma favorita\nLady Razor Este magistrado severo proíbe mostrar bondade ou misericórdia aos membros da família. Lady Razor é a patrona Abandonada dos conflitos familiares, suspeitas e vingança.\n• Tempestade com Arma Mágica (4º, à vontade);\n• Adaga de arma favorita\nReshmit da Voz Pesada Assumindo a forma de uma sombra enorme, Reshmit é o patrono Abandonado das coisas quebradas, do esquecimento e da violência inesperada.\n• Memória de reescrita ortográfica (4º, à vontade);\n• Arma Favorita Morningstar\nThalaphyrr Martyr-Minder O patrono Abandonado do heroísmo fracassado, da prisão e do tempo desperdiçado.\n• magia Lento (4º, à vontade);\n• Lança de arma favorita"
        },
        "NYACujLILqXuexgZ": {
          "name": "Cegueira leve",
          "description": ""
        },
        "9om3JGlrd1NB7cuF": {
          "name": "Fuzilaria Fria Ardente",
          "description": "O profeta owb faz três golpes frios e ardentes."
        },
        "F1BUx1q2oTY8sFpj": {
          "name": "Agarrando o frio",
          "description": "Uma criatura atingida pelo golpe frio e ardente do profeta fica imobilizada em um aglomerado de cristais de gelo ([[/act escape dc=31]])."
        },
        "Mnk4wTPNqIwrijFP": {
          "name": "Maldição das Trevas",
          "description": "O owb inflige uma maldição em uma criatura que sofre dano de frio persistente de seu golpe frio e ardente, roubando a vibração da vítima. A criatura deve tentar um teste de resistência (fortitude, dc:32).\nEm caso de falha, a criatura ganha Cegueira à Luz e sua coloração muda para tons desbotados de cinza, junto com todos os equipamentos que ela carrega, empunha ou usa. Esses efeitos têm duração ilimitada. Independentemente do resultado do teste, a criatura fica temporariamente imune por 1 minuto.\nSe o owb usar esta habilidade em um caligni, a maldição não poderá ser removida sem um ritual de Desejo ou magia poderosa semelhante."
        },
        "It88LMNyaOfw3HMG": {
          "name": "Rapidez da Sombra",
          "description": "Um profeta owb pode lançar Jornada Umbral como uma atividade de 3 ações em vez de 1 minuto. Se o fizerem, visarão apenas a si mesmos."
        }
      },
      "spellcasting": {
        "z4qEtojSEODC5ski": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "pwwd6teuMKdiXWFe": {
              "name": "Atordoamento"
            },
            "VVcnlQGrybaQhFfN": {
              "name": "Leia aura"
            },
            "RFoMFxSnyUuCfboy": {
              "name": "Escudo"
            },
            "Jgtup9yJSEh2qrNd": {
              "name": "Distorção do Vazio"
            },
            "ykEqwrLeamxD1ZQp": {
              "name": "Leitura da mente (à vontade)"
            },
            "GhBe8pLkwKzgHOHc": {
              "name": "Invisibilidade"
            },
            "mJpqT8aBxvEYyKUZ": {
              "name": "Jornada Umbral (Veja Rapidez da Sombra)"
            },
            "uOGwMNAvVXThM92Y": {
              "name": "Escuridão (à vontade)"
            },
            "8hDPykGa0YpeVqrN": {
              "name": "Dominar"
            },
            "KMq72khzfvaSVvWF": {
              "name": "Teletransporte interplanar (somente para ou do submundo)"
            },
            "hR3HDUN1MbgpcHzz": {
              "name": "Explosão de Sombra"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:terra-carver",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:09be8c45ca3c9d2bc66ed1e4e9e39c064a57d9cc709c5290f0325be7e7e347fa",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Escultor da Terra",
      "description": "Até mesmo outros elementais da terra e criaturas de pedra temem o formidável escultor de terra. Seus quatro braços terminam com ferramentas de pedra afiadas que podem cortar as rochas mais duras — e qualquer coisa que entre em seu território. Apesar de terem formas poderosas, a parte superior do corpo volumosa parece comicamente grande em comparação com as pernas robustas. Eles atravessam lentamente seu território e passam a maior parte do tempo cortando pedras profundamente na rocha para criar elaboradas redes de túneis.\nEles preferem o isolamento, e quando dois escultores de terra se encontram, normalmente termina com um cortando o outro. Em vez de tomar o território inimigo, um escultor de terra destrói os túneis, continuando em outro lugar com seus próprios projetos.\nMineiros sem voz\nOs escultores da Terra são mineiros talentosos e seus túneis são alguns dos mais duradouros em qualquer plano. No entanto, a razão para estes túneis é desconhecida. Os estudiosos teorizaram que seus túneis funcionam como uma forma de linguagem escrita para os elementais sem voz. Infelizmente, as tentativas de mapear túneis abandonados muitas vezes terminam onde outro escavador de terra desmoronou um túnel invasor, e mapear túneis ativos geralmente faz com que o cartógrafo nunca consiga voltar.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-100": "tremorsensível-impreciso-100"
      },
      "languages": {
        "petran": "petran"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "a0CTLPs8n3OTwNDn": {
          "name": "Ferramenta de Pedra",
          "damage": "3d10+16 perfurante"
        },
        "pYzN1UIbf3N5Nh7i": {
          "name": "Pedra",
          "damage": "3d8+12 contundente"
        }
      },
      "actions": {
        "apKikGkEGO39Ed3y": {
          "name": "Preso à Terra",
          "description": "Quando não toca o solo sólido, o escultor de terra fica lento 1 e não pode usar reações."
        },
        "7YaDGla1YTt4zyhX": {
          "name": "Queda Estrondosa",
          "description": "Devido ao seu tamanho, um escultor de terra cai com muito mais força do que a maioria das criaturas. Quando um escultor de terra é derrubado ou sofre dano de queda, ele sofre 15 de dano [de concussão] adicional, além de qualquer outro efeito."
        },
        "Qu8H1OuUAHCWxm9R": {
          "name": "Retaliação Territorial",
          "description": "Gatilho Uma criatura dentro de 15 pés (4,5 metros) usa uma ação de movimento ou sai de um quadrado durante uma ação de movimento (ações de movimento usando apenas uma velocidade de voo não desencadeiam esta reação)\nEfeito O escultor de terra tenta um teste de Atletismo para derrubar a criatura desencadeadora. Independentemente do resultado, o espaço da criatura desencadeadora e todos os espaços no chão adjacentes a essa criatura tornam-se terreno difícil por 1 rodada."
        },
        "KCIuH1WmenHj4daF": {
          "name": "Esculpir projétil",
          "description": "O escultor de terra esculpe um projétil mortal a partir de materiais próximos e executa um Golpe de longo alcance na rocha que ganha o traço mortal d10. Com um acerto bem-sucedido, o alvo também cai no chão."
        },
        "EwECv4uI8kHNBhAL": {
          "name": "Cortar pedra",
          "description": "Os ataques corpo a corpo que o escultor de terra faz com sua ferramenta de pedra ignoram a resistência física e a dureza."
        },
        "GYovfvbpnSfaL1VZ": {
          "name": "Túneis de Pedra",
          "description": "Um escultor de terra pode escavar pedras sólidas. Quando o fazem, eles deixam um túnel."
        },
        "xWPHElQhkTrM9Z81": {
          "name": "Cunha",
          "description": "O escultor de terra tenta um golpe com ferramenta de pedra enquanto aperta ainda mais o golpe com outra ferramenta. Se acertar, o alvo sofre 3d10 de dano adicional do mesmo tipo do Golpe e fica Enfraquecido 2 por 1 hora ou até que a criatura esteja totalmente curada. Isso conta como dois ataques para a penalidade de ataque múltiplo do escultor de terra."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tide-giant",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7a6f15ece0f18d1ce3cc401e03519943bf0e242cb939306cb656b02152992349",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Gigante da Maré",
      "description": "Em praias isoladas, onde as ondas batem nas areias imaculadas e intocadas, os gigantes das marés habitam na solidão da costa. Pretendem viver em tranquila serenidade, apreciando a beleza que os rodeia. Os gigantes da maré prosperam descansando na areia, vivendo lentamente enquanto apreciam as vistas, os sons e os cheiros da costa, enquanto saboreiam tigelas de suco e rum. Muitos vivem pela filosofia de que a sua ligação preciosa e sagrada com a magia do mar é aprofundada ao desfrutar da água, por exemplo, observando o sol reflectir-se nas ondas que atingem a costa. Interrupções, invasores e outras surpresas perturbaram enormemente a calma dos gigantes das marés, transformando sua atitude plácida em um furacão furioso.\nEspalhados por todo o mundo, os gigantes são tão diversos quanto os lugares isolados que habitam. Um gigante causa uma grande impressão no meio ambiente local, especialmente nas criaturas menores e mais fracas.",
      "size": "Grande",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "fogo 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "oYwuz7GEajeCeCfj": {
          "name": "Tridente",
          "damage": "2d8+14 perfurante"
        },
        "1NsXcraJplQ8ILzA": {
          "name": "Tridente",
          "damage": "2d8+14 perfurante"
        },
        "AHqoazSOn7S9waGE": {
          "name": "Punho",
          "damage": "2d4+14 contundente"
        }
      },
      "actions": {
        "7rK5cDb3Rc9NrpQf": {
          "name": "Manto da Maré Alta",
          "description": "10 pés (3 metros).\nA magia elementar da água diminui e flui para um gigante da maré. No início de cada turno do gigante em combate, seu manto de maré alta é ativado automaticamente se estiver inativo ou termina se já estiver ativo. Qualquer criatura que não seja um gigante da maré que entre ou comece seu turno na aura enquanto está ativa recupera 5[healing,vitality|shortLabel] HP; este é um efeito de vitalidade curativa e uma criatura pode se beneficiar dele apenas uma vez por rodada. Quando ativo, o manto aparece como um manto mágico e flutuante de espuma do mar que ondula nos ombros do gigante das marés e na parte de trás de seus membros. A capa fica inativa quando o gigante das marés não está em combate."
        },
        "2f0ewcliBVqHIBBZ": {
          "name": "Maré de Sangue",
          "description": "O gigante das marés nada, ou nada duas vezes se seu manto de maré alta estiver ativo. Segurando seu tridente, eles cortam aqueles que passam, causando 2d8[perfurante,2d6[sangramento]] de dano (teste (reflexo, dc:24, básico) de salvamento) a cada inimigo que o gigante se move dentro de 10 pés (3 metros) durante seu movimento. Cada criatura pode ser afetada apenas uma vez durante um único uso de Blood Tide."
        },
        "6GYPjwrrx9YCtARE": {
          "name": "Dente e Maré",
          "description": "Uma onda explode do tridente do gigante em um @Template[type:cone|distance:15] ou um @Template[type:burst|distance:5] dentro de 100 pés (30 metros). Se o manto de maré alta do gigante estiver ativo, este é um @Template[type:cone|distance:30] ou um @Template[type:burst|distance:10]. Cada criatura na área sofre 9d8[concussão|opções:dano de área] de dano com um teste de resistência (reflexo, dc:33, básico, opções:efeito de área)."
        }
      },
      "spellcasting": {
        "khBTGpwrXCQtCYto": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "WYj2OtYeJPWbGMgk": {
              "name": "Controle a água"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:despair-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d9d6c0e22093877769d62ca3a3a16e41f5c6657dbf3dce85985811dafde678dd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão do Desespero (Adulto)",
      "description": "O medo é uma das emoções mais poderosas, e os dragões do desespero são mestres em canalizar esses sentimentos de terror e desesperança para seu próprio benefício. Tal como acontece com outros dragões ocultos, os dragões do desespero são movidos por uma compulsão inata, no caso deles, o desejo de causar terror nos outros. Dragões do desespero tendem a se estabelecer perto de assentamentos, então eles têm uma fonte de medo para se inspirar. Os itens mais comuns nos tesouros dos dragões desesperados são pergaminhos, tomos e relíquias que servem como material de pesquisa. Através deles, os dragões do desespero aprendem sobre o folclore local, lendas urbanas e muito mais para melhor assombrar seus alvos.",
      "size": "Enorme",
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
          "damage": "3d10+16 perfurante"
        },
        "SYPLTHqAQmYgxKer": {
          "name": "Garras",
          "damage": "3d8+16 cortante"
        },
        "17WZ0S8ST7vMcthy": {
          "name": "Cauda",
          "damage": "3d6+14 contundente"
        }
      },
      "actions": {
        "LMer7c5dd0MG76nJ": {
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
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) perde a condição de assustado\nEfeito O dragão se deleita com o medo que deixa o corpo da criatura desencadeadora, ganhando 5d8 Pontos de Vida temporários que duram 1 minuto."
        },
        "gEfh2JBGmxpYDpno": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:33, opções:efeito de área,inflige:assustado)"
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
        "XaV9EbmhjP3b8nYt": {
          "name": "Respiração Gritante",
          "description": "O dragão solta um som cacofônico feito de cada grito que o dragão extraiu de um inimigo aterrorizado, causando 12d6[sonic|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (will, dc:33, basic, options:area-effect) save). As criaturas que falharem no teste de Vontade devem passar a primeira ação do próximo turno sem fazer nada além de gritar. O dragão não pode usar Sopro Gritante novamente por [[/gmr 1d4 #Recharge Sopro Gritante]]{1d4 rodadas}."
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
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:carnivorous-blob",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b3623a0f27a291bbfa4357849b9d2855fafb70a8e1ac5c88a6a1eeea0993f112",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bolha Carnívora",
      "description": "Bolhas carnívoras são crias vorazes de mundos despedaçados muito além das estrelas, nascidas por toda a galáxia em forma inerte até caírem como meteoritos em mundos desavisados. Esses seres enormes podem permanecer adormecidos por anos em cavernas desoladas ou em terrenos áridos. Quando uma bolha carnívora percebe criaturas vivas próximas, ela se transforma em vida gelatinosa, procurando e consumindo todas as criaturas que consegue capturar até ser destruída ou até não conseguir localizar comida por 24 horas, momento em que retorna à hibernação. Freqüentemente, manter a comida longe de uma bolha carnívora é a maneira mais segura de derrotá-la. A capacidade da bolha de se dividir em lodos menores que podem permanecer escondidos após uma luta significa que pode ser difícil erradicar totalmente esses predadores estúpidos.",
      "size": "Imenso",
      "senses": {
        "motion-sense-240": "sensor de movimento-240"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "ácido",
          "acertos críticos",
          "piercing",
          "precisão",
          "cortando",
          "sonoro",
          "inconsciente",
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "N9O6ClFh2arDGR4l": {
          "name": "Pseudópode",
          "damage": "2d12+12 contundente; 2d6 ácido"
        }
      },
      "actions": {
        "UTaJ0rJXzssLeINs": {
          "name": "Sentido de movimento",
          "description": "Uma bolha carnívora pode sentir criaturas próximas através da vibração e do movimento do ar ou da água."
        },
        "ByGE43xowJglhHxP": {
          "name": "Ataque de retaliação",
          "description": "Gatilho A bolha carnívora sofre dano de qualquer fonte\nEfeito A bolha realiza um Pseudópode Golpe contra um alvo adjacente. Se uma criatura adjacente tiver causado o dano desencadeador, essa criatura será o alvo deste Golpe de Retaliação."
        },
        "kryZwH2P5QUcvtyI": {
          "name": "Dividir",
          "description": "Quando uma bolha carnívora com 10 ou mais HP é atingida por um ataque que causaria dano perfurante ou cortante, ela se divide em dois lodos idênticos, cada um com metade do HP original. Um lodo está no mesmo espaço que o original e o outro está em um espaço adjacente e desocupado. Se nenhum espaço adjacente estiver desocupado, ele automaticamente empurra criaturas e objetos para fora do caminho para preencher um espaço (o Mestre decide se um objeto ou criatura é muito grande ou pesado para ser empurrado)."
        },
        "xNfSi1bsS4hwfcXU": {
          "name": "Ácido Carnívoro",
          "description": "O ácido de uma bolha carnívora danifica apenas a carne – não ossos, pedras, madeira ou outros materiais – mas mesmo assim é devastador. Sempre que uma criatura sofrer dano deste ácido, ela deve ser bem sucedida em um teste (fortitude, dc:33, opções:inflige:drenado) ou ficará Drenada 1 (Drenada 2 em uma falha crítica). Em cada falha subsequente, o valor da condição drenada aumenta em 1 (ou em 2 em uma falha crítica), até um máximo de 4 drenados."
        },
        "hPXSQxaDWNJRZg36": {
          "name": "Contrair",
          "description": "2d12[concussão,2d6[ácido]]{2d12 concussão mais 2d6 ácido}, teste (fortitude, dc:33, básico)"
        },
        "i8KkA2JGZTsQSxta": {
          "name": "Engolir",
          "description": "verificação (reflexo, dc:33, opções:efeito de dano,inflige:agarrado,inflige:lento), 4d10[ácido] de dano, [[/act escape dc=33]], Ruptura 20"
        },
        "3lzTOsFXXMpAEBPJ": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:urglid",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c057098a279024e611877fb58fa0148bc95b376ff7fb7a224de7f2ad15130dfd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Urglid",
      "description": "As monstruosidades gigantescas conhecidas como urglids se formam a partir das almas de agentes funerários assassinos, sádicos que enterraram suas vítimas vivas e guardiões de túmulos intencionalmente negligentes que desistiram de vigiar os mortos. Eles procuram perpetuar seus pecados mortais como demônios e usam seus poderes diabólicos para submeter os mortais aos terrores da vivisepultura. Outros urglids consideram os túmulos repulsivos e muitas vezes destroem lápides e outras lápides. Sem tais marcadores, estas sepulturas são muitas vezes perdidas e esquecidas, um detalhe que agrada a um urglid. Com mais de 3.000 libras de altura e pesando mais de 3.000 libras, o demônio tem uma cabeça que parece afundada em seu torso e uma boca aberta e cheia de dentes que se abre no topo do peito.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-60": "tremorsensível-impreciso-60",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "chthonian": "chthoniano",
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10",
          "santo 10"
        ]
      },
      "attacks": {
        "ydykhCatB0hphtVK": {
          "name": "Garra",
          "damage": "3d10+16 cortante"
        },
        "f9txeM87LU3BpOyq": {
          "name": "Perna",
          "damage": "3d12+21 contundente"
        }
      },
      "actions": {
        "d2MUxTvu28FOtSWa": {
          "name": "Tremorsense (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "bjFehLxI7NkYcA0f": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "5Juk1XbFenchTkEV": {
          "name": "Vulnerabilidade de consagração",
          "description": "Dedicado à profanação de sepulturas, um urglid sofre (3d6+6)[mental] de dano a cada rodada em que estiver dentro da área de um efeito com o traço de consagração. Além disso, a fraqueza do demônio ao sagrado aumenta para 30 por 1 rodada na primeira vez que ele sofre dano de Água Benta a cada turno.\nEfeito: Vulnerabilidade de Consagração"
        },
        "FtCRLG4tGhwO4MCV": {
          "name": "magias Constantes",
          "description": ""
        },
        "ybRRLWDLtsP4WDa2": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "debIobAdwTNhKkux": {
          "name": "Deslizamento da Terra",
          "description": "O urglid pode escavar qualquer material terrestre, incluindo rocha. Quando fazem isso, o urglid se move em sua velocidade máxima de toca, não deixando túneis ou sinais de sua passagem, a menos que decidam fazê-lo."
        },
        "6TFb64fByugUXj9s": {
          "name": "Gravechoke",
          "description": "O urglid emite um pulso pútrido que atinge todas as criaturas vivas dentro de um @Template[emanation|distance:30]. As criaturas nesta área que falharem em um teste de resistência (fortitude, dc:30) ficam Enjoadas 1 (Enjoadas 2 em uma falha crítica)."
        },
        "WDFdvCXmXpXv57rO": {
          "name": "Voraz Terrestre Profano",
          "description": "Com um único pensamento tortuoso, o urglid faz com que um monte de terra grave brote aos pés de uma criatura. Essa criatura deve ser bem sucedida em um teste (reflexo, dc:30) ou ficará Restringida ([[/act escape dc=30]]). A criatura contida então começa a afundar no solo em uma sepultura formada espontaneamente. Uma criatura restringida por esta habilidade por 3 rodadas é enterrada 6 pés (1,8 metros) profundamente no solo e começa a sufocar dentro de 1 minuto. Uma criatura enterrada deve ser desenterrada para ser libertada (veja Enterro na página 96 do GM Core). Uma criatura que é morta por Ravenous Earth ressuscita como um Ghoul na meia-noite seguinte."
        }
      },
      "spellcasting": {
        "D3hVCC34jyaRE49l": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "eJvnm2F0rgg9b9ph": {
              "name": "Ligação à Terra (à vontade)"
            },
            "9whNKbBSkdTgebc5": {
              "name": "Passagem Mágica (à Vontade)"
            },
            "TwjPOrLBdLGOMKIc": {
              "name": "Muro de Pedra"
            },
            "cvWs4iv6YT2XjiNA": {
              "name": "Visão Verdadeira (Constante)"
            },
            "FsJ0oDTShRaEyUG1": {
              "name": "Terremoto"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vanyver",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5423bb2253a7c94a0952736816bf7b12222a32c221f51fa91300369e9e49ee80",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Vanyver",
      "description": "Vanyvers são grandes morcegos humanóides moldados a partir do vazio e das sombras, seus olhos vermelhos brilhando como pequenas estrelas em uma noite sem luz. Embora poderosos, eles são os menos darvakkas e os mais propensos a se submeter a um mestre, seja outro de sua espécie ou um mortal com reputação de ser especialmente assassino e destrutivo. Vanyvers concorda em seguir seus mestres como um meio temporário de maximizar a morte e a destruição que eles podem decretar, mas rapidamente se voltarão contra qualquer mestre que sintam que vacila nesse objetivo.\nDarvakkas, também chamados de nightshades, são um mal voraz composto de partes iguais de escuridão e malícia. Originalmente criaturas dos Planos Exteriores que viajam para a convergência do Plano das Sombras e do Vazio – onde o poder do nada os destrói – essas abominações mortas-vivas são a personificação física da entropia. Eles queimam com um ódio intenso por toda a vida, trabalhando para trazer uma noite final e escura ao Plano Material, onde nada resta além de cinzas e gelo.\nComo criaturas distorcidas pela escuridão e pelas sombras, os darvakkas têm uma grande aversão à luz solar e a todas as fontes de energia vital. No Plano Material, eles passam as horas da luz do dia escondidos abaixo do solo, em meio a ruínas, ou submersos nas profundezas dos abismos mais escuros do oceano, além do alcance dos raios solares, emergindo quando a escuridão os protege acima.\nDarvakkas têm uma aura de entropia que atrai escravos mortos-vivos para servirem como guerreiros e arautos. Eles raramente buscam alianças entre si ou com outras criaturas, existindo na solidão como chefes de exércitos individuais de mortos.",
      "size": "Enorme",
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
          "frio 10"
        ],
        "weaknesses": [
          "santo 10",
          "prata 10"
        ]
      },
      "attacks": {
        "2xqc5getycsdpc49": {
          "name": "Garra",
          "damage": "3d10+11 contundente; 1d10 frio"
        },
        "a380z0ervv71womf": {
          "name": "Asa",
          "damage": "3d6+11 contundente; 1d10 frio"
        },
        "sWtjwSeVA2Yi9URn": {
          "name": "Maxilas",
          "damage": "3d10+11 perfurante; 1d10 frio"
        }
      },
      "actions": {
        "qmkVNjGJoAddHkl7": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "ifsi8iYNheUHJYSo": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "QRR9beKx0noS0RfN": {
          "name": "Lifesense 60 pés (18 metros)",
          "description": ""
        },
        "vc4ulmssbysj8wam": {
          "name": "Pegando mordida",
          "description": "Gatilho Uma criatura ao alcance das mandíbulas do vanyver faz um ataque corpo a corpo contra o vanyver com uma arma\nEfeito O vanyver escolhe ser atingido. Se o ataque tivesse errado, ele acertou. O vanyver pega a arma com suas mandíbulas e usa Drain Magic nela sem cumprir os requisitos do Drain Magic."
        },
        "3spjg2szu482ix18": {
          "name": "Drenar Magia",
          "description": "Requisitos A última ação do vanyver foi um golpe de mandíbula bem-sucedido contra uma criatura, objeto ou efeito de magia\nEfeito O vanyver lança um Dispel Magic inato no mesmo alvo; se o alvo for uma criatura, o vanyver pode ter como alvo uma mágica que afete a criatura. Se um efeito de magia ou item for neutralizado com sucesso, o vanyver ganha Pontos de Vida temporários iguais ao dobro do Rank de neutralização do efeito que foi neutralizado."
        },
        "htqhazfmsy64d5iz": {
          "name": "Sombra da Entropia",
          "description": "40 pés (12 metros). Vanyvers vazam entropia e corrupção de seu próprio ser. Uma criatura viva que entra ou inicia seu turno na aura sofre 3d6[void] de dano com um teste (fortitude, dc:30, básico). Se falhar, também é Enfraquecido 1 por 1 minuto e puxado 10 pés (3 metros) em direção ao vanyver."
        },
        "13h23z1r0zoaru7r": {
          "name": "Arrebatar",
          "description": "O vanyver pode Voar com metade da Velocidade enquanto tiver uma criatura Agarrada ou Restringida em uma ou ambas as garras, carregando aquela criatura junto com ele."
        },
        "n2cq3t3kbwnbsjkm": {
          "name": "Impotência à luz solar",
          "description": "Um Vanyver capturado pela luz do sol fica Atordoado 2 e Desajeitado 2."
        },
        "41Dv5UzszJFoJotn": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "dc6VyUkQp6pOJtSn": {
          "name": "Contrair",
          "description": "(3d10+5) Teste de [perfuração] (fortitude, dc:33, básico)"
        },
        "qBPI08yRG8BKlEC1": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {
        "cPUJUW23ZXZ9W7Wr": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "1gVQ7V9qkxGlZCKy": {
              "name": "Detectar magia"
            },
            "NSzq3NXjwXzZZIYq": {
              "name": "Escuridão"
            },
            "qhr9ivxeQ9UdOjvA": {
              "name": "Veja o invisível"
            },
            "vamz8Jb2yzFSh4rA": {
              "name": "Dissipar Magia (à Vontade)"
            },
            "ggDvQbmIXqcLKz4V": {
              "name": "Ferir"
            },
            "qU8ergQ43LOW1kIH": {
              "name": "Teletransporte Interplanar (somente para o Universo, Vazio ou Submundo)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:irlgaunt",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:cef1e65691f20bc5bba53563926cbffb2b16430479a6e99fadb2f758013e04db",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Irlgaunt",
      "description": "Irlgaunts se assemelham a aranhas ou caranguejos titânicos, mas com gavinhas semelhantes a cefalópodes saindo das pontas de suas pernas blindadas de quitina. Suas conchas cinzentas irregulares permitem que eles se misturem às paredes rochosas das altas passagens nas montanhas e às ravinas profundas que servem como locais de caça. Apesar de seu tamanho, eles se movem com uma velocidade incrível, atravessando abismos e subindo penhascos íngremes em poucos instantes. Embora sejam formidáveis ​​no combate corpo a corpo, os irlgaunts têm um ataque à distância ainda mais poderoso. Essas criaturas atacam seus oponentes com gastrólitos regurgitados à força – aglomerados de rochas do tamanho de um melão, envoltos em enzimas digestivas coaguladas, fortes o suficiente para quebrar carne e ossos. Os gastrólitos são frágeis e explodem ao contato, pulverizando a área com fragmentos de rocha e ácido cáustico.\nEmbora alguém possa facilmente confundir um irlgaunt com uma fera simples e brutal, eles têm uma inteligência aguçada e empregam estratégias de caça tortuosas. Eles preparam armadilhas para viajantes e gostam de usar joias e itens mágicos retirados de vítimas anteriores como isca. Eles são conhecidos por iniciar deslizamentos de rochas ou bloquear passagens para redirecionar os exploradores para suas garras. Eles também usam seus gastrólitos para direcionar os movimentos de suas presas, forçando as vítimas a becos sem saída à beira de abismos ou penhascos.\nNa maioria dos casos, os irlgaunts vivem vidas solitárias, provavelmente porque tende a ser difícil encontrar comida suficiente para sustentar mais de um. No entanto, ainda mantêm um sentido de comunidade regional alargada, reunindo-se activamente quando se organizam para a guerra ou para discutir outras questões que afectam as suas espécies ou territórios partilhados. Eles são conhecidos por ocasionalmente se aliarem a gigantes, mas essas tréguas tendem a ser nebulosas.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "jotun": "Jotun",
        "petran": "petran"
      },
      "defenses": {
        "immunities": [
          "ácido"
        ],
        "resistances": [],
        "weaknesses": [
          "espancamento 10"
        ]
      },
      "attacks": {
        "e4Q7KYO6d12Miaek": {
          "name": "Maxilas",
          "damage": "3d8+13 perfurante; 2d6 ácido"
        },
        "p5ENp9EGCrcMiIPm": {
          "name": "Pernas",
          "damage": "3d10+13 contundente"
        }
      },
      "actions": {
        "o1xa1JS76GD0jxDM": {
          "name": "magias à vontade",
          "description": ""
        },
        "iev8zZf1pmJl4hx1": {
          "name": "Regurgitar Gastrólito",
          "description": "O irlgaunt regurgita violentamente um coágulo de pedra quebradiça do tamanho de um melão infundido sobrenaturalmente com enzimas digestivas. A pedra e o ácido explodem com o impacto dentro de um alcance de 30 pés (9 metros), causando 7d6[piercing|options:area-damage] de dano e 7d6[acid|options:area-damage] de dano a criaturas em um @Template[type:burst|distance:20] (check (reflex, dc:33, basic) save). O irlgaunt não pode Regurgitar Gastrólitos por [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        "UoNHneDDCOsDRksN": {
          "name": "Degrau de Pedra",
          "description": "O irlgaunt ignora terrenos difíceis compostos de rochas e pedras."
        }
      },
      "spellcasting": {
        "Ox0yUmHK2vfFGMjC": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "U1k65Z4Uelp3PjuW": {
              "name": "Um com pedra (à vontade)"
            },
            "EzvItTtYhQyULjXm": {
              "name": "Pedra moldada (à vontade)"
            },
            "OuOuyiREjmShMrpc": {
              "name": "Fale com pedras"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:assault-alloy",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:86c2de4f2b94d7c7869cb8042f610ca1f4e32c578e16d70c911ac600108f23ab",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Liga de Assalto",
      "description": "",
      "size": "Pequeno",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "talican": "talicão"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [
          "eletricidade 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "x51RIXpWZLYro5D2": {
          "name": "Garra",
          "damage": "3d10+11 cortante"
        },
        "6r0mscsCkczC8Yul": {
          "name": "Agulha metálica",
          "damage": "3d8+11 perfurante"
        }
      },
      "actions": {
        "db6kv6fQgdI01JGC": {
          "name": "Liga Instintiva",
          "description": "Gatilho A liga de assalto é atingida por um ataque com uma arma de metal ou magia ou efeito de metal\nEfeito O dano físico da arma, magia ou efeito desencadeador restaura os Pontos de Vida da liga de assalto, pois eles incorporam perfeitamente parte do metal usado em seu corpo. Se já estiver com Pontos de Vida completos, a liga de assalto ganha Pontos de Vida temporários que duram 1 rodada. Se uma arma de metal ativar isso, o tamanho do dado da arma diminui em um passo até um tamanho mínimo de dado de d4 por 1 minuto, e essa arma não pode ativar Liga Instintiva novamente durante esse tempo."
        },
        "PIITtwVrcl0ElC9k": {
          "name": "Manipulação de Metais",
          "description": "30 pés (9 metros). Uma liga de assalto tem controle sobre todo o metal não supervisionado dentro da emanação e pode usar qualquer um desses metais como ponto de origem para seus ataques de longo alcance com agulha de metal."
        },
        "B0icoSRf5FQSa64W": {
          "name": "Transmutação ociosa",
          "description": "Uma liga de assalto tem total controle alquímico sobre as propriedades de seu metal. Cada vez que eles acertam uma agulha de metal ou lançam um magia com o traço metal, eles escolhem se o metal que usam é adamantino, ferro frio, prata amanhecida ou qualquer outro metal precioso sólido."
        },
        "UJ9XgOqsBhBpJ4RE": {
          "name": "Metal piscante",
          "description": "Requisitos A liga de assalto é adjacente a metal de pelo menos 1 volume\nEfeito Uma liga de assalto pode liquefazer os metais de seu corpo e viajar até sua velocidade através de espaços com metal contíguo, mesmo que não esteja uniformemente conectado (como em um monte de sucata ou uma pilha de tesouro). Este movimento não desencadeia reações."
        }
      },
      "spellcasting": {
        "2vbzR5HOCbkHxxpz": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "m7ishr4R4NsoLV7c": {
              "name": "Detectar metal"
            },
            "SLKqPM42yhJarIc1": {
              "name": "Nuvem de ferrugem"
            },
            "XkLxcaO4sfhlreyM": {
              "name": "Espigão Empalador"
            },
            "NLxO68bDz0vUwFB4": {
              "name": "Parede de Metal"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phase-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:be69508035539cb5c6d6d5352ac61da45813516b9373c65a0e0b8b8098be96cf",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Fase (Adulto)",
      "description": "Nenhum lugar pode conter um dragão de fase ou mesmo manter seu interesse por muito tempo; sua conexão arcana inata os liga à magia de teletransporte e reposicionamento. Exploradores e estudiosos, os dragões de fase se movem à vontade, descobrindo novos locais e os segredos misteriosos do teletransporte. Eles freqüentemente estabelecem vários covis em lugares distantes que visitam repetidamente. Além da riqueza típica encontrada em covis, os dragões de fase tendem a manter itens de valor sentimental em suas viagens, como uma flor particularmente rara da região ou uma peça de um artista local.",
      "size": "Enorme",
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
          "description": "Acionar Um inimigo dentro de 15 pés (4,5 metros) causa dano ao dragão\nEfeito O dragão teletransporta a criatura até 25 pés (7,5 metros). O destino deve ser no solo e em um espaço sem perigos."
        },
        "XxJKecC13F9ZMVC0": {
          "name": "Localização infalível",
          "description": "O dragão tenta automaticamente neutralizar qualquer efeito de teletransporte que o atinja (neutralizar Rank 7º, modificador de neutralização [[/r 1d20+25 #Counteract]]{+25}). O dragão pode escolher ser afetado normalmente. Outras criaturas alvo do mesmo efeito permanecem afetadas normalmente."
        },
        "z6zrzAGUnQzvtxt2": {
          "name": "Respiração Deslocante",
          "description": "O dragão exala um redemoinho de energia que separa as criaturas, causando 12d6[force|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (reflex, dc:33, basic, options:area-effect) save). O dragão pode teletransportar qualquer criatura que falhe no teste de resistência, teletransportando-a até 40 pés (12 metros) (ou duas vezes mais em caso de falha crítica) em qualquer direção. O destino deve ser no solo e em um espaço sem perigos. O dragão não pode usar Sopro Dislocante novamente por [[/gmr 1d4 #Recharge Sopro Deslocante]]{1d4 rodadas}."
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
        "rkJfQhBUvxq3Xw1y": {
          "name": "Ataque do Portal",
          "description": "O dragão abre momentaneamente um pequeno portal e dá um golpe de garra contra uma criatura dentro de 75 pés (22,5 metros). O alvo está desprevenido para o ataque."
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
            "BD2nNYaIt8DdSnwL": {
              "name": "Translocar (à vontade)"
            },
            "KYFpPg8ROHgzuv8f": {
              "name": "Translocar"
            },
            "KotFZYRmB3SQKd98": {
              "name": "Teleporte"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:anguished-flame",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9b78a46de6e4063e74a3d1302a0339008ba9de674a9f26cc7f78cf90dd95c212",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Chama Angustiada",
      "description": "Contos antigos contam que o senhor elemental Atreia criou seus filhos de seis asas para administrar as orações mortais nos reinos do divino. Esses elementais trabalham de mãos dadas com servos celestiais e divinos para aceitar sacrifícios e oferendas, mas também abençoam mortais contritos com absolvição e purificação, ajudando-os a mudar o destino que os aguarda após a morte.",
      "size": "Grande",
      "senses": {},
      "languages": {
        "empyrean": "empíreo",
        "pyric": "pírico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "G0Vhs4q89QSuyxAs": {
          "name": "Asa Flamejante",
          "damage": "3d10+11 fogo"
        },
        "zrnhZeyAkFUZcSFe": {
          "name": "Raio Brilhante",
          "damage": "3d6 espiritual; 3d6+6 fogo"
        }
      },
      "actions": {
        "mv7XrhU1ziFvGiaz": {
          "name": "Luminosidade Eterna",
          "description": "Uma fama angustiada emite naturalmente uma luz brilhante como uma tocha. Quando outras criaturas têm como alvo a fama angustiada, elas ignoram a condição Oculto da escuridão, neblina, neblina e fumaça."
        },
        "ksHyIX7ogO8kZt9I": {
          "name": "Chama Purificadora",
          "description": "Uma fama angustiada pode tratar feridas sem o kit de ferramentas de um curador, em vez disso curando os feridos com a luz suave de seu toque."
        },
        "5uV0FvOozf4uAu0Q": {
          "name": "Explosão Solar",
          "description": "30 pés (9 metros). Quando uma criatura termina seu turno na aura, ela sofre 2d6[fogo|opções:dano de área] de dano (teste (fortitude, dc:33, básico, opções:efeito de área,inflige:deslumbrado) salvamento). Se falhar na resistência, ele também fica Deslumbrado até o final do próximo turno. A fama angustiada pode ativar ou desativar esta aura usando uma única ação com o traço concentração."
        },
        "4khpMKWQq1dbbREx": {
          "name": "Vulnerável à blasfêmia",
          "description": "Se uma criatura que a fama angustiada pode ver e ouvir gasta 1 ação com o traço linguístico blasfemando contra os deuses, a fama angustiada fica Enjoada 1 até que ela Colete uma Oração daquela criatura."
        },
        "UGRi6jtanncjgKZK": {
          "name": "Colete Oração",
          "description": "A fama angustiada obriga uma criatura que eles podem ver dentro de 60 pés (18 metros), que deve tentar um teste de salvamento (vontade, dc:30, opções:inflige:lentidão).\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura usa imediatamente sua reação para orar.\nFalha A criatura ora. Ele tem Lentidão 1 e não pode usar reações por 1 minuto.\nFalha Crítica Como falha, mas a criatura fica Lentidão 2."
        },
        "ox7EmblfgWHOwVfj": {
          "name": "Olhar Focado",
          "description": "Requisitos A aura solar da fama angustiada está ativa\nEfeito A fama angustiada fixa seus olhos ferozes em uma criatura que eles podem ver dentro de 30 pés (9 metros). O alvo deve imediatamente tentar um salvamento de Fortitude contra a tarifa solar da fama angustiada. Se a criatura já estava ofuscada pela tarifa solar antes de tentar sua resistência, uma falha na resistência faz com que ela fique cega até o final do próximo turno."
        }
      },
      "spellcasting": {
        "d6pXCVaD48RKSiFH": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "N7dANot0BNbu3Q6K": {
              "name": "Detectar magia"
            },
            "JEYYOjBrIbN5riXk": {
              "name": "Ignição"
            },
            "wh57OTEOGjH8GO86": {
              "name": "Luz"
            },
            "ZxWVe7BHu6VdOFvU": {
              "name": "Truespeech (constante)"
            },
            "6ld5WlvTJXvDIF1j": {
              "name": "Bola de fogo"
            },
            "dpDhjcw3f18YqW24": {
              "name": "Teletransporte Interplanar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:animated-trebuchet",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:5b0b1f83d454ee8ef39f823263536e31b29fdb9af8ce7d96faa1c6de826a4749",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Trabuco Animado",
      "description": "Grandes exércitos às vezes pagam taxas exorbitantes para ativar suas armas de cerco.\nMuitos objetos animados têm funções úteis, mas tornam-se perigosos quando não controlados.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "zc0tBM6QCWY3pRQR": {
          "name": "Braço",
          "damage": "3d12+11 contundente"
        },
        "5JjMeb6t3MgQy8HQ": {
          "name": "Pedra",
          "damage": "3d10+11 contundente"
        }
      },
      "actions": {
        "O9KVtNjS6f57XAHS": {
          "name": "Construir Armadura (Dureza 14)",
          "description": "Como objetos normais, um trabuco animado tem Dureza. Esta Dureza reduz qualquer dano que o trabuco sofra em uma quantidade igual à Dureza. Uma vez que um trabuco animado é reduzido a menos da metade de seus Pontos de Vida, ou imediatamente após ser danificado por um acerto crítico, sua armadura de construção quebra, removendo a Dureza e reduzindo sua Classe de Armadura para 32."
        },
        "M68tcWaPYgJDf7pp": {
          "name": "Lançar",
          "description": "Requisitos O trabuco animado tem uma criatura agarrada em seu braço.\nEfeito O trabuco animado tenta um teste (atletismo, contra:fortitude) contra a CD de Fortitude da criatura agarrada.\nEm caso de sucesso, ele dispara a criatura até 40 pés (12 metros) de altura e até 120 pés (36 metros) de distância. A criatura sofre 4d12[concussão] de dano mais o dano de queda apropriado. Se a criatura arremessada cair sobre outra criatura, a criatura sobre a qual ela cair sofre a mesma quantidade de dano de concussão (teste de resistência (reflexo, dc:33, básico)).\nEm um lançamento bem-sucedido, o trabuco animado deve interagir para reposicionar seu braço na posição correta antes de poder lançar novamente."
        },
        "iq5hF08qzTQTeTBD": {
          "name": "Atropelar",
          "description": "Grande ou menor, braço, xadrez (reflexo, pa:33, básico)"
        },
        "2eGZyPN3h4NLfOt9": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phase-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ba84985a76bd635ded4a8403794bb0cb875c38352ca8e308fa779fd01e3eb40c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Fase (Adulto, Feiticeiro)",
      "description": "Nenhum lugar pode conter um dragão de fase ou mesmo manter seu interesse por muito tempo; sua conexão arcana inata os liga à magia de teletransporte e reposicionamento. Exploradores e estudiosos, os dragões de fase se movem à vontade, descobrindo novos locais e os segredos misteriosos do teletransporte. Eles freqüentemente estabelecem vários covis em lugares distantes que visitam repetidamente. Além da riqueza típica encontrada em covis, os dragões de fase tendem a manter itens de valor sentimental em suas viagens, como uma flor particularmente rara da região ou uma peça de um artista local.",
      "size": "Enorme",
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
          "description": "Acionar Um inimigo dentro de 15 pés (4,5 metros) causa dano ao dragão\nEfeito O dragão teletransporta a criatura até 25 pés (7,5 metros). O destino deve ser no solo e em um espaço sem perigos."
        },
        "XxJKecC13F9ZMVC0": {
          "name": "Localização infalível",
          "description": "O dragão tenta automaticamente neutralizar qualquer efeito de teletransporte que o atinja (neutralizar Rank 7º, modificador de neutralização [[/r 1d20+25 #Counteract]]{+25}). O dragão pode escolher ser afetado normalmente. Outras criaturas alvo do mesmo efeito permanecem afetadas normalmente."
        },
        "z6zrzAGUnQzvtxt2": {
          "name": "Respiração Deslocante",
          "description": "O dragão exala um redemoinho de energia que separa as criaturas, causando 12d6[force|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (reflex, dc:33, basic, options:area-effect) save). O dragão pode teletransportar qualquer criatura que falhe no teste de resistência, teletransportando-a até 40 pés (12 metros) (ou duas vezes mais em caso de falha crítica) em qualquer direção. O destino deve ser no solo e em um espaço sem perigos. O dragão não pode usar Sopro Dislocante novamente por [[/gmr 1d4 #Recharge Sopro Deslocante]]{1d4 rodadas}."
        },
        "DR5DVel5zxSC5osK": {
          "name": "Salto de Fase",
          "description": "Frequência uma vez por rodada\nEfeito O dragão se teletransporta até 75 pés (22,5 metros). Se estiverem no ar, eles mantêm seu impulso e não caem no final do turno, mesmo que não tenham usado uma ação para Voar."
        },
        "rkJfQhBUvxq3Xw1y": {
          "name": "Ataque do Portal",
          "description": "O dragão abre momentaneamente um pequeno portal e dá um golpe de garra contra uma criatura dentro de 75 pés (22,5 metros). O alvo está desprevenido para o ataque."
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
            "fIei8yiwPgXbbvB8": {
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
            "FleVVhva5e6zZn71": {
              "name": "Vidência"
            },
            "zu5rpEGwkRrCF9CX": {
              "name": "Muralha da Força"
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
            "BD2nNYaIt8DdSnwL": {
              "name": "Translocar (à vontade)"
            },
            "KYFpPg8ROHgzuv8f": {
              "name": "Translocar"
            },
            "KotFZYRmB3SQKd98": {
              "name": "Teleporte"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ambush-copse",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b24bb9100da5f875d138f26dffb92beed9ebd5b53a248cd7a997d62677e36921",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bosque de emboscada",
      "description": "Madeira serrada e cortada com machado se junta enquanto um bosque de emboscada se move, destruindo a floresta. Cortes e queimaduras estragam a casca desta gigantesca e furiosa massa de troncos rodopiantes e mortais.\nA floresta nunca esquece. Ele lembra as machadinhas, as serras ásperas e a fumaça da madeira crepitante. Ele lembra as carroças que levavam árvores antigas para cortar, moldar e queimar. A intromissão das fadas ou a magia elementar errante atraem essas memórias junto com a raiva e a tristeza da floresta para formar um bosque de emboscada.\nUm bosque de emboscada exerce sua ira nas aldeias ao longo do caminho do lenhador ou espera que intrusos entrem em seu domínio florestal. Embora um bosque de emboscada possa ser confundido com uma árvore arbórea ferida, ele pode parar de se mover e aparecer como uma pilha de troncos coberta de mato ou um casebre parcialmente desmoronado. Lá, espera por retribuição.",
      "size": "Enorme",
      "senses": {
        "tremorsense-imprecise-30": "tremorsensível-impreciso-30"
      },
      "languages": {
        "common": "comum",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "espancamento 10",
          "perfurando 10"
        ],
        "weaknesses": [
          "fogo 15",
          "vulnerabilidade do machado 10"
        ]
      },
      "attacks": {
        "4MGXBJvkblTSzD9X": {
          "name": "Registro",
          "damage": "3d12+14 contundente"
        },
        "ZtbiiCks3mQ4Vg10": {
          "name": "Caber",
          "damage": "3d12+6 contundente"
        }
      },
      "actions": {
        "2dYkExtLUiw4WxTj": {
          "name": "Furioso",
          "description": "Um bosque de emboscada que vê fogo ou machados tem chance de enlouquecer. No início de seu turno, se estiver ciente de um machado ou fogo do tamanho de uma tocha acesa ou maior, o bosque de emboscada deve ter sucesso em um teste (flat, dc:5) ou ficará furioso. Um bosque de emboscada furioso não pode usar ações de concentração e ataca descontroladamente a criatura viva mais próxima ou o objeto mais próximo se nenhuma criatura estiver por perto."
        },
        "TiddtDGDZWocMVuQ": {
          "name": "Ramos Cegantes",
          "description": "Gatilho Uma criatura dentro de 20 pés (6 metros) do bosque de emboscada deixa um quadrado durante uma ação de movimento que está usando\nRequisitos A criatura desencadeadora está em terreno florestal\nEfeito A energia elementar do bosque de emboscada anima galhos de árvores próximos para golpear o rosto da criatura. A criatura desencadeadora deve ter sucesso em um teste de resistência (reflexo, dc:30, opções:inflige:cego) ou ficará cega por 1 rodada."
        },
        "jY4bB5qJ2QSq7ekR": {
          "name": "Derrubando Emboscada",
          "description": "Gatilho Uma criatura se move dentro de 10 pés (3 metros) do bosque de emboscada\nRequisitos O bosque de emboscada está disfarçado de árvores ou troncos\nEfeito O bosque de emboscada faz um golpe de tronco contra a criatura acionadora. Se o ataque acertar, a criatura deve tentar um teste (reflexo, dc:30, opções:inflige:prone) para salvar ou será derrubada."
        },
        "X4J4FMrFJnBreP9n": {
          "name": "Fingir Copse",
          "description": "Até a próxima vez que ele agir, o bosque de emboscada parece ser um pedaço inofensivo de árvores ou troncos. Tem um resultado automático de 43 (45 em florestas) em testes de Enganação e CDs para se passar por árvores ou troncos."
        },
        "dk8LBysVTpSraOEe": {
          "name": "Batendo Esmagamento",
          "description": "Independentemente de o Golpe acertar ou errar, os Golpes corpo a corpo do bosque de emboscada criam um terreno difícil de 1,5 metro quadrado no espaço do alvo."
        },
        "yKRDi3vhJIPeRI5c": {
          "name": "Barragem Pulverizadora",
          "description": "O bosque de emboscada realiza três Golpes de Tronco, cada um com uma penalidade de -2, todos visando a mesma criatura. A penalidade de ataque múltiplo do bosque de emboscada não aumenta até que ele tenha feito todos os três ataques. O bosque da emboscada ganha a condição Desajeitado 2 até o início do próximo turno."
        },
        "UEPtYAmvE8nJXW5W": {
          "name": "Separar objetos",
          "description": "Quando uma emboscada danifica um item ou estrutura, ela causa 15[untyped] de dano adicional a esse item ou estrutura."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:destiny-tempest",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c99f5c8a7940b705dd48e1e7ab8166c44cb99b66e1789edc0398c44679055f14",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Tempestade do Destino",
      "description": "Antes do Império Jaathoom, o Plano do Ar era governado pelas tempestades do destino de seu Reveriente Império das Noites Perdidas. Quando os exércitos jaathoom esmagaram o Império Reveriente, eles prenderam as tempestades do destino derrotadas em esferas de bronze espalhadas pelo Plano do Ar, prisões do tempo e pesadelo eterno.",
      "size": "Médio",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "sussuran": "sussuran"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "força 10",
          "espírito 10"
        ]
      },
      "attacks": {
        "36UNyB8xNL8nBCS1": {
          "name": "Sussurro Deslizante",
          "damage": "2d8+10 contundente; 1d8 mental"
        },
        "HbIL6UsZ9u9F9mN0": {
          "name": "Respiração Umbral",
          "damage": "4d10 vazio"
        }
      },
      "actions": {
        "nfbmtKjeyQ9r6a8r": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "w11ojLvrMfijR7cb": {
          "name": "Centro do Destino",
          "description": "Gatilho Uma criatura dentro de 30 pés (9 metros) se beneficia de um efeito de fortuna\nEfeito Sombras cercam e roubam a tempestade do destino, que reaparece em um espaço aberto adjacente à criatura desencadeadora."
        },
        "xCXOYLGLyAQUYCOL": {
          "name": "Nuvem vazando",
          "description": "15 pés (4,5 metros). As tempestades do destino cercam-se de pensamentos sobre destinos evitados, criando uma espessa sopa metafísica que enjoa a mente e obscurece a ambição. As criaturas na área se movendo em direção à tempestade do destino tratam a área como um terreno difícil."
        },
        "WbQTS5RW9EBLjgso": {
          "name": "Sem respiração",
          "description": "As tempestades do destino não precisam respirar."
        },
        "i30nMpydBcjOLNsW": {
          "name": "Insights indescritíveis",
          "description": "Tocar a mente de uma tempestade do destino, mesmo que brevemente, concede uma consciência poderosa e dolorosa de passados, presentes e futuros desconhecidos, impossivelmente vastos para as mentes mortais conceituarem ou conterem. Sempre que uma criatura atingir a tempestade do destino com um efeito mental mágico, ela deve tentar um teste de resistência (vontade, dc:33).\nSucesso Crítico A criatura não é afetada e se torna imune a insights indescritíveis por 24 horas.\nSucesso A criatura não é afetada.\nFalha A criatura sofre 3d6[mental] de dano.\nFalha Crítica A criatura sofre 6d6[mental] de dano e fica Confusa por 1 rodada."
        },
        "9vQ8kxdh4UHbizus": {
          "name": "Potencial divergente",
          "description": "A tempestade do destino escolhe duas criaturas que pode ver dentro de 60 pés (18 metros) e lança dois golpes sussurrantes e deslizantes, um contra cada criatura. Depois de ver os resultados dos dois ataques, a tempestade do destino escolhe um dos dois alvos para perseguir, voa até 60 pés (18 metros) para atingir o alvo escolhido e usa o resultado do ataque escolhido; o outro Strike está perdido. Se a tempestade do destino for impedida de atingir o alvo escolhido, o ataque será impedido e o Golpe escolhido será perdido."
        },
        "KotM1IkupVfRHwmk": {
          "name": "Som sem voz",
          "description": "Uma criatura danificada pelo sussurro deslizante da tempestade do destino, Golpe, deve ser bem sucedida em um teste de resistência (vontade, dc:33, básico) ou ficará Amedrontada 2."
        },
        "LDc080lsPGldoCXS": {
          "name": "Rapidez",
          "description": "O movimento de uma tempestade do destino não desencadeia reações."
        }
      },
      "spellcasting": {
        "4u5nfqm7dFCCzSbh": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "8HfjsJ2hFd5dCHPv": {
              "name": "Detectar magia"
            },
            "b7qbCxiiRS8oaDpx": {
              "name": "Invenção"
            },
            "oIZNdhwp7k1YWbSD": {
              "name": "Escuridão"
            },
            "INFY8ZFuTqnXNkpB": {
              "name": "Sugestão Subconsciente"
            },
            "RwH5LIrab0JesJ5a": {
              "name": "Truespeech (constante)"
            },
            "7e9NJralXEfEC2yj": {
              "name": "Deixa para lá"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:iceberg-clam",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:960689156508c0e5e9b13464ce3bf243b7d48f20ff81786e67c8ae4db810a3ec",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Molusco Iceberg",
      "description": "Embora tecnicamente não seja um iceberg nem um molusco, o elemental devastador conhecido como molusco iceberg ganhou seu nome apropriado devido à sua camuflagem natural e tendências alimentares. Este predador de emboscada esférico exibe total controle térmico sobre a água que o rodeia e compreende sua forma mutável, atraindo nadadores cansados ​​e embarcações à deriva com a promessa de alívio antes de envolvê-los e fervê-los vivos.\nA menos que tenha comido recentemente o suficiente para ainda estar digerindo a refeição, um molusco derretido é quase imperceptível em uma grande massa de água. Como não gasta energia para manter seu exterior congelado, ele pode esperar semanas ou até meses antes de se alimentar novamente, navegando nas correntes oceânicas até que alguma criatura ou embarcação infeliz entre em seu corpo – e nunca mais saia.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "wavesense-imprecise-120": "ondasense-impreciso-120"
      },
      "languages": {
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [
          "frio 10",
          "fogo 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "cUZwEM1YM1sLVyz4": {
          "name": "Onda Congelante",
          "damage": "1d12 frio; 3d12+10 contundente"
        },
        "Xiqc9wbf2Gew6PSQ": {
          "name": "Sincelo",
          "damage": "1d12 frio; 3d12+4 perfurante"
        }
      },
      "actions": {
        "N7e0dMB58jwUi8Kf": {
          "name": "Corpo Aquoso",
          "description": "O molusco iceberg pode ocupar o mesmo espaço que outras criaturas e é considerado terreno difícil para outras criaturas."
        },
        "VY6BsIHa1buoOPxd": {
          "name": "Emboscada Congelada",
          "description": "Requisitos O molusco iceberg não tem casca congelada\nGatilho Um inimigo entra ou tenta sair do espaço do molusco\nEfeito O molusco iceberg usa Frozen Shell."
        },
        "Slk0UNb8i8Lrp5gg": {
          "name": "Ferver",
          "description": "Frequência uma vez por rodada\nEfeito Todas as criaturas no espaço do molusco iceberg sofrem 4d10[persistente,fogo] de dano (teste (fortitude, dc:33, básico) de resistência) e se o molusco iceberg tiver uma casca congelada, a casca sofre 20[fogo] de dano que contorna a Dureza. Uma criatura não pode se recuperar desse dano de fogo persistente enquanto estiver no espaço do molusco iceberg."
        },
        "k9C2Y7x0fyhiqrl2": {
          "name": "Concha Congelada",
          "description": "O molusco iceberg cobre-se com uma concha congelada. Todas as criaturas no espaço do molusco iceberg não podem sair desses quadrados enquanto a concha congelada estiver no lugar. O projétil tem CA 10, Dureza 10 e 60 Pontos de Vida, e é imune a acertos críticos e danos de precisão. Se o molusco iceberg se mover, todas as criaturas presas em sua concha se moverão com o molusco. Embora um molusco iceberg tenha uma concha congelada, qualquer ataque originado de fora do espaço do molusco iceberg deve ter como alvo a concha. O molusco iceberg pode descartar sua casca. Se o molusco iceberg fizer isso ou a concha for reduzida a 0 Pontos de Vida, o molusco iceberg não poderá usar Ambush Freeze ou Frozen Shell novamente por [[/gmr 1d4 #Recharge Ambush Freeze ou Frozen Shell]]{1d4 rodadas}."
        },
        "N881BiYIIgymRJks": {
          "name": "Jato Aquecido",
          "description": "Requisitos O molusco iceberg não tem casca congelada\nEfeito O molusco iceberg surge ao longo de um jato de água superaquecida, movendo-se até 60 pés (18 metros) em linha reta e causando 4d10[de fogo] de dano às criaturas ao longo de seu caminho (teste de resistência (reflexo, dc:33, básico))."
        }
      },
      "spellcasting": {
        "3TAYe8EjK2YLZVF0": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "nHwdk3iTdHu6JRw2": {
              "name": "Torrente Hidráulica"
            },
            "7euwQhwoy0xWuXSW": {
              "name": "Onda quebrando"
            },
            "4VexDy5i51qQAEx4": {
              "name": "Parede de Gelo"
            },
            "FwWVfWQA9mPjP8GP": {
              "name": "Tempestade de gelo"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:venator",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:78fca2e0020c9373d9ce6915ea40737d0c35a5641d5430261ab1ef69814cbd2d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Venador",
      "description": "Ao contrário da maioria dos aeons, os Venators passam grande parte do seu tempo no Universo mortal. Os axiomitas constroem essas figuras de latão e engrenagens para caçar seus inimigos. Embora sejam combatentes capazes por si só, os venators frequentemente agem como rastreadores de outros aeons, liderando um grupo de vigilantes para proteger um criminoso ou guiando um bythos até seus alvos.\nCada venator é forjado com seus alvos já atribuídos, um pedaço de fórmula axiomita integrado nas engrenagens que giram sob sua armadura. Os alvos são definidos de forma restrita pela fórmula e geralmente são um único alvo nomeado, uma família ou um pequeno grupo que participou diretamente de um evento.\nOs alvos de um venator raramente ameaçam abertamente o equilíbrio da realidade; em vez disso, eles geralmente têm acesso a certos segredos ou novas teorias mágicas.\nComo resultado, mesmo o venator raramente sabe por que lhe foi atribuído um determinado alvo. Venators recentemente forjados são incrivelmente meticulosos em seu trabalho, destruindo metodicamente o corpo de seu alvo e quaisquer objetos próximos (como notas, livros ou até mesmo graffti) que possam conter segredos.\nVenadores bem-sucedidos ficam sem alvos e são abandonados à própria sorte. Eles geralmente estão ansiosos para encontrar um novo propósito, mesmo que seja temporário devido a uma invocação mortal. Muitos eventualmente estendem as suas missões originais, escolhendo novos alvos semelhantes aos anteriores ou, em alguns casos, continuando a perseguir as almas dos seus alvos originais.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "empyrean": "empíreo",
        "utopian": "utópico"
      },
      "defenses": {
        "immunities": [
          "doença",
          "efeitos do medo",
          "emoção"
        ],
        "resistances": [],
        "weaknesses": [
          "eletricidade 15"
        ]
      },
      "attacks": {
        "t8D2aBsbHT1u23P4": {
          "name": "Besta",
          "damage": "2d8+12 perfurante; 1d10 eletricidade"
        }
      },
      "actions": {
        "4lA02OrXN6rXv3yh": {
          "name": "Localize o alvo",
          "description": "Um venator recebe um alvo individual ou um pequeno grupo de alvos quando eles são criados. O venator pode sentir a direção do alvo mais próximo enquanto estiver no mesmo plano que ele. Se não houver nenhum, eles poderão sentir o plano onde a maioria de seus alvos pode ser encontrada."
        },
        "48Utg7g1e0YKZA1R": {
          "name": "Parafuso de descarga",
          "description": "Quando o venator causa dano a uma criatura com sua besta, a flecha se fixa no alvo, causando 2d6[persistente,eletricidade] de dano. A criatura pode remover o raio e acabar com o dano persistente com uma ação de Interagir, mas sofre 1d6[eletricidade] de dano como parte da remoção do raio."
        },
        "7WwNWH2C1Ll2Q3vZ": {
          "name": "Marcar alvo",
          "description": "O venator libera uma bola de luz em um alvo dentro do 60 pés (18 metros), iluminando-o com uma aura mágica que é constantemente visível para o venator. O alvo pode evitar ser marcado com um teste bem-sucedido (reflexo, dc:30). Enquanto estiver marcado, o alvo terá dificuldade em lidar com o Venator e seus aliados. O alvo sofre –1 de penalidade de status em todos os ataques contra o venator e outros aeons, bem como nos testes de resistência contra efeitos do venator e de outros aeons. O venator pode Sustentar este efeito para designar até 5 outras criaturas como aliados de confiança, fazendo com que o alvo sofra as mesmas penalidades contra esses aliados. O venator pode dispensar a marca. Caso contrário, desaparece naturalmente após 1 dia.\nEfeito: Marca do Venator"
        },
        "6lGBPYTZUWLJZzDA": {
          "name": "Arco sobrecarregado",
          "description": "O venator libera raios de seu corpo em @Template[type:line|distance:120], causando 4d10[electricity|options:area-damage] de dano (teste (reflexo, dc:33, básico) de salvamento). O raio também forma um arco, causando dano a qualquer criatura presa por um raio de Venator dentro de 120 pés (36 metros), mesmo que não esteja na linha. O venator fica então desacelerado 1 por 1 rodada."
        }
      },
      "spellcasting": {
        "WeVN78AND7LYWRWO": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "W4JSYtsbqzJMExnT": {
              "name": "Invisibilidade (à vontade)"
            },
            "ZY0w7OCT16dFJ6dF": {
              "name": "Luz reveladora (à vontade)"
            },
            "sD8wzUySvFdVEDcA": {
              "name": "Translocar"
            },
            "xsKe2btiFYbN4dh0": {
              "name": "Teleporte Interplanar (para o plano indicado apenas pelo alvo de localização)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:viper-vine",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:00cc17044045f6b466474ba8058516a3b079fea3336850b4e70919e9b33164f9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Videira Víbora",
      "description": "Carnívoro voraz e carnívoro, a trepadeira víbora tem uma única flor enorme que surge de um emaranhado espesso e frondoso de trepadeiras semelhantes a cobras. Quando a planta sente a aproximação de uma presa adequada através de seu sistema radicular sensível e pouco enterrado, ela se levanta como uma cobra agitada e desenrola sua flor de cores vivas, um ato que libera uma nuvem de pólen entorpecente.\nComo as videiras se alimentam consumindo criaturas, e não por meio da fotossíntese e da absorção de nutrientes do solo, elas desenvolveram uma locomoção rudimentar e podem se arrastar pelo solo com raízes semelhantes a tentáculos. Eles ainda têm uma forma de senciência rudimentar, permitindo-lhes discernir diferenças nas presas e tomar decisões táticas limitadas, ao mesmo tempo que evitam criaturas que são particularmente grandes ou de aparência perigosa.\nA área ao redor dos campos de caça das videiras costuma estar repleta de restos parcialmente devorados das vítimas. Não é incomum encontrar cadáveres apodrecidos de animais selvagens, aventureiros malfadados e até mesmo gigantes nas imediações da planta, junto com uma série de tesouros incidentais deixados para trás nos cadáveres. Uma víbora raramente retorna à carcaça de uma criatura que matou antes, preferindo caçar carne fresca.",
      "size": "Grande",
      "senses": {
        "low-light-vision": "visão na penumbra",
        "tremorsense-imprecise-60": "tremorsensível-impreciso-60"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [
          "veneno 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "dMisi67DlFeeZZGG": {
          "name": "Maxilas",
          "damage": "3d6+11 perfurante; 3d6 veneno"
        },
        "BI9mKPgv9ilkdvUO": {
          "name": "Videira",
          "damage": "3d10+11 contundente"
        }
      },
      "actions": {
        "82GBip2J0tcUmOQh": {
          "name": "Tremorsense 60 pés (18 metros)",
          "description": ""
        },
        "6OlSYo00X1yt0HPu": {
          "name": "Vulnerabilidade ao frio",
          "description": "Quando exposta a um efeito de frio, a videira víbora é dominada pela letargia, tornando-se desacelerada 1 por [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        "mlxDBk3SvOubNTSz": {
          "name": "Pólen Cativante",
          "description": "A videira víbora libera um @Template[type:emanation|distance:60] de pólen invisível que permanece no ar por 5 rodadas, a menos que seja disperso por um vento moderado ou mais forte. Cada criatura que entra ou inicia seu turno na área deve ser bem sucedida em um teste (vontade, dc:33) de resistência ou será cativada. A videira víbora não pode usar Pólen Cativante por [[/gmr 1d4 #rounds]]{1d4 rodadas}.\nSucesso Crítico A criatura não é afetada e fica temporariamente imune ao Pólen Cativante por 24 horas.\nSucesso A criatura está Enjoada 1.\nFalha A criatura está Fascinada e deve gastar cada uma de suas ações para se aproximar da videira da víbora o mais rápido possível, evitando perigos óbvios. Se uma criatura cativada estiver adjacente à videira, ela permanecerá imóvel e não agirá. Ele deixa de ficar fascinado se não estiver mais na aura do pólen no final do turno.\nFalha Crítica Como falha, mais a criatura fica Estupefata 2 por 24 horas."
        },
        "r4hJAd9scHgaZzWU": {
          "name": "Contrair",
          "description": "(3d8+8)[concussão] dano, teste (fortitude, dc:33, básico)"
        },
        "BSzr4rphHmmWUDrG": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:despair-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f752be43908f1374b95fb130265c8fa4a56126c673a26823455e73bf43b4838a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão do Desespero (Adulto, Feiticeiro)",
      "description": "O medo é uma das emoções mais poderosas, e os dragões do desespero são mestres em canalizar esses sentimentos de terror e desesperança para seu próprio benefício. Tal como acontece com outros dragões ocultos, os dragões do desespero são movidos por uma compulsão inata, no caso deles, o desejo de causar terror nos outros. Dragões do desespero tendem a se estabelecer perto de assentamentos, então eles têm uma fonte de medo para se inspirar. Os itens mais comuns nos tesouros dos dragões desesperados são pergaminhos, tomos e relíquias que servem como material de pesquisa. Através deles, os dragões do desespero aprendem sobre o folclore local, lendas urbanas e muito mais para melhor assombrar seus alvos.",
      "size": "Enorme",
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
          "damage": "3d10+16 perfurante"
        },
        "SYPLTHqAQmYgxKer": {
          "name": "Garras",
          "damage": "3d8+16 cortante"
        },
        "17WZ0S8ST7vMcthy": {
          "name": "Cauda",
          "damage": "3d6+14 contundente"
        }
      },
      "actions": {
        "u0z149bXd3Qr3sGR": {
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
          "description": "Gatilho Uma criatura dentro de 60 pés (18 metros) perde a condição de assustado\nEfeito O dragão se deleita com o medo que deixa o corpo da criatura desencadeadora, ganhando 5d8 Pontos de Vida temporários que duram 1 minuto."
        },
        "gEfh2JBGmxpYDpno": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:33, opções:efeito de área,inflige:assustado)"
        },
        "jguPXubA9RRMJmGr": {
          "name": "Pensamentos não solicitados",
          "description": "Gatilho O dragão é atingido criticamente por uma arma ou ataque desarmado\nEfeito A mente do atacante se enche de visões de seus piores medos que dominam seus sentidos, e ele deve escolher um dos seguintes resultados: ou o ataque desencadeador torna-se um sucesso normal, ou o acerto crítico não é afetado, mas a criatura desencadeadora fica Amedrontada 2."
        },
        "XaV9EbmhjP3b8nYt": {
          "name": "Respiração Gritante",
          "description": "O dragão solta um som cacofônico feito de cada grito que o dragão extraiu de um inimigo aterrorizado, causando 12d6[sonic|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (will, dc:33, basic, options:area-effect) save). As criaturas que falharem no teste de Vontade devem passar a primeira ação do próximo turno sem fazer nada além de gritar. O dragão não pode usar Sopro Gritante novamente por [[/gmr 1d4 #Recharge Sopro Gritante]]{1d4 rodadas}."
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
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:exscinder",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a1a32fe8f49dcd2c9bcbd74625402550de587beb24f92124c8d67a27ae2efedf",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Exscinder",
      "description": "Os mortais necessitam de proteção contra conhecimentos proibidos e textos heréticos. Em qualquer lugar através dos planos, um exscinder pode chegar para reivindicar, confiscar e destruir os pensamentos perigosos dentro dele. Considerando-se avatares da virtude da temperança, os ex-escindedores repetem a lição de que a língua cautelosa se recusa a falar palavras perversas. Embora transmitam essas palavras, é raro que prestem muita atenção aos mortais comuns. O perigo não é necessariamente a pessoa que aprende, mas o próprio conhecimento maligno. É a erva daninha que cresce além das palavras da página e deve ser arrancada pela raiz.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "chthonian": "chthoniano",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "necril": "necril",
        "sakvroth": "sakvroth",
        "utopian": "utópico"
      },
      "defenses": {
        "immunities": [
          "efeitos do medo"
        ],
        "resistances": [
          "fogo 10"
        ],
        "weaknesses": [
          "profano 10"
        ]
      },
      "attacks": {
        "oTDObTUQGMyORKkA": {
          "name": "Correntes de ligação",
          "damage": "2d6 fogo; 3d8+11 contundente"
        },
        "2EcjEJCahhfaYMiX": {
          "name": "Sigilo Flamejante",
          "damage": "5d6 fogo; 3d6 espiritual"
        }
      },
      "actions": {
        "utf3V9ckbApc1ehe": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "32r9BgcIWpl6JF1Y": {
          "name": "Proteção do Arconte",
          "description": "Acionamento Um inimigo causa dano ao aliado do arconte e ambos estão dentro de 15 pés (4,5 metros) do arconte\nEfeito O aliado ganha resistência 15 a todos os danos contra o dano desencadeador, e o arconte pode desferir um Golpe contra o inimigo.\nEfeito: Proteção do Arconte"
        },
        "PKy3gN7Ymc49GOVH": {
          "name": "Chicote Censorioso",
          "description": "Quando o exscinder atinge uma criatura com um Golpe de correntes de ligação, aquela criatura deve tentar um teste de resistência (vontade, dc:30). Em caso de falha, ele é controlado pelo exscinder em sua primeira ação no próximo turno (ou controlado durante todo o próximo turno em caso de falha crítica)."
        },
        "2X0MBFrlYN9mhOg4": {
          "name": "Alterar tamanho",
          "description": "O exscinder muda de tamanho para sua escolha entre Enorme, Grande, Médio ou Pequeno."
        },
        "uSrLj12M9nzjE5tG": {
          "name": "Tempere suas palavras",
          "description": "O exscinder escolhe um texto escrito dentro de 120 pés (36 metros). Eles não precisam ser capazes de observar o texto, mas não podem mirar em um que esteja deliberadamente Oculto. O exscinder censura o texto, modificando-o a seu gosto. O texto não pode ser referenciado, tornando-o inútil para funções como lançar um magia de um pergaminho, preparar magias de um livro de magias ou consultar um diário acadêmico. Se o texto for atendido, a criatura que o possui pode tentar um teste (vontade, dc:33) de salvamento; um texto autônomo obtém automaticamente uma falha crítica."
        }
      },
      "spellcasting": {
        "fUPryJAs22PaaUKc": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "HX0LH1qY8VCxtorP": {
              "name": "Luz"
            },
            "dsWNlfQcaOq9B5j8": {
              "name": "Mensagem"
            },
            "lMrebBl0sxvh3qsg": {
              "name": "Claro ataque"
            },
            "qfZzm4z3hVRpljta": {
              "name": "Invisibilidade (à vontade)"
            },
            "unwZp6AOzyCpeSVj": {
              "name": "Curar (à vontade)"
            },
            "Iar5lwSgPwAP4jWx": {
              "name": "Translocar (à vontade)"
            },
            "QqvTMVk8FD3HGzoK": {
              "name": "Imolação Divina"
            },
            "espZPwP7i6u944Lv": {
              "name": "Teletransporte Interplanar"
            },
            "UWYpe3mMSFQ5jQRb": {
              "name": "Reescrever a memória (à vontade)"
            },
            "5sgMz5M77oRYDnYM": {
              "name": "Anel da Verdade"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:millindemalion",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e8b9a66a17032b5063ba6bb09c8b87ff3d925f68279f1fbb1160901d43f35677",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Milindemalião",
      "description": "Millindemalion são malandros feéricos cruéis, capazes de causar confusão com seus chapéus mágicos que alteram a mente. Muitos contos populares de todo o mundo falam de fadas diligentes que ajudam artesãos em dificuldades - sapateiros, modistas, alfaiates e assim por diante - durante a noite, criando produtos de qualidade em segredo por nenhum pagamento maior do que uma migalha de pão ou um pires de creme. Essas histórias contêm um pouco de verdade, já que fadas graciosas ocasionalmente viajam do Primeiro Mundo para ajudar um humilde artesão por capricho, por suborno de comida, ou às vezes até como parte de um esforço conjunto para espalhar a beleza por todo o mundo. No entanto, quando um artesão se torna muito dependente dessa ajuda, seu amigável ajudante feérico pode ficar distorcido e distorcido pelo ressentimento e pela negligência. Eventualmente, eles poderiam se transformar em um brincalhão cruel que se deleita em punir mortais que ousam incumbir uma fada de trabalhos tão mundanos. O milindemalion é o resultado de uma fada gentil e criadora de chapéus que passou por tal transformação. Alguns estudiosos acreditam que esse comportamento errático é causado pela preponderância do mercúrio usado na maioria das chapelarias.",
      "size": "Pequeno",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10"
        ]
      },
      "attacks": {
        "J9DbeNCFrbq08rQy": {
          "name": "Tesouras de feltro",
          "damage": "2d4+14 perfurante; 1d6 mental"
        }
      },
      "actions": {
        "9mRCoULFDFjQtK4x": {
          "name": "Ataque reativo",
          "description": "O milindemalion pode usar Hat Toss contra a criatura desencadeadora em vez de fazer um Strike, fazendo uma jogada de ataque corpo a corpo com um modificador de verificação (millindemalion-hat-lance, against:ac){+27} para fazer isso."
        },
        "zY6HRNQ28oqHNnmV": {
          "name": "Mente perturbadora",
          "description": "Tentar tocar a mente frenética de um milindemalion é uma tarefa perigosa. Quando o milindemalion for bem-sucedido em um teste de resistência contra um efeito mental, a criatura que originou esse efeito sofre 4d6[mental] de dano."
        },
        "3MP8S4relPgvIRf2": {
          "name": "Lançamento de chapéu",
          "description": "O milindemalion rapidamente cria um chapéu que altera a mente em combate e o joga em um alvo com um movimento do pulso. O milindemalion escolhe um dos efeitos abaixo e faz uma jogada de ataque à distância com um modificador de teste (milindemalion-hat-toss, against:ac){+27} e um incremento de alcance de 20 pés (6 metros).\nSe acertar, o alvo deve ser bem-sucedido em um teste de resistência (vontade, dc:33) ou experimentar o efeito listado por [[/gmr 1d4+1 #Duration Hat Toss]]{1d4+1 rodadas}. Se o milindemalion obtiver sucesso crítico no ataque à distância, o alvo sofre uma penalidade de circunstância de -4 no teste de resistência.\nUm alvo só pode usar um chapéu de milindemalião por vez; um novo chapéu substitui qualquer chapéu anterior. O chapéu não pode ser removido antes que a condição termine, mas quando a condição termina (ou em um salvamento bem-sucedido), o chapéu cai em pedaços.\n• Jogador Confuso O chapéu obscurece a mente do alvo; o alvo fica Estupefato 2.\n• Boina Encantadora O alvo fica apaixonado por seu novo chapéu e por seu criador, ficando fascinado pelo milindemalião e pela boina.\n• Espreitador de Veado Deslumbrante O alvo mal consegue enxergar com o chapéu caindo sobre seus olhos e ganha a condição Deslumbrado.\n• Fettering Fedora O alvo sente um peso pesado pressionando-o desde o chapéu e sofre uma penalidade de circunstância de -3 metros em sua Velocidade.\n• Tricorne Cansativo O alvo fica sonolento e fica Lento 1.\nEfeito: Fettering Fedora"
        },
        "sIbPX7HRtLZsZC7R": {
          "name": "Ataque furtivo",
          "description": "Um milindemalion causa 4d6 de dano de precisão extra a criaturas fora de guarda."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:jorogumo",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7c6cda55549aa62e318e40282f8cce27a2f3f4ed9a15f4e51b0787649d1b407e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Jorogumo",
      "description": "Aparecendo como humanos bonitos e bem vestidos, os jorogumo espreitam nas altas montanhas e atacam os viajantes, muitas vezes através de palavras e charme. Essas criaturas cruéis podem se transformar completamente em uma aranha gigante ou criar pernas de aranha em suas costas, e muitas vezes mantêm aranhas gigantes como animais de estimação. Jorogumo geralmente comem suas presas, mas alguns humanóides encontram um destino ainda mais horrível como incubadoras vivas de ovos de jorogumo.\nQuando eles encontram um tengu, os jorogumo ficam furiosos e tentam matá-los o mais rápido possível, pois eles insistem que os tengu podem ver através de seus truques com um simples olhar e são imunes ao seu veneno, mas não está claro para quem está de fora se esta é a história por trás de seu ódio obstinado. Embora a maioria dos jorogumo sejam criaturas solitárias, alguns adoram Norgorber e servem como aliados valiosos para guildas de ladrões que seguem o disfarce daquele deus como o Mestre Cinzento.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "veneno 15"
        ],
        "weaknesses": [
          "pêssego 10"
        ]
      },
      "attacks": {
        "laZB42oqhLObETCQ": {
          "name": "Maxilas",
          "damage": "3d12+14 perfurante"
        },
        "UbutL0MawQSFhBXL": {
          "name": "Garra",
          "damage": "3d8+14 cortante"
        },
        "QKOKwEbR6WoMLOnW": {
          "name": "Rede",
          "damage": ""
        }
      },
      "actions": {
        "CRPa2NYULPm7t9la": {
          "name": "magias Constantes",
          "description": ""
        },
        "CEfQRRIfgYRMra6o": {
          "name": "Pernas de arremesso",
          "description": "Requisitos O jorogumo tem as pernas de aranha estendidas ou mudou de forma\nGatilho O jorogumo é alvo de um ataque\nEfeito O jorogumo levanta uma perna, ganhando +2 de bônus de circunstância na CA contra o ataque desencadeador."
        },
        "xAQ3og5Z7n9iwnIs": {
          "name": "Alterar forma",
          "description": "O jorogumo assume a aparência de qualquer aranha Pequena ou Média. Isso não altera sua velocidade ou ataques."
        },
        "jBlN3AcFIGu2v2jI": {
          "name": "Veneno de Jorogumo",
          "description": "Teste de salvamento (fortitude, dc:32)\nDuração Máxima 4 horas\nEstágio 1 3d6[veneno] de dano e Estupefação 1 (1 rodada)\nEstágio 2 3d6[veneno] de dano e Estupefação 2 (1 rodada)\nEstágio 3 4d6[veneno] de dano e estupefação 2 (1 rodada)\nEstágio 4 paralisado por [[/gmr 1d4 #hours]]{1d4 horas}"
        },
        "jcppWoDI4Dl4BBUG": {
          "name": "Pernas de aranha",
          "description": "Requisitos O jorogumo está na forma humanóide\nEfeito Oito grandes pernas de aranha brotam das costas do jorogumo, garantindo uma velocidade de subida de 12 metros e permitindo que ele use a reação Darting Legs."
        },
        "R8lkZEw0yLsgMcJt": {
          "name": "Armadilha da teia",
          "description": "Uma criatura atingida pelo ataque de teia do jorogumo fica imobilizada e presa na superfície mais próxima, impedindo que a criatura se mova. A CD para escapar ou forçar a abertura da armadilha de teia é 32."
        }
      },
      "spellcasting": {
        "AMSGg9QhrLNY87yV": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "nrFBzWgzO2zkggIT": {
              "name": "Charme (à vontade)"
            },
            "tDnGHBENORXCE6b3": {
              "name": "Fale com animais (constante)"
            },
            "b6cuLHfZlcYXxAcP": {
              "name": "Leitura da mente (à vontade)"
            },
            "r5hwww48T7DchilH": {
              "name": "Maldição do Pária"
            },
            "tH1kFOJ5IcrLyTad": {
              "name": "Sugestão"
            },
            "vtP3BQRkTKStkABB": {
              "name": "Truespeech (constante)"
            },
            "rB2QwSHTXGe7l9rE": {
              "name": "Convocar Animal (Somente Aranhas)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:skeletal-titan",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1edd7ec1ec852ba08df81103a434e5af89f50b252ae6d6d19f1bd7f94591c214",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Titã Esquelético",
      "description": "Somente os poderosos e tolos levantariam os ossos de um poderoso titã ou de uma criatura igualmente gigantesca como um esqueleto. Praticantes habilidosos veem isso como um desperdício de um corpo poderoso e, em vez disso, os imbuem com magia que lhes permite voar. Os sábios sabem que é quase impossível controlar tal colosso e que é tão provável que ele esmague seu criador sob seu pé poderoso quanto destrua seus inimigos.\nEntre as fileiras dos mortos, nenhum é tão numeroso, nem tão variado, como o esqueleto. Embora a maioria seja quase inteiramente feita de osso, alguns mantêm alguns pedaços de carne para ajudá-los em seus movimentos, como as membranas das asas.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
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
          "frio 10",
          "eletricidade 10",
          "fogo 10",
          "perfurando 15",
          "cortando 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "4pt21hdckfee43y3": {
          "name": "Espada da Montanha",
          "damage": "3d12+13 contundente"
        },
        "qo8ae1c96drn6owz": {
          "name": "Garra",
          "damage": "3d8+13 contundente"
        },
        "55sqmv4kf6twrsh0": {
          "name": "Pé",
          "damage": "3d8+13 contundente"
        },
        "15qn60fnmbbmi7qd": {
          "name": "Osso",
          "damage": "2d10+13 contundente"
        }
      },
      "actions": {
        "WthNDt9DjtNzlPes": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "tskaoz4x2uhz0ss3": {
          "name": "Restos ósseos",
          "description": "Os ossos que um titã esquelético lança são grandes o suficiente para desorganizar o campo de batalha. Quando o titã esquelético atinge uma criatura com um ataque ósseo, o projétil se torna um terreno difícil no quadrado que a criatura ocupa (ou, se a criatura ocupar mais de um quadrado, um quadrado que ocupa à escolha do titã). Se o titã errar um ataque de osso, em vez disso, um quadrado aleatório adjacente à criatura se tornará um terreno difícil."
        },
        "7hy3wqu9oefod2vm": {
          "name": "Batida na montanha",
          "description": "O titã esquelético bate sua espada da montanha no chão. A onda de choque reverbera, causando (3d12+13)[concussão|opções:dano de área] dano a todas as criaturas em um salvamento de @Template[type:line|distance:20] (verificação (reflexo, dc:33, básico)). Uma criatura que falhar no teste também será derrubada."
        },
        "wRVqT1QO1O1ru1SY": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pb:33, básico)"
        }
      },
      "spellcasting": {
        "kPpdhRglPpemLa6O": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "onnK4xdGi4K7zKl5": {
              "name": "Voar (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:thanadaemon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:a0cd12b7ea6192b78e91ee5cdca704d73da432276919002faa0905d5f5b8fd7d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Thanadaemon",
      "description": "Também conhecidos como diáconos da morte, os thanadaemons representam a morte através da velhice. Eles estão entre os demônios mais pacientes e preferem aguardar a hora de implementar planos de longo alcance e de décadas em vez de lutar (embora ainda sejam inimigos mortais). Como o Cavaleiro da Morte, eles percorrem as águas do Rio Estige em busca de almas rebeldes. Raramente os thanadaemons são vistos sem um remo característico (que eles empunham como bastão), uma ferramenta que eles usam para navegar pelos canais cheios de lama e corredeiras turbulentas do rio.\nOs demônios se formam a partir das almas mais desprezíveis e personificam formas de morte.",
      "size": "Médio",
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
          "santo 10"
        ]
      },
      "attacks": {
        "PwSEiS1mqX6rqjJa": {
          "name": "Equipe Bo",
          "damage": "2d8+16 contundente; 1d6 vazio"
        },
        "KYPHjX89IxHU4Sz3": {
          "name": "Garra",
          "damage": "3d6+17 cortante"
        }
      },
      "actions": {
        "gEBtnmvk3gdF5Dfx": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "iRZgPtkf6Lw3MzYm": {
          "name": "magias Constantes",
          "description": ""
        },
        "FOqdcu8TMcTRnPHq": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "5fPhzfjVfDH0Ssgz": {
          "name": "Olhar aterrorizante",
          "description": "30 pés (9 metros). Quando uma criatura termina seu turno na aura, ela deve tentar um teste (vontade, dc:30) de resistência. Se a criatura falhar, ela fica Amedrontada 2. A criatura fica então temporariamente imune ao olhar aterrorizante (mas não ao Olhar Focado) por 24 horas."
        },
        "yHiEUWvnlHVJLlCA": {
          "name": "Golpe Drenante",
          "description": "Quando um thanadaemon causa dano a uma criatura viva com um Golpe corpo a corpo, a criatura deve ser bem sucedida em um teste (fortitude, dc:33) ou ficará Drenada 1. Dano adicional causado pelo thanadaemon aumenta o valor da condição drenado em 1 em caso de falha na resistência, até um máximo de Drenado 4."
        },
        "e7rgKN11dqX1fsSq": {
          "name": "Olhar Focado",
          "description": "O thanadaemon encara uma única criatura que pode ver dentro de 30 pés (9 metros). Se o alvo ainda não estiver Assustado, ele deve imediatamente tentar um teste (vontade, dc:33) de resistência contra o olhar aterrorizante do thanadaemon. Se o alvo já estava assustado, ele deve tentar um teste (vontade, dc:33) de resistência ou se tornar Fugindo por [[/gmr 1d4 #rounds]]{1d4 rodadas}; este segundo efeito tem o traço de incapacitação. Após tentar salvar, a criatura fica temporariamente imune a esta habilidade até o início do próximo turno do thanadaemon."
        },
        "mKh47XLxTvXG71TF": {
          "name": "Esmagamento de alma",
          "description": "Requisitos O thanadaemon tem uma joia da alma\nEfeito O thanadaemon esmaga a gema da alma com uma mão e ganha cura rápida 15 por 1 minuto.\nEfeito: Soul Crush (Cura)"
        }
      },
      "spellcasting": {
        "6mCb1o0EW6yQ0NfB": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "xlG6gARk9pKLtlNB": {
              "name": "Translocar (à vontade)"
            },
            "ulesj8P6Pt5Nf0jA": {
              "name": "Translocar"
            },
            "nHY42Kt9urOKdgSx": {
              "name": "Lento"
            },
            "ObVrTFAbOtoIPhZv": {
              "name": "Exsanguinação Vampírica"
            },
            "HJAngcZN6WxfyR3t": {
              "name": "Executar"
            },
            "TLpSdUiwPUr9Urkt": {
              "name": "Teletransporte Interplanar (à vontade; apenas para si mesmo, esquife e passageiros; apenas para aviões Astrais, Etéreos e Profanos)"
            },
            "WuszSR2b6vac9hKo": {
              "name": "Teleporte"
            },
            "9oB4eGKG67srf4Lu": {
              "name": "Visão Verdadeira (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dibrasgorth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b7b3c34b5596b25d307579ad5bcadba13bf10beaae3074bfbcb224919896b7d3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dibrasgorth",
      "description": "Dibrasgorths, às vezes chamadas de Mães do Esquecimento, são criaturas monstruosas do caos que vivem em espaços sem luz, muitas vezes perto do fundo de lagos e oceanos profundos, tanto acima quanto no subsolo. Eles podem parecer monstros horríveis com cabeças de plesiossauro sobre massas de tentáculos, cada um com um olho vermelho sinistro nas pontas, mas os dibrasgorths têm um senso distorcido de astúcia, provavelmente devido à sua capacidade de ver e afetar outros planos além daquele onde estão. Embora sejam bastante poderosos (sendo alguns deles os servos favoritos de Lamashtu), os dibrasgorths preferem manter sua existência em segredo dos mortais do mundo acima.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
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
          "efeitos de morte",
          "polimorfo",
          "petrificado"
        ],
        "resistances": [
          "ácido 15",
          "frio 15",
          "mentais 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "wWWgb6HHBPxM0xaM": {
          "name": "Maxilas",
          "damage": "3d10+16 perfurante"
        },
        "ypiI3yV1r7NpukQ8": {
          "name": "Tentáculo",
          "damage": "3d8+16 contundente"
        }
      },
      "actions": {
        "2qh6rayNqt3ObfMh": {
          "name": "Visão Plana",
          "description": "Os olhos nas extremidades de seus tentáculos permitem que um dibrasgorth veja planos adjacentes àquele em que está atualmente na faixa listada. Por exemplo, se estiverem no Universo, eles podem ver o Plano Etéreo e o Mundo Inferior."
        },
        "RJSM8slC0SUuQxV0": {
          "name": "Visão Geral",
          "description": ""
        },
        "ucRMCOnM19HZo1qu": {
          "name": "Espaço distorcido",
          "description": "100 pés (30 metros). A presença do dibrasgorth distorce a estrutura do espaço. Qualquer outra criatura que use um efeito de teletransporte ou magia dentro da aura deve tentar um teste de resistência (fortitude, dc:33, opções:efeito de área,inflige:enjoado) ou ficará Enjoado 2."
        },
        "5XYz1z3IOHbCaNtG": {
          "name": "Sopro de Fantasmas",
          "description": "O dibrasgorth exala um @Template[type:cone|distance:60] de gás nocivo. Cada criatura na área sofre 7d6[veneno | opções: dano de área] de dano (teste (fortitude, dc: 30, básico, opções: efeito de área, inflige: confuso) salvamento). Em caso de falha, a criatura também fica Confusa por 1 rodada (ou 2 rodadas em caso de falha crítica)."
        },
        "2beE8eZvPLfVCbSN": {
          "name": "Arrastar pelas dimensões",
          "description": "Frequência uma vez por rodada\nRequisitos O dibrasgorth tem uma criatura agarrada ou contida com um tentáculo\nEfeito O tentáculo do dibrasgorth chicoteia através de planos adjacentes enquanto esmaga a criatura que está segurando contra o chão e outras características naturais em cada plano antes de retornar a este plano. A criatura sofre 5d8[concussão] de dano (teste (reflexo, dc:30, básico, opções:infligir:estupefato,infligir:enjoado) salvamento). Uma criatura que falhe no teste também fica Estupefata 1 por 1 rodada e Enjoada 1 pela viagem plana rápida."
        },
        "pefMP0GYkD8nfE0s": {
          "name": "Mordida drenante",
          "description": "Um dibrasgorth se alimenta dos espíritos de suas vítimas. Uma criatura que é danificada pelo Golpe das mandíbulas do dibrasgorth deve tentar um teste (fortitude, dc:30, opções:inflige:drenado) para salvar ou se tornará Drenado 1 (Drenado 2 em uma falha crítica). Além disso, o dibrasgorth ganha 10 Pontos de Vida temporários que duram 1 minuto se a criatura falhar ou falhar criticamente no salvamento.\nEfeito: Mordida Drenante"
        },
        "7e7jE25UpfFbfW12": {
          "name": "Tentáculos Transdimensionais",
          "description": "O dibrasgorth pode espalhar seus tentáculos por aviões próximos para atacar. Enquanto estiver no Universo, seus tentáculos atacam ignoram toda a cobertura de objetos, a menos que esses objetos existam no Universo e no Mundo Inferior ou no Plano Etéreo, ou os objetos tenham a característica extradimensional."
        },
        "n2dq5FenaKQiYinW": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "dXb2V3Z10BExRSYC": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "9MOrAgLybsmugyGZ": {
              "name": "Atordoamento"
            },
            "Sy1hRgbPzsuvix5H": {
              "name": "Pesadelo"
            },
            "b1rQwK8hZXIlPcUg": {
              "name": "Sugestão"
            },
            "k59UF7s8M1XkKEQQ": {
              "name": "Banimento"
            },
            "fhPnd6iOSODFmTJY": {
              "name": "Veja o Invisível (Constante)"
            },
            "LMFIgVScxpfLci1v": {
              "name": "Pulso Sináptico"
            },
            "qonIsnRcGcoo5mq9": {
              "name": "Dominar"
            },
            "4p00EUbkfVr6GoON": {
              "name": "Repulsão"
            },
            "A3XGHW7ngjADEu4l": {
              "name": "Teletransporte Interplanar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2b4fcfcbc37464f12179891eb3d70c7c04dc92def5edac822cb39b642b7dd3b1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Rúnico (Adulto)",
      "description": "Os dragões rúnicos têm uma visão inata sobre o poder das runas. A maioria dos dragões rúnicos mantém uma variedade de runas gravadas em suas escamas, que seus corpos podem fortalecer magicamente. Eles normalmente não lançam magias sozinhos, em vez disso, confiam em sua habilidade de criar runas instantaneamente para produzir os efeitos desejados. Um dragão rúnico geralmente se refere ao seu tesouro como sua biblioteca, pois está cheio de importantes textos históricos, peças, discursos, livros didáticos e livros de magias escritos por pessoas de diferentes culturas em uma variedade de idiomas. Embora muitas vezes possam falar uma língua com a ajuda da magia, eles preferem aprender línguas no contexto de seus falantes, para que possam compreender as nuances escondidas na sintaxe e na magia de seus símbolos.",
      "size": "Enorme",
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
          "damage": "3d6+14 cortante"
        },
        "vWI3q4eiStz5qqHx": {
          "name": "Maxilas",
          "damage": "3d8+14 perfurante"
        },
        "8A5XIY3Hlr1wxzJm": {
          "name": "Cauda",
          "damage": "3d10+14 contundente"
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
          "description": "Gatilho O dragão é alvo de um magia que requer um teste de resistência\nEfeito O dragão tenta desfazer as runas fundamentais do magia. Eles tentam neutralizar o magia (neutralizar Rank 7º, neutralizar modificador [[/r 1d20+26 #Counteract]]{+26}). Se tiver sucesso, o dragão não será afetado pelo magia; outros assuntos são afetados pela magia normalmente. O dragão não pode usar a Runa de Cancelamento novamente por [[/gmr 1d4 #Recharge Canceling Rune]]{1d4 rodadas}."
        },
        "L8w8yFgsSTRZPPKw": {
          "name": "Runa Retributiva",
          "description": "Gatilho Uma criatura dentro de 15 pés (4,5 metros) causa dano ao dragão rúnico\nEfeito Com uma explosão de magia rúnica, o dragão rúnico usa sua habilidade rúnica detonadora na criatura desencadeadora e imediatamente faz com que a runa detone se não o fizer automaticamente."
        },
        "Rj2vwCAvhtc4VbOw": {
          "name": "Runa Detonante",
          "description": "Os ataques e habilidades do dragão rúnico podem deixar uma runa detonante em seus alvos. Se uma criatura receberia uma runa detonante enquanto já possui uma, em vez de adicionar outra runa, sua runa detonante atual será ativada, causando 5d6[untyped] de dano ao alvo e gastando a runa. O tipo de dano da runa detonante corresponde à Runa de Mudança atual do dragão. Uma criatura pode usar uma ação de Interagir para remover a runa. Runas detonantes desaparecem após 1 minuto se não forem detonadas."
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
          "description": "O dragão rúnico cria uma grande runa de armadilha em @Template[type:burst|distance:10] dentro de 60 pés (18 metros). Uma criatura que não seja o dragão que entra em uma área presa ou termina seu turno na área presa ativa a runa, fazendo com que ela os enrede. Essa criatura deve ser bem sucedida em um teste de resistência (reflexo, dc:34) ou ficará Imobilizada por 1 minuto ou até escapar. A runa pode prender apenas uma criatura por vez. A runa desaparece quando uma criatura obtém sucesso contra a runa, quando uma criatura consegue escapar da runa ou após 1 minuto. Uma criatura adjacente à runa pode usar uma ação de Interagir para remover a runa."
        },
        "i7kuaOQCvKjQ623q": {
          "name": "Respiração Rúnica",
          "description": "O dragão lança centenas de runas explosivas que detonam com o impacto, causando 12d6[untyped|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (reflex, dc:34, basic, options:area-effect) save). O tipo de dano desta habilidade é determinado pela Shifting Rune. Criaturas que falham no salvamento também são afetadas pela runa detonante. O dragão não pode usar Sopro Rúnico novamente por [[/gmr 1d4 #Recharge Sopro Rúnico]]{1d4 rodadas}."
        },
        "aXvfwxeI9u0AxsD4": {
          "name": "Runas Mutáveis",
          "description": "O dragão rúnico escolhe entre ácido, frio, eletricidade, fogo ou dano sônico. As runas gravadas no dragão mudam, formando runas dessa energia em suas escamas. O dragão ganha imunidade a esse tipo de dano, e suas runas detonantes e Sopro Rúnico causam esse tipo de dano. Qualquer pessoa treinada em Arcana pode reconhecer imediatamente o tipo de energia da runa gravada sem teste."
        },
        "B3ruyvS6l8vioWPg": {
          "name": "Push 10 pés (3 metros) aprimorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7e0b1e0a09c34e5e8a7c1cf65971a8f856295754fdee9cef7f4d6d9c20d7d84b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Rúnico (Adulto, Feiticeiro)",
      "description": "Os dragões rúnicos têm uma visão inata sobre o poder das runas. A maioria dos dragões rúnicos mantém uma variedade de runas gravadas em suas escamas, que seus corpos podem fortalecer magicamente. Eles normalmente não lançam magias sozinhos, em vez disso, confiam em sua habilidade de criar runas instantaneamente para produzir os efeitos desejados. Um dragão rúnico geralmente se refere ao seu tesouro como sua biblioteca, pois está cheio de importantes textos históricos, peças, discursos, livros didáticos e livros de magias escritos por pessoas de diferentes culturas em uma variedade de idiomas. Embora muitas vezes possam falar uma língua com a ajuda da magia, eles preferem aprender línguas no contexto de seus falantes, para que possam compreender as nuances escondidas na sintaxe e na magia de seus símbolos.",
      "size": "Enorme",
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
          "damage": "3d6+14 cortante"
        },
        "vWI3q4eiStz5qqHx": {
          "name": "Maxilas",
          "damage": "3d8+14 perfurante"
        },
        "8A5XIY3Hlr1wxzJm": {
          "name": "Cauda",
          "damage": "3d10+14 contundente"
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
          "description": "Gatilho O dragão é alvo de um magia que requer um teste de resistência\nEfeito O dragão tenta desfazer as runas fundamentais do magia. Eles tentam neutralizar o magia (neutralizar Rank 7º, neutralizar modificador [[/r 1d20+26 #Counteract]]{+26}). Se tiver sucesso, o dragão não será afetado pelo magia; outros assuntos são afetados pela magia normalmente. O dragão não pode usar a Runa de Cancelamento novamente por [[/gmr 1d4 #Recharge Canceling Rune]]{1d4 rodadas}."
        },
        "L8w8yFgsSTRZPPKw": {
          "name": "Runa Retributiva",
          "description": "Gatilho Uma criatura dentro de 15 pés (4,5 metros) causa dano ao dragão rúnico\nEfeito Com uma explosão de magia rúnica, o dragão rúnico usa sua habilidade rúnica detonadora na criatura desencadeadora e imediatamente faz com que a runa detone se não o fizer automaticamente."
        },
        "Rj2vwCAvhtc4VbOw": {
          "name": "Runa Detonante",
          "description": "Os ataques e habilidades do dragão rúnico podem deixar uma runa detonante em seus alvos. Se uma criatura receberia uma runa detonante enquanto já possui uma, em vez de adicionar outra runa, sua runa detonante atual será ativada, causando 5d6[untyped] de dano ao alvo e gastando a runa. O tipo de dano da runa detonante corresponde à Runa de Mudança atual do dragão. Uma criatura pode usar uma ação de Interagir para remover a runa. Runas detonantes desaparecem após 1 minuto se não forem detonadas."
        },
        "DYsAQWK06hC13mD4": {
          "name": "Runa Enredadora",
          "description": "O dragão rúnico cria uma grande runa de armadilha em @Template[type:burst|distance:10] dentro de 60 pés (18 metros). Uma criatura que não seja o dragão que entra em uma área presa ou termina seu turno na área presa ativa a runa, fazendo com que ela os enrede. Essa criatura deve ser bem sucedida em um teste de resistência (reflexo, dc:34) ou ficará Imobilizada por 1 minuto ou até escapar. A runa pode prender apenas uma criatura por vez. A runa desaparece quando uma criatura obtém sucesso contra a runa, quando uma criatura consegue escapar da runa ou após 1 minuto. Uma criatura adjacente à runa pode usar uma ação de Interagir para remover a runa."
        },
        "i7kuaOQCvKjQ623q": {
          "name": "Respiração Rúnica",
          "description": "O dragão lança centenas de runas explosivas que detonam com o impacto, causando 12d6[untyped|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (reflex, dc:34, basic, options:area-effect) save). O tipo de dano desta habilidade é determinado pela Shifting Rune. Criaturas que falham no salvamento também são afetadas pela runa detonante. O dragão não pode usar Sopro Rúnico novamente por [[/gmr 1d4 #Recharge Sopro Rúnico]]{1d4 rodadas}."
        },
        "aXvfwxeI9u0AxsD4": {
          "name": "Runas Mutáveis",
          "description": "O dragão rúnico escolhe entre ácido, frio, eletricidade, fogo ou dano sônico. As runas gravadas no dragão mudam, formando runas dessa energia em suas escamas. O dragão ganha imunidade a esse tipo de dano, e suas runas detonantes e Sopro Rúnico causam esse tipo de dano. Qualquer pessoa treinada em Arcana pode reconhecer imediatamente o tipo de energia da runa gravada sem teste."
        },
        "B3ruyvS6l8vioWPg": {
          "name": "Push 10 pés (3 metros) aprimorado",
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
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:deep-one-elder",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:08054c8dff6e4299d7dfd3812410a0242355ef92ba180eeb8def5b1a3569a421",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ancião Profundo",
      "description": "Com tempo suficiente, os anciões profundos podem inchar a alturas vertiginosas.\nHumanóides pesados, anfíbios e imortais, conhecidos como profundos, habitam áreas costeiras e fossas oceânicas profundas por toda Golarion. Embora a maioria deseje simplesmente ser deixada em paz, outros trabalham incansavelmente para crescerem nas suas fileiras.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro",
        "wavesense-imprecise-120": "ondasense-impreciso-120"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum"
      },
      "defenses": {
        "immunities": [
          "frio"
        ],
        "resistances": [
          "ácido 10",
          "perfurando 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "Ua6j8fuuYgXoFaTn": {
          "name": "Pé",
          "damage": "3d12+15 contundente"
        },
        "RVOHvJxz5QoxtVBZ": {
          "name": "Garra",
          "damage": "3d10+12 cortante"
        }
      },
      "actions": {
        "lmdKMHrlULmNo7w5": {
          "name": "Pressurizado",
          "description": "Um profundo é imune a danos e outros efeitos negativos decorrentes de mudanças na pressão da água."
        },
        "1SYNnzqOXJOfOHIT": {
          "name": "Sem fim",
          "description": "Um profundo não envelhece e é imune a magias e outros efeitos que infligem envelhecimento mágico. A menos que seja morto, um profundo vive para sempre."
        },
        "i5MwYk1OaoGuW2Ti": {
          "name": "Presença assustadora",
          "description": "60 pés (18 metros). verificar (vontade, dc:31, opções:efeito de área,inflige:assustado,inflige:retardado).\nUma criatura que falhe no teste também sofre Lentidão 1 (Desaceleração 2 em caso de falha crítica)."
        },
        "arO5c9zJtlg4KtxD": {
          "name": "Espelho Mental",
          "description": "Os efeitos mentais que falham contra um ancião profundo são refletidos de volta à fonte, como magia Riposte."
        },
        "51NoqzOBQqQbqnnf": {
          "name": "Devastação",
          "description": "Um golpe profundo de garra de ancião ignora as primeiras 10 Durezas de um objeto. Além disso, em um acerto crítico, o alvo deve ter sucesso em um teste (fortitude, dc:34) ou ficará Atordoado 2."
        },
        "3mlouvFpFrvtLqJ1": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pa:31, básico)\nO mais profundo pode nadar para dobrar sua velocidade de natação em vez de caminhar."
        },
        "Ipe1qvzDL43R929K": {
          "name": "Vazio Aquoso",
          "description": "O ancião das profundezas faz um vazio infinito de água aparecer em @Template[type:burst|distance:20] dentro de 60 pés (18 metros), arrastando criaturas para dentro de seu redemoinho. Se lançado debaixo d'água, o vazio aquoso preenche um cilindro de 18 metros de altura com um raio de 6 metros. As criaturas na área quando o vazio aparece e as criaturas que terminam seu turno na área sofrem 3d8[concussão|opções:dano de área] de dano e 3d8[void|opções:dano de área] de dano e devem tentar um teste (reflexo, dc:31) de salvamento. O vazio permanece até o final do próximo turno do ancião das profundezas. O ancião das profundezas pode sustentar o vazio para estender a duração em 1 rodada, até um total de 4 rodadas, e pode mover o vazio até 15 pés (4,5 metros). Assim que o efeito terminar, o ancião não poderá usar o Vazio Aquático novamente por [[/gmr 1d4 #Recharge Vazio Aquático]]{1d4 rodadas}.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano e uma penalidade de circunstância de -1,5 metro em suas Velocidades enquanto estiver no vazio.\nFalha A criatura sofre dano total e uma penalidade de circunstância de –3 metros em suas Velocidades enquanto estiver no vazio.\nSucesso Crítico A criatura sofre o dobro de dano, é derrubada e sofre uma penalidade de circunstância de –3 metros em suas Velocidades enquanto estiver no vazio."
        },
        "13AbcXHDRAQnf6nJ": {
          "name": "Nocaute aprimorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ozthoom",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e856d2a69784e402fac2bf40b239ad8a869bd7ebfe5d3a55149e30e0c30b0764",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ozthoom",
      "description": "Ozthooms são assassinos sombrios que servem poderosas criaturas feéricas ou até mesmo os Anciões – os semideuses do Primeiro Mundo. Em meio às cortes dos Anciões ou de outros governantes feéricos poderosos, esses assassinos sinistros espreitam no alto enquanto aguardam o chamado à ação – ameaças implícitas semelhantes a armas mortais penduradas como decoração em um salão real. Ozthooms nunca falam em voz alta; quando sentem necessidade de se comunicar, o fazem em um sussurro telepático diretamente na mente da vítima. Embora o corpo de um ozthoom seja um material estranho e carnudo, suas garras mortais e cruéis asas em forma de gancho são feitas de ferro frio e afiado, uma qualidade que os torna altamente temidos entre outras fadas. Um ozthoom típico tem 10 pés (3 metros) de altura e envergadura de 2,5 metros, mas pesa menos de 36 quilos.\nEmbora a maioria dos ozthooms sirva a mestres poderosos, alguns desses feéricos assassinos foram deixados à própria sorte e não servem nada além de seus próprios caprichos caprichosos. Em alguns casos, seu mestre foi morto, enquanto em outros, o ozthoom foi dispensado do serviço por uma série de razões. Um ozthoom deixado para satisfazer seus desejos cruéis sem restrições é muitas vezes o ozthoom mais perigoso de todos.",
      "size": "Grande",
      "senses": {
        "lifesense-120": "sentido de vida-120",
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10"
        ]
      },
      "attacks": {
        "IvFL4oT7wjrxQZqw": {
          "name": "Garra",
          "damage": "3d6+15 cortante"
        },
        "JdsDXPVL1v4JEQt5": {
          "name": "Asa",
          "damage": "2d6+15 perfurante; 2d6 sangramento"
        }
      },
      "actions": {
        "EhHfFoSDrZtc8YUe": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "V8J7D9aK5N4MpaBI": {
          "name": "Lifesense 120 pés (36 metros)",
          "description": ""
        },
        "Q0VRtsqm6etoZxCa": {
          "name": "Duplas de sombra",
          "description": "1 a 3\nFrequência uma vez por dia\nEfeito Para cada ação gasta para usar esta habilidade, o ozthoom cria uma duplicata sombria em qualquer lugar dentro de 60 pés (18 metros) de si mesmo. Shadow Doubles têm as mesmas estatísticas de um ozthoom, mas possuem a característica de convocação, 85 pontos de vida, não podem usar Shadow Doubles ou magias inatos e têm um bônus de ataque de +25 para seus ataques. Um dublê de sombra que tenta um teste de resistência contra um efeito de luz não pode obter um resultado melhor do que falhar. Cada duplo permanece por 1 rodada, até ser reduzido a 0 Pontos de Vida ou até se mover além de 120 pés (36 metros) do ozthoom, o que ocorrer primeiro. A cada rodada seguinte, o ozthoom pode Sustentar o efeito para estender a duração das duplicatas sobreviventes em 1 rodada, até uma duração máxima de 1 minuto. O ozthoom pode ver através dos olhos de todas as sombras duplas de uma só vez. Um personagem que Procura pode identificar um ozthoom como real ou uma sombra dupla com um teste bem-sucedido (percepção, dc:39)."
        },
        "Bpm9xvzcp3dBpCvp": {
          "name": "Ataque furtivo",
          "description": "Os Golpes de um ozthoom causam 2d6 de dano de precisão adicional às criaturas Desprevenidas."
        }
      },
      "spellcasting": {
        "HvJ0Gsma4O9mDQsI": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "JpIRWxUhzaLmUrJD": {
              "name": "Enfraquecido"
            },
            "O5Ij8d1mSUkqQ6gY": {
              "name": "Silêncio"
            },
            "8BOoRnbMvYRNGJeJ": {
              "name": "Escuridão (à vontade)"
            },
            "SbZNwgpcBSVg8d88": {
              "name": "Amarração Planar"
            },
            "PV3rQarbdD0AnANG": {
              "name": "Visão Verdadeira"
            },
            "0NxbX8zzTkvb5t0p": {
              "name": "Explosão de Eclipse"
            },
            "DDIcAlh0TkbZiH7f": {
              "name": "Teleporte"
            },
            "73BfMFPp30HJBLnW": {
              "name": "Identificar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:graveknight-warmaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4c69b581090d5ae451327ba9ab5aa6efd8b3cf7338a308a4b4c6b740d9c05530",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mestre da Guerra Cavaleiro Túmulo",
      "description": "Exemplos de violência eterna, os cavaleiros-túmulos mestres da guerra são forças devastadoras no campo de batalha, capazes de estimular os aliados a níveis cada vez maiores de violência.\nQuando um combatente temível cai em batalha, o espírito vingativo do guerreiro às vezes pode se fundir com sua armadura, criando um cavaleiro grave.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "necril": "necril"
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
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "K0KuUYc812IQs2oq": {
          "name": "Mangual de Guerra",
          "damage": "3d10+14 contundente"
        },
        "pCNByflDUBdJvCMx": {
          "name": "Punho",
          "damage": "3d6+14 contundente"
        },
        "Im7BRSw3eD7Sor93": {
          "name": "Besta Pesada",
          "damage": "3d10+6 perfurante"
        }
      },
      "actions": {
        "pceHLuFhCPvyyluM": {
          "name": "Armadura Faminta",
          "description": "Uma criatura que Acerte um cavaleiro-túmulo mestre da guerra com uma arma corpo-a-corpo deve ter sucesso em um teste (reflexo, dc:31) de resistência ou será desarmada daquela arma. Se a criatura falhar criticamente, a arma vai parar no espaço do cavaleiro da tumba. Uma criatura que atingir um cavaleiro-túmulo mestre de guerra com um ataque desarmado deve ser bem sucedida em um teste (reflexo, dc:31) ou será Agarrada pelo cavaleiro-túmulo até o final de seu próximo turno, quando ela Escapa, ou quando o cavaleiro-túmulo se move, o que ocorrer primeiro."
        },
        "2534QJr1XwyuJh3b": {
          "name": "Ataque reativo",
          "description": ""
        },
        "hBKKh0aXKDQ7s4LO": {
          "name": "Rejuvenescimento",
          "description": "Quando um cavaleiro da tumba é destruído, sua armadura reconstrói seu corpo ao longo de [[/gmr 1d10 #days]]{1d10 dias} - ou mais rapidamente se a armadura for usada por um hospedeiro vivo. Se o corpo for destruído antes disso, o processo é reiniciado.\nUm cavaleiro da sepultura só pode ser destruído permanentemente destruindo sua armadura (como com Desintegrar), transportando-o para a Forja da Criação ou jogando-o no coração de um vulcão."
        },
        "b4ybXyF4hs8hpEyW": {
          "name": "Aura Sacrílega",
          "description": "30 pés (9 metros). Quando uma criatura na aura usa uma mágica ou habilidade de vitalidade, o cavaleiro do túmulo tenta neutralizá-la automaticamente, com um [[/r 1d20+23 #Counteract]]{+23 counteract modifier}."
        },
        "8bGiACtxTUu2ieCP": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "0X6EFCetuVxcbAhd": {
          "name": "Explosão Devastadora",
          "description": "O cavaleiro da tumba libera um @Template[cone|distance:30] de energia. Criaturas na área sofrem 8d12[eletricidade|opções:dano de área] de dano (teste de salvamento (reflexo, dc:34, básico, opções:efeito de área)).\nO cavaleiro da sepultura pode usar essa habilidade uma vez a cada [[/gmr 1d4 #Recharge Devastating Blast]]{1d4 rodadas}."
        },
        "su6h0RMy6XM7g663": {
          "name": "Exemplo de violência",
          "description": "Frequência uma vez por rodada\nEfeito O cavaleiro da sepultura tenta um ataque enquanto sua armadura brilha com um poder sinistro que incita os aliados à violência. Após o Ataque, os aliados que puderem ver o cavaleiro do túmulo poderão usar uma reação de Passo ou Passo, mas deverão finalizar esse movimento em um espaço adjacente a um inimigo. Em vez disso, um aliado à escolha do cavaleiro do túmulo pode usar uma reação ao Golpe."
        },
        "RaCHriqntJh3F0HE": {
          "name": "Maldição do Cavaleiro Túmulo",
          "description": "Esta maldição afeta qualquer um que use a armadura de um cavaleiro da tumba por pelo menos 1 hora.\nTeste de salvamento (vontade, dc:39)\nInício 1 hora\nEstágio 1 Condenado 1 e não é possível remover a armadura (1 dia)\nEstágio 2 Condenado 2, penalidade de status de –10 pés para Velocidades e não pode remover armadura (1 dia)\nO estágio 3 morre e se transforma no cavaleiro da armadura.\nEfeito: Maldição do Cavaleiro do Túmulo"
        },
        "mFicegxnkpUgVnEQ": {
          "name": "Montagem Fantasma",
          "description": "7ºQRANK; o corcel tem CA 34, Forte +23, Ref +20, Vontade +20 e 85 Pontos de Vida\nO cavaleiro da tumba invoca uma montaria sobrenatural, já que a Montaria Maravilhosa é aumentada para um Rank igual à metade do nível do cavaleiro da tumba.\nAo contrário da montaria maravilhosa, a CA do corcel e os bônus nos testes de resistência são todos 4 menores que os do cavaleiro do túmulo, e o corcel tem um terço dos Pontos de Vida do cavaleiro do túmulo (arredondado para baixo).\nSe o corcel for destruído, o cavaleiro do túmulo deverá esperar 1 hora antes de usar esta habilidade novamente."
        },
        "rH4SoGqzcBhzlX5w": {
          "name": "Armas Ruinosas",
          "description": "Qualquer arma ou ataque desarmado que o Cavaleiro do Túmulo usar ganha os efeitos das runas de arma +1 de golpe maior e Choque Maior."
        },
        "OvHCcDCBJf1wplxo": {
          "name": "Mestre de Armas",
          "description": "O cavaleiro da tumba tem acesso aos efeitos críticos de especialização de qualquer arma que empunhar."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cinder-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2b3853d423eb9c4f1b81c99f329d790ba976dcb6958c07997c91c045ee9f13c8",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Cinzento (Adulto, Feiticeiro)",
      "description": "Entre os maiores e mais ferozes dragões, os dragões de cinza são tipicamente voláteis, exigindo respeito – até mesmo deferência – de criaturas inferiores. A aparência dos dragões de cinza evoca sua chama, muitas vezes em escamas com padrões mistos de vermelho, laranja e amarelo. Muitos dragões de cinzas habitam vulcões ativos e locais igualmente ígneos. Dragões de cinzas preferem tesouros que possam suportar o calor de seus corpos e covis, com pedras preciosas, ouro e prata comuns entre seus tesouros.",
      "size": "Enorme",
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
          "frio 15"
        ]
      },
      "attacks": {
        "IrTg9nWwV4OiOQW8": {
          "name": "Maxilas",
          "damage": "1d8 fogo; 3d12+12 perfurante"
        },
        "yOmS98L3WqFRPhXZ": {
          "name": "Buzina",
          "damage": "3d12+16 perfurante"
        },
        "ZGe2glGQxF2jA1C2": {
          "name": "Garra",
          "damage": "3d10+12 cortante"
        },
        "nSwGIvjZwxGfs5ON": {
          "name": "Cauda",
          "damage": "3d12+12 contundente"
        },
        "Usl81LEUxCtzXkzk": {
          "name": "Asa",
          "damage": "3d8+12 cortante"
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
          "description": "Gatilho O dragão é atingido criticamente por um ataque corpo a corpo\nEfeito O sangue superaquecido do dragão derrama sobre o atacante. O alvo sofre 8d6[fogo] de dano (teste de resistência (reflexo, dc:34, básico))."
        },
        "doEsjKt3NJoLAD51": {
          "name": "Calor do Dragão",
          "description": "5 pés (1,5 metros). 3d6[fogo|opções:dano de área] de dano (verificação (reflexo, dc:30, básico, opções:efeito de área) salvamento)"
        },
        "FvCzcBVRvmZ11mTe": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:32, opções:efeito de área,inflige:assustado)"
        },
        "QWxMF0tTh2JjNiIy": {
          "name": "Ataque Reativo (somente Mandíbulas)",
          "description": ""
        },
        "NEGCX9pCG8gyZcjL": {
          "name": "Respiração da Pira",
          "description": "O dragão respira uma explosão de chamas que causa 13d6[fogo|opções:dano de área] de dano em um salvamento de @Template[type:cone|distance:50] (verificação (reflexo, dc:34, básico, opções:efeito de área)). Criaturas que falham criticamente em seu salvamento pegam fogo, sofrendo 2d6[persistente,fogo] de dano. A área então se enche de fumaça preta por 1 minuto. Isto tem efeitos de névoa, exceto que preenche a área do cone. O dragão não pode usar Sopro da Pira novamente por [[/gmr 1d4 #Recharge Sopro da Pira]]{1d4 rodadas}."
        },
        "jmrC9phVteComdYb": {
          "name": "Acenda as chamas",
          "description": "O dragão intensifica incêndios próximos. Cada inimigo dentro de 60 pés (18 metros) que esteja sofrendo dano de fogo persistente sofre 4d6[fogo] de dano."
        }
      },
      "spellcasting": {
        "4OnA40hMc7JonCfm": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "EaeWsm5Xx5yjwU0g": {
              "name": "Cozinha Limpa"
            },
            "rzk0O4YOx5yG7PQJ": {
              "name": "Detectar magia"
            },
            "aOSMn3CNLhZvEffG": {
              "name": "Temer"
            },
            "N54bk5qmZPjMT88i": {
              "name": "Ignição"
            },
            "3m83mMKEnDepiBqL": {
              "name": "Mensagem"
            },
            "54JX06Cv9CnFUmjg": {
              "name": "Leia aura"
            },
            "P0lYFrt8l4GjXXHV": {
              "name": "Sigilo"
            },
            "FtdXwaKUWlnfULhq": {
              "name": "Ventriloquismo"
            },
            "mBQPeeL3efrZEEBs": {
              "name": "Raio Flamejante"
            },
            "lop2plv1CXD66cEb": {
              "name": "Dissipar Magia"
            },
            "4dCYtZlLJN4UMtew": {
              "name": "Chama Flutuante"
            },
            "3ftYKVgRRzmXsaWr": {
              "name": "Névoa"
            },
            "jdpIoOqR07oxPcGu": {
              "name": "Revelando Luz"
            },
            "1oqwk0EDWzSkUW4U": {
              "name": "Bola de fogo"
            },
            "iLAFSrYR3Svsv64k": {
              "name": "Pressa"
            },
            "HrL1NFl17tIJ84X1": {
              "name": "Escudo de Fogo"
            },
            "jFdkNZTuKTzsTZ1B": {
              "name": "Resiliência da Montanha"
            },
            "eiG0dj4MbjTC72DU": {
              "name": "Muralha de Fogo"
            },
            "qf40q60NjSIbKM7Q": {
              "name": "Nuvem tóxica"
            },
            "jpZzRBWzLtsOPzJp": {
              "name": "Metamorfose Amaldiçoada"
            },
            "3uV46qqtji7sJkQ5": {
              "name": "Visão Verdadeira"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:doprillu",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:65e2d1032e2e98d0ccf184280fb867d808974e1b501f61e878f99018bd8133e3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Doprillu",
      "description": "As aberrações conhecidas como doprilus são corpos com músculos em faixas que usam máscaras ornamentadas o tempo todo que enchem seus usuários de força mágica e espírito de luta. Doprilus adora lutar, especialmente agarrar, e está ansioso para começar brigas. Em terreno neutro, um doprillu se oferece para duelar com o oponente que pareça mais forte, mas quando o território de um doprillu é invadido, nenhuma regra se aplica ao confronto. Como convém ao sangue superaquecido que os alimenta, os doprilus vivem em locais quentes: selvas quentes, desertos ensolarados e cavernas subterrâneas perto de fontes de enxofre.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "see-invisibility": "ver-invisibilidade"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "sakvroth": "sakvroth"
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "fogo 15"
        ],
        "weaknesses": []
      },
      "attacks": {
        "H7is94BX3CDB78hl": {
          "name": "Punho",
          "damage": "3d8+16 contundente; 2d6 fogo"
        },
        "6FQU9AiPzlr4Znu6": {
          "name": "Golpe Corporal",
          "damage": "3d8+16 contundente"
        }
      },
      "actions": {
        "1lSOq5grKxoZhTWw": {
          "name": "magias Constantes",
          "description": ""
        },
        "38cGo2E7vYZ2PNb5": {
          "name": "+2 de bônus de status para defesas contra medo",
          "description": ""
        },
        "AJ6r1HXEEIIyvlnh": {
          "name": "Regeneração 20 (desativada pelo frio)",
          "description": ""
        },
        "lWr6fzaJ1ya4uUVM": {
          "name": "Desviar Flecha",
          "description": "Gatilho O doprillu é alvo de um ataque físico à distância\nRequisitos O doprillu está ciente do ataque, não está desprevenido contra ele e tem a mão livre\nEfeito O doprillu ganha +4 de bônus de circunstância em sua CA contra o ataque desencadeador."
        },
        "gkiQGmXDkxDHGY7j": {
          "name": "Máscara do Poder",
          "description": "A máscara de madeira única de um doprillu é a fonte de seu poder.\nUm doprillu privado de sua máscara perde sua regeneração e sua imunidade a Enfraquecido e Lento, e imediatamente se torna Enfraquecido 1. O valor Enfraquecido aumenta em 1 no início de cada um dos turnos do doprillu, até um máximo de Enfraquecido 4. Se a máscara for colocada novamente, o doprillu imediatamente recupera suas habilidades e perde a condição Enfraquecido.\nUma criatura pode tirar a máscara com um teste bem-sucedido de Atletismo para [[/act force-open dc=34]]."
        },
        "BIIDNJTjlW3lJ1b2": {
          "name": "Veias Vulcânicas",
          "description": "Magma ardente corre pelas veias do doprillu. Uma criatura que começa seu turno Agarrada pelo doprillu sofre 7d6[fogo] de dano."
        },
        "XHAPOvUbe2eKOW7E": {
          "name": "Lançamento de redemoinho",
          "description": "Requisitos O doprillu tem uma criatura agarrada\nEfeito O doprillu gira a criatura agarrada, desferindo um Golpe Corporal contra cada criatura ao alcance. Após esse Golpe, o doprillu pode arremessar a criatura agarrada até 50 pés (15 metros) como um Golpe de longo alcance. Este Golpe tem o mesmo modificador de ataque e dano do Golpe Corporal, mas possui a característica de arma lançada 20 pés (6 metros)."
        },
        "ztFSGslDa3U5UhaP": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "Z487oTtboxJKexiF": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "5u6wc1mpLV2mconA": {
              "name": "Veja o Invisível (Constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ravener-husk",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:041b377fb65af0c603f3d6939a045bf1fc2f44ecc373524a8305728103310c8c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Casca Ravener",
      "description": "Raveners exigem uma dieta constante de almas, e um Ravener que não consegue se alimentar por muito tempo eventualmente canibaliza sua própria alma. Se a proteção da alma de um corvo for reduzida a 0 Pontos de Vida pela fome enquanto o corvo tiver mais de 1 Ponto de Vida (veja Proteção da Alma), ele perderá todos os traços de sua identidade anterior (perdendo a maioria de suas características únicas, incluindo aquela que corresponde à sua tradição anterior) e cairá em um estado selvagem, quase estúpido. Mesmo que uma casca ravener consuma mais tarde a energia da alma, a transformação só pode ser revertida através do Ravenous Repast.\nEmbora sua expectativa de vida possa durar milênios, todos os dragões acabarão morrendo. Enquanto muitos fazem isso nas lâminas ou sob os magias dos matadores de dragões, alguns conseguem sobreviver aos seus inimigos e devem, com o tempo, enfrentar a verdade que aguarda todas as criaturas vivas no final de sua vida natural. Tal como acontece com muitas outras criaturas, alguns dragões respondem mal a esses lembretes iminentes de sua própria mortalidade, e os particularmente orgulhosos ou coléricos de sua espécie muitas vezes atacam com raiva quando confrontados por esta verdade sombria. Paz e aceitação são encontradas por alguns dragões, mas os mais teimosos de sua laia (e invariavelmente os mais perversos) podem buscar uma resposta diferente para o problema. Esses dragões procuram ritos sinistros que podem transformá-los em criaturas mortas-vivas conhecidas como raveners.\nA carne de um Ravener é arrancada como parte da transformação, deixando apenas ossos. O que eles perdem em carne, no entanto, o dragão ganha em poder destruidor de almas, pois sua energia espiritual forma uma barreira protetora ao redor de seu corpo, mantendo-o intacto e permitindo o voo com asas agora esqueléticas. Esta existência não é tão fácil de manter como outras formas de mortos-vivos, entretanto, e o ravener deve se alimentar regularmente de almas vivas para alimentar seu metabolismo profano. Sua fome é muito maior do que a de um dragão vivo, então os vorazes são forçados a se mudar regularmente, viajando para novos locais de caça cada vez que despojam suas presas atuais.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 10"
        ]
      },
      "attacks": {
        "slQdTIDvNb3mYmFw": {
          "name": "Garra",
          "damage": "3d4+16 cortante; 2d6 vazio"
        },
        "36mJMSBwP3zW90kW": {
          "name": "Maxilas",
          "damage": "3d8+16 perfurante; 2d6 vazio"
        }
      },
      "actions": {
        "4Py4SYUJRaIMdE82": {
          "name": "Soulsense 60 pés (18 metros)",
          "description": "Um corvo sente a essência espiritual de criaturas vivas e mortas-vivas dentro do alcance listado. Criaturas cujos corpos materiais são uma unidade com suas almas, como celestiais e demônios, parecem mais brilhantes neste sentido."
        },
        "kjHM3QE53i7n2ugL": {
          "name": "Quebra-ossos",
          "description": "Gatilho A casca do corvo sofre qualquer quantidade de dano de concussão\nEfeito Os ossos frágeis do corvo se quebram, espalhando fragmentos de ossos por toda parte. Cada criatura dentro de um @Template[type:emanation|distance:10] da casca do corvo sofre 7d6[piercing|options:area-damage] de dano (teste (reflexo, dc:31, básico, opções:efeito de área) salvamento)."
        },
        "IDZbfadO7y3spY2a": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:31, opções:efeito de área,inflige:assustado)"
        },
        "5VrUpJgTaaZOWZ2g": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "LPztrtzNJXdQVZfW": {
          "name": "Repasto Voraz",
          "description": "Frequência uma vez por dia\nEfeito A casca do corvo faz um Golpe de mandíbula contra uma criatura falecida que não está morta há mais de 1 minuto, é sagrada e tem pelo menos nível 15 em vida. O Ravener tenta um xeque (flat, dc:5); se tiver sucesso, eles se transformam novamente em um corvo com 1 Ponto de Vida em sua proteção de almas."
        },
        "ORWYWlftRX4LQoyt": {
          "name": "Respiração Vazia",
          "description": "A casca do corvo respira uma torrente de energia do vazio que causa 16d6[void|options:area-damage] de dano em um @Template[type:cone|distance:40] (check (reflex, dc:34, basic, options:area-effect) save). Eles não podem usar Void Breath novamente por [[/gmr 1d4 #Recharge Void Breath]]{1d4 rounds}."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cinder-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:38748149bb70994e8f95cf6f472c0c55029fd4b754492dce679694514e5d873e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão de Cinzas (Adulto)",
      "description": "Entre os maiores e mais ferozes dragões, os dragões de cinza são tipicamente voláteis, exigindo respeito – até mesmo deferência – de criaturas inferiores. A aparência dos dragões de cinza evoca sua chama, muitas vezes em escamas com padrões mistos de vermelho, laranja e amarelo. Muitos dragões de cinzas habitam vulcões ativos e locais igualmente ígneos. Dragões de cinzas preferem tesouros que possam suportar o calor de seus corpos e covis, com pedras preciosas, ouro e prata comuns entre seus tesouros.",
      "size": "Enorme",
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
          "frio 15"
        ]
      },
      "attacks": {
        "IrTg9nWwV4OiOQW8": {
          "name": "Maxilas",
          "damage": "1d8 fogo; 3d12+12 perfurante"
        },
        "yOmS98L3WqFRPhXZ": {
          "name": "Buzina",
          "damage": "3d12+16 perfurante"
        },
        "ZGe2glGQxF2jA1C2": {
          "name": "Garra",
          "damage": "3d10+12 cortante"
        },
        "nSwGIvjZwxGfs5ON": {
          "name": "Cauda",
          "damage": "3d12+12 contundente"
        },
        "Usl81LEUxCtzXkzk": {
          "name": "Asa",
          "damage": "3d8+12 cortante"
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
          "description": "Gatilho O dragão é atingido criticamente por um ataque corpo a corpo\nEfeito O sangue superaquecido do dragão derrama sobre o atacante. O alvo sofre 8d6[fogo] de dano (teste de resistência (reflexo, dc:34, básico))."
        },
        "doEsjKt3NJoLAD51": {
          "name": "Calor do Dragão",
          "description": "5 pés (1,5 metros). 3d6[fogo|opções:dano de área] de dano (verificação (reflexo, dc:30, básico, opções:efeito de área) salvamento)"
        },
        "FvCzcBVRvmZ11mTe": {
          "name": "Presença assustadora",
          "description": "90 pés (27 metros). verificar (vontade, dc:32, opções:efeito de área,inflige:assustado)"
        },
        "QWxMF0tTh2JjNiIy": {
          "name": "Ataque Reativo (somente Mandíbulas)",
          "description": ""
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
          "description": "O dragão respira uma explosão de chamas que causa 13d6[fogo|opções:dano de área] de dano em um salvamento de @Template[type:cone|distance:50] (verificação (reflexo, dc:34, básico, opções:efeito de área)). Criaturas que falham criticamente em seu salvamento pegam fogo, sofrendo 2d6[persistente,fogo] de dano. A área então se enche de fumaça preta por 1 minuto. Isto tem efeitos de névoa, exceto que preenche a área do cone. O dragão não pode usar Sopro da Pira novamente por [[/gmr 1d4 #Recharge Sopro da Pira]]{1d4 rodadas}."
        },
        "jmrC9phVteComdYb": {
          "name": "Acenda as chamas",
          "description": "O dragão intensifica incêndios próximos. Cada inimigo dentro de 60 pés (18 metros) que esteja sofrendo dano de fogo persistente sofre 4d6[fogo] de dano."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ozthoom-shadow-double",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:94d712b70554dea05e9ce5170017e7bd7463a661aa01cebb5dc280c461ca10a4",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ozthoom Sombra Dupla",
      "description": "Ozthooms são assassinos sombrios que servem poderosas criaturas feéricas ou até mesmo os Anciões – os semideuses do Primeiro Mundo. Em meio às cortes dos Anciões ou de outros governantes feéricos poderosos, esses assassinos sinistros espreitam no alto enquanto aguardam o chamado à ação – ameaças implícitas semelhantes a armas mortais penduradas como decoração em um salão real. Ozthooms nunca falam em voz alta; quando sentem necessidade de se comunicar, o fazem em um sussurro telepático diretamente na mente da vítima. Embora o corpo de um ozthoom seja um material estranho e carnudo, suas garras mortais e cruéis asas em forma de gancho são feitas de ferro frio e afiado, uma qualidade que os torna altamente temidos entre outras fadas. Um ozthoom típico tem 10 pés (3 metros) de altura e envergadura de 2,5 metros, mas pesa menos de 36 quilos.\nEmbora a maioria dos ozthooms sirva a mestres poderosos, alguns desses feéricos assassinos foram deixados à própria sorte e não servem nada além de seus próprios caprichos caprichosos. Em alguns casos, seu mestre foi morto, enquanto em outros, o ozthoom foi dispensado do serviço por uma série de razões. Um ozthoom deixado para satisfazer seus desejos cruéis sem restrições é muitas vezes o ozthoom mais perigoso de todos.",
      "size": "Grande",
      "senses": {
        "lifesense-120": "sentido de vida-120",
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10"
        ]
      },
      "attacks": {
        "IvFL4oT7wjrxQZqw": {
          "name": "Garra",
          "damage": "3d6+15 cortante"
        },
        "JdsDXPVL1v4JEQt5": {
          "name": "Asa",
          "damage": "2d6+15 perfurante; 2d6 sangramento"
        }
      },
      "actions": {
        "93Ocuz3j9ZTv7rCL": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "V8J7D9aK5N4MpaBI": {
          "name": "Lifesense 120 pés (36 metros)",
          "description": ""
        },
        "B0KFQ4clYDAjh7I8": {
          "name": "Salvando testes contra efeitos de luz",
          "description": "Um dublê de sombra que tenta um teste de resistência contra um efeito de luz não pode obter um resultado melhor do que falhar."
        },
        "Bpm9xvzcp3dBpCvp": {
          "name": "Ataque furtivo",
          "description": "Os ataques de um duplo sombrio ozthoom causam 2d6 de dano de precisão adicional às criaturas fora de guarda."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sepid",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:af72c47bb71ce88808d723914997d832a74c4bd06d6b7ed81c3c9a31ceaedc59",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sépido",
      "description": "Sepids são os brutais senhores da guerra dos divs, deliciando-se com a violência contra os mortais e com seu próprio sabor particular de vingança. Mentirosos inveterados, os sépidos não conseguem evitar de jorrar as mentiras mais ultrajantes, e sua forma e natureza representam o poder das falsidades de se transformarem em uma bola de neve que pode custar inúmeras vidas. Entre os mortais, eles reúnem tropas para incitar rebeliões, guerras e outras formas de carnificina, saboreando os mortais que massacram uns aos outros. Esses seres gigantes geralmente têm cerca de 13 pés (3,9 metros) de altura; eles percorrem os campos de batalha em busca de heróis e generais, regozijando-se loucamente enquanto derrotam seus inimigos.\nAlguns demônios querem destruir o multiverso; outros se dedicam a criar caos e carnificina ou a governar reinos com mão de ferro. Os Divs se esforçam por um objetivo diferente, embora igualmente repreensível: eles procuram frustrar e arruinar os esquemas e obras dos seres mortais.\nHá muito tempo atrás, os divs já foram gênios destinados a servir antigos impérios mortais perdidos ao longo das eras. No início, esses gênios eram mestres da criação, trabalhando ao lado de graciosos parceiros mortais para criar obras de design sutil e poderoso potencial mágico. O que começou como uma colaboração com mortais logo se transformou em abuso, desrespeito e até mesmo escravidão e servidão. Eventualmente, esses gênios se rebelaram, mas ao fazê-lo, ficaram sob o domínio de um semideus niilista conhecido como Ahriman. Seu novo mestre distorceu sua forma e concedeu-lhes o poder de se vingarem de seus senhores mortais, levando ao nascimento dos primeiros divs.\nDesde aquela primeira onda de corrupção, novos divs surgem dos espíritos dos gênios mais perversos e odiosos que morrem no Plano Material, ou daqueles verdadeiramente traídos pelos mortais e vencidos pelo desejo de vingança. Após tal morte, em vez de retornar aos Planos Elementais, os espíritos desses gênios ficam presos na terrível órbita de Abaddon, onde Ahriman os transforma em divs e os eleva de volta ao mundo para se vingar dos mortais.",
      "size": "Grande",
      "senses": {
        "greater-darkvision": "visão no escuro maior"
      },
      "languages": {
        "common": "comum",
        "daemonic": "demoníaco"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10",
          "santo 10"
        ]
      },
      "attacks": {
        "8n2FSC3RM16gF3r7": {
          "name": "Cimitarra",
          "damage": "2d10+16 cortante; 1d6 mental"
        },
        "qQZbVChzEGjI5sIk": {
          "name": "Garra",
          "damage": "3d6+16 cortante; 1d6 mental"
        }
      },
      "actions": {
        "RxVHmIYJh9eOX9c3": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "kKGK6oglR2eQwLUM": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "rYBfhejHUk9mGJyA": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "o9sNXlscXUyhKlOK": {
          "name": "Mentiroso descarado",
          "description": "Embora todos os divs gostem de mentir, os sépides são mentirosos compulsivos e previsíveis que sempre fazem o oposto do que afirmam que farão. Se um sepid for forçado ou compelido a dizer a verdade, ele sofrerá 4d8 de dano [mental]."
        },
        "wuWal4gyvorVZotg": {
          "name": "Desviando a Mentira",
          "description": "Gatilho Uma criatura atinge o sepid com um ataque à distância ou uma jogada de ataque com magia à distância\nEfeito A sepid reside na tentativa de desviar o ataque. Eles fazem um teste (engano, contra:percepção) contra a CD de Percepção da criatura desencadeadora. Em caso de sucesso, se a jogada de ataque desencadeante for um sucesso, ela se tornará um fracasso, e se a jogada de ataque desencadeante for um acerto crítico, ela se tornará um sucesso normal."
        },
        "oxSSFhQLfQJktLoR": {
          "name": "Ataque reativo",
          "description": "Um sepid ganha uma reação extra a cada rodada, que só pode ser usada para realizar um Ataque Reativo."
        },
        "WYWDDEYazjVp60qA": {
          "name": "Chuva de detritos",
          "description": "O sepid invoca uma chuva de pedra, madeira, metal e detritos semelhantes em um @Template[emanation|distance:40], causando 10d6[concussão,5d6[espírito]|options:area-damage]{10d6 de dano de concussão e 5d6 de dano espiritual}. Cada criatura na área que não seja o sepid deve tentar um teste de resistência (reflexo, dc:31, básico, opções:efeito de área).\nO sepid não pode usar Chuva de Detritos novamente por [[/gmr 1d4 #Recharge Chuva de Detritos]]{1d4 rodadas}."
        }
      },
      "spellcasting": {
        "cE6juVvy0O4iJMgY": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "1hhaa0IRcthdKfJP": {
              "name": "Detectar magia"
            },
            "kIfdLdjbTbTKS03H": {
              "name": "Traduzir (à vontade; somente para você)"
            },
            "zVHM5ms0PMEfCJcT": {
              "name": "Escuridão (à vontade)"
            },
            "YQu4VXkaSKSLdAPU": {
              "name": "Voar"
            },
            "Xco2zlLptJvbWtBI": {
              "name": "Translocar (à vontade)"
            },
            "pWDAWuCRJwMn7lPy": {
              "name": "Dissipar Magia"
            },
            "rlKvuY2DemD12y1Z": {
              "name": "Paralisar"
            },
            "tqRZXY6ERk4h1lPa": {
              "name": "Véu de Privacidade (à vontade; apenas para si)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:lampad-queen",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1b67284ed723b57490031add20b495e20019f11279edf3df64979ce8b921f230",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Rainha Lampada",
      "description": "As rainhas Lampad são monarcas caprichosas e protetoras de vastos domínios subterrâneos, consideradas em baladas e contos como aliadas e inimigas, monstros e musas. As rainhas Lampad têm uma animosidade particular pelos muitos ancestrais subterrâneos predominantemente malignos, como os drow e os duergar, e gostam particularmente de morcegos. Muitas rainhas lampad têm nykteras como atendentes favoritas.\nAs ninfas são fadas guardiãs da natureza possuidoras de grande beleza e formas que fundem características humanóides de tirar o fôlego com os elementos naturais que protegem. As rainhas ninfas são ninfas poderosas que governam e protegem um território muito maior de natureza selvagem intocada. Por exemplo, um lampad pode proteger uma bela caverna subterrânea, mas uma rainha lampad pode chamar de domínio um sistema inteiro de cavernas.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "fey": "feérico",
        "petran": "petran",
        "sakvroth": "sakvroth"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 10"
        ]
      },
      "attacks": {
        "q9cxVnhnmsCNsS4G": {
          "name": "Punho Terrestre",
          "damage": "3d10+9 contundente; 1d6 mental"
        },
        "AirzEgJQdbzrmlyJ": {
          "name": "Fio de luz",
          "damage": "2d8+9 mental; 2d6 fogo; 2d6 vitalidade"
        }
      },
      "actions": {
        "sl07Not81gCCYcg7": {
          "name": "Empatia da Caverna",
          "description": "A rainha lampad pode usar a Diplomacia para causar uma impressão e fazer pedidos muito simples de animais, plantas e fungos subterrâneos, bem como de pedras."
        },
        "0AymbzLegfs9ibC8": {
          "name": "Amarrado à Terra",
          "description": "Uma rainha lampad está intrinsecamente ligada a uma região subterrânea específica, geralmente um sistema de cavernas. Contanto que a rainha esteja saudável, o ambiente é excepcionalmente resiliente, permitindo que a rainha lampad tente automaticamente neutralizar magias e rituais como Blight que prejudicariam o ambiente, com um modificador de neutralização [[/r 1d20+30 #Counteract]]{+30} e um Rank de neutralização de 8.\nEntretanto, quando a rainha lampad se torna fisicamente ou psicologicamente insalubre, sua região protegida eventualmente se torna distorcida ou insalubre também. Nesse caso, restaurar a rainha lampad cura rapidamente toda a região."
        },
        "3VJSS90TtdqUONTz": {
          "name": "magias Constantes",
          "description": ""
        },
        "gaAm3rT0oo2DoWFh": {
          "name": "A beleza da ninfa",
          "description": "30 pés (9 metros). Criaturas que iniciam seu turno na aura devem ter sucesso em um teste (vontade, dc:33, opções:efeito de área,infligir:confundir) salvar ou ficarão Confusas com a beleza sobrenatural da rainha lampad por 1 minuto. Embora confusa por este efeito, as ações confusas da criatura nunca incluem ferir a rainha lampad."
        },
        "pj0FI4XEhBPiuOmy": {
          "name": "Alterar forma",
          "description": "As rainhas Lampad podem se transformar entre sua forma original, que se parece muito com uma ninfa típica de sua espécie, e qualquer forma humanóide Pequena ou Média, normalmente escolhendo uma versão de sua forma natural que mais se assemelhe a um humanóide."
        },
        "IPI8W2nuWEsuk2ti": {
          "name": "Choro desesperado",
          "description": "Frequência uma vez por rodada\nEfeito A rainha lampad começa um ataque de choro de partir o coração, inspirando soluços solidários nas criaturas próximas. Cada criatura não-lampad dentro de @Template[emanation|distance:120]{120 pés (36 metros)} que ouvir o choro do lampad deve ter sucesso em um teste (vontade, dc:36) de resistência com os efeitos de Onda de Desespero."
        },
        "8isKGe0HwKWmQDEg": {
          "name": "Foco Beleza",
          "description": "A rainha lampad concentra sua beleza em um alvo dentro de sua aura. A criatura deve tentar um teste de resistência (vontade, dc:33). Em caso de falha, ele é afetado como se fosse pela aura de beleza da ninfa da rainha; se já foi afetado pela aura, as emoções conflitantes da beleza da rainha lampad se intensificam, fazendo com que o alvo não receba mais um teste simples para acabar com a confusão quando sofrer dano. A rainha lampad pode usar uma única ação, que tem o traço concentração, para concentrar as emoções de uma criatura Confusa em uma emoção específica, fazendo com que ela passe seu próximo turno soluçando incontrolavelmente, bajulando a rainha lampad ou de outra forma não realizando nenhuma ação além de experimentar suas emoções. Independentemente do salvamento, o alvo fica temporariamente imune ao Focus Beauty até o início do próximo turno da rainha lampad."
        },
        "BW9Qv2EOWjmgeEgL": {
          "name": "Inspiração",
          "description": "Uma rainha lampad pode inspirar uma única criatura inteligente dando a essa criatura um sinal de seu favor, normalmente uma mecha de seu cabelo. Contanto que a criatura carregue a ficha e permaneça em situação regular com a rainha lampad, a criatura ganha um bônus de status de +1 em todos os testes de Artesanato, testes de Desempenho e salvamentos de Vontade.\nSe uma rainha lampad conceder sua Inspiração a um bardo e ela for a musa desse bardo, o bardo ganha um benefício adicional dependendo do tema de sua musa: para a musa do conhecimento, o bardo também ganha um bônus de status de +1 em todos os testes de Conhecimento; para o maestro muse, o bônus de status nos testes de Performance aumenta para +2 com o propósito de determinar os efeitos das composições; para a musa polímata, o bardo ganha +4 de bônus de status em testes de perícia não treinados; e para todas as outras musas, o bônus de resistência de Vontade aumenta para +2 contra fadas.\nEfeito: Inspiração da Rainha Ninfa"
        }
      },
      "spellcasting": {
        "KpWuD5FV2RQBjAeo": {
          "name": "magias Primordiais Preparados",
          "category": "preparado",
          "spells": {
            "GJFQU3xFDVGxbgLn": {
              "name": "Transporte de formigas"
            },
            "D8B5MYkBWZVlO0Np": {
              "name": "Detectar magia"
            },
            "UyxpnZHXQHMKTFXA": {
              "name": "Arco Elétrico"
            },
            "CJ1958TgvLZmcu1X": {
              "name": "Etapa da Frota"
            },
            "vdR5aZKtzugTNIBG": {
              "name": "Orientação"
            },
            "aVYWMAuDcDWMhnjw": {
              "name": "Rajada de Vento"
            },
            "23muvO92ZQx15bEj": {
              "name": "Prestidigitação"
            },
            "hddhfjC4Qf9lwQw9": {
              "name": "Estabilizar"
            },
            "Kuk31ZqZGqfe3MIi": {
              "name": "Invocar planta ou fungo"
            },
            "rMkK2Qu4ZjO5pT60": {
              "name": "Mensageiro Animal"
            },
            "o58y4n5BkqYX3vsF": {
              "name": "Ampliar"
            },
            "96NC51iGZfLrCJfb": {
              "name": "Resistir à Energia"
            },
            "3tdRA66l06nt8fhK": {
              "name": "Revelando Luz"
            },
            "FFjyQnxWGrD3Mkaf": {
              "name": "Ligação à Terra"
            },
            "gs3qzioaeYjM15tw": {
              "name": "Pressa"
            },
            "vbJNuVYCeJUxyVFe": {
              "name": "Lento"
            },
            "nrQICRHFjTLEnIkC": {
              "name": "Voar"
            },
            "2dFhSrlrf4lVgnz5": {
              "name": "Resiliência da Montanha"
            },
            "b8dZoK3h4AiLxZd3": {
              "name": "Movimento desenfreado"
            },
            "tuIGVvdah9LC4K9e": {
              "name": "Espigão Empalador"
            },
            "EiUJPRbWZHIZ6e5l": {
              "name": "Passagem Mágica"
            },
            "LRMqMxR8LnR5UimK": {
              "name": "Muro de Pedra"
            },
            "Ob0utRoGRGDQZMPt": {
              "name": "Petrificar"
            },
            "oaLMis4U2OFcJmPk": {
              "name": "Égide Energética"
            },
            "shHseqaWUQblJtJs": {
              "name": "Regenerado"
            },
            "XzcFW4YKtNIxpreO": {
              "name": "Erupção Vulcânica"
            },
            "akUZpLAUVthBldoi": {
              "name": "Terremoto"
            }
          }
        },
        "CCUY44whvoSSEz3I": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "UZXhGsgCA6bdIk5w": {
              "name": "Luz"
            },
            "qIe4nE8u5mhISWWp": {
              "name": "Revelando Luz"
            },
            "4PKBv0qzCeJOWXiJ": {
              "name": "Um com pedra (à vontade)"
            },
            "UZdxaESKP3GG9spf": {
              "name": "Pedra Forma"
            },
            "Jbw1r52sJfMTUzOR": {
              "name": "Curar"
            },
            "JH1tlygGM0Cnp0Mu": {
              "name": "Esmurrando Escombros"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:okenevem",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9aa4199c188bf70cd22ec0acdb17af73f524215ca1aff420da2446f6663746a3",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Okenevem",
      "description": "Os arcontes mais poderosos residem em Iudica, o sexto nível da montanha sagrada do Céu. Okenevems vive entre eles. Os Okenevems evoluíram de zoaems inferiores para sua forma atual, mas possuem ainda mais potencial – a graça de passar para o Jardim no pináculo do Céu. No entanto, esses arcontes optam por não fazê-lo, prostrando-se em seus portões, em paz e nunca entrando. Acima de tudo, humildes e despretensiosos, curvam-se diante da grandeza do Céu e se põem a trabalhar de outras maneiras.\nOkenevems raramente viajam para longe do Céu, a menos que sejam encarregados de uma ação específica pelas divindades daquele plano. A maioria dessas missões exige que os okenevems tragam humildade aos sacerdotes que pressionam contra a vontade das divindades, desafiam a ordem do céu ou se consideram de igual poder ao seu deus. Eles procuram afastar estes sacerdotes dos perigos de tal arrogância, muitas vezes através do exemplo.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
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
          "profano 10"
        ]
      },
      "attacks": {
        "Z6ar1hyFXBs1uoX6": {
          "name": "Toque humilhante",
          "damage": "4d6 espiritual; 4d8 mental"
        },
        "nbcQOcfFJmlrHafj": {
          "name": "Palavra humilhante",
          "damage": "4d8 mental; 4d6 espiritual"
        }
      },
      "actions": {
        "c6DJrkDK1RQsPoee": {
          "name": "Visão Geral",
          "description": ""
        },
        "zKAviKDUdGihu01w": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "tnVnHfQjqXFn3YzS": {
          "name": "Proteção do Arconte",
          "description": "Acionamento Um inimigo causa dano ao aliado do arconte e ambos estão dentro de 15 pés (4,5 metros) do arconte\nEfeito O aliado ganha resistência 15 a todos os danos contra o dano desencadeador, e o arconte pode desferir um Golpe contra o inimigo.\nEfeito: Proteção do Arconte"
        },
        "wzdLkbcvN2ipIFjM": {
          "name": "Defensores Divinos",
          "description": "60 pés (18 metros). Okenevem ocupa um lugar exaltado entre os arcontes por sua posição sagrada. Isto atrai arcontes menores para defendê-los. Quando um inimigo na aura realiza uma ação hostil contra o okenevem, uma nuvem de arcontes menores se aglomera ao seu redor, fazendo com que ele sofra 2d6[persistente,cortante,2d6[persistente,espírito]]{2d6 de dano cortante persistente e 2d6 de dano espiritual persistente}. Este dano persistente termina automaticamente se o inimigo passar uma rodada sem realizar uma ação hostil contra o okenevem."
        },
        "xmrdbpY2poJ6tKyX": {
          "name": "Arco humilde",
          "description": "Uma criatura atingida por um dos Golpes do okenevem é obrigada a se curvar em reverência. Ele deve ter sucesso em um teste (vontade, dc:36, opções:inflige:pronado) para salvar ou cairá Pronado. Se a criatura Permanecer antes do final do próximo turno, ela sofrerá 3d8[mental] de dano. Se a criatura tiver sucesso, ela fica temporariamente imune por 1 minuto."
        },
        "90Xboorkv7WSNSE9": {
          "name": "Visão Sublime",
          "description": "Frequência uma vez por dia\nEfeito O okenevem lança o magia Presença Esmagadora, exceto que em vez de se engrandecer, o okenevem invoca uma visão do Céu dentro de 100 pés (30 metros), e o alvo deve humilhar-se em autorreflexão em vez de prestar tributo."
        }
      },
      "spellcasting": {
        "XOMgTZMqjFwj8ejI": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "TlX8ZZA6dohIHxqQ": {
              "name": "Lança Divina"
            },
            "0GfVzOg62Yq6Y5dB": {
              "name": "Luz"
            },
            "L4hQqnXlyCNJAMPj": {
              "name": "Mensagem"
            },
            "9WOQSMpYJllNmloG": {
              "name": "Translocar (à vontade)"
            },
            "0b7fssdaZW55rdRQ": {
              "name": "Truespeech (constante)"
            },
            "0EUykzSezjMGZxGN": {
              "name": "Guardião Espiritual"
            },
            "FntrrdjWXknkHoue": {
              "name": "Calma"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:jotund-troll",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:52a0730eef54763e0476cbf5e4515bb591ae4ecebdf439657f1915d18c03b3b0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Troll Jotund",
      "description": "Os trolls Jotund são horrores gigantescos de nove cabeças que rondam charnecas geladas, pântanos e terrenos baldios, muitas vezes sozinhos e sempre famintos. Embora cada uma das nove cabeças do troll jotund possua seus próprios cérebros e sentidos, eles brigam entre si muito menos do que as cabeças de um troll de duas cabeças. Mesmo assim, os chefes ainda discutem, principalmente sobre qual deles vai comer. O fato de todas as nove mandíbulas levarem ao mesmo estômago compartilhado faz pouca diferença nessas divergências culinárias. Muitos estudiosos repetem a história de que os trolls jotund se assemelham aos primeiros trolls, titãs expulsos do Elísio e amaldiçoados por seus crimes contra os deuses. Os próprios trolls jotund não reivindicam tal herança, entretanto, e aqueles preocupados com tais assuntos afirmam que o pai de todos os trolls surgiu nas Fendas Exteriores. Trolls jotund individuais começam suas vidas como trolls comuns ou, muito mais raramente, nascem de pais trolls jotund. Para os trolls jotund, suas nove cabeças são uma coroa de governo que os marca como estando acima da ordem natural e livres de suas leis.\nBrutos imponentes com mandíbulas salivantes e garras afiadas, os trolls são predadores vorazes. A conexão com a terra não apenas reconstrói seus corpos, mas também cria inúmeras variedades de trolls, cada um refletindo o terreno em que se baseiam. Trolls que migram para novas áreas se transformam lentamente à medida que cada parte do corpo é regenerada, levando a um crescimento aberrante à medida que a nova carne se emaranha com a antiga.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "eletricidade 15",
          "fogo 15"
        ]
      },
      "attacks": {
        "KGSAOEaIJhASbxs5": {
          "name": "Maxilas",
          "damage": "3d12+14 perfurante"
        },
        "Jaiar1IfkM01YTnL": {
          "name": "Garra",
          "damage": "3d10+14 cortante"
        }
      },
      "actions": {
        "eEHtNtcM7xGZHJZI": {
          "name": "Visão Geral",
          "description": ""
        },
        "jqsf1a89IlYcpeyG": {
          "name": "Regeneração 40 (Desativada por Eletricidade ou Fogo)",
          "description": ""
        },
        "MaLjJpHkVF7W2j2q": {
          "name": "Rugido Furioso",
          "description": "Gatilho O troll jotund sofre dano de eletricidade ou fogo\nEfeito O troll jotund usa seu Rugido Cacofônico e, se estiver ciente da origem do dano, pode caminhar em direção a ele. Se o troll jotund tiver dano de fogo persistente, ele tenta um teste (flat, dc:15) para removê-lo."
        },
        "E9KHhdSoyEltALZl": {
          "name": "Crescimento da cabeça",
          "description": "A regeneração de um troll jotund pode regenerar cabeças decepadas. Depois de recuperar Pontos de Vida da regeneração, o troll jotund tenta um teste (simples, dc:8). Se obtiver sucesso, uma cabeça perdida é totalmente restaurada; com um sucesso crítico, duas cabeças perdidas são totalmente restauradas. Se um troll jotund perder a última cabeça restante, ele morrerá imediatamente."
        },
        "VGSsUyeRsj9TVp4s": {
          "name": "Cabeças reativas",
          "description": "Um troll jotund ganha uma reação extra por rodada para cada uma de suas cabeças além da primeira, que ele pode usar apenas para fazer Golpes Reativos com suas mandíbulas ou para Engolir Rápido. Eles não podem usar mais de 1 reação para a mesma ação desencadeadora, mesmo que uma criatura deixe vários quadrados ao seu alcance, e devem usar uma cabeça diferente para cada Golpe Reativo. Sempre que uma das cabeças do troll jotund é decepada, o troll perde 1 de suas reações extras por rodada."
        },
        "sJ0GvRo7jSGvhwu0": {
          "name": "Ataque reativo",
          "description": ""
        },
        "K8pQXb338r0rcsyg": {
          "name": "Rugido Cacofônico",
          "description": "O troll jotund ruge com todas as suas cabeças, distorcendo misticamente a mente do ouvinte. Cada criatura não-troll em um @Template[type:emanation|distance:100] deve tentar um teste de salvamento (vontade, dc:34, opções:efeito de área,inflige:estupefificado,inflige:confuso).\nSucesso Crítico A criatura não é afetada e fica temporariamente imune por 24 horas.\nSucesso A criatura fica Estupefata 1 por 1 rodada.\nFalha A criatura fica Estupefata 2 por 1 rodada.\nFalha Crítica A criatura fica Confusa por 1 rodada."
        },
        "13fk2DgVCwU3Sixr": {
          "name": "Engolir Rápido",
          "description": "Acionar O troll jotund Agarra uma criatura com suas mandíbulas\nEfeito O troll usa Engolir Inteiro."
        },
        "KqT3eS2PHg3zQHia": {
          "name": "Mandíbulas Vorazes",
          "description": "O troll jotund faz um número de golpes de mandíbulas igual ao número de cabeças, cada um contra um alvo diferente. Esses ataques contam para a penalidade de ataque múltiplo do troll, mas a penalidade não aumenta até que o troll jotund realize todos esses ataques."
        },
        "4JMQir2kkR4RnwpE": {
          "name": "Rasgar",
          "description": "Garra"
        },
        "kRoQjYuooA7a3Qgj": {
          "name": "Engula inteiro",
          "description": "Médio, (3d12+8)[concussão], Ruptura 36"
        },
        "ypRvKqgIOUrnAfMA": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sordesdaemon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:273872ca9f2cdcb8d1342a481abbcdcd4cb4b3ae32a929720dc99a3d4fe8be1e",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sordesdemônio",
      "description": "Sordesdaemons são pedaços de esgoto e carne demoníaca que personificam a morte através da poluição. Eles estão entre os mais novos tipos de demônios que aparecem em Golarion e são constantemente cercados por uma nuvem de névoa fétida que sufoca as criaturas vivas. Sordesdaemons são diabolicamente inteligentes e muitas vezes procuram inspirar os mortais com novas ideias e invenções que destroem o meio ambiente. Embora esses demônios sejam mais do que capazes de arruinar habitats por conta própria, eles têm grande prazer em encorajar os mortais a fazerem isso sozinhos, já que o ato pode eventualmente criar novos sordesdemônios. Uma vez que uma determinada floresta, rio ou outra residência natural esteja completamente poluída, um sordesdemon frequentemente se move para reivindicá-lo como seu domínio.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "daemonic": "demoníaco"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença"
        ],
        "resistances": [],
        "weaknesses": [
          "santo 15"
        ]
      },
      "attacks": {
        "Qc7N0GKOoFezaIK1": {
          "name": "Punho",
          "damage": "3d8+14 contundente; 1d6 espiritual"
        }
      },
      "actions": {
        "BGk06cTCmFh4ZooN": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "aqhyDgyM7LmIL9o2": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "8QnTTWcdqDNyOtIl": {
          "name": "Miasma da Poluição",
          "description": "30 pés (9 metros). Uma criatura que entre na aura ou comece seu turno nela deve ser bem sucedida em um teste (fortitude, dc:34) ou ficará Enjoada 2 (mais Lentidão 1 enquanto estiver enjoada em uma falha crítica). As criaturas na aura não podem reduzir o valor da condição de doença. Uma criatura que obtiver sucesso no teste fica temporariamente imune por 1 minuto. Criaturas feitas de água (como elementais da água) e criaturas vegetais usam um resultado um grau de sucesso pior do que o resultado de seu salvamento."
        },
        "ztgpLrKdJjctex5J": {
          "name": "Infusão de Poluição",
          "description": "Criaturas não-demônios adjacentes à criatura afetada sofrem -1 de penalidade de circunstância nos testes de resistência contra doenças.\nTeste de salvamento (fortitude, dc:36)\nEstágio 1 Drenado 1 (1 dia)\nEstágio 2 Condenado 1 e Drenado 1 (1 dia)\nEstágio 3 Condenado 1 e Drenado 2 (1 dia)\nEstágio 4 Condenado 2 e Drenado 2 (1 semana)\nEstágio 5 morto.\nEfeito: Infusão de Poluição"
        },
        "wW8lBy7vi5CcDHTN": {
          "name": "Vômito de Sujidade",
          "description": "O sordesdaemon exala um spray de esgoto que causa 8d6[acid,8d6[veneno]|options:area-damage]{8d6 de dano ácido e 8d6 de dano venenoso} em um @Template[cone|distance:30] (check (fortitude, dc:36, basic, options:area-effect) save).\nEle não pode usar Retch of Foulness novamente por [[/gmr 1d4 #Recharge Retch of Foulness]]{1d4 rodadas}."
        }
      },
      "spellcasting": {
        "NPjuafWJNiaGNe5E": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "yLWlmhmOztmNTDmd": {
              "name": "Translocar (à vontade)"
            },
            "8rZciZP1Mbjm3tYQ": {
              "name": "Nuvem tóxica (à vontade)"
            },
            "lBM2KOSdEGLIyH2g": {
              "name": "Translocar"
            },
            "blSYbcYvup6PmxxZ": {
              "name": "Dessecar"
            },
            "mtCDi5ZYBV8THTCv": {
              "name": "Epidemia Espiritual"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:berberoka",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8fd2c7782d0b8411d6544c14a6724c9eaf2af6700949f9d072b0c617604c09cf",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Berberoka",
      "description": "Berberokas são humanóides gigantes que vivem entre florestas e pântanos, onde usam sua habilidade de engolir grandes quantidades de água para drenar pequenas lagoas e lagos. Criaturas que visitam seu bebedouro favorito e encontram apenas uma bacia de lama vazia tornam-se presas do berberoka, que se esconde no mato e subjuga suas presas com uma enorme torrente de água regurgitada.\nA parte traseira manchada de uma berberoka - que se assemelha a um feixe de plantas locais, pequenas árvores e grandes pedras - concede-lhes uma camuflagem natural que lhes permite esconder-se à vista de todos. Berberokas tendem a se disfarçar como formações rochosas no centro de um leito d'água seco enquanto esperam pelos transeuntes. Nas regiões tropicais onde as berberokas são mais comuns, os habitantes locais sabem evitar os lagos vazios, independentemente dos peixes atraentes que se debatem. Os viajantes famintos, por outro lado, poderiam ver tal recompensa como uma bênção dos deuses, apenas para serem arrastados pelo dilúvio mortal da berberoka.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "jotun": "Jotun"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "MDfIi6QAhzVXNbjg": {
          "name": "Punho",
          "damage": "3d12+16 contundente"
        }
      },
      "actions": {
        "7U9m1FIcumFSBawO": {
          "name": "Respiração Profunda",
          "description": "Uma berberoka pode prender a respiração por 2 horas"
        },
        "PxlpRBvsadwyRvFg": {
          "name": "Medo de caranguejos",
          "description": "Se um berberoka vir um caranguejo ou uma criatura parecida com um caranguejo, o berberoka deve tentar um teste (vontade, dc:33, opções:inflige:assustado) para salvar. Eles então ficam imunes à visão daquela criatura por 10 minutos.\nSucesso Crítico A berberoka não é afetada.\nSucesso A berberoka fica assustada 2.\nFalha A berberoka ganha a condição de Fuga por 1 rodada e fica Amedrontada 4."
        },
        "QbU0Hx1Z1kmtbyau": {
          "name": "Ataque reativo",
          "description": ""
        },
        "1QcJTJXjizy2eWWQ": {
          "name": "Consumir Lago",
          "description": "A berberoka bebe uma quantidade prolífica de uma fonte de água adjacente. Se a fonte de água for igual ou maior em volume que ela, a berberoka consome até 1.500 galões de água por minuto e fica encharcada. Eles podem liberar água na mesma proporção. Enquanto estiver alagado, o berberoka pode usar Spray Water, seu tamanho aumenta para gigantesco e sua velocidade é reduzida para 15 pés (4,5 metros).\nEfeito: Alagado"
        },
        "Y5SmF4DMJSoXAvPr": {
          "name": "Maior Constrição",
          "description": "(2d12+12)[concussão], teste (fortitude, dc:33, básico, opções:inflige:inconsciente)"
        },
        "ai1WRF74rRc8qQq4": {
          "name": "Pulverizar água",
          "description": "Requisitos A berberoka está encharcada.\nEfeito A berberoka borrifa um jato de água em um @Template[line|distance:60]. Todas as criaturas na linha sofrem 6d8 [concussão | opções: dano de área] de dano (teste (reflexo, dc: 35, básico, opções: efeito de área, movimento forçado, inflige: prostrado) salvamento). Em caso de falha no salvamento, a criatura é derrubada e empurrada para trás 5 pés (1,5 metros) (10 pés (3 metros) em caso de falha crítica no salvamento)."
        },
        "t3H58472BnUlnRho": {
          "name": "Pegar",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sykever",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:de1d823be2e65a043ba8c6a33d4580f3e0394091a7563ea25f0f554d6cf1f19a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sykever",
      "description": "Os darvakkas mais comuns são os sykevers, caminhantes noturnos. Sedentos de sangue, mas calculistas, eles lideram legiões de mortos em batalhas no Plano Material, trabalhando pelo simples objetivo de acabar com toda a vida.\nDarvakkas, também chamados de nightshades, são um mal voraz composto de partes iguais de escuridão e malícia. Originalmente criaturas dos Planos Exteriores que viajam para a convergência do Plano das Sombras e do Vazio – onde o poder do nada os destrói – essas abominações mortas-vivas são a personificação física da entropia. Eles queimam com um ódio intenso por toda a vida, trabalhando para trazer uma noite final e escura ao Plano Material, onde nada resta além de cinzas e gelo.\nComo criaturas distorcidas pela escuridão e pelas sombras, os darvakkas têm uma grande aversão à luz solar e a todas as fontes de energia vital. No Plano Material, eles passam as horas da luz do dia escondidos abaixo do solo, em meio a ruínas, ou submersos nas profundezas dos abismos mais escuros do oceano, além do alcance dos raios solares, emergindo quando a escuridão os protege acima.\nDarvakkas têm uma aura de entropia que atrai escravos mortos-vivos para servirem como guerreiros e arautos. Eles raramente buscam alianças entre si ou com outras criaturas, existindo na solidão como chefes de exércitos individuais de mortos.",
      "size": "Enorme",
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
          "frio 10"
        ],
        "weaknesses": [
          "santo 10",
          "prata 10"
        ]
      },
      "attacks": {
        "eq0chkkfcwtghv3v": {
          "name": "Buzina",
          "damage": "3d8+12 contundente; 1d10 frio; 2d8 sangramento"
        }
      },
      "actions": {
        "r867EAQMTLMUJiHC": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "cIELmXkQeHpsRuLZ": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "krx5EeEB0stlZv3X": {
          "name": "Lifesense 60 pés (18 metros)",
          "description": ""
        },
        "zFCU1ww4cUWHDUWa": {
          "name": "magias Constantes",
          "description": ""
        },
        "dp0m2eqjh44d7v4a": {
          "name": "Sombra da Entropia",
          "description": "40 pés (12 metros). Sykevers vazam entropia e corrupção de seu próprio ser. Uma criatura viva que entra ou inicia seu turno na aura sofre 4d6[void] de dano com um teste (fortitude, dc:33, básico). Se falhar, também é Enfraquecido 1 por 1 minuto e puxado 10 pés (3 metros) em direção ao sykever."
        },
        "n53sw596l0uo2mmy": {
          "name": "Impotência à luz solar",
          "description": "Um Sykever capturado pela luz solar é Atordoado 2 e Desajeitado 2."
        },
        "CwXMyTDGPy4bVI0z": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "urw7slqqg18c2bqr": {
          "name": "Mudar Postura",
          "description": "O Sykever muda entre sua postura bípede e quadrúpede. Em sua postura bípede, o sykever pode usar todas as habilidades em seu bloco de estatísticas, exceto Horned Rush. Em sua postura quadrúpede, o sykever tem uma velocidade de 80 pés (24 metros), mas não pode fazer golpes com pontas de braço, desarmar, lançar magias ou usar item de esmagamento."
        },
        "uyym1abw28sm0iuq": {
          "name": "Esmagar item",
          "description": "Trigger The sykever obtém um sucesso crítico para desarmar\nRequisitos O Sykever está em sua postura bípede\nEfeito O sykever agarra o item e o perfura com as pontas dos braços. O item quebra e cai no chão no espaço do sykever. Itens que já estão quebrados não sofrem mais danos e um item com Dureza 14 ou superior não é afetado."
        },
        "kl1jb22cgwiuukv9": {
          "name": "Olhar drenante",
          "description": "O sykever fixa seu olhar de pesadelo em uma criatura que pode ver, que deve tentar um teste (vontade, dc:36) de salvamento. Independentemente do resultado, o alvo fica temporariamente imune por 10 minutos.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Enfraquecido 2 por 1 rodada se o sykever estiver em postura bípede, ou Desajeitado 2 por 1 rodada se o sykever estiver em postura quadrúpede.\nFalha Como sucesso, mas o efeito dura 1 minuto.\nFalha Crítica Como sucesso, mas Enfraquecido 3 ou Desajeitado 3, e o efeito dura 10 minutos."
        },
        "bnqnkgeuejbypq0u": {
          "name": "Corrida com Chifres",
          "description": "Requisitos O sykever está em sua postura quadrúpede\nEfeito O sykever avança e então dá um golpe de buzina."
        }
      },
      "spellcasting": {
        "cMH2fN0W5f937Chd": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "oEBOn1SyX4xkRdO2": {
              "name": "Detectar magia"
            },
            "uxhfyJ9MLgmRSKS9": {
              "name": "Escuridão (à vontade)"
            },
            "gLOdgen4R8Z26GED": {
              "name": "Invisibilidade"
            },
            "xZXL9pFA7QbwKRDH": {
              "name": "Visão Verdadeira"
            },
            "dqPP67nurOtK96St": {
              "name": "Ferir"
            },
            "H1YR8lmJxjQ8GKTf": {
              "name": "Teletransporte Interplanar (somente para o Universo, Vazio ou Submundo)"
            },
            "dsQPYeKIENa79led": {
              "name": "Paralisar"
            },
            "jK7ocqrvtLafrVZE": {
              "name": "Voar (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:animated-colossus",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7bba6e146dc6da90ee11cfa4f2cb120a02ed71389582bc6a0b0c0248c210af42",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Colosso Animado",
      "description": "Animar uma estátua de 30 metros de altura vale o custo para conjuradores que guardam imensas masmorras.\nMuitos objetos animados têm funções úteis, mas tornam-se perigosos quando não controlados.",
      "size": "Imenso",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "oTrOmw914xPkqVd5": {
          "name": "Punho",
          "damage": "3d12+17 contundente"
        },
        "mjNu7tTMIDpyD02w": {
          "name": "Pé",
          "damage": "3d8+17 contundente"
        }
      },
      "actions": {
        "jwmn7WQty7oJo2L7": {
          "name": "Construir Armadura (Dureza 15)",
          "description": "Como objetos normais, um colosso animado possui Dureza. Esta Dureza reduz qualquer dano que o colosso sofra em uma quantidade igual à Dureza. Uma vez que um colosso animado é reduzido a menos da metade de seus Pontos de Vida, ou imediatamente após ser danificado por um acerto crítico, sua armadura de construção quebra, removendo a Dureza e reduzindo sua Classe de Armadura para 35."
        },
        "OSib6ckkzfe3tvbE": {
          "name": "Enorme",
          "description": "Um colosso animado ocupa um espaço de 6 quadrados por 6 quadrados (30 pés (9 metros) por 30 pés (9 metros)) e tem 100 pés (30 metros) de altura."
        },
        "M1rzEefuLXlWlYN8": {
          "name": "Aperto do Colosso",
          "description": "O colosso pode agarrar uma criatura usando apenas uma mão.\nEle pode se mover normalmente com uma criatura Agarrada ou Restringida em seu punho, carregando a criatura junto. Se ele tiver duas criaturas agarradas dessa forma, ele não poderá usar seu golpe de punho."
        },
        "gGHq0sBBHPVuZhDJ": {
          "name": "Contrair",
          "description": "(3d12+11)[concussão], teste (fortitude, dc:36, básico)"
        },
        "SUBRW3AOWawVs2rU": {
          "name": "Atropelar",
          "description": "Enorme ou menor, pé, xadrez (reflexo, pa:36, básico)"
        },
        "cSjAmejzsOjgyVSy": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:zhuraita",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:bd4b1531f3d393af5a76bf49fac30a5094668b4ec5686f66e047bd46f58b534a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Zhuraita",
      "description": "Os Zhuraitas dedicam-se à liberdade de investigação académica e científica, protegendo a criatividade e a inventividade dos campos académicos. Muitos acadêmicos de bom coração conseguem avanços devido à inspiração de um zhuraita, principalmente com projetos que têm impactos positivos duradouros sobre outras pessoas. Os Zhuraitas também viajam para defender importantes centros de conhecimento quando estes estão em perigo de destruição.\nOs Zhuraitas desprezam aqueles que usam a investigação como instrumento de opressão, e há até rumores de que eles sabotaram tais projectos, impedindo a sua conclusão. Os azatas são conhecidos por às vezes esconder conhecimentos que acreditam serem prejudiciais ou perigosos. No entanto, eles não destroem completamente esse conhecimento e, em vez disso, optam por selá-lo em lugares que possam defender. Em raras ocasiões, um zhuraita reconhecerá que tal conhecimento pode realmente ser útil para um aliado de confiança e compartilhará a informação, embora apenas sob a supervisão do zhuraita.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "truesight-60": "visão verdadeira-60"
      },
      "languages": {
        "common": "comum",
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15",
          "profano 15"
        ]
      },
      "attacks": {
        "o0JWxlccgjVkMcG8": {
          "name": "Tese",
          "damage": "3d12+10 contundente"
        },
        "5uOtOgPu7GwG1gqu": {
          "name": "Folha solta",
          "damage": "3d10+10 cortante"
        }
      },
      "actions": {
        "tNDSmrL3XcfgL2ma": {
          "name": "Desconstruir",
          "description": "Gatilho O zhuraita é alvo de um efeito com o traço linguístico ou mental\nEfeito O zhuraita critica os fundamentos teóricos de seu inimigo, tentando um teste de neutralização com um bônus de [[/r 1d20+28#Contratar]] (neutralizar Rank 8). Se o efeito for neutralizado, o inimigo desencadeador fica Assustado 1 (Assustado 2 se o zhuraita tiver sucesso crítico)."
        },
        "GZ3JIOsSHMtAH4ym": {
          "name": "Revelando Hipótese",
          "description": "Requisitos O zhuraita atinge uma criatura com sua tese\nEfeito A tese do zhuraita abre, com as páginas tremulando a uma velocidade anormal. Em seguida, ele se fecha, com a capa mostrando agora a imagem da criatura que atingiu. Os ataques do zhuraita contra aquela criatura causam 2d6 de dano de precisão adicional. O zhuraita só pode ter uma criatura como foco de sua Hipótese Reveladora, que dura até que ele atinja outra pessoa."
        },
        "UzLK7pcfz7dHr43Y": {
          "name": "Escudo de Tese",
          "description": "Um círculo giratório de tomos envolve o zhuraita, durando até o início do próximo turno. Enquanto o Escudo de Tese estiver ativo, o zhuraita ganha +2 de bônus de circunstância na CA e tem a condição Oculto."
        }
      },
      "spellcasting": {
        "k4DuD8wVvtq5zwwP": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "il2O3J1JjjVtuxg1": {
              "name": "Detectar magia"
            },
            "UTfr6PIDeZUDrggx": {
              "name": "Orientação"
            },
            "BVaTEJMlNxhYpcZy": {
              "name": "Mindlink (à vontade)"
            },
            "Tu4z5jAQxJ15qwZU": {
              "name": "Leia aura"
            },
            "1pgvEdubC2oPnqUO": {
              "name": "Hipercognição"
            },
            "Et5jNBcAU68gaYmx": {
              "name": "Traduzir (à vontade)"
            },
            "aBAzogpaYC2v3hJZ": {
              "name": "Truespeech (constante)"
            },
            "2n8nBhS3FspJqWZB": {
              "name": "Visão Verdadeira (Constante)"
            },
            "Wvz5p9UB5k0NehN8": {
              "name": "Mente Clara"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:wemmuth",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4785a6b5c48e08e3c32c5384b6bc1f154cf07aba7096d413213fbead62597698",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Wemmuth",
      "description": "Fertilizados por grandes quantidades de sangue derramado, como aquele encontrado em campos de batalha manchados de sangue ou nas regiões devastadas pela guerra ao redor de cidades sitiadas, os wemmuths são vis faixas de videiras que extraem sustento do sofrimento mortal, lambendo sangue como água. Eles possuem uma inteligência rudimentar e uma sede insaciável por sangue, esperando durante a maior parte de suas vidas e crescendo até um tamanho incrível no solo sangrento de suas terríveis casas. O corpo de um wemmuth é composto por trepadeiras pouco mais grossas que uma corda, e um único sistema de wemmuth adulto consiste em seis toneladas de trepadeiras, o suficiente para se esticar por 6,0 pés (0 metros) se disposto de ponta a ponta em uma única linha reta. No entanto, os Wemmuths nunca se orientam desta forma, preferindo em vez disso envolver-se em montes enormes com aproximadamente 15 pés (4,5 metros) de largura e igualmente grossos. A criatura condensa toda a sua massa em uma esfera de espinhos afiados e trepadeiras, parecendo uma odiosa erva daninha do tamanho de um elefante. Wemmuths geralmente desenterram pedras enormes ou árvores inteiras do chão e os incorporam em sua massa rolante, usando esses objetos para reforçar sua defesa contra muitas formas de ataque ou para arremessá-los contra inimigos distantes com uma precisão assustadora.\nAlguns especulam que os Wemmuths são uma forma de corrupção diabólica lançada sobre Golarion pela Casa Thrune de Cheliax, talvez como uma tática de terra arrasada contra seus rivais. Nobres influentes de Nirmathas e Molthune apontam o dedo uns para os outros pela criação do wemmuth, Nirmathas citando os laços estreitos de Molthune com Cheliax infernal e Molthune culpando a magia primordial comumente empregada pelos muitos druidas e rangers de Nirmathas. Vários contos varisianos descrevem criaturas que se aproximam da descrição do wemmuth tentando apreender um famoso trapaceiro popular, enquanto os cruzados de Mendev aderem à crença de que os wemmuths foram uma praga desencadeada sobre Golarion por Deskari, antigo senhor demônio dos gafanhotos, antes de sua derrota nas mãos de heróis mortais.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-60": "tremorsensível-impreciso-60"
      },
      "languages": {
        "aklo": "aklo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "frio 20",
          "cortando 15"
        ]
      },
      "attacks": {
        "Cs9bWcWN5EGHXFTL": {
          "name": "Videira",
          "damage": "4d12+10 contundente"
        },
        "QD8EtSa8i8CLrYd1": {
          "name": "Pedregulho",
          "damage": "4d10+10 contundente"
        }
      },
      "actions": {
        "MvU4aR0QNT2reiGX": {
          "name": "Tremorsense (impreciso) 60 pés (18 metros)",
          "description": ""
        },
        "ho6LxyNxuCPhJCQS": {
          "name": "Sanguessuga de sangue",
          "description": "Gatilho O wemmuth causa dano a uma criatura com Constrict\nEfeito O Wemmuth cura um número de Pontos de Vida igual à metade do dano total causado por Constrict."
        },
        "jxo42VzY7ZoPNLHV": {
          "name": "Contrair",
          "description": "(2d12+10)[concussão] dano, teste (fortitude, dc:36, básico) salvamento"
        },
        "8FV6HMADyqAFIFuU": {
          "name": "Engolir",
          "description": "verificação (reflexo, dc:36, opções:efeito de dano,inflige:agarrado,inflige:lento), 4d8[concussão] de dano, [[/act escape dc=33]], Ruptura 36"
        },
        "QTopjs7och0ybEpy": {
          "name": "Missa Espinhosa",
          "description": "Sempre que uma criatura dentro de 10 pés (3 metros) tenta um ataque corpo a corpo contra um wemmuth ou usa Acrobacia para Romper através de seu espaço, aquela criatura sofre (1d12+10)[perfurante] de dano (teste (reflexo, dc:36, básico))."
        },
        "T6uL4dbtaPSkZ4ov": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-adult",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3c64a7f6c87bab8835e27122085141005b8215ceeae05d6edfd3ef4c5b2d9e1b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Réquiem (adulto)",
      "description": "Os dragões Requiem são administradores do Rio das Almas e do processo através do qual as almas chegam ao seu destino final na vida após a morte. A jornada segura de uma alma é de extrema importância para um dragão réquiem, e alguns seguirão almas individuais desde sua primeira entrada no rio até seu julgamento no Boneyard e, eventualmente, até seu local de descanso final. A maioria dos dragões de réquiem se ligam a planos específicos e pastoreiam quaisquer almas ligadas a esse plano, levando a dragões ligados a lugares como o Céu ou o Inferno, embora esses dragões nunca jurem lealdade verdadeira a esses planos. Dragões réquiem enchem seus covis ao longo do Rio das Almas – retalhos de arquitetura sombria resgatados de outros planos – com registros inestimáveis ​​e lembranças de grandes realizações.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-90": "lifesense-impreciso-90",
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
          "damage": "3d10+12 perfurante; 2d8 espiritual"
        },
        "wyJW030tjlMqlOFy": {
          "name": "Garra",
          "damage": "3d6+12 cortante; 2d8 espiritual"
        },
        "MfU1Is4nFaLYi4YN": {
          "name": "Cauda",
          "damage": "3d8+12 contundente; 2d8 espiritual"
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
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O dragão resiste ao afrouxamento de sua própria alma, evitando alguns danos. O dragão ganha resistência 15 a todos os danos contra o ataque desencadeador."
        },
        "O3ebBljtcItTfmVr": {
          "name": "Respiração Condenadora",
          "description": "A energia da Forja da Criação irrompe da boca do dragão, causando 12d8[spirit|options:area-damage] de dano em um @Template[type:line|distance:90] (check (reflex, dc:36, basic, options:area-effect) save). Criaturas mortas-vivas que falharem no salvamento também devem ter sucesso em um teste (vontade, dc:36, opções:efeito de área,infligir:condenado) no salvamento ou se tornarão Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 4). O dragão não pode usar Sopro Dooming novamente por [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rodadas}."
        },
        "OPtrKq8gnuusiAqH": {
          "name": "Frenesi Dracônico",
          "description": "O dragão dá dois golpes com as garras e um com a cauda em qualquer ordem."
        },
        "WS1ygMI5ueVbLBHQ": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro Dooming sempre que consegue um acerto crítico com um Golpe."
        },
        "pVA84K2nKuClLYVw": {
          "name": "Escudo da Alma",
          "description": "Frequência uma vez por dia\nEfeito O dragão réquiem usa sua essência vital para criar um escudo de energia espiritual ao redor de uma criatura dentro de 60 pés (18 metros). O escudo cria uma ligação entre o dragão e a criatura com os efeitos de Compartilhar Vida, exceto que o efeito não termina independentemente da distância e permanece por 1 hora. Além disso, a criatura ganha resistência 5 a danos físicos e espirituais que se aplicam à metade do dano que recebe. O dragão pode Dispensar o efeito."
        },
        "RNqriXQSfwsYWhjE": {
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sakugami",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7f1c0e6c0aff9e63ccfe088ef35feb8011da44b89405f684ac9c636cf1ffa200",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sakugami",
      "description": "Sakugami são kami especialmente poderosos que protegem as árvores que florescem sazonalmente, especialmente aquelas em locais onde os poderes primitivos da natureza permanecem fortes. O ciclo de uma árvore estéril que explode em uma profusão de flores uma vez por ano, antes que essas flores desapareçam inevitavelmente com a mudança das estações, fornece uma metáfora visual impressionante para sakugami, cuja associação com este ciclo anual de crescimento e decadência lhes confere poderes sobre o tempo e também sobre a natureza. Também conhecidos como kami das flores, os sakugami têm um fascínio particular pelos mortais. Muitas lendas populares falam de sakugami que concedem suas bênçãos a indivíduos dignos que lutam por causas justas. Na verdade, embora os kami das flores sejam hipnotizados por tais mortais – vendo a essência de uma flor em uma vida curta dedicada a trazer beleza e conforto ao seu entorno – eles são tão raros e enigmaticamente distantes que poucos os encontram. Décadas, até séculos, podem se passar antes que uma vila humilde perceba que um sakugami a está vigiando.\nAs histórias persistem, no entanto, como têm acontecido há séculos, levando a uma apreciação generalizada pelas árvores em flor. O local de uma nova aldeia pode ser escolhido devido à sua proximidade com uma antiga glicínia, ou um templo pode ser cuidadosamente construído em torno de uma única ameixa jovem. Como os sakugami são mais comumente associados às cerejeiras, muitos centros populacionais maiores em Minkai plantam e cuidam cuidadosamente de pequenos bosques de cerejas, tanto por sua beleza quanto por respeito aos kami em flor.\nKami são espíritos divinos da natureza das terras de Tian Xia, no extremo leste da região do Mar Interior. Eles servem como guardiões de objetos naturais e locais que protegem - seus protegidos - e são antigos inimigos dos oni (Pathfinder Monster Core 252–255). Kami pode se fundir com seus protegidos, permitindo-lhes observar sub-repticiamente qualquer um que pise em seus solos sagrados. Os Kami deixam em paz aqueles que consideram inofensivos, mas lutam vigilantemente para assustar qualquer um que seja visto como uma ameaça.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "empyrean": "empíreo"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "ferro frio 15"
        ]
      },
      "attacks": {
        "1zABoyA2x54PjRbW": {
          "name": "Funcionários",
          "damage": "2d4+13 contundente"
        }
      },
      "actions": {
        "u0En61GEkmilRJFz": {
          "name": "Telepatia 150 pés (45 metros)",
          "description": ""
        },
        "3z3CSczhmYzfNCxB": {
          "name": "Ala",
          "description": "Cada kami está vinculado a uma proteção: um animal, planta, objeto ou local específico. Um kami pode fundir-se ou emergir de sua proteção como uma única ação, que possui a característica concentração. Enquanto fundidos, os kami podem observar o ambiente ao seu redor com seus sentidos usuais, bem como com os sentidos de seu protegido, mas não podem se mover, comunicar-se ou controlar seu protegido. Além disso, um kami fundido com seu protegido recupera Pontos de Vida a cada minuto, como se tivesse passado um dia inteiro descansando.\nA ala de um sakugami é normalmente uma árvore caducifólia específica com flores sazonais, como cereja, ameixa ou glicínia."
        },
        "5RtC2ASqDYa1fPfS": {
          "name": "magias Constantes",
          "description": ""
        },
        "tsmm8I4dsTXiGSRZ": {
          "name": "Ataque reativo",
          "description": ""
        },
        "UpRhtSyc0VRLt2t6": {
          "name": "A previsão de Sakugami",
          "description": "Gatilho O sakugami está sujeito a uma ação hostil ou precisa rolar para se defender\nEfeito O sakugami rola duas vezes e usa o resultado mais alto para seu teste de resistência ou outra defesa (um efeito de fortuna) ou força a criatura hostil ou perigo a rolar duas vezes e usar o resultado mais baixo para sua jogada de ataque ou jogada semelhante (um efeito de infortúnio)."
        },
        "VzlO3rF9ml7NQJRF": {
          "name": "Flores fugazes",
          "description": "Os golpes do bastão de um sakugami despertam flores fugazes que florescem, murcham e apodrecem, tudo no espaço de um instante. Se acertarem, eles causam 1d6[mental] de dano adicional, bem como 1d6[void] de dano adicional a criaturas vivas e 1d6[vitalidade] adicional de dano a mortos-vivos."
        },
        "tnQ4cIcOMWuGbaPY": {
          "name": "Golpe Rápido do Cajado",
          "description": "Em uma rápida série de movimentos, o sakugami desfere um ataque mortal. O sakugami faz três golpes de bastão. A penalidade de ataque múltiplo do sakugami não aumenta até que ele tenha feito todos os três ataques."
        },
        "kYmteRQa3LahCveN": {
          "name": "Toque das Eras",
          "description": "Os ataques de um sakugami concedem uma maldição que altera o fluxo do tempo naqueles que eles atacam. Quando um sakugami atinge uma criatura com um Golpe corpo a corpo, a criatura deve tentar um teste (fortitude, dc:36), pois sua perspectiva muda rapidamente entre a idade avançada e um estado infantil. Independentemente do resultado, a criatura fica temporariamente imune por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica Desajeitada 1, Enfraquecida 1 e Estupefata 1 por 1 rodada.\nFalha A criatura fica Desajeitada 2, Enfraquecida 2 e Estupefata 2 por 1 minuto.\nFalha Crítica Como falha, mas as condições são permanentes."
        }
      },
      "spellcasting": {
        "Wf76V3o8gstoUE6k": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "oYoYyTyC4w3GY5fT": {
              "name": "Status"
            },
            "hHbTdzTvuc86WAFy": {
              "name": "Curar"
            },
            "zANtgVUDX9St398r": {
              "name": "Um com plantas (somente árvores floridas)"
            },
            "CPNch4XxOFdXCM1r": {
              "name": "Descanso tranquilo"
            },
            "ZkqoDkP0TfxueBuf": {
              "name": "Limpar Aflição"
            },
            "s49RXHWrH4qqNcEe": {
              "name": "Caminho da Natureza (à vontade) (somente floração)"
            },
            "86QAPAVAPZfPADE2": {
              "name": "Lento"
            },
            "QsCtLitrf7uDEgCU": {
              "name": "Executar"
            },
            "RYvzGKb2XmaJJ1RW": {
              "name": "Pressa"
            },
            "sJGoZ5gJw5AovHJf": {
              "name": "Regenerado"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nosferatu-overlord",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:dcb781879d58134050d7e5e546744edd02b8adfeb97452626d84e2b143356f8d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Senhor Supremo Nosferatu",
      "description": "",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "doença",
          "paralisado",
          "tóxico",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "FTziM3StUsk6uljP": {
          "name": "Garra",
          "damage": "3d10+12 contundente"
        },
        "04TbbF50Bb8QMN7j": {
          "name": "Presas",
          "damage": "3d12+12 contundente"
        }
      },
      "actions": {
        "rA6nVb14yRbfUDje": {
          "name": "Telepatia 60 pés (18 metros)",
          "description": ""
        },
        "IajFoKIy10WTNoH7": {
          "name": "Cura Rápida 15",
          "description": ""
        },
        "3j4Xr18GjN12j74C": {
          "name": "Ar de doença",
          "description": "30 pés (9 metros). Uma criatura entrando ou iniciando seu turno na aura deve tentar um teste de resistência (fortitude, dc:33, opções:infligir:enjoado). Em caso de falha, a criatura fica Adoecida 1 e sofre –2 de penalidade de status nos testes de resistência feitos para resistir a doenças e remover a condição de doente por 1 hora.\nEfeito: Ar de Enjôo"
        },
        "FPrgaUOdeGQRcQBH": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "LgQMKlP8r3bZfKCj": {
          "name": "Alterar forma",
          "description": "O nosferatu se transforma em um enxame de ratos cinza-claros. Eles ganham uma Velocidade terrestre de 30 pés (9 metros) e uma Velocidade de subida de 10 pés (3 metros), e se tornam Grandes. Nesta forma de enxame, o nosferatu pode realizar uma ação para causar 2d10[piercing|options:area-damage] de dano a cada inimigo no espaço do enxame com um teste de resistência (reflexo, básico, dc:36, opções:efeito de área). Uma criatura que falhe no teste também fica exposta à praga dos antigos."
        },
        "D3EwX19he78NBEH3": {
          "name": "Comando Escravo",
          "description": "Requisitos Um dos escravos do nosferatu está presente e pode ouvir o nosferatu\nEfeito O nosferatu dá um único comando a um de seus servos, que o servo segue da melhor maneira possível durante seu próximo turno."
        },
        "JsPkaolmnMCUojYB": {
          "name": "Dominar",
          "description": "O nosferatu pode lançar Dominação à vontade como um magia divino inato. Lançá-lo requer olhar nos olhos do alvo, dando ao magia a característica visual. A CD de salvamento usa uma CD alta para o nível do nosferatu, e uma criatura bem-sucedida fica temporariamente imune à Dominação desse nosferatu por 24 horas. Destruir totalmente o nosferatu encerra a dominação, mas apenas reduzir o nosferatu a 0 HP é insuficiente para quebrar o magia."
        },
        "H721NOrTIOeioelo": {
          "name": "Beber sangue",
          "description": "Requisitos A última ação do nosferatu foi um ataque de presas bem-sucedido\nEfeito O nosferatu crava suas presas na criatura alvo para beber seu sangue. Isso requer um teste (atletismo, contra:fortitude) contra a CD de Fortitude da criatura. Com um sucesso, a criatura fica Drenada 1 e o nosferatu recupera 21[cura]{21 HP}, ganhando qualquer HP excedente como Pontos de Vida temporários. Beber Sangue de uma criatura que já foi drenada não restaura nenhum HP do nosferatu, mas aumenta o valor da condição drenada da criatura em 1, matando a vítima quando ela atinge Drenado 5. Um nosferatu também pode consumir sangue que foi esvaziado em um recipiente para sustento, mas eles não ganham HP ao fazer isso.\nO valor da condição drenada da criatura alvo diminui em 1 por semana. Uma transfusão de sangue, que requer uma verificação bem-sucedida (medicamento, dc:20) e sangue suficiente ou um doador de sangue, reduz o valor drenado em 1 após 10 minutos."
        },
        "qdWbSsyOjSnNEpXE": {
          "name": "Vulnerabilidades dos Nosferatu",
          "description": "• Repulsa Um nosferatu não pode voluntariamente chegar a 10 pés (3 metros) de alho brandido ou de um símbolo religioso brandido de uma divindade com uma opção de santificação sagrada. Para brandir alho ou um símbolo religioso, uma criatura deve Interagir durante 1 rodada (semelhante a Levantar um Escudo). Se o nosferatu chegar involuntariamente a 10 pés (3 metros) de um objeto de sua repulsa, ele ganha a condição de Fuga, correndo do objeto de sua repulsa até terminar uma ação além de 10 pés (3 metros). Após 1 rodada sendo exposto ao alvo de sua repulsa, um nosferatu pode tentar um teste (vontade, dc:25, características:concentração) salvo como uma única ação, que possui a característica concentração. Em caso de sucesso, eles superam suas repulsas por [[/gmr 1d6 #rounds]]{1d6 rodadas} (ou 1 hora em caso de sucesso crítico).\n• Estaca Uma estaca mágica de madeira (como uma afetada por uma runa de potência de arma, Arma Rúnica ou magia similar) cravada no coração do nosferatu reduz o HP do nosferatu a 0 e impede que ele cure acima de 0 HP, mesmo em seu caixão. Estaquear um nosferatu requer 3 ações e só funciona se o nosferatu estiver Inconsciente. Se a estaca for removida, o nosferatu pode curar acima de 0 HP novamente e, se estiver em seu caixão, o período de descanso de 1 hora começa assim que a estaca for removida. Se a cabeça do nosferatu for decepada e ungida com Água Benta enquanto a estaca estiver no lugar, o nosferatu será destruído.\n• Luz Solar Se exposto à luz solar direta, um nosferatu imediatamente fica Lento 1. O valor de Lentidão aumenta em 1 cada vez que o nosferatu termina seu turno sob a luz solar, e a condição termina quando ele não estiver mais sob a luz solar. Se o nosferatu perder todas as suas ações desta forma, ele será destruído."
        },
        "fXMpxHG2C32hSvaS": {
          "name": "Medo Paralítico",
          "description": "Requisitos A última ação do overlord nosferatu foi um ataque de garra bem-sucedido\nEfeito O nosferatu aproxima o alvo do Golpe e congela sua mente de terror. O alvo deve tentar um teste (vontade, dc:33, opções:infligir:assustado,infligir:imobilizado,infligir:contido) com uma CD moderada para o nível do nosferatu.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Imobilizado pelo medo até o final do próximo turno do nosferatu.\nFalha O alvo fica Contido e sofre –2 de penalidade de circunstância em sua CD de Fortitude contra a habilidade Beber Sangue do nosferatu até o final do próximo turno do nosferatu.\nFalha Crítica Como falha e o alvo fica Assustado 2."
        },
        "uz2JK60yMw1ueaVI": {
          "name": "Praga dos Antigos",
          "description": "Teste de salvamento (fortitude, dc:36)\nInício 1 dia\nEstágio 1 Drenado 1 (1 dia)\nEstágio 2 Drenado 2 e Debilitado 2 (1 dia)\nEstágio 3 Condenado 1, Drenado 3 e Enfraquecido 3 (1 dia)\nEstágio 4 Condenado 2, drenado 3 e debilitado 3 (1 dia)\nEstágio 5 Inconsciente (1 dia)\nMorte no estágio 6"
        },
        "mFQxNEWjmfAb5RVB": {
          "name": "Restauração de caixão atormentado",
          "description": "Ao contrário de outros mortos-vivos, um nosferatu não é destruído com 0 HP. Em vez disso, eles se dispersam em um imenso número de ratos que se dirigem em todas as direções na tentativa de retornar ao seu caixão. Se um único rato chegar ao caixão, o nosferatu poderá se recuperar. Um nosferatu recupera suas forças descansando na terra retirada do túmulo de uma criatura que morreu de peste. Se seu corpo repousar em seu caixão cheio de terra por 1 hora, o nosferatu ganha 1 HP, após o qual sua cura rápida começa a funcionar normalmente. Se o caixão não contiver essa terra contaminada, eles precisarão descansar em seu caixão por 1 dia antes de ganharem 1 HP e recuperarem sua cura rápida."
        }
      },
      "spellcasting": {
        "XVeikAYoIL95A0ex": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "RaVIr1GBtZooFnd8": {
              "name": "Transporte Telecinético"
            },
            "LbFsB8Ti4s4slDy0": {
              "name": "Exsanguinação Vampírica"
            },
            "5fD5A7T8nEDaUCkz": {
              "name": "Dominar (à vontade)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:graveknight-champion",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:24f9a7e4f3c3ce4507da87d7b2549ad33f4b5cd05f9f602497272e6ad8b94bb6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Campeão do Cavaleiro Túmulo",
      "description": "Outrora servo de uma divindade, o campeão cavaleiro do túmulo retornou como um morto-vivo após uma vida interrompida no serviço ao seu deus.\nQuando um combatente temível cai em batalha, o espírito vingativo do guerreiro às vezes pode se fundir com sua armadura, criando um cavaleiro grave.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "common": "comum",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "sangrar",
          "efeitos de morte",
          "doença",
          "fogo",
          "paralisado",
          "tóxico",
          "inconsciente"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "Ne1ooULFIyMu8vPR": {
          "name": "Ótima escolha",
          "damage": "3d10+16 perfurante"
        },
        "w7QWpYn1m4Xmsv2g": {
          "name": "Punho",
          "damage": "3d6+16 contundente; 1d6 fogo"
        },
        "QUEWLvaGCaw2yYG8": {
          "name": "Arco Curto Composto",
          "damage": "3d6+10 perfurante"
        }
      },
      "actions": {
        "qaOebY5pBDMWy5A8": {
          "name": "Armadura Agarrada",
          "description": "Gatilho Uma criatura tenta se afastar do cavaleiro da tumba\nEfeito A armadura do cavaleiro da tumba é animada e tenta agarrar a criatura desencadeadora. Ele faz um teste de Atletismo para Agarrar usando o modificador de Atletismo do cavaleiro do túmulo – 2.\nA armadura pode continuar a agarrar a criatura normalmente. Como a armadura está agarrando a criatura, o cavaleiro do túmulo não precisa de mão livre para fazer isso."
        },
        "UF0WuLUrU0usqAAS": {
          "name": "Ataque reativo",
          "description": ""
        },
        "U8zq8iIHAufCwa8K": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "kwYJk1o85f4qDBlh": {
          "name": "Magia do Canal",
          "description": "O cavaleiro da sepultura redireciona energias mágicas através de sua armadura, permitindo-lhe lançar magia através de um ataque. O cavaleiro do túmulo lança um magia que requer 1 ou 2 ações para ser lançado e requer um modificador de ataque de magia. Os efeitos do magia não ocorrem imediatamente, mas são incorporados em um ataque. O cavaleiro da tumba então realiza um ataque corpo a corpo com uma arma ou ataque desarmado. O magia é acoplado ao ataque, usando o resultado da jogada de ataque para determinar os efeitos do Golpe e do magia. Isso conta como dois ataques para a penalidade de ataque múltiplo do cavaleiro do túmulo, mas não aplica a penalidade até que ele tenha completado Canalizar Magia. O cavaleiro da sepultura não pode usar Channel Magic novamente por [[/gmr 1d4 #Recharge Channel Magic]]{1d4 rodadas}."
        },
        "AiCSiVf8Mu2cUUef": {
          "name": "Explosão Devastadora",
          "description": "O cavaleiro da tumba libera um @Template[cone|distance:30] de energia. Criaturas na área sofrem 9d12[fogo|opções:dano de área] de dano (teste de salvamento (reflexo, dc:36, básico, opções:efeito de área)).\nO cavaleiro da sepultura pode usar essa habilidade uma vez a cada [[/gmr 1d4 #Recharge Devastating Blast]]{1d4 rodadas}."
        },
        "IIWuQHOSJEPu5eUg": {
          "name": "Maldição do Cavaleiro Túmulo",
          "description": "Esta maldição afeta qualquer um que use uma armadura de cavaleiro do túmulo por pelo menos 1 hora.\nTeste de salvamento (vontade, dc:40) salvar\nInício 1 hora\nEstágio 1 Condenado 1 e não pode remover a armadura (1 dia)\nEstágio 2 Condenado 2, penalidade de velocidade de -10 pés (3 metros) e não é possível remover a armadura (1 dia)\nO estágio 3 morre e se transforma no cavaleiro da armadura.\nEfeito: Maldição do Cavaleiro do Túmulo"
        },
        "hSsikL77YXGbr4xY": {
          "name": "Armas Ruinosas",
          "description": "Qualquer arma ou ataque desarmado que o cavaleiro do túmulo usar ganha os efeitos de uma arma de ataque maior +1 e uma runa de arma flamejante maior."
        },
        "LhKiB6yTEpWPWjeb": {
          "name": "Mestre de Armas",
          "description": "O cavaleiro da tumba tem acesso aos efeitos críticos de especialização de qualquer arma que empunhar."
        }
      },
      "spellcasting": {
        "nsUWHOqRbP13svY9": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "tcJuaTuMup7OTiFL": {
              "name": "Lança Divina"
            },
            "qI97PgQomWWujCSi": {
              "name": "Luz"
            },
            "IjBgtAVNEeHBHcJT": {
              "name": "Escudo"
            },
            "Jfa5sL2w8iMGij3K": {
              "name": "Distorção do Vazio"
            },
            "jzbzZlRxCutDsbzo": {
              "name": "Bola de fogo"
            },
            "AxslIlPWnGuWbeyL": {
              "name": "Escuridão arrepiante"
            },
            "CZwaMRAbFlgXKkMG": {
              "name": "Imolação Divina"
            },
            "bD3pjjB9VRt1rMvx": {
              "name": "Bola de fogo"
            },
            "l2AqamdKLnAzycam": {
              "name": "Armamento Espiritual"
            },
            "9oSpMAR5aNTNyabO": {
              "name": "Explosão de Eclipse"
            },
            "v8UD00yhAUAFqWEr": {
              "name": "Executar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sramana",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2653c000f2a399d0d60a44564769cec65eca3668c3be1fc809c6f5133d18869f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sramana",
      "description": "Sramanas, ou anjos renunciantes, existem para ajudar a libertar o penitente e aliviar seu sofrimento. Incomum para anjos com tal poder, os sramanas são extraídos exclusivamente de almas mortais compassivas e iluminadas, que muitas vezes são mais perceptivas às dores da existência mortal.\nEsses incansáveis ​​celestiais embarcam em tarefas impossíveis e trabalhos insondáveis ​​para libertar almas perdidas, abandonadas e aprisionadas nos Planos Inferiores. Isso lhes rende grande inimizade de demônios e outras entidades insensíveis, muitos dos quais tratam as almas como simples brinquedos e moeda e que ironicamente vêem os anjos renunciantes como ladrões de almas que eles \"legalmente\" enganaram, roubaram ou traficaram para seus próprios propósitos.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "diabolic": "diabólico",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "requian": "requian"
      },
      "defenses": {
        "immunities": [
          "confuso",
          "efeitos do medo"
        ],
        "resistances": [
          "mentais 15"
        ],
        "weaknesses": [
          "profano 15"
        ]
      },
      "attacks": {
        "RXPrsq35W1OLao8J": {
          "name": "Khakkhara",
          "damage": "2d6+14 contundente; 2d6 espiritual"
        },
        "vJRTF7ucTCBL0FE8": {
          "name": "Punho",
          "damage": "2d4+12 contundente; 2d6 veneno"
        }
      },
      "actions": {
        "zaw89bSueOHMuqVp": {
          "name": "Preste atenção aos acorrentados",
          "description": "O sramana pode detectar criaturas penitentes que desejam expiar seus erros, criaturas com o traço vinculado à alma e gemas da alma como um sentido impreciso com um alcance de 120 pés (36 metros)."
        },
        "WDcV1XeZnUVVZkzi": {
          "name": "Voto de resgate de almas",
          "description": "Um sramana pode usar o teletransporte interplanar para se teletransportar para perto de uma criatura verdadeiramente penitente, criatura vinculada à alma ou gema da alma da qual ele tenha conhecimento. Se o fizerem, eles não precisarão de uma chave planar e chegarão a [[/r 1d20]] milhas de distância do alvo. Eles também podem se teletransportar para o Nirvana ou The Boneyard sem uma chave planar."
        },
        "UTkJ0P5OYZTADiTI": {
          "name": "Aura de Renúncia",
          "description": "100 pés (30 metros). Criaturas verdadeiramente penitentes na aura do sramana são afetadas por um magia Santuário CD 35. Se qualquer criatura dentro da aura realizar uma ação hostil, o santuário termina apenas para aquela criatura, e não para as outras criaturas na aura.\nAlém disso, as gemas da alma na aura não podem ser ingeridas, consumidas ou usadas de outra forma. Uma criatura que tentar fazer isso fica Enjoada 1, a menos que obtenha sucesso em um teste de resistência (fortitude, dc:37)."
        },
        "9Sn7yLhuEZDvcoJ5": {
          "name": "Abrigar o sofrimento",
          "description": "Frequência uma vez por dia\nEfeito O sramana joga o xale de suas vestes no ar, onde ele se expande para proteger o sofrimento. Cada criatura verdadeiramente penitente em um @Template[type:emanation|distance:100] é afetada por um magia de Invisibilidade, e a área é afetada pelo magia campo da vida, embora afete apenas criaturas penitentes e criaturas ligadas à alma. Esses efeitos duram 1 rodada, mas podem ser sustentados por até 1 hora."
        }
      },
      "spellcasting": {
        "NUDVETO85g5ht2Zj": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "Dr5t2Ppbbl7PpwnX": {
              "name": "Atordoamento"
            },
            "kF6H5hVmVEwMqP6A": {
              "name": "Lança Divina"
            },
            "bQEf9nzBel7k1Xtn": {
              "name": "Luz"
            },
            "3jo6eKsLz0cdOuwV": {
              "name": "Mensagem"
            },
            "4MYpCNWavi3EUNvn": {
              "name": "Chicote de vitalidade"
            },
            "9PIHHfGcDtfwZGYT": {
              "name": "Truespeech (constante)"
            },
            "qbilLFh8leOlHvVq": {
              "name": "Calma"
            },
            "sRWos0O3FGNpFqXR": {
              "name": "Limpar Aflição"
            },
            "6jgPP5shTJH9RikN": {
              "name": "Dissipar Magia"
            },
            "DcdNkKWvbA1TJbNW": {
              "name": "Decreto Divino"
            },
            "lS0fIxJVXOOLcU7v": {
              "name": "Curar"
            },
            "mQqp2kZCCYELqfrB": {
              "name": "Teletransporte Interplanar (à vontade; veja voto de resgate de almas)"
            },
            "grGIl9ny2C2cQdgk": {
              "name": "Selo Planar"
            },
            "39Z8RFBIsANZPsll": {
              "name": "Enviando"
            },
            "pgAWQpov84JsMdkO": {
              "name": "Mente Clara"
            },
            "e5sCEBnOYD0CNh9M": {
              "name": "Inspiração Divina"
            },
            "MB4WtZlHB9pgUp6J": {
              "name": "Momento de Renovação"
            },
            "yLQuKxgQefWyg6b2": {
              "name": "Identificar"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:totum-font",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:987b49c5732b42766840759ece675a0f3717960758abf1ded1acb7a5bfe937f9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fonte Totum",
      "description": "Antes dos mortais, das fadas ou mesmo dos gênios, os totum fonts foram as primeiras criaturas nascidas de seis elementos indivisos e harmoniosos. Das fontes surgiram novos filhos elementais, que ajudaram os deuses nos muitos atos de criação que se seguiriam.\nFontes de Um\nSem acesso ao equilíbrio de todos os seis planos elementares, uma fonte totum torna-se fraturada e inundada num único elemento. A maioria foi curada quando os Planos do Metal e da Madeira retornaram, mas algumas dessas chamadas “fontes de um” ainda vagam pelo universo, agitadas e confusas.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "muan": "Muan",
        "petran": "petran",
        "pyric": "pírico",
        "sussuran": "sussuran",
        "talican": "talicão",
        "thalassic": "talássico"
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "5qI56K40B6cMYP6B": {
          "name": "Gavinha",
          "damage": "3d8+16 contundente"
        }
      },
      "actions": {
        "YhorKWgwXzwXz2AU": {
          "name": "magias Constantes",
          "description": ""
        },
        "bIS9IsfR2Wy7PUbO": {
          "name": "Visão Geral",
          "description": ""
        },
        "6jxyDBpb2x7C2JA0": {
          "name": "Sintonia Elemental",
          "description": "Uma fonte totum está sempre sintonizada com um único elemento (ar, terra, fogo, metal, água ou madeira), representado por qual de suas faces aponta para frente. Eles podem mudar esta sintonização para o elemento de sua escolha como uma ação única, ou como uma ação livre quando rolam iniciativa."
        },
        "1n9k078q6gxydfeF": {
          "name": "Ataque reativo",
          "description": "Requisitos A fonte está sintonizada com ar, fogo ou água."
        },
        "pry9MdVyexuOUvrc": {
          "name": "Bloco de Escudo",
          "description": "Requisitos A fonte está em sintonia com terra, metal ou madeira."
        },
        "uKSTQdiuwk2rpKI3": {
          "name": "Fortaleza de Briar",
          "description": "Requisitos A fonte está em sintonia com a madeira\nEfeito Cada criatura dentro de 20 pés (6 metros) deve ser bem sucedida em um teste de resistência (fortitude, dc:36) ou ficará Lentidão 1 por 1 minuto. Quando uma criatura já desacelerada pelo Forte de Briar falha em seu teste de Fortitude, ela fica petrificada por 1 minuto, mas se transforma em madeira em vez de pedra."
        },
        "5aqL37am6uZDDExB": {
          "name": "Brilho da Chama",
          "description": "Requisitos A fonte está sintonizada para disparar\nEfeito A fonte voa 30 pés (9 metros) e explode em uma Erupção Elemental de fogo."
        },
        "weiKEUOM5w2SKK6a": {
          "name": "Erupção Elemental",
          "description": "A fonte explode em uma cacofonia de cor e energia. Cada criatura em um @Template[type:emanation|distance:20] sofre 9d6[concussão|options:area-damage] de dano (teste (reflexo, dc:36, básico) de salvamento). A explosão causa dano de concussão, a menos que a fonte esteja sintonizada com ar (dano de eletricidade), fogo (dano de fogo), metal (dano cortante) ou madeira (dano perfurante). A Erupção Elemental ganha a característica correspondente ao elemento ao qual a fonte está sintonizada."
        },
        "v7e31VyI11uoKFuH": {
          "name": "Sepultamento",
          "description": "Requisitos A fonte está sintonizada com a terra e sua última ação foi um ataque de gavinha bem-sucedido\nEfeito A fonte tenta um teste de Atletismo para Agarrar o alvo do Golpe."
        },
        "U9ICRuaHWewJCe1F": {
          "name": "Maré Transbordante",
          "description": "Requisitos A fonte está sintonizada com a água\nEfeito Ondas elementais surgem ao redor da fonte, criando uma Erupção Elemental torrencial e empurrando criaturas na área 20 pés (6 metros) (ou 10 pés (3 metros) em um teste de resistência bem-sucedido)."
        },
        "lBdIDuoG6bSzpien": {
          "name": "Agitação Serrilhada",
          "description": "Frequência uma vez por rodada\nRequisitos A fonte está sintonizada com metal\nEfeito A fonte ataca com dois golpes de gavinha, cada um visando uma criatura diferente ao seu alcance. Esses ataques causam dano cortante."
        },
        "fxsJ34YgM0FuF582": {
          "name": "Carga Tempestuosa",
          "description": "Requisitos A fonte está sintonizada com o ar\nEfeito A fonte voa 60 pés (18 metros) e faz um golpe de gavinha contra uma criatura que não tenha atacado neste turno."
        }
      },
      "spellcasting": {
        "VkdqeQwtIcXnQ1xR": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "kVxmANoNzOHGHSkF": {
              "name": "Truespeech (constante)"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-adult-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8cdf0e27dc3a21549654473e25a4dacabf31607cdd54119737155ec516134290",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Réquiem (Adulto, Feiticeiro)",
      "description": "Os dragões Requiem são administradores do Rio das Almas e do processo através do qual as almas chegam ao seu destino final na vida após a morte. A jornada segura de uma alma é de extrema importância para um dragão réquiem, e alguns seguirão almas individuais desde sua primeira entrada no rio até seu julgamento no Boneyard e, eventualmente, até seu local de descanso final. A maioria dos dragões de réquiem se ligam a planos específicos e pastoreiam quaisquer almas ligadas a esse plano, levando a dragões ligados a lugares como o Céu ou o Inferno, embora esses dragões nunca jurem lealdade verdadeira a esses planos. Dragões réquiem enchem seus covis ao longo do Rio das Almas – retalhos de arquitetura sombria resgatados de outros planos – com registros inestimáveis ​​e lembranças de grandes realizações.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "lifesense-imprecise-90": "lifesense-impreciso-90",
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
          "damage": "3d10+12 perfurante; 2d8 espiritual"
        },
        "wyJW030tjlMqlOFy": {
          "name": "Garra",
          "damage": "3d6+12 cortante; 2d8 espiritual"
        },
        "MfU1Is4nFaLYi4YN": {
          "name": "Cauda",
          "damage": "3d8+12 contundente; 2d8 espiritual"
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
          "description": "Gatilho O dragão é atingido criticamente por um ataque\nEfeito O dragão resiste ao afrouxamento de sua própria alma, evitando alguns danos. O dragão ganha resistência 15 a todos os danos contra o ataque desencadeador."
        },
        "O3ebBljtcItTfmVr": {
          "name": "Respiração Condenadora",
          "description": "A energia da Forja da Criação irrompe da boca do dragão, causando 12d8[spirit|options:area-damage] de dano em um @Template[type:line|distance:90] (check (reflex, dc:36, basic, options:area-effect) save). Criaturas mortas-vivas que falharem no salvamento também devem ter sucesso em um teste (vontade, dc:36, opções:efeito de área,infligir:condenado) no salvamento ou se tornarão Condenado 1. Se o alvo já estiver condenado, o valor de Condenado aumenta em 1 (até um máximo de Condenado 4). O dragão não pode usar Sopro Dooming novamente por [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rodadas}."
        },
        "pVA84K2nKuClLYVw": {
          "name": "Escudo da Alma",
          "description": "Frequência uma vez por dia\nEfeito O dragão réquiem usa sua essência vital para criar um escudo de energia espiritual ao redor de uma criatura dentro de 60 pés (18 metros). O escudo cria uma ligação entre o dragão e a criatura com os efeitos de Compartilhar Vida, exceto que o efeito não termina independentemente da distância e permanece por 1 hora. Além disso, a criatura ganha resistência 5 a danos físicos e espirituais que se aplicam à metade do dano que recebe. O dragão pode Dispensar o efeito."
        },
        "kg9gkNmFCXXyWBwQ": {
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hyakume",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f434561c3eee00337ab23708f2aa3c1639b00e77c0d378d05b82668b227ab6a5",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Hyakume",
      "description": "Centenas de olhos vermelhos aparecem sob as camadas carnudas da pele de um hyakume. Essas aberrações gigantescas cobiçam o conhecimento e fazem de tudo para manter o que sabem para si mesmas; eles destruirão os scriptoria que invadiram e queimarão os livros que leram para garantir que nenhuma outra alma aprenda seu conteúdo. Embora os hyakume ocasionalmente troquem informações valiosas para obter maior conhecimento, eles podem enganar seus alvos para que revelem mais do que deveriam. O mais assustador de tudo é a capacidade do hyakume de roubar memórias e apagar qualquer conhecimento de sua existência das mentes de suas vítimas.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum"
      },
      "defenses": {
        "immunities": [
          "confuso"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": []
      },
      "attacks": {
        "932SeoqZMbbYqt5y": {
          "name": "Punho",
          "damage": "3d10+10 contundente"
        }
      },
      "actions": {
        "tTnz8eIS2szDD8xT": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "UzPZylqMruAqCelG": {
          "name": "Mestre da tradição",
          "description": "Um hyakume pode usar sua habilidade Conhecimento Bárdico para Recordar Conhecimento sobre qualquer tópico, e ele conhece qualquer idioma comum a uma área onde passou um dia ou mais."
        },
        "dwpXKTApBk1iRGDA": {
          "name": "magias à vontade",
          "description": ""
        },
        "CG2fHRYx81XjnU2x": {
          "name": "Visão Geral",
          "description": ""
        },
        "Lv4CaV9bwzOZ43lA": {
          "name": "+2 Status para todos os salvamentos vs.",
          "description": ""
        },
        "G2BywEyW2KKDmpDr": {
          "name": "Cegueira leve",
          "description": ""
        },
        "zVW5acTWePSgdNpP": {
          "name": "Sonda ocular",
          "description": "Frequência uma vez por dia\nEfeito Até seis olhos do hyakume se destacam do corpo do hyakume. Cada olho tem CA 26, PV 1 e velocidade de voo de 40 pés (12 metros).\nO hyakume pode ver através de todas as sondas oculares. Eles podem mover as sondas em direções separadas usando uma única ação de Sustentação.\nUm hyakume não pode ter mais do que seis sondas oculares ativas por vez; usar essa habilidade para criar mais faz com que o olho ou os olhos mais distantes murchem e morram.\nO hyakume pode lançar magias de toque através de suas sondas oculares e pode fazer ataques corpo a corpo através deles. Além disso, o hyakume pode roubar memórias através de uma sonda ocular usando uma única ação, tocando o alvo com o olho."
        },
        "ozUjEXpOPJFvZ7Fb": {
          "name": "Palma Dispersora",
          "description": "Uma criatura atingida pelo golpe de punho do hyakume deve tentar um teste de resistência (vontade, dc:36, opções:inflige:atordoado). A criatura fica temporariamente imune até o início do próximo turno.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura fica atordoada 1.\nFalha A criatura fica atordoada 2.\nFalha Crítica A criatura fica Atordoada 3 e o hyakume pode usar Roubar Memórias no alvo como parte desta ação."
        },
        "rPY3emvJzyMgoloI": {
          "name": "Roubar memórias",
          "description": "O hyakume usa sua mente e tenta roubar memórias de uma criatura dentro de 30 pés (9 metros).\nO alvo deve ter sucesso em um teste de resistência (vontade, dc:40, opções:infligir:estupefato) ou ficará Estupefato 2 e terá algumas de suas memórias roubadas. O hyakume aprende algumas das memórias do alvo (escolhidas pelo Mestre), que são então perdidas para o alvo."
        }
      },
      "spellcasting": {
        "ygF0hGdv5uKOVQRh": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "7dNu0OBZ5L4fhVob": {
              "name": "Atordoamento"
            },
            "F4piXTHur8dvObas": {
              "name": "Detectar magia"
            },
            "q6HhPmZQpy505CQc": {
              "name": "Leia aura"
            },
            "LS1hjl2ovv8uVRgE": {
              "name": "Voar (à vontade)"
            },
            "frNfMothmdoHrJRi": {
              "name": "Hipercognição (à vontade)"
            },
            "q0bHQYUE8SPJD5QP": {
              "name": "Anel da Verdade (à vontade)"
            },
            "HjplePALWef0fRFd": {
              "name": "Dissipar Magia"
            },
            "wId7hAqgqYpSw6oJ": {
              "name": "Mindlink (à vontade)"
            },
            "481nb1RTINDMhQ7L": {
              "name": "Charme"
            },
            "cAhQ2d59wgYNt7rE": {
              "name": "Desaparecimento"
            },
            "Z2U3Xs8KLAZiNY3H": {
              "name": "Mente Oculta"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:marrmora",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c07d805db5d2b73a4ae994aaaaf50fd9b18c0925e4c235cbf8adcadc097f98f7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mármora",
      "description": "No Primeiro Mundo, os marrmoras vivem em terras selvagens arruinadas, perpetuamente açoitadas pelo fogo, e raramente, ou nunca, viajam para outro lugar. Quando um incêndio devasta uma região selvagem do Universo e resulta na morte de outras fadas, os marrmoras podem ser arrastados através da fronteira planar para se deleitarem com a destruição resultante. Eles procuram reacender o fogo que os atraía, reunir e alimentar-se dos restos carbonizados daqueles que morreram lá dentro (particularmente os corpos das fadas mortas), embora sintam saudades de casa se passarem muito tempo longe do Primeiro Mundo. Eles estão sobrecarregados por uma raiva caprichosa, mas persistente, e são infalivelmente cruéis. Embora sejam capazes de negociação e interação inteligente, quase nunca negociam de boa fé e normalmente interagem com os outros apenas como um meio de espalhar de forma mais eficiente sua devastação ardente.\nA aparência retorcida de uma marmorra evoca a aparência de uma árvore arbórea cuja casca foi transformada em carvão. Eles têm rostos quase inexpressivos e mãos terminando em garras longas e afiadas. Sua carne quebrada parece madeira queimada em carvão, crivada de rachaduras que ainda brilham com um calor prejudicial. Eles deixam um rastro de cinzas por onde andam, e tufos de fumaça saem de seus corpos. Embora os marrmoras apreciem a visão de qualquer floresta e seus habitantes assando em suas fogueiras cuidadosamente curadas, há poucas coisas que trazem mais prazer às fadas monstruosas do que a visão de criaturas vegetais inteligentes cozinhando até ficarem crocantes.",
      "size": "Médio",
      "senses": {
        "low-light-vision": "visão na penumbra"
      },
      "languages": {
        "common": "comum",
        "elven": "elfo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "fogo"
        ],
        "resistances": [
          "físico 10, exceto corte"
        ],
        "weaknesses": [
          "ferro frio 15"
        ]
      },
      "attacks": {
        "pvqYJHUkKVxUx3Q2": {
          "name": "Garra",
          "damage": "3d6+14 cortante; 3d6 fogo; 1d6 fogo"
        },
        "6xKgrVRYAjGEO0p7": {
          "name": "Jato de chama",
          "damage": "6d6 fogo; 2d6 fogo"
        }
      },
      "actions": {
        "iKbhKQt4aD8JDvDd": {
          "name": "Absorver Chama",
          "description": "Gatilho A marrmora é alvo de um magia ou efeito de fogo, ou está na área de um efeito de fogo\nEfeito A marrmora é curada pelo dano de fogo, recuperando Pontos de Vida iguais à metade do dano que o efeito de fogo teria causado."
        },
        "EYtHIPWgwGTdjCBp": {
          "name": "Fascínio da Chama",
          "description": "30 pés (9 metros). Uma criatura que entre ou comece seu turno na emanação desta aura deve tentar um teste de resistência (vontade, dc:33). Independentemente do resultado do teste de resistência, a criatura fica temporariamente imune por 1 minuto.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura perde qualquer resistência ao fogo por 1 rodada.\nFalha A criatura perde qualquer resistência ao fogo por 1 hora.\nFalha Crítica A criatura perde qualquer resistência ao fogo por 1 hora e ganha fraqueza 15 ao fogo pela mesma duração."
        },
        "TOzSzGQn4MrKg3wy": {
          "name": "Incendiando Assalto",
          "description": "Requisitos A marrmora não está sob efeito do Escudo de Fogo\nEfeito A marrmora faz um golpe de garra. Se acertar, ele pode lançar imediatamente uma de suas magias inatas de escudo de fogo disponíveis como uma ação livre."
        }
      },
      "spellcasting": {
        "XjTpzsxbFyurBJJ5": {
          "name": "magias Inatos Primordiais",
          "category": "inato",
          "spells": {
            "dtdBFIEoGg6dm5n8": {
              "name": "Ignição"
            },
            "XSv2hPFHmN0PJobU": {
              "name": "Escudo de Fogo"
            },
            "9CQFMTKYUvlMVWPC": {
              "name": "Bola de fogo"
            },
            "QlumVmbCd9MIKvpV": {
              "name": "Um com Plantas (à vontade; aparece como uma árvore morta e queimada)"
            },
            "uuCxv76DCQ2YKPrG": {
              "name": "Forma Elemental (somente elemental do fogo)"
            },
            "QUjCMu0dK3ccCi2l": {
              "name": "Erupção Vulcânica"
            },
            "0wo9iJ6hrRzp3mIr": {
              "name": "Muralha de Fogo"
            },
            "Q06DblY6JZ4TlkdN": {
              "name": "Raio Flamejante"
            },
            "7ZHrPwXoT5JyTCJC": {
              "name": "Bola de fogo"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:clockwork-dragon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f1814f6acdcc6a1aea8df789aa26fe7866031e304801a68e62ea5163e55df8f2",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Mecânico",
      "description": "Dragões mecânicos são uma maravilha do design mecânico. Essas obras-primas poderosas têm a capacidade de voar, o que as torna versáteis e perigosas. O mecanismo de corda de um dragão mecânico é mais eficiente do que o de outros mecanismos de relógio, permitindo-lhe reutilizar parcialmente a energia gerada pelo bater de suas asas. Criar um dragão mecânico requer não apenas uma compreensão avançada do design mecânico, mas também um maior estoque de recursos raros, já que seu corpo requer reforço sólido. Como resultado, a maioria dos dragões mecânicos possui fortificação adamantina. Criar um dragão mecânico sem adamantina é inteiramente possível, embora tais dragões sejam normalmente menores e mais frágeis.\nMáquinas intrincadas e complexas, os mecanismos de relógio são construídos com cuidado por engenheiros altamente qualificados. Embora sua criação envolva alguma magia, eles são principalmente mecânicos, repletos de engrenagens ajustadas com precisão e molas trabalhando em conjunto.\nA robusta mola principal de um relógio deve ser enrolada para fornecer a energia necessária para alimentar o dispositivo. Alguns mecanismos de relógio maiores contêm uma série de molas para diferentes membros, cada uma precisando ser enrolada. O artesão de um relógio cria uma chave de metal exclusiva enquanto constrói o relógio; dar corda ao relógio geralmente envolve inserir a chave na parte traseira da máquina e girar no sentido horário. Mecanismos de relógio maiores exigem maior força para girar a chave e normalmente têm chaves maiores para permitir mais torque - alguns até acomodando uma equipe de enroladores em vez de um indivíduo. Programar um relógio requer tanto a chave quanto o conhecimento para configurar o programa corretamente, informação geralmente reservada ao criador ou proprietário do relógio.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [
          "físico 15, exceto adamantino, orichalcum"
        ],
        "weaknesses": [
          "eletricidade 15",
          "oricalco 15"
        ]
      },
      "attacks": {
        "uCxQUNy75OANDWsm": {
          "name": "Mandíbulas Adamantinas",
          "damage": "3d12+17 perfurante"
        },
        "SU3ySHGYIBWN3dgx": {
          "name": "Garra Adamantina",
          "damage": "3d8+17 cortante"
        },
        "YSVbN2hohx9XI8OH": {
          "name": "Cauda",
          "damage": "3d12+15 contundente"
        },
        "lcYKbUtg1W8w9cul": {
          "name": "Asa",
          "damage": "2d10+15 perfurante"
        }
      },
      "actions": {
        "v2RqXgBeNgkZ0DtA": {
          "name": "Conclusão",
          "description": "1 semana, [[/act disable-device dc=35]]{DC 35 Thievery}, espera\nPara que um relógio funcione, ele deve ser acionado com uma chave única por outra criatura. Isso leva 1 minuto. Uma vez ferido, ele permanece operacional pelo período de tempo listado, geralmente 24 horas, após o qual ele se torna inconsciente do que está ao seu redor e não pode agir até que seja ferido novamente. As habilidades de alguns relógios exigem que eles gastem parte do tempo operacional restante. Eles não podem gastar mais do que têm e desligar imediatamente quando tiverem 0 tempo restante. Se não estiver claro quando um relógio deu corda pela última vez, a maioria dos guardiões do relógio dá corda em todos os seus relógios em um horário definido, normalmente às 8h.\nUm mecanismo de relógio que lista o modo de espera em sua entrada de encerramento pode entrar no modo de espera como uma atividade de 3 ações. Seu tempo operacional não diminui em espera, mas ele pode sentir o que está ao seu redor (com uma penalidade de -2 na Percepção). Ele não pode agir, com uma exceção: quando percebe uma criatura, ele pode sair do modo de espera como reação (jogando iniciativa se apropriado).\nUma criatura pode tentar Desabilitar um Dispositivo para desacelerar o relógio (com uma CD listada na entrada de finalização). Para cada sucesso, o mecanismo perde 1 hora de tempo operacional. Isso pode ser feito mesmo se o relógio estiver no modo de espera."
        },
        "Q9b50evzwuGvfkAB": {
          "name": "Autodestruição",
          "description": "Um dragão mecânico deve usar esta reação, a menos que seja especificamente programado de outra forma por seu criador.\nGatilho O dragão mecânico é reduzido a 0 Pontos de Vida.\nEfeito O dragão para com um guincho e emite um som constante e alto. No início do que seria seu próximo turno, o dragão explode, causando 12d10[piercing|options:area-damage] de dano em um @Template[emanation|distance:40] (check (reflex, dc:37, basic, options:area-effect) save).\nUma criatura adjacente pode cancelar a sequência de autodestruição obtendo sucesso em um teste (roubo, dc:37, características:ação:desabilitar-um-dispositivo) para Desabilitar um Dispositivo."
        },
        "2PoHFE6FWRaWarJD": {
          "name": "Respire óleo",
          "description": "O dragão mecânico respira um spray de óleo flamejante que causa 16d6[fogo|opções:dano de área] de dano em um salvamento de @Template[cone|distance:40] (verificação (reflexo, dc:37, básico, opções:efeito de área)). As criaturas que falham em seus testes ficam cobertas de óleo em chamas e recebem 2d6[persistente,fogo]. O dragão mecânico não pode usar Breathe Oil novamente por 2 rodadas."
        },
        "Lt0Vd3S5Hji79WEW": {
          "name": "Frenesi Dracônico",
          "description": "O dragão mecânico faz dois golpes de garra e um golpe de asa em qualquer ordem."
        },
        "fZUt506WBOAg0Mrm": {
          "name": "Cauda lança",
          "description": "O dragão mecânico ataca com a ponta afiada da cauda.\nEle dá um golpe de cauda contra cada criatura em um @Template[line|distance:20], rolando a jogada de ataque uma vez e aplicando o resultado a cada alvo. Qualquer criatura atingida sofre 4d6[sangramento] ((2*4d6)[sangramento] em um acerto crítico). Isso conta como dois ataques para a penalidade de ataque múltiplo do dragão."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:thousand-thieves",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:f93fa89052b1d980191b5c5415f635994986d6b745cbe0b80273e227df2eafe0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mil Ladrões",
      "description": "Boa ajuda é difícil de encontrar. Para um ladrão mestre incapaz de encontrar cúmplices competentes, às vezes a única maneira de executar o assalto perfeito envolve tornar-se uma guilda inteira de pequenas criaturas. Aqueles que se transformam dessa forma propositalmente favorecem criaturas fugitivas, como centopéias ou aranhas. Ocasionalmente, milhares de ladrões se formam quando uma comunidade de ratos de carga descobre o corpo de um canalha morto e briga por seus ganhos ilícitos. Esses striders de enxame usam sua forma de enxame para entrar em casas, cofres e outros alvos com facilidade.\nTodas as criaturas vivas eventualmente se tornam alimento para vermes. No entanto, se uma criatura perece dominada por uma emoção avassaladora ou por assuntos inacabados, sua carne pode ficar infundida com essas obsessões ou uma simples recusa em morrer, infectando quaisquer detritívoros que se alimentem do corpo. À medida que se alimentam, os invertebrados despertam para um tipo de inteligência coletiva, incluindo algumas das memórias e motivações da criatura morta. Depois que o corpo é despido, os vermes se aglomeram e se entrelaçam para recriar a forma da criatura morta a partir de milhares de corpos se contorcendo. Esses renascidos são conhecidos como striders do enxame.\nEmbora muitos peregrinos do enxame sejam criações acidentais, alguns raros mortais transformam-se propositalmente em peregrinos do enxame através de rituais poderosos. Na maioria das vezes, esse processo envolve preparar especialmente um túmulo com muitos necrófagos e encantar o local com magia oculta para ancorar sua alma até que ela possa viver dentro do enxame. Através da transformação, esses striders de enxame intencionais buscam o poder de escapar de qualquer defesa ou reivindicar a imortalidade virtual de uma horda em constante regeneração, assim como um strider de enxame pode reconstituir sua forma até mesmo a partir de um único verme. No entanto, a transformação deixa inevitavelmente cicatrizes na criatura – muitas vezes causando distanciamento emocional, a desintegração de velhos tabus e um sentido dissociado do eu, agora que uma mente se tornou mil. Em seu estado transformado, até mesmo o mais bem-intencionado strider do enxame pode abraçar a vilania e perder qualquer aparência de seu antigo eu ao longo de muitos anos.",
      "size": "Médio",
      "senses": {
        "darkvision": "visão no escuro",
        "tremorsense-imprecise-30": "tremorsensível-impreciso-30"
      },
      "languages": {
        "aklo": "aklo",
        "common": "comum",
        "sakvroth": "sakvroth",
        "shadowtongue": "língua das sombras"
      },
      "defenses": {
        "immunities": [
          "precisão",
          "mente de enxame"
        ],
        "resistances": [
          "físico 15",
          "veneno 15"
        ],
        "weaknesses": [
          "dano de área 15",
          "dano por respingo 15"
        ]
      },
      "attacks": {
        "GU4Q4UFy48K2VKc3": {
          "name": "Punhal",
          "damage": "3d4+10 perfurante"
        },
        "dqO6BYT5YThRRefe": {
          "name": "Punhal",
          "damage": "3d4+10 perfurante"
        },
        "8Fvnvd29iGaeZIat": {
          "name": "Punho",
          "damage": "1d4+10 contundente"
        },
        "zuF02O6IU88TUX0x": {
          "name": "Dardo Verme",
          "damage": "3d8+10 perfurante"
        }
      },
      "actions": {
        "u8lh2MtWPiZxW0on": {
          "name": "Visão Geral",
          "description": ""
        },
        "KVceACqUJB6k5v8X": {
          "name": "Mente de Enxame",
          "description": ""
        },
        "L7BMNqkZf001E15N": {
          "name": "Desincorporar",
          "description": "Quando o strider do enxame é reduzido a 0 HP, suas criaturas constituintes entram em colapso, espalhando-se pelo chão sob seu espaço e em cada quadrado adjacente. Se pelo menos uma das criaturas fugir, o strider do enxame pode eventualmente se formar novamente ao longo de 1d10 dias (potencialmente mais em áreas onde há poucos invertebrados). Os invertebrados espalhados devem ser destruídos dentro de 1 rodada para destruir o enxame de strider permanentemente. Os invertebrados têm uma reserva coletiva de 55 HP e a mesma CA, salvamentos, imunidades, resistências e fraquezas do strider do enxame. Os invertebrados não podem realizar ações, mas escapam automaticamente assim que a rodada termina. A critério do Mestre, meios inteligentes de capturar ou eliminar as criaturas podem ser suficientes para destruir o strider do enxame."
        },
        "2Ok2vWdBm4BjHLEp": {
          "name": "Resquícios Aderidos",
          "description": "Os ataques corpo a corpo e de longo alcance de um enxame feitos contra alvos dentro do primeiro alcance de sua arma depositam vermes mordedores no alvo, causando 4d4[persistente,perfurante] de dano."
        },
        "popSVdfV08eHfnOB": {
          "name": "Desenhe insetos",
          "description": "O strider do enxame atrai mais artrópodes do ambiente ao seu redor para reconstituir parte de seu corpo danificado. Eles recuperam 20 HP. A critério do Mestre, o strider do enxame não recupera HP em áreas onde não há artrópodes suficientes para invocar."
        },
        "lNIR47S5eBHtSl56": {
          "name": "Delírio Líquido",
          "description": "Teste de salvamento (fortitude, dc:37)\nDuração Máxima 6 rodadas\nEstágio 1 4d6 veneno e Estupefato 1 (1 rodada)\nEstágio 2 4d6 veneno e Estupefato 2 (1 rodada)\nEstágio 3 4d6 veneno, estupefato 2 e fascinado por um objeto aleatório (1 rodada)\nEstágio 4 Inconsciente sem teste de Percepção para acordar (1 rodada)"
        },
        "tI1dJSROzpmaj85D": {
          "name": "Mudança acelerada",
          "description": "Os mil ladrões voltam a ser um enxame usando Swarm Getaway, Esgueira-se até sua velocidade, retoma sua forma normal e se esconde. Este movimento não desencadeia reações."
        },
        "uP9xscLX0m4ArvxQ": {
          "name": "Ataque furtivo",
          "description": "Os Golpes dos Mil Ladrões causam 3d6 de dano de precisão adicional às criaturas Desprevenidas."
        },
        "uj8XzA07UkJAmKoz": {
          "name": "Injeção contorcida",
          "description": "O strider do enxame avança. Se eles terminarem seu movimento compartilhando um espaço com uma criatura, eles causarão 6d6[perfurante] de dano à criatura, com um teste (reflexo, dc:37, básico) e expondo o alvo ao delírio líquido. O strider do enxame pode Tocar, Escalar, Voar ou Nadar em vez de Caminhar se tiver o tipo de movimento correspondente."
        },
        "oPeB6Pdk7r4yWjKg": {
          "name": "Fuga do Enxame",
          "description": "Os mil ladrões desmoronam em um enxame disforme de suas criaturas constituintes. Eles deixam cair todos, exceto até 3 volumes de objetos segurados, usados ​​ou carregados em sua posse.\nNesta forma, os mil ladrões não podem usar ações de ataque e não podem lançar magias, mas podem se mover através de áreas pequenas o suficiente para que suas criaturas constituintes caibam sem precisar Apertar. Eles podem usar a mesma ação para se unirem de sua forma de enxame à sua forma normal.\nÀ medida que o enxame se move, os mil ladrões carregam esses objetos se eles conseguirem passar pelos espaços pelos quais o enxame se move. Os mil ladrões doam automaticamente qualquer um dos objetos que desejam quando se reformam. Se os mil ladrões estiverem ocultos, Swarm Getaway não revela sua localização."
        }
      },
      "spellcasting": {}
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sumbreiva",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8dfa3d8981adb14efb9017cf0afd25865889f90a71d7eec804fd5aefc5345d96",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Sumbreiva",
      "description": "Sumbreivas são os caçadores imparáveis ​​do Vazio, rastreando e destruindo outras criaturas em seu plano por esporte e prática. Ocasionalmente, eles passam por uma fenda ou são trazidos ao Universo através de um círculo de ligação, onde coletam almas vivas para exibi-las como troféus.\nOs Sumbreivas se reúnem em Night Lodges, onde treinam e exibem seus troféus de alma, que aparecem como tufos flutuantes de energia azul. Quanto mais formidável for a alma, mais intenso será o brilho azul que dela emana. Sumbreivas em lojas periodicamente atacam o Universo em uma Caçada Noturna e competem para ver quem consegue trazer de volta os troféus de alma mais brilhantes. O vencedor da Caçada Noturna lidera o alojamento até a próxima caçada. Os Alojamentos Noturnos são classificados uns contra os outros pelas realizações dos caçadores dentro deles. Todos os Sumbreivas desejam capturar uma alma poderosa o suficiente para ganhar uma colocação na Loja do Crepúsculo, reservada para as verdadeiras almas e caçadores de elite.",
      "size": "Grande",
      "senses": {
        "greater-darkvision": "visão no escuro maior",
        "scent-imprecise-30": "faro impreciso 30 pés (9 metros)"
      },
      "languages": {
        "aklo": "aklo",
        "necril": "necril"
      },
      "defenses": {
        "immunities": [
          "efeitos de morte",
          "drenado"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "hWM8J9YJMUURQXfY": {
          "name": "Lâmina de Caça Sumbreiva",
          "damage": "3d8+16 perfurante"
        },
        "vXx9ZSWSzAucpg0C": {
          "name": "Lâmina de Caça Sumbreiva",
          "damage": "3d8+16 perfurante"
        },
        "jd4ffYFTnRXJeEfO": {
          "name": "Chicote das Sombras",
          "damage": "3d4+16 contundente"
        }
      },
      "actions": {
        "n5SMJ7fIX77egWnc": {
          "name": "Maior Visão no Escuro",
          "description": ""
        },
        "j3AK1LWXtiagAIyq": {
          "name": "O triunfo do caçador",
          "description": "Gatilho O sumbreiva mata uma criatura\nEfeito O sumbreiva solta um uivo triunfante e arrepiante. Cada inimigo em um @Template[type:emanation|distance:30] deve ter sucesso em um teste (irá, dc:36) salvar ou ficará Amedrontado 3 (e Fugindo enquanto estiver assustado em uma falha crítica)."
        },
        "2mnzn4Sx8qOvTr4k": {
          "name": "Ataque reativo",
          "description": ""
        },
        "Y4GClSLqvM0MGVCw": {
          "name": "Cura do Vazio",
          "description": ""
        },
        "MTVrcjdLgjaPD6H9": {
          "name": "Reivindique o troféu",
          "description": "O sumbreiva reivindica a alma de uma criatura que matou no último minuto. Isso funciona como Seize Soul, exceto que nenhuma safira preta é necessária e a alma é transformada em uma luz azul brilhante chamada troféu de alma. Qualquer um que matar o sumbreiva pode libertar a alma de qualquer troféu de alma tocando-o e falando a palavra \"liberdade\" em qualquer idioma."
        },
        "Y1NE1hlPc2lmLYWh": {
          "name": "Brutalidade da Huntblade",
          "description": "A lâmina de caça do sumbreiva causa 2d8 de dano de precisão adicional a criaturas Drenadas, Assustadas ou Desprevenidas."
        },
        "Bjp4Tko6mlGX7oM4": {
          "name": "Dreno de chicote",
          "description": "Requisitos O sumbreiva tem uma criatura agarrada com seu chicote de sombra\nEfeito A criatura agarrada deve ser bem sucedida em um teste de resistência (fortitude, dc:38) ou será Drenada 2 (Drenada 3 em uma falha crítica). Se a criatura já estiver drenada, isso aumenta seu valor drenado, até um máximo de Drenado 4."
        },
        "tXrcZ9afNeAHkpPT": {
          "name": "Agarrar Melhorado",
          "description": ""
        }
      },
      "spellcasting": {
        "H7qIdDk2j4NoA9yi": {
          "name": "magias Arcanos Inatos",
          "category": "inato",
          "spells": {
            "g92lZ9mt568bGxGw": {
              "name": "Escuridão"
            },
            "BI2rPArLKCEebrVE": {
              "name": "Ligação à Terra"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:bythos",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:1b178c830b2d111a63cd81589b30e043edd17e9657373c643790684a6b8e7a8d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bythos",
      "description": "O bythos é um guardião do espaço e do tempo e sempre procura aqueles que fazem mau uso da magia planar e temporal. Um bythos é uma criatura aproximadamente humanóide com quatro braços e um corpo feito de nuvens rodopiantes e névoa. Apesar da aparência, seu corpo parece pedra seca. Um bythos procura paradoxos causados ​​por viajantes planares ou dimensionais irresponsáveis ​​e repara brechas onde as barreiras entre os planos se tornaram finas ou danificadas. Se os mortais responsáveis ​​permanecerem na área e não puderem ser convencidos a cessar suas atividades, o bythos não terá escrúpulos em removê-los. Usando sua habilidade de manipular o tempo, um bythos pode fazer com que um oponente morra rapidamente de velhice à medida que o tempo acelera ao seu redor ou fazer com que um alvo desapareça do tempo e do espaço.",
      "size": "Grande",
      "senses": {
        "darkvision": "visão no escuro"
      },
      "languages": {},
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "espírito 15"
        ]
      },
      "attacks": {
        "aNHpJbgvbOZz2Kpc": {
          "name": "Punho",
          "damage": "3d8+16 contundente; 2d8 frio"
        }
      },
      "actions": {
        "52OH24WzpzdT3ptJ": {
          "name": "Prevendo",
          "description": "Quando um bythos transmite informações, ele o faz sem palavras, por meio de projeções psíquicas. Isto atua como telepatia com um alcance de 100 pés (30 metros), mas é compreensível para todas as criaturas, independentemente de terem ou não um idioma.\nO significado para não-aeons pode ser vago e muitas vezes misterioso. Um bythos pode usar essa habilidade para se comunicar perfeitamente com qualquer outro aeon no mesmo plano."
        },
        "duUBSQ13tI7iVahr": {
          "name": "+1 Status para todos os salvamentos vs.",
          "description": ""
        },
        "v1Nae4WDwZunhsHt": {
          "name": "Regeneração 15 (Desativada pelo Espírito)",
          "description": ""
        },
        "Ai8J0A4OuhkDr7Cx": {
          "name": "Olhar Confuso",
          "description": "30 pés (9 metros). Uma criatura que termina seu turno na aura deve tentar um teste de resistência (vontade, dc:34, opções:efeito de área,infligir:confuso). Se falhar, ele ficará Confuso por 1 rodada (ou [[/gmr 1d4 #rounds]]{1d4 rodadas} em caso de falha crítica)."
        },
        "x5lmNBtvBd1z0Azh": {
          "name": "Reversão Temporal",
          "description": "Acionador O bythos falha ou falha criticamente em uma verificação\nFrequência uma vez por dia\nEfeito O bythos rola novamente o teste de ativação e obtém o melhor resultado."
        },
        "4PafOhYr090tdIQE": {
          "name": "Ataques de envelhecimento",
          "description": "Os bythos desferem dois golpes de punho contra um único alvo. Se ambos os Golpes acertarem, o alvo tenta um teste de resistência (fortitude, dc:37, opções:inflige:desajeitado,inflige:drenado,inflige:enfraquecido). Criaturas que não ficam mais fracas com a idade ou que não envelhecem são imunes (a critério do Mestre).\nSe uma criatura ficar desajeitada 4, drenada 4 e debilitada 4 devido a Golpes de Envelhecimento, ela morre de velhice.\nSucesso A criatura não é afetada.\nFalha A criatura se torna Desajeitada 1, Drenada 1 e Debilitada 1, ou aumenta cada uma dessas condições em 1. Este efeito é cumulativo com outros golpes de envelhecimento daqueles, até um máximo de desajeitado 4, drenado 4 e debilitado 4.\nFalha Crítica Como falha, mas a criatura fica Desajeitada 2, Drenada 2 e Debilitada 2, ou aumenta essas condições em 2."
        },
        "WPlqW6SIzbL8jscs": {
          "name": "Olhar Focado",
          "description": "O bythos concentra seu olhar em uma criatura que pode ver dentro de 30 pés (9 metros). O alvo deve tentar uma defesa contra o olhar confuso do bythos. Um bythos não pode usar esta habilidade contra a mesma criatura mais de uma vez por turno."
        },
        "Qgjku7yO52q21NCG": {
          "name": "Agitação Temporal",
          "description": "O bythos dá quatro golpes com os punhos. Sua penalidade de ataque múltiplo aumenta normalmente a cada ataque."
        },
        "bBQMy1lr5xW6rBgj": {
          "name": "Golpe Temporal",
          "description": "O bythos toca uma criatura ou objeto para deslocá-lo do tempo. O alvo tenta um teste de salvamento (fortitude, dc:37, opções:efeito de dano,inflige:lentidão).\nSucesso Crítico O alvo não é afetado.\nSucesso O tempo flui em torno do alvo; o alvo fica lento 1 por 1 rodada.\nFalha O alvo desaparece do momento presente e reaparece no mesmo local [[/gmr 1d4 #rounds]]{1d4 rounds} mais tarde, como se nenhum tempo tivesse passado para isso. Se uma criatura ou objeto ocupar esse espaço quando o alvo retornar, o alvo aparecerá no espaço disponível mais próximo de sua localização original.\nFalha Crítica Como falha, mas o alvo fica Lento 1 por [[/gmr 1d4 #rounds]]{1d4 rounds} extras após retornar."
        }
      },
      "spellcasting": {
        "xoV74Ad4ZTLkT5re": {
          "name": "magias Divinos Inatos",
          "category": "inato",
          "spells": {
            "fHXgvepJIvBNCf0d": {
              "name": "Tether Planar (à vontade)"
            },
            "vclxLzAcHsqMb2Hy": {
              "name": "Lento"
            },
            "o3SBPtudj8EOx6tQ": {
              "name": "Pressa"
            },
            "i8rrNITUp2EBQomq": {
              "name": "Teletransporte Interplanar"
            },
            "xtFJ6D3ynW8fWsLO": {
              "name": "Selo Planar"
            },
            "f3vr26g0eMikP4g5": {
              "name": "Amarração Planar"
            },
            "on6R2h7L5PDyMX3G": {
              "name": "Augúrio (à vontade)"
            },
            "vF7klbtipuQKo2EQ": {
              "name": "Teleporte"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-ancient",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e400c59ce465a968dabd9ffb3e376d3c235c01236adfa96903692a28f0c77dbb",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Sussurrante (Antigo)",
      "description": "Os dragões sussurrantes são ávidos colecionadores de rumores e segredos que passam séculos aprimorando suas redes de informações e relacionamentos. Eles geralmente fazem isso não com a intenção de reter a informação sobre os outros ou de usá-la para suas próprias maquinações, mas simplesmente porque o processo de aprendizagem e coleta de informações é gratificante. Seus tesouros são escassos em comparação com os de outros dragões, pois eles guardam seus verdadeiros tesouros – segredos – em suas mentes.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "confuso",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "wvf12gsmaiIEZNk8": {
          "name": "Maxilas",
          "damage": "3d12+15 perfurante"
        },
        "vfwwJaezS2MAmsRg": {
          "name": "Garra",
          "damage": "3d10+15 cortante"
        },
        "cdWBM7kdsVKs9q9W": {
          "name": "Cauda",
          "damage": "3d10+15 contundente"
        }
      },
      "actions": {
        "RewnHFknAi7tSXI5": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "zkcQGrvQXeO0d4YV": {
          "name": "+2 para Sentir Motivo",
          "description": ""
        },
        "eyJ8okEtlxlLWhjy": {
          "name": "Rede de Informação",
          "description": "O dragão pode tentar um teste de Sociedade para Recordar Conhecimento no lugar de um teste para Coletar Informações, recordando informações de informantes anteriores."
        },
        "o5snVqE0HFhxfgMS": {
          "name": "magias Constantes",
          "description": ""
        },
        "vSiPTgWIPTPTQIaI": {
          "name": "+2 Status para todos os salvamentos vs. Oculto",
          "description": ""
        },
        "VnvkdDxkW7wfBMjT": {
          "name": "Solução Diplomática",
          "description": "Acionar a iniciativa Dragon Rolls\nEfeito O dragão atinge todos os inimigos que pode ver dentro de @Template[emanation|distance:60]{60 pés (18 metros)} com Calm aumentado para um Rank igual à metade do nível do dragão arredondado para cima (verificar (vontade, dc:35) salvar). O dragão não precisa Sustentar este efeito, mas se o dragão realizar qualquer ação hostil contra os afetados, ele quebra o efeito para todas as criaturas."
        },
        "XZUptOpkSx0PYtkI": {
          "name": "Sussurro Distrativo",
          "description": "Gatilho O dragão é alvo de um ataque\nEfeito Uma voz misteriosa sussurra algo desconcertante no ouvido da criatura desencadeadora, infligindo uma penalidade de circunstância de -2 ao ataque desencadeador.\nEfeito: Sussurro Distrativo"
        },
        "WdFNthO0BdxIqruL": {
          "name": "Respiração de Cogitação",
          "description": "O dragão libera um miasma confuso, causando 15d6[mental|options:area-damage] de dano em um @Template[type:cone|distance:50] (check (will, dc:37, basic, options:area-effect,inflicts:stupefied) save). Uma criatura que falhe no teste fica Estupefata 1 (Estupefada 2 em caso de falha crítica) por 1 minuto. O dragão não pode usar Sopro de Cogitação novamente por [[/gmr 1d4 #Recharge Sopro de Cogitação]]{1d4 rodadas}."
        },
        "foIbgbTavh92IEGM": {
          "name": "Frenesi Dracônico",
          "description": "O dragão faz dois golpes de garra e um golpe de cauda em qualquer ordem."
        },
        "gnFWINeBp8o39lnC": {
          "name": "Momento Dracônico",
          "description": "O dragão recarrega seu Sopro de Cogitação sempre que consegue um acerto crítico com um Golpe."
        },
        "EZmRWrf1EQnbLdow": {
          "name": "Roubar Conhecimento",
          "description": "O dragão arranca um fragmento de conhecimento da mente de uma criatura dentro de 60 pés (18 metros), escolhendo uma habilidade para afetar. A criatura deve tentar um teste de resistência (vontade, dc:35).\nSucesso A criatura não é afetada.\nFalha No minuto seguinte, a criatura sofre uma penalidade de -1 em testes usando aquela habilidade, e o dragão recebe um bônus de status de +1 por usar aquela habilidade.\nFalha Crítica Como falha, mas a penalidade é –2 e o bônus é +2."
        },
        "MuGx1WSbRysKWzyR": {
          "name": "Sussurros de pensamento",
          "description": "Frequência uma vez por minuto\nEfeito O dragão envia sua mente em busca dos pensamentos dos outros, afetando todas as criaturas dentro de 60 pés (18 metros) com Leitura de Mente (xeque (vontade, dc:37))."
        },
        "dWk0sE2yMPmzHdY2": {
          "name": "Revele o segredo",
          "description": "O dragão investiga a mente de uma criatura dentro de 60 pés (18 metros) para vasculhar em busca de segredos, descobrindo algo que a criatura acharia embaraçoso ou vergonhoso, a menos que obtivesse sucesso em um teste de resistência (vontade, dc:37, opções:inflige:assustado). O alvo fica Amedrontado 1 e não pode reduzir sua condição de medo por 1 minuto ou até que o dragão revele o segredo. Como reação quando a criatura afetada tenta um teste, o dragão pode revelar seu segredo para desconcertá-la, exigindo que ela role duas vezes e obtenha o resultado mais baixo; este é um efeito de infortúnio."
        }
      },
      "spellcasting": {
        "hQpLecGIr5JQkFUk": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "HKxrPd7BmHbJHUzU": {
              "name": "Atordoamento"
            },
            "WRO85FOUCRQYw8f6": {
              "name": "Mensagem"
            },
            "iBK9DfO7gl7b2LHG": {
              "name": "Incorporar mensagem"
            },
            "bFBjTjzbnNzg2hlz": {
              "name": "Clariaudiência (à vontade)"
            },
            "gTsBfiveHO30gIiq": {
              "name": "Leitura da Mente"
            },
            "oSegsy2nlB1nIiYd": {
              "name": "Anel da Verdade"
            },
            "uN0n5eW8uwlWZT33": {
              "name": "Clarividência (à vontade)"
            },
            "1vcENX05gySjee84": {
              "name": "Sonda Mental"
            },
            "Ir9t7e5MS8myj2x5": {
              "name": "Retrocognição"
            },
            "3gTrRmpHmJp3nAXr": {
              "name": "Charme"
            },
            "tQtN5r13akaj0cmQ": {
              "name": "Mente Oculta (Constante)"
            },
            "isUZZ0SGjSZpuk1r": {
              "name": "Sugestão"
            }
          }
        }
      }
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-ancient-spellcaster",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d0231799a0fc164eb8f2e54db167e824670a243a5c006fe07eda6f0b1f45383b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dragão Sussurrante (Antigo, Feiticeiro)",
      "description": "Os dragões sussurrantes são ávidos colecionadores de rumores e segredos que passam séculos aprimorando suas redes de informações e relacionamentos. Eles geralmente fazem isso não com a intenção de reter a informação sobre os outros ou de usá-la para suas próprias maquinações, mas simplesmente porque o processo de aprendizagem e coleta de informações é gratificante. Seus tesouros são escassos em comparação com os de outros dragões, pois eles guardam seus verdadeiros tesouros – segredos – em suas mentes.",
      "size": "Enorme",
      "senses": {
        "darkvision": "visão no escuro",
        "scent-imprecise-60": "faro impreciso 60 pés (18 metros)"
      },
      "languages": {
        "common": "comum",
        "draconic": "dracônico",
        "empyrean": "empíreo",
        "fey": "feérico"
      },
      "defenses": {
        "immunities": [
          "confuso",
          "paralisado",
          "dormir"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": {
        "wvf12gsmaiIEZNk8": {
          "name": "Maxilas",
          "damage": "3d12+15 perfurante"
        },
        "vfwwJaezS2MAmsRg": {
          "name": "Garra",
          "damage": "3d10+15 cortante"
        },
        "cdWBM7kdsVKs9q9W": {
          "name": "Cauda",
          "damage": "3d10+15 contundente"
        }
      },
      "actions": {
        "grzbAxCj4fn2b21c": {
          "name": "Telepatia 100 pés (30 metros)",
          "description": ""
        },
        "zkcQGrvQXeO0d4YV": {
          "name": "+2 para Sentir Motivo",
          "description": ""
        },
        "eyJ8okEtlxlLWhjy": {
          "name": "Rede de Informação",
          "description": "O dragão pode tentar um teste de Sociedade para Recordar Conhecimento no lugar de um teste para Coletar Informações, recordando informações de informantes anteriores."
        },
        "o5snVqE0HFhxfgMS": {
          "name": "magias Constantes",
          "description": ""
        },
        "vSiPTgWIPTPTQIaI": {
          "name": "+2 Status para todos os jogos salvos vs.",
          "description": ""
        },
        "VnvkdDxkW7wfBMjT": {
          "name": "Solução Diplomática",
          "description": "Acionar a iniciativa Dragon Rolls\nEfeito O dragão atinge todos os inimigos que pode ver dentro de @Template[emanation|distance:60]{60 pés (18 metros)} com Calm aumentado para um Rank igual à metade do nível do dragão arredondado para cima (verificar (vontade, dc:35) salvar). O dragão não precisa Sustentar este efeito, mas se o dragão realizar qualquer ação hostil contra os afetados, ele quebra o efeito para todas as criaturas."
        },
        "XZUptOpkSx0PYtkI": {
          "name": "Sussurro Distrativo",
          "description": "Gatilho O dragão é alvo de um ataque\nEfeito Uma voz misteriosa sussurra algo desconcertante no ouvido da criatura desencadeadora, infligindo uma penalidade de circunstância de -2 ao ataque desencadeador."
        },
        "WdFNthO0BdxIqruL": {
          "name": "Respiração de Cogitação",
          "description": "O dragão libera um miasma confuso, causando 15d6[mental|options:area-damage] de dano em um @Template[type:cone|distance:50] (check (will, dc:37, basic, options:area-effect,inflicts:stupefied) save). Uma criatura que falhe no teste fica Estupefata 1 (Estupefada 2 em caso de falha crítica) por 1 minuto. O dragão não pode usar Sopro de Cogitação novamente por [[/gmr 1d4 #Recharge Sopro de Cogitação]]{1d4 rodadas}."
        },
        "EZmRWrf1EQnbLdow": {
          "name": "Roubar Conhecimento",
          "description": "O dragão arranca um fragmento de conhecimento da mente de uma criatura dentro de 60 pés (18 metros), escolhendo uma habilidade para afetar. A criatura deve tentar um teste de resistência (vontade, dc:35).\nSucesso A criatura não é afetada.\nFalha No minuto seguinte, a criatura sofre uma penalidade de -1 em testes usando aquela habilidade, e o dragão recebe um bônus de status de +1 por usar aquela habilidade.\nFalha Crítica Como falha, mas a penalidade é –2 e o bônus é +2."
        },
        "MuGx1WSbRysKWzyR": {
          "name": "Sussurros de pensamento",
          "description": "Frequência uma vez por minuto\nEfeito O dragão envia sua mente em busca dos pensamentos dos outros, afetando todas as criaturas dentro de 60 pés (18 metros) com leitura de mente (verifique (vontade, dc:37))."
        },
        "dWk0sE2yMPmzHdY2": {
          "name": "Revele o segredo",
          "description": "O dragão investiga a mente de uma criatura dentro de 60 pés (18 metros) em busca de segredos, descobrindo algo que a criatura acharia embaraçoso ou vergonhoso, a menos que obtivesse sucesso em um teste (vontade, dc:37) de resistência. O alvo fica Amedrontado 1 e não pode reduzir sua condição de medo por 1 minuto ou até que o dragão revele o segredo. Como reação quando a criatura afetada tenta um teste, o dragão pode revelar seu segredo para desconcertá-la, exigindo que ela role duas vezes e obtenha o resultado mais baixo; este é um efeito de infortúnio."
        }
      },
      "spellcasting": {
        "cRcIL2SXgdemjq4p": {
          "name": "magias Ocultos Preparados",
          "category": "preparado",
          "spells": {
            "oGxN8Dptzr9qHsee": {
              "name": "Comando"
            },
            "O88kR5J5SE3DST5O": {
              "name": "Atordoamento"
            },
            "PRAM9jvMAKa68okG": {
              "name": "Detectar magia"
            },
            "uisHs6IeQnrIWNsQ": {
              "name": "Disfarce Mágico"
            },
            "4Ot2vYWzmA3lnkbT": {
              "name": "Ala Proibida"
            },
            "cv6TM8d2MVxDKoxP": {
              "name": "Mensagem"
            },
            "ytfJdvX4cXWlusMU": {
              "name": "Link mental"
            },
            "agKADALez9cbUYML": {
              "name": "Mão Telecinética"
            },
            "Y99tw7IkPX5NpOHR": {
              "name": "Mente Clara"
            },
            "xinTbmaOHepnxb0G": {
              "name": "Forma humanóide"
            },
            "OFvSS0hmtTpAmVNo": {
              "name": "Veja o invisível"
            },
            "7CfPUs5wTKkyivI9": {
              "name": "Mensagem de sonho"
            },
            "QXpvAcJPi47LPfv5": {
              "name": "Hipercognição"
            },
            "3hfm7HDMQW3tWHXn": {
              "name": "Anel da Verdade"
            },
            "hxn7aBYboqdZTH3z": {
              "name": "Confusão"
            },
            "xTKfznWFdJqZoz9l": {
              "name": "Detectar Vidência"
            },
            "wkDHW4ofDUQB7Tfs": {
              "name": "Reescrever memória"
            },
            "X0JTvsLlcuEY5Lmi": {
              "name": "Olho Escoteiro"
            },
            "LGyGFsYCV5U2dqKw": {
              "name": "Enviando"
            },
            "UVQzVd09ULPvZGZu": {
              "name": "Pulso Sináptico"
            },
            "7K6gat6xrjtRFWhq": {
              "name": "Vidência"
            },
            "FxTMotIP7dCEMEbG": {
              "name": "Teleporte"
            },
            "9EciU0Za6QYRd2Yv": {
              "name": "Convicção Zelosa"
            },
            "3RUWVgFu14tz0Yeo": {
              "name": "Teletransporte Interplanar"
            },
            "LmDyY53UhFb1cwjl": {
              "name": "Imagem do projeto"
            },
            "OsHnypzznqczTE2r": {
              "name": "Retrocognição"
            }
          }
        },
        "hQpLecGIr5JQkFUk": {
          "name": "magias Ocultos Inatos",
          "category": "inato",
          "spells": {
            "HKxrPd7BmHbJHUzU": {
              "name": "Atordoamento"
            },
            "WRO85FOUCRQYw8f6": {
              "name": "Mensagem"
            },
            "iBK9DfO7gl7b2LHG": {
              "name": "Incorporar mensagem"
            },
            "bFBjTjzbnNzg2hlz": {
              "name": "Clariaudiência (à vontade)"
            },
            "gTsBfiveHO30gIiq": {
              "name": "Leitura da Mente"
            },
            "oSegsy2nlB1nIiYd": {
              "name": "Anel da Verdade"
            },
            "uN0n5eW8uwlWZT33": {
              "name": "Clarividência (à vontade)"
            },
            "1vcENX05gySjee84": {
              "name": "Sonda Mental"
            },
            "Ir9t7e5MS8myj2x5": {
              "name": "Retrocognição"
            },
            "3gTrRmpHmJp3nAXr": {
              "name": "Charme"
            },
            "tQtN5r13akaj0cmQ": {
              "name": "Mente Oculta (Constante)"
            },
            "isUZZ0SGjSZpuk1r": {
              "name": "Sugestão"
            }
          }
        }
      }
    }
  }
]
