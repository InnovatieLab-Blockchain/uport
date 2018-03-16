import { Credentials, SimpleSigner } from 'uport'

const signer = SimpleSigner('11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6')
const credentials = new Credentials({
  appName: 'RUG',
  address: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
  signer: signer,
  networks: 'rinkeby'
})
