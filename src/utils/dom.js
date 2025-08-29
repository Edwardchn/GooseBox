/**
 * 更新主题
 * @param {string} themeMode - 主题模式 ('light' | 'dark')
 */
export const updateTheme = (themeMode) => {
  document.documentElement.setAttribute('data-theme', themeMode)
  console.log('主题已更新为:', themeMode)
}

/**
 * 更新按钮可见性
 * @param {boolean} isConnected - 是否已连接钱包
 */
export const updateButtonVisibility = (isConnected) => {
  // 连接按钮
  const connectBtns = document.querySelectorAll('#open-connect-modal, #open-connect-modal-mobile')
  connectBtns.forEach(btn => {
    if (btn) {
      btn.style.display = isConnected ? 'none' : 'block'
    }
  })

  // 断开连接按钮
  const disconnectBtn = document.getElementById('disconnect')
  if (disconnectBtn) {
    disconnectBtn.style.display = isConnected ? 'block' : 'none'
  }

  // 钱包操作按钮
  const walletActions = document.querySelectorAll(
    '#switch-network, #sign-message, #send-tx, #get-balance'
  )
  walletActions.forEach(btn => {
    if (btn) {
      btn.style.display = isConnected ? 'block' : 'none'
    }
  })

  console.log('按钮可见性已更新, 连接状态:', isConnected)
}

/**
 * 显示钱包信息
 * @param {string} address - 钱包地址
 * @param {string} chainId - 链 ID
 */
export const displayWalletInfo = (address, chainId) => {
  // 显示地址
  const addressElement = document.getElementById('wallet-address')
  if (addressElement) {
    addressElement.textContent = `地址: ${address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '未连接'}`
  }

  // 显示网络
  const networkElement = document.getElementById('wallet-network')
  if (networkElement) {
    networkElement.textContent = `网络: ${chainId || '未知'}`
  }
}

/**
 * 显示消息
 * @param {string} message - 消息内容
 * @param {string} type - 消息类型 ('success' | 'error' | 'info')
 */
export const showMessage = (message, type = 'info') => {
  // 创建消息元素
  const messageEl = document.createElement('div')
  messageEl.className = `message message-${type}`
  messageEl.textContent = message
  
  // 添加样式
  messageEl.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    max-width: 300px;
    word-wrap: break-word;
    ${type === 'success' ? 'background-color: #10b981;' : ''}
    ${type === 'error' ? 'background-color: #ef4444;' : ''}
    ${type === 'info' ? 'background-color: #3b82f6;' : ''}
  `
  
  // 添加到页面
  document.body.appendChild(messageEl)
  
  // 3秒后自动移除
  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.parentNode.removeChild(messageEl)
    }
  }, 3000)
}
