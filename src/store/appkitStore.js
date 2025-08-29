// AppKit 状态存储
export const store = {
  accountState: {},
  networkState: {},
  appKitState: {},
  themeState: { themeMode: 'dark', themeVariables: {} },
  events: [],
  walletInfo: {},
  eip155Provider: null
}

// 更新存储的通用函数
export const updateStore = (key, value) => {
  store[key] = value
  console.log(`Store updated - ${key}:`, value)
}

// 获取当前连接状态
export const getConnectionState = () => {
  return {
    isConnected: !!store.accountState?.address,
    address: store.accountState?.address,
    chainId: store.networkState?.chainId
  }
}

// 重置存储
export const resetStore = () => {
  store.accountState = {}
  store.networkState = {}
  store.eip155Provider = null
  console.log('Store reset')
}
