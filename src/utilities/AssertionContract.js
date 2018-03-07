import { web3 } from './uportSetup'


const abi = require('../contract-compiled/Assertion.json').abi

function AssertionContractSetup () {
  let AssertionABI = web3.eth.contract(abi)
  let AssertionContractObj = AssertionABI.at('0xf08a6073462fdc2a178aadae49e30f2ca5bf4022')
  return AssertionContractObj
}

const AssertionContract = AssertionContractSetup()

export default AssertionContract