var Recipient = artifacts.require("./Recipient.sol");

// "marc.minnee@gmail.com", "blockchain id", "Marc Minnee"

var account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
var contractAddress = "0x2eca6fcfef74e2c8d03fbaf0ff6712314c9bd58b"

contract('Recipient', function(accounts) {
  it("should get the type", function() {
    return Recipient.at(contractAddress).then(function(instance) {
      return instance.typeOb.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "marc.minnee@gmail.com", "naam klopt niet");
    });
  });
  it("should get the id", function() {
    return Recipient.at(contractAddress).then(function(instance) {
      return instance.id.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "blockchain id", "naam klopt niet");
    });
  });
  it("should get the name", function() {
    return Recipient.at(contractAddress).then(function(instance) {
      return instance.name.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "Marc Minnee", "naam klopt niet");
    });
  });
  it("should get the context", function() {
    return Recipient.at(contractAddress).then(function(instance) {
      return instance.context.call({from: account});
    }).then(function(name) {
      console.log(name)
      assert.equal(name, "https://w3id.org/openbadges/v2", "naam klopt niet");
    });
  });
  it("should get all properties", function() {
    return Recipient.at(contractAddress).then(function(instance) {
      return instance.getProperties.call({from: account});
    }).then(function(name) {
      console.log(name)
      // assert.equal(name, "https://w3id.org/openbadges/v2", "naam klopt niet");
    });
  });
});
