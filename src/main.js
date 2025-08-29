import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { defineChain } from '@reown/appkit/networks';

const pharosNetwork = defineChain({
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
const projectId = "dcb2a535e5a41384e7f7536ee4624eb2"
const networks = [pharosNetwork]

const ethersAdapter = new EthersAdapter()

const modal = createAppKit({
  adapters: [ethersAdapter],
  defaultNetwork: networks[0],
  networks,
  projectId,
  themeMode: 'dark',
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

document.addEventListener('DOMContentLoaded', function() {
  const openConnectModalBtn = document.getElementById('open-connect-modal')
  const openConnectModalMobileBtn = document.getElementById('open-connect-modal-mobile')

  if (openConnectModalBtn) {
    openConnectModalBtn.addEventListener('click', () => modal.open())
  }

  if (openConnectModalMobileBtn) {
    openConnectModalMobileBtn.addEventListener('click', () => modal.open())
  }

  // setTimeout(checkWalletConnection, 1000);
})

let lastWalletAddress = null;
async function checkWalletConnection() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const currentAddress = accounts.length > 0 ? accounts[0] : null;
      
      if (currentAddress !== lastWalletAddress) {
        lastWalletAddress = currentAddress;
        
        if (currentAddress) {
          if (window.onWalletConnected) {
            window.onWalletConnected(currentAddress);
          }
        } else {
          if (window.onWalletDisconnected) {
            window.onWalletDisconnected();
          }
        }
      }
    }
  } catch (error) {
    console.error('Check wallet connection status failed:', error);
  }
}

if (typeof window.ethereum !== 'undefined') {
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
      if (window.onWalletConnected) {
        window.onWalletConnected(accounts[0]);
      }
    } else {
      if (window.onWalletDisconnected) {
        window.onWalletDisconnected();
      }
    }
  });

  window.ethereum.on('chainChanged', () => {
    setTimeout(checkWalletConnection, 100);
  });
}
