import React, { HTMLAttributes } from "react";
import styles from "../styles/components/weather-card.module.scss";
import { useNavigate } from "react-router-dom";
import { WeatherDisplay } from "../store";
import { Card } from "primereact/card";
import { TempDisplay } from "./TempDisplay";
import { Skeleton } from "primereact/skeleton";

type WeatherCardType = {
  id?: string;
  weather: WeatherDisplay;
  isLoading?: boolean;
} & Omit<HTMLAttributes<Card>, "">;

export const WeatherCard: React.FC<WeatherCardType> = ({
  weather,
  id,
  isLoading,
  className,
}) => {
  const navigate = useNavigate();
  const redirectToForecast = () => (id ? navigate(`/forecast/${id}`) : null);

  return (
    <Card
      className={`${styles.weatherCard} ${className}`}
      data-testid="weather-card"
      onClick={redirectToForecast}
    >
      {isLoading ? (
        <Skeleton width="250px" height="250px" />
      ) : (
        <>
          <span className={styles.weatherDate} data-testid="weather-card-date">
            {weather.date}
          </span>
          <TempDisplay className={styles.weatherTemp} temp={weather.temp} />
          <img
            data-testid="weather-card-icon"
            className={styles.weatherIcon}
            src={weather.icon}
            alt={`${weather.description} icon`}
          />
          <span
            className={styles.weatherDescription}
            data-testid="weather-card-description"
          >
            {weather.description}
          </span>
        </>
      )}
    </Card>
  );
};
