// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

// inherit from ERC721 openzep contracts
contract OakToken is ERC721 {

    constructor(string memory name, string memory symbol) 
        ERC721(name, symbol) {

            console.log("Token Name:", name); // show when tests run
            console.log("Token Symbol:", symbol); // show when tests run
            console.log("Sender's Address:", msg.sender); // shows sender address
    }
}