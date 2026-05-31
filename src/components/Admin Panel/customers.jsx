import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Customer() {
  const [signdata, setsigndata] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [deleteconfirm, setdeleteconfirm] = useState(null);
  const navigate = useNavigate();

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [password, setpassword] = useState("");
  const [house, sethouse] = useState("");
  const [near, setnear] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState("");

  const [editid, seteditid] = useState(null);


  async function datasign() {

    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/customer/getusers");
    const result = await apiurl.json();

    console.log(result);
    setsigndata(result.data || []);

  }

  async function remove(id) {

    const response = await fetch(`https://dailyneedbackend-yz7x.onrender.com/customer/delete/${id}`, {
      method: "DELETE"
    }).then(() => {
      alert("Your Customer Record Deleted");
      datasign();
    }).catch(() => {

      alert("Something went Wrong")
    })


  }

  async function submit(e) {
    e.preventDefault();

    if (fullname === "") {
      alert("Full Name Is Require");
    } else if (email === "") {
      alert("Email IS Require");
    } else if (mobilenumber === "") {
      alert("Mobile Number IS Require");
    } else if (password === "") {
      alert("Password IS Require");
    } else if (house === "") {
      alert("Enter Your House No / Street");
    } else if (near === "") {
      alert("Enter Nearby Place");
    } else if (state === "") {
      alert("Enter District / State");
    } else if (pin === "") {
      alert("Enter Pin Code");
    } else {
      const customerData = { fullname, email, mobilenumber, password, house, near, state, pin };

      if (editid) {

        fetch(`https://dailyneedbackend-yz7x.onrender.com/customer/update/${editid}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(customerData)
        })
          .then(() => {
            alert("Data Updated Successfully");
            datasign();
            clearForm();
          });
      } else {

        fetch("https://dailyneedbackend-yz7x.onrender.com/customer/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(customerData)
        })
          .then(() => {
            alert("Customer Added Successfully");
            datasign();
            clearForm();
          });
      }
    }
  }


  function clearForm() {
    setfullname("");
    setemail("");
    setmobilenumber("");
    setpassword("");
    sethouse("");
    setnear("");
    setstate("");
    setpin("");
    seteditid(null);
    setShowForm(false);
  }


  function editcustomer(item) {
    setfullname(item.fullname || "");
    setemail(item.email || "");
    setmobilenumber(item.mobilenumber || "");
    setpassword(item.password || "");
    sethouse(item.house || "");
    setnear(item.near || "");
    setstate(item.state || "");
    setpin(item.pin || "");

    seteditid(item._id);
    setShowForm(true);
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

  datasign();

}, [navigate]);

  return (
    <>
      <div className="main-layout">

        <div className="sidebar">
          <div className="sidebar-logo">
            <h2 className="logo-text">Collection</h2>
          </div>
          <ul className="sidebar-menu">
            <Link to="/admin"><li className="sidebar-menu-item">Dashboard</li></Link>
            <Link to="/customers"><li className="sidebar-menu-item active">Customers</li></Link>
            <Link to="/adminproducts"><li className="sidebar-menu-item">Products</li></Link>
            <Link to="/orders"><li className="sidebar-menu-item">Orders</li></Link>
    
          </ul>
        </div>


        <div className="customer-container">
          <h3 className="cstmheader">Customer Data:</h3>

          <div className="add-customer-box">
            <h4>Add New Customer</h4>
            <button onClick={() => { clearForm(); setShowForm(true); }}> Add Customer </button>
          </div>


          <table className="customer-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {signdata && signdata.length > 0 ? (
                signdata.map((item) => (
                  <tr key={item._id}>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.mobilenumber}</td>
                    <td>
                      {item.house}, {item.near}, {item.state} - {item.pin}
                    </td>
                    <td>
                      <button onClick={() => editcustomer(item)}>
                        Edit
                      </button>

                      <button onClick={() => setdeleteconfirm(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Customer Found</td>
                </tr>
              )}
            </tbody>
          </table>


          {showForm && (
            <div className="modal-overlay">
              <div className="modal-box">
                <button className="modal-close" onClick={clearForm}>Close</button>
                <h2 className="modal-title">{editid ? "Edit Customer" : "Create Account"}</h2>

                <form className="signup-form" onSubmit={submit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input value={fullname} onChange={(e) => setfullname(e.target.value)} type="text" placeholder="Enter your name" />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input value={mobilenumber} onChange={(e) => setmobilenumber(e.target.value)} type="text" placeholder="Enter mobile number" />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Enter password" />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <div className="address-grid">
                      <input value={house} onChange={(e) => sethouse(e.target.value)} type="text" placeholder="House No / Street / Area" />
                      <input value={near} onChange={(e) => setnear(e.target.value)} type="text" placeholder="Nearby Place" />
                      <div className="address-row">
                        <input value={state} onChange={(e) => setstate(e.target.value)} type="text" placeholder="District / State" />
                        <input value={pin} onChange={(e) => setpin(e.target.value)} type="text" placeholder="Pin Code" />
                      </div>
                    </div>
                  </div>

                  <button className="signup-btn" type="submit">{editid ? "Update" : "Sign Up"}</button>
                </form>
              </div>
            </div>
          )}

          {deleteconfirm && (
            <div className="delete-modal-overlay">
              <div className="delete-modal">
                <h3>Delete Customer</h3>
                <p>Are you sure you want to delete this customer?</p>
                <div className="delete-btn-box">
                  <button className="confirm-delete-btn" onClick={() => { remove(deleteconfirm); setdeleteconfirm(null); }}>Delete Customer</button>
                  <button className="cancel-delete-btn" onClick={() => setdeleteconfirm(null)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Customer;