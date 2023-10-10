import { client } from '../client';
import { ForecastResponse, WeatherRequest } from './types';
import { AxiosError } from 'axios';

export const forecastService = () => {
	const FORECAST_URL = (data: WeatherRequest) =>
		`forecast?lat=${data.lat}&lon=${data.lon}&units=${data.units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
	const getForecast = async (
		request: WeatherRequest
	): Promise<ForecastResponse> => {
		try {
			const result = await client.get(FORECAST_URL(request));

			return result.data;
		} catch (e) {
			throw new Error((e as AxiosError).message);
		}
	};

	return { getForecast };
};
