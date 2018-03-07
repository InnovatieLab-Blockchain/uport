import { web3 } from './uportSetup'


const abi = require('../contract-compiled/BadgeClass.json').abi

function BadgeClassContractSetup () {
  let BadgeClassABI = web3.eth.contract(abi)
  let BadgeClassContractObj = BadgeClassABI.at('0xcb1c7b794f20d3e8993e0076b79b2649413a2256')
  return BadgeClassContractObj
}

const BadgeClassContract = BadgeClassContractSetup()

export default BadgeClassContract