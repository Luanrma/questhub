import { Outlet } from 'react-router-dom'
import heroImg from '../assets/questhub-login-hero.png'

export function PublicLayout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 via-purple-900 to-black opacity-20 blur-3xl z-0" />

      <div className="z-10 w-full max-w-5xl">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur md:grid-cols-[1.15fr_0.85fr]">
          {/* Hero (inspirado no layout de referência) */}
          <div
            className="relative min-h-[280px] md:min-h-[520px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.2)), url(${heroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Form */}
          <div className="p-6 sm:p-10 bg-[#0f1014]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
