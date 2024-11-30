import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons, isFiltering, filter }) {
	// console.log(pokemons);
	return (
		<>
			{pokemons?.map((pokemon) => {
				const pokemonUrl = isFiltering ? pokemon.pokemon.url : pokemon.url;
				const pokemonName = isFiltering ? pokemon.pokemon.name : pokemon.name;
				return (
					<PokemonCard key={pokemonName} url={pokemonUrl} filter={filter} />
				);
			})}
		</>
	);
}

export default PokemonList;
