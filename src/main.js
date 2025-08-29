import { appKit, pharosNetwork, getProvider } from './config/appKit.js'
import { store, updateStore } from './store/appkitStore.js'
import { updateTheme, updateButtonVisibility } from './utils/dom.js'
import { signMessage, sendTx, getBalance } from './services/wallet.js'
import { initializeSubscribers } from './utils/subscribers.js'
import { mainnet } from '@reown/appkit/networks'

// 初始化订阅者
initializeSubscribers(appKit)

// 初始检查
updateButtonVisibility(appKit.getIsConnectedState());

// 如果已经连接，尝试获取 provider
if (appKit.getIsConnectedState()) {
  const provider = getProvider()
  updateStore('eip155Provider', provider)
}

// 按钮事件监听器
document.getElementById('open-connect-modal')?.addEventListener(
  'click', () => appKit.open()
)

document.getElementById('open-connect-modal-mobile')?.addEventListener(
  'click', () => appKit.open()
)

document.getElementById('disconnect')?.addEventListener(
  'click', () => {
    appKit.disconnect()
  }
)

document.getElementById('switch-network')?.addEventListener(
  'click', () => {
    const currentChainId = store.networkState?.chainId
    appKit.switchNetwork(currentChainId === pharosNetwork.id ? mainnet : pharosNetwork)
  }
)

document.getElementById('sign-message')?.addEventListener(
  'click', async () => {
    try {
      const signature = await signMessage(store.eip155Provider, store.accountState.address)

      document.getElementById('signatureState').innerHTML = signature
      document.getElementById('signatureSection').style.display = ''
    } catch (error) {
      console.error('签名失败:', error)
      alert('签名失败: ' + error.message)
    }
  }
)

document.getElementById('send-tx')?.addEventListener(
  'click', async () => {
    try {
      console.log(store.eip155Provider, store.accountState.address)
      const tx = await sendTx(store.eip155Provider, store.accountState.address)
      console.log('Tx:', tx)

      document.getElementById('txState').innerHTML = JSON.stringify(tx, null, 2)
      document.getElementById('txSection').style.display = ''
    } catch (error) {
      console.error('发送交易失败:', error)
      alert('发送交易失败: ' + error.message)
    }
  }
)

document.getElementById('get-balance')?.addEventListener(
  'click', async () => {
    try {
      const balance = await getBalance(store.eip155Provider, store.accountState.address)
      
      document.getElementById('balanceState').innerHTML = balance + ' ETH'
      document.getElementById('balanceSection').style.display = ''
    } catch (error) {
      console.error('获取余额失败:', error)
      alert('获取余额失败: ' + error.message)
    }
  }
)

// 设置初始主题
updateTheme(store.themeState.themeMode)
