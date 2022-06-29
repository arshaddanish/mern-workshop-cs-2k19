import React from "react";

export default function Button({ color, background }) {
  return <button className="custom-btn" style={{ color: color, background: background }}>Add</button>;
}

Button.defaultProps = {
  color: "white",
  background: "black",
};
