import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

const Home: React.FC = () => <h2>Home Page</h2>;
const About: React.FC = () => <h2>About Page</h2>;

const App: React.FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;
