import Web3 from 'web3'
import { OpenSeaSDK, Network } from 'opensea-js'
import 'dotenv/config';

const main = async() => {
  console.log('-------------------==========', process.env.YOUR_API_KEY)
  // This example provider won't let you make transactions, only read-only calls:
  const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');
  
  const openseaSDK = new OpenSeaSDK(provider, {
    networkName: Network.Main,
    apiKey: process.env.YOUR_API_KEY
  })
  
  const { orders, count } = await openseaSDK.api.getOrders({
    asset_contract_address: 0x1a92f7381b9f03921564a437210bb9396471050c,
    token_id: 7578,
    side: "bid"
  })
  
  console.log(orders);
}


main()