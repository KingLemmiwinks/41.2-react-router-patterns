import React from "react";
import { useParams } from "react-router-dom";
import "./DogDetails.css";

export default function DogDetails({ getDog }) {
  const { name } = useParams();
  const dog = getDog(name);

  return (
    <div className="DogDetails">
      <img src={dog[0].src} alt={dog.name}></img>
      <h3>{dog[0].name}</h3>
      <h3>Age: {dog[0].age} years old</h3>
      <ul>
        {dog[0].facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
