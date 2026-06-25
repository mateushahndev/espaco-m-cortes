// 📁 app/api/chat/route.ts
// Este arquivo usa os dados do chat-config.ts

import { streamText } from 'ai'
import { groq } from '@ai-sdk/groq'
import { chatConfig } from '@/lib/chat-config'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const systemPrompt = `
      Você é Assistente 24h, o assistente virtual de [${chatConfig.company.name}].

      SEU NOME: Assistente 24h
      TOM: Direto, seguro, sem enrolação. Respostas de 2-4 frases.
      TAMANHO DAS RESPOSTAS: 2-4 frases.

      DADOS DA EMPRESA:
      - Nome: ${chatConfig.company.name}
      - E-mail: ${chatConfig.company.email}
      - Telefone: ${chatConfig.company.phone}
      - WhatsApp: ${chatConfig.company.whatsapp}
      - Endereço: ${chatConfig.company.address}
      - Cidade: ${chatConfig.company.city}
      - Horário: ${chatConfig.company.hours}

      PRODUTOS/SERVIÇOS:
      - ${chatConfig.offerings.list.join('\n  - ')}
      - Principal: ${chatConfig.offerings.main}

      RESPOSTAS PRONTAS:
      - Sobre a empresa: "${chatConfig.responses.about}"
      - Contato: "${chatConfig.responses.contact}"
      - Horário: "${chatConfig.responses.schedule}"
      - Localização: "${chatConfig.responses.location}"
      - Preços: "${chatConfig.responses.pricing}"

      REGRAS:
      1. Se a conversa exigir orçamento ou contato humano, encerre com: "Fale conosco pelo WhatsApp: ${chatConfig.company.whatsapp}"
      2. Se não souber algo, diga que vai verificar e retornar.
      3. Nunca invente informações.
      4. Seja direto, sem enrolação.

      NÃO FAÇA:
      - Não use "amigo", "cara", "mano"
      - Não invente preços ou prazos
    `

    const result = streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: systemPrompt,
      messages,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Erro no chat:', error)
    return new Response('Erro interno', { status: 500 })
  }
}