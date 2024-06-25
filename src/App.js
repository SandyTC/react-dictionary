import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className=" container main-content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
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
