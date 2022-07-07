const Web3 = require('web3')
const { OpenSeaPort, Network, OpenSeaSDK } = require('./Opensea/lib/index');
require('dotenv').config()

const main = async () => {
  const provider = new Web3.providers.HttpProvider('https://eth-mainnet.alchemyapi.io/v2/RPgq1TBdz88OlC6ftNJsqmg6AaHS-qdY');

  const seaport = new OpenSeaSDK(provider, {
    networkName: Network.Main,
    apiKey: process.env.API_KEY
  })

  const { orders, count } = await seaport.api.getOrders({
    assetContractAddress: "0x1a92f7381b9f03921564a437210bb9396471050c",
    tokenId: "5181",
    side: "ask",
    limit: 5
  })
  console.log(orders, 'here');
}

main()
