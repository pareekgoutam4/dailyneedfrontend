import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dailyproduct() {

  const [showform, setshowform] = useState(false);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "", url: "", category: "", brand: "", price: "", oldprice: "", rating: "", stock: "", description: "", image: ""
  });

  const [prdata, setprdata] = useState([])
  const [predit, setpredit] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }



  async function datapr(e) {
    e.preventDefault();
    const finalProduct = {
      name: product.name,
      url: product.url,
      category: product.category,
      brand: product.brand,
      price: product.price,
      oldprice: product.oldprice,
      rating: product.rating,
      stock: product.stock,
      description: product.description,
      image: product.image,
      images: [product.image],


    };


    if (product.name === "") {

      alert("Prodcut Name Is Require")
    } else if (product.url === "") {

      alert(" URL IS Require")
    }
    else if (product.category === "") {

      alert(" Add product catagory IS Require")
    }
    else if (product.brand === "") {

      alert(" Product Brand IS Require")
    }
    else if (product.price === "") {

      alert(" Select Product Price")
    }
    else if (product.oldprice === "") {

      alert(" Old Price Is Require")
    }
    else if (product.rating === "") {

      alert("Rating  Is Require")
    }
    else if (product.stock === "") {

      alert(" Give Product Stock")
    }
    else if (product.description === "") {

      alert(" Give At Least 4 to 5 Line Description")
    }
    else if (product.image === "") {

      alert(" Give Image  URL")
    }


    else {


      if (predit) {

        fetch(`https://dailyneedbackend-yz7x.onrender.com/api/products/updateproduct/${predit}`, {

          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(finalProduct)

        }).then(() => {
          alert("Product Edited")

          prget()
          clearForm()

        })
      }

      else {


        await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/addproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(finalProduct)
        }).then(() => {

          alert("Product Added ");
          prget();

          clearForm()
        }).catch(() => {
          alert("try Again Please")
        })

      }
    }
  }

  async function prget(e) {

    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/getproducts")
    const result = await apiurl.json();
    setprdata(result)

  }

  async function prdelete(id) {


    const apiurl = await fetch(`https://dailyneedbackend-yz7x.onrender.com/api/products/deleteproduct/${id}`, {
      method: "DELETE"
    }).then(() => {
      alert("Your Product Deleted")

      prget();
    }).catch(() => {
      alert("Something went Wrong")
    })

  }


  function clearForm() {
    setProduct({
      name: "", url: "", category: "", brand: "", price: "", oldprice: "", rating: "", stock: "", description: "", image: ""
    });
    setpredit(null);
    setshowform(false);
  }


  function editcustomer(item) {

    setProduct({
      name: item.name,
      url: item.url,
      category: item.category,
      brand: item.brand,
      price: item.price,
      oldprice: item.oldprice,
      rating: item.rating,
      stock: item.stock,
      description: item.description,
      image: item.image,
    });

    setpredit(item._id);
    setshowform(true);
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

  prget();

}, [navigate]);
  return (
    <>
      <div className="product-admin-container">

        <div className="product-sidebar">
          <div className="product-sidebar-logo">
            <h2 className="product-logo-text">Products</h2>
          </div>

          <ul className="product-sidebar-menu">
            <Link to="/admin"><li className="product-sidebar-menu-item">Dashboard</li></Link>
            <Link to="/customers"><li className="product-sidebar-menu-item">Customers</li></Link>
            <Link to="/adminproducts"><li className="product-sidebar-menu-item active">Products</li></Link>
            <Link to="/orders"><li className="product-sidebar-menu-item">Orders</li></Link>
           
          </ul>
        </div>


        <div className="product-main-content">

          <div className="product-add-box">
            <h4>Add New Product</h4>
            <button onClick={() => { clearForm(); setshowform(true); }}>Add Product</button>
          </div>


          {showform && (
            <div className="product-form-container">

              <h3 className="product-form-title">{predit ? "Edit Product" : "Add Product"}</h3>

              <form className="product-form-grid" onSubmit={datapr}>

                <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />

                <input name="url" value={product.url} onChange={handleChange} placeholder="URL " />

                <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />

                <input name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" />

                <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />

                <input name="oldprice" type="number" value={product.oldprice} onChange={handleChange} placeholder="Old Price" />

                <input name="rating" type="number" value={product.rating} onChange={handleChange} placeholder="Rating" />

                <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" />

                <input name="description" type="text" value={product.description} onChange={handleChange} placeholder="Description" />

                <input name="image" value={product.image} onChange={handleChange} placeholder="Image URL" />


                <div className="product-form-buttons product-full-width">

                  <button type="submit" className="product-save-btn">{predit ? "Update Product" : "Save Product"}</button>
                  <button type="button" className="product-cancel-btn" onClick={clearForm}>Cancel</button>

                </div>

              </form>
            </div>
          )}


          <table className="product-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>OldPrice</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                prdata.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.oldprice}</td>
                    <td>{item.category}</td>
                    <td>{item.brand}</td>
                    <td>{item.stock}</td>
                    <td>{item.rating}</td>
                    <td>
                      <img className="product-table-image" src={item.image} alt={item.name} />
                    </td>

                    <td className="product-action-buttons">
                      <button className="product-edit-btn" onClick={() => editcustomer(item)}>Edit</button>

                      <button className="product-delete-btn" onClick={() => prdelete(item._id)} > Delete</button>
                    </td>

                  </tr>
                ))
              }
            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default Dailyproduct;