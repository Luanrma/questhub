import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { api } from '../lib/api'
import { useSession } from '../contexts/SessionContext'

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email)
}

export function RegisterPage() {
  const navigate = useNavigate()
  const { refreshMe } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const errors = useMemo(() => {
    const e: string[] = []
    if (email && !isValidEmail(email)) e.push('Email inválido.')
    if (password && password.length < 8) e.push('A senha deve ter no mínimo 8 caracteres.')
    if (confirmPassword && confirmPassword !== password) e.push('As senhas não conferem.')
    return e
  }, [email, password, confirmPassword])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (errors.length) return

    setLoading(true)
    try {
      await api('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      await refreshMe()
      navigate('/', { replace: true })
    } catch (err: any) {
      const msg = (err?.message ?? '').toString()
      if (msg.includes('409')) alert('Email já cadastrado')
      else alert('Erro ao cadastrar. Verifique os dados e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-gray-900 p-8 rounded-xl shadow-xl flex flex-col gap-6 text-white">
      <h1 className="text-2xl font-semibold text-center">QuestHub</h1>
      <h2 className="text-lg text-center text-zinc-300 -mt-3">Cadastro</h2>

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
        placeholder="Senha (mín. 8 caracteres)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={8}
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {errors.length > 0 && (
        <ul className="text-sm text-red-300 list-disc pl-5">
          {errors.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}

      <Button type="submit" disabled={loading || errors.length > 0}>
        {loading ? 'Criando...' : 'Criar conta'}
      </Button>

      <p className="text-sm text-center text-zinc-400">
        Já tem conta?{' '}
        <Link className="text-indigo-300 hover:text-indigo-200 underline" to="/login">
          Entrar
        </Link>
      </p>
    </form>
  )
}
