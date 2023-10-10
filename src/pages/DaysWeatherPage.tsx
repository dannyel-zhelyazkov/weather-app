import React from "react";
import { useAppSelector } from "../hooks";
import { WeatherCard } from "../components";
import styles from "../styles/pages/days-weather-page.module.scss";
import { Skeleton } from "primereact/skeleton";

export const DaysWeatherPage = () => {
  const isLoading = useAppSelector((state) => state.weather.isLoading);
  const daysWeather = useAppSelector((state) => state.weather.weather);
  const locationName = useAppSelector((state) => state.weather.locationName);
  const weatherTemplate = () =>
    Object.entries(daysWeather).map(([id, { weather }]) => (
      <WeatherCard isLoading={isLoading} key={id} id={id} weather={weather} />
    ));

  const loadingTemplate = () =>
    Array(5)
      .fill("data")
      .map((_, index) => (
        <div
          data-testid="loading-weather-card"
          key={index}
          style={{ width: "250px", height: "250px" }}
        >
          <Skeleton height="250px" width="250px" />
        </div>
      ));

  return (
    <div className={styles.pageContainer}>
      <h1 data-testid="weather-title" className={styles.header}>
        {locationName} 5 Days Weather
      </h1>
      <div className={styles.weathersContainer}>
        {isLoading ? loadingTemplate() : weatherTemplate()}
      </div>
    </div>
  );
};
