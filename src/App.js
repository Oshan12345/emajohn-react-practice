import React from "react";

import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop/Shop.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shop />
    </div>
  );
}

export default App;
