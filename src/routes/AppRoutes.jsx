import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Pokedex, Details } from '../app';
import ProtectedRoute from './ProtectedRoute';
import { useFetch } from '../hooks/useFetch';

function AppRoutes() {
	const [loading] = useFetch();
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{loading ? (
				<h2>Cargando...</h2>
			) : (
				<Route path="/pokedex" element={<ProtectedRoute />}>
					<Route index element={<Pokedex />} />
					<Route path=":name" element={<Details />} />
				</Route>
			)}
		</Routes>
	);
}

export default AppRoutes;
