import React from "react";
import BannerImage from "../Assets/About_Image.png";
import AboutBackground from "../Assets/AboutSectionBackground.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsClipboard2CheckFill } from "react-icons/bs";

const About = () => {
  const scrollToContact = () => {
    const footer = document.getElementById("contactId"); // Get the contact element
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll to it smoothly
  };
  const handleButtonClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSezOHF2mJoxh7AMP_-Mv0weVNJgKY5GQh7AL1kCQbiqBIsK4g/viewform",
      "_blank"
    );
  };
  return (
    <div className="about-section-container" id="aboutId">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="home-image-section">
        <img src={BannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1
          className="primary-heading"
          style={{ textAlign: "right", justifyContent: "right" }}
        >
          Who We Are
        </h1>
        <p className="primary-text">
          At DotNet Tribe, we empower African developers through collaboration,
          knowledge-sharing, and skill development. Our vision is to build a
          diverse, innovative tech community. Your insights are key to improving
          our resources and events for tech enthusiasts.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={scrollToContact}>
            Join Now
          </button>
          <button className="take-survey-button" onClick={handleButtonClick}>
            <BsClipboard2CheckFill /> Take the Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
