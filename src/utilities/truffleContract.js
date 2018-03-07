import { web3 } from './uportSetup'


const abi = require('../../build/contracts/Assertion.json').abi

function AssertionContractSetup () {
  let AssertionABI = web3.eth.contract(abi)
  let AssertionContractObj = AssertionABI.at('0xaa588d3737b611bafd7bd713445b314bd453a5c8')
  return AssertionContractObj
}

const AssertionContract = AssertionContractSetup()

export default AssertionContract



var provider = new Web3.providers.HttpProvider("http://localhost:8545");
var contract = require("truffle-contract");

var MyContract = contract({
  abi: ...,
  unlinked_binary: ...,
  address: ..., // optional
  // many more
})
MyContract.setProvider(provider);