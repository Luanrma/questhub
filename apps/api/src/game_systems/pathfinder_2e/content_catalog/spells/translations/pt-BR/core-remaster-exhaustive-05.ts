import type { Pathfinder2eContentTranslation } from '../../../records'

export const PATHFINDER_2E_EXHAUSTIVE_05_SPELLS_PT_BR: readonly Pathfinder2eContentTranslation[] = [
  {
    "contentId": "pf2e:spell:spells-srd:earthbind",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:24e5c10cf9b99c95adf7d815e89d3c052dad94dedaa3fe7b436f01e4687905ee",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ligação à Terra",
      "description": "Usando o peso da terra, você dificulta o vôo de um alvo, com efeitos baseados em seu salvamento de Fortitude. Se a criatura chegar ao solo com segurança, ela não sofrerá dano de queda.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo cai com segurança até 120 pés (36 metros).\nFalha O alvo cai com segurança até 120 pés (36 metros). Se atingir o solo, ele não poderá voar, levitar ou sair do solo por 1 rodada.\nFalha Crítica O alvo cai com segurança até 120 pés (36 metros). Se atingir o solo, ele não poderá voar, levitar ou sair do solo por 1 minuto.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura voadora",
      "duration": "varia",
      "defense": "teste de Fortitude",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bind-undead",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:697c7c18b62e8440443dac2dddf06e14c9edcfe15fc838a87d49744d2338981c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Amarrar mortos-vivos",
      "description": "Com uma palavra de poder, você assume o controle do alvo. Ele ganha a característica de lacaio. Se você ou um aliado usar qualquer ação hostil contra o alvo, a magia termina.\nEfeito da magia: Amarrar Mortos-vivos",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura morta-viva estúpida com um nível não superior à magia de amarrar mortos-vivos Rank",
      "duration": "1 dia",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clairaudience",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e30ee90a60ef0a9e0f66ca77b3a124e431599deff591d61683d6de9d35e9311a",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Clariaudiência",
      "description": "Você cria uma orelha flutuante invisível em um local dentro do alcance (mesmo que esteja fora de sua linha de visão ou linha de efeito). Ele não pode se mover, mas você pode ouvir através do ouvido, como se estivesse usando seus sentidos auditivos normais.",
      "castingTime": "1 minuto",
      "range": "500 pés (150 metros)",
      "target": "",
      "duration": "10 minutos",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:safe-passage",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:92f336ee31d452937d67a09c976865999c488a9d82cab8a83868b3396c83c887",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Passagem Segura",
      "description": "Área Seção de terreno com 3 metros de largura, 3 metros de altura e 18 metros de comprimento\nVocê torna a passagem pela área segura por um breve período de tempo. Qualquer pessoa que passe pela área ganha os seguintes benefícios contra efeitos nocivos do terreno e do meio ambiente, incluindo danos ambientais, terreno perigoso e perigos na área. A magia concede um bônus de status de +2 à CA e testes de resistência contra tais efeitos, e resistência 5 a todos os danos causados ​​por tais efeitos. Além disso, a magia evita que qualquer coisa na área que esteja propensa a desabar, como uma ponte frágil ou um teto instável, desmorone, exceto sob tensão extrema que desmoronaria uma estrutura normal desse tipo.\nA passagem segura protege apenas contra danos, não contra inconveniências, e não reduz terrenos difíceis, nem remove a condição Oculta causada por precipitação, ou algo semelhante, nem protege contra criaturas dentro da área da magia.\nEfeito da magia: Passagem Segura\nAprimorada (5º) A resistência concedida aumenta para 10, e a área pode ter 120 pés (36 metros) longa.\nAprimorada (8º) A resistência concedida aumenta para 15, e a área pode ter comprimento 500 pés (150 metros).",
      "castingTime": "3 ações",
      "range": "tocar",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada (5º) A resistência concedida aumenta para 10, e a área pode ter 120 pés (36 metros) longa.\nAprimorada (8º) A resistência concedida aumenta para 15, e a área pode ter comprimento 500 pés (150 metros)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enthrall",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9ba6cb6b6baeaaf4781f5ae524149527c17745fe8553816a5f25d37dd141b12f",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Encantar",
      "description": "Suas palavras fascinam seus alvos. Você fala ou canta sem interrupção durante todo o elenco e duração. Os alvos que percebem seu discurso ou música podem dar toda a atenção; cada alvo deve tentar um salvamento de Vontade. O Mestre pode conceder um bônus de circunstância (até um máximo de +4) se o alvo for de uma religião, ascendência ou inclinação política oposta, ou se for improvável que concorde com o que você está dizendo.\nCada criatura que estiver dentro do alcance deve tentar um salvamento quando você Sustentar a magia. Se você estiver falando, encantar ganha o traço linguístico.\nSucesso Crítico O alvo não é afetado e percebe que você tentou usar magia.\nSucesso O alvo não precisa prestar atenção, mas não percebe que você tentou usar magia (ele pode perceber que outros estão encantados).\nFalha O alvo está Fascinado por você. Ele pode tentar outro salvamento de Vontade se testemunhar ações ou discursos com os quais discorda. Se tiver sucesso, ele não fica mais fascinado e fica temporariamente imune por 1 hora. Se o alvo estiver sujeito a um ato hostil, ou se outra criatura obtiver sucesso em um teste de Diplomacia ou Intimidação contra ele, o fascínio termina imediatamente.\nFalha Crítica Como falha, mas o alvo não pode tentar um salvamento para acabar com o fascínio se discordar de você.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "todas as criaturas ao alcance",
      "duration": "sustentado",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-wind",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c826da0786d1518293f46f6e0d44d824c598c3bb97678f4d28df370947b58635",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Muralha do Vento",
      "description": "Você cria uma barreira de rajadas de vento que impede qualquer coisa que se mova através dela. A parede de ventos turbulentos tem 5 pés (1,5 metros) de espessura, 60 pés (18 metros) de comprimento e 30 pés (9 metros) de altura. A parede fica vertical, mas você pode moldar seu caminho. Embora a parede de vento distorça o ar, ela não prejudica a visão. A parede tem os seguintes efeitos.\n• Munições provenientes de ataques físicos à distância – como flechas, dardos, balas de funda e outros objetos de tamanho semelhante – não conseguem atravessar a parede. Ataques com armas de longo alcance maiores, como dardos, sofrem uma penalidade de circunstância de -2 em suas jogadas de ataque se seus caminhos passarem pela parede. Enormes armas de longo alcance e efeitos mágicos que não criam objetos físicos atravessam a parede sem penalidade.\n• A parede é um terreno difícil para criaturas que tentam se mover através dela. Gases, incluindo criaturas em Forma de Vapor, não podem atravessar a parede.\n• Uma criatura que tentar voar através da parede usando uma ação de movimento deve tentar um teste de Fortitude.\nSucesso Crítico A criatura pode se mover através da parede normalmente neste turno.\nSucesso A criatura voadora pode atravessar a parede neste turno, mas a parede é um terreno difícil.\nFalha A parede interrompe o movimento da criatura voadora e qualquer movimento restante de sua ação atual é desperdiçado.\nFalha Crítica Como falha, a criatura é empurrada 10 pés (3 metros) para longe da parede.",
      "castingTime": "3 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "duration": "1 minuto",
      "defense": "teste de Fortitude",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hypnotize",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:16f1183909516d545b474e1d7cfb2a82308ba2418e4859e8ee969f5f2af1fe0b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Hipnotizar",
      "description": "Você cria uma nuvem de padrões e cores hipnotizantes que paira no ar. As criaturas ficam deslumbradas enquanto estão dentro da nuvem. Além disso, uma criatura deve realizar um teste de resistência de Vontade se estiver dentro da nuvem quando você a conjurar, quando entrar na nuvem, quando terminar seu turno dentro da nuvem ou se usar uma ação de Procurar ou Interagir na nuvem. Uma criatura atualmente Fascinada por hipnotizar não tenta novos salvamentos.\nSucesso O alvo não é afetado.\nFalha O alvo fica fascinado pela nuvem.\nFalha Crítica O alvo é fascinado pela nuvem. Embora permaneça fascinado, não pode usar reações.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "area": "10 explosão",
      "duration": "1 minuto",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mind-reading",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e6fb2feb05147827fcfd3f349bdd79dfad6c0b18ca6e713a540d84ade266106b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Leitura da Mente",
      "description": "Com um toque mental superficial, você tenta ler a mente do alvo. Ele deve tentar um salvamento de Vontade. O alvo então fica temporariamente imune à leitura de sua mente por 1 hora.\nSucesso Crítico O alvo percebe vagos pensamentos superficiais seus quando você lança a magia.\nSucesso Você descobre se o modificador de Inteligência do alvo é maior, igual ou menor que o seu.\nFalha Você percebe vagos pensamentos superficiais do alvo quando lança a magia e descobre se a Inteligência dele é maior, igual ou menor que a sua.\nFalha Crítica Como falha, e durante a duração da magia, você pode Sustentar a magia para detectar novamente os pensamentos superficiais do alvo. O alvo não recebe nenhum salvamento adicional.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "1 rodada ou sustentada por até 1 minuto",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heroism",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ee9bfd64c90885c56be8c98c2e72ac160106648a89d6ac3e04a3f8babb047f9b",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Heroísmo",
      "description": "Você desbloqueia o heroísmo interno do alvo, concedendo-lhe um bônus de status de +1 em jogadas de ataque, testes de Percepção, testes de resistência e testes de perícia.\nAprimorada (6º) O bônus de status aumenta para +2.\nAprimorada (9º) O bônus de status aumenta para +3.\nEfeito da magia: Heroísmo",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "10 minutos",
      "heightening": "Aprimorada (6º) O bônus de status aumenta para +2.\nAprimorada (9º) O bônus de status aumenta para +3.\nEfeito da magia: Heroísmo"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-thorns",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3e5a07975e8500240e5144ffca971b47575d081f6c3ec8419b0843a26a77a7c0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Muro de Espinhos",
      "description": "Você faz crescer uma parede de arbustos espinhosos no chão. Você cria uma parede de arbustos e espinhos com 1,5 metro de espessura em linha reta até 60 pés (18 metros) de comprimento e 10 pés (3 metros) de altura. Você deve criar a parede em um espaço aberto e contínuo para que suas bordas não passem por nenhuma criatura ou objeto, ou a magia será perdida. A parede fica verticalmente. Se desejar, a parede pode ter comprimento ou altura menor. Tudo em cada lado da parede tem cobertura contra criaturas do lado oposto, e os espaços da parede são terrenos difíceis. Para cada ação de movimento que uma criatura usa para entrar em pelo menos um dos espaços da parede, aquela criatura sofre 3d4 de dano perfurante.\nCada seção de 3 x 3 metros da parede tem CA 10, Dureza 10 e 20 Pontos de Vida. É imune a acertos críticos e danos de precisão. Uma seção destruída pode ser movida livremente.\nAumentado (+1) Os Pontos de Vida de cada seção da parede aumentam em 5 e o dano perfurante aumenta em 1d4.",
      "castingTime": "3 ações",
      "range": "60 pés (18 metros)",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aumentado (+1) Os Pontos de Vida de cada seção da parede aumentam em 5 e o dano perfurante aumenta em 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:locate",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:77eed902953d575b0453b3665b8d9f2d16a1b3721cacf4a47c58621ce41c6828",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Localizar",
      "description": "Você aprende a direção do alvo (se você escolheu um objeto específico, como \"a espada da minha mãe\") ou o alvo mais próximo (se você escolheu um tipo de objeto, como \"espadas\"). Se o alvo for um objeto específico, você deve tê-lo observado diretamente com seus próprios sentidos. Se for um tipo de objeto, você ainda precisa ter uma imagem mental precisa do tipo de objeto. Se houver chumbo ou água corrente entre você e o alvo, esta magia não conseguirá localizar o objeto. Isso significa que você poderá encontrar um tipo de objeto mais distante se o mais próximo estiver atrás de chumbo ou água corrente.\nAprimorada (5º) Você pode ter como alvo uma criatura ou ancestral específico em vez de um objeto, mas você deve ter conhecido ou visto de perto a criatura ou ancestral que deseja atingir.",
      "castingTime": "10 minutos",
      "range": "500 pés (150 metros)",
      "target": "1 objeto ou tipo específico de objeto",
      "duration": "sustentado",
      "heightening": "Aprimorada (5º) Você pode ter como alvo uma criatura ou ancestral específico em vez de um objeto, mas você deve ter conhecido ou visto de perto a criatura ou ancestral que deseja atingir."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cozy-cabin",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:08295bd3b84a9124acc3c1b3e03cb5b87f4f1e03c3c748c8d3bad6e8df123b06",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Cabana aconchegante",
      "description": "Você molda uma cabine 20 pés (6 metros) de cada lado e 10 pés (3 metros) de altura. Esta cabana possui o traço de estrutura e as mesmas restrições dos itens mágicos que criam estruturas. As paredes da cabana são simples e de madeira, com pequenas janelas quadradas de vidro e uma porta de madeira. Não inclui fechadura própria, mas possui um fecho ao qual pode ser aplicada uma fechadura.\nO interior contém três camas, um penico e uma pequena lareira contendo um fogo mágico. O interior é iluminado por uma pequena luz mágica que você pode acender ou apagar à vontade usando uma ação de Sustentação. O clima dentro da cabana é confortável e permite que as criaturas dentro dela resistam às condições climáticas mais hostis, mas calor ou frio incrível, tempestades poderosas e ventos com força de furacão ou maiores destroem a cabana. Outras criaturas podem entrar e sair livremente da cabana sem danificá-la, mas se você sair da cabana, a magia termina. Você pode descartar a magia.",
      "castingTime": "1 minuto",
      "range": "30 pés (9 metros)",
      "target": "",
      "duration": "12 horas",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vampiric-feast",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0d97befa55ffc03fd4261bf99522ffece72379a81299647ccd753d82923af653",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Festa Vampírica",
      "description": "Seu toque suga a força vital de um alvo para fortalecer você. Você causa 6d6 de dano de vazio ao alvo. Você ganha Pontos de Vida temporários iguais à metade do dano de vazio que o alvo sofre (após aplicar resistências e similares). Você perde quaisquer Pontos de Vida temporários restantes após 1 minuto.\nAprimorada (+1) O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura viva",
      "duration": "",
      "defense": "teste básico de Fortitude",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:haste",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8af78a8896712c6d55fe354a128a0fea0fabe3ab38195659796c00af6fdb2818",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Pressa",
      "description": "A magia capacita o alvo a agir mais rápido. Ele ganha a condição Quickened e pode usar a ação extra a cada rodada apenas para ações de Golpe e Passo.\nAprimorada (7º) Você pode escolher até 6 criaturas.\nEfeito da magia: Aceleração",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "1 minuto",
      "heightening": "Aprimorada (7º) Você pode escolher até 6 criaturas.\nEfeito da magia: Aceleração"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:aqueous-orb",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4f92a2addfa0c6e4f3c9d5471f4bfe63c72ed81cbb3b517c833b6d79dd314c15",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Orbe Aquoso",
      "description": "Uma esfera de água 10 pés (3 metros) de diâmetro se forma em um espaço desocupado ao alcance, seja no solo ou na superfície de um líquido.\nAo lançar esta magia e cada vez que você o sustenta, você pode rolar o orbe, movendo-o até 10 pés (3 metros) ao longo do solo ou da superfície de um líquido.\nO orbe pode se mover pelos espaços de qualquer criatura ou obstáculo que não impeça o fluxo da água. Ele extingue incêndios não mágicos pelos quais se move, de tamanho ou menor, e tenta neutralizar quaisquer incêndios mágicos pelos quais se move. Se falhar em neutralizar um determinado fogo, ele não poderá neutralizar esse fogo durante a duração da magia.\nO orbe pode engolir criaturas grandes ou menores pelas quais ele se move e pode conter quantas criaturas couberem em seu espaço. O orbe pode tentar engolir a mesma criatura apenas uma vez por turno, mesmo se você o rolar no espaço de uma criatura mais de uma vez. Qualquer criatura Grande ou menor cujo espaço o orbe tente se mover pode tentar um teste de Reflexos.\nSucesso A criatura pode deixar o orbe passar (permanecendo em seu espaço ou saindo do caminho do orbe para um espaço de escolha da criatura) ou permitir-se ser empurrada na frente do orbe até o final do movimento do orbe.\nFalha A criatura é engolfada pelo orbe. Ele se move junto com o orbe e deve prender a respiração ou começar a sufocar (a menos que consiga respirar na água). Uma criatura Média ou menor engolfada e qualquer um que tente afetá-la seguem as regras normais para batalhas aquáticas. Uma criatura grande engolfada geralmente é grande o suficiente para que partes dela se projetem da água e possa sair da água. A criatura pode se libertar nadando com um teste bem-sucedido (atletismo, características: ação: natação, dc: 10) ou escapando contra sua CD de magia. Uma criatura libertada sai do espaço do orbe e pode respirar imediatamente.\nFalha Crítica Como falha, mas a criatura não pode Nadar para se libertar.",
      "castingTime": "2 ações",
      "range": "60 pés (18 metros)",
      "target": "",
      "duration": "1 minuto",
      "defense": "teste de Reflexos",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:speak-with-plants",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d30e03aaa905f7fac47c8c1fb405508c98a1138e9ccd0b316af19f0f84016d0d",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Fale com as plantas",
      "description": "Você pode fazer perguntas e receber respostas de plantas e fungos, mas a magia não os torna mais amigáveis ​​ou inteligentes do que o normal. A maioria das plantas e fungos normais tem uma visão distinta do mundo ao seu redor, por isso não reconhecem detalhes sobre as criaturas nem sabem nada sobre o mundo além de sua vizinhança imediata. Monstros astutos de plantas ou fungos tendem a ser concisos e evasivos, enquanto os menos inteligentes costumam fazer comentários fúteis.\nAprimorada (4º) A duração é de 8 horas.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "1 hora",
      "heightening": "Aprimorada (4º) A duração é de 8 horas."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:feet-to-fins",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:2693bf96d562a380c89f98ea8fc093169598562c967cf1e5f5be20490db187b9",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Pés para barbatanas",
      "description": "Os pés do alvo se transformam em nadadeiras, melhorando a mobilidade na água, mas reduzindo-a em terra. O alvo ganha uma Velocidade de natação igual à sua Velocidade normal em terra, mas sua Velocidade em terra se torna 5 pés (1,5 metros).\nAprimorada (6º) A magia dura até seus próximos preparativos diários.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura voluntária",
      "duration": "10 minutos",
      "heightening": "Aprimorada (6º) A magia dura até seus próximos preparativos diários."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chilling-darkness",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d9f1229c6930fb613429010e49fb9e8f4bf20761c42fd1ff88c87744f2b13c08",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Escuridão arrepiante",
      "description": "Você dispara um raio de escuridão totalmente frio tingido de energia profana. Faça um ataque mágico à distância. O raio causa 5d6 de dano de frio. Se o alvo tiver o traço sagrado, você causa 5d6 de dano espiritual extra.\nSucesso Crítico O alvo sofre o dobro de dano.\nSucesso O alvo sofre dano total.\nSe o raio passar através de uma área de luz mágica ou atingir uma criatura afetada pela luz mágica, a escuridão arrepiante tenta neutralizar a luz. Se você precisar determinar se o raio passa por uma área de luz, desenhe uma linha entre você e o alvo da magia.\nAprimorada (+1) O dano de frio aumenta em 2d6, e o dano espiritual contra criaturas sagradas aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura",
      "duration": "",
      "heightening": "Aprimorada (+1) O dano de frio aumenta em 2d6, e o dano espiritual contra criaturas sagradas aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fireball",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e1c8c7ff631e80c88dc8c1230d5ee7a6c87e37a540ae9dedd2783043348ad679",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Bola de fogo",
      "description": "Uma explosão de fogo estrondosa é detonada em um local designado por você, causando 6d6 de dano de fogo.\nAprimorada (+1) O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "20 explosão",
      "duration": "",
      "defense": "teste básico de Reflexos",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mad-monkeys",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:eab6f8e34cc6affde33a084d0c7f8149af5733903319dd2ea129870494af8ab1",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Macacos Loucos",
      "description": "Espíritos mágicos de macacos preenchem a área enquanto se amontoam e sobem uns sobre os outros. Como os macacos são espíritos mágicos, não podem ser atacados ou feridos. Lançar Calma ou um efeito semelhante sobre os macacos os torna dóceis, fazendo com que parem de fazer travessuras enquanto durarem os macacos loucos.\nEscolha o tipo de travessura que seus macacos cometem quando você lança a magia. Eles produzem o efeito listado para aquela travessura quando você lança a magia e na primeira vez em cada rodada quando você mantém a magia. Na primeira vez em cada rodada, quando você sustenta a magia, você pode mover a área dos macacos em 5 pés (1,5 metros).\nRoubo flagrante Os macacos tentam roubar qualquer item de uma criatura na área. Use sua magia CD - 10 como modificador de Ladrão dos macacos. A tentativa deles depende mais da distração do que da sutileza, para que a vítima saiba qual item os macacos estavam tentando pegar e se foi levado. Conseguir um item roubado dos macacos – mesmo para o conjurador – requer Roubá-lo deles ou Desarmá-los, usando sua CD de magia. Quando a magia termina, todos os itens roubados caem no chão em qualquer quadrado da área da magia que você escolher.\nRuído Estridente Os macacos gritam alto, potencialmente ensurdecendo as criaturas na área da magia. Cada criatura na área da magia deve tentar um teste de Fortitude.\nSucesso Crítico A criatura não é afetada e fica temporariamente imune por 10 minutos.\nSucesso A criatura não é afetada.\nFalha A criatura fica Ensurdecida por 1 rodada.\nFalha Crítica A criatura fica Ensurdecida por 1 minuto.\nGinástica Tumultuosa Os macacos saltam e escalam todas as criaturas na área da magia, interferindo em movimentos complexos. Cada criatura na área da magia deve tentar um teste de Reflexos.\nSucesso Crítico A criatura não é afetada e fica temporariamente imune por 10 minutos.\nSucesso A criatura não é afetada.\nFalha Durante 1 rodada, a criatura deve ter sucesso em um teste (simples, dc:5) sempre que tentar uma ação de manipulação. Se falhar neste teste, a criatura perde aquela ação.\nFalha Crítica Como falha, mas os macacos se agarram à criatura tenazmente e o efeito dura até o fim da magia, mesmo que a criatura deixe a área da magia.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "",
      "area": "5 explosão",
      "duration": "1 minuto",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:one-with-stone",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9f3c14dfbf9b0ff4824994580c102fea7af343e87ac34a66bc6ecfb979a1c6a0",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Um com pedra",
      "description": "Você pode se transformar em pedra ou fundir-se com pedra. Enquanto estiver transformado, você não pode mover ou afetar nada fora da pedra, mas pode lançar magias desde que não exijam uma linha de efeito além da pedra. Você pode dispensar esta magia.\n• Fundir com Pedra A duração da magia é de 10 minutos. Ao lançar a magia, você deve tocar uma pedra com volume suficiente para caber você e seus pertences ou a magia será interrompido. Enquanto estiver mesclado, você pode ouvir, mas não ver, o que está acontecendo fora da pedra. Se a pedra sofrer dano enquanto você estiver dentro dela, você será expulso da pedra e sofrerá 10d6 de dano. A passagem mágica expulsa você sem causar dano. A magia termina se você estiver fora da pedra.\n• Transformar-se em Pedra A duração da magia é de 8 horas. Você se torna uma pedra grande. Testes de Percepção não revelam sua verdadeira natureza, mas um teste bem-sucedido de Natureza ou Sobrevivência contra sua CD de magia revela que você parece ser uma pedra estranhamente nova na área. Enquanto estiver nesta forma, você pode observar tudo ao seu redor, usando seus sentidos normais. Como uma pedra, sua CA é 23, e apenas bônus de status, penalidades de status, bônus de circunstância e penalidades de circunstância afetam você. Quaisquer sucessos e sucessos críticos que você obtiver nos testes de Reflexos são falhas",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "10 minutos ou 8 horas",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blindness",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:ab82ed0865739286cadf75093caa6d9011bfa80d68c81edad2a1930432cefd10",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Cegueira",
      "description": "Você cega o alvo. O efeito é determinado pelo teste de Fortitude do alvo. O alvo então fica temporariamente imune por 1 minuto.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica Cego até o início do próximo turno.\nFalha O alvo fica cego por 1 minuto.\nFalha Crítica O alvo fica Cego permanentemente.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "",
      "defense": "teste de Fortitude",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:slow",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:9198532f8ea12d067847299113654a63bb41510bbc1438a325ac612aeb0e7d15",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Lento",
      "description": "Você dilata o fluxo do tempo ao redor do alvo, retardando suas ações.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo fica lento 1 por 1 rodada.\nFalha O alvo fica lento 1 por 1 minuto.\nFalha Crítica O alvo fica lento 2 por 1 minuto.\nAprimorada (6º) Você pode escolher até 10 criaturas.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "1 minuto",
      "defense": "teste de Fortitude",
      "heightening": "Aprimorada (6º) Você pode escolher até 10 criaturas."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:insect-form",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0af9a98bd9433e143ddf7a3a77dd82fcafed01cd934963fac1acc76ae03eecea",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Formulário de Inseto",
      "description": "Você imagina um bug simples e se transforma em uma forma de batalha animal Média. Ao lançar esta magia, escolha uma forma de batalha listada. Você pode decidir o tipo específico de animal (como uma joaninha ou um escaravelho para um besouro), mas isso não afeta o tamanho ou as estatísticas do formulário. Enquanto estiver nesta forma, você ganha a característica animal. Você pode dispensar esta magia.\nVocê ganha as seguintes estatísticas e habilidades, independentemente da forma de batalha escolhida:\n• CA = 18 + seu nível. Ignore a penalidade de teste e a redução de velocidade da sua armadura.\n• 10 pontos de vida temporários.\n• Visão na penumbra.\n• Um ou mais ataques específicos para a forma de batalha que você escolher, que são os únicos ataques com os quais você pode atacar. Você é treinado com eles. Seu modificador de ataque é +13 e seu bônus de dano é +2. Esses ataques são baseados na Força (para o propósito da condição Enfraquecido). Se o seu modificador de ataque desarmado for maior, você poderá usá-lo.\n• Modificador de Atletismo de +13, a menos que o seu seja maior.\nVocê também ganha habilidades específicas com base na forma escolhida:\n• Formiga\n• Velocidade 30 pés (9 metros), velocidade de subida 30 pés (9 metros);\n• Corpo a corpo 1 mandíbula, Dano 2d6 por concussão.\n• Besouro\n• Velocidade 25 pés (7,5 metros);\n• Corpo a corpo 1 mandíbula, Dano 2d10 por concussão.\n• Centopéia\n• Velocidade 25 pés (7,5 metros), velocidade de subida 25 pés (7,5 metros); visão no escuro;\n• Corpo a corpo 1 mandíbula, Dano 1d8 perfurante mais 1d4 veneno persistente.\n• Louva-a-deus\n• Velocidade 40 pés (12 metros); aroma impreciso 30 pés (9 metros);\n• Corpo a corpo 1 perna dianteira, Dano 2d8 perfurante.\n• Escorpião\n• Velocidade 40 pés (12 metros); visão no escuro, detecção de tremor imprecisa 60 pés (18 metros);\n• Corpo a corpo 1 ferrão, Dano 1d8 perfurante mais 1d4 veneno persistente;\n• Corpo a corpo 1 pinça (ágil), Dano 1d6 por concussão.\n• Aranha\n• Velocidade 25 pés (7,5 metros), velocidade de subida 25 pés (7,5 metros); visão no escuro;\n• Corpo a corpo 1 presas, Dano 1d6 perfurante mais 1d4 veneno persistente;\n• Alcance 1 teia (incremento de alcance 20 pés (6 metros)), Dano imobiliza o alvo por 1 rodada ou até que ele Escapar.\nEfeito da magia: Forma de Inseto\nAprimorada (4º) Sua forma de batalha é Grande e seus ataques têm alcance de 3 metros. Em vez disso, você ganha 15 HP temporários, modificador de ataque +16, bônus de dano +6 e Atletismo +16.\nAprimorada (5º) Sua forma de batalha é Enorme e seus ataques têm alcance de 4,5 metros. Em vez disso, você ganha 20 HP temporários, modificador de ataque +18, bônus de dano +2 e dados de dano duplos (incluindo dano persistente) e Atletismo +20.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada (4º) Sua forma de batalha é Grande e seus ataques têm alcance de 3 metros. Em vez disso, você ganha 15 HP temporários, modificador de ataque +16, bônus de dano +6 e Atletismo +16.\nAprimorada (5º) Sua forma de batalha é Enorme e seus ataques têm alcance de 4,5 metros. Em vez disso, você ganha 20 HP temporários, modificador de ataque +18, bônus de dano +2 e dados de dano duplos (incluindo dano persistente) e Atletismo +20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dream-message",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3d01a75e60c7ef30fa5e26a6ded3923e583cfc42252be86fc619dbb9ac9e924c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Mensagem de sonho",
      "description": "Você envia uma mensagem ao sonho do seu alvo. A mensagem é unidirecional, com até 1 minuto de fala (cerca de 150 palavras). Se o alvo estiver dormindo, ele receberá a mensagem instantaneamente. Caso contrário, eles o receberão na próxima vez que dormirem. Assim que eles receberem, a magia termina e você sabe que a mensagem foi enviada.\nAprimorada (4º) Você pode mirar em até 10 criaturas que você conhece pelo nome e que conheceu pessoalmente. Você deve enviar a mesma mensagem para todos eles; a magia termina para cada criatura individualmente",
      "castingTime": "10 minutos",
      "range": "planetário",
      "target": "1 criatura que você conhece pelo nome e conheceu pessoalmente",
      "duration": "até seus próximos preparativos diários",
      "heightening": "Aprimorada (4º) Você pode mirar em até 10 criaturas que você conhece pelo nome e que conheceu pessoalmente. Você deve enviar a mesma mensagem para todos eles; a magia termina para cada criatura individualmente"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hypercognition",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:105ed33d8ff1897a6857779af7bbc3da5f49b2e217f113523d33de6191f78343",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Hipercognição",
      "description": "Você cataloga e agrupa rapidamente informações relevantes para sua situação atual. Você pode usar instantaneamente até 6 ações de Recuperar Conhecimento como parte do lançamento deste magia. Para essas ações, você não pode usar nenhuma habilidade especial, reação ou ação livre que seja desencadeada quando você Recordar Conhecimento.",
      "castingTime": "1 ação",
      "range": "",
      "target": "",
      "duration": "",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mountain-resilience",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0ac36fd217069db5f305c480a165694af1ee20f0d7874ccba3360afff3ba5b87",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Resiliência da Montanha",
      "description": "A pele do alvo endurece como a pedra da encosta de uma montanha. Ganha resistência 5 a danos físicos, exceto adamantino. Cada vez que o alvo é atingido por um ataque contundente, perfurante ou cortante, a duração da resiliência da montanha diminui em 1 minuto.\nEfeito da magia: Resiliência da Montanha\nAprimorada (6º) A resistência aumenta para 10.\nAprimorada (8º) A resistência aumenta para 15.\nAprimorada (10º) A resistência aumenta para 20.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "20 minutos",
      "heightening": "Aprimorada (6º) A resistência aumenta para 10.\nAprimorada (8º) A resistência aumenta para 15.\nAprimorada (10º) A resistência aumenta para 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:weapon-storm",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:aa56a527199083a73b17c209df8894ae29357270d7bd0b94d86c6faa562cd55c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Tempestade de Armas",
      "description": "Área de cone de 30 pés ou emanação de 10 pés\nVocê balança uma arma que está segurando, e a arma se multiplica magicamente em duplicatas que atingem todas as criaturas em um cone ou em uma emanação. Esta agitação causa quatro dados de dano às criaturas na área. Este dano tem o mesmo tipo da arma e usa o mesmo tamanho de dado. Determine o tamanho do dado como se estivesse atacando com a arma; por exemplo, se você estivesse empunhando uma arma de duas mãos com as duas mãos, usaria seu dado de dano de duas mãos.\nSucesso Crítico A criatura não é afetada.\nSucesso O alvo sofre metade do dano.\nFalha O alvo sofre dano total.\nFalha Crítica O alvo sofre o dobro de dano e está sujeito ao efeito de especialização crítica da arma.\nAprimorada (+1) Adicione outro dado de dano.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "",
      "defense": "teste de Reflexos",
      "heightening": "Aprimorada (+1) Adicione outro dado de dano."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fly",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:222fe8840799cdb51ec75d9f53aeedbc191d9f037f99c5d72b737349ae0e4728",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Voar",
      "description": "O alvo pode voar alto, ganhando uma Velocidade de voo igual à sua Velocidade ou 20 pés (6 metros), o que for maior.\nEfeito da magia: Voar\nAprimorada (7º) A duração aumenta para 1 hora.",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura",
      "duration": "5 minutos",
      "heightening": "Aprimorada (7º) A duração aumenta para 1 hora."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:detect-scrying",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:b62c5628363c4723c5fe7d9a45d8dc114df7b4a19acb42f256381197dc97b6bd",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Detectar Vidência",
      "description": "Ao ler traços de auras, você detecta a presença de efeitos de vidência na área. Se detectar vidência for maior Rank do que um efeito de vidência, você ganha um vislumbre da criatura vidente e aprende sua distância e direção aproximadas.\nAprimorada (6º) A duração é até a próxima vez que você fizer seus preparativos diários.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "area": "30 emanação",
      "duration": "1 hora",
      "heightening": "Aprimorada (6º) A duração é até a próxima vez que você fizer seus preparativos diários."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfettered-movement",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:4efcf673c394c299e6ab7adc528b1dfb2c3a6573ccc6f5266bcce61ae41e5023",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Movimento desenfreado",
      "description": "Você repele efeitos que impediriam uma criatura ou retardariam seu movimento. Enquanto estiver sob o efeito deste magia, o alvo ignora efeitos que lhe dariam uma penalidade de circunstância na Velocidade. Quando eles tentam escapar de um efeito que os deixa imobilizados, agarrados ou contidos, eles são automaticamente bem-sucedidos, a menos que o efeito seja mágico e de um Rank maior que a magia movimento irrestrito.\nEfeito da magia: Movimento Livre",
      "castingTime": "2 ações",
      "range": "tocar",
      "target": "1 criatura tocada",
      "duration": "10 minutos",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rewrite-memory",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:24c97c26b0747225de19aa414d0075b07fe1a9bbc92666f71c31828fc2902709",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Reescrever memória",
      "description": "Você altera as memórias do alvo apagando uma memória, melhorando a clareza de uma memória, alterando uma memória ou adicionando uma memória falsa. O alvo pode tentar um teste de Vontade para resistir à magia.\nSucesso Crítico O alvo não é afetado e percebe que você tentou alterar sua memória.\nSucesso O alvo não é afetado, mas pensa que sua magia foi algo inofensivo em vez de reescrever a memória, a menos que identifique a magia.\nFalha Durante os primeiros 5 minutos de duração da magia, você pode Sustentar a magia para modificar uma memória uma vez a cada rodada. Ao fazer isso, você imagina até 6 segundos de memória para modificar, até um máximo de 5 minutos contínuos de memória.\nQuaisquer memórias que você alterou permanecerão alteradas enquanto a magia estiver ativo. Se o alvo sair do alcance antes dos 5 minutos terminarem, você não poderá alterar mais nenhuma memória.\nAprimorada (6º) Você pode lançar a magia em um alvo disposto a suprimir toda a memória de um tópico específico, detalhado em 50 palavras ou menos. O efeito é permanente e corrige essas omissões com uma névoa indistinta.",
      "castingTime": "2 ações",
      "range": "30 pés (9 metros)",
      "target": "1 criatura",
      "duration": "ilimitado",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada (6º) Você pode lançar a magia em um alvo disposto a suprimir toda a memória de um tópico específico, detalhado em 50 palavras ou menos. O efeito é permanente e corrige essas omissões com uma névoa indistinta."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:talking-corpse",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:e16ac3f01b3abb1c2c0b3f5e158b9ea7bba98050400d67a47533f776f315c71c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Cadáver Falante",
      "description": "Você concede ao cadáver alvo uma aparência de vida, que ele usa para responder as três perguntas feitas a ele. Esta magia invoca as memórias latentes do corpo físico em vez de invocar de volta o espírito do falecido, então o cadáver deve estar praticamente intacto para que a magia funcione. Quanto mais danos o cadáver sofreu, mais imprecisas ou fragmentadas serão suas respostas, e ele deve ter garganta e boca para falar. Se alguém já lançou esta magia no cadáver na última semana, a magia falhará automaticamente. O cadáver pode tentar um teste de Vontade para resistir a responder às perguntas usando as estatísticas da criatura original no momento da morte, com os seguintes efeitos.\nSucesso Crítico O alvo pode mentir ou se recusar a responder suas perguntas, e o espírito do alvo o assombra por 24 horas, incomodando-o e fazendo com que você não consiga descansar durante esse tempo.\nSucesso O alvo pode fornecer informações falsas ou recusar-se a responder às suas perguntas.\nFalha O alvo deve responder com sinceridade, mas suas respostas podem ser breves, enigmáticas e repetitivas. Ele ainda pode enganá-lo ou tentar protelar para que a duração da magia acabe antes que você possa fazer todas as suas perguntas.\nFalha Crítica Como falha, mas as respostas do alvo são mais diretas e menos repetitivas, embora ainda enigmáticas. É necessária uma penalidade de -2 em testes de Enganação para enganar ou enganar você.",
      "castingTime": "10 minutos",
      "range": "tocar",
      "target": "1 cadáver",
      "duration": "10 minutos",
      "defense": "teste de Vontade",
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mirage",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:0c9b7c3e66e2fdc87f17c800fbce4df6be139f057588adc453a6d50d379f1ef7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Miragem",
      "description": "Você cria uma ilusão que faz com que o terreno natural pareça, soe, sinta e cheire como um tipo diferente de terreno. Isso não disfarça nenhuma estrutura ou criatura na área.\nQualquer criatura que toque a ilusão ou use a ação Procurar para examiná-la pode tentar desacreditar da sua ilusão.\nAprimorada (5º) Sua imagem também pode disfarçar estruturas ou criar estruturas ilusórias (mas ainda não disfarça criaturas).",
      "castingTime": "10 minutos",
      "range": "500 pés (150 metros)",
      "target": "",
      "area": "50 explosão",
      "duration": "até seus próximos preparativos diários",
      "heightening": "Aprimorada (5º) Sua imagem também pode disfarçar estruturas ou criar estruturas ilusórias (mas ainda não disfarça criaturas)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telepathy",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:be98423e56b8a2ed0b7c6b236ec325edc4ea2c7f04f57ff163e722eb4789faf7",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Telepatia",
      "description": "Você pode se comunicar telepaticamente com criaturas dentro de 30 pés (9 metros). Depois de estabelecer uma conexão comunicando-se com uma criatura, a comunicação é bidirecional. Você só pode se comunicar com criaturas que compartilhem um idioma com você.\nAprimorada (6º) Você pode se comunicar telepaticamente com criaturas usando imagens mentais compartilhadas mesmo que você não compartilhe um idioma; a telepatia perde o traço linguístico.",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "duration": "10 minutos",
      "heightening": "Aprimorada (6º) Você pode se comunicar telepaticamente com criaturas usando imagens mentais compartilhadas mesmo que você não compartilhe um idioma; a telepatia perde o traço linguístico."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-wrath",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:c22108765b8f1a66e9053d994f4e122622e61799ecf731624218a9ded7af8b16",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Ira Divina",
      "description": "Você canaliza a fúria da divindade contra seus inimigos. Você causa 4d10 de dano espiritual aos inimigos na área, dependendo de seu teste de Fortitude.\nSucesso Crítico A criatura não é afetada.\nSucesso A criatura sofre metade do dano.\nFalha A criatura sofre dano total e fica Enjoada 1.\nFalha Crítica A criatura sofre dano total e fica Enjoada 2; enquanto estiver enjoado, também ficará Lento 1.\nAprimorada (+1) O dano aumenta em 1d10.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "area": "20 explosão",
      "duration": "",
      "defense": "teste de Fortitude",
      "heightening": "Aprimorada (+1) O dano aumenta em 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-fire",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:8500bfb7085d30c8f56b6fb3575fde9dd35cde2f161b9e8fd45e76ea7323c9f6",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Muralha de Fogo",
      "description": "Você levanta uma parede em chamas que queima as criaturas que passam por ela. Você cria uma parede de chamas de 1,5 metro de espessura em linha reta com até 60 pés (18 metros) de comprimento e 10 pés (3 metros) de altura, ou um anel de chama de 1,5 metro de espessura e 3 metros de raio com a mesma altura. A parede fica verticalmente em qualquer forma; se desejar, a parede pode ter comprimento ou altura menor. Tudo em cada lado da parede está escondido das criaturas do lado oposto. Qualquer criatura que atravesse a muralha ou esteja ocupando a área da muralha no início do seu turno sofre 4d6 de dano de fogo.\nAprimorada (+1) O dano de fogo aumenta em 1d6.",
      "castingTime": "3 ações",
      "range": "120 pés (36 metros)",
      "target": "",
      "duration": "1 minuto",
      "heightening": "Aprimorada (+1) O dano de fogo aumenta em 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vital-beacon",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:7e81b118a7ab8f0128c5e6835b700ccf81a0eb4b4c39d70e354ad68456f881ec",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Farol Vital",
      "description": "A vitalidade irradia de você, permitindo que outros supliquem e recebam cura. Uma vez por rodada, você ou um aliado podem usar uma ação de Interação para suplicar e impor as mãos sobre você para recuperar Pontos de Vida. Cada vez que o farol cura alguém, sua força diminui. Ele restaura (@item.Rank)d10[healing,vitality|shortLabel] Pontos de Vida para a primeira criatura, (@item.Rank)d8[healing,vitality|shortLabel] Pontos de Vida para a segunda, (@item.Rank)d6[healing,vitality|shortLabel] Pontos de Vida para a terceira, e (@item.Rank)d4[healing,vitality|shortLabel] Pontos de vida até o quarto, após o qual a magia termina. Você pode ter apenas um farol vital ativo por vez.\nEfeito da magia: Farol Vital\nAprimorada (+1) O farol restaura um dado adicional de Pontos de Vida cada vez que cura, usando o mesmo tamanho de dado dos outros naquela etapa.",
      "castingTime": "1 minuto",
      "range": "",
      "target": "",
      "duration": "até seus próximos preparativos diários",
      "heightening": "Aprimorada (+1) O farol restaura um dado adicional de Pontos de Vida cada vez que cura, usando o mesmo tamanho de dado dos outros naquela etapa."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vision-of-death",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:d81cb669cd1e84940119237936157bd8368194bc509d4eaf0169bcc9f1133052",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Visão da Morte",
      "description": "Você força o alvo a ter uma visão de sua própria morte. Recebe 8d6 de dano mental com um teste de Vontade. Se o alvo for reduzido a 0 HP por esta magia, sua visão se torna realidade e o mata instantaneamente.\nSucesso Crítico O alvo não é afetado.\nSucesso O alvo sofre metade do dano e fica Amedrontado 1.\nFalha O alvo sofre dano total e fica Amedrontado 2.\nFalha Crítica O alvo sofre o dobro de dano, fica Amedrontado 4 e foge enquanto estiver assustado.\nAprimorada (+1) O dano aumenta em 2d6.",
      "castingTime": "2 ações",
      "range": "120 pés (36 metros)",
      "target": "1 criatura viva",
      "duration": "",
      "defense": "teste de Vontade",
      "heightening": "Aprimorada (+1) O dano aumenta em 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dispelling-globe",
    "locale": "pt-BR",
    "sourceTranslatableHash": "sha256:3d7083f2adacfb07a73a5ac91ec0ef2f1f2f4fab434e3939f128e0f145be7d8c",
    "version": 1,
    "status": "MACHINE_DRAFT",
    "fields": {
      "name": "Dissipando Globo",
      "description": "Você cria um globo imóvel ao seu redor que tenta neutralizar qualquer magia de fora do globo cuja área ou alvos entrem no globo, como se o globo fosse uma magia Dissipar Magia 1 Rank menor que sua magia real Rank.\nSe a tentativa de contra-ataque for bem-sucedida, ela impede apenas a parte da magia que teria entrado no globo (portanto, se a magia também tiver alvos fora do globo, ou parte de sua área estiver além do globo, esses alvos ou aquela área serão afetados normalmente).\nVocê deve formar a esfera em um espaço aberto e contínuo, de modo que suas bordas não passem por nenhuma criatura ou objeto, ou a magia será perdida (embora as criaturas possam entrar no globo após a magia ser conjurada).",
      "castingTime": "2 ações",
      "range": "",
      "target": "",
      "area": "10 explosão",
      "duration": "10 minutos",
      "heightening": ""
    }
  }
]
