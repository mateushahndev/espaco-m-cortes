'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const WHATSAPP_NUMERO = "5511999999999"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Detecta altura do teclado via visualViewport
  useEffect(() => {
    const handleResize = () => {
      const visualViewport = window.visualViewport
      if (visualViewport) {
        const windowHeight = window.innerHeight
        const viewportHeight = visualViewport.height
        const diff = windowHeight - viewportHeight
        setKeyboardHeight(diff > 0 ? diff : 0)
      }
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize)
      window.visualViewport.addEventListener('scroll', handleResize)
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize)
        window.visualViewport.removeEventListener('scroll', handleResize)
      }
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      setIsAnimating(true)
    })
    setTimeout(() => {
      inputRef.current?.focus()
    }, 300)
  }

  const handleClose = () => {
    setIsAnimating(false)
    document.body.style.overflow = ''
    setKeyboardHeight(0)
    setTimeout(() => setIsOpen(false), 250)
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const assistantId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content: '',
        },
      ])

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error('Erro na resposta')

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error('Stream não disponível')

      let fullContent = ''
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (line.trim()) {
            fullContent += line
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantId
                  ? { ...msg, content: fullContent }
                  : msg
              )
            )
          }
        }
      }

      if (buffer.trim()) {
        fullContent += buffer
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? { ...msg, content: fullContent }
              : msg
          )
        )
      }

      if (!fullContent) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? { ...msg, content: 'Desculpe, não consegui processar sua pergunta. Tente novamente.' }
              : msg
          )
        )
      }
    } catch (error) {
      console.error('Erro no chat:', error)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === (Date.now() + 1).toString()
            ? { ...msg, content: 'Desculpe, ocorreu um erro. Tente novamente.' }
            : msg
        )
      )
    }

    setIsLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  // Calcula a altura do chat
  const maxHeight = Math.min(window.innerHeight * 0.85, 600)
  const bottomOffset = Math.max(keyboardHeight, 0)

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => (isOpen ? handleClose() : handleOpen())}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary md:h-16 md:w-16"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />}
      </button>

      {isOpen && (
        <>
          {/* Overlay mobile */}
          <div
            className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 md:hidden ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleClose}
          />

          {/* Janela do chat */}
          <div
            className={`fixed bottom-0 left-0 right-0 z-50 flex w-full flex-col rounded-t-2xl border border-border bg-surface shadow-xl transition-all duration-300 ease-out md:bottom-24 md:right-6 md:left-auto md:w-[380px] md:rounded-2xl ${
              isAnimating
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-8 scale-95 opacity-0'
            }`}
            style={{
              height: maxHeight,
              maxHeight: 600,
              bottom: bottomOffset > 0 ? bottomOffset : 0,
            }}
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between rounded-t-2xl border-b border-border bg-surface px-4 py-3 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground font-playfair">Assistente 24h</p>
                  <p className="text-xs text-muted">Online</p>
                </div>
              </div>
              <button onClick={handleClose} className="text-muted hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center text-muted text-sm mt-8 space-y-2">
                  <Bot className="w-8 h-8 mx-auto text-primary/50 mb-2" />
                  <p className="font-medium text-foreground">Olá! Como posso ajudar?</p>
                  <p>Pergunte sobre serviços, preços, horários ou agendamento.</p>
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <span
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-surface border border-border text-foreground rounded-bl-md'
                    }`}
                  >
                    {msg.content || (isLoading && msg.role === 'assistant' ? 'Digitando...' : '')}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input + Rodapé */}
            <div className="flex-shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border bg-surface px-4 py-3">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder-muted focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="rounded-xl bg-primary p-2.5 text-white transition-colors hover:bg-primary-light disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {/* Rodapé WhatsApp */}
              <div className="rounded-b-2xl border-t border-border bg-surface px-4 py-2.5 text-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMERO}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-primary transition-colors"
                >
                  Falar no WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}