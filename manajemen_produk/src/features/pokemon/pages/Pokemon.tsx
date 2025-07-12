import axios from "axios";
import React, { useEffect, useState } from "react";
import type { Pokemon } from "../types";

const PokemonList: React.FC = () => {
  const [data, setData] = useState<Pokemon>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/ability")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg">
      {loading && (
        <p className="text-center text-gray-500">Loading pokemon...</p>
      )}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <h3 className="text-xl font-bold mb-6 text-center">Pokemon</h3>
      <h6 className="border"> data count: {data?.count}</h6>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
        {data?.results.map((pokemon) => (
            <h6 className="border">{pokemon.name}, url {pokemon.url}</h6>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
