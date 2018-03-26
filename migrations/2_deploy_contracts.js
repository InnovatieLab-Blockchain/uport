var Alignment1 = artifacts.require("./Alignment.sol");
var Alignment2 = artifacts.require("./Alignment.sol");

var BadgeClass = artifacts.require("./BadgeClass.sol");
// var owned = artifacts.require("./owned.sol");
var Profile = artifacts.require("./Profile.sol");
var Issuer = artifacts.require("./Issuer.sol");
var Recipient = artifacts.require("./Recipient.sol");
var Assertion = artifacts.require("./Assertion.sol");
var OpenBadges = artifacts.require("./OpenBadges.sol");
var BSNOracle = artifacts.require("./BSNOracle.sol");
var Quiz = artifacts.require("./Quiz.sol");

module.exports = function(deployer, network, accounts) {

  var alignment1, alignment2, issuer, recipient

// Deploy A, then deploy B, passing in A's newly deployed address
deployer.deploy(Alignment1, "Dakdekken","http://lod.duo.nl/rio/id/opleidingseenheid/22004", "CREBO", "22004").then(function() {
  alignment1 = Alignment1.address; 
  console.log("Alignment1: ", alignment1)
  return deployer.deploy(Alignment2, "Dakdekker","http://data.europa.eu/esco/isco/C7121","ESCO", "7121");
}).then(function(){
  alignment2 = Alignment2.address;
  console.log("Alignment2: ", alignment2)
  return deployer.deploy(Issuer, "http://lod.duo.nl/cdm/def/v0/ErkendeOnderwijsinstelling","http://lod.duo.nl/rio/id/erkendeonderwijsinstelling/25PN","Thorbecke Scholengemeenschap");
}).then(function(){
  issuer = Issuer.address;
  return deployer.deploy(Recipient, "marc.minnee@gmail.com", "blockchain id", "Marc Minnee");
}).then(function(){
  recipient = Recipient.address;
});

var typeOB = "http://lod.duo.nl/cdm/def/v0/MBOonderwijslicentie"
var id = "http://lod.duo.nl/rio/id/onderwijslicentie/04EU25078"
var name = "Dakdekken niveau 2 op Deltion, Zwolle"
var align = [ alignment1, alignment2 ]
deployer.deploy(BadgeClass, typeOB, id, name, issuer, align).then(function(){
  return deployer.deploy(Assertion, "http://lod.duo.nl/cdm/def/v0/Oordeel",
    "http://lod.duo.nl/bron/id/550e8400-e29b-41d4-a716-446655440000",
    "Assertion",
    issuer,
    BadgeClass.address,
    recipient)
});


  deployer.deploy(OpenBadges);
  deployer.deploy(BSNOracle);
  deployer.deploy(Quiz);
};

// Rinkeby addresses:

// Alignment: 0xf3042e4c41ac33fa28b97c1622555ec72e01ebb8
// Alignment: 0xf332d17d37833561feaa7a09f3a8710da9007bfa
// BadgeClass: 0xa112d276f59d499bf5800722d57587b1f7849352
// Issuer: 0xa306483dbfff9573b1e886fcb0a30be365c02b5c
// Recipient: 0xc00b8351716fc4ee027ab2f02a56d6055ab9bd54
// Assertion: 0x2f3f020b282e7768f85f91d12eff85f2aea54ca9
// OpenBadges: 0xc38508b0a69b4b7e5f71af74da35e74b13b43dda