import { use, useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

  async function fetchPokemon() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        //Warning Personal Notes
        //--> Here map collect --> Promise({url}) Array which is still fetching but map function collect all and don't wait for fetching data , map simply return promise array and promise know which url i have and then we need to create seprate fetch with promise.all and when all promise done then we give all data.
        //-->in console you see all promise is full filled but map funtion collect before fullfilled and set as Promise and we not see anything on console { after fullfilled promise result see as object}

        console.log(curPokemon.url);
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      console.log(detailedPokemonData);
      const detailedResponce = await Promise.all(detailedPokemonData);
      console.log(detailedResponce);
      setPokemon(detailedResponce);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  //Fetch Api
  useEffect(() => {
    fetchPokemon();
  }, []);

  //Search Functionality
  const searchData = pokemon.filter((curPokemon) => {
    //First Time Render search is empty string
    // and here all value true bcz all value include empty string("") so it's give true for all pokemon and we see all pokemon card see on render

    return curPokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header className="logo-box">
          <h1>Lets Catch Pokemon</h1>
          <img src="/Images/mainlogo.png" alt="" className="logo" />
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="card-container">
          <ul className="cards">
            {/* {pokemon.map((curPokemon)=>{*/}
            {searchData.map((curPokemon) => {
              return (
                <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
