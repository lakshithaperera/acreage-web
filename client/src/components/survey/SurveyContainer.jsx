import React, { useState } from "react";
import "./surveycontainer.scss";
import LOGO from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SurveyContainer = () => {
  const navigate = useNavigate();

  const navigateFormSubmitted = () => {
    navigate("/form-submitted", {
      
    });
  };
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const [checkboxChecked1, setCheckboxChecked1] = useState(false);

  const [checkboxChecked2, setCheckboxChecked2] = useState(false);

  const [showActive, setShowActive] = useState(false);
  

  const handleBudgetChange = (event) => {
    if (event.target.value === "Yes") {
      setShowActive(true);
    } else {
      setShowActive(false);
    }
  };

  const [showActive1, setShowActive1] = useState(false);

  const handleBudgetChange1 = (event) => {
    if (event.target.value === "Yes") {
      setShowActive1(true);
    } else {
      setShowActive1(false);
    }
  };

  const [showActive2, setShowActive2] = useState(false);

  const handleBudgetChange2 = (event) => {
    if (event.target.value === "Yes") {
      setShowActive2(true);
    } else {
      setShowActive2(false);
    }
  };

  const [showActive3, setShowActive3] = useState(false);

  const handleBudgetChange3 = (event) => {
    if (event.target.value === "Yes") {
      setShowActive3(true);
    } else {
      setShowActive3(false);
    }
  };

  const [showActive4, setShowActive4] = useState(false);

  const handleBudgetChange4 = (event) => {
    if (event.target.value === "Yes") {
      setShowActive4(true);
    } else {
      setShowActive4(false);
    }
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyaddress: "",
    checkboxResidential: "",
    residentialRadio: "",
    checkboxCommercial: "",
    commercialRadio: "",
    checkboxIndustrial: "",
    industrialRadio: "",
    q2Radio: "",
    q3Radio: "",
    q4CheckboxNewLook: "",
    q4CheckboxIncreaseValue: "",
    q4CheckboxCommercializeProperty: "",
    q4CheckboxAdditional: "",
    q4CheckboxCuriosity: "",
    q5Textarea: "",
    q6Radio: "",
    q7Radio: "",
    q8Radio: "",
    q9Radio: "",
    q9Radio2: "",
    q10Radio: "",
    q10Textarea: "",
    q11Radio: "",
    q11Radio2: "",
    q12Radio: "",
    q12Radio2: "",
    q13CheckboxGeneral: "",
    q13CheckboxPricing: "",
    q13CheckboxTiming: "",
    q14Radio: "",
    q15Radio: "",
    q15Textarea: "",
    q16Radio: "",
    q17Radio: "",
    
  });

  function handleChangeS(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmitS(e) {
    e.preventDefault();

    const survey = {
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      propertyaddress: data.propertyaddress || "",
      checkboxResidential: data.propertyaddress || "",
      residentialRadio: data.residentialRadio || "",
      checkboxCommercial: data.checkboxCommercial || "",
      commercialRadio: data.commercialRadio || "",
      checkboxIndustrial: data.checkboxIndustrial || "",
      industrialRadio: data.industrialRadio || "",
      q2Radio: data.q2Radio || "",
      q3Radio: data.q3Radio || "",
      q4CheckboxNewLook: data.q4CheckboxNewLook || "",
      q4CheckboxIncreaseValue: data.q4CheckboxIncreaseValue || "",
      q4CheckboxCommercializeProperty: data.q4CheckboxCommercializeProperty || "",
      q4CheckboxAdditional: data.q4CheckboxAdditional || "",
      q4CheckboxCuriosity: data.q4CheckboxCuriosity || "",
      q5Textarea: data.q5Textarea || "",
      q6Radio: data.q6Radio || "",
      q7Radio: data.q7Radio || "",
      q8Radio: data.q8Radio || "",
      q9Radio: data.q9Radio || "",
      q9Radio2: data.q9Radio2 || "",
      q10Radio: data.q10Radio || "",
      q10Textarea: data.q10Textarea || "",
      q11Radio: data.q11Radio || "",
      q11Radio2: data.q11Radio2 || "",
      q12Radio: data.q12Radio || "",
      q12Radio2: data.q12Radio2 || "",
      q13CheckboxGeneral: data.q13CheckboxGeneral || "",
      q13CheckboxPricing: data.q13CheckboxPricing || "",
      q13CheckboxTiming: data.q13CheckboxTiming || "",
      q14Radio: data.q14Radio || "",
      q15Radio: data.q15Radio || "",
      q15Textarea: data.q15Textarea || "",
      q16Radio: data.q16Radio || "",
      q17Radio: data.q17Radio || "",
      
    };

    console.log({ survey });
    axios
      .post("https://acreage-web.vercel.app/api/survey", data)
      .then((res) => {
        setData({
          name: "",
          email: "",
          phone: "",
          propertyaddress: "",
          checkboxResidential: "",
          residentialRadio: "",
          checkboxCommercial: "",
          commercialRadio: "",
          checkboxIndustrial: "",
          industrialRadio: "",
          q2Radio: "",
          q3Radio: "",
          q4CheckboxNewLook: "",
          q4CheckboxIncreaseValue: "",
          q4CheckboxCommercializeProperty: "",
          q4CheckboxAdditional: "",
          q4CheckboxCuriosity: "",
          q5Textarea: "",
          q6Radio: "",
          q7Radio: "",
          q8Radio: "",
          q9Radio: "",
          q9Radio2: "",
          q10Radio: "",
          q10Textarea: "",
          q11Radio: "",
          q11Radio2: "",
          q12Radio: "",
          q12Radio2: "",
          q13CheckboxGeneral: "",
          q13CheckboxPricing: "",
          q13CheckboxTiming: "",
          q14Radio: "",
          q15Radio: "",
          q15Textarea: "",
          q16Radio: "",
          q17Radio: "",
        });
        console.log(res.data.message);
        navigateFormSubmitted();
      })
      .catch((err) => {
        console.log("Error couldn't create");
        console.log(err.message);
      });
  }

  return (
    <section className="survey" id="survey-container-s">
      <div className="wrapper">
        <div className="container">
          <div className="logo">
            <h2>acreage</h2>
            <img src={LOGO} alt="" />
          </div>
          <h1>feedback survey</h1>
          <form onSubmit={handleSubmitS}>
            <div className="title">
              <h6>Basic Information.</h6>
              <p>
                Please provide name, location and contact information below.
              </p>
            </div>

            <div className="input-field">
              <div className="input-area">
                <label>FULL NAME</label>
                <input
                  value={data.name}
                  onChange={handleChangeS}
                  type="text"
                  name="name"
                />
              </div>

              <div className="input-area">
                <label>EMAIL ADDRESS</label>
                <input
                  value={data.email}
                  onChange={handleChangeS}
                  type="text"
                  name="email"
                />
              </div>
            </div>

            <div className="input-field">
              <div className="input-area">
                <label>PHONE NUMBER</label>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChangeS}
                />
              </div>

              <div className="input-area">
                <label>PROPERTY ADDRESS</label>
                <input
                  type="text"
                  name="propertyaddress"
                  value={data.propertyaddress}
                  onChange={handleChangeS}
                />
              </div>
            </div>

            <div className="title title-2">
              <h6>Survey Questions</h6>
              <p>
                Please provide name, location and contact information below.
              </p>
            </div>

            {/* Questions 1 */}

            <h5>
              1. Which Types of Land or Property do you own and how long have
              you owned it?
            </h5>
            <div className="property-types">
              <div className="check-box">
                <input
                  type="checkbox"
                  name="checkboxResidential"
                  value="residential"
                  checked={checkboxChecked}
                  onChange={(event) =>{ setCheckboxChecked(!checkboxChecked);
                    handleChangeS(event);
                    }}
                />
                <label htmlFor="checkboxResidential"> Residential </label>
              </div>

              {checkboxChecked && (
                <div className="radio">
                  <div className="text">How Many Years?</div>
                  <input
                    type="radio"
                    name="residentialRadio"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="residentialRadio"> &lt; 1 Year</label>

                  <input
                    type="radio"
                    name="residentialRadio"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="residentialRadio">&lt; 5 Years</label>

                  <input
                    type="radio"
                    name="residentialRadio"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="residentialRadio">&lt; 10 Years</label>
                </div>
              )}

              {!checkboxChecked && (
                <div className="radio-disable">
                  <div className="text">How Many Years?</div>
                  <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year"> &lt; 1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt; 5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt; 10 Years</label>
                </div>
              )}
            </div>

            <div className="property-types">
              <div className="check-box">
                <input
                  type="checkbox"
                  name="checkboxCommercial"
                  value="commercial"
                  checked={checkboxChecked1}
                  onChange={(event) =>{ setCheckboxChecked1(!checkboxChecked1);
                    handleChangeS(event);
                    }}
                />
                <label htmlFor="checkboxCommercial"> Commercial </label>
              </div>

              {checkboxChecked1 && (
                <div className="radio">
                  <div className="text">How Many Years?</div>
                  <input
                    type="radio"
                    name="commercialRadio"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="commercialRadio"> &lt; 1 Year</label>

                  <input
                    type="radio"
                    name="commercialRadio"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="commercialRadio">&lt; 5 Years</label>

                  <input
                    type="radio"
                    name="commercialRadio"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="commercialRadio">&lt; 10 Years</label>
                </div>
              )}

              {!checkboxChecked1 && (
                <div className="radio-disable">
                  <div className="text">How Many Years?</div>
                  <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year"> &lt; 1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt; 5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt; 10 Years</label>
                </div>
              )}
            </div>

            <div className="property-types">
              <div className="check-box">
                <input
                  type="checkbox"
                  name="checkboxIndustrial"
                  value="industrial"
                  checked={checkboxChecked2}
                  onChange={(event) =>{ setCheckboxChecked2(!checkboxChecked2);
                    handleChangeS(event);
                    }}
                />
                <label htmlFor="checkboxIndustrial"> Industrial </label>
              </div>

              {checkboxChecked2 && (
                <div className="radio">
                  <div className="text">How Many Years?</div>
                  <input
                    type="radio"
                    name="industrialRadio"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="industrialRadio"> &lt; 1 Year</label>

                  <input
                    type="radio"
                    name="industrialRadio"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="industrialRadio">&lt; 5 Years</label>

                  <input
                    type="radio"
                    name="industrialRadio"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="industrialRadio">&lt; 10 Years</label>
                </div>
              )}

              {!checkboxChecked2 && (
                <div className="radio-disable">
                  <div className="text">How Many Years?</div>
                  <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year"> &lt; 1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt; 5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt; 10 Years</label>
                </div>
              )}
            </div>

            {/* Questions 2 */}

            <h5 className="for-space">2. Do you have a rental property?</h5>
            <div className="radio-two-options">
              <input
                type="radio"
                name="q2Radio"
                value="Yes"
                onChange={handleChangeS}
              />
              <label htmlFor="q2Radio"> Yes, I do</label>

              <input
                type="radio"
                name="q2Radio"
                value="No"
                onChange={handleChangeS}
              />
              <label htmlFor="q2Radio">No, I don’t</label>
            </div>

            {/* Questions 3 */}

            <h5 className="for-space">
              3. Have you considered renovating or redeveloping your property?
            </h5>
            <div className="radio-two-options">
              <input
                type="radio"
                name="q3Radio"
                value="Yes"
                onChange={handleChangeS}
              />
              <label for="q3Radio">Yes, I have</label>

              <input
                type="radio"
                name="q3Radio"
                value="No"
                onChange={handleChangeS}
              />
              <label for="q3Radio">No, I haven’t</label>
            </div>

            {/* Questions 4 */}

            <h5 className="for-space">
              4. What are your primary reasons for considering property
              renovations? (provide options)
            </h5>
            <div className="property-types chech-box-5">
            <div className="check-box">
                <input
                  type="checkbox"
                  name="q4CheckboxNewLook"
                  value="Desire for a new look/feel of your property"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4checkboxnewlook"> Desire for a new look/feel of your property </label>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="q4CheckboxIncreaseValue"
                  value="Increase the value of the property"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4CheckboxIncreaseValue"> Increase the value of the property </label>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="q4CheckboxCommercializeProperty"
                  value="To commercialize property for rent"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4CheckboxCommercializeProperty"> To commercialize property for rent </label>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="q4CheckboxCuriosity"
                  value="Curiosity"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4CheckboxCuriosity"> Curiosity </label>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="q4CheckboxAdditional"
                  value="Other/Additional"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4CheckboxAdditional"> Other/Additional </label>
              </div>
            </div>

            {/* Questions 5 */}

            <h5 className="for-space">
              5. Why would you want to redevelop the property that you live in?
              (provide options)
            </h5>
            <div className="radio radio-active text-area  text area-single">
                  <textarea
                    name="q5Textarea"
                    value={data.q5Textarea}
                    onChange={handleChangeS}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

            {/* Questions 6 */}

            <h5 className="for-space questions-6">
              6. What are your limitations regarding redevelopment of your
              property?
            </h5>
            <div className="radio-two-options radio-three-options ">
              <div className="options">
                <input
                  type="radio"
                  name="q6Radio"
                  value="Finances"
                  onChange={handleChangeS}
                />
                <label htmlFor="q6Radio">Finances</label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q6Radio"
                  value="Knowledge"
                  onChange={handleChangeS}
                />
                <label htmlFor="q6Radio">Knowledge</label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q6Radio"
                  value="Time"
                  onChange={handleChangeS}
                />
                <label htmlFor="q6Radio">Time</label>
              </div>

              <div className="options">
                <input
                  type="radio"
                  name="q6Radio"
                  value="Other/Additional"
                  onChange={handleChangeS}
                />
                <label htmlFor="q6Radio">Other/Additional</label>
              </div>
            </div>

            {/* Questions 7 */}

            <h5 className="for-space">
              7. Would you be interested in consulting services for your
              property redevelopment?
            </h5>
            <div className="radio-two-options">
              <input
                type="radio"
                name="q7Radio"
                value="Yes"
                onChange={handleChangeS}
              />
              <label htmlFor="q7Radio"> Yes, I have</label>

              <input
                type="radio"
                name="q7Radio"
                value="No"
                onChange={handleChangeS}
              />
              <label htmlFor="q7Radio">No, I haven’t</label>
            </div>

            {/* Questions 8 */}

            <h5 className="for-space">
              8. What roles does costs play in your decision to renovate or
              redevelop your property?
            </h5>
            <div className="radio-two-options radio-three-options ">
              <div className="options">
                <input
                  type="radio"
                  name="q8Radio"
                  value="Cost plays a large role"
                  onChange={handleChangeS}
                />
                <label htmlFor="q8Radio">Cost plays a large role</label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q8Radio"
                  value="Cost plays somewhat a role"
                  onChange={handleChangeS}
                />
                <label htmlFor="q8Radio">Cost plays somewhat a role</label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q8Radio"
                  value="Cost plays no role at all"
                  onChange={handleChangeS}
                />
                <label htmlFor="q8Radio">Cost plays no role at all</label>
              </div>
            </div>

            {/* Questions 9 */}

            <h5 className="for-space">9. Do you have a budget?</h5>
            <div className="radio-area">
              <div className="radio-two-options">
                <input
                  type="radio"
                  name="q9Radio"
                  value="No"
                  onChange={(event) => {
                    handleChangeS(event);
                    handleBudgetChange(event);
                  }}
                />
                <label htmlFor="q9Radio">No</label>

                <input
                  type="radio"
                  name="q9Radio"
                  value="Yes"
                  onChange={handleBudgetChange}
                />
                <label htmlFor="q9Radio">Yes</label>
              </div>

              {showActive ? (
                <div className="radio radio-active mobile-radio-space-top questions9-radios-main">
                  <div className="text">What’s Your Budget</div>
                  <div className="questions9-radios">
                  <div className="questions9-radios-area">
                  <input
                    type="radio"
                    name="q9Radio2"
                    value="< $10,000.00"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&lt; $10,000.00</label>

                  <input
                    type="radio"
                    name="q9Radio2"
                    value="< $25,000.00"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&lt; $25,000.00</label>


                  </div>
                  <div className="questions9-radios-area">
                  <input
                    type="radio"
                    name="q9Radio2"
                    value="< $50,000.00"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&lt; $50,000.00</label>
                   
                  <input
                    type="radio"
                    name="q9Radio2"
                    value="> $50,000.00"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&gt; $50,000.00</label>
                  </div>
                 
                  </div>
                
                </div>
              ) : (
                <div className="radio-disable mobile-radio-space-top questions9-radios-main">
                  <div className="text">What’s Your Budget</div>
                  <div className="questions9-radios">
                    <div className="questions9-radios-area">
                    <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year">&lt; $10,000.00</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt; $25,000.00</label>
                    </div>
                    <div className="questions9-radios-area">
                    <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt; $50,000.00</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&gt; $50,000.00</label>
                    </div>
            
                  </div>
                </div>
              )}
            </div>

            {/* Questions 10 */}

            <h5 className="for-space mobile-space for-top-spece-q10">
              10. Do you know the initial steps of renovating or redeveloping
              your property?
            </h5>
            <div className="radio-area">
              <div className="radio-two-options">
                <input
                  type="radio"
                  name="q10Radio"
                  value="No"
                  onChange={(event) => {
                    handleChangeS(event);
                    handleBudgetChange1(event);
                  }}
                />
                <label htmlFor="initial steps-no">No</label>

                <input
                  type="radio"
                  name="q10Radio"
                  value="Yes"
                  onChange={handleBudgetChange1}
                />
                <label htmlFor="initial steps-yes">Yes</label>
              </div>

              {showActive1 ? (
                <div className="radio radio-active text-area  ">
                  <div className="text">If yes, describe the steps below:</div>
                  <textarea
                    name="q10Textarea"
                    value={data.q10Textarea}
                    onChange={handleChangeS}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              ) : (
                <div className="radio-disable text-area text-area-disable ">
                  <div className="text">If yes, describe the steps below:</div>
                  <textarea
                    disabled
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Questions 11 */}

            <h5 className="for-space for-space-top ">
              11. What is the scope of your renovation?
            </h5>
            <div className="radio-area">
              <div className="radio-two-options">
                <input
                  type="radio"
                  name="q11Radio"
                  value="No"
                  onChange={(event) => {
                    handleChangeS(event);
                    handleBudgetChange2(event);
                  }}
                />
                <label htmlFor="q11Radio">No</label>

                <input
                  type="radio"
                  name="q11Radio"
                  value="Yes"
                  onChange={handleBudgetChange2}
                />
                <label htmlFor="q11Radio">Yes</label>
              </div>

              {showActive2 ? (
                <div className="radio radio-active mobile-radio-space-top">
                  <div className="text">What’s Your Budget</div>
                  <input
                    type="radio"
                    name="q11Radio2"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q11Radio2">&lt; 1 Year</label>

                  <input
                    type="radio"
                    name="q11Radio2"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q11Radio2">&lt; 5 Years</label>

                  <input
                    type="radio"
                    name="q11Radio2"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q11Radio2">&lt; 10 Years</label>
                </div>
              ) : (
                <div className="radio-disable mobile-radio-space-top">
                  <div className="text">What’s Your Budget</div>
                  <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year">&lt; 1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt; 5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt; 10 Years</label>
                </div>
              )}
            </div>
            {/* Questions 12 */}
            <h5 className="for-space mobile-space">
              12. Do you have a preferred timeline for renovations?
            </h5>
            <div className="radio-area">
              <div className="radio-two-options">
                <input
                  type="radio"
                  name="q12Radio"
                  value="No"
                  onChange={(event) => {
                    handleChangeS(event);
                    handleBudgetChange3(event);
                  }}
                />
                <label htmlFor="preferred-timeline-no">No</label>

                <input
                  type="radio"
                  name="q12Radio"
                  value="Yes"
                  onChange={handleBudgetChange3}
                />
                <label htmlFor="q12Radio">Yes</label>
              </div>

              {showActive3 ? (
                <div className="radio radio-active mobile-radio-space-top">
                  <div className="text">What’s Your Budget</div>
                  <input
                    type="radio"
                    name="q12Radio2"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q12Radio2">&lt; 1 Year</label>

                  <input
                    type="radio"
                    name="q12Radio2"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q12Radio2">&lt; 5 Years</label>

                  <input
                    type="radio"
                    name="q12Radio2"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q12Radio2">&lt; 10 Years</label>
                </div>
              ) : (
                <div className="radio-disable mobile-radio-space-top">
                  <div className="text">What’s Your Budget</div>
                  <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year">&lt; 1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt; 5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt; 10 Years</label>
                </div>
              )}
            </div>

            {/* Questions 13 */}
            <h5 className="for-space mobile-space">
              13. What are your perceived challenges about renovating?
            </h5>
            <div className="property-types chech-box-5">
            <div className="check-box">
                <input
                  type="checkbox"
                  name="q13CheckboxGeneral"
                  value="General contracting"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4checkboxnewlook"> General contracting </label>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="q13CheckboxPricing"
                  value="Fluctuating pricing"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4CheckboxIncreaseValue"> Fluctuating pricing </label>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="q13CheckboxTiming"
                  value="Timing"
                  onChange={handleChangeS}
                />
                <label htmlFor="q4CheckboxCommercializeProperty"> Timing  </label>
              </div>
            </div>

            {/* Questions 14 */}
            <h5 className="for-space ">
              14. What are you least concerned about regarding renovating or
              redeveloping your property? (provide options)
            </h5>

            <div className="radio-two-options radio-three-options ">
              <div className="options">
                <input
                  type="radio"
                  name="q14Radio"
                  value="Finances"
                  onChange={handleChangeS}
                />
                <label htmlFor="q14Radio">Finances</label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q14Radio"
                  value="Knowledge"
                  onChange={handleChangeS}
                />
                <label htmlFor="q14Radio">Knowledge</label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q14Radio"
                  value="Time"
                  onChange={handleChangeS}
                />
                <label htmlFor="q14Radio">Time</label>
              </div>

              <div className="options">
                <input
                  type="radio"
                  name="q14Radio"
                  value="Other/Additional"
                  onChange={handleChangeS}
                />
                <label htmlFor="q14Radio">Other/Additional</label>
              </div>
            </div>

            {/* Questions 15 */}
            <h5 className="for-space">
              15. Is there any additional information you’d like to act on?
            </h5>
            <div className="radio-area">
              <div className="radio-two-options">
                <input
                  type="radio"
                  name="q15Radio"
                  value="No"
                  onChange={(event) => {
                    handleChangeS(event);
                    handleBudgetChange4(event);
                  }}
                />
                <label htmlFor="q15Radio">No</label>

                <input
                  type="radio"
                  name="q15Radio"
                  value="Yes"
                  onChange={handleBudgetChange4}
                />
                <label htmlFor="q15Radio">Yes</label>
              </div>

              {showActive4 ? (
                <div className="radio radio-active text-area">
                  <div className="text">Describe the steps below:</div>
                  <textarea
                    name="q15Textarea"
                    value={data.q15Textarea}
                    onChange={handleChangeS}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              ) : (
                <div className="radio-disable text-area text-area-disable">
                  <div className="text">Describe the steps below:</div>
                  <textarea
                    disabled
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Questions 16 */}
            <h5 className="for-space for-space-top">
              16. Are you interested in incorporating energy-efficient or
              sustainable features into the renovations?
            </h5>
            <div className="radio-two-options radio-options-mobile">
              <div className="radio-options-mobile-a">
                <input
                  type="radio"
                  name="q16Radio"
                  value="Yes"
                  onChange={handleChangeS}
                />
                <label htmlFor="q16Radio">Yes, I have</label>
              </div>

              <div className="radio-options-mobile-a">
                <input
                  type="radio"
                  name="q16Radio"
                  value="No"
                  onChange={handleChangeS}
                />
                <label htmlFor="q16Radio">No, I haven’t</label>
              </div>
            </div>

            {/* Questions 17 */}
            <h5 className="for-space">
              17. Have you considered adding a rental or for-sale addition on
              your property?
            </h5>
            <div className="radio-two-options radio-options-mobile">
              <div className="radio-options-mobile-a">
                <input
                  type="radio"
                  name="q17Radio"
                  value="Yes"
                  onChange={handleChangeS}
                />
                <label htmlFor="q17Radio"> Yes, I have</label>
              </div>
              <div className="radio-options-mobile-a">
                <input
                  type="radio"
                  name="q17Radio"
                  value="No"
                  onChange={handleChangeS}
                />
                <label htmlFor="q17Radio">No, I haven’t</label>
              </div>
            </div>

            {/* Questions 18 */}
            <h5 className="for-space">
              18. How will you finance the renovation or property upgrades?
              (provide options)
            </h5>

            <div className="form-sumbit-btn-area">
              <button type="submit" className="submit-btn">
                SUBMIT SURVEY FORM
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SurveyContainer;
