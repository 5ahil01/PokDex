import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PokemonInfo from "./Pages/PokemonInfo/PokemonInfo";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/pokemoninfo",
      element: <PokemonInfo />,
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
