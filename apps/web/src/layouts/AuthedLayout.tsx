import { Navigate, Outlet } from 'react-router-dom'
import { LoadingScreen } from '../components/LoadingScreen'
import { useSession } from '../contexts/SessionContext'

export function AuthedLayout() {
  const { me, loading } = useSession()

  if (loading) return <LoadingScreen />
  if (!me) return <Navigate to="/login" replace />

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-5xl mx-auto p-6">
        <Outlet />
      </div>
    </div>
  )
}

