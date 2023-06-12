import React from 'react';

interface Props {
	title: string;
	onMovieEdit: React.ChangeEventHandler<HTMLInputElement>;
	onMovieRemove: React.MouseEventHandler;
}

class MovieItemClass extends React.Component<Props> {
	shouldComponentUpdate (nextProps: Props): boolean {
		return nextProps.title !== this.props.title
	}

	render() {
		return (
			<form className="d-flex gap-3 border border-2 border-black rounded p-1">
				<input className="input-group border-0" type="text" value={this.props.title} onChange={this.props.onMovieEdit}/>
				<button className="btn btn-close" onClick={this.props.onMovieRemove}></button>
			</form>
		);
	}
}

export default MovieItemClass;