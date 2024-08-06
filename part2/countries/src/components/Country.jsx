import axios from "axios";
import Weather from "./Weather";
const Country = ({ country }) => {
	const languageKeys = Object.keys(country.languages);

	return (
		<div>
			<h1>{country.name.common}</h1>
			<div>
				<p>capital {country.capital[0]}</p>
				<p>area {country.area}</p>
			</div>
			<h3>languages</h3>
			<ul>
				{languageKeys.map((key) => (
					<li key={key}>{country.languages[key]}</li>
				))}
			</ul>
			<img src={country.flags.png} height="200" width="250" />
			<Weather country={country} />
		</div>
	);
};

export default Country;
