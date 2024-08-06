import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ country }) => {
	const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
	const [weather, setWeather] = useState(null);
	useEffect(() => {
		axios
			.get(
				`http://api.weatherapi.com/v1/current.json?q=${country.capital[0]}&key=${API_KEY}`
			)
			.then((response) => setWeather(response.data));
	}, [API_KEY, country]);

	if (weather === null) {
		return null;
	}

	return (
		<div>
			<h2>Weather in {country.name.common}</h2>
			<p>temperature {weather.current.temp_c} Celcius</p>
			<img src={weather.current.condition.icon} />
			<p>wind {weather.current.wind_mph} mph</p>
		</div>
	);
};

export default Weather;
