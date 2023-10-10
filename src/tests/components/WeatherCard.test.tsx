import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { WeatherCard } from "../../components";
import { renderWithProviders } from "../test-utils";

afterEach(cleanup);

test("renders weather card correctly", () => {
  renderWithProviders(
    <WeatherCard
      weather={{
        temp: 20,
        description: "Mostly clouds",
        icon: "10n",
        date: "Oct 20",
        main: "asd",
        time: "10:12",
      }}
    />,
  );

  expect(screen.getAllByTestId("weather-card-date")[0].textContent).toEqual(
    "Oct 20",
  );
  expect(
    screen.getAllByTestId("weather-card-description")[0].textContent,
  ).toEqual("Mostly clouds");
  expect(screen.getAllByTestId("temp-display")[0].textContent).toEqual("20°");
});
