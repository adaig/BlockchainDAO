import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x963719A69d975E3A6B737BD69C9AcE6d78d8C8A2", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Blockchain NFT",
        description: "This NFT will give you access to BlockchainDAO!",
        image: readFileSync("scripts/assets/Blockchain.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();