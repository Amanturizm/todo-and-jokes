import React, { useEffect, useState } from 'react';
import MovieFormFc from "../../components/MovieForm/MovieFormFC";
import MovieItemFc from "../../components/MovieItem/MovieItemFC";

const Task01Fc = () => {
	const startData = JSON.parse(localStorage.getItem('movies')!) || [];

	const [movies, setMovies] = useState<IMovieItem[]>(startData);

	useEffect(() => localStorage.setItem('movies', JSON.stringify(movies)), []);
	useEffect(() => localStorage.setItem('movies', JSON.stringify(movies)), [movies]);

	const addMovie = (newMovie: IMovieItem): void => {
		setMovies(prevState => [...prevState, { ...newMovie }]);
	};

	const movieRemove = (id: string): void => {
		setMovies(prevState => prevState.filter(movie => movie.id !== id));
	};

	return (
		<div className="container w-25 m-auto">
			<MovieFormFc addMovie={addMovie} />
			<div className="d-flex flex-column gap-2 mt-3">
				{
					movies.map((movie: IMovieItem, index: number) => (
						<MovieItemFc
							id={movie.id}
							key={movie.id}
							index={index}
							title={movie.title}
							onMovieRemove={() => movieRemove(movie.id)}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Task01Fc;