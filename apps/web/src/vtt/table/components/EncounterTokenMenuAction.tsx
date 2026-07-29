import { CircleMinus, Swords } from 'lucide-react'

export function EncounterTokenMenuAction({
  isMaster,
  canSend,
  selected,
  activeParticipant,
  onSend,
  onRemove,
}: {
  isMaster: boolean
  canSend: boolean
  selected: boolean
  activeParticipant: boolean
  onSend: () => void
  onRemove: () => void
}) {
  if (!isMaster) return null
  if (activeParticipant) {
    return (
      <button
        type="button"
        role="menuitem"
        disabled={!canSend}
        className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-200 transition hover:bg-red-500/10 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-45"
        onClick={onRemove}
      >
        <CircleMinus className="h-4 w-4" />
        <span>Remover do encontro</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      role="menuitem"
      disabled={!canSend || selected}
      className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-100 transition hover:bg-red-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
      onClick={onSend}
    >
      <Swords className="h-4 w-4" />
      <span>{selected ? 'Token ja selecionado' : 'Enviar para o encontro'}</span>
    </button>
  )
}
