// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BTQ {
    string public name = "BTQ Token";
    string public symbol = "BTQ";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * 10**uint256(decimals);
    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}
