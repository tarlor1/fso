const Header = ({ text }) => {
	return <h1>{text}</h1>;
};

const Content = ({ parts }) => {
	const total = parts.reduce((acc, val) => acc + val.exercises, 0);
	return (
		<div>
			{parts.map((val) => (
				<Part key={val.id} name={val.name} exercises={val.exercises} />
			))}
			<p>total of {total} exercises</p>
		</div>
	);
};

const Part = ({ name, exercises }) => {
	return (
		<p>
			{name} {exercises}
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header text={course.name} />
			<Content parts={course.parts} />
		</div>
	);
};

export default Course;
