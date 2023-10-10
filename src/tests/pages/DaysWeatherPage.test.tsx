import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { DaysWeatherPage } from "../../pages";
import { refactoredData } from "../data/weather.data";

afterEach(cleanup);

test("should render 5 loading weather cards", () => {
  renderWithProviders(<DaysWeatherPage />, {
    preloadedState: {
      weather: {
        locationName: "",
        weather: refactoredData,
        units: "metric",
        isLoading: true,
      },
    },
  });

  expect(screen.getAllByTestId("loading-weather-card").length).toBe(5);
  expect(screen.getAllByTestId("weather-title")[0].textContent).toEqual(
    ` 5 Days Weather`,
  );
});

test("should render all data", () => {
  const location = "Sofia";
  renderWithProviders(<DaysWeatherPage />, {
    preloadedState: {
      weather: {
        locationName: location,
        weather: refactoredData,
        units: "metric",
        isLoading: false,
      },
    },
  });

  expect(screen.getAllByTestId("weather-card").length).toBe(5);
  expect(screen.getAllByTestId("weather-title")[0].textContent).toEqual(
    `${location} 5 Days Weather`,
  );
});
