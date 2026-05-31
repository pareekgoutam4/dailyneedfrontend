
import Nav from "../components/nav";
import Banner from "../components/banner";
import Featured from "../components/featured";
import Products from "../components/dailyproduct";
import DailySell from "../components/dailysell";
import DealDay from "../components/dealday";
import FooterImg from "../components/footerimg";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export default function Home() {

    const navigate = useNavigate();


    
    useEffect(() => {
        const usercheck = localStorage.getItem("userid");

        if (!usercheck) {
            navigate("/dailylogin");
        }
    }, []);







    return (
        <>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Nav />
            <Banner />
            <Featured />
            <Products />
            <DailySell />
            <DealDay />
            <FooterImg />
            <Footer />
        </>
    )
}