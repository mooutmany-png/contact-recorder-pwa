import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function ChatInterface({ apiKey, onSave }: { apiKey: string; onSave: () => void }) {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: 'assistant',
      content: 'Hallo! Beschrijf je contactmoment kort. Ik help je met het formulier.',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }])
    setInput('')
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-bwz-blue text-white'
                  : 'bg-bwz-accent text-bwz-dark'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4 bg-bwz-light flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Beschrijf het contactmoment..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-bwz-blue text-white rounded-lg"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}
