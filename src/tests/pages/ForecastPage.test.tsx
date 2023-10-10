import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { ForecastPage } from "../../pages";
import { refactoredData } from "../data/weather.data";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "oct-10",
  }),
  useRouteMatch: () => ({ url: "/weather-forecast/oct-10" }),
}));

test("should render one loading card", () => {
  renderWithProviders(<ForecastPage />, {
    preloadedState: {
      weather: {
        locationName: "Sofia",
        weather: refactoredData,
        units: "metric",
        isLoading: true,
      },
    },
  });

  expect(screen.getAllByTestId("forecast-loading-card").length).toBe(1);
});

test("should render all the data", () => {
  renderWithProviders(<ForecastPage />, {
    preloadedState: {
      weather: {
        locationName: "Sofia",
        weather: refactoredData,
        units: "metric",
        isLoading: false,
      },
    },
  });

  expect(screen.getAllByTestId("weather-card").length).toBe(1);
  expect(screen.getAllByTestId("mini-weather-card").length).toBe(8);
});
