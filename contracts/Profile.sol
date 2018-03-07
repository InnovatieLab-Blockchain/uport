pragma solidity ^0.4.18;

import './owned.sol';

contract Profile is owned {
    address owner;
    string public id;
    string public typeOb;
    string public context = "https://w3id.org/openbadges/v2";
    string public name;

    function setProfile(string typeOB, string id1, string name1) public onlyOwner { 
        owner = msg.sender; 
        id = id1;
        typeOb = typeOB;
        name = name1;
    }

    function close() public onlyOwner {
        selfdestruct(owner);
    }
}