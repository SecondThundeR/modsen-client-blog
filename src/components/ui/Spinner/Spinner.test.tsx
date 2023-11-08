import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Spinner from "./Spinner";

describe("Spinner", () => {
  test("should render spinner with white color by default", () => {
    render(<Spinner />);

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
    expect(spinner.nodeName.toLowerCase()).toEqual("span");
    expect(spinner.className).toEqual("spinner spinner__white");
  });

  test("should render spinner with black color", () => {
    render(<Spinner color="black" />);

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
    expect(spinner.nodeName.toLowerCase()).toEqual("span");
    expect(spinner.className).toEqual("spinner spinner__black");
  });
});
