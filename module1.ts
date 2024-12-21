//HSUXz2NCnNfSJBVLYzXEYfra2J5eHxEXRFH5L883Sb6D

import { Keypair } from "@solana/web3.js";

async function main() {
    const keypair: Keypair = Keypair.generate();
    
    console.log(`The public key is: ${keypair.publicKey.toBase58()}`);
    console.log(`The secret key is:`, Array.from(keypair.secretKey));
}

main().catch(console.error);