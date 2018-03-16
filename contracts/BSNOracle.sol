pragma solidity ^0.4.18;

contract BSNOracle {
  // Contract owner
  address public owner;

  // BSN Storage
  uint private bsn;

  // Callback function
  event CallbackGetBSN();

  function BSNOracle() public {
    owner = msg.sender;
  }

  function updateBSN() public {
    // Calls the callback function
    CallbackGetBSN();
  }

  function setBSN(uint _bsn) public {
    // If it isn't sent by a trusted oracle
    // a.k.a ourselves, ignore it
    require(msg.sender == owner);
    bsn = _bsn;
  }

  function getBSN() constant public returns (uint) {
    return bsn;
  }
}