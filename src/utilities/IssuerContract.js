import { web3 } from './uportSetup'


const abi = require('../../build/contracts/Issuer.json').abi

function IssuerContractSetup () {
  let IssuerABI = web3.eth.contract(abi)
  let IssuerContractObj = IssuerABI.at('0x30753e4a8aad7f8597332e813735def5dd395028')
  return IssuerContractObj
}

const IssuerContract = IssuerContractSetup()

export default IssuerContract