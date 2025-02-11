import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonList = createAsyncThunk(
  "pokemonList/fetchPokemonList",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();

    return data.results;
  }
);

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState: {
    pokemonList: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const pokemonListActions = pokemonListSlice.actions;
export const pokemonListReducers = pokemonListSlice.reducer;
