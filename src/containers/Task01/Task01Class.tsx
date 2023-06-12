import { nanoid } from "nanoid";
import React from 'react';
import MovieFormClass from "../../components/MovieForm/MovieFormClass";
import MovieItemClass from "../../components/MovieItem/MovieItemClass";

interface State {
	movies: IMovieItem[];
}

class Task01Class extends React.Component<{}, State> {
	state: State = {
		movies: JSON.parse(localStorage.getItem('movies') || '[]'),
	};

	componentDidMount(): void {
		localStorage.setItem('movies', JSON.stringify(this.state.movies));
	}

	componentDidUpdate(): void {
		localStorage.setItem('movies', JSON.stringify(this.state.movies));
	}

	addMovie = (newMovie: IMovieItem): void => {
		this.setState(prevState => ({
			movies: [...prevState.movies, { ...newMovie }]
		}))
	};

	movieEdit = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
		this.setState(prevState => {
			const moviesCopy: IMovieItem[] = [ ...prevState.movies ];
			const movieCopy: IMovieItem = { ...moviesCopy[index] };
			movieCopy.title = e.target.value;
			moviesCopy[index] = movieCopy;
			return {...prevState, movies: moviesCopy};
		});
	};

	movieRemove = (index: number): void => {
		this.setState(prevState => ({
			...prevState,
			movies:
				prevState.movies.length > 1 ?
					prevState.movies.filter(movie => movie.id !== prevState.movies[index].id)
					: []
		}));
	};

	render() {
		return (
			<div className="container w-25 m-auto">
				<MovieFormClass addMovie={this.addMovie} />
				<div className="d-flex flex-column gap-2 mt-3">
					{
						this.state.movies.map((movie: IMovieItem, index: number) => (
							<MovieItemClass
								key={movie.id}
								title={movie.title}
								index={index + 1}
								onMovieEdit={(e) => this.movieEdit(e, index)}
								onMovieRemove={() => this.movieRemove(index)}
							/>
						))
					}
				</div>
			</div>
		);
	};
}

export default Task01Class;