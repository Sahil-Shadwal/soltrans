// src/App.tsx
import { FC } from "react";
import "./App.css";
import { WalletContextProvider } from "./components/WalletProvider";
import { WalletConnection } from "./components/WalletConnection";

const App: FC = () => {
  return (
    <WalletContextProvider>
      <div className="App">
        <h1>SPL Token Manager</h1>
        <WalletConnection />
      </div>
    </WalletContextProvider>
  );
};

export default App;
