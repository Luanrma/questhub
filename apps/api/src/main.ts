import './env'
import { registerGameSystems } from './game_systems/register'
import { createVttServer } from './server'

const app = await createVttServer()

registerGameSystems(app)

await app.listen({ port: Number(process.env.PORT ?? 3001), host: '0.0.0.0' })
