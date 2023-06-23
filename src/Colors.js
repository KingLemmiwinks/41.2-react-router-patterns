import React from "react";
import "./Colors.css";

export default function Colors({ colors }) {
  return (
    <div className="Colors">
      <div className="banner">
        <h4>Welcome to the Color Factory</h4>
        <a href="/colors/new">
          <h3>Add a color</h3>
        </a>
      </div>
      <h5>Please select a color:</h5>
      <ul>
        {colors.map((color, idx) => (
          <a href={`/colors/${color}`}>
            <li key={idx}>{color}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
