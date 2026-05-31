import React from "react";
import logo from "../dailyneedpicture/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"

export default function Footer() {

  const footerData = {
    company: [
      "About Us",
      "Delivery Information",
      "Privacy Policy",
      "Terms & Conditions",
      "Contact Us",
      "Help Center",
      "Careers"
    ],
    account: [
      "Sign in",
      "View Cart",
      "My Wishlist",
      "Track My Order",
      "Help Ticket",
      "Shipping Detail",
      "Product Details"
    ],
    corporate: [
      "Become a vendor",
      "Farmhouse",
      "Farmer",
      "Farm Conditions",
      "Farm Career",
      "Our Suppliers",
      "Our Promotions"
    ],
    popular: [
      "Milkshake",
      "Butter",
      "Eggs",
      "Marmalades",
      "Cheese",
      "Butterscotch",
      "Tea & Coffee"
    ]
  };

  return (
    <>
      <div className="footer">

        <div className="footer-left">
          <img src={logo} alt="logo" />

          <p><b>Awesome grocery store website template</b></p>

          <p><b>Address:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p><b>Call Us:</b> (+91) - 8209216067</p>
          <p><b>Email:</b> pareekgoutam.gmail.com</p>
          <p><b>Hours:</b> 10:00 - 18:00, Mon - Sat</p>
        </div>


        <div className="footer-links">

          <div>
            <h3>Company</h3> {footerData.company.map((item, i) => ( <p key={i}>{item}</p> ))}
          </div>

          <div>
            <h3>Account</h3> {footerData.account.map((item, i) => ( <p key={i}>{item}</p> ))}
          </div>

          <div>
            <h3>Corporate</h3>
            {footerData.corporate.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <div>
            <h3>Popular</h3>
            {footerData.popular.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

        </div>

        <div className="footer-right">
          <h3>Install App</h3>
          <p>From App Store or Google Play</p>

          <h3>Secured Payment Gateway</h3>

        </div>

      </div>


      <div className="footer-bottom">

        <p>©️ 2026 Nest - HTML Ecommerce Template</p>

        <div className="footer-phones">
          <span> 8209216067 (8:00-22:00)</span>
          <span> 8058560021 (24/7 Support)</span>
        </div>

        <p>Follow us</p>

      </div>
    </>
  );
}