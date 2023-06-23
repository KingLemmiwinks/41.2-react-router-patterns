import React from "react";
import "./DogList.css";

export default class DogList extends React.Component {
  render() {
    return (
      <div className="DogList">
        <h3>Select an adorbs dog from below to find out more info!</h3>
        <ul>
          {this.props.dogs.map((dog, idx) => (
            <>
              <a href={`/dogs/${dog.name.toLowerCase()}`} key={idx}>
                <li>{dog.name}</li>
                <img src={dog.src} alt={dog.name}></img>
              </a>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
