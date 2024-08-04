import React, { useEffect } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import "./style.css";

const home = () => {
  return (
    <>
      <div className="body-balance">
        <div className="balance-text-title">Wallet</div>
        <div className="wallet-connects">
        <TonConnectButton />
        
      </div>
        <div className="balance-wallet-text">
          <span className="balance-wallet-span">Your balance</span>
        </div>
        <div className="balance-wallet">
        <div className="wallets-balances">
          <div className="usdt">
            <span className="balance-wallet-span">Winnie Coin</span>
            <span className="balance-wallet-span">0.0000</span>
          </div>

          <div className="usdt">
            <span className="balance-wallet-span">TON</span>
            <span className="balance-wallet-span">0.0000</span>
          </div>
        </div>
        <div className="ton-balance">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. ?
        </div>
      </div>
        
      </div>

      
      
    </>
  );
};

export default home;
