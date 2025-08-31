import { store, updateStore } from '../store/appkitStore.js'
import { updateButtonVisibility, showMessage } from './dom.js'
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


  appKit.subscribeState((state) => {


    updateStore('appKitState', state)
    
    const isConnected = appKit.getIsConnectedState()
    updateButtonVisibility(isConnected)
  })

  appKit.subscribeAccount((account) => {

    
    updateStore('accountState', account)
    
    if (account.isConnected && account.address) {

      const provider = getProvider()
      updateStore('eip155Provider', provider)
      
      // faucet.html 使用自己的钱包信息显示逻辑
      

      const walletConnectedMsg = getWalletConnectedMessage(account.address)
      showMessage(walletConnectedMsg, 'success')
      

      if (window.onWalletConnected) {
        window.onWalletConnected(account.address)
      }
    } else {

      updateStore('eip155Provider', null)
      // faucet.html 处理断开连接的 UI 更新
      
      if (window.onWalletDisconnected) {
        window.onWalletDisconnected()
      }
    }
  })


  appKit.subscribeNetwork((network) => {

    updateStore('networkState', network)
    
    // faucet.html 处理网络变化的 UI 更新
  })

  appKit.subscribeTheme((theme) => {

    updateStore('themeState', theme)
  })

  appKit.subscribeWalletInfo((walletInfo) => {

    updateStore('walletInfo', walletInfo)
  })


  appKit.subscribeEvents((event) => {

    const currentEvents = store.events || []
    updateStore('events', [...currentEvents, event])
  })


}
