import { web3 } from './uportSetup'

const contractAddress = '0x80ee9ef002Af02f7F45F5b6703413980E58E8375'
const abi = require('../../build/contracts/Quiz2.json').abi

// var MyContract = contract({
//   abi: abi1
// })
// MyContract.setProvider(ganache);
// console.log(MyContract)

// function QuizContractSetup () {
//   //const QuizABI = web3.eth.contract(abi)
//   let QuizContractObj = MyContract.deployed()

//   return QuizContractObj
// }

function QuizContractSetup () {
  let QuizABI = web3.eth.contract(abi)
  let QuizContractObj = QuizABI.at(contractAddress)
  return QuizContractObj
}

const QuizContract = QuizContractSetup()

export default QuizContract