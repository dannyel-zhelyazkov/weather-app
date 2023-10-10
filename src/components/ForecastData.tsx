import React from "react";
import { WeatherDisplay } from "../store";
import { MiniWeatherCard } from "./MiniWeatherCard";
import styles from "../styles/components/forecast-data.module.scss";

type ForecastTableProps = {
  forecast: WeatherDisplay[];
};

export const ForecastData: React.FC<ForecastTableProps> = ({ forecast }) => (
  <div className={styles.forecastDataContainer}>
    {forecast.map((value) => (
      <MiniWeatherCard key={value.time} forecast={value} />
    ))}
  </div>
);
