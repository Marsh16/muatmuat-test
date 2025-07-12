import axios from "axios";
import React, { useEffect, useState } from "react";
import type { BattleArmor } from "../types";

const PokemonDetail: React.FC = () => {
  const [data, setData] = useState<BattleArmor>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/ability/battle-armor")
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
      <div className="grid grid-cols-4 gap-4">
        {data?.effect_entries.map((pokemon) => (
            <h6 className="border">{pokemon.effect}</h6>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;
