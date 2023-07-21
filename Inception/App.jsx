// const root = ReactDOM.createRoot(document.getElementById("root"));

/*
    React dosent create any HTML elements when you use CreateElement it creates an object 
    only when you use reder() it creates an HTML element
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "header" },
      "Hello from <h1> inside child div which is inside parent div"
    ),
    React.createElement(
      "h2",
      { id: "header-2" },
      "Hello from <h2> which is the sibling of <h1>"
    ),
  ]),
  React.createElement(
    "div",
    { id: "sibling-child" },
    React.createElement("h3", {}, "Hello from sibling div of child div")
  ),
]);

/*
const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello, from React"
);
*/

console.log(parent);

ReactDOM.createRoot(document.getElementById("root")).render(parent);
