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
    assetContractAddress: "0xed5af388653567af2f388e6224dc7c4b3241c544",
    tokenId: "1365",
    side: "bid",
    limit: 5
  })
  console.log(orders, 'here');
}

main()
