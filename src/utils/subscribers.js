import { store, updateStore } from '../store/appkitStore.js'
import { updateButtonVisibility, displayWalletInfo, showMessage } from './dom.js'
import { getProvider } from '../config/appKit.js'

function getWalletConnectedMessage(address) {
  const currentLang = localStorage.getItem('goosebox_lang') || 'zh'
  
  const messages = {
    zh: '钱包已连接',
    en: 'Wallet Connected',
    ru: 'Кошелек подключен',
    vi: 'Ví đã kết nối',
    uk: 'Гаманець підключено',
    id: 'Dompet Terhubung'
  }

  const message = messages[currentLang] || messages.zh
  
  const formattedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`
  
  return `${message}: ${formattedAddress}`
}

export const initializeSubscribers = (appKit) => {
  console.log('初始化 AppKit 事件订阅者...')

  appKit.subscribeState((state) => {
    console.log('AppKit 状态变化:', state)

    updateStore('appKitState', state)
    
    const isConnected = appKit.getIsConnectedState()
    updateButtonVisibility(isConnected)
  })

  appKit.subscribeAccount((account) => {
    console.log('账户状态变化:', account)
    
    updateStore('accountState', account)
    
    if (account.isConnected && account.address) {

      const provider = getProvider()
      updateStore('eip155Provider', provider)
      
      displayWalletInfo(account.address, account.chainId)
      

      const walletConnectedMsg = getWalletConnectedMessage(account.address)
      showMessage(walletConnectedMsg, 'success')
      

      if (window.onWalletConnected) {
        window.onWalletConnected(account.address)
      }
    } else {

      updateStore('eip155Provider', null)
      displayWalletInfo(null, null)
      
      if (window.onWalletDisconnected) {
        window.onWalletDisconnected()
      }
    }
  })


  appKit.subscribeNetwork((network) => {
    console.log('网络状态变化:', network)
    updateStore('networkState', network)
    
    if (network.chainId) {
      displayWalletInfo(store.accountState?.address, network.chainId)
    }
  })

  appKit.subscribeTheme((theme) => {
    console.log('主题状态变化:', theme)
    updateStore('themeState', theme)
  })

  appKit.subscribeWalletInfo((walletInfo) => {
    console.log('钱包信息变化:', walletInfo)
    updateStore('walletInfo', walletInfo)
  })


  appKit.subscribeEvents((event) => {
    console.log('AppKit 事件:', event)
    const currentEvents = store.events || []
    updateStore('events', [...currentEvents, event])
  })

  console.log('AppKit 事件订阅者初始化完成')
}
