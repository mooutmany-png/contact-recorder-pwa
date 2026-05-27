import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import ChatInterface from './components/ChatInterface'
import ClientManager from './components/ClientManager'
import SettingsPanel from './components/SettingsPanel'
import { Menu } from 'lucide-react'

type View = 'dashboard' | 'chat' | 'clients' | 'settings'

export default function App() {
  const [view, setView] = useState<View>('dashboard')
  const [menuOpen, setMenuOpen] = useState(false)
  const [apiKey, setApiKey] = useState<string | null>(null)

  const renderView = () => {
    if (!apiKey) {
      return <SettingsPanel onApiKeySet={setApiKey} />
    }

    switch (view) {
      case 'dashboard':
        return <Dashboard onNewContact={() => setView('chat')} />
      case 'chat':
        return <ChatInterface apiKey={apiKey} onSave={() => setView('dashboard')} />
      case 'clients':
        return <ClientManager />
      case 'settings':
        return <SettingsPanel onApiKeySet={setApiKey} />
      default:
        return <Dashboard onNewContact={() => setView('chat')} />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-bwz-light">
      <div className="bg-gradient-to-r from-bwz-blue to-bwz-dark text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-bwz-blue font-bold text-sm">C</span>
          </div>
          <h1 className="text-lg font-bold">Contact Recorder</h1>
        </div>
        {apiKey && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-white/20 rounded-lg"
          >
            <Menu size={24} />
          </button>
        )}
      </div>

      {menuOpen && (
        <div className="bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col">
            {[
              { id: 'dashboard' as View, label: 'Dashboard' },
              { id: 'chat' as View, label: 'Nieuw Contact' },
              { id: 'clients' as View, label: 'Cliënten' },
              { id: 'settings' as View, label: 'Instellingen' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id)
                  setMenuOpen(false)
                }}
                className={`px-4 py-3 text-left ${
                  view === item.id
                    ? 'bg-bwz-accent text-bwz-blue font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        {renderView()}
      </div>
    </div>
  )
}
