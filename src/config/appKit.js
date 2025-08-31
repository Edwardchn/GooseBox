import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { defineChain, mainnet } from '@reown/appkit/networks'

export const pharosNetwork = defineChain({
  id: 688688,
  name: 'Pharos Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Pharos',
    symbol: 'PHRS',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.dplabs-internal.com'],
    },
    public: {
      http: ['https://testnet.dplabs-internal.com'],
    },
  },
  blockExplorers: {
    default: { name: 'PharosScan', url: 'https://testnet.pharosscan.xyz' },
  }
})

export const networks = [pharosNetwork, mainnet]

const projectId = "dcb2a535e5a41384e7f7536ee4624eb2"
export const ethersAdapter = new EthersAdapter()

export const appKit = createAppKit({
  adapters: [ethersAdapter],
  defaultNetwork: pharosNetwork,
  networks,
  projectId,
  themeMode: 'dark',
  autoConnect: false,
  metadata: {
    name: 'Goosebox Game',
    description: 'Goosebox Game Faucet',
    url: window.location.origin,
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
  },
  themeVariables: {
    '--w3m-accent': '#f59e0b',
  }
})

export const getProvider = () => {
  try {
    if (appKit.getWalletProvider) {
      return appKit.getWalletProvider()
    }
    if (appKit.getProvider) {
      return appKit.getProvider()
    }
    if (ethersAdapter.provider) {
      return ethersAdapter.provider
    }
    return null
  } catch (error) {

    return null
  }
}
