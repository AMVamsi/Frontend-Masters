import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Coco", animal: "Dog", breed: "Pug" }),
    React.createElement(Pet, {
      name: "Rufus",
      animal: "Cat",
      breed: "Russian Blue",
    }),
    React.createElement(Pet, {
      name: "Sparks",
      animal: "Monkey",
      breed: "Chimp",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
