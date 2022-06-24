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
  // console.log("here");
  // const { orders, count } = await seaport.api.getOrders({
  //   asset_contract_address: "0x02fa88718f365313e65b406cb39a8fe9e82d1bee",
  //   token_id: "2",
  //   side: 0
  // })
  
  // console.log(orders);
  const sdk = require('api')('@opensea/v1.0#54d5pd7l38yyb63');

  sdk['asset-offers']({
    limit: '20',
    asset_contract_address: '0x02fa88718f365313e65b406cb39a8fe9e82d1bee',
    token_id: '2',
    'X-API-KEY': process.env.YOUR_API_KEY
  })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

main()