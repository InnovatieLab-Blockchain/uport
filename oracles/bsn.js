var fetch = require('fetch')
var OracleContract = require('../build/contracts/BSNOracle.json')
var contract = require('truffle-contract')

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// Truffle abstraction to interact with our
// deployed contract
var oracleContract = contract(OracleContract)
oracleContract.setProvider(web3.currentProvider)

// Get accounts from web3
web3.eth.getAccounts((err, accounts) => {
  oracleContract.deployed()
  .then((oracleInstance) => {
    // Watch event and respond to event
    // With a callback function  
    oracleInstance.CallbackGetBSN()
    .watch((err, event) => {
        console.log(event)
      // Fetch data
      // and update it into the contract
      fetch.fetchUrl('http://localhost:4000', (err, m, b) => {
        const bsnJson = JSON.parse(b.toString())
        const bsn = parseInt(bsnJson.BSN)

        // Send data back contract on-chain
        oracleInstance.setBSN(bsn, {from: accounts[0]})
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })
})