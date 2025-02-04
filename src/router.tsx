import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Hourly from "./pages/hourly/Hourly";
import ShowMoreFood from "./pages/ShowMoreFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "hourly",
        element: <Hourly />,
      },
      {
        path: "more-food",
        element: <ShowMoreFood />,
      },
    ],
  },
]);
