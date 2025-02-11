import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonInfo } from "../../Store/PokemonInfoSlice";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const { status, pokemonInfo, fetchUrl } = useSelector(
    (state) => state.pokemonInfo
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemonInfo(fetchUrl));
    }
  }, [status, dispatch]);

  return <div>PokemonInfo</div>;
};

export default PokemonInfo;
