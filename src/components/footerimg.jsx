import React from "react";
import img from "../dailyneedpicture/loginbg.8aa6b5b06f07df673fe0.jpg";

export default function Hero() {
  return (
    <>
    <div className="img">

      <img src={img} alt="image" />

      <div className="overlay">
        <h1>Stay home & get your daily needs from our shop</h1>
        <p>Start Your Daily Shopping with Nest Mart</p>

        <div className="input-box">
          <input type="text" placeholder="Enter your email address" />
          <button type="button">Subscribe</button>
        </div>
      </div>

    </div>
    </>
  );
}