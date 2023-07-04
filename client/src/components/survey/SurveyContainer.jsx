import React, { useState } from "react";
import "./surveycontainer.scss";
import LOGO from "../../assets/logo.svg";
import axios from "axios";

const SurveyContainer = () => {
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

  const [formSubMsg, setFormSubMsg] = useState(false);
  const FormSubMsg = () => {
    setFormSubMsg(!formSubMsg);
    document.querySelector(".form-sumbited-tesxt").style.display = "block";
  };

  

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyaddress: "",
    residentialRadio: "",
    commercialRadio: "",
    industrialRadio: "",
    q2Radio: "",
    q3Radio: "",
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
    q15Radio: "",
    q15Textarea: "",
    q16Radio: "",
    q17Radio: ""
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
      residentialRadio: data.residentialRadio || "",
      commercialRadio: data.commercialRadio || "",
      industrialRadio: data.industrialRadio || "",
      q2Radio: data.q2Radio || "",
      q3Radio: data.q3Radio || "",
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
      q15Radio: data.q15Radio || "",
      q15Textarea: data.q15Textarea || "",
      q16Radio: data.q16Radio || "",
      q17Radio: data.q17Radio || "",
    };

    console.log({ survey });
    axios
      .post("http://localhost:5000/api/survey", data)
      .then((res) => {
        setData({ name: "", email: "", phone: "", propertyaddress: "", residentialRadio: "", commercialRadio: "", industrialRadio: "", q2Radio: "", q3Radio: "", q7Radio: "", q8Radio: "",q9Radio: "", q9Radio2: "" ,q10Radio: "", q10Textarea: "", q11Radio: "", q11Radio2: "", q12Radio: "", q12Radio2: "", q15Radio: "", q15Textarea: "", q16Radio: "", q17Radio: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create");
        console.log(err.message);
      });
  }

  return (
    <section className="survey">
      <div className="wrapper">
        <div className="container">
          <div className="logo">
            <h2>acreage</h2>
            <img src={LOGO} alt="" />
          </div>
          <h1>feedback survey</h1>
          <form onSubmit={handleSubmitS} >
            <div className="title">
              <h6>Basic Information.</h6>
              <p>
                Please provide name, location and contact information below.
              </p>
            </div>

            <div className="input-field">
              <div className="input-area">
                <label>FULL NAME</label>
                <input value={data.name} onChange={handleChangeS} type="text" name="name" />
              </div>

              <div className="input-area">
                <label>EMAIL ADDRESS</label>
                <input value={data.email}
                        onChange={handleChangeS} type="text" name="email" />
              </div>
            </div>

            <div className="input-field">
              <div className="input-area">
                <label>PHONE NUMBER</label>
                <input type="text" name="phone" value={data.phone}
                        onChange={handleChangeS} />
              </div>

              <div className="input-area">
                <label>PROPERTY ADDRESS</label>
                <input type="text" name="propertyaddress" value={data.propertyaddress}
                        onChange={handleChangeS} />
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
                  id="residential"
                  name="residential"
                  value="residential"
                  checked={checkboxChecked}
                  onChange={() => setCheckboxChecked(!checkboxChecked)}
                />
                <label htmlFor="residential"> Residential </label>
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
                  <label htmlFor="residentialRadio"> &lt;1 Year</label>

                  <input
                    type="radio"
                    name="residentialRadio"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="residentialRadio">&lt;5 Years</label>

                  <input
                    type="radio"
                    name="residentialRadio"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="residentialRadio">&lt;10 Years</label>
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
                  <label htmlFor="1year"> &lt;1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt;5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt;10 Years</label>
                </div>
              )}
            </div>

            <div className="property-types">
              <div className="check-box">
                <input
                  type="checkbox"
                  id="commercial"
                  name="commercial"
                  value="commercial"
                  checked={checkboxChecked1}
                  onChange={() => setCheckboxChecked1(!checkboxChecked1)}
                />
                <label htmlFor="commercial"> Commercial </label>
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
                  <label htmlFor="commercialRadio"> &lt;1 Year</label>

                  <input
                    type="radio"
                    name="commercialRadio"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="commercialRadio">&lt;5 Years</label>

                  <input
                    type="radio"
                    name="commercialRadio"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="commercialRadio">&lt;10 Years</label>
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
                  <label htmlFor="1year"> &lt;1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt;5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt;10 Years</label>
                </div>
              )}
            </div>

            <div className="property-types">
              <div className="check-box">
                <input
                  type="checkbox"
                  id="industrial"
                  name="industrial"
                  value="industrial"
                  checked={checkboxChecked2}
                  onChange={() => setCheckboxChecked2(!checkboxChecked2)}
                />
                <label htmlFor="industrial"> Industrial </label>
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
                  <label htmlFor="industrialRadio"> &lt;1 Year</label>

                  <input
                    type="radio"
                    name="industrialRadio"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="industrialRadio">&lt;5 Years</label>

                  <input
                    type="radio"
                    name="industrialRadio"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="industrialRadio">&lt;10 Years</label>
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
                  <label htmlFor="1year"> &lt;1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt;5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt;10 Years</label>
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
              <label for="q3Radio">
                Yes, I have
              </label>

              <input
                type="radio"
                name="q3Radio"
                value="No"
                onChange={handleChangeS}
              />
              <label for="q3Radio">
                No, I haven’t
              </label>
            </div>

            {/* Questions 4 */}

            <h5 className="for-space">
              4. What are your primary reasons for considering property
              renovations? (provide options)
            </h5>

            {/* Questions 5 */}

            <h5 className="for-space">
              5. Why would you want to redevelop the property that you live in?
              (provide options)
            </h5>

            {/* Questions 6 */}

            <h5 className="for-space">
              6. What are your limitations regarding redevelopment of your
              property?
            </h5>

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
                  value="large role"
                  onChange={handleChangeS}
                />
                <label htmlFor="q8Radio">
                  Cost plays a large role
                </label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q8Radio"
                  value="somewhat a role"
                  onChange={handleChangeS}
                />
                <label htmlFor="q8Radio">
                  Cost plays somewhat a role.
                </label>
              </div>
              <div className="options">
                <input
                  type="radio"
                  name="q8Radio"
                  value="no role"
                  onChange={handleChangeS}
                />
                <label htmlFor="q8Radio">
                  Cost plays no role at all.
                </label>
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
                <div className="radio radio-active mobile-radio-space-top">
                  <div className="text">What’s Your Budget</div>
                  <input
                    type="radio"
                    name="q9Radio2"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&lt;1 Year</label>

                  <input
                    type="radio"
                    name="q9Radio2"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&lt;5 Years</label>

                  <input
                    type="radio"
                    name="q9Radio2"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q9Radio2">&lt;10 Years</label>
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
                  <label htmlFor="1year">&lt;1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt;5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt;10 Years</label>
                </div>
              )}
            </div>

            {/* Questions 10 */}

            <h5 className="for-space mobile-space">
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
                  <textarea name="q10Textarea" value={data.q10Textarea} onChange={handleChangeS} cols="30" rows="10"></textarea>
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
                  <div className="text">If yes, what’s Your Budget</div>
                  <input
                    type="radio"
                    name="q11Radio2"
                    value="<1 Year"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q11Radio2">&lt;1 Year</label>

                  <input
                    type="radio"
                    name="q11Radio2"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q11Radio2">&lt;5 Years</label>

                  <input
                    type="radio"
                    name="q11Radio2"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q11Radio2">&lt;10 Years</label>
                </div>
              ) : (
                <div className="radio-disable mobile-radio-space-top">
                  <div className="text">If yes, what’s Your Budget</div>
                  <input
                    type="radio"
                    id="1year"
                    name="years"
                    value="< 1 year"
                    disabled
                  />
                  <label htmlFor="1year">&lt;1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt;5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt;10 Years</label>
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
                  <label htmlFor="q12Radio2">&lt;1 Year</label>

                  <input
                    type="radio"
                    name="q12Radio2"
                    value="<5 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q12Radio2">&lt;5 Years</label>

                  <input
                    type="radio"
                    name="q12Radio2"
                    value="<10 Years"
                    onChange={handleChangeS}
                  />
                  <label htmlFor="q12Radio2">
                    &lt;10 Years
                  </label>
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
                  <label htmlFor="1year">&lt;1 Year</label>

                  <input
                    type="radio"
                    id="5year"
                    name="years"
                    value="< 5 year"
                    disabled
                  />
                  <label htmlFor="5year">&lt;5 Years</label>

                  <input
                    type="radio"
                    id="10year"
                    name="years"
                    value="< 10 year"
                    disabled
                  />
                  <label htmlFor="10year">&lt;10 Years</label>
                </div>
              )}
            </div>

            {/* Questions 13 */}
            <h5 className="for-space mobile-space">
              13. What are your perceived challenges regarding multifamily
              development? (provide options)
            </h5>

            {/* Questions 14 */}
            <h5 className="for-space ">
              14. What are you least concerned about regarding renovating or
              redeveloping your property? (provide options)
            </h5>

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
                  <textarea  name="q15Textarea"
                  value={data.q15Textarea} onChange={handleChangeS} cols="30" rows="10"></textarea>
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
                <label htmlFor="q16Radio">
                  Yes, I have
                </label>
              </div>

              <div className="radio-options-mobile-a">
                <input
                  type="radio"
                  name="q16Radio"
                  value="No"
                  onChange={handleChangeS}
                />
                <label htmlFor="q16Radio">
                  No, I haven’t
                </label>
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
           <button onClick={FormSubMsg}
              type="submit"
              className="submit-btn"
            > SUBMIT SURVEY FORM</button>
            <p className="form-sumbited-tesxt">Your form has been submitted successfully</p>
           </div>
           

          </form>
        </div>
      </div>
    </section>
  );
};

export default SurveyContainer;
