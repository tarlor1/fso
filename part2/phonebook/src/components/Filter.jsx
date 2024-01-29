const Filter = (props) => {
	const { title, state, setState, handler } = props;
	return (
		<div>
			{title}
			<input type="text" value={state} onChange={handler} />
		</div>
	);
};

export default Filter;
