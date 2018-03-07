var Issuer = artifacts.require("./Issuer.sol");

// "type": ["Issuer","http://lod.duo.nl/cdm/def/v0/ErkendeOnderwijsinstelling"],
// "id": "http://lod.duo.nl/rio/id/erkendeonderwijsinstelling/25PN",
// "name": "Thorbecke Scholengemeenschap"

var account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
var contractAddress = "0xbd2c938b9f6bfc1a66368d08cb44dc3eb2ae27be"

contract('Issuer', function(accounts) {
  it("should get the type", function() {
    return Issuer.at(contractAddress).then(function(instance) {
      return instance.typeOb.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "http://lod.duo.nl/cdm/def/v0/ErkendeOnderwijsinstelling", "naam klopt niet");
    });
  });
  it("should get the id", function() {
    return Issuer.at(contractAddress).then(function(instance) {
      return instance.id.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "http://lod.duo.nl/rio/id/erkendeonderwijsinstelling/25PN", "naam klopt niet");
    });
  });
  it("should get the name", function() {
    return Issuer.at(contractAddress).then(function(instance) {
      return instance.name.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "Thorbecke Scholengemeenschap", "naam klopt niet");
    });
  });
  it("should get the context", function() {
    return Issuer.at(contractAddress).then(function(instance) {
      return instance.context.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "https://w3id.org/openbadges/v2", "naam klopt niet");
    });
  });
  it("should get all properties", function() {
    return Issuer.at(contractAddress).then(function(instance) {
      return instance.getProperties.call({from: account});
    }).then(function(name) {
      console.log(name)
      // assert.equal(name, "https://w3id.org/openbadges/v2", "naam klopt niet");
    });
  });
});
