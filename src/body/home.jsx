"use client";
import WebApp from "@twa-dev/sdk";
import React, { useEffect, useState } from "react";
import "./style.css";
import CoinIcon from "../assets/coin-icon.jpg";
import Winnie from "../assets/winniee.gif";
import WinnieJpg from "../assets/image.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const balance = "6500000"

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
      localStorage.setItem("userInfoes", WebApp.initDataUnsafe.user.photo_url);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", userData.id);
      if (userData.username) {
        localStorage.setItem("username", userData.username);
      } else {
        localStorage.removeItem("username");
      }
      if (userData.first_name) {
        localStorage.setItem("first_name", userData.first_name);
      } else {
        localStorage.removeItem("first_name");
      }
      if (userData.last_name) {
        localStorage.setItem("last_name", userData.last_name);
      } else {
        localStorage.removeItem("last_name");
      }
      if (userData.language_code) {
        localStorage.setItem("language_code", userData.language_code);
      } else {
        localStorage.removeItem("language_code");
      }
    }
  }, [userData]);

  const notifyClaim = () =>
    toast.success("Claimed 200 Winnie coin", {
      width: "80%",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyStart = () =>
    toast.success("Started mining", {
      width: "80%",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyEnd = () =>
    toast.success("Mining ended", {
      width: "80%",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const setCurrentDate = () => {
    const status = localStorage.getItem("status");

    if (status === "claim") {
      notifyClaim();

        localStorage.setItem("status", "claimed");
        document.querySelector('#imageID').setAttribute('src', WinnieJpg);
      
    } else if (status === "claimed") {
      notifyStart();
        localStorage.setItem("status", "active");
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 2);
        localStorage.setItem("date", currentDate.toISOString());
        document.querySelector('#imageID').setAttribute('src', Winnie);
     
    } else if (!status) {
      notifyStart();
      localStorage.setItem("status", "active");
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() + 2);
      localStorage.setItem("date", currentDate.toISOString());
      document.querySelector('#imageID').setAttribute('src', Winnie);
    }
  };

  useEffect(() => {
    const updateUI = () => {
      const currentDate = new Date();
      const storedDate = localStorage.getItem("date");
      const status = localStorage.getItem("status");
      const timeElement = document.getElementById("time");
      const btnElement = document.getElementById("btn");
      const titleElement = document.getElementById("title-farming");

      if (!timeElement || !btnElement || !titleElement) return;

      if (status === "active") {
        const datePlus = new Date(storedDate);
        const diffMs = datePlus - currentDate;

        if (diffMs > 0) {
          timeElement.innerText = `${Math.floor(
            diffMs / (1000 * 60 * 60)
          )}h : ${Math.floor(
            (diffMs % (1000 * 60 * 60)) / (1000 * 60)
          )}m : ${Math.floor((diffMs % (1000 * 60)) / 1000)}s`;
          btnElement.disabled = true;
          titleElement.innerText = "Mining";
          btnElement.classList.add("disabled");
          document.querySelector('#imageID').setAttribute('src', Winnie);
        } else {
          btnElement.disabled = false;
          titleElement.innerText = "Claim";
          timeElement.innerText = "Claim 200 W";
          btnElement.classList.remove("disabled");
          btnElement.classList.remove("activated");
          localStorage.setItem("status", "claim");
          notifyEnd();
        }
      } else if (status === "claim") {
        document.querySelector('#imageID').setAttribute('src', WinnieJpg);
        timeElement.innerText = "Claim 200 W";
        titleElement.innerText = "Claim";
      } else {
        timeElement.innerText = "Start";
        titleElement.innerText = "Farming";
      }
    };

    const intervalId = setInterval(updateUI, 1000);

    setTimeout(updateUI, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="body-balance">
        <ToastContainer />
        <div className="ton-balance">
          <div className="account-name">
            <div className="name">
              <div className="name-title">Welcome</div>
              <div className="name-subtitle">
                {localStorage.getItem("first_name")
                  ? localStorage.getItem("first_name")
                  : "Kimdur"}
              </div>
            </div>
          </div>
        </div>
        <div className="my-balance">
          <img src={CoinIcon} alt="Coin Icon" className="home-img" />
          <span className="balance">
            {balance?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </span>
        </div>

        <div className="mining-container">
          <img src={WinnieJpg}  id="imageID" alt="Mining Animation" className="minion-img" />
        </div>
        <button id="btn" className="mayning" onClick={setCurrentDate}>
          <span className="title" id="title-farming"></span>
          <span id="time" className="time"></span>
        </button>
      </div>
    </>
  );
};

export default Home;
