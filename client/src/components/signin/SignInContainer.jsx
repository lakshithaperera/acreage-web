import React from "react";
import "./signincontainer.scss";
import LOGO from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignInContainer = () => {
  const navigate = useNavigate();

  const navigateToSurvey = () => {
    navigate("/survey", {});
  };

  const navigateToJoiningComplete = () => {
    navigate("/joining-complete", {});
  };

  const [data, setData] = useState({ name: "", email: "" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      name: data.name || "",
      email: data.email || "",
    };

    console.log({ todo });
    axios
      .post("http://52.15.118.34:5000/api/todo", todo)
      .then((res) => {
        setData({ name: "", email: "" });
        console.log(res.data.message);
        // Perform additional action after form submission
        navigateToJoiningComplete();
      })
      .catch((err) => {
        console.log("Error couldn't create");
        console.log(err.message);
      });
  };

  return (
    <section className="sign-in">
      <div className="wrapper">
        <div className="container">
          <div className="left">
            <div className="logo">
              <h2>join our mailing list.</h2>
              <img src={LOGO} alt="" />
            </div>

            <p>
              Acreage is a property technology (PropTech) start-up that offers a
              powerful land use tool. We
            </p>

            <form onSubmit={handleSubmit} className="input-field" noValidate>
              <div className="input-area">
                <label htmlFor="name">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div htmlFor="email" className="input-area">
                <label>EMAIL ADDRESS</label>
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <button className="submit-btn" type="submit">
                JOIN OUR MAILING LIST
              </button>
            </form>
          </div>
          <div className="right">
            <h2>
              Complete our survey for early access to the <span>acreage</span>{" "}
              platform.
            </h2>
            <p>
              Acreage is a property technology (PropTech) start-up that offers a
              powerful land use tool. We
            </p>
            <button onClick={() => navigateToSurvey()}>COMPLETE SURVEY</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInContainer;
