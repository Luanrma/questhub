import diceIcon from '../assets/dice-twenty-faces-twenty.png'

export function LoadingScreen({ message = 'Carregando seu destino...' }: { message?: string }) {
  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-[#0c0c0c]">
      <div className="flex flex-col items-center gap-6">
        <img
          src={diceIcon}
          alt="Dado d20"
          className="w-24 h-24 select-none pointer-events-none animate-spin"
          draggable={false}
        />
        <p className="text-base text-zinc-200">{message}</p>
      </div>
    </div>
  )
}
