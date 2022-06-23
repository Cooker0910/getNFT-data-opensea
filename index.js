import Web3 from 'web3'
import { OpenSeaPort, OpenSeaSDK, Network } from 'opensea-js'
import 'dotenv/config';

console.log('-------------------==========', Network.Main)
// This example provider won't let you make transactions, only read-only calls:
  const provider = new Web3.providers.HttpProvider('https://eth-mainnet.alchemyapi.io/v2/RPgq1TBdz88OlC6ftNJsqmg6AaHS-qdY');
  
  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
    apiKey: process.env.YOUR_API_KEY
  })

  const openseaSDK = new OpenSeaSDK(provider, {
    networkName: Network.Main,
    apiKey: process.env.YOUR_API_KEY
  })
  
const main = async() => {
  console.log(provider);
  const { orders, count } = await openseaSDK.api.getOrders({
    asset_contract_address: "0x1a92f7381b9f03921564a437210bb9396471050c",
    token_id: "7578",
    side: 1
  })
  
  console.log(orders);
}

main()