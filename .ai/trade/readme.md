# Módulo: Trade

## Propósito

Permitir a transferência de itens entre inventários de `CampaignActor` pertencentes à mesma campanha.

## Estado atual

A rota existente ainda é um esqueleto de evento entre usuários. A implementação persistente dependerá da API de inventário.

## Regra central

* A origem e o destino são `CampaignActor`.
* Ambos pertencem à mesma `Campaign`.
* O usuário autenticado precisa controlar o ator de origem por meio de `CampaignMember`.
* O item transferido é uma `InventoryEntry` ou parte de sua `quantity`.
* O VTT Core não interpreta o JSON do item.

## Fora do escopo atual

* Interface de negociação.
* Aceite bilateral.
* Histórico persistente.
* Conversão monetária.
* Regras específicas de equipamento.
