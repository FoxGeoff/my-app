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

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
