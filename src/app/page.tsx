// src/app/page.tsx
import { setNetworkId, NetworkId } from "@midnight-ntwrk/zswap";
import ConnectWalletButton from "../components/ConnectWalletButton";
import { Metadata } from "next";

setNetworkId(NetworkId.DevNet);

export const metadata: Metadata = {
  title: "My Midnight App",
  description: "A simple Next.js app with Midnight wallet integration",
};

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to My Midnight App</h1>
        <ConnectWalletButton />
      </main>
    </div>
  );
}
