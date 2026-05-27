import React, { useState } from 'react'
import { Plus } from 'lucide-react'

export default function Dashboard({ onNewContact }: { onNewContact: () => void }) {
  const [clients, setClients] = useState<any[]>([])
  const [newClientName, setNewClientName] = useState('')

  const handleAddClient = () => {
    if (newClientName.trim()) {
      setClients([...clients, { id: Date.now(), name: newClientName }])
      setNewClientName('')
    }
  }

  return (
    <div className="bg-bwz-light min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-bwz-blue">{clients.length}</div>
            <p className="text-sm text-gray-600">Cliënten</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-bwz-green">0</div>
            <p className="text-sm text-gray-600">Contacten</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-bwz-dark">0</div>
            <p className="text-sm text-gray-600">Min. logged</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="font-bold text-bwz-dark mb-3">Cliënt toevoegen</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newClientName}
              onChange={(e) => setNewClientName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddClient()}
              placeholder="Cliëntnaam"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleAddClient}
              className="p-2 bg-bwz-blue text-white rounded-lg"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {clients.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">Geen cliënten toegevoegd</p>
          </div>
        ) : (
          <div className="space-y-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="bg-gradient-to-r from-bwz-blue to-bwz-dark text-white px-4 py-3 flex items-center justify-between">
                  <h3 className="font-bold">{client.name}</h3>
                  <button
                    onClick={() => onNewContact()}
                    className="p-2 bg-white/20 rounded-lg"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
