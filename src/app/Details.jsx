import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { tipos } from '../utils/helpers';
import '@fontsource/luckiest-guy';
import '../styles/Detail.css';

function Details() {
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (params.name) getPokemon();
	}, [params.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	};
	// console.log('https://pokeapi.co/api/v2/language/7/mega-punch');

	const types = pokemon?.types.map((type) => type.type.name);

	if (!types) return;

	return (
		<div className="todo">
			<Link className="det" to="/pokedex">
				{'<-'} Volver
			</Link>
			<div className="dete">
				<div className={`det__header type--${types[0]}`}>
					<div>
						<div className="det__content">
							<img
								src={pokemon?.sprites?.other?.dream_world?.front_default}
								alt={pokemon?.name}
							/>
						</div>
						<div className="det__info">
							<span className="det__card">
								#{pokemon?.id?.toString().padStart(3, '0')}
							</span>
							<h2 className="det__name">{params?.name}</h2>
							<div className="det__item">
								<span>
									<span>Peso</span>
									{pokemon?.weight}
								</span>{' '}
								<span>
									<span>Altura</span>
									{pokemon?.height}
								</span>
							</div>
							<div className="det__item">
								<h3 className="title">Tipos</h3>
								<div>
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
								</div>
							</div>
							<div className="det__item">
								<h3 className="title">Habilidades</h3>
								<div>
									{pokemon?.abilities?.map((data) => (
										<span key={data.ability.name}>{data.ability.name} </span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="det__fin">
				<div className="det__all">
					{pokemon?.moves?.map((data) => (
						<span className="det__movs" key={data.move.name}>
							{data.move.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export { Details };
