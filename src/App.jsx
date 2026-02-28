import { createAppKit, useDisconnect, useAppKitAccount } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { DefaultSIWX } from '@reown/appkit-siwx'

const projectId = ''
const solanaWeb3JsAdapter = new SolanaAdapter()

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: {
    name: 'ReownApp',
    description: 'AppKit Example',
    url: 'http://localhost:5173',
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  },
  projectId,
  features: {
    email: true,
    socials: ['google', 'x', 'github', 'discord']
  },
  siwx: new DefaultSIWX()
})

export default function App() {
  const { disconnect } = useDisconnect()
  const { isConnected } = useAppKitAccount()

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
      <div className="p-8 bg-zinc-900 rounded-xl border border-zinc-800 flex flex-col items-center gap-6 shadow-xl">
        <h1 className="text-3xl font-bold text-zinc-100">Solana AppKit</h1>
        <appkit-button />
        {isConnected && (
          <button 
            onClick={() => disconnect()}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}
