import Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import 'dotenv/config';

console.log('-------------------==========', Network.Main)
// This example provider won't let you make transactions, only read-only calls:
  const provider = new Web3.providers.HttpProvider('https://eth-mainnet.alchemyapi.io/v2/RPgq1TBdz88OlC6ftNJsqmg6AaHS-qdY');
  
  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main,
    apiKey: process.env.YOUR_API_KEY
  })
  
const main = async() => {
  console.log("here");
  const { orders, count } = await seaport.api.getOrders({
    asset_contract_address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    token_id: "15774",
    side: 0
  })
  
  console.log(orders);
}

main()