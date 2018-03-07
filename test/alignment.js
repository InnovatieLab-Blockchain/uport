var Alignment = artifacts.require("./Alignment.sol");

// {
//   "targetName": "Dakdekken",
//   "targetUrl": "http://lod.duo.nl/rio/id/opleidingseenheid/22004",
//   "targetFramework": "CREBO",
//   "targetCode": "22004"
// }

var account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
var contractAddress = "0x13274fe19c0178208bcbee397af8167a7be27f6f"

contract('Alignment', function(accounts) {
  it("should get the targetName", function() {
    return Alignment.at(contractAddress).then(function(instance) {
      return instance.targetName.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "Dakdekken", "naam klopt niet");
    });
  });
  it("should get the targetUrl", function() {
    return Alignment.at(contractAddress).then(function(instance) {
      return instance.targetUrl.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "http://lod.duo.nl/rio/id/opleidingseenheid/22004", "naam klopt niet");
    });
  });
  it("should get the targetFramework", function() {
    return Alignment.at(contractAddress).then(function(instance) {
      return instance.targetFramework.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "CREBO", "naam klopt niet");
    });
  });
  it("should get the targetCode", function() {
    return Alignment.at(contractAddress).then(function(instance) {
      return instance.targetCode.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "22004", "naam klopt niet");
    });
  });
  it("should get all properties", function() {
    return Alignment.at(contractAddress).then(function(instance) {
      return instance.getProperties.call({from: account});
    }).then(function(name) {
      console.log(name)
      // assert.equal(name, "https://w3id.org/openbadges/v2", "naam klopt niet");
    });
  });
});
