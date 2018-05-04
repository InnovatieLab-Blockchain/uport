import EthereumContract from './EthereumContract'
//import { web3 } from './uportSetup'
const Web3 = require('web3')
const ganache = new Web3.providers.HttpProvider("http://localhost:7545")
const web3 = new Web3(ganache);
const contractAddress = '0x30753e4a8aad7f8597332e813735def5dd395028'
const abi = require('../../build/contracts/Assertion.json').abi

const AssertionContract = EthereumContract(web3,abi,contractAddress)

console.log(AssertionContract)

export async function getBadge(actions) {
  actions.getBadgeREQUEST()
  AssertionContract.badge
    .call((error, badge) => {
      if (error) {
        actions.getBadgeERROR(error)
        throw error
      }
      actions.getBadgeSUCCESS(badge)
      console.log("Badge: ", badge)
      return badge
    })
}

export async function getRecipient(actions) {
  actions.getRecipientREQUEST()
  AssertionContract.recipient
    .call((error, recipient) => {
      if (error) {
        actions.getRecipientERROR(error)
        throw error
      }
      actions.getRecipientSUCCESS(recipient)
      return recipient
    })
}

export async function getIssuer(actions) {
  actions.getIssuerREQUEST()
  AssertionContract.issuer
    .call((error, issuer) => {
      if (error) {
        actions.getIssuerERROR(error)
        throw error
      }
      actions.getIssuerSUCCESS(issuer)
      return issuer
    })
}

export async function getAssertionProperties(actions) {
  actions.getAssertionPropertiesREQUEST()
  AssertionContract.getProperties
    .call((error, props) => {
      if (error) {
        actions.getAssertionPropertiesERROR(error)
        throw error
      }
      actions.getAssertionPropertiesSUCCESS(props)
      return props
    })
}