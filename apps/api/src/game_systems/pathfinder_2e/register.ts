import type { FastifyInstance } from 'fastify'
import type { GameSystemAutomationEventPublisher } from '../automation/contracts'
import { registerGameSystemTokenPresentationProvider } from '../automation/registry'
import { registerGameSystemCharacterSheetManagerProvider } from '../character-sheets'
import {
  registerGameSystemCatalogProvider,
  registerGameSystemDescriptor,
} from '../catalog'
import { registerGameSystemInventoryPolicy } from '../inventory'
import { pathfinder2eTokenPresentationProvider } from './automation/token-presentation-provider'
import { registerPathfinder2eCharacterSpellRoutes } from './character-spells/routes'
import { registerPathfinder2eCurrencyRoutes } from './currency/routes'
import { pathfinder2eCharacterSheetManagerProvider } from './character-sheet/manager-provider'
import { registerPathfinder2eCharacterSheetRoutes } from './character-sheet/routes'
import { pathfinder2eCatalogProvider } from './content_catalog/catalog-provider'
import { registerPathfinder2eContentCatalogRoutes } from './content_catalog/routes'
import { pathfinder2eGameSystemDescriptor } from './descriptor'
import { registerPathfinder2eEquipmentRoutes } from './equipment/routes'
import { registerPathfinder2eIconAssetRoutes } from './icon-assets'
import { pathfinder2eInventoryPolicy } from './inventory/policy'

let gameSystemDescriptorRegistered = false
let characterSheetManagerRegistered = false
let inventoryPolicyRegistered = false
let tokenPresentationProviderRegistered = false

export function registerPathfinder2e(
  app: FastifyInstance,
  events: GameSystemAutomationEventPublisher,
) {
  if (!gameSystemDescriptorRegistered) {
    registerGameSystemDescriptor(pathfinder2eGameSystemDescriptor)
    gameSystemDescriptorRegistered = true
  }

  if (!characterSheetManagerRegistered) {
    registerGameSystemCharacterSheetManagerProvider(
      'PATHFINDER_2E',
      pathfinder2eCharacterSheetManagerProvider,
    )
    characterSheetManagerRegistered = true
  }

  if (!inventoryPolicyRegistered) {
    registerGameSystemInventoryPolicy('PATHFINDER_2E', pathfinder2eInventoryPolicy)
    inventoryPolicyRegistered = true
  }

  if (!tokenPresentationProviderRegistered) {
    registerGameSystemTokenPresentationProvider(
      'PATHFINDER_2E',
      pathfinder2eTokenPresentationProvider,
    )
    tokenPresentationProviderRegistered = true
  }

  registerGameSystemCatalogProvider('PATHFINDER_2E', pathfinder2eCatalogProvider)
  registerPathfinder2eCharacterSheetRoutes(app, events)
  registerPathfinder2eCharacterSpellRoutes(app, events)
  registerPathfinder2eCurrencyRoutes(app)
  registerPathfinder2eContentCatalogRoutes(app)
  registerPathfinder2eEquipmentRoutes(app)
  registerPathfinder2eIconAssetRoutes(app)
}
