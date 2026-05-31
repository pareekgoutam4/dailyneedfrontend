import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [customers, setCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  
  // Isse normal user ko ek second ke liye bhi data ya dashboard nahi dikhega
  const [isAdminChecked, setIsAdminChecked] = useState(false); 
  const navigate = useNavigate();

  // 1. Customers Fetching
  async function getCustomers() {
    try {
      const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/customer/getusers");
      const result = await apiurl.json();
      setCustomers(result?.data?.length || 0);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  // 2. Products Fetching
  async function getProducts() {
    try {
      const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/getproducts");
      const result = await apiurl.json();
      setProducts(result?.length || result?.data?.length || 0);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // 3. Orders Fetching
  async function getOrders() {
    try {
      const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/orders/getorders");
      const result = await apiurl.json();
      setOrders(result?.length || result?.data?.length || 0);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  // 🛡️ Aapka bataya hua exact Security Guard Method
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first!");
      navigate("/dailylogin");
      return;
    }

    if (user.role !== "admin") {
      alert("Access Denied! Admin Only");
      navigate("/home");
      return;
    }

    // Agar dono check pass ho gaye (Matlab user Admin hai)
    getCustomers();
    getProducts();
    // getExtraDashboardData(); // Agar ye function aapke paas hai toh ise uncomment kar lena

    setIsAdminChecked(true); // Isse page render hone ke liye allow ho jayega
  }, [navigate]);

  // Jab tak check chal raha hai, screen par kuch secret leak nahi hoga
  if (!isAdminChecked) {
    return null; // Ya aap yahan loading spinner dikha sakte ho
  }

  // Ab sirf Admin hi is HTML ko dekh payega
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