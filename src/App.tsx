import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Footer } from "./components";
import ScrollTop from "./components/ScrollTop";

const App = () => (
  <>
    <ScrollTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </>
);

export default App;
