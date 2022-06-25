import React from "react";
import "./app.scss";
import Header from "./components/Header";
import Tasks from "./pages/tasks/Tasks";

export default function App() {
  return (
    <div className="container">
      <Header title="TO-D0" />
      <Tasks />
    </div>
  );
}
