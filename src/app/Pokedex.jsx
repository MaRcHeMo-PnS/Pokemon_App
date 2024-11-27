import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/pokedex/Search';
import Filters from '../components/pokedex/Filters';
import { useFetch } from '../hooks/useFetch';
import PokemonList from '../components/pokedex/PokemonList';
import { useNameContext } from '../contexts/nameContext';
import PokemonCard from '../components/pokedex/PokemonCard';
import '@fontsource/luckiest-guy';
import '../styles/Pokedex.css';

const geneIni = {
	primer: '1',
};
const geneFin = {
	primer: '150',
};

function Pokedex() {
	const [name] = useNameContext();
	const [pokemons, setPokemons, loading] = useFetch();
	const [pokemonUrl, setPokemonUrl] = useState(null);
	const [isFiltering, setIsFiltering] = useState(false);
	// const [filter, setFilter] = useState(false);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = () => {
		setPokemons(
			`https://pokeapi.co/api/v2/pokemon?limit=${geneFin}&offset=${geneFin}`,
		);
	};

	const handleSearch = (value) => {
		if (!value) {
			setIsFiltering(false);
			setPokemonUrl(null);
			setPokemons(
				`https://pokeapi.co/api/v2/pokemon?limit=${geneFin}&offset=${geneFin}`,
			);
		} else {
			setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}/`);
		}
	};

	const handleTypeFilter = (type) => {
		if (!type) {
			setIsFiltering(false);
			setPokemons(
				`https://pokeapi.co/api/v2/pokemon?limit=${geneFin}&offset=${geneFin}`,
			);
		} else {
			setIsFiltering(true);
			setPokemons(`https://pokeapi.co/api/v2/type/${type}`);
		}
	};

	const onNext = () => {
		setPokemons(pokemons?.next);
	};

	const onPrev = () => {
		setPokemons(pokemons?.previous);
	};

	// const imgPok = filter;

	// const imgPok = () => {
	// 	if (!filter) {
	// 		imgPok =
	// 			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
	// 	} else {
	// 		imgPok =
	// 			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';
	// 	}
	// };

	const pokemonsArry = isFiltering ? pokemons?.pokemon : pokemons?.results;

	return (
		<div className="pokedex">
			<Link className="ret" to="/">
				{'<-'} Volver
			</Link>
			{/* <div>
				<label htmlFor="checkbox">Shiny</label>
				<input
					type="checkbox"
					name="filter"
					onChange={() => setFilter(!filter)}
					id="checkbox"
				/>
			</div> */}
			<div className="pokedex__header">
				<div className="pokemon__container">
					<p className="pokemon__text">
						Bienvenido {name}, Aqui podras encontrar tu Pokemon favorito
					</p>
					{loading ? (
						<h2>Cargando...</h2>
					) : (
						<>
							<div className="pokedex__form">
								<Search handleSearch={handleSearch} />
								<Filters handleTypeFilter={handleTypeFilter} />
							</div>
							<div className="pokedex__btn">
								<button
									className="pokedex__btn--an"
									onClick={onPrev}
									disabled={!pokemons?.previous}
								>
									Anterior
								</button>
								<button
									className="pokedex__btn--an"
									onClick={onNext}
									disabled={!pokemons?.next}
								>
									Siguiente
								</button>
							</div>
							<div className="pokedex__cards">
								{pokemonUrl ? (
									<>
										<PokemonCard url={pokemonUrl} filter={filter} />
									</>
								) : (
									<>
										<PokemonList
											pokemons={pokemonsArry}
											isFiltering={isFiltering}
										/>
									</>
								)}
							</div>
							<div className="pokedex__btn">
								<button
									className="pokedex__btn--an"
									onClick={onPrev}
									disabled={!pokemons?.previous}
								>
									Anterior
								</button>
								<button
									className="pokedex__btn--an"
									onClick={onNext}
									disabled={!pokemons?.next}
								>
									Siguiente
								</button>
							</div>
						</>
					)}
				</div>
			</div>
			{/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}
		</div>
	);
}

export { Pokedex };
