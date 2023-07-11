import React, { useState, useEffect, useCallback } from 'react';
import "./admin.scss";
import { MailList } from '../../components/admin/mail-list/MailList';
import SurveyData from '../../components/admin/survey-data/SurveyData';

const Admin = () => {
  const ADMIN_CODE = "darkj34q";
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEnterAdmin = useCallback(() => {
    if (password === ADMIN_CODE) {
      setIsAdmin(true);
    }
  }, [password, ADMIN_CODE]);

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

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleEnterAdmin();
    }
  }, [handleEnterAdmin]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <section className="admin">
      <div className="wrapper">
        <div className="container">
          {isAdmin ? null : (
            <div className="admin-section">
              <div className="box">
                <h5>password</h5>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="enter-admin" onClick={handleEnterAdmin}>
                  Enter
                </button>
              </div>
            </div>
          )}
          <div className="header">
            <button onClick={handleMailling} className="m-btn">
              Mailling list
            </button>
            <button onClick={handleServey} className="s-btn">
              Survey data
            </button>
          </div>
          <div className="main-sections">
            <div className="mailling-sec">
              <MailList />
            </div>
            <div className="servey-sec">
              <SurveyData />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
