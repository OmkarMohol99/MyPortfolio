import React from "react";
import "./Home.css";
import Avatar from "../../Images/Avatar.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAboutMe = () => {
    navigate("/about");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/omkar-mohol-2112ba254/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/OmkarMohol99", "_blank");
  };

  const handleTwitter = () => {
    const url = `https://twitter.com/${"OmkarMohol41546"}`; // Replace with your Twitter URL
    window.open(url, "_blank"); // Open in a new tab
  };

  const openTelegramChat = () => {
    const url = `https://t.me/${+917719030298}`; // Replace with your Telegram URL
    window.open(url, "_blank"); // Open in a new tab
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/omkar_mohol_99", "_blank");
  };
  return (
    <>
      <div className="home-container">
        <div className="intro-container">
          <div className="hii-msg-div">
            <h1 className="hii-msg">Hi There,</h1>
          </div>
          <div className="self-name-container">
            <div className="im-div">
              <h1 className="im">
                I'm Omkar <span className="sirname">Mohol</span>
              </h1>
            </div>
          </div>
          <div className="profession-container">
            <h3 className="iam">
              I am <span className="profession">Software Developer</span>
            </h3>
          </div>
          <div className="aboute-me-button-container" onClick={handleAboutMe}>
            <button className="about-btn">
              <span className="btn-text-one">About me </span>
              <span className="btn-text-two">Click to see</span>
            </button>
          </div>
          <div className="mysocial-link-container">
            <div className="social-button">
              <i
                color="red"
                className="fa fa-linkedin-square"
                onClick={handleLinkedIn}
              ></i>
              <i className="fa fa-github-square" onClick={handleGitHub}></i>
              <i className="fa fa-twitter-square" onClick={handleTwitter}></i>
              <i className="fa fa-telegram" onClick={openTelegramChat}></i>
              <i className="fa fa-instagram" onClick={handleInstagram}></i>
            </div>
          </div>
        </div>
        <div className="avatar-container">
          <img className="avatar" src={Avatar} alt="Avatar" />
        </div>
      </div>
    </>
  );
};

export default Home;
