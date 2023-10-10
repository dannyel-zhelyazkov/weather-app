import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils";
import { TempDisplay } from "../../components";

afterEach(cleanup);

test("should display the temp", () => {
  renderWithProviders(<TempDisplay isLoading={false} temp={22} />);

  expect(screen.getByText("22°")).toBeInTheDocument();
});
