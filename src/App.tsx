import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Footer } from "./components";
import Hourly from "./pages/hourly/Hourly";
import ScrollTop from "./components/ScrollTop";

const App = () => (
  <>
    <ScrollTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hourly" element={<Hourly />} />
    </Routes>
    <Footer />
  </>
);

export default App;
