import React, { useEffect } from "react";
import "./settings.css";
import { TonConnectButton } from "@tonconnect/ui-react";

const settings = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@tonconnect/ui@0.0.9/dist/tonconnect-ui.min.js";
    script.onload = () => {
      const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl:
          "https://raw.githubusercontent.com/ton-connect/ton-connect-manifest/master/manifest.json",
        buttonRootId: "connect",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="setting-container">
        <div className="account-info">
          <div className="name">
            <div className="name-title">Hello</div>
            <div className="name-subtitle">
              {localStorage.getItem("first_name")}
            </div>
          </div>
        </div>
        <hr className="setting-hr" />
        <button className="setting-button">
        <TonConnectButton />
        </button>

        <div className="setting-info">
          <div className="info-container">
            <div className="info">
              <span>My ID</span>
              <span className="info-span">{localStorage.getItem("user")}</span>
            </div>
            <div className="info">
              <span> Language</span>
              <span className="info-span">
                {localStorage.getItem("language_code")}
              </span>
            </div>
            <div className="info">
              <span>Contact support</span>
            </div>
            <div className="info">
              <span>Contact for Ads</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default settings;
