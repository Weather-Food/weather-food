import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Footer } from "./components";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </>
);

export default App;
