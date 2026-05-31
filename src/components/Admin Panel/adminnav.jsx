import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {

  const [customers, setCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);


  async function getCustomers() {
    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/customer/getusers");
    const result = await apiurl.json();
    setCustomers(result.data.length);
  }

  async function getProducts() {
    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/getproducts")
    const result = await apiurl.json();
    setProducts(result.length)
  }

  async function getOrders() {
    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/orders/getorders")
    const result = await apiurl.json();

    setOrders(result.length)
  }


  useEffect(() => {
    getCustomers();
    getProducts();
    getOrders();
  }, []);
  return (
    <>

      <div className="admin-dashboard">
        <div className="admin-sidebar">
          <div className="admin-sidebar-logo">
            <h2 className="admin-logo-text">Daily Need Dashboard</h2>
          </div>
          <ul className="admin-sidebar-menu">
            <Link to="/admin">
              <li className="admin-sidebar-menu-item">Dashboard</li>
            </Link>
            <Link to="/customers">
              <li className="admin-sidebar-menu-item">Customers</li>
            </Link>
            <Link to="/adminproducts">
              <li className="admin-sidebar-menu-item">Products</li>
            </Link>
            <Link to="/orders">
              <li className="admin-sidebar-menu-item">Orders</li>
            </Link>
            <Link to="/collection">
              <li className="admin-sidebar-menu-item">Collection</li>
            </Link>

          </ul>

        </div>


        <div className="admin-dashboard-content">

          <h1 className="admin-dashboard-heading">Admin Dashboard</h1>

          <div className="admin-dashboard-cards">

            <div className="admin-card">
              <h2>{customers}</h2>
              <p>Total Customers</p>
            </div>

            <div className="admin-card">
              <h2>{products}</h2>
              <p>Total Products</p>
            </div>

            <div className="admin-card">
              <h2>{orders}</h2>
              <p>Total Orders</p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Sidebar;