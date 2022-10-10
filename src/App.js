import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./screen/Main";
import Home from "./component/Home";
import Meals from "./component/Meals";
import CategoryDetails from "./component/CategoryDetails";
import { NavItem } from "react-bootstrap";
import Meal from "./component/Meal";
import Food from "./component/Food";
import FoodMeals from './component/FoodMeals'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
        },
        {
          path: "home",
          element: <Home></Home>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
        },

        {
          path: "/category/:categoryName",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
            );
          },
          element: <CategoryDetails></CategoryDetails>,
        },
        {
          path: "/category/:name/:id",
          element: <Food></Food>,
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
            );
          },
        },

        {
          path: "meals",
          element: <Meals></Meals>,
          children: [
            {
              path: "/meals/:mealsText",
              element: <Meal></Meal>,
              loader: async ({ params }) => {
                return fetch(
                  `https://www.themealdb.com/api/json/v1/1/search.php?f=${params.mealsText}`
                );
              },
            },
            {
              path: "/link/:name/:nameId",
              element: <FoodMeals></FoodMeals>,
              loader: ({ params }) =>
                fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.nameId}`
                ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
