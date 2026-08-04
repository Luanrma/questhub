import { Pathfinder2eEquipmentPanel } from '../features/pathfinder-2e/equipment/Pathfinder2eEquipmentPanel'

type Props = {
  campaignId: string
  actorId: string
  onEquipmentChanged?: () => void
}

const equipmentRenderers = [Pathfinder2eEquipmentPanel] as const

export function GameSystemEquipmentPanels(props: Props) {
  return equipmentRenderers.map((Renderer, index) => (
    <Renderer
      key={`${props.actorId}:${index}`}
      campaignId={props.campaignId}
      actorId={props.actorId}
      onEquipmentChanged={props.onEquipmentChanged}
    />
  ))
}
