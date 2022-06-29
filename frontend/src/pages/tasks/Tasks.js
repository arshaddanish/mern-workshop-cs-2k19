import React, { useEffect, useState } from "react";
import apis from "../../apis";
import Task from "./Task";

// let tasksInitial = [
//   {
//     id: 1,
//     text: "React",
//     day: "21-05-54 5pm",
//     reminder: false,
//   },
//   {
//     id: 2,
//     text: "Express",
//     day: "11-15-54 6pm",
//     reminder: false,
//   },
//   {
//     id: 3,
//     text: "MongoDB",
//     day: "01-00-54 5am",
//     reminder: false,
//   },
// ];

export default function Tasks() {
  useEffect(() => {
    fetchTasks();
  }, []);

  const [tasks, setTasks] = useState([]);

  let fetchTasks = async () => {
    let result = await apis.get("/tasks");
    setTasks(result.data);
    // console.log(result);
  };

  let deleteTask = async (id) => {
    await apis.delete(`/tasks/${id}`);
    let filteredTasks = tasks.filter((item) => item._id !== id);
    setTasks(filteredTasks);
  };

  // let toggleReminder = async (id, updateData) => {
  //   await apis.put(`/tasks/${id}`, updateData);
  //   fetchTasks();
  // };

  let displayTasks = () => {
    if (tasks.length > 0) {
      return tasks.map((item) => {
        return <Task key={item._id} task={item} deleteTask={deleteTask} />;
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
