// Logica pura de arraste/limite de viewport para paineis flutuantes portados
// para document.body (.ai/game_systems/bestiary_guide.md secao 2: todo modal
// do QuestHub deve escapar do stacking context do container que o abriu).
// Copia deliberada e minima de apps/web/src/components/windowDrag.ts — pacotes
// de game-system nao podem depender de apps/web (regra de arquitetura,
// AGENTS.md secao 2), entao a logica pura e replicada aqui em vez de
// importada.

export type FloatingPanelPosition = { x: number; y: number }

export function clampFloatingPanelPosition(
  position: FloatingPanelPosition,
  panel: HTMLDivElement | null,
  margin = 12,
): FloatingPanelPosition {
  const width = panel?.offsetWidth ?? 320
  const height = panel?.offsetHeight ?? 400
  const maxX = Math.max(margin, window.innerWidth - width - margin)
  const maxY = Math.max(margin, window.innerHeight - height - margin)

  return {
    x: Math.min(maxX, Math.max(margin, position.x)),
    y: Math.min(maxY, Math.max(margin, position.y)),
  }
}
