import React from "react";
import "./Footer.css";
// import logo from "../../Images/healthplus logo.png";
import logo  from "../../Images/healthplus logo.png"

const Footer = () => {
  return (
    <div className="footer text-center text-white">
      <img src={logo} alt="" width="180" height="50" />
      <div className="container mb-3">
        <h4>Follow us</h4>
        <i className="fab fa-facebook-square mx-4"></i>
        <i className="fab fa-twitter mx-4"></i>
        <i className="fab fa-instagram mx-4"></i>
        <i className="fab fa-linkedin-in mx-4"></i>
      </div>
    </div>
  );
};

export default Footer;
