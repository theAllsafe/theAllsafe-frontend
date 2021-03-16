import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./router";
function App() {
  return (
    <div className="App">
      <Router>
        <BaseRoute />
      </Router>
    </div>
  );
}

export default App;
