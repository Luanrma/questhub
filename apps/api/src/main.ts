import './env'
import { registerGameSystems } from './game_systems/register'
import { campaignRoom, userRoom } from './modules/campaign-presence/rooms'
import { createVttServer } from './server'

const { app, presence } = await createVttServer()

registerGameSystems(app, {
  publishTokenPresentationChanged(event) {
    const target = presence.io.to(campaignRoom(event.campaignId))
    const recipients = event.sourceUserId
      ? target.to(userRoom(event.sourceUserId))
      : target

    recipients.emit('vtt:token-presentation:changed', {
      campaignId: event.campaignId,
      tokenId: event.tokenId,
    })
  },
})

await app.listen({ port: Number(process.env.PORT ?? 3001), host: '0.0.0.0' })
