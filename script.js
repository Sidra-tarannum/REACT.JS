import React from "react";
import ReactDOM from "react-dom/Client";

const parent = React.createElement("div", {}, [
  React.createElement("h1", { id: "h1-react"}, "hello from react.js"),
  React.createElement("h2", {id : "h2-react"}, "Welcome to world"),
  React.createElement("div", {id: "child-div", className:"child"}, [
    React.createElement("h1", {}, "hi From child div"),
    React.createElement("h2", {}, "hi from h2"),
    React.createElement(`h3`, {}, "h3 from child div"),
  ]),
]);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
