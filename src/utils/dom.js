// 更新按钮可见性 - 只处理 faucet.html 中实际存在的按钮
export const updateButtonVisibility = (isConnected) => {
  // 连接钱包按钮 (faucet.html 中存在)
  const connectBtns = document.querySelectorAll('#open-connect-modal, #open-connect-modal-mobile')
  connectBtns.forEach(btn => {
    if (btn) {
      btn.style.display = isConnected ? 'none' : 'block'
    }
  })

  // 断开连接按钮 (faucet.html 中存在)
  const disconnectBtn = document.getElementById('disconnect')
  if (disconnectBtn) {
    disconnectBtn.style.display = isConnected ? 'block' : 'none'
  }

  // 移动端断开连接按钮
  const disconnectMobileBtn = document.getElementById('disconnect-mobile')
  if (disconnectMobileBtn) {
    disconnectMobileBtn.style.display = isConnected ? 'block' : 'none'
  }
}

// 显示临时消息通知 - 被 subscribers.js 使用
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