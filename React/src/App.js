import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
// eslint-disable-next-line no-unused-vars
// import Pet from "./Pet"

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "Coco", animal: "Dog", breed: "Pug" }),
//     React.createElement(Pet, {
//       name: "Rufus",
//       animal: "Cat",
//       breed: "Russian Blue",
//     }),
//     React.createElement(Pet, {
//       name: "Sparks",
//       animal: "Monkey",
//       breed: "Chimp",
//     }),
//   ]);
// };

// eslint-disable-next-line no-unused-vars
const App = () => {
  return (
    <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
   </div>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
