import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  // console.log(props);

  return (
    <div className="header">
      <h1>{title}</h1>
      <Link to="/add-task">
        <Button color="white" background="green" />
      </Link>
    </div>
  );
}
