import { FC, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const WalletConnection: FC = () => {
  const { connected, connecting, disconnect } = useWallet();

  // Handle connection changes
  useEffect(() => {
    if (connected) {
      console.log("Wallet connected successfully");
    }
  }, [connected]);

  return (
    <div className="wallet-container">
      <WalletMultiButton />
      {connected && <button onClick={disconnect}>Disconnect</button>}
      <div className="status">
        Status:{" "}
        {connecting
          ? "Connecting..."
          : connected
          ? "Connected"
          : "Disconnected"}
      </div>
    </div>
  );
};
