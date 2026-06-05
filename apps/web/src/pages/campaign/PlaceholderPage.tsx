export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="text-sm text-zinc-300 mt-2">Em desenvolvimento…</p>
    </div>
  )
}

