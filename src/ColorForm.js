import React from "react";

export default function ColorForm({ formData, changeHandler, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <h3>Add a new color:</h3>
      <input
        type="color"
        name="newColor"
        value={formData.colorName}
        onChange={changeHandler}
      />
      <button>Add Color</button>
    </form>
  );
}
