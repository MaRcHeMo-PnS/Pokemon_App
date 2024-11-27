import React, { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import '../../styles/Search.css';

function Search({ handleSearch }) {
	const inputRef = useRef();

	const onSearch = () => {
		handleSearch(inputRef.current.value.toLowerCase().trim());
		inputRef.current.value = '';
	};

	return (
		<div className="search">
			<div className="search__input">
				<CiSearch />
				<input type="text" placeholder="Buscan un pokemon" ref={inputRef} />
			</div>
			<button className="search__btn" onClick={onSearch}>
				Buscar
			</button>
		</div>
	);
}

export default Search;
