import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apis from "../../apis";

export default function AddTask() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  let onFormSubmit = async (e) => {
    e.preventDefault();
    await apis.post("/tasks", { text: text, day: day, reminder: reminder });
    navigate("/");
  };

  return (
    <div className="mt-5" onSubmit={onFormSubmit}>
      <form action="">
        <div class="mb-4">
          <label class="form-label">Text</label>
          <input
            type="text"
            class="form-control"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <label class="form-label">Day</label>
          <input
            type="text"
            class="form-control"
            placeholder="Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div class="form-check mb-4">
          <input
            class="form-check-input"
            type="checkbox"
            value={reminder}
            onChange={() => setReminder(!reminder)}
          />
          <label class="form-check-label">Set Reminder</label>
        </div>
        <div className="text-center mb-4">
          <button type="submit" className="btn btn-success add-task-btn">
            Add Task
          </button>
        </div>
      </form>

      <Link to="/">Go Back</Link>
    </div>
  );
}
