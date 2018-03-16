var Assertion = artifacts.require("./Assertion.sol");

// {
//   "@context": "https://w3id.org/openbadges/v2",
//   "type": ["Assertion","http://lod.duo.nl/cdm/def/v0/Oordeel"],
//   "id": "http://lod.duo.nl/bron/id/550e8400-e29b-41d4-a716-446655440000",
//   "recipient": {
//     "type": "email",
//     "hashed": true,
//     "salt": "deadsea",
//     "identity": "sha256$c7ef86405ba71b85acd8e2e95166c4b111448089f2e1599f42fe1bba46e865c5"
//   },
//   "issuedOn": "2016-12-31T23:59:59Z",
//   "badge": "http://lod.duo.nl/rio/id/MBOonderwijslicentie/25PN92111",
//   "verification": {
//     "type": "hosted"
//   }
// }

var account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
var account2 = "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
var contractAddress = "0xe4e47451aad6c89a6d9e4ad104a7b77ffe1d3b36"
var id = "http://lod.duo.nl/bron/id/550e8400-e29b-41d4-a716-446655440000"
var typeOB = "http://lod.duo.nl/cdm/def/v0/Oordeel"
var name = "Assertion"
var issuer = "0x06aacf1ab9460c3925f71ef1b74f206aada978ee"
var recipient = "0xb37c6a5b8810184b622ec7a15463d6ae3936c1d1"
var badge = "0xcb1c7b794f20d3e8993e0076b79b2649413a2256"
var assertion

contract('Assertion', function(accounts) {
  // it("should get the Properties", function() {
  //   return Assertion.at(contractAddress).then(function(instance) {
  //     assertion = instance
  //     return assertion.recipient.call({from: account});
  //   }).then(function(name) {
  //     console.log(name)
  //     assert.equal(name, recipient, "naam klopt niet");
  //     return assertion.issuer.call({from: account});
  //   }).then(function(name) {
  //     console.log(name)
  //     assert.equal(name, issuer, "naam klopt niet");
  //     return assertion.badge.call({from: account});
  //   }).then(function(name) {
  //     console.log(name)
  //     assert.equal(name, badge, "naam klopt niet");
  //     return assertion.issuedOn.call({from: account});
  //   }).then(function(name) {
  //     console.log(name)
  //   })
  // });
  it("should get all properties", function() {
    return Assertion.at(contractAddress).then(function(instance) {
      return instance.getProperties.call({from: account});
    }).then(function(name) {
      console.log(name)
      // assert.equal(name, "https://w3id.org/openbadges/v2", "naam klopt niet");
    });
  });
});
