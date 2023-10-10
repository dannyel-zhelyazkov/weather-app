import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ForecastData, WeatherCard } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Skeleton } from "primereact/skeleton";
import { fetchWeather } from "../store/weather";
import { convertMonthDayToId, convertToMonthDay } from "../utils";
import styles from "../styles/pages/forecast-page.module.scss";
export const ForecastPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isLoading = useAppSelector((state) => state.weather?.isLoading);
  const selectedDayForecast = useAppSelector(
    (state) => state.weather?.weather?.[id as string],
  );

  useEffect(() => {
    if (id === convertMonthDayToId(convertToMonthDay())) {
      dispatch(fetchWeather());
    }
  }, []);

  const loadingWeatherTemplate = () => (
    <>
      <div
        data-testid="forecast-loading-card"
        className={styles.loadingWeatherSkeleton}
      >
        <Skeleton width="250px" height="250px" />
      </div>
      <div className={styles.loadingForecastContainer}>
        {Array(8)
          .fill("data")
          .map((_, index) => (
            <div
              key={index}
              data-testid="forecast-loading-card"
              className={styles.loadingForecastSkeleton}
            >
              <Skeleton width="100px" height="150px" />
            </div>
          ))}
      </div>
    </>
  );

  return (
    <>
      <h1 className={styles.title}>Forecast</h1>
      {isLoading || !selectedDayForecast ? (
        <>{loadingWeatherTemplate()}</>
      ) : (
        <>
          <WeatherCard
            className={styles.weather}
            weather={selectedDayForecast.weather}
          />
          <ForecastData forecast={selectedDayForecast.forecast} />
        </>
      )}
    </>
  );
};
