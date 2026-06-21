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
  const [formError, setFormError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    setLoading(true)
    try {
      await signIn({ email, password })
      navigate('/home', { replace: true })
    } catch {
      setFormError('Credenciais inválidas. Verifique o e-mail e a senha.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 text-white">
      <div>
        <h1 className="text-2xl font-semibold">Entrar na sua conta</h1>
        <p className="text-sm text-zinc-300 mt-1">Continue sua jornada épica.</p>
      </div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setFormError('')
        }}
        required
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setFormError('')
        }}
        required
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {formError ? (
        <div className="rounded border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200" role="alert">
          {formError}
        </div>
      ) : null}

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
