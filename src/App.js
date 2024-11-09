import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>NakTech</code> Community
        </p>
        <a
          className="App-link"
          href="https://naktech.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          naktech.pro
        </a>
      </header>
    </div>
  );
}

export default App;
