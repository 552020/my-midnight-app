// src/app/page.tsx
import Head from "next/head";
import { setNetworkId, NetworkId } from "@midnight-ntwrk/zswap";
import ConnectWalletButton from "../components/ConnectWalletButton";

setNetworkId(NetworkId.DevNet);

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Midnight App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Midnight App</h1>
        <ConnectWalletButton />
      </main>
    </div>
  );
}
