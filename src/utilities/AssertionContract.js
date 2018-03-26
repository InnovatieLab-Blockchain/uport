import { web3 } from './uportSetup'
// const Web3 = require('web3')
// const ganache = new Web3.providers.HttpProvider("http://localhost:7545")
// const web3 = new Web3(ganache);

const contractAddress = '0x2f3f020b282e7768f85f91d12eff85f2aea54ca9'
const abi = require('../../build/contracts/Assertion.json').abi


// const contractAddress = '0xb529f14aa8096f943177c09ca294ad66d2e08b1f'
// const abi = require('../../build/contracts/Assertion.json').abi

// var MyContract = contract({
//   abi: abi1
// })
// MyContract.setProvider(ganache);
// console.log(MyContract)

// function AssertionContractSetup () {
//   //const AssertionABI = web3.eth.contract(abi)
//   let AssertionContractObj = MyContract.deployed()

//   return AssertionContractObj
// }

function AssertionContractSetup () {
  let AssertionABI = web3.eth.contract(abi)
  let AssertionContractObj = AssertionABI.at(contractAddress)
  return AssertionContractObj
}

const AssertionContract = AssertionContractSetup()

export default AssertionContract