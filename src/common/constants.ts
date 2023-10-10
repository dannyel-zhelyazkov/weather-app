export const WEATHER_METRIC_KEY = "weather-metric";
export const STANDARD_UNIT = "standard";
export const METRIC_UNIT = "metric";
export const IMPERIAL_UNIT = "imperial";
export const CELSIUS_SYMBOL = "C";
export const KELVIN_SYMBOL = "K";
export const FAHRENHEIT_SYMBOL = "F";

export const CELSIUS = "Celsius";
export const KELVIN = "Kelvin";
export const FAHRENHEIT = "Fahrenheit";

export const unitToSymbol: { [key: string]: string } = {
  [STANDARD_UNIT]: KELVIN_SYMBOL,
  [METRIC_UNIT]: CELSIUS_SYMBOL,
  [IMPERIAL_UNIT]: FAHRENHEIT_SYMBOL,
};

export const unitToName: { [key: string]: string } = {
  [STANDARD_UNIT]: KELVIN,
  [METRIC_UNIT]: CELSIUS,
  [IMPERIAL_UNIT]: FAHRENHEIT,
};
