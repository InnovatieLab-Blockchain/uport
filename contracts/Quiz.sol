pragma solidity ^0.4.18;

contract Quiz {
  // Contract owner
  address public owner;

  // Score of participants
  // mapping(address => bool[10]) private score;
  mapping(address => uint) private score;

  event Scored();

  function Quiz() public {
    owner = msg.sender;
  }

  function setScore(address participant, uint _score) public {
    require(msg.sender == owner);
    score[participant] = _score;
  }

  function getScore(address participant) public view returns (uint) {
    require(msg.sender == owner);
    return score[participant];
  }

  function updateScore() public {
    // Calls the callback function
    Scored();
  }

}