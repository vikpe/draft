import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SampleBoard from "./SampleBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={32} /> GetQuad Draft
      </header>

      <section>
        <SampleBoard />
      </section>
    </div>
  );
}

export default App;
