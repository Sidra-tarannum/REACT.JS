// console.log("hello world");

// const h1elem = document.createElement("h1")
// h1elem.innerText = "hello from javascript"
// h1elem.setAttribute("id","h1")
// document.querySelector("body").insertAdjacentElement("beforeend", h1elem)

// second method
// const parent = React.createElement("div",{},[
//     React.createElement("h1",{ id : h1-React}, "hello from react.js"),
//     React.createElement("h2",{id : h2-react},"Sidra"),
// React.createElement("div", {id: "child-div", class: "child"}, [
//     React.createElement("h1", {}, "I am h1 of child-div"),
//     React.createElement("h2", {}, "I am h2 of child-div")
//   ])
// ]);

const parent = React.createElement("div", {}, [
  React.createElement("h1", {}, "hello from react.js"),
  React.createElement("h2", {}, "Welcome to world"),
  React.createElement("div",{},[
    React.createElement("h1",{}, "hi From child div"),
    React.createElement("h2",{},"hi from h2"),
    React.createElement("h3", {}, "h3 from child div")
  ])
]);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);




