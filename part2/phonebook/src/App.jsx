import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	const peopleToShow = persons.filter((value) =>
		value.name.toLowerCase().includes(search.toLowerCase())
	);
	const handleSubmit = (event) => {
		event.preventDefault();
		//check if newPerson already has the same name
		let doesContain = false;
		for (let i = 0; i < persons.length; i++) {
			if (persons[i].name === newName) {
				doesContain = true;
				break;
			}
		}

		const newPerson = {
			name: newName,
			number: newNumber,
		};

		if (doesContain) {
			alert(`${newName} is already added to phonebook`);
		} else {
			setPersons(persons.concat(newPerson));
			setNewName("");
			setNewNumber("");
		}
	};

	const createInputHandler = (setFunction) => {
		return (event) => {
			setFunction(event.target.value);
		};
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				title="filter shown with"
				state={search}
				setState={setSearch}
				handler={createInputHandler(setSearch)}
			/>
			<h3>Add a new</h3>
			<PersonForm
				handleSubmit={handleSubmit}
				newName={newName}
				newNumber={newNumber}
				handleNewName={createInputHandler(setNewName)}
				handleNewNumber={createInputHandler(setNewNumber)}
			/>
			<h2>Numbers</h2>
			<PersonList showItem={peopleToShow} />
		</div>
	);
};

export default App;
