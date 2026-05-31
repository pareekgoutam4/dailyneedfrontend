import React from "react";
import products from "./dailyproductdata";




export default function () {
  return (
    <>
      <div className="deal-main">
        <div className="deal-heading"></div>

        <div className="deal-main">
          <div className="deal-heading">
            <h1>Deal of the Day</h1>
          </div>

          <div className="deal-container">

            {products.slice(4, 8).map((item) => (
              <div className="deal-card" key={item.id}>

                <div className="deal-image-box">
                  <img src={item.image} alt={item.name} />

                  <div className="deal-timer">
                    <div className="timer-box">
                      <h3>1060</h3>
                      <p>Days</p>
                    </div>
                    <div className="timer-box">
                      <h3>7</h3>
                      <p>Hours</p>
                    </div>
                    <div className="timer-box">
                      <h3>20</h3>
                      <p>Mins</p>
                    </div>
                    <div className="timer-box">
                      <h3>34</h3>
                      <p>Sec</p>
                    </div>
                  </div>
                </div>

                <div className="deal-content">
                  <h2>{item.name}</h2>

                  <p className="deal-rating">⭐ {item.rating}</p>

                  <h4> By <span>{item.brand}</span></h4>

                  <div className="deal-bottom">
                    <div className="deal-price">
                      <h3>₹{item.price}</h3>
                      <del>₹{item.oldPrice}</del>
                    </div>

                    <button className="deal-cart-btn">Add</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}