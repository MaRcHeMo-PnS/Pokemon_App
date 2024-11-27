import { useRef } from 'react';
import { types, useNameContext } from '../contexts/nameContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
	const inputRef = useRef();
	const navigate = useNavigate();
	const [name, dispatch] = useNameContext();

	const setName = () => {
		dispatch({
			type: types.SET_NAME,
			payload: inputRef.current.value.trim(),
		});
		inputRef.current.value = '';
		navigate('/pokedex');
	};

	const clearName = () => {
		dispatch({
			type: types.CLEAR_NAME,
		});
	};

	return (
		<div className="home">
			<div className="img"></div>
			<div className="home__content">
				<h2 className="home__title">
					¡Hola {name ? <>de nuevo {name}</> : 'Entrenador'}!
				</h2>
				<div>
					{name ? (
						<>
							<p className="home__text">
								¡Continuemos con tu viaje! Ve a tu{' '}
								<Link className="home__link" to="/pokedex">
									Pokedex
								</Link>
							</p>
							<button className="home__btn btn--radius" onClick={clearName}>
								Salir
							</button>
						</>
					) : (
						<>
							<p className="home__text">Para poder comenzar, dame tu nombre</p>
							<input
								type="text"
								placeholder="Tu nombre..."
								ref={inputRef}
								className="home__input"
							/>
							<button onClick={setName} className="home__btn">
								Comenzar
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export { Home };
