import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddTask() {
  let [text, setText] = useState("");
  let [day, setDay] = useState("");
  let [reminder, setReminder] = useState(false);

  let onFormSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      text: text,
      day: day,
      reminder: reminder,
    };
    console.log(newTask);
  };

  return (
    <div className="mt-5">
      <form onSubmit={onFormSubmit}>
        <div className="mb-4">
          <label className="form-label">Text</label>
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Day</label>
          <input
            type="text"
            className="form-control"
            placeholder="Day"
            onChange={(e) => setDay(e.target.value)}
            value={day}
          />
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() => setReminder(!reminder)}
            value={reminder}
          />
          <label className="form-check-label">Set Reminder</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success add-task-btn">
            Add Task
          </button>
        </div>
      </form>

      <Link to="/">
        <p className="mt-5 text-center">Back To Home</p>
      </Link>
    </div>
  );
}
