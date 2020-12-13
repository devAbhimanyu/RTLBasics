import { useState } from "react";
import axios from "axios";
import CustomInput from "components/customInput/CustomInput";

const pokemonApiUrl = "https://pokeapi.co/api/v2";

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
  const [error, setError] = useState(null);

  const fetchPokemon = async (e: React.MouseEvent) => {
    try {
      const res = await axios.get(`${pokemonApiUrl}/pokemon/${pokemonName}`);
      setPokemonAbilities(res.data.abilities);
    } catch (err) {
      setPokemonAbilities([]);
      setError(err);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };
  return (
    <div>
      <CustomInput value={pokemonName} onChange={changeHandler}>
        Pokemon name:
      </CustomInput>
      <button type="button" onClick={fetchPokemon}>
        Fetch Pokemon abilities
      </button>
      {error && <span>Something went wrong...</span>}
      <ul>
        {pokemonAbilities.map((ability) => (
          <li key={ability.ability.name}>
            <a href={ability.ability.url}>{ability.ability.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
