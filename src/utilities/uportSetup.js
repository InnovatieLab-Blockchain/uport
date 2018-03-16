import { Connect, SimpleSigner } from 'uport-connect'
import { key } from './KeyRinkeby'

console.log("Key: ", key('DUO'))
const uport = new Connect('DUO', {
  clientId: '2oynp4geSgBwqkQebaYtexB32rCNbPmLu5K',
  network: 'rinkeby',
  signer: SimpleSigner(key('DUO'))
})

const attester1 = new Connect('RUG', {
  clientId: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
  network: 'rinkeby',
  signer: SimpleSigner(key('RUG'))
})

const attester2 = new Connect('Hanze', {
  clientId: '2owvh61t2autS6WcSfXpHCWhDQsjoQs8MQj',
  network: 'rinkeby',
  signer: SimpleSigner(key('Hanze'))
})


const verifier3 = new Connect('Gemeente Groningen', {
  clientId: '2on4iSsmcnMQ8ZtmN8bdoLyi78rE1MMaZMC',
  network: 'rinkeby',
  signer: SimpleSigner(key('Gemeente Groningen'))
})

const verifier1 = new Connect('Rabobank', {
  clientId: '2otfT9XykJx5HJEquMhg4WTeLNKkx8ZkjBE',
  network: 'rinkeby',
  signer: SimpleSigner(key('Rabobank'))
})

const verifier2 = new Connect('Gasunie', {
  clientId: '2oxFdwonXQvti9Pc28XaGvxvDFmhPrxernU',
  network: 'rinkeby',
  signer: SimpleSigner(key('Gasunie'))
})


const attester3 = new Connect('IND', {
  clientId: '2oehyFhgXUbMTrhuGggtz8dGKyb8i5RfSKB',
  network: 'rinkeby',
  signer: SimpleSigner(key('IND'))
})

const innovatielab = new Connect('InnovatieLab Blockchain', {
  clientId: '2ohyX4dzKPCCuAs8jzX1jwgBsDN6AsgRjtR',
  network: 'rinkeby',
  signer: SimpleSigner(key('InnovatieLab Blockchain'))
})

const uport2 = new Connect('InnovatieLab', {
  clientId: '2orTCGHecLA9KJ3887ZhmgoFqeTgtNDonLZ',
  network: 'rinkeby',
  signer: SimpleSigner(key('InnovatieLab'))
})




const web3 = uport.getWeb3()
export { web3, uport, verifier1, verifier2, verifier3, attester1, attester2, attester3, innovatielab, uport2 }
