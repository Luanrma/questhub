import { Outlet } from 'react-router-dom'
import heroImg from '../assets/hero.png'

export function PublicLayout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 via-purple-900 to-black opacity-20 blur-3xl z-0" />

      <div className="z-10 w-full max-w-5xl">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/30 backdrop-blur">
          {/* Hero (inspirado no layout de referência) */}
          <div
            className="hidden md:flex relative items-end p-10 min-h-[520px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.85)), url(${heroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="space-y-3">
              <div className="text-white/90 text-sm">Quest Hub</div>
              <h1 className="text-4xl text-white font-semibold leading-tight">
                Quest <br /> Hub
              </h1>
              <p className="text-sm text-zinc-200 max-w-xs">Sua história começa aqui.</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-10 bg-[#0f1014]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
