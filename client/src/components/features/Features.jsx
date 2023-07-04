import React from "react";
import "./features.scss";
import ICON_1 from "../../assets/icon-1.svg";
import ICON_2 from "../../assets/icon-2.svg";
import ICON_3 from "../../assets/icon-3.svg";

const Features = () => {
  return (
    <section id="feature" className="features">
      <div className="wrapper">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-cards">
            <div className="card">
              <div className="top">
                <h3>
                  <span>
                    Land <br /> Analysis <br />{" "}
                  </span>{" "}
                  Consult
                </h3>
                <div className="icons">
                  <p>a</p>
                  <img className="icon" src={ICON_1} alt="" />
                </div>
              </div>
              <div className="line"></div>
              <p>
                Personalized guidance from an expert in real estate development
                to help you move forward with your land development project.{" "}
              </p>
              <div className="line"></div>
              <p>
                Consultants provide a step-by-step plan to ensure a smooth
                development process, taking into account your unique goals and
                challenges.
              </p>
            </div>

            <div className="card">
              <div className="top">
                <h3>
                  <span>
                    Service <br /> Ad <br />{" "}
                  </span>
                  Portal
                </h3>
                <img className="icon" src={ICON_2} alt="" />
              </div>
              <div className="line"></div>
              <p>
                Architects, engineers, general and sub-contractors, realtors,
                and brokers who can help you turn your real estate development
                dreams into reality.
              </p>
              <div className="line"></div>
              <p>
                Our vetted, proven professionals can assist you at every stage
                of your project, across design and construction to marketing and
                sales
              </p>
            </div>

            <div className="card">
              <div className="top">
                <h3>
                  <span>
                    Land  
                    <br /> Analysis <br />{" "}
                  </span>{" "}
                  Packet
                </h3>
                <img className="icon" src={ICON_3} alt="" />
              </div>
              <div className="line"></div>
              <p>
                A detailed report that analyzes the best use of your land and
                outlines potential configuration possibilities, cost, duration,
                and permits required.
              </p>
              <div className="line"></div>
              <p>
                With this information, you can make data-driven decisions about
                how to use your land most effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
