import Country from "./Country";
import CountryList from "./CountryList";

const Data = ({ match, allCountries }) => {
	let matchedCountries = allCountries.filter((elem) =>
		elem.name.common.toLowerCase().includes(match.toLowerCase())
	);

	if (matchedCountries.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (matchedCountries.length === 1) {
		return <Country country={matchedCountries[0]} />;
	} else {
		return <CountryList countries={matchedCountries} />;
	}
};

export default Data;
