import { Connect, SimpleSigner } from 'uport-connect'
var mnid = require('mnid')

const uport = new Connect('DUO', {
  clientId: '2oynp4geSgBwqkQebaYtexB32rCNbPmLu5K',
  network: 'rinkeby',
  signer: SimpleSigner('69c9446852693c00bd0a8825fad8297e4f9db34c9562a660585a0e767f993bd7')
})

const attester1 = new Connect('RUG', {
  clientId: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
  network: 'rinkeby',
  signer: SimpleSigner('11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6')
})

const attester2 = new Connect('Hanze', {
  clientId: '2owvh61t2autS6WcSfXpHCWhDQsjoQs8MQj',
  network: 'rinkeby',
  signer: SimpleSigner('5348f95c79c45633b4418ba04e64f69cafa8734de474651d5436249742901f77')
})


const verifier3 = new Connect('Gemeente Groningen', {
  clientId: '2on4iSsmcnMQ8ZtmN8bdoLyi78rE1MMaZMC',
  network: 'rinkeby',
  signer: SimpleSigner('b564ce9e5f2776885626f1a0eb3b880af19ac9d04b96e6cc58c7f51906be7052')
})

const verifier1 = new Connect('Rabobank', {
  clientId: '2otfT9XykJx5HJEquMhg4WTeLNKkx8ZkjBE',
  network: 'rinkeby',
  signer: SimpleSigner('13b1ed7eb7d0af503dd5f9e292356d58ece0e50221c3ba65ec8ce4c5a3b99c51')
})

const verifier2 = new Connect('Gasunie', {
  clientId: '2oxFdwonXQvti9Pc28XaGvxvDFmhPrxernU',
  network: 'rinkeby',
  signer: SimpleSigner('d99b508accb2bcd22a01fcca5010acffa3ea1579732e74dce45c48d523b65b8b')
})


const attester3 = new Connect('IND', {
  clientId: '2oehyFhgXUbMTrhuGggtz8dGKyb8i5RfSKB',
  network: 'rinkeby',
  signer: SimpleSigner('bfbe8c269238fe9f7fe908f3ddf542e46e578652ed58c2625da886a291cd523c')
})


  const decodedId = mnid.decode('2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX')
  console.log('Decoded id:', decodedId)



const web3 = uport.getWeb3()
export { web3, uport, verifier1, verifier2, verifier3, attester1, attester2, attester3 }
