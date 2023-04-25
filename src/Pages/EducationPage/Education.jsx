import React from "react";
import "./Education.css";
import degree from "../../Images/zeal_degree.jpg";
import diploma from "../../Images/zeal_diploma.png";

const Education = () => {
  return (
    <>
      <div className="education-container">
        <div className="my-education-container">
          <h2 className="my-text">My</h2>
          <h2 className="education-text">Education</h2>
        </div>

        <div className="education-list">
          <div className="education-item">
            <img src={degree} alt="Degree" className="education-item-image" />
            <div className="education-item-content">
              <h2 className="education-item-title">
                Bachelor Of Engineering In Mechanical Engineering
              </h2>
              <p className="education-item-degree">
                Zeal College Of Engineering And Research | SPPU
              </p>
              <p className="education-item-date">Graduated in June 2021</p>
            </div>
          </div>
          <div className="education-item">
            <img src={diploma} alt="Diploma" className="education-item-image" />
            <div className="education-item-content">
              <h2 className="education-item-title">
                Diploma in Mechanical Engineering
              </h2>
              <p className="education-item-degree">Zeal Polytechnic | MSBTE</p>
              <p className="education-item-date">Graduated in June 2018</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
