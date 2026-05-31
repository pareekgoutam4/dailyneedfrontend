import { useState, useEffect } from "react";
import React from "react";
import Home from "../pages/Home";
import loginimg from "../dailyneedpicture/banner-2 - Copy.5f180836440bacefd545.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();





  async function dailylogin(e) {
    e.preventDefault();



    const apiurl = await fetch("https://dailyneedbackend-yz7x.onrender.com/customer/getusers")
    const login = await apiurl.json();
    console.log(login?.data)


    const user = login?.data?.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      localStorage.setItem("userid", user._id);
      localStorage.setItem("fullname", user.fullname);
      localStorage.setItem("email", user.email);
      localStorage.setItem("house", user.house);
      localStorage.setItem("near", user.near);
      localStorage.setItem("state", user.state);
      localStorage.setItem("pin", user.pin);

      alert("login Successfully");
      navigate("/home");

    } else {
      alert(" invalid Email and Password")
    }

  }


  useEffect(() => {
    const usercheck = localStorage.getItem("userid");
    if (usercheck) {
      navigate("/home");
    }
  }, []);




  return (

    <>
      <div className="login">
        <div className="login-img">
          <img src={loginimg} alt="" />
          <div className="login-form">
            <h1>Login</h1>

            <div className="input-group">
              <input onChange={(e) => { setemail(e.target.value) }} id="username" type="email" placeholder="Enter Email" />
            </div>

            <div className="input-group">
              <input onChange={(e) => { setpassword(e.target.value) }} id="password" type="password" placeholder="Password" />
            </div>

            <div className="password-forget">
              <Link to="/dailysignup"><p>Sign up</p></Link>
            </div>

            <div className="login-btn">
              <button onClick={dailylogin}>Login</button>
            </div>


          </div>
        </div>
      </div>

    </>
  );
}