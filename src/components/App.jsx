import React from "react";
// import ReactDom from 'react-dom';
import Login from "../Login";

let isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <login />;
  }
}

function App() {
  return;
  <div className="container">{renderConditionally()}</div>;
}

export default App;
