import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import { Header, Footer } from "./components";
import Hourly from "./pages/hourly/Hourly";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hourly" element={<Hourly />} />
    </Routes>
    <Footer />
  </>
);

export default App;
