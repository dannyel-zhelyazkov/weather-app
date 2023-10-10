import {
  weatherReducer,
  WeatherState,
  setWeatherAndForecast,
  setUnits,
} from "../../store/weather";
import {
  fakeForecastResponse,
  fakeWeatherData,
  fakeWeatherResponse,
} from "../data/weather.data";
import { WEATHER_METRIC_KEY } from "../../common/constants";

test("should set proper weather slice data", async () => {
  const previousState: WeatherState = {
    locationName: "",
    units: "metric",
    weather: {},
    isLoading: undefined,
  };

  expect(
    weatherReducer(
      previousState,
      setWeatherAndForecast({
        units: "imperial",
        weatherData: fakeWeatherResponse,
        forecastData: fakeForecastResponse,
      }),
    ),
  ).toEqual({
    weather: fakeWeatherData,
    isLoading: false,
    units: "imperial",
    locationName: "Sofia",
  });
});

test("should set the proper units to the localstorage", () => {
  expect(weatherReducer(undefined, setUnits("metric"))).toEqual({
    units: "metric",
    isLoading: undefined,
    locationName: "",
    weather: {},
  });
  expect(localStorage.getItem(WEATHER_METRIC_KEY)).toEqual("metric");
});
