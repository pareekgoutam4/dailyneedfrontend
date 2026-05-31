import React, { useState } from "react";
import signupimg from "../dailyneedpicture/banner-2 - Copy.5f180836440bacefd545.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";


function Signup() {

    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [mobilenumber, setmobilenumber] = useState("")
    const [password, setpassword] = useState("")

    const [house, sethouse] = useState("")
    const [near, setnear] = useState("")
    const [state, setstate] = useState("")
    const [pin, setpin] = useState("")


    const navigate = useNavigate();


    async function submit(e) {
        e.preventDefault()



        if (fullname === "") {

            alert("Full Name Is Require")
        } else if (email === "") {

            alert(" Email IS Require")
        }
        else if (mobilenumber === "") {

            alert(" Mobile Number IS Require")
        }
        else if (password === "") {

            alert(" Password IS Require")
        }


        else if (house === "") {

            alert(" Enter  Your House No ,Street , Area")
        }

        else if (near === "") {

            alert(" Enter Your Near By Place")
        }

        else if (state === "") {

            alert(" Enter  Your District , State")
        }

        else if (pin === "") {

            alert(" Enter  Your Pin Code")
        }



        else {

            axios.post("https://dailyneedbackend-yz7x.onrender.com/customer/signup", { fullname: fullname, email: email, mobilenumber: mobilenumber, password: password, house: house, near: near, state: state, pin: pin, })

                .then(() => {
                    alert("Sign Up Successfull")
                    navigate("/dailylogin")
                }).catch(() => {
                    alert("something Went Wrong")
                })

        }

    }

    return (
        <>
            <div className="signup-container">
                <div className="Signup-img">
                    <img src={signupimg} alt="" />
                    <div className="signup-card">
                        <h2 className="signup-title">Create Account</h2>

                        <form className="signup-form" onSubmit={submit}>
                            <div className="signup-field">
                                <label className="signup-label">Full Name</label>
                                <input onChange={(e) => { setfullname(e.target.value) }} className="signup-input" type="text" placeholder="Enter your name" />
                            </div>
                            <div className="signup-field">
                                <label className="signup-label">Email</label>
                                <input onChange={(e) => { setemail(e.target.value) }} className="signup-input" type="email" placeholder="Enter email" />
                            </div>

                            <div className="signup-field">
                                <label className="signup-label">Mobile Number</label>
                                <input onChange={(e) => { setmobilenumber(e.target.value) }} className="signup-input" type="tel" placeholder="Enter mobile number" />
                            </div>

                            <div className="signup-field">
                                <label className="signup-label">Password</label>
                                <input onChange={(e) => { setpassword(e.target.value) }} className="signup-input" type="password" placeholder="Enter password" />
                            </div>

                            {<div className="signup-field">
                                <label className="signup-label">Your Address</label>

                                <div className="address-grid">

                                    <input className="signup-input" onChange={(e) => { sethouse(e.target.value) }} type="text" placeholder="House No, Street, Area" />

                                    <input className="signup-input" onChange={(e) => { setnear(e.target.value) }} type="text" placeholder="Nearby Place" />

                                    <div className="address-row">

                                        <input className="signup-input" onChange={(e) => { setstate(e.target.value) }} type="text" placeholder="District / State" />

                                        <input className="signup-input" onChange={(e) => { setpin(e.target.value) }} type="tel" placeholder="Pin Code" />

                                    </div>

                                </div>
                            </div>}

                            <div className="password-forget">
                                <Link to="/dailylogin"><p> Login Page</p></Link>
                            </div>

                            <button type="submit" className="signup-button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;




