# prompt-spells.md

# Objetivo

Implementar a infraestrutura completa de **Spells** do QuestHub.

O comportamento esperado deve ser equivalente ao já existente para:

* Bestiário
* Itens

A fonte inicial será o conteúdo Pathfinder utilizado pelo Foundry VTT: pf2e-master.

O sistema deve nascer preparado para múltiplos sistemas de RPG.

---

# Papel

Você atua como Engenheiro de Software Sênior responsável pela arquitetura do QuestHub.

Antes de implementar qualquer código:

* mapear como funciona o módulo do Bestiário;
* mapear como funciona o módulo de Itens;
* identificar padrões;
* identificar duplicações;
* identificar oportunidades de generalização.

O objetivo não é copiar código.

O objetivo é criar uma arquitetura reutilizável.

---

# Regras obrigatórias

Nunca implementar lógica de Pathfinder dentro do módulo genérico.

Todo conhecimento específico de Pathfinder deve permanecer em:

packages/game-system-pathfinder-2e

ou no módulo equivalente do sistema.

O QuestHub apenas conhece o conceito genérico:

Spell

Jamais:

Spell Rank Pathfinder

Spell Tradition Pathfinder

Arcane

Divine

Occult

Primal

Essas informações pertencem ao adapter do sistema.

---

# Livro de Magias

O Mestre deve possuir um Livro de Magias.

Esse livro funciona exatamente como:

Bestiário

Itens

Ou seja:

consulta

pesquisa

paginação

filtros

seleção

visualização

A origem dos dados deve ser o projeto Pathfinder utilizado pelo Foundry: pf2e-master.

---

# Estrutura

Separar claramente:

Spell Definition

Spell Catalog

Prepared Spell

Character Spell (futuro)

Spell Effect (futuro)

Spell Casting (futuro)

Neste primeiro momento implementar apenas o catálogo.

Não implementar conjuração.

Não implementar dano.

Não implementar regras.

---

# Arquitetura

Criar contratos genéricos.

Exemplo:

SpellDefinition

SpellSearch

SpellSummary

SpellDetails

SpellRepository

SpellCatalogProvider

Depois Pathfinder implementará:

PathfinderSpellCatalogProvider

No futuro:

DndSpellCatalogProvider

---

# Dados do catálogo

O catálogo deve preservar informações importantes.

Exemplos:

nome

nível

escola

traços

tempo de conjuração

alcance

alvos

área

duração

descrição

componentes

origem

systemData

Informações específicas do sistema devem permanecer dentro de:

systemData

Nunca espalhadas pelo domínio genérico.

---

# API

Criar endpoints semelhantes aos do Bestiário.

Pesquisar.

Paginar.

Buscar detalhes.

Filtros.

O frontend deve consumir apenas contratos genéricos.

---

# Futuro

A arquitetura deve prever:

personagens aprendendo magias

NPCs

criaturas do bestiário

spellbooks

preparação diária

slots

focus spells

rituais

efeitos persistentes

templates de área

integração com combate

integração com iluminação

integração com fog

integração com animações

Nenhuma dessas funcionalidades deve ser implementada agora.

Apenas a arquitetura deve suportá-las.

---

# Plano obrigatório

Antes de escrever código:

1. Mapear arquitetura atual.
2. Mapear módulo do Bestiário.
3. Mapear módulo de Itens.
4. Identificar código duplicado.
5. Propor arquitetura reutilizável.
6. Listar etapas de implementação.

Caso encontre conflitos ou ambiguidades:

PARE.

Explique claramente.

Apresente alternativas.

Aguarde decisão antes de modificar a arquitetura.

Nunca tome decisões estruturais importantes sem confirmação.

---

# Integridade de dados

Não se preocupar com migrações compatíveis.

O projeto roda apenas localmente.

É permitido remodelar tabelas, contratos e estruturas para obter uma arquitetura mais limpa e preparada para múltiplos sistemas.
