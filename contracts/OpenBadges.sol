pragma solidity ^0.4.18;

import './BadgeClass.sol';

contract OpenBadges {
	mapping (address => mapping(uint => address)) badge;
    mapping (address => uint) lastBadge;

	function assertBadge(address issuer, address recipient, address badgeClass) public {
		BadgeClass(badgeClass).setIssuer(issuer);
        lastBadge[recipient] += 1;
		badge[recipient][lastBadge[recipient]] = badgeClass;
	}

	function getBadge(address recipient, uint nr) public view returns(address) {
    	return badge[recipient][nr];
    }
}