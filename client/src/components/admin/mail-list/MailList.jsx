import React from "react";
import "./maillist.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";


function TodoCard({ data, handleDelete  }) {
  const { _id, name, email } = data;

  return (
    <div className="maillin-list">
      <div className="m-data" key={_id}>
        <span>{name}</span>
        <span>{email}</span>
        <button className="delete-btn" name={_id} onClick={handleDelete} >Delete</button>
      </div>
    </div>
  );
}

export function MailList() {
  const [todo, setTodo] = useState([]);

  const [isOpen, setIsOpen] = useState(true);
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
      .get("http://localhost:5000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(e) {
    axios.delete(`http://localhost:5000/api/todo/${e.target.name}`);

    setTodo((data) => {
        return data.filter((todo) => todo._id !== e.target.name);
    });
}

  return (
    <div className="mail-list-data-container">
      <button onClick={handleToggle} className="export-btn">
        {" "}
        Export{" "}
      </button>
      <div className="export-container">
        <IoMdCloseCircle onClick={handleClose} className="close-icon" />
        {todo.map((data) => (
          <p>{data.email}</p>
        ))}
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
