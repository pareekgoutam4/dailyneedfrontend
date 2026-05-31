import React, { useState } from "react";
import loginimg from "../dailyneedpicture/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"

import Cart from "./cart";
import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";


export default function () {

  const item = ["Home", "About", "Shop", "Menu", "Vendors", "Pages", "Contact", "Account"]
  const [products, setproducts] = useState([])

  const [find, setfind] = useState("")
  const navigate = useNavigate()

  const handlesearch = (e) => { setfind(e.target.value); };


  const filterproduct = find ? products.filter((item) =>
    item.name.toLowerCase().includes(find.toLowerCase())
  ) : [];


  function logout() {

    localStorage.removeItem("userid")
    navigate("/dailylogin")

  }




  async function getproducts() {

    const api = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/getproducts")
    const result = await api.json()
    setproducts(result)

  }


  useEffect(() => {

    getproducts()

  }, [])


  return (
    <>
      <div className="top-bar">

        <div className="logo">
          <img src={loginimg} alt="" />

        </div>

        <div className="search-bar">
          <select>
            <option>All Categories</option>
          </select>
          <input type="text" onChange={handlesearch} placeholder="Search for items..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="nav-icons">
          <span><Link to="/admin"><i className="fa fa-code-compare"></i> Admin</Link></span>
          <span><i className="fa fa-heart"></i> Whishlist  </span>
          <span> <Link to="/cart"> <i className="fa fa-cart-shopping"></i> Cart </Link> </span>
          <span onClick={logout}><i className="fa fa-user"></i> Log Out</span>



        </div>

      </div>

      <div className="bottom-bar">

        <button className="browse-btn">Browse All Category </button>

        <ul className="menu">{item.map((item, index) => (<li key={index}>{item}</li>))} </ul>

        <div className="support">
          <i className="fa fa-headphones"></i>
          <div>
            <h3>1988-899</h3>
            <p>24/7 Customers Support</p>
          </div>
        </div>

      </div>

      <div className="swiper">

      </div>

      <div className="srcproduct">
        {find === "" ? (
          <p>Search something...</p>
        ) : filterproduct.length === 0 ? (
          <p>Product Not Found</p>
        ) : (
          <div className="products-items">
            {filterproduct.map((item) => (
              <div className="product-card" key={item._id}>

                <h3>{item.name}</h3>
                <p>{item.brand}</p>
              </div>
            ))}
          </div>
        )}
      </div>
</>
  )
}