import React, { Fragment, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { tipos } from '../../utils/helpers';
import '../../styles/PokemonCard.css';

function PokemonCard({ url, filter }) {
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (url) getPokemon();
	}, [url]);

	const getPokemon = () => {
		setPokemon(url);
	};
	const types = pokemon?.types.map((type) => type.type.name);

	if (!types) return;

	// if (!filter) return;

	// console.log(filters);

	return (
		<Link className="poke" to={`/pokedex/${pokemon?.name}`}>
			<div className={`poke__card type--${types[0]}`}>
				<div className="poke__card-header">
					<img src={pokemon?.sprites?.front_shiny} alt="" />
				</div>
				<div className="poke__card-body">
					<h2 className="poke__card-name"> {pokemon?.name}</h2>
					<span className="poke__card-type">
						{types?.map((type, index) => {
							return (
								<Fragment key={type}>
									{index > 0 ? (
										<>
											{' /'} <span>{tipos[type]}</span>
										</>
									) : (
										<span>{tipos[type]}</span>
									)}
								</Fragment>
							);
						})}
					</span>
					<p className="poke__card-type-label">Tipo</p>
					<div className="poke__card-stats">
						<div>
							<span>HP </span>
							<span>{pokemon?.stats[0].base_stat}</span>
						</div>
						<div>
							<span>Ataque </span>
							<span>{pokemon?.stats[1].base_stat}</span>
						</div>
						<div>
							<span>Defensa </span>
							<span>{pokemon?.stats[2].base_stat}</span>
						</div>
						<div>
							<span>Velocidad </span>
							<span>{pokemon?.stats[5].base_stat}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PokemonCard;
