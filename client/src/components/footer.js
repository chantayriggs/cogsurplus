import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <div className="mission">
                    <div className="header">science meets design</div>
                    <div className="subheader">We create stationery and lifestyle goods to celebrate science and inspire discovery, made with respect for the sustainability of our planet.</div>
                    <div className="social-media-wrapper">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-pinterest"></i>
                        <i class="fab fa-tumblr"></i>
                    </div>
                </div>
                <div className="subscribe">
                    <div className="header">join the matrix</div>
                    <div className="subheader">Be the first to hear about new products and exclusive sales.</div>
                    <input type="text" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>
                <div className="more">
                    <div className="header">learn more</div>
                    <div className="categories">
                        <Link className="category">Who We Are</Link>
                        <Link className="category">Corporate Gifts</Link>
                        <Link className="category">Become a Retailer</Link>
                        <Link className="category">Careers</Link>
                        <Link className="category">Journal</Link>
                    </div>
                </div>
                <div className="more">
                    <div className="header">ordering</div>
                    <div className="categories">
                        <Link className="category">Shipping</Link>
                        <Link className="category">Returns + Exchanges</Link>
                        <Link className="category">Reviews</Link>
                        <Link className="category">Gift Cards</Link>
                        <Link className="category">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="copyright">	&copy; cognitive surplus</div>
        </div>
    )
}

export default Footer