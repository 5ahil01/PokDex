import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonList = createAsyncThunk(
  "pokemonList/fetchPokemonList",
  async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const pokemonList = data.results;
      return pokemonList;

      // const fetchImageURl = async (pokemonUrl) => {
      //   const pokeData = await fetch(pokemonUrl).then((res) => {
      //     if (!res.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //     return res.json();
      //   });
      //   return pokeData.sprites.other["official-artwork"].front_default;
      // };

      // const returnList = await Promise.all(
      //   pokemonList.map(async (pokemon) => {
      //     const imageUrl = await fetchImageURl(pokemon.url);
      //     return {
      //       ...pokemon,
      //       imageUrl,
      //     };
      //   })
      // );

      // return returnList;
    } catch (error) {
      console.error("Error fetching pokemon list:", error);
      throw error;
    }
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
