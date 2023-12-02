import React from "react";
import "./connection.scss";
import data from "./data.json";

const Connection = () => {
  return (
    <div className="connection-container">
      <div className="connection-section">
        <div className="heading">
          <h4>MAKE CONNECTIONS</h4>
          <h2>Team of Instructors</h2>
        </div>
        <div>
          {data.map((item, index) => (
            <div>
              <div key={index} className="connection-1">
                <div
                  className="connection-left"
                  style={{ borderColor: item.color }}
                >
                  <img src={item.image} alt="" />
                </div>
                <div className="connection-right">
                  <div className="part-1-right">
                    <h4>{item.name}</h4>
                    <h5 style={{ color: item.color2 }}>{item.role}</h5>
                    <p>{item.description}</p>
                  </div>
                  <div className="part-1-bottom">
                    <div className="education">
                      <h2>My Education</h2>
                      {item.education.map((edu, eduIndex) => (
                        <div key={eduIndex} className="hard">
                          <img src={edu.img} alt="" />
                          <div className="text-connection">
                            <h4>{edu.university}</h4>
                            <p>{edu.degree}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="experience">
                      <h2>My Experience</h2>
                      {item.experience.map((exp, expIndex) => (
                        <div key={expIndex} className="hard">
                          <img src={exp.img} alt="" />
                          <div className="text-connection">
                            <h4>{exp.company}</h4>
                            <p>{exp.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="achivements">
                      <h2>My Achievements</h2>
                      {item.achievements.map((ach, achIndex) => (
                        <div key={achIndex} className="hard">
                          <img src={ach.img} alt="" />
                          <div className="text-connection">
                            <h4>{ach.title}</h4>
                            <p>{ach.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="award-section">
                <div className="award">
                  <h2>Awards</h2>
                </div>
                {item.awards.map((awd, awdIndex) => (
                  <div className="award-img">
                    <div key={awdIndex} className="award-img-section">
                      <img src={awd.images1} alt="" />
                      <img src={awd.images2} alt="" />
                      <img src={awd.images3} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connection;
