import React from "react";
import ReactDOM from "react-dom/client";

// The below code core react not JSX
const heading = React.createElement("h1", { id: "heading" }, "React 🚀");
console.log(heading);

// jsx
const JsxHeading = () => <h1 className="head">This is a JSX heading</h1>;
console.log(JsxHeading);
/* The above code is JSX and when it is executed it becomes a React
Element */

// Your code should be readable by everyone
const num = 101;

const HeadingComponent = () => {
  return (
    <div id="container">
      {(num & 1) == 0 ? <h1>{num} is Even</h1> : <h1>{num} is Odd</h1>}
      <h1 id="heading">Hi, from functional component 🚀</h1>
      <JsxHeading />
      {JsxHeading()}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <HeadingComponent />
);
