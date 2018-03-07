pragma solidity ^0.4.18;

contract Alignment {
    address public owner;
    string public targetName;
    string public targetUrl;
    string public targetFramework;
    string public targetCode;

    function Alignment(string targetNamep, string targetUrl1, string targetFramework1, string targetCode1) public {
        owner = msg.sender;
        targetName = targetNamep;
        targetUrl = targetUrl1;
        targetFramework = targetFramework1;
        targetCode = targetCode1;       
    }

    function getProperties() public view returns(string,string,string,string,address) {
        return(targetName,targetUrl,targetFramework,targetCode,owner);
    }
}