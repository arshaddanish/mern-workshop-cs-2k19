import React, { useState } from "react";
import Task from "./Task";

let tasksInitial = [
  {
    id: 1,
    text: "React",
    day: "21-05-54 5pm",
    reminder: false,
  },
  {
    id: 2,
    text: "Express",
    day: "11-15-54 6pm",
    reminder: false,
  },
  {
    id: 3,
    text: "MongoDB",
    day: "01-00-54 5am",
    reminder: false,
  },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(tasksInitial);

  let displayTasks = () => {
    if (tasks.length > 0) {
      return tasks.map((item) => {
        return <Task task={item} />;
      });
    }
    return <p>No Tasks To Show Yet</p>;
  };

  return (
    <div className="tasks mt-5">
      {/* {tasks.length > 0 ? (
        tasks.map((item) => {
          return <Task task={item} />;
        })
      ) : (
        <p>No Tasks To Show Yet</p>
      )} */}
      {displayTasks()}
    </div>
  );
}
