import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonInfo = createAsyncThunk(
  "pokeInfo/fetchPokemonInfo",
  async (pokemonFetchLink) => {
    const response = await fetch(pokemonFetchLink);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const pokemonInfoSlice = createSlice({
  name: "pokemonInfo",
  initialState: {
    pokemonInfo: {},
    status: "idle",
    fetchUrl: "",
  },
  reducers: {
    setFetchUrl(state, action) {
      state.fetchUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonInfo.fulfilled, (state, action) => {
        state.pokemonInfo = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPokemonInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const pokemonInfoActions = pokemonInfoSlice.actions;
export const pokemonInfoReducers = pokemonInfoSlice.reducer;
