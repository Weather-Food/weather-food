import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Footer } from "./components";
import Hourly from "./pages/hourly/Hourly";
import ScrollTop from "./components/ScrollTop";
import ShowMoreFood from "./pages/ShowMoreFood";

const App = () => (
  <>
    <ScrollTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hourly" element={<Hourly />} />
      <Route path="/more-food" element={<ShowMoreFood />} />
    </Routes>
    <Footer />
  </>
);

export default App;
