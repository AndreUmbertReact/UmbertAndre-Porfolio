import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Landing from "./views/landing";

function App() {
  return (
    <Router>
      <Landing></Landing>
      <Home></Home>
    </Router>
  );
}

export default App;
