//import { web3 } from './uportSetup'
const Web3 = require('web3')
const ganache = new Web3.providers.HttpProvider("http://localhost:7545")
const web3 = new Web3(ganache);

var contract = require("truffle-contract");


const contractAddress = '0xe4e47451aad6c89a6d9e4ad104a7b77ffe1d3b36'
const abi = require('../../build/contracts/Assertion.json').abi

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