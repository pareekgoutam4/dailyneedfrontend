import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Orders() {



  const [checkdata, setcheckdata] = useState([]);
  const navigate = useNavigate();

  async function getcheck() {
    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/orders/getorders");
    const result = await apiurl.json();
    setcheckdata(result);
  }


  async function deleteorder(id) {
    await fetch(`https://dailyneedbackend-yz7x.onrender.com/api/orders/deleteorder/${id}`, {
      method: "DELETE"

    }).then(() => {
      alert("Order Deleted Successfully");
      getcheck();

    }).catch(() => {
      alert("Sorry Try Again Later");

    });
  }


  async function updateStatus(id, status) {

    await fetch(`https://dailyneedbackend-yz7x.onrender.com/api/orders/updateorder/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status })

    });

    getcheck();
  }

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

  getcheck();

}, [navigate]);


  return (
    <>
      <div className="admin-orders-container">

        <div className="admin-orders-sidebar">

          <div className="admin-orders-sidebar-logo">
            <h2 className="admin-orders-logo-text">Orders</h2>
          </div>

          <ul className="admin-orders-sidebar-menu">
            <Link to="/admin">
              <li className="admin-orders-sidebar-menu-item">Dashboard</li>
            </Link>
            <Link to="/customers">
              <li className="admin-orders-sidebar-menu-item">Customers</li>
            </Link>
            <Link to="/adminproducts">
              <li className="admin-orders-sidebar-menu-item">Products</li>
            </Link>
            <Link to="/orders">
              <li className="admin-orders-sidebar-menu-item active">Orders</li>
            </Link>
           

          </ul>

        </div>


        <div className="admin-orders-page-container">

          <div className="admin-orders-table-container">
            <h2 className="admin-orders-heading">All Orders</h2>
            <table className="admin-orders-table">

              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Customer Email</th>
                  <th>Customer Address</th>
                  <th>Products</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {checkdata.map((order) => (

                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.customername}</td>
                    <td>{order.customeremail}</td>
                    <td>{order.customeraddress}</td>

                    <td>

                      <div className="admin-orders-products-list">
                        {order.products.map((item, index) => (

                          <div className="admin-orders-product-item" key={index}>{item.name} × {item.quantity}</div>
                        ))}
                      </div>
                    </td>
                    <td className="admin-orders-total-price">₹{order.totalprice}</td>
                    <td className="admin-orders-total-price">{order.status}</td>

                    <td>

                      <div className="admin-orders-action-buttons">
                        <button onClick={() => updateStatus(order._id, "Confirm")} className="admin-orders-confirm-btn">Confirm</button>
                        <button onClick={() => updateStatus(order._id, "Pending")} className="admin-orders-confirm-btn">Pending</button>
                        <button onClick={() => updateStatus(order._id, "Shipped")} className="admin-orders-confirm-btn">Shipped</button>
                        <button onClick={() => updateStatus(order._id, "Delivered")} className="admin-orders-confirm-btn">Delivered</button>
                        <button onClick={() => updateStatus(order._id, "Return")} className="admin-orders-confirm-btn">Return</button>
                        <button className="admin-orders-delete-btn" onClick={() => deleteorder(order._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>


  );
}

export default Orders;