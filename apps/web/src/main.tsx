import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { disableNativeBrowserDrag } from './browser-behavior.ts'
import './index.css'
import App from './App.tsx'
import { SessionProvider } from './contexts/SessionContext.tsx'

disableNativeBrowserDrag()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SessionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SessionProvider>
  </StrictMode>,
)
