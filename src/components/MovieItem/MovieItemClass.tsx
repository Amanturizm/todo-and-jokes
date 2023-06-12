import React from 'react';

interface Props {
	title: string;
	index: number;
	onMovieEdit: React.ChangeEventHandler<HTMLInputElement>;
	onMovieRemove: React.MouseEventHandler;
}

class MovieItemClass extends React.Component<Props> {
	shouldComponentUpdate (nextProps: Props): boolean {
		return nextProps.title !== this.props.title
	}

	render() {
		return (
			<div className="d-flex gap-3 border border-2 border-black rounded p-1">
				<input className="input-group border-0" type="text" value={this.props.title} onChange={this.props.onMovieEdit}/>
				<span>#{this.props.index}</span>
				<button className="btn btn-close" onClick={this.props.onMovieRemove}></button>
			</div>
		);
	}
}

export default MovieItemClass;