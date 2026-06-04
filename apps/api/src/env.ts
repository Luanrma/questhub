import { config } from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Carrega sempre o .env do apps/api, independente do diretório onde o comando foi executado.
const __dirname = path.dirname(fileURLToPath(import.meta.url))
config({ path: path.resolve(__dirname, '..', '.env') })

