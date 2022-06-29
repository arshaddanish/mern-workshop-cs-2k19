import React from "react";
import { Link } from "react-router-dom";

export default function AddTask() {
  return (
    <div className="mt-5">
      <form action="">
        <div class="mb-4">
          <label class="form-label">Text</label>
          <input type="text" class="form-control" placeholder="Text" />
        </div>
        <div class="mb-4">
          <label class="form-label">Day</label>
          <input type="text" class="form-control" placeholder="Day" />
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">Set Reminder</label>
        </div>
        <div className="text-center mb-4">
          <button className="btn btn-success add-task-btn">Add Task</button>
        </div>
      </form>

      <Link to="/">Go Back</Link>
    </div>
  );
}
