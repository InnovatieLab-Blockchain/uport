//import { web3 } from './uportSetup'
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const abi = require('../../build/contracts/Assertion.json').abi

function AssertionContractSetup () {
  let AssertionABI = web3.eth.contract(abi)
  let AssertionContractObj = AssertionABI.at('0xaa588d3737b611bafd7bd713445b314bd453a5c8')
  return AssertionContractObj
}

const AssertionContract = AssertionContractSetup()

export default AssertionContract
