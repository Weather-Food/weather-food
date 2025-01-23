import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Footer } from "./components/common";
import Hourly from "./pages/hourly/Hourly";
import ScrollTop from "./components/common/ScrollTop";
import ShowMoreFood from "./pages/ShowMoreFood"

// createBrowserRouter를 이용한 라우팅으로 수정 필요!

const App = () => (
  <div className="app-container">
    <ScrollTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hourly" element={<Hourly />} />
      <Route path="/more-food" element={<ShowMoreFood />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
