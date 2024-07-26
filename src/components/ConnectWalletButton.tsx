// src/components/ConnectWalletButton.tsx
"use client";

import React, { useState } from "react";
import { WalletBuilder, Resource } from "@midnight-ntwrk/wallet";

const ConnectWalletButton = () => {
  const [wallet, setWallet] = useState<Resource | null>(null);

  const connectWallet = async () => {
    try {
      const walletInstance = await WalletBuilder.build(
        "https://indexer.devnet.midnight.network/api/v1/graphql",
        "wss://indexer.devnet.midnight.network/ws/api/v1/graphql",
        "http://localhost:6300",
        "https://rpc.devnet.midnight.network",
        "error"
      );
      await walletInstance.start();
      setWallet(walletInstance);
      console.log("Wallet connected");
      // Subscribe to wallet state
      walletInstance.state().subscribe((state) => {
        console.log(state);
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return <button onClick={connectWallet}>{wallet ? "Wallet Connected" : "Connect Wallet"}</button>;
};

export default ConnectWalletButton;
