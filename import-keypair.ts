import "dotenv/config";
import bs58 from 'bs58';
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

async function main() {
    const privateKeyBase58Encoded = process.env.SECRET_KEY;
    if (!privateKeyBase58Encoded) throw new Error("Missing SECRET_KEY in environment variables");

    const privateKeyBytes = bs58.decode(privateKeyBase58Encoded);
    
    console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
}

main().catch(console.error);