import { useEffect, useMemo, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

type Me = {
  id: string
  name: string
  email: string
  type: string
  iat?: number
  exp?: number
}

export default function App() {
  const [email, setEmail] = useState('a@questhub.local')
  const [password, setPassword] = useState('dev')
  const [me, setMe] = useState<Me | null>(null)
  const [status, setStatus] = useState<string>('')
  const [events, setEvents] = useState<any[]>([])
  const [toUserId, setToUserId] = useState('b@questhub.local')
  const socketRef = useRef<Socket | null>(null)

  const isLogged = useMemo(() => !!me, [me])

  async function api<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${API_URL}${path}`, {
      ...init,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
    })
    if (!res.ok) throw new Error(await res.text())
    return (await res.json()) as T
  }

  async function loadMe() {
    try {
      const data = await api<Me>('/api/me')
      setMe(data)
      setStatus(`Logado como ${data.email}`)
    } catch {
      setMe(null)
      setStatus('Não autenticado')
    }
  }

  async function signIn() {
    setStatus('Entrando...')
    await api('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    await loadMe()
  }

  async function logout() {
    await api('/api/logout', { method: 'POST', body: '{}' })
    setMe(null)
    setStatus('Deslogado')
    disconnectSocket()
  }

  function connectSocket() {
    if (socketRef.current) return

    const s = io(API_URL, { withCredentials: true })

    s.on('connect', () => setStatus((v) => `${v} | Socket conectado (${s.id})`))
    s.on('connect_error', (err) => setStatus(`Socket erro: ${err.message}`))

    s.on('trade:received', (payload) => {
      setEvents((prev) => [payload, ...prev])
    })

    socketRef.current = s
  }

  function disconnectSocket() {
    socketRef.current?.disconnect()
    socketRef.current = null
  }

  async function sendTrade() {
    setStatus('Enviando trade...')
    await api('/api/items/trade', {
      method: 'POST',
      body: JSON.stringify({
        toUserId,
        campaignId: '1',
        item: { name: 'Espada' },
      }),
    })
    setStatus('Trade enviado!')
  }

  useEffect(() => {
    loadMe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ padding: 16, fontFamily: 'system-ui, sans-serif', maxWidth: 720 }}>
      <h1>QuestHub (teste)</h1>

      <p><b>Status:</b> {status}</p>

      {!isLogged ? (
        <div style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="senha"
            type="password"
          />
          <button onClick={signIn}>Entrar</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 8 }}>
          <div>
            <b>Você:</b> {me?.email} ({me?.id})
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button onClick={connectSocket}>Conectar Socket</button>
            <button onClick={disconnectSocket}>Desconectar Socket</button>
            <button onClick={logout}>Logout</button>
          </div>

          <hr />

          <h2>Enviar trade</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <input value={toUserId} onChange={(e) => setToUserId(e.target.value)} />
            <button onClick={sendTrade}>Enviar</button>
          </div>

          <hr />

          <h2>Eventos recebidos (trade:received)</h2>
          <pre style={{ background: '#111', color: '#0f0', padding: 12, borderRadius: 8 }}>
            {events.length ? JSON.stringify(events[0], null, 2) : 'Nenhum ainda'}
          </pre>
        </div>
      )}
    </div>
  )
}