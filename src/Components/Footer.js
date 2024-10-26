import React from "react";
import Logo from "../Assets/Trybe-.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://x.com/DotnetTribe"><BsTwitter /></a>
          <a href="https://www.linkedin.com/company/dotnettribe"><SiLinkedin /></a>
          <a href="https://web.facebook.com/people/Dotnet-Tribe/61562123500906/"><FaFacebookF /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Meet the Tribe Leaders</span>
          <div className="footer-links">
            <div className="tribe-icons">
              <span><a href="https://www.linkedin.com/in/kenechukwu-egwunwoke/" style={{ color: 'white' }}><SiLinkedin />KCM</a></span>
              <span><a href="https://www.linkedin.com/in/victor-ogbodo/" style={{ color: 'white' }}><SiLinkedin />Victor Ogbodo</a></span>
              <span><a href="https://www.linkedin.com/in/davidukpoju/" style={{ color: 'white' }}><SiLinkedin />David Ukpoju</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-three">
        <div className="footer-section-columns">
          <span>dotnettribe@gmail.com</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Copyright @2024 DotnetTribe</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
