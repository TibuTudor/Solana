import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

async function main() {
    if (!process.env.PUBLIC_KEY) throw new Error("Missing PUBLIC_KEY in environment variables");
    const publicKeyStr = process.env.PUBLIC_KEY.trim();
    const publicKey = new PublicKey(publicKeyStr);
    //const connection = new Connection(clusterApiUrl("devnet"));
    const connection = new Connection(clusterApiUrl("mainnet-beta"));

    
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    
    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
    );
}

main().catch(console.error);