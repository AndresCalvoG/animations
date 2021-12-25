import React from "react";
import "./cell.css";

function Cell({ n }) {
  return (
    <div className="cell">
      <h1 className="number">{n}</h1>
    </div>
  );
}

export default Cell;
