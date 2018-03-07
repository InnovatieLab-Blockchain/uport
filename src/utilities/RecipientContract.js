import { web3 } from './uportSetup'


const abi = require('../contract-compiled/Recipient.json').abi

function RecipientContractSetup () {
  let RecipientABI = web3.eth.contract(abi)
  let RecipientContractObj = RecipientABI.at('0xb37c6a5b8810184b622ec7a15463d6ae3936c1d1')
  return RecipientContractObj
}

const RecipientContract = RecipientContractSetup()

export default RecipientContract