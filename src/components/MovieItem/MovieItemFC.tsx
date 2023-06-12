import React from 'react';

interface Props {
	title: string;
	onMovieEdit: React.ChangeEventHandler<HTMLInputElement>;
	onMovieRemove: React.MouseEventHandler;
}

const MovieItemFc: React.FC<Props> = props => {

	return (
		<div className="d-flex gap-3 border border-2 border-black rounded p-1">
			<input className="input-group border-0" type="text" value={props.title} onChange={props.onMovieEdit}/>
			<button className="btn btn-close" onClick={props.onMovieRemove}></button>
		</div>
	);
};

export default MovieItemFc;