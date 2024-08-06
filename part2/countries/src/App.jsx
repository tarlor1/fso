import { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/Data";

const App = () => {
	const [country, setCountry] = useState("");
	const [allCountries, setAllCountries] = useState([]);
	const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

	useEffect(() => {
		axios.get(baseUrl).then((response) => {
			setAllCountries(response.data);
		});
	}, []);

	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	return (
		<div>
			find countries
			<input type="text" value={country} onChange={handleChange} />
			<Data match={country} allCountries={allCountries} />
		</div>
	);
};

export default App;
