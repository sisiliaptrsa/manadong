import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={'/Assets/manadong.svg'} alt="" />
        </div>
        <p>Copyright &copy; 2023 PT Bogadong Anugerah Indonesia</p>
      </div>
      <div className="footer-section">
        <div className="footer-section-columns">
          <span>Contact Us</span>
          <div className="footer-contact-details">
            <pre>Email      :   Manadong@gmail.com</pre>
            <pre>Telp        :   +62-811-1009-115</pre>
          </div>
          <div className='footer-icons'>
            <FaWhatsapp />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-section-columns">
          <span>Available On</span>
          <div className="footer-contact-details">
            <p>Grab Food</p>
            <p>GoFood</p>
            <p>Shopee Food</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer