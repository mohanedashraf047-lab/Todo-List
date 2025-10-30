import React from "react";
import titleImage from "../assets/todo-list3.png";

export default function Title() {
  return (
    <div className="title">
      <h1>Todo List</h1>
      <img
        src={titleImage}
        alt="Notebook"
        srcSet=""
      />
    </div>
  );
}
