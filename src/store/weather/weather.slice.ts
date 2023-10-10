import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, WeatherData } from "../index";
import {
  ForecastResponse,
  forecastService,
  WeatherResponse,
  weatherService,
} from "../../api";
import { STANDARD_UNIT, WEATHER_METRIC_KEY } from "../../common/constants";
import {
  convertMonthDayToId,
  convertToMonthDay,
  parseToCurrentWeather,
  parseWeatherForecastData,
} from "../../utils";
import { AxiosError } from "axios";

export type WeatherState = {
  locationName: string;
  units: string;
  weather: WeatherData;
  isLoading?: boolean;
  error?: string;
};

const initialState: WeatherState = {
  locationName: "",
  units: "",
  weather: {},
  isLoading: undefined,
  error: undefined,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherAndForecast: (
      state,
      action: {
        payload: {
          units: string;
          weatherData: WeatherResponse;
          forecastData: ForecastResponse;
        };
      },
    ) => {
      state.locationName = action.payload.weatherData.name;
      state.weather = parseWeatherForecastData({
        weatherData: action.payload.weatherData,
        forecastData: action.payload.forecastData,
      });
      state.units = action.payload.units;
      state.isLoading = false;
    },
    setWeather: (state, action) => {
      const newObject = { ...state.weather };
      newObject[convertMonthDayToId(convertToMonthDay())].weather =
        parseToCurrentWeather(action.payload);

      state.weather = newObject;
      state.isLoading = false;
      state.error = undefined;
    },
    setUnits: (state, action) => {
      localStorage.setItem(WEATHER_METRIC_KEY, action.payload);
      state.units = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
    },
  },
});

export const fetchWeather = () => (dispatch: AppDispatch) => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      dispatch(setIsLoading(true));
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const units = localStorage.getItem(WEATHER_METRIC_KEY) || STANDARD_UNIT;
      const responseWeather = await weatherService().getWeather({
        lat,
        lon,
        units,
      });

      dispatch(setWeather(responseWeather));
    } catch (e) {
      dispatch(setError(e));
      dispatch(setIsLoading(false));
    }
  });
};

export const fetchWeatherAndForecast = () => (dispatch: AppDispatch) => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      dispatch(setIsLoading(true));
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const units = localStorage.getItem(WEATHER_METRIC_KEY) || STANDARD_UNIT;
      const responseWeather = await weatherService().getWeather({
        lat,
        lon,
        units,
      });
      const responseForecast = await forecastService().getForecast({
        lat,
        lon,
        units,
      });

      dispatch(
        setWeatherAndForecast({
          units,
          weatherData: responseWeather,
          forecastData: responseForecast,
        }),
      );
    } catch (e) {
      dispatch(setError(e));
      dispatch(setIsLoading(false));
    }
  });
};

export const {
  setWeatherAndForecast,
  setIsLoading,
  setWeather,
  setError,
  setUnits,
} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
