pragma solidity ^0.4.18;

contract BadgeClass {
    address owner;
    string private id;
    string private typeOb;
    string private context = "https://w3id.org/openbadges/v2";
    string private name;
    address private issuer;
    address[] private alignment;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function BadgeClass(string typeOB, string id1, string name1, address _issuer, address[] _alignment) public {
        id = id1;
        typeOb = typeOB;
        name = name1;
        issuer = _issuer;
        alignment = _alignment;
        owner = msg.sender;  
        issuer = msg.sender;
    }

    function getId() public constant returns(string) {
        return id;
    }

    function getType() public constant returns(string) {
        return typeOb;
    }

    function getContext() public constant returns(string) {
        return context;
    }

    function getName() public constant returns(string) {
        return name;
    }

    function getIssuer() public constant returns(address) {
        return issuer;
    }

    function getAlignment() public constant returns(address[]) {
        return alignment;
    }


    function getAddress() public constant returns(address) {
        return address(this);
    }

    function setProperties(string typeOB, string id1, string name1) public onlyOwner { 
        id = id1;
        typeOb = typeOB;
        name = name1;
    }

    function getProperties() public view returns(string,string,string,string,address,address[]) {
        return(id,typeOb,context,name,issuer,alignment);
    }

    function setIssuer(address issuer1) public onlyOwner { 
        issuer = issuer1;
    }

    function setAlignment(address[] alignment1) public onlyOwner { 
        alignment = alignment1;
    }

}