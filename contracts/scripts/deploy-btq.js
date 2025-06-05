const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying BTQ with account:", deployer.address);

  const BTQ = await hre.ethers.getContractFactory("BTQ");
  const btq = await BTQ.deploy();
  await btq.deployed();

  console.log("✅ BTQ deployed to:", btq.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
