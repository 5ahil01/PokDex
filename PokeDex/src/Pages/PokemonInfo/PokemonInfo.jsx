import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonInfo } from "../../Store/PokemonInfoSlice";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const { status, pokemonInfo, fetchUrl } = useSelector(
    (state) => state.pokemonInfo
  );

  // Fetch Pokémon info when the component mounts or when the URL changes
  useEffect(() => {
    if (fetchUrl) {
      dispatch(fetchPokemonInfo(fetchUrl));
    }
  }, [fetchUrl, dispatch]);

  // Handle loading state
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (status === "failed") {
    return <div>Error fetching Pokémon info.</div>;
  }

  // Handle case where pokemonInfo is not yet available or incomplete
  if (!pokemonInfo || !pokemonInfo.species) {
    return <div>No Pokémon data available.</div>;
  }

  return (
    <div>
      <h2>{pokemonInfo.species.name}</h2>
    </div>
  );
};

export default PokemonInfo;
