import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetail() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    async function getData() {
        const res = await fetch("https://dailyneedbackend-yz7x.onrender.com/api/products/getproducts");

        const data = await res.json();

        const foundProduct = data.find((item) => item.url === id);

        setProduct(foundProduct);
    }

    useEffect(() => {
        getData();
    }, [id]);

    if (!product) {
        return <h2 className="productdetail-loading">Loading...</h2>;
    }

    return (
        <>
            <div className="productdetail-container">
                <h1 className="productdetail-title">{product.name}</h1>

                <div className="productdetail-image-wrapper">
                    <img src={product.image} alt={product.name} className="productdetail-image" />
                </div>

                <div className="productdetail-info">

                    <p className="productdetail-brand"> <span>Brand:</span> {product.brand} </p>

                    <p className="productdetail-category"> <span>Category:</span> {product.category} </p>

                    <p className="productdetail-description">  {product.description} </p>

                    <h2 className="productdetail-price">  ₹{product.price} <span className="productdetail-oldprice">  ₹{product.oldprice} </span> </h2>

                    <p className="productdetail-rating"> ⭐ {product.rating} (120 Reviews) </p>

                    <p className={`productdetail-stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}> {product.stock > 0 ? "In Stock" : "Out of Stock"} </p>
                    <button className="productdetail-buybtn">🛒 Buy Now</button>
                </div>


                <div className="productdetail-features">
                    <h3>Why choose this product?</h3>
                    <ul>
                        <li>✔ Premium quality guaranteed</li>
                        <li>✔ Fast delivery available</li>
                        <li>✔ Easy return policy (7 days)</li>
                        <li>✔ Trusted by 10,000+ customers</li>
                    </ul>
                </div>


                <div className="productdetail-reviews">
                    <h3>Customer Reviews</h3>

                    <div className="review-card">
                        <p><b>Rohit Sharma</b> ⭐⭐⭐⭐⭐</p>
                        <p>Very good product, quality is amazing 👍</p>
                    </div>

                    <div className="review-card">
                        <p><b>Priya Singh</b> ⭐⭐⭐⭐</p>
                        <p>Worth the price, delivery was fast 🚀</p>
                    </div>

                    <div className="review-card">
                        <p><b>Amit Verma</b> ⭐⭐⭐⭐⭐</p>
                        <p>Highly recommended! Will buy again.</p>
                    </div>
                </div>


                <div className="productdetail-extra">
                    <h3>Product Details</h3>
                    <p>
                        This product is carefully crafted with high-quality materials to ensure durability and performance.
                        Suitable for everyday use and loved by customers across India.
                    </p>
                </div>

                <div className="productdetail-specs">
                    <h3>Specifications</h3>
                    <table>
                        <tbody>
                            <tr><td>Brand</td><td>{product.brand}</td></tr>
                            <tr><td>Category</td><td>{product.category}</td></tr>
                            <tr><td>Weight</td><td>500g</td></tr>
                            <tr><td>Country</td><td>India</td></tr>
                            <tr><td>Expiry</td><td>12 Months</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="productdetail-delivery">
                    <h3>Delivery & Services</h3>
                    <ul>
                        <li>🚚 Free delivery on orders above ₹499</li>
                        <li>⚡ Same day dispatch</li>
                        <li>🔄 Easy 7-day return policy</li>
                        <li>💳 Cash on Delivery available</li>
                    </ul>
                </div>


                <div className="productdetail-faq">
                    <h3>Frequently Asked Questions</h3>

                    <div className="faq-item">
                        <p><b>Q. Is this product original?</b></p>
                        <p>Yes, all our products are 100% genuine and quality checked.</p>
                    </div>

                    <div className="faq-item">
                        <p><b>Q. What is the return policy?</b></p>
                        <p>You can return within 7 days of delivery.</p>
                    </div>

                    <div className="faq-item">
                        <p><b>Q. How long does delivery take?</b></p>
                        <p>Usually 2–5 business days depending on your location.</p>
                    </div>
                </div>


                <div className="productdetail-related">
                    <h3>Related Products</h3>

                    <div className="related-grid">
                        <div className="related-card">
                            <img src={product.image} alt="" />
                            <p>Similar Product 1</p>
                            <span>₹199</span>
                        </div>

                        <div className="related-card">
                            <img src={product.image} alt="" />
                            <p>Similar Product 2</p>
                            <span>₹249</span>
                        </div>

                        <div className="related-card">
                            <img src={product.image} alt="" />
                            <p>Similar Product 3</p>
                            <span>₹299</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}