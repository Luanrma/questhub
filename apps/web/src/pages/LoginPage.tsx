import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'

export function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await signIn({ email, password })
      navigate('/', { replace: true })
    } catch {
      alert('Email ou senha inválidos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-gray-900 p-8 rounded-xl shadow-xl flex flex-col gap-6 text-white">
      <h1 className="text-2xl font-semibold text-center">QuestHub</h1>
      <h2 className="text-lg text-center text-zinc-300 -mt-3">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <Button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>

      <p className="text-sm text-center text-zinc-400">
        Não tem conta?{' '}
        <Link className="text-indigo-300 hover:text-indigo-200 underline" to="/register">
          Criar cadastro
        </Link>
      </p>
    </form>
  )
}

