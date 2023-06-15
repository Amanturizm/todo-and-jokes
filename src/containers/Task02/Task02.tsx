import React, { useEffect, useState } from 'react';
import Jokes from "../../components/Jokes/Jokes";
import JokesButton from "../../components/JokesButton/JokesButton";

const url: string = 'https://api.chucknorris.io/jokes/random';
const amountJokes: number = 5;

const Task02 = () => {
	const [jokes, setJokes] = useState<IJoke[]>([]);

	const generateJoke = async (amount: number) => {
		const urls: string[] = Array(amount).fill(url);

		try {
			const jokes = await Promise.all(
				urls.map(async url => {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error(`Ошибка при выполнении запроса ${url}`);
					}
					return await response.json();
				})
			);

			setJokes( jokes.map( joke => ( { value: joke.value, id: joke.id } ) ) );
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		generateJoke(amountJokes).catch(err => console.error(err));
	}, []);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		generateJoke(amountJokes).catch(err => console.error(err));
	};

	return (
		<div className="d-flex flex-column align-items-center gap-3">
			<form onSubmit={onSubmit}>
				<JokesButton />
			</form>

			<Jokes jokes={jokes} />
		</div>
	);
};

export default Task02;