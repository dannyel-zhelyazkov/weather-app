import { Card, CardProps } from "primereact/card";
import React from "react";
import styles from "../styles/components/mini-weather-card.module.scss";
import { WeatherDisplay } from "../store";
import { TempDisplay } from "./TempDisplay";

type MiniWeatherCardsProps = {
  forecast: WeatherDisplay;
} & CardProps;

export const MiniWeatherCard: React.FC<MiniWeatherCardsProps> = ({
  forecast,
}) => {
  return (
    <Card className={styles.miniWeatherCard} data-testid="mini-weather-card">
      <span className={styles.weatherTime}>{forecast.time}</span>
      <img
        className={styles.weatherIcon}
        src={forecast.icon}
        alt={`${forecast.description} icon`}
      />
      <TempDisplay className={styles.weatherTemp} temp={forecast.temp} />
    </Card>
  );
};
