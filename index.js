import Web3 from 'web3'
import { OpenSeaSDK, Network } from 'opensea-js';
import 'dotenv/config';

const main = async() => {
const provider = new Web3.providers.HttpProvider('https://eth-mainnet.alchemyapi.io/v2/RPgq1TBdz88OlC6ftNJsqmg6AaHS-qdY');

const seaport = new OpenSeaSDK(provider, {
  networkName: Network.Main,
  apiKey: process.env.API_KEY
})

var params = {
  protocol: 'seaport',
  assetContractAddress: "0x1a92f7381b9f03921564a437210bb9396471050c",
  tokenIds: "7578",
  side: "bid",
  limit: 1
}
  
  console.log(seaport, "seaport");
  // const orders = await seaport.api.getOrders(params)
  // console.log(orders);
}

main()
