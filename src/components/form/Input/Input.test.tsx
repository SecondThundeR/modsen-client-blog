import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Input from ".";

describe("Input", () => {
  test("should render input", () => {
    render(<Input />);

    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(input.nodeName.toLowerCase()).toEqual("input");
    expect(input.className).toEqual("input");
  });

  test("should render input with fullPadding property", () => {
    render(<Input fullPadding />);

    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(input.nodeName.toLowerCase()).toEqual("input");
    expect(input.className).toEqual("input full_padding");
  });

  test("should render input with error message", () => {
    render(<Input errorMessage="Hello!" />);

    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage.textContent).toEqual("Hello!");
    expect(errorMessage.nodeName.toLowerCase()).toEqual("span");
    expect(errorMessage.className).toEqual("errorMessage");
  });
});
