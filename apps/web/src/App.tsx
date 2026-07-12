import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { AuthedLayout } from './layouts/AuthedLayout'
import { CampaignLayout } from './layouts/CampaignLayout'
import { LoginPage } from './features/auth/pages/LoginPage'
import { RegisterPage } from './features/auth/pages/RegisterPage'
import { CampaignBestiaryPage } from './features/bestiary/pages/CampaignBestiaryPage'
import { CampaignItemsPage } from './features/items/pages/CampaignItemsPage'
import { CampaignSpellsPage } from './features/spells/pages/CampaignSpellsPage'
import { CampaignPlayersPage } from './features/campaign-presence/pages/CampaignPlayersPage'
import { CampaignCreatePage } from './features/campaigns/pages/CampaignCreatePage'
import { CampaignJoinPage } from './features/campaigns/pages/CampaignJoinPage'
import { CampaignsDashboardPage } from './features/campaigns/pages/CampaignsDashboardPage'
import { CampaignSettingsPage } from './features/campaigns/pages/CampaignSettingsPage'
import { PlaceholderPage } from './features/campaigns/pages/PlaceholderPage'
import { CharacterCreatePage } from './features/characters/pages/CharacterCreatePage'
import { CharactersHomePage } from './features/characters/pages/CharactersHomePage'
import { HomePage } from './features/home-navigation/pages/HomePage'

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
        <Route path="/campaign/:campaignId/bestiary" element={<CampaignBestiaryPage />} />
        <Route path="/campaign/:campaignId/items" element={<CampaignItemsPage />} />
        <Route path="/campaign/:campaignId/spells" element={<CampaignSpellsPage />} />
        <Route path="/campaign/:campaignId/players" element={<CampaignPlayersPage />} />
        <Route path="/campaign/:campaignId/journal" element={<PlaceholderPage title="Diário" />} />
        <Route path="/campaign/:campaignId/settings" element={<CampaignSettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
