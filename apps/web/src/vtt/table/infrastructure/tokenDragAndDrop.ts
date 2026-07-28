import { questhubTokenDragType } from '../config/constants'

type TokenDataTransferWriter = {
  effectAllowed: string
  setData: (format: string, data: string) => void
}

type TokenDataTransferReader = {
  types: readonly string[]
  getData: (format: string) => string
}

export function writeTokenDragData(dataTransfer: TokenDataTransferWriter, tokenId: string) {
  dataTransfer.effectAllowed = 'move'
  dataTransfer.setData(questhubTokenDragType, tokenId)
}

export function hasTokenDragData(dataTransfer: Pick<TokenDataTransferReader, 'types'>) {
  return Array.from(dataTransfer.types).includes(questhubTokenDragType)
}

export function readTokenDragData(dataTransfer: TokenDataTransferReader) {
  if (!hasTokenDragData(dataTransfer)) return null
  return dataTransfer.getData(questhubTokenDragType).trim() || null
}
