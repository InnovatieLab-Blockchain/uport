import { web3 } from './uportSetup'


const abi = require('../contract-compiled/Issuer.json').abi

function IssuerContractSetup () {
  let IssuerABI = web3.eth.contract(abi)
  let IssuerContractObj = IssuerABI.at('0x06aacf1ab9460c3925f71ef1b74f206aada978ee')
  return IssuerContractObj
}

const IssuerContract = IssuerContractSetup()

export default IssuerContract