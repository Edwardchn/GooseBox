export const store = {
  accountState: {},
  networkState: {},
  appKitState: {},
  themeState: { themeMode: 'dark', themeVariables: {} },
  events: [],
  walletInfo: {},
  eip155Provider: null
}

export const updateStore = (key, value) => {
  store[key] = value

}

export const getConnectionState = () => {
  return {
    isConnected: !!store.accountState?.address,
    address: store.accountState?.address,
    chainId: store.networkState?.chainId
  }
}

export const resetStore = () => {
  store.accountState = {}
  store.networkState = {}
  store.eip155Provider = null

}
