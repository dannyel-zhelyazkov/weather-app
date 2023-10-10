export type WeatherDisplay = {
  date: string;
  time: string;
  temp: number;
  icon: string;
  description: string;
  main: string;
  alerts?: any;
};

export type WeatherData = {
  [key: string]: {
    weather: WeatherDisplay;
    forecast: WeatherDisplay[];
  };
};
