import React from "react";
import "./herobottomsection.scss";
import { Link } from "react-router-dom";

const HroBottomSection = () => {
  return (
    <section id="hero-two" className="hero-bottom">
      <div className="wrapper">
        <div className="container">
          <div className="line"></div>
          <div className="text-field">
            <div className="left">
              <h3>Maximize Your <br /> Property's Use & Value</h3>
              <p>
                Our land use tool helps you to maximize the use or value of your
                property. By providing data insights and personalized
                recommendations, we help you make better decisions and optimize
                your property to its fullest potential. We offer a wide range of
                features that allow you to explore and develop your land in
                unique and innovative ways.
              </p>
            </div>
            <div className="right">
              <h3>Join our Email List <br /> & Get Access First</h3>
              <p>
                Sign up today to be the first to know about new features,
                product updates, and more! With our email list, you'll also get
                exclusive offers and discounts that are only available to our
                subscribers.
              </p>
              <Link to="join-to-mailing-list">JOIN OUR MAILING LIST</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HroBottomSection;
