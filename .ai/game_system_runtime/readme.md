# Game System Runtime

## Objetivo

O `Game System Runtime` é a camada de execução que permite ao QuestHub oferecer automações específicas de sistemas de RPG sem inserir regras desses sistemas no VTT.

O VTT continua responsável por recursos genéricos, como campanhas, cenas, Tokens, grid, permissões, seleção, geometria, chat e persistência. Cada `game_system` fornece adaptadores que interpretam esses recursos segundo suas próprias regras.

## Problema resolvido

Sem esta fronteira, regras como Classe de Armadura, Pontos de Vida, testes de resistência, magias e áreas de efeito tenderiam a aparecer em componentes React, rotas genéricas ou módulos do VTT. Isso criaria dependências diretas de Pathfinder 2e e impediria a evolução para múltiplos sistemas.

O Runtime resolve esse problema oferecendo contratos estáveis para:

- validar e migrar dados específicos de uma ficha;
- calcular valores derivados;
- preparar e continuar ações em múltiplas etapas;
- solicitar interações genéricas ao VTT;
- receber resultados genéricos do VTT;
- produzir planos de resolução sem alterar Canvas ou banco diretamente.
- projetar recursos, indicadores e ações de um Token em DTOs visuais neutros.

## Fronteiras

### Pertence ao VTT

- campanha, cena, Token e vínculo opcional com ator;
- grid, paredes, portas e geometria;
- seleção e interseção de Tokens;
- permissões e ownership;
- persistência e comunicação em tempo real;
- renderização de destaque, templates e animações.

### Pertence ao Runtime

- ciclo de execução dos adaptadores;
- validação da versão de schema;
- migração de dados antigos;
- normalização do resultado;
- warnings de resolução;
- contratos de interação e planos de resolução.

### Pertence ao Game System

- fórmulas de CA, PV, proficiência e dano;
- significado de classe, ancestralidade, herança e divindade;
- regras de magias, saves, resistências e condições;
- interpretação dos Tokens encontrados por uma área;
- seleção das interações genéricas necessárias.

## Regra de dependência

```text
VTT Core -> contratos do Runtime <- adaptadores de Game System
```

O VTT não pode importar código de Pathfinder 2e. O adaptador Pathfinder não pode importar implementação de Token, Canvas, grid, campanha ou componentes React.

## Primeiro recorte

A primeira entrega usa a ficha Pathfinder 2e para validar a arquitetura:

1. a ficha persiste somente dados fundamentais e estado mutável;
2. o Runtime executa o adaptador Pathfinder;
3. o adaptador calcula PV máximo, CA, iniciativa, percepção, resistências e perícias;
4. o nível participa de todo bônus de proficiência treinado ou superior;
5. ancestralidade e classe fornecem os valores-base de PV;
6. herança, background e divindade permanecem registrados, mas ainda não geram Rule Elements;
7. itens equipados, armaduras, armas, talentos e condições ficam fora deste recorte.

## Personas e casos de uso

- **Jogador:** preenche as escolhas e modificadores fundamentais e visualiza os totais calculados.
- **Mestre:** consulta uma ficha coerente com o nível e, futuramente, executa ações automatizadas.
- **Mestre:** durante um encontro, consulta as ações autorizadas do Token ativo sem expor o JSON mecânico ao VTT.
- **Desenvolvedor de sistema:** implementa um adaptador sem alterar o VTT Core.

## Fora do módulo

- componentes visuais da ficha;
- autenticação e autorização HTTP;
- implementação concreta do Prisma;
- Canvas, Token, grid e Area Effect;
- conteúdo completo de compêndios;
- regras específicas de Pathfinder 2e.
