import { config } from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Carrega .env da raiz do repo (preferencial) e depois o do apps/api (override local).
const __dirname = path.dirname(fileURLToPath(import.meta.url))
config({ path: path.resolve(__dirname, '..', '..', '..', '.env') })
config({ path: path.resolve(__dirname, '..', '.env') })
