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

    function Assertion(string _typeOb, string id1, string name1, 
                        address issuer1, address badge1, address recipient1) public {
        setProfile(_typeOb, id1, name1);
        issuedOn = now;
        issuer = issuer1;
        badge = badge1;
        recipient = recipient1;
    }

    function setRecipient(address _recipient) public {
        recipient = _recipient;
    }

    function setIssuer() public {
        issuer = msg.sender;
    }

    function setBadge(address _badge) public {
        badge = _badge;
    }
    
    function setVerificationType(string _verificationType) public {
        verificationType = _verificationType;
    }

    function getProperties() public view returns(string, string, string, string, 
                                                address, address, address, address, uint) {
        return(id, typeOb, context, name, owner, recipient, issuer, badge, issuedOn);
    }

    function kill() public onlyOwner {
        selfdestruct(msg.sender);
    }

    function setProfile(string typeOB, string id1, string name1) private { 
        owner = msg.sender; 
        id = id1;
        typeOb = typeOB;
        name = name1;
    }
}
