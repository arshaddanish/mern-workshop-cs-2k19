import React from "react";
import "./app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddTask from "./pages/add-task/AddTask";
import Tasks from "./pages/tasks/Tasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header title="TO-D0" />

        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
