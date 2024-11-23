import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletConnectWalletAdapter } from "@solana/wallet-adapter-walletconnect";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { FC, ReactNode } from "react";

const wallets = [
  new WalletConnectWalletAdapter({
    network: WalletAdapterNetwork.Devnet,
    options: {},
  }),
];

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
};
