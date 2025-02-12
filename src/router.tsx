import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Hourly from "./pages/Hourly";
import ShowMoreFood from "./pages/ShowMoreFood";
import RecipeDetail from "./pages/RecipeDetail";
import FoodAdmin from "./pages/FoodAdmin";

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
      {
        path: "recipeDetail",
        element: <RecipeDetail />,
      },
      {
        path: "foodAdmin",
        element: <FoodAdmin />,
      },
    ],
  },
]);
