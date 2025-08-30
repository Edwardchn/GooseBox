
export const updateTheme = (themeMode) => {
  document.documentElement.setAttribute('data-theme', themeMode)
  console.log('主题已更新为:', themeMode)
}


export const updateButtonVisibility = (isConnected) => {
 
  const connectBtns = document.querySelectorAll('#open-connect-modal, #open-connect-modal-mobile')
  connectBtns.forEach(btn => {
    if (btn) {
      btn.style.display = isConnected ? 'none' : 'block'
    }
  })

 
  const disconnectBtn = document.getElementById('disconnect')
  if (disconnectBtn) {
    disconnectBtn.style.display = isConnected ? 'block' : 'none'
  }

 
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


export const displayWalletInfo = (address, chainId) => {

  const addressElement = document.getElementById('wallet-address')
  if (addressElement) {
    addressElement.textContent = `地址: ${address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '未连接'}`
  }

  const networkElement = document.getElementById('wallet-network')
  if (networkElement) {
    networkElement.textContent = `网络: ${chainId || '未知'}`
  }
}

export const showMessage = (message, type = 'info') => {

  const messageEl = document.createElement('div')
  messageEl.className = `message message-${type}`
  messageEl.textContent = message
  

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
  

  document.body.appendChild(messageEl)
  
  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.parentNode.removeChild(messageEl)
    }
  }, 3000)
}
