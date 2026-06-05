import { Navigate, Outlet } from 'react-router-dom'
import { useSession } from '../contexts/SessionContext'
import { LoadingScreen } from '../components/LoadingScreen'

export function PrivateLayout() {
  const { me, loading } = useSession()

  if (loading) return <LoadingScreen />
  if (!me) return <Navigate to="/login" replace />

  return <Outlet />
}
