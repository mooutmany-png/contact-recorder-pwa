import React, { useState } from 'react'
import { Lock } from 'lucide-react'

export default function SettingsPanel({ onApiKeySet }: { onApiKeySet: (key: string) => void }) {
  const [keyInput, setKeyInput] = useState('')
  const [showKey, setShowKey] = useState(false)

  const handleSaveKey = () => {
    if (keyInput.trim()) {
      localStorage.setItem('claude-api-key', keyInput)
      onApiKeySet(keyInput)
    }
  }

  return (
    <div className="bg-bwz-light min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-bwz-dark mb-6">Instellingen</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lock size={24} className="text-bwz-blue" />
            <h2 className="text-xl font-bold text-bwz-dark">Claude API-key</h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Voeg je Claude API-key in om de AI-gespreksvoering in te schakelen.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Voeg je Claude API-key in:
              </label>
              <div className="flex gap-2">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="sk-ant-..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                />
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="px-3 py-2 text-gray-600"
                >
                  {showKey ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <button
              onClick={handleSaveKey}
              disabled={!keyInput.trim()}
              className="w-full px-4 py-2 bg-bwz-blue text-white rounded-lg font-semibold disabled:opacity-50"
            >
              Opslaan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
