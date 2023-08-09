import React from "react";
import ReactDOM from "react-dom/client";

// The below code core react not JSX
const heading = React.createElement("h1", { id: "heading" }, "React 🚀");
console.log(heading);

// jsx
const jsxHeading = <h1 className="head">This is a JSX heading</h1>;
console.log(jsxHeading);
/* The above code is JSX and when it is executed it becomes a React
Element */

// Your code should be readable by everyone

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
