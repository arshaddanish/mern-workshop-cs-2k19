import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-5">
      <p className="text-center">
        &copy; Copyright <Link to="/about">CS 2K19</Link>
      </p>
    </div>
  );
}
