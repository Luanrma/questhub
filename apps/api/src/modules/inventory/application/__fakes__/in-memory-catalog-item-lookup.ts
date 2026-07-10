import type { CatalogItemLookupPort, CatalogItemSnapshot } from '../ports/catalog-item-lookup'

export function createInMemoryCatalogItemLookup() {
  const items = new Map<string, CatalogItemSnapshot>()

  function seedCatalogItem(system: string, catalogItemId: string, item: CatalogItemSnapshot) {
    items.set(`${system}:${catalogItemId}`, item)
  }

  const port: CatalogItemLookupPort = {
    findItem(system, catalogItemId) {
      return items.get(`${system}:${catalogItemId}`) ?? null
    },
  }

  return { port, seedCatalogItem }
}
