import React from "react";
import "./realestate.scss";
import { Link } from "react-router-dom";

const RealEstate = () => {
  return (
    <section className="real-estate">
      <div className="wrapper">
        <div className="container">
          <div className="top">
            <div className="text-box">
              <h3>Don't leave your land development project to chance.</h3>
              <h4>
                Start your journey to success today with our <br />{" "}
                comprehensive real estate development tools and <br /> services
              </h4>
            </div>
          </div>
          <div className="bottom">
            <h3>
              <span>Unlock the Value of Your Land <br /> </span> Join the Acreage Email List and Get
              First <br /> Access When We Launch!
            </h3>
            <Link to="join-to-mailing-list">JOIN OUR MAILING LIST</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
