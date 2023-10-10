import { convertToHoursMinutes, convertToMonthDay } from "./date.util";
import { ForecastResponse, WeatherResponse } from "../api";
import { WeatherData, WeatherDisplay } from "../store";
import { ForecastData } from "../api/types";
import moment from "moment";

export const convertMonthDayToId = (date: string) =>
  date.split(" ").join("-").toLowerCase();

export const parseToCurrentWeather = (data: WeatherResponse) => ({
  date: convertToMonthDay(),
  temp: Math.round(data.main.temp),
  icon: `${process.env.REACT_APP_WEATHER_ICONS_URL}/${data.weather[0].icon}@2x.png`,
  description:
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1), // make the first letter of the description upper case
  main: data.weather[0].main,
  time: convertToHoursMinutes(),
});

export const reduceForecastData = (data: ForecastResponse) => {
  const reduced = data.list.reduce(
    (acc: { [key: string]: WeatherDisplay[] }, current: ForecastData) => {
      const key = convertToMonthDay(current.dt_txt);
      const forecast: WeatherDisplay = {
        time: convertToHoursMinutes(current.dt_txt),
        temp: Math.round(current.main.temp),
        icon: `${process.env.REACT_APP_WEATHER_ICONS_URL}/${current.weather[0].icon}@2x.png`,
        main: current.weather[0].main,
        description:
          current.weather[0].description.charAt(0).toUpperCase() +
          current.weather[0].description.slice(1), // make the first letter of the description upper case,
        date: convertToMonthDay(key),
      };

      if (!acc[key]) {
        acc[key] = [forecast];

        return acc;
      }

      acc[key].push(forecast);

      return acc;
    },
    {},
  );

  return Object.entries(reduced).splice(0, 5);
};

export const parseWeatherForecastData = (data: {
  weatherData: WeatherResponse;
  forecastData: ForecastResponse;
}): WeatherData => {
  const result: WeatherData = {};

  const today = data.weatherData;
  const todayKey = convertMonthDayToId(convertToMonthDay());

  const forecasts = reduceForecastData(data.forecastData);

  result[todayKey] = {
    weather: parseToCurrentWeather(today),
    forecast: forecasts[0][1],
  };

  forecasts.splice(1, 5).forEach((value) => {
    const weatherObj = value[1][Math.floor(moment().hour() / 3)]; // current time divided by 3 gives the index of the current's forecast weather
    result[convertMonthDayToId(value[0])] = {
      weather: weatherObj,
      forecast: value[1],
    };
  });

  return result;
};
