import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './app.css'
import News from './pages/NewsList'
import FaveNews from "./pages/FaveNewsList";
import Header from './components/Header'
import Navigation from "./components/Nav";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path="/myfaves" element={<FaveNews />}></Route>
      </Routes>
    </GlobalProvider>
  )
}

export default App;
