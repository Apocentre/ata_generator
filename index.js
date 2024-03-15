import * as anchor from "@coral-xyz/anchor";
import Web3Pkg, {spl} from "@apocentre/solana-web3";
import process from "process";

const Web3 = Web3Pkg.default;
const {PublicKey} = anchor.web3;

const main = async () => {
  const web3 = Web3(PublicKey.default)
  const args = process.argv;

  if (args[4] && args[4] === "2022") {
    return await web3.getAssociatedTokenAddress(new PublicKey(args[2]), new PublicKey(args[3]), true, spl.TOKEN_2022_PROGRAM_ID);
  } else {
    return await web3.getAssociatedTokenAddress(new PublicKey(args[2]), new PublicKey(args[3]));
  }
}

main()
.then((ata) => console.log("ATA: ", ata.toString()))
.catch(err => console.log(err))
