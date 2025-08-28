import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { defineChain } from '@reown/appkit/networks';

const pharosNetwork = defineChain({
  id: 688688,
  caipNetworkId: 'eip155:688688',
  chainNamespace: 'eip155',
  name: 'Pharos Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Pharos',
    symbol: 'PHRS',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.dplabs-internal.com'],
      webSocket: ['wss://testnet.dplabs-internal.com'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://testnet.pharosscan.xyz' },
  },
  contracts: {
  }
})
const projectId = "b56e18d47c72ab683b10814fe9495694"
const networks = [pharosNetwork]

const ethersAdapter = new EthersAdapter()

const modal = createAppKit({
  adapters: [ethersAdapter],
  defaultNetwork: networks[0],
  networks,
  chainImages: {
    688688: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAAHuQAHugAIuRoevwkJur2/7QAHuQAHuQAHuQAHuQALuQAHugAHuQAHuVBQ0AAGuQAHuQAFuRUavgAHua2v6aOl5ry/7aCj5a2v6f///wAHuQsSvGBk1IeK3/j4/QQLutLT8y81xxQavyAmwqao57S263B02IyP4MbI8H6C3OPk99/g9p6h5e/v+0xRzlZa0T9Fy5ea4+bn+Zg/veAAAAAxdFJOUwDYv6YiDf2B5/OVF7XQjQZWczJo+uDB0pvJ//////////////////////////////6imI1FAAABpklEQVQ4y32V65pDMBCGUedSPe0pokopVdTh/u9trdLOJLHfL4n3yZhvJkOSkNTdSpEtS1ZWO1Va1NpwfSDZWAsxzbB8Rpah8dzW9AUytyxn+AvaIMxbse9pOz85MDzm4qCKCHktHVHcy6PQazJKEH373kvJSyDElJFmcmDUBQm0SeMSTknY97eGilJfQ5/zkJBQPz0Y8qhyDibVCF4ER7rMXpyOYBIUsEJDv/DFiLMiLYeM4N5e2jFUElTllDrcNlBRLkF6fxuJQEdSwOpEoBDoSvISGGWo3yRLBN6rhjWIB8M+ypMzZwUK3ZF6qEx5zYOYJU2UTDMaU15PQcxW28U9e87qBdBhDaencAw9gHFxo8BwroRJPpzYNt2f9RSUEGXzVNvp4dMmCpqCabNzm0dv01+gjRt3qHWNqkhh485HDt9OWFFw4Hi56KPqiUATaE3T6jB/O6toqs9hvtifIuqWJSjwqI9lyvcVD8xGHVJ6BntMQTPS+5qg8BrgTrQ9ZkB+1wLKtw78yFV/uElytMVTXN2g8Wza//wY9objDrTpOsYev/kFnXyGowLL8V8AAAAASUVORK5CYII='
  },
  projectId,
  themeMode: 'dark',
  features: {
    email: false,
    socials: []
  },
  metadata: {
    name: 'Goosebox Game',
    description: 'Goosebox - 挂机养鹅游戏',
    url: 'http://localhost:5173/faucet.html',
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

  setTimeout(checkWalletConnection, 1000);
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