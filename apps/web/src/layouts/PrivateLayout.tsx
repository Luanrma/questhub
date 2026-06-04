import { Navigate, Outlet } from 'react-router-dom'
import { Aside } from '../components/Aside'
import { useSession } from '../contexts/SessionContext'
import { LoadingScreen } from '../components/LoadingScreen'

export function PrivateLayout() {
  const { me, loading } = useSession()

  if (loading) return <LoadingScreen />
  if (!me) return <Navigate to="/login" replace />

  return (
    <div className="flex min-h-screen">
      <Aside />
      <main className="flex-1 p-6">{<Outlet />}</main>
    </div>
  )
}

