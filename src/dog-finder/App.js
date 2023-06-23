import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import duke from "./duke.jpg";
import whiskey from "./whiskey.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
import "./App.css";

function App() {
  const getDog = (dogName) => {
    return App.defaultProps.dogs.filter((dog) => {
      if (dog.name.toLowerCase() === dogName) {
        return dog;
      }
      return false;
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dogs/:name">
          <DogDetails getDog={getDog} />
        </Route>
        <Route exact path="/dogs">
          <DogList
            dogs={App.defaultProps.dogs.map((dog) => ({
              name: dog.name,
              src: dog.src,
            }))}
          />
        </Route>
        <Redirect to="/dogs"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
