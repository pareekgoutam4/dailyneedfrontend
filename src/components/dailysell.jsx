import React from "react";
import loginimg from "../dailyneedpicture/banner-4.e4c8adbb80eb46aa2c91.png";
import products from "./dailyproductdata";

export default function DailySection() {
  return (

    <>
    <div className="daily-main">

      <div className="daily-heading">
        <h1>Daily Best sells</h1>
      </div>

      <div className="daily-wrapper">

        <div className="daily-banner">
          <img src={loginimg} alt="banner" />

          <div className="daily-banner-content">
            <h2>Bring nature into your home</h2>
            <button>Shop Now →</button>
          </div>
        </div>

        <div className="Products-map-container">
   {products.slice(0, 4).map((Product) => {
            return (
              <div key={Product.id} className="All-Products">

                <img src={Product.image} alt={Product.name} className="Products-images" />

                <h2 className="Products-title">{Product.name}</h2>
                <h4 className="Products-category">{Product.category}</h4>
                <h5 className="Products-Brand">{Product.brand}</h5>

                <h2 className="Products-Price">₹{Product.price}</h2>
                <h2 className="Products-oldd-pricee">₹{Product.oldPrice}</h2>

                <p className="Products-ratings">⭐ {Product.rating}</p>

                <button className="AddtoCartt">Add to Cart</button>

                {Product.rating >= 4.5 ? (
                  <span className="Trendingg">Trending Product</span>
                ) : (
                  <span className="Nott-Trending">New</span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>

    </>
  );
}