import { Outlet } from "react-router-dom";
import ScrollTop from "./components/common/ScrollTop";
import { Header, Footer } from "./components/common";

const App = () => (
  <div>
    <ScrollTop />
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default App;
