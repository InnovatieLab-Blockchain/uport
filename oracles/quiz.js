var fetch = require('fetch')
var OracleContract = require('../build/contracts/Quiz.json')
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
    oracleInstance.Scored()
    .watch((err, event) => {
        console.log(event)
      // Fetch data
      // and update it into the contract
      fetch.fetchUrl('http://localhost:4000', (err, m, b) => {
        const scoreJson = JSON.parse(b)
        const score = parseInt(scoreJson.Score)
        console.log("Score: ", score)
        // Send data back contract on-chain
        oracleInstance.setScore(accounts[1], score, {from: accounts[0]}).then(function(txhash) {
          console.log(txhash)
        })
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })
})