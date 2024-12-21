import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

async function main() {
    const keypair: Keypair = Keypair.generate();
    
    console.log(`The public key is: ${keypair.publicKey.toBase58()}`);
    console.log(`The secret key is:`, Array.from(keypair.secretKey));
    console.log(`\nPhantom wallet import format: [${bs58.encode(keypair.secretKey)}]`);
}

main().catch(console.error);