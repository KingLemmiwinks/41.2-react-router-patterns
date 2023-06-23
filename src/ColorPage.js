import React from "react";
import { Redirect, useParams } from "react-router-dom";

export default function ColorPage({ colors }) {
  const { color } = useParams();

  if (colors.includes(color)) {
    return (
      <div className="ColorPage" style={{ backgroundColor: color }}>
        <h1>THIS IS {color.toUpperCase()}</h1>
        <h1>ISN'T IT BEAUTIFUL?</h1>
        <a href="/colors">
          <h1>GO BACK</h1>
        </a>
      </div>
    );
  }
  return <Redirect to="/colors" />;
}
