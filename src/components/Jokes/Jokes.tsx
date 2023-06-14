import React from 'react';
import Joke from "../Joke/Joke";

interface Props {
	jokes: IJoke[];
}

const Jokes: React.FC<Props> = ({ jokes }) => {
	return (
		<div className="d-flex flex-column align-items-center gap-3">
			{ jokes.map(joke => <Joke key={joke.id} title={joke.value} />) }
		</div>
	);
};

export default Jokes;