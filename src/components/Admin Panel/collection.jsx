import React from "react";
import { Link } from "react-router-dom";

function Collection() {

  

  return (
    <>
      <div className="sidebar">
        
        <div className="sidebar-logo">
          <h2 className="logo-text">Collection</h2>
        </div>

        <ul className="sidebar-menu">
        
            <Link to= "/admin"><li  className="sidebar-menu-item">Dashboard</li></Link>
          <Link to = "/customers">  <li className="sidebar-menu-item">Customers</li></Link>
            <Link to = "/adminproducts">  <li  className="sidebar-menu-item">Products</li></Link>
            <Link to = "/orders">  <li  className="sidebar-menu-item">Orders</li></Link>
            <Link to = "/collection">  <li className="sidebar-menu-item">Collection</li></Link>
       </ul>

      </div>
    </>
  );
}

export default  Collection;