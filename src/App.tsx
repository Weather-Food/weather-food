import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Footer } from "./components";
import Hourly from "./pages/hourly/Hourly";
import ScrollTop from "./components/ScrollTop";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";

const App = () => (
  <>
    <ScrollTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hourly" element={<Hourly />} />
      <Route path="/recipeDetail" element={<RecipeDetail />} />
    </Routes>
    <Footer />
  </>
);

export default App;
