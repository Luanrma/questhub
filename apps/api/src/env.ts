import { config } from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Carrega apenas o .env central da raiz do repo.
const __dirname = path.dirname(fileURLToPath(import.meta.url))
config({ path: path.resolve(__dirname, '..', '..', '..', '.env') })
