import { useState } from "react";

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

const Display = (props) => {
	return <p>{props.text}</p>;
};
const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);
	console.log(selected);

	const [votes, setVotes] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
	});

	let greatest = -Infinity;
	let maxIndex = 0;
	for (const key in votes) {
		if (votes[key] > greatest) {
			maxIndex = key;
			greatest = votes[key];
		}
	}

	return (
		<div>
			<h2>Anecdote of the day</h2>
			{anecdotes[selected]} votes {votes[selected]}
			<div>
				<Button
					onClick={() =>
						setVotes({
							...votes,
							[selected]: votes[selected] + 1,
						})
					}
					text="vote"
				/>
				<Button
					onClick={() =>
						setSelected(Math.floor(Math.random() * anecdotes.length))
					}
					text="next"
				/>
			</div>
			<div>
				<h2>Anecdote with most votes</h2>
				<Display text={anecdotes[maxIndex]} />
			</div>
		</div>
	);
};

export default App;
