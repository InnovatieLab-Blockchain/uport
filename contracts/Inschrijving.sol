pragma solidity ^0.4.18;

import './Recipient.sol';
import './BadgeClass.sol';

contract Inschrijving {
    
    Recipient student;
    mapping(uint => BadgeClass) enrollment;
    bool isEnrolled = false;
    uint fee;

    enum Fase {
        Aanmelden,
        Vooropleiding,
        SelecteerOpleiding,
        VaststellenCollegegeld,
        Inschrijven,
        VaststellenStatustoekenning,
        Uitschrijven,
        BehalenGraad
    }

    // This is the current fase.
    Fase public fase = Fase.Aanmelden;

    uint public creationTime = now;

    modifier inFase(Fase _fase) {
        require(fase == _fase);
        _;
    }

    function nextFase() internal {
        fase = Fase(uint(fase) + 1);
    }

    // This modifier goes to the next fase
    // after the function is done.
    modifier transitionNext()
    {
        _;
        nextFase();
    }

    // Perform timed transitions. Be sure to mention
    // this modifier first, otherwise the guards
    // will not take the new fase into account.
    // modifier timedTransitions() {
    //     if (fase == Fase.AcceptingBlindedBids &&
    //                 now >= creationTime + 10 days)
    //         nextFase();
    //     if (fase == Fasen.RevealBids &&
    //             now >= creationTime + 12 days)
    //         nextFase();
    //     // The other fases transition by transaction
    //     _;
    // }

    function identify(address recipient, bytes32 bsn)
        public
        inFase(Fase.Aanmelden)
    {
        student = Recipient(recipient);
        nextFase();
    }

    function verify(BadgeClass[] badges)
        public
        inFase(Fase.Vooropleiding)
    {
        // check if supplied badges by student are sufficient
        nextFase();
    }

    function select(BadgeClass badge)
        public
        inFase(Fase.SelecteerOpleiding)
    {
        enrollment[1] = badge;
        nextFase();
    }

    function determineFee()
        public
        inFase(Fase.VaststellenCollegegeld)
        transitionNext
    {
        // calculate college fee by DUO
        //fee = calculateFee(enrollment, creationTime);
    }

    function enroll()
        public
        inFase(Fase.Inschrijven)
        transitionNext
    {
        isEnrolled = true;
    }

    function determineStatus()
        public
        inFase(Fase.VaststellenStatustoekenning)
        transitionNext
    {
        // calls to issuer-oriented contracts
    }

    function checkout()
        public
        inFase(Fase.Uitschrijven)
        transitionNext
    {
        // calls to issuer-oriented contracts
    }

}