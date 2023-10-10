export type WeatherRequest = {
	lat: number;
	lon: number;
	units: string;
};

export type Weather = {
	main: string;
	description: string;
	icon: string;
};

export type WeatherMain = {
	temp: number;
};

export type WeatherResponse = {
	weather: Weather[];
	main: WeatherMain;
	name: string;
};

export type ForecastData = WeatherResponse & {
	dt_txt: string;
};

export type ForecastResponse = {
	city: { name: string };
	list: ForecastData[];
};
