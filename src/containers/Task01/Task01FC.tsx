import React, { useEffect, useState } from 'react';
import MovieFormFc from "../../components/MovieForm/MovieFormFC";
import MovieItemFc from "../../components/MovieItem/MovieItemFC";

const Task01Fc = () => {
	const startData = JSON.parse(localStorage.getItem('movies')!) || [];
	const [movies, setMovies] = useState<IMovieItem[]>(startData);

	useEffect(() => {
		localStorage.setItem('movies', JSON.stringify(movies));
	}, []);

	useEffect(() => {
		localStorage.setItem('movies', JSON.stringify(movies));
	}, [movies]);

	const addMovie = (newMovie: IMovieItem): void => {
		setMovies(prevState => {
			return [...prevState, { ...newMovie }]
		});
	};

	const movieEdit = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
		setMovies(prevState => {
			const moviesCopy: IMovieItem[] = [ ...prevState ];
			const movieCopy: IMovieItem = { ...moviesCopy[index] };
			movieCopy.title = e.target.value;
			moviesCopy[index] = movieCopy;
			return moviesCopy;
		});
	};

	const movieRemove = (index: number): void => {
		setMovies(prevState => {
			return prevState.filter(movie => movie.id !== prevState[index].id)
		});
	};

	return (
		<div className="container w-25 m-auto">
			<MovieFormFc addMovie={addMovie} />
			<div className="d-flex flex-column gap-2 mt-3">
				{
					movies.map((movie: IMovieItem, index: number) => (
						<MovieItemFc
							key={movie.id}
							title={movie.title}
							onMovieEdit={e => movieEdit(e, index)}
							onMovieRemove={() => movieRemove(index)}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Task01Fc;