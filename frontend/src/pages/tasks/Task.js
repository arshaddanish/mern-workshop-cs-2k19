import React from "react";

export default function Task({ task }) {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <div>
        <p>{task.text}</p>
        <p>{task.day}</p>
      </div>
      <i className="fa-solid fa-xmark"></i>
    </div>
  );
}
