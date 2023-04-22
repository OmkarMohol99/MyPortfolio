import React from "react"; 
import "./Home.css";
import Avatar from "../../Images/Avatar.png";

const Home = () => {
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
          <div className="aboute-me-button-container">
            <button className="about-btn">
              <span className="btn-text-one">About me </span>
              <span className="btn-text-two">Click to see</span>
            </button>
          </div>
          <div className="mysocial-link-container">
            <div className="social-button">
              <i color="red" className="fa fa-linkedin-square"></i>
              <i className="fa fa-github-square"></i>
              <i className="fa fa-twitter-square"></i>
              <i className="fa fa-telegram"></i>
              <i className="fa fa-instagram"></i>
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
