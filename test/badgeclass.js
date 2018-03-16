var BadgeClass = artifacts.require("./BadgeClass.sol");

// {
//   "@context": "https://w3id.org/openbadges/v2",
//   "type": ["BadgeClass","http://lod.duo.nl/cdm/def/v0/MBOonderwijslicentie"],
//   "id": "http://lod.duo.nl/rio/id/onderwijslicentie/04EU25078",
//   "name": "Dakdekken niveau 2 op Deltion, Zwolle",
//   "issuer": "http://lod.duo.nl/rio/id/erkendeonderwijsinstelling/25PN",
//   "alignment": [
//     {
//       "targetName": "Dakdekken",
//       "targetUrl": "http://lod.duo.nl/rio/id/opleidingseenheid/22004",
//       "targetFramework": "CREBO",
//       "targetCode": "22004"
//     },
//     {
//       "targetName": "Dakdekker",
//       "targetUrl": "http://data.europa.eu/esco/isco/C7121",
//       "targetFramework": "ESCO",
//       "targetCode": "7121"
//     }
//   ]
// },

var account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
var contractAddress = "0x2e335f247e91caa168c64b63104c4475b2af3942"

var typeOB = "http://lod.duo.nl/cdm/def/v0/MBOonderwijslicentie"
var id = "http://lod.duo.nl/rio/id/onderwijslicentie/04EU25078"
var name = "Dakdekken niveau 2 op Deltion, Zwolle"
var issuer = "0x30753e4a8aad7f8597332e813735def5dd395028"
var alignment = ["0xb1bc3a819dca04313c5f6dddd02bac83ec48d88c", "0x6abdb719276ce5784cab438f0c3a3b55c56d5771"]
var badgeClass

contract('BadgeClass', function(accounts) {
  // it("should set and get the Properties", function() {
  //   return BadgeClass.at(contractAddress).then(function(instance) {
  //     badgeClass = instance
  //     return badgeClass.setProperties(typeOB, id, name, {from: account});
  //   }).then(function() {
  //     // If this callback is called, the transaction was successfully processed.
  //     console.log("setProperties successful!")
  //     return badgeClass.getName.call({from: account});
  //   }).then(function(name) {
  //     console.log(name)
  //     assert.equal(name, "Dakdekken niveau 2 op Deltion, Zwolle", "naam klopt niet");
  //   }).catch(function(e) {
  //     console.log(e)
  //   })
  // });
  // it("should set and get the Issuer", function() {
  //   return BadgeClass.at(contractAddress).then(function(instance) {
  //     badgeClass = instance
  //     return badgeClass.setIssuer(issuer, {from: account});
  //   }).then(function() {
  //     // If this callback is called, the transaction was successfully processed.
  //     console.log("setIssuer successful!")
  //     return badgeClass.getIssuer.call({from: account});
  //   }).then(function(name) {
  //     console.log(name)
  //     assert.equal(name, issuer, "adres klopt niet");
  //   }).catch(function(e) {
  //     console.log(e)
  //   })
  // });
  it("should get the AlignmentObjects", function() {
    return BadgeClass.at(contractAddress).then(function(instance) {
      badgeClass = instance
      return badgeClass.getAlignment.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, alignment, "adressen kloppen niet");
    }).catch(function(e) {
      console.log(e)
    })
  });
  it("should get all properties", function() {
    return BadgeClass.at(contractAddress).then(function(instance) {
      badgeClass = instance
      console.log("BadgeClass address: ", badgeClass.address)
      return badgeClass.getProperties.call({from: account});
    }).then(function(props) {
      console.log(props)
      // assert.equal(name, alignment, "adressen kloppen niet");
    }).catch(function(e) {
      console.log(e)
    })
  });
});
