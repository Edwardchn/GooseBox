import { appKit, getProvider } from './config/appKit.js'
import { store, updateStore } from './store/appkitStore.js'
import { updateButtonVisibility } from './utils/dom.js'
import { initializeSubscribers } from './utils/subscribers.js'

// 初始化订阅者 - faucet.html 需要的事件监听
initializeSubscribers(appKit)

// 初始检查按钮状态
updateButtonVisibility(appKit.getIsConnectedState());

// 如果已经连接，获取 provider 并存储到 store
if (appKit.getIsConnectedState()) {
  const provider = getProvider()
  updateStore('eip155Provider', provider)
}

// 等待 DOM 加载完成后添加按钮事件监听器
document.addEventListener('DOMContentLoaded', () => {
  // 连接钱包按钮事件监听器 - faucet.html 需要
  const connectBtn = document.getElementById('open-connect-modal')
  const connectMobileBtn = document.getElementById('open-connect-modal-mobile')
  
  if (connectBtn) {
    connectBtn.addEventListener('click', () => {
      appKit.open()
    })
  }

  if (connectMobileBtn) {
    connectMobileBtn.addEventListener('click', () => {
      appKit.open()
    })
  }
})