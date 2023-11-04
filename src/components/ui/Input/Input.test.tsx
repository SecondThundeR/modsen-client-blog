import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Input from "./Input";

describe("Input", () => {
  test("should render input", () => {
    render(<Input />);

    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(input.nodeName.toLowerCase()).toEqual("input");
    expect(input.className).toEqual("input");
  });
});
