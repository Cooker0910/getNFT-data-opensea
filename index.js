import * as Web3 from 'web3'
import { OpenSeaSDK, Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const openseaSDK = new OpenSeaSDK(provider, {
  networkName: Network.Main,
  apiKey: process.env.YOUR_API_KEY
})

const { orders, count } = await openseaSDK.api.getOrders({
  asset_contract_address: tokenAddress,
  token_id: token_id,
  side: "bid"
})