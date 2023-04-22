import React from "react";
import "./Skills.css";
import JavaScript from "../../Images/js.png";
import Python from "../../Images/python.png";
import MySQL from "../../Images/mysql.png";
import ReactJS from "../../Images/react.png";
import HTML5 from "../../Images/html5.png";
import CSS3 from "../../Images/css3.png";
import reduxPng from "../../Images/redux.png";
import NodeJSpng from "../../Images/nodejs.png";
import django from "../../Images/django.png";
import android from "../../Images/android.png";
import mongodb from "../../Images/mongodb.png";
import postman from "../../Images/postman.png";
import github from "../../Images/github.png";
import bootstrap from "../../Images/bootstrap.svg";
import antd from "../../Images/antd.png";

const Skills = () => {
  const mySkills = [
    { skillName: "JavaScript", imageUrl: JavaScript },
    { skillName: "Python", imageUrl: Python },
    { skillName: "My SQL", imageUrl: MySQL },
    { skillName: "ReactJS", imageUrl: ReactJS },
    { skillName: "HTML5", imageUrl: HTML5 },
    { skillName: "CSS3", imageUrl: CSS3 },
    { skillName: "Redux", imageUrl: reduxPng },
    { skillName: "NodeJS", imageUrl: NodeJSpng },
    { skillName: "Django", imageUrl: django },
    { skillName: "Android", imageUrl: android },
    { skillName: "MongoDB", imageUrl: mongodb },
    { skillName: "PostmanAPI", imageUrl: postman },
    { skillName: "GitHub", imageUrl: github },
    { skillName: "Bootstrap", imageUrl: bootstrap },
    { skillName: "ANTD", imageUrl: antd },
    // "Python",
    // "My SQL",
    // "ReactJS",
    // "HTML5",
    // "CSS3",
    // "Redux",
    // "Node.js",
    // "Django",
    // "Android",
    // "MongoDB",
    // "Rest API",
    // "GitHub",
    // "Bootstrap",
    // "ANTD",
  ];

  return (
    <>
      <div className="skills-container">
        <div className="skills-and-abilities-container">
          <h2 className="skills-text">Skills & </h2>
          <h2 className="abilities-text">Abilities</h2>
        </div>
        <div className="skills-list-container">
          <div className="skills-list">
            {mySkills.map((skill) => (
              <div key={skill.skillName} className="skill-item">
                <img
                  src={skill.imageUrl}
                  alt={skill.skillName}
                  className="skill-item-image"
                />
                <div className="skill-item-text">{skill.skillName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
