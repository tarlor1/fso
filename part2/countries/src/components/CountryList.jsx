import ShowList from "./ShowList";

const CountryList = ({ countries }) => {
	return (
		<ul>
			{countries.map((country) => (
				<ShowList country={country} key={country.area} />
			))}
		</ul>
	);
};

export default CountryList;
