import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Landing from "./views/landing";

function App() {
  return (
    <Router>
      <Header></Header>
      <Landing></Landing>
    </Router>
  );
}

export default App;
