import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { defineChain, mainnet } from '@reown/appkit/networks'

// 定义 Pharos 测试网络
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

// 网络配置
export const networks = [pharosNetwork, mainnet]

// 项目配置
const projectId = "dcb2a535e5a41384e7f7536ee4624eb2"
export const ethersAdapter = new EthersAdapter()

// 创建并导出 AppKit 实例
export const appKit = createAppKit({
  adapters: [ethersAdapter],
  defaultNetwork: pharosNetwork,
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

// 获取 provider 的辅助函数
export const getProvider = () => {
  try {
    // 尝试不同的方式获取 provider
    if (appKit.getWalletProvider) {
      return appKit.getWalletProvider()
    }
    if (appKit.getProvider) {
      return appKit.getProvider()
    }
    // 如果上述方法不存在，尝试从适配器获取
    if (ethersAdapter.provider) {
      return ethersAdapter.provider
    }
    return null
  } catch (error) {
    console.warn('获取 provider 失败:', error)
    return null
  }
}
