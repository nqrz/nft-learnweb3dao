async function main() {
  const nftContract = await hre.ethers.getContractFactory("LotOfLiar");

  const deployedNFTContract = await nftContract.deploy();

  console.log("NFT contract Address", deployedNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);;
    process.exit(1);
  })
