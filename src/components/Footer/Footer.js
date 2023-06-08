import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiFillInstagram , AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (

        <footer>
            <div className="footer-col">
                <h3>Top Products</h3>
                <li>Manage Reputation</li>
                <li>Power Tools</li>
                <li>Managed Website</li>
                <li>Marketing Service</li>
            </div>

            <div className="footer-col">
                <h3>Top Products</h3>
                <li>Power Tools</li>
                <li>Jobs</li>
                <li>Marketing Service</li>
                <li>Manage Reputation</li>
            </div>
            <div className="footer-col">
                <h3>Top Products</h3>
                <li>Power Tools</li>
                <li>Managed Website</li>
                <li>Manage Reputation</li>
                <li>Marketing Service</li>
            </div>
            <div className="footer-col">
                <h3>Guides</h3>
                <li>Research</li>
                <li>Experts</li>
                <li>Managed Website</li>
                <li>Marketing Service</li>
            </div>

            <div className="footer-col">
                <h3>Newsletter</h3>
                <p>You can trust us. we only send promo offers </p>
                <div className="subscribe">
                    <input type="text" placeholder="Your Email address" />
                    <a href="#" className="yellow">SUBSCRIBE</a>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright ©2023 All rights reserved</p>
                <div className="pro-links">
                    <AiFillFacebook className='footer-icon'/>
                    <AiFillInstagram className='footer-icon'/>
                    <AiFillLinkedin className='footer-icon'/>
                </div>
            </div>

        </footer>
    )
}

export default Footer
