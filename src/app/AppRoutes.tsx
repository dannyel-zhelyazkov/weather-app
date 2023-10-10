import React from "react";
import { Route, Routes } from "react-router-dom";
import { DaysWeatherPage, ForecastPage, NotFoundPage } from "../pages";
import { MainLayout } from "../layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<DaysWeatherPage />} />
        <Route path="/forecast/:id" element={<ForecastPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
