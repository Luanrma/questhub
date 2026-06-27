import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { AuthedLayout } from './layouts/AuthedLayout'
import { CampaignLayout } from './layouts/CampaignLayout'
import { CampaignCreatePage } from './pages/CampaignCreatePage'
import { CampaignJoinPage } from './pages/CampaignJoinPage'
import { CampaignsDashboardPage } from './pages/CampaignsDashboardPage'
import { CharacterCreatePage } from './pages/CharacterCreatePage'
import { CharactersHomePage } from './pages/CharactersHomePage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { CampaignPlayersPage } from './pages/campaign/CampaignPlayersPage'
import { CampaignSettingsPage } from './pages/campaign/CampaignSettingsPage'
import { PlaceholderPage } from './pages/campaign/PlaceholderPage'

export default function App() {
  // Rotas ficam no componente principal para manter simples (Vite + React Router).
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Pós-login, mas antes de escolher/criar/entrar em uma campanha (sem aside) */}
      <Route element={<AuthedLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/campaigns" element={<CampaignsDashboardPage />} />
        <Route path="/campaigns/new" element={<CampaignCreatePage />} />
        <Route path="/campaigns/join" element={<CampaignJoinPage />} />
        <Route path="/characters" element={<CharactersHomePage />} />
        <Route path="/characters/new" element={<CharacterCreatePage />} />
        <Route path="/characters/:characterId/edit" element={<CharacterCreatePage />} />
      </Route>

      {/* Depois de escolher/entrar/criar uma campanha (com aside) */}
      <Route element={<CampaignLayout />}>
        <Route path="/campaign/:campaignId/overview" element={null} />
        <Route path="/campaign/:campaignId/sessions" element={<PlaceholderPage title="Sessões" />} />
        <Route path="/campaign/:campaignId/characters" element={<PlaceholderPage title="Personagens" />} />
        <Route path="/campaign/:campaignId/players" element={<CampaignPlayersPage />} />
        <Route path="/campaign/:campaignId/journal" element={<PlaceholderPage title="Diário" />} />
        <Route path="/campaign/:campaignId/settings" element={<CampaignSettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
