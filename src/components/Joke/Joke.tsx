import React from 'react';

interface Props {
	title: string;
}

const Joke: React.FC<Props> = ({ title }) => {
	return (
		<div className="text-center w-50 border border-black rounded-4 p-3">{title}</div>
	);
};

export default Joke;