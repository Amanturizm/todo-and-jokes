import React from 'react';

interface Props {
	id: string;
	index: number;
	title: string;
	onMovieRemove: React.MouseEventHandler;
}

interface State {
	movie: string;
}

class MovieItemClass extends React.Component<Props, State> {
	state: State = {
		movie: this.props.title,
	};

	shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
		return nextProps.title !== nextState.movie;
	}

	componentDidUpdate(): void {
		const moviesCopy = JSON.parse(localStorage.getItem('movies')!);

		moviesCopy[this.props.index].title = this.state.movie;

		localStorage.setItem('movies', JSON.stringify(moviesCopy));
	};

	render() {
		return (
			<div className="d-flex gap-3 border border-2 border-black rounded p-1">
				<input
					className="input-group border-0"
					type="text"
					value={this.state.movie}
					onChange={e => this.setState({ movie: e.target.value })}
				/>
				<button className="btn btn-close" onClick={this.props.onMovieRemove}></button>
			</div>
		);
	};
};

export default MovieItemClass;