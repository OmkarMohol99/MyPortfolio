import React from "react";
import "./About.css";
import Profile from "../../Images/profile.jpg";
import CV from "../../Resume/Omkar.pdf";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "OmkarResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="about-container">
        <div className="about-me-text-container">
          <h2 className="about-text">About</h2>
          <h2 className="me-text">Me</h2>
        </div>

        <div className="info-container">
          <div className="profile-container">
            <img className="profile" src={Profile} alt="profile" />
          </div>
          <div className="info">
            <h2>I'm Omkar</h2>
            <h5>Full Stack Developer</h5>
            <h6>
              I am a Full-Stack developer based in Pune, India. I am Mechanical
              Engineering graduate from SPPU. I am very passionate about
              improving my coding skills & developing applications & websites. I
              build WebApps and Websites using React Full Stack. Working for
              myself to improve my skills. Love to build Full-Stack clones.
            </h6>
            <h6>Email : omkarmohol0298@gmail.com</h6>
            <h6>Place : Pune, India - 411023</h6>
            <div className="resume-button" onClick={downloadResume}>
              <div className="button">
                <div className="button-wrapper">
                  <div className="text">Resume</div>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="2em"
                      height="2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
