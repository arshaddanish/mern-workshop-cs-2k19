import React from "react";

export default function Task({task}) {
  return (
    <div className="task">
      <p>{task.text}</p>
      <p>{task.day}</p>
    </div>
  );
}
