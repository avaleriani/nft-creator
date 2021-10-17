const createNFTMetadata = require("../utils/create");

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory(
    "GeneratedNFT"
  );
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  const nftMetadata = createNFTMetadata("Gen#1", "Generated NFT");
  // Call the function.
  let txn = await nftContract.makeGenerateNFT(nftMetadata);
  // Wait for it to be mined.
  await txn.wait();

  const nftMetadata2 = createNFTMetadata("Gen#2", "Generated NFT");
  // Mint another NFT for fun.
  txn = await nftContract.makeGenerateNFT(nftMetadata2);
  // Wait for it to be mined.
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
