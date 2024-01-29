const ControlledInput = (props) => {
	const { title, state, stateHandler } = props;
	return (
		<div>
			{title}
			<input type="text" value={state} onChange={stateHandler} />
		</div>
	);
};

const PersonForm = (props) => {
	const { handleSubmit, newName, newNumber, handleNewName, handleNewNumber } =
		props;

	return (
		<form onSubmit={handleSubmit}>
			<ControlledInput
				title="Name:"
				state={newName}
				stateHandler={handleNewName}
			/>
			<ControlledInput
				title="Number:"
				state={newNumber}
				stateHandler={handleNewNumber}
			/>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
