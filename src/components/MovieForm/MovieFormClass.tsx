import React from 'react';
import { nanoid } from "nanoid";

interface Props {
	addMovie: (newMovie: IMovieItem) => void;
}

interface State {
	title: string;
}

class MovieFormClass extends React.Component<Props, State> {
	state: State = {
		title: '',
	};

	inputValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({title: e.target.value})
	};

	getNewMovie = (e: React.FormEvent): void => {
		e.preventDefault();
		this.props.addMovie({ ...this.state, id: nanoid() });
		this.setState({ title: '' });
	};

	render() {
		return (
			<form className="d-flex gap-3" onSubmit={this.getNewMovie}>
				<input type="text" className="input-group" value={this.state.title} onChange={this.inputValueChange}/>
				<button
					type="submit"
					className="btn btn-outline-dark"
					disabled={this.state.title.length > 1 ? false : true}
				>
					Add
				</button>
			</form>
		);
	};
}

export default MovieFormClass;