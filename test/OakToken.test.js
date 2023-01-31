const { expect } = require("chai");
const { ethers } = require("hardhat");
// const OakToken = require("../build/OakToken");

describe("OakToken", function () {
  let oakToken;

  beforeEach(async function () {
    oakToken = await OakToken.new("OAK Token", "OAK");
  });

  it("should return the correct token name and symbol", async function () {
    const name = await oakToken.name();
    const symbol = await oakToken.symbol();
    expect(name).to.equal("OAK Token");
    expect(symbol).to.equal("OAK");
  });

  it("should return the correct contract owner", async function () {
    const owner = await oakToken.ownerOf(0);
    expect(owner).to.equal(await ethers.provider.getSignerAddress());
  });

  it("should transfer the token to another address", async function () {
    await oakToken.mint(await ethers.provider.getSignerAddress(), 0);
    const originalOwner = await oakToken.ownerOf(0);
    const address2 = "0x0000000000000000000000000000000000000001";
    await oakToken.transferFrom(await ethers.provider.getSignerAddress(), address2, 0);
    const newOwner = await oakToken.ownerOf(0);
    expect(originalOwner).to.not.equal(newOwner);
  });
});
