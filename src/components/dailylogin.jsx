import { useState, useEffect } from "react";
import React from "react";
import Home from "../pages/home";
import loginimg from "../dailyneedpicture/banner-2 - Copy.5f180836440bacefd545.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Agar axios use nahi kar rahe toh ise remove kar sakte ho

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  async function dailylogin(e) {
    e.preventDefault(); // Form reload hone se rokega

    // 1. Special Admin Login Check
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "admin@gmail.com",
          role: "admin",
        })
      );
      // Admin pehchanne ke liye ek admin flag set kar dete hain
      localStorage.setItem("userid", "admin_panel"); 

      alert("Admin Login Successfully");
      navigate("/admin");
      return; // Yahin se function khatam, aage ka code nahi chalega
    }

    // 2. Normal User Login Check
    try {
      const apiurl = await fetch(
        "https://dailyneedbackend-yz7x.onrender.com/customer/getusers"
      );
      const login = await apiurl.json();

      // Users array mein se match dhundna
      const user = login?.data?.find(
        (item) => item.email === email && item.password === password
      );

      if (user) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: user.email,
            role: "user",
          })
        );

        localStorage.setItem("userid", user._id);
        localStorage.setItem("fullname", user.fullname);
        localStorage.setItem("email", user.email);
        localStorage.setItem("house", user.house);
        localStorage.setItem("near", user.near);
        localStorage.setItem("state", user.state);
        localStorage.setItem("pin", user.pin);

        alert("Login Successfully");
        navigate("/home");
      } else {
        // Agar email/password galat ho to
        alert("Invalid Email or Password! Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  }

  // Pehle se login hai ya nahi check karne ke liye
  useEffect(() => {
    const usercheck = localStorage.getItem("userid");
    if (usercheck) {
      if (usercheck === "admin_panel") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  }, []);

  return (
    <>
      <div className="login">
        <div className="login-img">
          <img src={loginimg} alt="" />
          {/* Best Practice: Inputs ko form tag ke andar lapet diya */}
          <form onSubmit={dailylogin} className="login-form">
            <h1>Login</h1>

            <div className="input-group">
              <input
                onChange={(e) => setemail(e.target.value)}
                id="username"
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="input-group">
              <input
                onChange={(e) => setpassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="password-forget">
              <Link to="/dailysignup">
                <p>Sign up</p>
              </Link>
            </div>

            <div className="login-btn">
              {/* type="submit" lagane se form automatically enter dabane par bhi submit ho jayega */}
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}