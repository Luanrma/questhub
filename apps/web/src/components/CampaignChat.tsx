import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { api, ApiError } from '../lib/api'
import { useSession } from '../contexts/SessionContext'

type ChatRole = 'MASTER' | 'PLAYER' | 'NPC'

type ChatMessage = {
  id: string
  campaignId: string
  characterId: string
  characterName: string
  role: ChatRole
  content: string
  createdAt: string
  mine: boolean
}

type ChatAck = {
  ok: boolean
  error?: string
  message?: ChatMessage
}

type Props = {
  campaignId: string
  characterId?: string | null
  enabled: boolean
}

function isChatMessage(input: unknown): input is ChatMessage {
  if (!input || typeof input !== 'object') return false
  const value = input as Partial<ChatMessage>
  return (
    typeof value.id === 'string' &&
    typeof value.campaignId === 'string' &&
    typeof value.characterId === 'string' &&
    typeof value.characterName === 'string' &&
    typeof value.content === 'string' &&
    typeof value.createdAt === 'string' &&
    typeof value.mine === 'boolean'
  )
}

function normalizeIncomingMessage(input: unknown): ChatMessage | null {
  if (!isChatMessage(input)) return null
  return { ...input, mine: false }
}

function formatMessageTime(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

export function CampaignChat({ campaignId, characterId, enabled }: Props) {
  const { socket } = useSession()
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSend = useMemo(() => {
    if (!enabled) return false
    if (!socket) return false
    if (!characterId) return false
    if (!content.trim()) return false
    if (content.trim().length > 500) return false
    return !sending
  }, [characterId, content, enabled, sending, socket])

  useEffect(() => {
    let cancelled = false

    async function loadMessages() {
      setLoading(true)
      setError(null)

      try {
        const list = await api<ChatMessage[]>(`/api/campaigns/${campaignId}/chat/messages`)
        if (!cancelled) setMessages(list)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : 'Nao foi possivel carregar o chat.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadMessages()

    return () => {
      cancelled = true
    }
  }, [campaignId])

  useEffect(() => {
    if (!socket) return

    function onMessageCreated(input: unknown) {
      const message = normalizeIncomingMessage(input)
      if (!message) return
      if (message.campaignId !== campaignId) return

      setMessages((current) => {
        if (current.some((item) => item.id === message.id)) return current
        return [...current, message]
      })
    }

    socket.on('chat:message:created', onMessageCreated)

    return () => {
      socket.off('chat:message:created', onMessageCreated)
    }
  }, [campaignId, socket])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [messages.length])

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!canSend || !socket || !characterId) return

    const text = content.trim()
    setSending(true)
    setError(null)

    try {
      const ack = await new Promise<ChatAck>((resolve, reject) => {
        socket.timeout(5000).emit(
          'chat:message:create',
          { campaignId, characterId, content: text },
          (err: Error | null, response?: ChatAck) => {
            if (err) {
              reject(new Error('Tempo esgotado ao enviar mensagem.'))
              return
            }

            resolve(response ?? { ok: false, error: 'Resposta invalida do servidor.' })
          },
        )
      })

      if (!ack.ok || !ack.message) {
        setError(ack.error ?? 'Nao foi possivel enviar a mensagem.')
        return
      }

      const sentMessage = ack.message
      setMessages((current) => {
        if (current.some((item) => item.id === sentMessage.id)) return current
        return [...current, sentMessage]
      })
      setContent('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nao foi possivel enviar a mensagem.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="flex min-h-[320px] flex-1 flex-col rounded-lg border border-white/10 bg-white/[0.03]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4 text-indigo-300" />
          <h2 className="text-sm font-semibold text-white">Chat</h2>
        </div>
        <span className="text-[10px] uppercase text-zinc-500">{enabled ? 'Mesa' : 'Offline'}</span>
      </div>

      <div ref={scrollRef} className="min-h-0 flex-1 space-y-3 overflow-auto px-4 py-3">
        {loading ? <div className="text-sm text-zinc-500">Carregando mensagens...</div> : null}

        {!loading && messages.length === 0 ? (
          <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-sm text-zinc-500">
            Nenhuma mensagem ainda.
          </div>
        ) : null}

        {messages.map((message) => (
          <article key={message.id} className={message.mine ? 'text-right' : 'text-left'}>
            <div className="mb-1 flex items-center gap-2 text-[10px] uppercase text-zinc-500">
              <span className={message.mine ? 'ml-auto' : ''}>{message.characterName}</span>
              <span>{formatMessageTime(message.createdAt)}</span>
            </div>
            <div
              className={[
                'inline-block max-w-full rounded-lg border px-3 py-2 text-sm leading-relaxed',
                message.mine
                  ? 'border-indigo-300/20 bg-indigo-500/15 text-indigo-50'
                  : 'border-white/10 bg-black/30 text-zinc-200',
              ].join(' ')}
            >
              {message.content}
            </div>
          </article>
        ))}
      </div>

      {error ? <div className="border-t border-red-300/20 px-4 py-2 text-xs text-red-200">{error}</div> : null}

      <form onSubmit={onSubmit} className="border-t border-white/10 p-3">
        <div className="flex items-end gap-2">
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            disabled={!enabled || !socket || !characterId}
            maxLength={500}
            rows={2}
            placeholder={enabled ? 'Mensagem para a mesa...' : 'Chat disponivel com a mesa online.'}
            className="min-h-11 flex-1 resize-none rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!canSend}
            title="Enviar mensagem"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-indigo-300/20 bg-indigo-600 text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-1 text-right text-[10px] text-zinc-600">{content.length}/500</div>
      </form>
    </section>
  )
}
