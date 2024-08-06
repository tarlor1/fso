import { useState } from "react";
import Country from "./Country";

const ShowList = ({ country }) => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};
	return (
		<li key={country.area}>
			{country.name.common}
			<button onClick={handleClick}>show</button>
			{show && <Country country={country} />}
		</li>
	);
};

export default ShowList;
