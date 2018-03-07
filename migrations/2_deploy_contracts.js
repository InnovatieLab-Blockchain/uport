var Alignment = artifacts.require("./Alignment.sol");
var BadgeClass = artifacts.require("./BadgeClass.sol");
var owned = artifacts.require("./owned.sol");
var Profile = artifacts.require("./Profile.sol");
var Issuer = artifacts.require("./Issuer.sol");
var Recipient = artifacts.require("./Recipient.sol");
var Assertion = artifacts.require("./Assertion.sol");
var OpenBadges = artifacts.require("./OpenBadges.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Alignment, "Dakdekken","http://lod.duo.nl/rio/id/opleidingseenheid/22004", "CREBO", "22004");
  deployer.deploy(Alignment, "Dakdekker","http://data.europa.eu/esco/isco/C7121","ESCO", "7121");

  deployer.deploy(BadgeClass);
  deployer.deploy(owned);
  deployer.deploy(Profile);
  deployer.deploy(Issuer, "http://lod.duo.nl/cdm/def/v0/ErkendeOnderwijsinstelling","http://lod.duo.nl/rio/id/erkendeonderwijsinstelling/25PN","Thorbecke Scholengemeenschap");
  deployer.deploy(Recipient, "marc.minnee@gmail.com", "blockchain id", "Marc Minnee");
  deployer.deploy(Assertion, "http://lod.duo.nl/cdm/def/v0/Oordeel",
    "http://lod.duo.nl/bron/id/550e8400-e29b-41d4-a716-446655440000",
    "Assertion",
    "0x06aacf1ab9460c3925f71ef1b74f206aada978ee",
    "0xcb1c7b794f20d3e8993e0076b79b2649413a2256",
    "0xb37c6a5b8810184b622ec7a15463d6ae3936c1d1")
  deployer.deploy(OpenBadges);
};

// Rinkeby addresses:


// Alignment: 0xf3042e4c41ac33fa28b97c1622555ec72e01ebb8
// Alignment: 0xf332d17d37833561feaa7a09f3a8710da9007bfa
// BadgeClass: 0xa112d276f59d499bf5800722d57587b1f7849352
// Issuer: 0xa306483dbfff9573b1e886fcb0a30be365c02b5c
// Recipient: 0xc00b8351716fc4ee027ab2f02a56d6055ab9bd54
// Assertion: 0x956297592e0c7b3a3b4093563438adb4e890e9cf
// OpenBadges: 0xc38508b0a69b4b7e5f71af74da35e74b13b43dda