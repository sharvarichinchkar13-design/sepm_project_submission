const { ethers } = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = await HelloWorld.deploy();

  await contract.waitForDeployment();

  console.log("HelloWorld deployed to:", await contract.getAddress());
  console.log("Message:", await contract.message());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
