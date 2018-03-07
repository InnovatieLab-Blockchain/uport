pragma solidity ^0.4.18;

contract Assertion {
    
    address public recipient;
    address public issuer;
    address public badge;
    uint public issuedOn;
    string public verificationType;

    address owner;
    string public id;
    string public typeOb;
    string public context = "https://w3id.org/openbadges/v2";
    string public name;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function setProfile(string typeOB, string id1, string name1) private { 
        owner = msg.sender; 
        id = id1;
        typeOb = typeOB;
        name = name1;
    }

    function Assertion(string typeOb1, string id1, string name1, address issuer1, address badge1, address recipient1) public {
        setProfile(typeOb1, id1, name1);
        issuedOn = now;
        issuer = issuer1;
        badge = badge1;
        recipient = recipient1;
    }

    function setRecipient(address recipient1) public onlyOwner {
        recipient = recipient1;
    }

    function setIssuer(address issuer1) public onlyOwner {
        issuer = issuer1;
    }

    function setBadge(address badge1) public onlyOwner {
        badge = badge1;
    }
    
    function setVerificationType(string verificationType1) public onlyOwner {
        verificationType = verificationType1;
    }
}
