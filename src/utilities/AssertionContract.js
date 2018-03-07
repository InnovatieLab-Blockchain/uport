import { web3 } from './uportSetup'

const abi = require('../../build/contracts/Assertion.json').abi

function AssertionContractSetup () {
  let AssertionABI = web3.eth.contract(abi)
  let AssertionContractObj = AssertionABI.at('0x956297592e0c7b3a3b4093563438adb4e890e9cf')
  return AssertionContractObj
}

const AssertionContract = AssertionContractSetup()

export default AssertionContract
