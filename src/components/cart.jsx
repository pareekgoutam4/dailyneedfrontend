import React from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const { items, updateItemQuantity, removeItem, cartTotal, isEmpty, emptyCart } = useCart();


  async function checkout() {

    await fetch("https://dailyneedbackend-yz7x.onrender.com/api/orders/addorder", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        customername: localStorage.getItem("fullname"),
        customeremail: localStorage.getItem("email"),
        customeraddress:
          `${localStorage.getItem("house")},
         ${localStorage.getItem("near")},
         ${localStorage.getItem("state")},
         ${localStorage.getItem("pin")}`,

        products: items.map((item) => ({
          name: item.name,
          quantity: item.quantity
        })),

        totalprice: cartTotal
      })

    }).then(() => {

      alert("Order Placed Successfully");

      emptyCart();

    }).catch(() => {

      alert("Something Went Wrong");

    });

  }



  return (
    <>
      <div className="cart-container">

        <h2 className="cart-title"> 🛒 Your Cart </h2>

        {isEmpty ? (
          <div className="empty-cart">
            <h3>Cart is Empty</h3>
            <p>Add items to get started</p>
          </div>
        ) : (<>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-card">

                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p className="price">₹{item.price}</p>
                  <div className="quantity">

                    <button onClick={() => { if (item.quantity > 1) { updateItemQuantity(item.id, item.quantity - 1); } else { removeItem(item.id); } }}> - </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>
                  </div>

                  <p className="total"> Total: ₹{item.price * item.quantity} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3>Grand Total: ₹{cartTotal}</h3>
            <button className="checkout-btn" onClick={checkout}> Proceed to Checkout </button>
          </div>
        </>
        )}
      </div>
    </>
  );
}

export default Cart;