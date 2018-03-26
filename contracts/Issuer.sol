pragma solidity ^0.4.18;


contract Issuer {
    address owner;
    string public id;
    string public typeOb;
    string public context = "https://w3id.org/openbadges/v2";
    string public name;

    function setProfile(string typeOB, string id1, string name1) private { 
        owner = msg.sender; 
        id = id1;
        typeOb = typeOB;
        name = name1;
    }

    function Issuer(string typeOb1, string id1, string name1) public {
        setProfile(typeOb1, id1, name1);
    }

    function getProperties() public view returns(string,string,string,string,address) {
        return(id,typeOb,context,name,owner);
    }
}