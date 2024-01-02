import { useState } from "react";

const Heading = (props) => {
	return <h2>{props.text}</h2>;
};

const Button = (props) => {
	return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
	return (
		<tr>
			<td>{props.label}</td>
			<td>{props.value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	const total = props.good + props.neutral + props.bad;
	if (total !== 0) {
		const avg = (props.good - props.bad) / total;
		const positive = props.good / total;
		return (
			<>
				<Heading text="statistics" />
				<table>
					<tbody>
						<StatisticLine label="good" value={props.good} />
						<StatisticLine label="neutral" value={props.neutral} />
						<StatisticLine label="bad" value={props.bad} />
						<StatisticLine label="all" value={total} />
						<StatisticLine label="average" value={avg} />
						<StatisticLine label="positive" value={positive * 100 + "%"} />
					</tbody>
				</table>
			</>
		);
	} else {
		return <p>No feedback given</p>;
	}
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const createSetter = (setFn, value) => {
		return () => setFn(value);
	};

	return (
		<div>
			<div>
				<Heading text="give feedback" />
				<Button onClick={createSetter(setGood, good + 1)} text="good" />
				<Button
					onClick={createSetter(setNeutral, neutral + 1)}
					text="neutral"
				/>
				<Button onClick={createSetter(setBad, bad + 1)} text="bad" />
			</div>
			<div>
				<Statistics good={good} bad={bad} neutral={neutral} />
			</div>
		</div>
	);
};

export default App;
