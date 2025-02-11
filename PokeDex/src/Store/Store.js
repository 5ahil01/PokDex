import { configureStore } from "@reduxjs/toolkit";
import { pokemonInfoReducers } from "./PokemonInfoSlice";
import { pokemonListReducers } from "./PokemonListSlice";

export const store = configureStore({
  reducer: {
    pokemonInfo: pokemonInfoReducers,
    pokemonList: pokemonListReducers,
  },
});
