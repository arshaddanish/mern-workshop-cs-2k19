import React from "react";

export default function Task({ task, deleteTask, toggleReminder }) {
  return (
    <div
      onDoubleClick={() =>
        toggleReminder(task._id, { reminder: !task.reminder })
      }
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <div>
        <p>{task.text}</p>
        <p>{task.day}</p>
      </div>
      <i className="fa-solid fa-xmark" onClick={() => deleteTask(task._id)}></i>
    </div>
  );
}
