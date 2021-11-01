import React from "react";
import Login from "./Login";

let isLoggedIn = false;

function App() {
  //USING TERNARY OPERATOR TO REFACTOR CODE
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
