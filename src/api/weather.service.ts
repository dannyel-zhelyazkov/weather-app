import { client } from "../client";
import { WeatherRequest, WeatherResponse } from "./types";
import { AxiosError, AxiosResponse } from "axios";

export const weatherService = () => {
  const WEATHER_URL = (data: WeatherRequest) =>
    `weather?lat=${data.lat}&lon=${data.lon}&units=${data.units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const getWeather = async (
    request: WeatherRequest,
  ): Promise<WeatherResponse> => {
    try {
      const result = await client.get<
        WeatherResponse,
        AxiosResponse<WeatherResponse>
      >(WEATHER_URL(request));

      return result.data;
    } catch (e) {
      throw new Error((e as AxiosError).message);
    }
  };

  return { getWeather };
};
