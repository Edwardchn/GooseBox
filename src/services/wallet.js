import { BrowserProvider, Contract, formatUnits, parseEther } from 'ethers'
import { getProvider } from '../config/appKit.js'

/**
 * 签名消息
 * @param {Object} provider - EIP155 提供者
 * @param {string} address - 钱包地址
 * @returns {Promise<string>} 签名结果
 */
export const signMessage = async (provider, address) => {
  // 如果没有传入 provider，尝试获取当前的 provider
  const currentProvider = provider || getProvider()
  
  if (!currentProvider) {
    throw new Error('没有可用的提供者')
  }
  
  try {
    const signature = await currentProvider.request({
      method: 'personal_sign',
      params: ['Hello from AppKit!', address]
    })
    return signature
  } catch (error) {
    console.error('签名失败:', error)
    throw error
  }
}

/**
 * 发送交易
 * @param {Object} provider - EIP155 提供者
 * @param {string} address - 钱包地址
 * @returns {Promise<Object>} 交易结果
 */
export const sendTx = async (provider, address) => {
  // 如果没有传入 provider，尝试获取当前的 provider
  const currentProvider = provider || getProvider()
  
  if (!currentProvider) {
    throw new Error('没有可用的提供者')
  }

  try {
    const tx = {
      from: address,
      to: address, // 发送到同一地址用于测试
      value: parseEther("0.0001")
    }
    
    const ethersProvider = new BrowserProvider(currentProvider)
    const signer = await ethersProvider.getSigner()
    const result = await signer.sendTransaction(tx)
    
    console.log('交易发送成功:', result)
    return result
  } catch (error) {
    console.error('发送交易失败:', error)
    throw error
  }
}

/**
 * 获取余额
 * @param {Object} provider - EIP155 提供者
 * @param {string} address - 钱包地址
 * @returns {Promise<string>} 余额（ETH）
 */
export const getBalance = async (provider, address) => {
  // 如果没有传入 provider，尝试获取当前的 provider
  const currentProvider = provider || getProvider()
  
  if (!currentProvider) {
    throw new Error('没有可用的提供者')
  }
  
  try {
    const balance = await currentProvider.request({
      method: 'eth_getBalance',
      params: [address, 'latest']
    })
    
    const formattedBalance = formatUnits(balance, 'ether')
    console.log('余额查询成功:', formattedBalance)
    return formattedBalance
  } catch (error) {
    console.error('获取余额失败:', error)
    throw error
  }
}

/**
 * 切换网络
 * @param {Object} provider - EIP155 提供者
 * @param {number} chainId - 目标链 ID
 * @returns {Promise<void>}
 */
export const switchNetwork = async (provider, chainId) => {
  if (!provider) {
    throw new Error('没有可用的提供者')
  }
  
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }]
    })
    console.log('网络切换成功:', chainId)
  } catch (error) {
    console.error('切换网络失败:', error)
    throw error
  }
}
