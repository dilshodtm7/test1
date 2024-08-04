import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BiTachometer } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BiTask } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import "./style.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="d-flex-footer">
            <button
              className={`footer ${location.pathname === '/wallet' ? 'active' : ''}`}
              onClick={() => navigate('/wallet')}
            >
              <FaWallet className="icon" />
              <span className="footer-text">Wallet</span>
            </button>
            <button
              className={`footer ${location.pathname === '/invite' ? 'active' : ''}`}
              onClick={() => navigate('/invite')}
            >
              <ImUsers className="icon" />
              <span className="footer-text">Friends</span>
            </button>
            <button
              className={`footer ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => navigate('/')}
            >
              <BiTachometer className="icon" />
              <span className="footer-text">Home</span>
            </button>
            <button
              className={`footer ${location.pathname === '/task' ? 'active' : ''}`}
              onClick={() => navigate('/task')}
            >
              <BiTask className="icon" />
              <span className="footer-text">Tasks</span>
            </button>
            <button
              className={`footer ${location.pathname === '/setting' ? 'active' : ''}`}
              onClick={() => navigate('/setting')}
            >
              <FiSettings className="icon" />
              <span className="footer-text">More</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
