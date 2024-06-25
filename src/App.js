import React from "react";
import "./App.css";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="main-content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/SandyTC">Sandy Trebilcock</a>, is
          open-sourced on{" "}
          <a href="https://github.com/SandyTC/react-dictionary">Github</a>, and
          is hosted on{" "}
          <a href="https://sandys-react-dictionary.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
