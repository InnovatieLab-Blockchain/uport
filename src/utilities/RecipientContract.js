import { web3 } from './uportSetup'


const abi = require('../../build/contracts/Recipient.json').abi

function RecipientContractSetup () {
  let RecipientABI = web3.eth.contract(abi)
  let RecipientContractObj = RecipientABI.at('0xfb88de099e13c3ed21f80a7a1e49f8caecf10df6')
  return RecipientContractObj
}

const RecipientContract = RecipientContractSetup()

export default RecipientContract