import { Outlet } from 'react-router-dom'

export function PublicLayout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 via-purple-900 to-black opacity-20 blur-3xl z-0" />
      <div className="z-10 w-full max-w-md px-4">
        <Outlet />
      </div>
    </div>
  )
}

