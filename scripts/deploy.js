const hre = require("hardhat");

async function main() {

  const OakToken = await hre.ethers.getContractFactory("OakToken"); // the class
  const oakTokenDeployed = await OakToken.deploy("OakTokenName", "OAK"); // paste in constructor arguments
  await oakTokenDeployed.deployed();

  console.log("Deployed OneOfAKind to:", oakTokenDeployed.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});