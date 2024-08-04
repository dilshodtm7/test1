import React from "react";
import Tiktok from "../../assets/tok.webp";
import Youtube from "../../assets/youtube.png";
import Insta from "../../assets/insta.png";

const content = () => {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="content-title">Tell others about Winnie Coin</div>
          <div className="content-images">
            <img src={Insta} className="content-img" alt="" />
            <img src={Youtube} className="youtube-icon" alt="" />
            <img src={Tiktok} className="content-img" alt="" />
          </div>
          <hr className="content-hr" />
          <div className="content-text">
            <span className="content-span">
              And get up to
            </span>
            <span className="content-span">
              1 000 000 Winnie Coin
            </span>
            <span className="content-span">
              for every video
            </span>

          </div>
          <hr className="content-hr" />
          <div className="uploads">
            <button className="upload-btn">+  Add Content and Earn</button>
          </div>
          <div className="content-information">
            <h3>
                Rules and Information
            </h3>
            <ul className="content-list">
                <li>
                   1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur!
                </li>
                <li>
                   2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur!
                </li>
                <li>
                  3.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur!
                </li>
                <li>
                  4.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur!
                </li>
                <li>
                  5.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur!
                </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default content;
