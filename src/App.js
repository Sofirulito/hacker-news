import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './app.css'
import Home from "./pages/home";
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
