import { web3 } from './uportSetup'

// const Web3 = require('web3')
const abi = require('../../build/contracts/BadgeClass.json').abi

function BadgeClassContractSetup () {
  let BadgeClassABI = web3.eth.contract(abi)
  let BadgeClassContractObj = BadgeClassABI.at('0xa112d276f59d499bf5800722d57587b1f7849352')
  return BadgeClassContractObj
}

const BadgeClassContract = BadgeClassContractSetup()

export default BadgeClassContract



// var provider = new Web3.providers.HttpProvider("http://localhost:8545");
// var contract = require("truffle-contract");

// function BadgeClassContractSetup () {
//   let BadgeClassABI = contract(blob)
//   BadgeClassABI.setProvider(provider)
//   let BadgeClassContractObj = BadgeClassABI.at('0xaa588d3737b611bafd7bd713445b314bd453a5c8')
//   return BadgeClassContractObj
// }

// const BadgeClassContract = BadgeClassContractSetup()


// export default BadgeClassContract