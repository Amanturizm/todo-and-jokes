import React, { useState } from 'react';
import { nanoid } from "nanoid";

interface Props {
	addMovie: (newMovie: IMovieItem) => void;
}

const MovieFormFc: React.FC<Props> = ({ addMovie }) => {
	const [title, setTitle] = useState<string>('');

	const inputValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTitle(e.target.value);
	};

	const getNewMovie = (e: React.FormEvent): void => {
		e.preventDefault();
		addMovie({ title, id: nanoid() });
		setTitle('');
	};

	return (
		<form className="d-flex gap-3" onSubmit={getNewMovie}>
			<input type="text" className="input-group" value={title} onChange={inputValueChange}/>
			<button type="submit" className="btn btn-outline-dark" disabled={title.length > 1 ? false : true}>Add</button>
		</form>
	);
};

export default MovieFormFc;