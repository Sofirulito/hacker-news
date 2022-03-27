import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './app.css'
import News from './pages/news'
import FaveNews from "./pages/faveNews";
import Header from './components/Header'
import Navigation from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path="/myfaves" element={<FaveNews />}></Route>
      </Routes>
    </div>
  );
}

export default App;
