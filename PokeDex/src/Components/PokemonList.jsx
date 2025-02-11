import React, { useEffect } from "react";
import { fetchPokemonList } from "../Store/PokemonListSlice";
import { useDispatch, useSelector } from "react-redux";
import { pokemonInfoActions } from "../Store/PokemonInfoSlice";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { status, pokemonList } = useSelector((state) => state.pokemonList);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemonList());
    }
  }, [status, dispatch]);

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => {
          return (
            <li key={pokemon.name}>
              <h1>{pokemon.name}</h1>
              {/* <h2>{pokemon.imageUrl}</h2> */}
              <Link
                to="/pokemoninfo"
                onClick={() =>
                  dispatch(pokemonInfoActions.setFetchUrl(pokemon.url))
                }
              >
                pokemon info
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
