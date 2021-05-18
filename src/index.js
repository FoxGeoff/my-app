import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* VSCode example */
var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
ReactDOM.render(element, document.getElementById("root"));

/* FCC - Create a Simple JSX Element */
const JSX = <h1>Hello JSX!</h1>;
ReactDOM.render(JSX, document.getElementById("root"));

/* FCC - Create a Complex JSX Element */
const JSX2 = (
  <div>
    {/* this is a comment */}
    <h1>Paragraph One</h1>
    <p>Paragraph Two</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>
);
ReactDOM.render(JSX2, document.getElementById("root"));

/* FCC - Define an HTML Class in JSX */
const JSX3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
ReactDOM.render(JSX3, document.getElementById("root"));

/* FCC - Learn About Self-Closing JSX Tags */

const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
ReactDOM.render(JSX4, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
