import React, { useEffect, useState } from "react";
import products from "./dailyproductdata";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Products() {

  const { addItem, items } = useCart();
  const [prget, setprget] = useState([])

  const menu = ["All", "Milk & Dairies", "Coffe & Teas", "Pet Foods", "Meat", "Vegetables", "Fruits"];


  const [counts, setCounts] = useState(
    products.reduce((acc, item) => {
      acc[item._id] = 1;
      return acc;
    }, {})
  );


  async function submit(e) {

    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/getproducts")
    const result = await apiurl.json();
    setprget(result);

  }



  useEffect(() => {
    submit();
  }, [])


  return (
    <>
      <div className="Products-main">
        <div className="Products-heading">
          <h1>Popular Products</h1>

          <ul>
            {menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="products-items">
          {prget.map((item) => (

            <Link key={item._id} to={`/product/${item.url}`} style={{ textDecoration: "none", color: "inherit" }} >
              <div className="product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p> Stock:{item.stock}</p>
                <h5>₹{item.price}</h5>

                <p className="old-price">₹{item.oldprice}</p>
                <p>⭐ {item.rating}</p>




                <button disabled={items.find(i => i.id === item._id)} onClick={(e) => {
                  e.preventDefault();
                  addItem({ ...item, id: item._id, quantity: counts[item._id] });
                }} >
                  {items.find(i => i.id === item._id) ? "Added" : "Add"}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}