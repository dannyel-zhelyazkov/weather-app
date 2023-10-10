import { ForecastResponse, WeatherResponse } from "../../api";
import { WeatherData } from "../../store";
import {
  convertMonthDayToId,
  convertToHoursMinutes,
  convertToMonthDay,
} from "../../utils";
import moment from "moment";

export const refactoredData: WeatherData = {
  "oct-08": {
    weather: {
      date: "Oct 08",
      temp: 22,
      icon: "https://openweathermap.org/img/wn/01d@2x.png",
      description: "Clear sky",
      main: "Clear",
      time: "12:41",
    },
    forecast: [
      {
        time: "12:00",
        temp: 23,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 08",
      },
      {
        time: "15:00",
        temp: 22,
        icon: "https://openweathermap.org/img/wn/03d@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 08",
      },
      {
        time: "18:00",
        temp: 19,
        icon: "https://openweathermap.org/img/wn/03n@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 08",
      },
      {
        time: "21:00",
        temp: 17,
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
        main: "Clouds",
        description: "overcast clouds",
        date: "Oct 08",
      },
    ],
  },
  "oct-09": {
    weather: {
      time: "12:00",
      temp: 20,
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      main: "Clouds",
      description: "few clouds",
      date: "Oct 09",
    },
    forecast: [
      {
        time: "00:00",
        temp: 16,
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
        main: "Clouds",
        description: "broken clouds",
        date: "Oct 09",
      },
      {
        time: "03:00",
        temp: 12,
        icon: "https://openweathermap.org/img/wn/02n@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 09",
      },
      {
        time: "06:00",
        temp: 12,
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 09",
      },
      {
        time: "09:00",
        temp: 17,
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 09",
      },
      {
        time: "12:00",
        temp: 20,
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 09",
      },
      {
        time: "15:00",
        temp: 20,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 09",
      },
      {
        time: "18:00",
        temp: 15,
        icon: "https://openweathermap.org/img/wn/02n@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 09",
      },
      {
        time: "21:00",
        temp: 14,
        icon: "https://openweathermap.org/img/wn/02n@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 09",
      },
    ],
  },
  "oct-10": {
    weather: {
      time: "12:00",
      temp: 20,
      icon: "https://openweathermap.org/img/wn/03d@2x.png",
      main: "Clouds",
      description: "scattered clouds",
      date: "Oct 10",
    },
    forecast: [
      {
        time: "00:00",
        temp: 15,
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
        main: "Clouds",
        description: "broken clouds",
        date: "Oct 10",
      },
      {
        time: "03:00",
        temp: 15,
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
        main: "Clouds",
        description: "overcast clouds",
        date: "Oct 10",
      },
      {
        time: "06:00",
        temp: 16,
        icon: "https://openweathermap.org/img/wn/04d@2x.png",
        main: "Clouds",
        description: "overcast clouds",
        date: "Oct 10",
      },
      {
        time: "09:00",
        temp: 19,
        icon: "https://openweathermap.org/img/wn/03d@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 10",
      },
      {
        time: "12:00",
        temp: 20,
        icon: "https://openweathermap.org/img/wn/03d@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 10",
      },
      {
        time: "15:00",
        temp: 18,
        icon: "https://openweathermap.org/img/wn/03d@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 10",
      },
      {
        time: "18:00",
        temp: 14,
        icon: "https://openweathermap.org/img/wn/03n@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 10",
      },
      {
        time: "21:00",
        temp: 12,
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
        main: "Clouds",
        description: "broken clouds",
        date: "Oct 10",
      },
    ],
  },
  "oct-11": {
    weather: {
      time: "12:00",
      temp: 20,
      icon: "https://openweathermap.org/img/wn/02d@2x.png",
      main: "Clouds",
      description: "few clouds",
      date: "Oct 11",
    },
    forecast: [
      {
        time: "00:00",
        temp: 11,
        icon: "https://openweathermap.org/img/wn/03n@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 11",
      },
      {
        time: "03:00",
        temp: 9,
        icon: "https://openweathermap.org/img/wn/03n@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 11",
      },
      {
        time: "06:00",
        temp: 11,
        icon: "https://openweathermap.org/img/wn/04d@2x.png",
        main: "Clouds",
        description: "broken clouds",
        date: "Oct 11",
      },
      {
        time: "09:00",
        temp: 17,
        icon: "https://openweathermap.org/img/wn/03d@2x.png",
        main: "Clouds",
        description: "scattered clouds",
        date: "Oct 11",
      },
      {
        time: "12:00",
        temp: 20,
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
        main: "Clouds",
        description: "few clouds",
        date: "Oct 11",
      },
      {
        time: "15:00",
        temp: 19,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 11",
      },
      {
        time: "18:00",
        temp: 14,
        icon: "https://openweathermap.org/img/wn/01n@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 11",
      },
      {
        time: "21:00",
        temp: 12,
        icon: "https://openweathermap.org/img/wn/01n@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 11",
      },
    ],
  },
  "oct-12": {
    weather: {
      time: "12:00",
      temp: 24,
      icon: "https://openweathermap.org/img/wn/01d@2x.png",
      main: "Clear",
      description: "clear sky",
      date: "Oct 12",
    },
    forecast: [
      {
        time: "00:00",
        temp: 11,
        icon: "https://openweathermap.org/img/wn/01n@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "03:00",
        temp: 10,
        icon: "https://openweathermap.org/img/wn/01n@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "06:00",
        temp: 12,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "09:00",
        temp: 19,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "12:00",
        temp: 24,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "15:00",
        temp: 22,
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "18:00",
        temp: 17,
        icon: "https://openweathermap.org/img/wn/01n@2x.png",
        main: "Clear",
        description: "clear sky",
        date: "Oct 12",
      },
      {
        time: "21:00",
        temp: 15,
        icon: "https://openweathermap.org/img/wn/04n@2x.png",
        main: "Clouds",
        description: "broken clouds",
        date: "Oct 12",
      },
    ],
  },
};

export const fakeWeatherResponse: WeatherResponse = {
  name: "Sofia",
  main: { temp: 21 },
  weather: [{ description: "mostly clouds", icon: "10n", main: "clouds" }],
};

export const fakeForecastResponse: ForecastResponse = {
  city: { name: "Sofia" },
  list: [
    {
      name: "Sofia",
      dt_txt: "2023-10-09 00:00:00",
      main: { temp: 21 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 00:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 03:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 06:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 09:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 12:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2024-10-10 15:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 18:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
    {
      name: "Sofia",
      dt_txt: "2023-10-10 21:00:00",
      main: { temp: 24 },
      weather: [
        {
          main: "clouds",
          description: "heavy clouds",
          icon: "10d",
        },
      ],
    },
  ],
};

export const fakeWeatherData: WeatherData = {
  [convertMonthDayToId(convertToMonthDay())]: {
    weather: {
      time: convertToHoursMinutes(),
      temp: 21,
      description: "Mostly clouds",
      icon: `${process.env.REACT_APP_WEATHER_ICONS_URL}/10n@2x.png`,
      main: "clouds",
      date: convertToMonthDay(),
    },
    forecast: [
      {
        date: "Oct 09",
        main: "clouds",
        time: "00:00",
        description: "Heavy clouds",
        icon: `${process.env.REACT_APP_WEATHER_ICONS_URL}/10d@2x.png`,
        temp: 21,
      },
    ],
  },
  "oct-10": {
    weather: refactoredData["oct-10"].forecast[Math.floor(moment().hour() / 3)],
    forecast: refactoredData["oct-10"].forecast,
  },
};
