import React, { useEffect, useState } from 'react';

interface Props {
	id: string;
	index: number;
	title: string;
	onMovieRemove: React.MouseEventHandler;
}

const MovieItemFc: React.FC<Props> = props => {
	const [movie, setMovie] = useState<string>(props.title);

	useEffect(() => {
		const moviesCopy = JSON.parse(localStorage.getItem('movies')!);

		if (moviesCopy[props.index]) {
			moviesCopy[props.index].title = movie;
		}

		localStorage.setItem('movies', JSON.stringify(moviesCopy));
	}, [movie]);

	return (
		<div className="d-flex gap-3 border border-2 border-black rounded p-1">
			<input
				className="input-group border-0"
				type="text"
				value={movie}
				onChange={e => setMovie(e.target.value)}
			/>
			<button className="btn btn-close" onClick={props.onMovieRemove}></button>
		</div>
	);
};

export default React.memo(
	MovieItemFc,
	(prevProps: Readonly<Props>, nextProps: Readonly<Props>) => prevProps.id === nextProps.id
);