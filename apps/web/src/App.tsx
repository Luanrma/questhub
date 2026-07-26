import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { AuthedLayout } from './layouts/AuthedLayout'
import { CampaignLayout } from './layouts/CampaignLayout'
import { LoginPage } from './features/auth/pages/LoginPage'
import { RegisterPage } from './features/auth/pages/RegisterPage'
import { CampaignPlayersPage } from './features/campaign-presence/pages/CampaignPlayersPage'
import { CampaignCreatePage } from './pages/CampaignCreatePage'
import { CampaignJoinPage } from './pages/CampaignJoinPage'
import { CampaignsDashboardPage } from './features/campaigns/pages/CampaignsDashboardPage'
import { CampaignSettingsPage } from './features/campaigns/pages/CampaignSettingsPage'
import { PlaceholderPage } from './features/campaigns/pages/PlaceholderPage'
import { HomePage } from './features/home-navigation/pages/HomePage'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<AuthedLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/campaigns" element={<CampaignsDashboardPage />} />
        <Route path="/campaigns/new" element={<CampaignCreatePage />} />
        <Route path="/campaigns/join" element={<CampaignJoinPage />} />
        <Route path="/characters/*" element={<Navigate to="/campaigns" replace />} />
      </Route>

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
