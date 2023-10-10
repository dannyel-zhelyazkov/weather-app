import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { ForecastData } from "../../components";
import { refactoredData } from "../data/weather.data";

afterEach(cleanup);

test("should render forecast data correctly", () => {
  const id = "oct-10";
  const forecast = refactoredData[id].forecast;
  renderWithProviders(<ForecastData forecast={forecast} />);

  expect(screen.getAllByTestId("mini-weather-card").length).toBe(8);
  expect(screen.getAllByTestId("temp-display")[0].textContent).toEqual(
    `${forecast[0].temp}°`,
  );
  expect(screen.getAllByTestId("temp-display")[2].textContent).toEqual(
    `${forecast[2].temp}°`,
  );
});
