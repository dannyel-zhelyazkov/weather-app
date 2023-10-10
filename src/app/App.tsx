import React, { useEffect, useRef } from "react";
import { AppRoutes } from "./AppRoutes";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchWeather, fetchWeatherAndForecast } from "../store/weather";
import { Toast } from "primereact/toast";

export const App = () => {
  const dispatch = useAppDispatch();
  const units = useAppSelector((state) => state.weather.units);
  const error = useAppSelector((state) => state.weather.error);
  const toastTL = useRef<any>();

  useEffect(() => {
    dispatch(fetchWeatherAndForecast());
  }, [units]);

  useEffect(() => {
    // Call Forecast on 3 hours to refresh the today's forecast
    let timer = setInterval(
      () => {
        dispatch(fetchWeatherAndForecast());
      },
      1000 * 60 * 60 * 3,
    );

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!error) return;

    toastTL.current.show({
      severity: "error",
      summary: "Something went wrong!",
      detail: error,
      life: 3000,
    });
  }, [error]);

  return (
    <>
      <Toast ref={toastTL} position="top-right" />
      <AppRoutes />;
    </>
  );
};
