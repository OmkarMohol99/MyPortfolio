import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <div className="my-experience-text-container">
          <h2 className="my-text">My</h2>
          <h2 className="experience-text">Experience</h2>
        </div>

        <div className="experience-list">
          <li className="experience-item">
            <div className="experience-item-content">
              <h2 className="experience-item-title">Apprely Technologies</h2>
              <h3 className="experience-item-role">Full Stack Developer</h3>
              <p className="experience-item-date">Dec 2022 - Present</p>
              <p className="experience-item-description">
                Skills: GraphQL · Django REST Framework · JSON Web Token (JWT) ·
                Node.js · React Native · Python (Programming Language) · Django
                · React.js · JSON · JavaScript · Postman API
              </p>
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-item-content">
              <h2 className="experience-item-title">Apprely Technologies</h2>
              <h3 className="experience-item-role">Full Stack Developer</h3>
              <p className="experience-item-date">Dec 2022 - Present</p>
              <p className="experience-item-description">
                Skills: Python (Programming Language) · Django · React.js ·
                MySQL · drf · JSON · Pycharm · Visual Studio · HTML · Cascading
                Style Sheets (CSS) · JavaScript · Postman API · postman · GitHub
                · SQLAlchemy
              </p>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default Experience;
