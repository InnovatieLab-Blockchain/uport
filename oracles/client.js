var OracleContract = require('../build/contracts/BSNOracle.json')
var contract = require('truffle-contract')

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// Truffle abstraction to interact with our
// deployed contract
var oracleContract = contract(OracleContract)
oracleContract.setProvider(web3.currentProvider)

web3.eth.getAccounts((err, accounts) => {
  oracleContract.deployed()
  .then((oracleInstance) => {

    // Our promises
    const oraclePromises = [
      oracleInstance.getBSN(),  // Get currently stored BTC Cap
      oracleInstance.updateBSN({from: accounts[0]})  // Request oracle to update the information
    ]

    // Map over all promises
    Promise.all(oraclePromises)
    .then((result) => {
      console.log('BSN: ' + result[0])
      console.log('Requesting Oracle to update BSN Information...')
    })
    .catch((err) => {
      console.log(err)
    })
  })
  .catch((err) => {
    console.log(err)
  })
})