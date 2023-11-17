import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Select from ".";

describe("Select", () => {
  const defaultOptions = [
    {
      id: "test",
      name: "test",
      value: "test",
    },
  ];

  const disabledOption = [
    {
      id: "test",
      name: "test",
      value: "test",
      isDisabled: true,
    },
  ];

  test("should render select", () => {
    render(<Select options={defaultOptions} />);

    const select = screen.getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select.nodeName.toLowerCase()).toEqual("select");
    expect(select.className).toEqual("select");
  });

  test("should render select with fullPadding property", () => {
    render(<Select fullPadding options={defaultOptions} />);

    const select = screen.getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select.nodeName.toLowerCase()).toEqual("select");
    expect(select.className).toEqual("select full_padding");
  });

  test("should render select with error message", () => {
    render(<Select errorMessage="Hello!" options={defaultOptions} />);

    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage.textContent).toEqual("Hello!");
    expect(errorMessage.nodeName.toLowerCase()).toEqual("span");
    expect(errorMessage.className).toEqual("errorMessage");
  });

  test("should render disabled select with another class", () => {
    const onChangeMock = vi.fn();
    render(
      <Select value="test" options={disabledOption} onChange={onChangeMock} />,
    );

    const select = screen.getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select.nodeName.toLowerCase()).toEqual("select");
    expect(select.className).toEqual("select select__disabled");
  });
});
