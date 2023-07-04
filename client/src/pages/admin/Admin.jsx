import React, {useState} from 'react'
import "./admin.scss"
import { MailList } from '../../components/admin/mail-list/MailList'
import SurveyData from '../../components/admin/survey-data/SurveyData'






const Admin = () => {
  const ADMIN_CODE = "web32a"
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEnterAdmin = () => {
    if (password === ADMIN_CODE) {
      setIsAdmin(true);
    }
  };

  const handleServey = () => {
    setIsOpen(!isOpen);
    document.querySelector(".servey-sec").style.display = "flex";
    document.querySelector(".mailling-sec").style.display = "none";
  };

  const handleMailling = () => {
    document.querySelector(".mailling-sec").style.display = "flex";
    document.querySelector(".servey-sec").style.display = "none";
    setIsOpen(!isOpen);
  }
  return (
    <section className="admin">
        <div className="wrapper">
            <div className="container">
            {isAdmin ? null : (
            <div className="admin-section">
              <div className="box">
                <h5>password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="enter-admin" onClick={handleEnterAdmin}>
                  Enter
                </button>
              </div>
            </div>
          )}
               <div className="header">
               <button onClick={handleServey} className='s-btn'>Survey data</button>
                   <button onClick={handleMailling} className='m-btn'>Mailling list</button>
               </div>
                <div className="main-sections">
                   
                  <div className="mailling-sec">
                  <MailList />
                  </div>

                  <div className='servey-sec'>
                  <SurveyData  />
                  </div>
                      
             
                </div>
            </div>
        </div>
    </section>
  )
}

export default Admin