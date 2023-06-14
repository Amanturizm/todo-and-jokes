import React from 'react';
import MovieFormClass from "../../components/MovieForm/MovieFormClass";
import MovieItemClass from "../../components/MovieItem/MovieItemClass";

interface State {
	movies: IMovieItem[];
}

class Task01Class extends React.Component<{}, State> {
	state: State = {
		movies: JSON.parse(localStorage.getItem('movies')!) || [],
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

	movieRemove = (id: string): void => {
		this.setState(prevState => ({
			...prevState,
			movies: prevState.movies.filter(movie => movie.id !== id)
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
								id={movie.id}
								index={index}
								title={movie.title}
								onMovieRemove={() => this.movieRemove(movie.id)}
							/>
						))
					}
				</div>
			</div>
		);
	};
}

export default Task01Class;