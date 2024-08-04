import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/PersonList";
import numberService from "./services/numbers";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		numberService.getAll().then((initialPersons) => setPersons(initialPersons));
	}, []);

	const peopleToShow = persons.filter((value) => {
		return value?.name.toLowerCase().includes(search.toLowerCase());
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		//check if newPerson already has the same name
		for (const person of persons) {
			if (person.name === newName) {
				if (
					window.confirm(
						`${newName} is already added to phonebook, replace the old number with a new one?`
					)
				) {
					const newPerson = {
						...person,
						number: newNumber,
					};

					numberService.update(person.id, newPerson).then((returnedPerson) => {
						setPersons(
							persons.map((p) => (p.id !== person.id ? p : returnedPerson))
						);
					});
					setNewName("");
					setNewNumber("");
				}
				return;
			}
		}

		const newPerson = {
			name: newName,
			number: newNumber,
		};

		numberService.create(newPerson).then((person) => {
			setPersons(persons.concat(person));
			setNewName("");
			setNewNumber("");
		});
	};

	const createInputHandler = (setFunction) => {
		return (event) => {
			setFunction(event.target.value);
		};
	};

	const deletePersonOf = (id, name) => {
		if (window.confirm(`Delete ${name}?`)) {
			numberService.deletePerson(id).then((deletedPerson) => {
				setPersons(
					persons.filter((element) => element.id !== deletedPerson.id)
				);
			});
		}
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
			<ul>
				{peopleToShow.map((value) => (
					<Person
						key={value.id}
						person={value}
						deleteHandler={() => deletePersonOf(value.id, value.name)}
					/>
				))}
			</ul>
		</div>
	);
};

export default App;
