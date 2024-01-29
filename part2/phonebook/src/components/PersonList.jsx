const Person = ({ person }) => {
	return (
		<div>
			{person.name} {person.number}
		</div>
	);
};

const PersonList = (props) => {
	const { showItem } = props;
	return showItem.map((value) => <Person key={value.name} person={value} />);
};

export default PersonList;
