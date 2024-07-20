import { ControlledInput } from "./PersonForm";

const Filter = (props) => {
	const { title, state, handler } = props;
	return <ControlledInput title={title} state={state} stateHandler={handler} />;
};

export default Filter;
