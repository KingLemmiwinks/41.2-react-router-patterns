import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Colors from "./Colors";
import ColorPage from "./ColorPage";
import ColorForm from "./ColorForm";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const [formData, setFormData] = useState({ newColor: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData.newColor);
    setColors((colors) => [...colors, ...formData.newColor]);
    window.location.replace("/colors");
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors/new">
          <ColorForm
            formData={formData}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
          />
        </Route>
        <Route exact path="/colors/:color">
          <ColorPage colors={colors} />
        </Route>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Redirect to="/colors"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}
