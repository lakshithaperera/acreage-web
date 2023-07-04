import React from "react";
import "./surveydata.scss";
import { useState, useEffect } from "react";
import axios from "axios";


function SurveyCard({ data, handleDelete  }) {
  const { _id, name, email, phone,  propertyaddress, residentialRadio, commercialRadio, industrialRadio, q2Radio, q3Radio, q7Radio, q8Radio, q9Radio, q9Radio2, q10Radio, q10Textarea, q11Radio, q11Radio2, q12Radio, q12Radio2, q15Radio, q15Textarea, q16Radio, q17Radio } = data;

  return (
    <div className="survey-list">
      <div className="s-data" key={_id}>
       <div className="col">
           <div className="title">Name</div>
           <div className="answer"><p>{name}</p></div>
       </div>
       <div className="col">
           <div className="title">Email</div>
           <div className="answer"><p>{email}</p></div>
       </div>
       <div className="col">
           <div className="title">Phone</div>
           <div className="answer"><p>{phone}</p></div>
       </div>
       <div className="col">
           <div className="title">Property address</div>
           <div className="answer">{propertyaddress}</div>
       </div>
       <div className="col">
           <div className="title">1.</div>
           <div className="answer three-ans">
            <p>Residential = {residentialRadio}</p>
            <p>Commercial = {commercialRadio}</p>
            <p>Industrial = {industrialRadio}</p>
           </div>
       </div>
       <div className="col">
           <div className="title">2.</div>
           <div className="answer">{q2Radio}</div>
       </div>
       <div className="col">
           <div className="title">3.</div>
           <div className="answer">{q3Radio}</div>
       </div>
       <div className="col">
           <div className="title">4.</div>
           <div className="answer"></div>
       </div>
       <div className="col">
           <div className="title">5.</div>
           <div className="answer"></div>
       </div>
       <div className="col">
           <div className="title">6.</div>
           <div className="answer"></div>
       </div>
       <div className="col">
           <div className="title">7.</div>
           <div className="answer">{q7Radio}</div>
       </div>
       <div className="col">
           <div className="title">8.</div>
           <div className="answer">{q8Radio}</div>
       </div>
       <div className="col">
           <div className="title">9.</div>
           <div className="answer">{q9Radio} {q9Radio2}</div>
       </div>
       <div className="col">
           <div className="title">10.</div>
           <div className="answer"><p>{q10Radio}{q10Textarea}</p></div>
       </div>
       <div className="col">
           <div className="title">11.</div>
           <div className="answer">{q11Radio}{q11Radio2}</div>
       </div>
       <div className="col">
           <div className="title">12.</div>
           <div className="answer">{q12Radio}{q12Radio2}</div>
       </div>
       <div className="col">
           <div className="title">13.</div>
           <div className="answer"></div>
       </div>
       <div className="col">
           <div className="title">14.</div>
           <div className="answer"></div>
       </div>
       <div className="col">
           <div className="title">15.</div>
           <div className="answer">{q15Radio}{q15Textarea}</div>
       </div>
       <div className="col">
           <div className="title">16.</div>
           <div className="answer">{q16Radio}</div>
       </div>
       <div className="col">
           <div className="title">17.</div>
           <div className="answer">{q17Radio}</div>
       </div>
       <div className="col">
           <div className="title">18.</div>
           <div className="answer"></div>
       </div>
       <div className="col">
       <button className="delete-btn" name={_id} onClick={handleDelete} >Delete</button>
       </div>
      </div>
    </div>
  );
}

const SurveyData = () => {
    const [survey, setSurvey] = useState([]);

  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/survey")
        .then((res) => {
          console.log(res.data);
          setSurvey(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    function handleDelete(e) {
      axios.delete(`http://localhost:5000/api/survey/${e.target.name}`);
  
      setSurvey((data) => {
          return data.filter((survey) => survey._id !== e.target.name);
      });
  }
  
    return (
      <div className="survey-list-data-container">
        {survey.map((data) => (
          <SurveyCard data={data} handleDelete={handleDelete} />
        ))}
      </div>
    );
}

export default SurveyData