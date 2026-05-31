import React from "react";

export default function () {

    const item = ["Cake & Milk", "Coffee & Tea", "Peat Food", "Vegetable"]
    return (

        <>
            <div className="Featured-main">
                <div className="Featured-heading">
                    <h1>Featured Category</h1>
                    <ul> {item.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="featured-items">
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-1%20-%20Copy.ac89b9d18a5077eac3e8.png" alt="image" /><h6>Organic Kiwi</h6></div>
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-11%20-%20Copy.1b39a1174f4b4137bbbd.png" alt="image" /><h6>Peach</h6></div>
                    <div className="featured-produts">   <img src="https://your-daily-need.netlify.app/static/media/cat-9%20-%20Copy.b47d8bf4d6f4e0bca756.png" alt="image" /><h6>Red Apple</h6></div>
                    <div className="featured-produts">  <img src="https://your-daily-need.netlify.app/static/media/cat-3%20-%20Copy.9fadc9e19d2826cec910.png" alt="image" /><h6>Snack</h6></div>
                    <div className="featured-produts"><img src="https://your-daily-need.netlify.app/static/media/cat-1%20-%20Copy.ac89b9d18a5077eac3e8.png" alt="image" /><h6>Vegetables</h6></div>
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-2%20-%20Copy.fc1c1db18d79f5d98fe7.png" alt="image" /><h6>Strawberry</h6></div>
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-4%20-%20Copy.5462cff6c1821944c2b7.png" alt="image" /><h6>Black Plum</h6></div>
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-5%20-%20Copy.aad30d7464c1b497bb8d.png" alt="image" /><h6>Custard apple</h6></div>
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-14%20-%20Copy.63624f8871ae4ec4f3a9.png" alt="image" /><h6>coffe & Tea</h6></div>
                    <div className="featured-produts"> <img src="https://your-daily-need.netlify.app/static/media/cat-15%20-%20Copy.ca75690e37dc381e9f0c.png" alt="image" /><h6>Headphone</h6></div>
                </div>


                <div className="featured-items-lite">

                    <div className="featured-produts-lite">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKUNZurb8vZB6EMFedk8i9_L8ZLTVh7hDTg&s" alt="image" />
                        <h2>Everyday Fresh & Clean with Our Products</h2>
                        <button>Shop Now</button>
                    </div>

                    <div className="featured-produts-lite">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMwXwMge1LgdFVgtHJKTpugGWLF_DiaICgA&s" alt="image" />
                        <h2>Make Your Breakfast Easy & Healthy</h2>
                        <button>Shop Now</button>
                    </div>

                    <div className="featured-produts-lite">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSai3rjXA82oGGCNT_xzmzLrqiWbKEwbTnfoA&s" alt="image" />
                        <h2>The Best Organic Products Online</h2>
                        <button>Shop Now</button>
                    </div>

                </div>

            </div>



        </>
    )
}