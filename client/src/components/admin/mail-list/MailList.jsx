import React from "react";
import "./maillist.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

function TodoCard({ data, handleDelete }) {
  const { _id, name, email } = data;

  return (
    <div className="maillin-list">
      <div className="m-data" key={_id}>
        <span>{name}</span>
        <span>{email}</span>
        <button className="delete-btn" name={_id} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export function MailList() {
  const [todo, setTodo] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [copiedText, setCopiedText] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.querySelector(".export-container").style.display = "flex";
  };

  const handleClose = () => {
    document.querySelector(".export-container").style.display = "none";
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("http://52.15.118.34:5000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(e) {
    axios.delete(`http://52.15.118.34:5000/api/todo/${e.target.name}`);

    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  function handleCopy() {
    const textToCopy = todo.map((data) => data.email).join(", ");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopiedText(textToCopy);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  return (
    <div className="mail-list-data-container">
      <button onClick={handleToggle} className="export-btn">
        Export
      </button>
      <div className="export-container">
        <IoMdCloseCircle onClick={handleClose} className="close-icon" />
        <button className="copy-btn" onClick={handleCopy}>
          copy
        </button>
        {copiedText && <p className="copy-success">Copied</p>}
        <div className="emails">
          {todo.map((data, index) => (
            <p key={index} className="exported-bay">
              {data.email}
            </p>
          ))}
        </div>
      </div>
      <div className="titiles">
        <span>Name</span>
        <span>Email</span>
      </div>
      {todo.map((data) => (
        <TodoCard data={data} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
