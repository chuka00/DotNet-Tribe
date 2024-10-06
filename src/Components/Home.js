import React from "react";
import BannerBackground from "../Assets/BannerBackground.png";
import BannerImage from "../Assets/BannerImage.png";
import NavBar from "./NavBar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const scrollToContact = () => {
    const footer = document.getElementById("contactId"); // Get the contact element
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll to it smoothly
  };
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Join the DotNet Tribe!</h1>
          <h3 className="primary-text">
            Welcome to DotNet Tribe, where coding meets community. Connect with
            African tech enthusiasts and elevate your C# and .NET skills.
          </h3>
          <button className="secondary-button" onClick={scrollToContact}>
            Join the Waitlist <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
