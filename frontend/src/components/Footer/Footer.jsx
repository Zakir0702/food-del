import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
  Tomato is your trusted food delivery partner, bringing fresh meals from your favorite restaurants right to your door. Fast, reliable, and delicious — because good food is just a tap away.
</p>

            <div className="footer-social-icons">
  <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>
  <a href="https://www.twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
    <img src={assets.twitter_icon} alt="Twitter" />
  </a>
  <a href="https://www.linkedin.com/in/zakir-uddin/" target="_blank" rel="noopener noreferrer">
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
</div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>6209253948</li>
                <li>zakirsalimpur420@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
