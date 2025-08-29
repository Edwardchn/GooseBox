import { store, updateStore } from '../store/appkitStore.js'
import { updateButtonVisibility, displayWalletInfo, showMessage } from './dom.js'
import { getProvider } from '../config/appKit.js'

/**
 * 初始化 AppKit 事件订阅者
 * @param {Object} appKit - AppKit 实例
 */
export const initializeSubscribers = (appKit) => {
  console.log('初始化 AppKit 事件订阅者...')

  // 订阅钱包连接状态变化
  appKit.subscribeState((state) => {
    console.log('AppKit 状态变化:', state)
    
    // 更新存储
    updateStore('appKitState', state)
    
    // 更新按钮可见性
    const isConnected = appKit.getIsConnectedState()
    updateButtonVisibility(isConnected)
  })

  // 订阅账户变化
  appKit.subscribeAccount((account) => {
    console.log('账户状态变化:', account)
    
    // 更新存储
    updateStore('accountState', account)
    
    // 当连接时获取 provider
    if (account.isConnected && account.address) {
      // 使用辅助函数获取 provider
      const provider = getProvider()
      updateStore('eip155Provider', provider)
      
      displayWalletInfo(account.address, account.chainId)
      showMessage(`钱包已连接: ${account.address.slice(0, 6)}...${account.address.slice(-4)}`, 'success')
      
      // 调用全局回调（如果存在）
      if (window.onWalletConnected) {
        window.onWalletConnected(account.address)
      }
    } else {
      // 断开连接时清除 provider
      updateStore('eip155Provider', null)
      displayWalletInfo(null, null)
      showMessage('钱包已断开连接', 'info')
      
      // 调用全局回调（如果存在）
      if (window.onWalletDisconnected) {
        window.onWalletDisconnected()
      }
    }
  })

  // 订阅网络变化
  appKit.subscribeNetwork((network) => {
    console.log('网络状态变化:', network)
    
    // 更新存储
    updateStore('networkState', network)
    
    if (network.chainId) {
      displayWalletInfo(store.accountState?.address, network.chainId)
      showMessage(`网络已切换到: ${network.name || network.chainId}`, 'info')
    }
  })

  // 获取提供者 (AppKit 1.8+ 不需要单独订阅 provider，它通过账户状态管理)
  // Provider 会在连接时自动可用

  // 订阅主题变化
  appKit.subscribeTheme((theme) => {
    console.log('主题状态变化:', theme)
    
    // 更新存储
    updateStore('themeState', theme)
  })

  // 订阅钱包信息变化
  appKit.subscribeWalletInfo((walletInfo) => {
    console.log('钱包信息变化:', walletInfo)
    
    // 更新存储
    updateStore('walletInfo', walletInfo)
  })

  // 订阅事件
  appKit.subscribeEvents((event) => {
    console.log('AppKit 事件:', event)
    
    // 将事件添加到存储
    const currentEvents = store.events || []
    updateStore('events', [...currentEvents, event])
  })

  console.log('AppKit 事件订阅者初始化完成')
}
