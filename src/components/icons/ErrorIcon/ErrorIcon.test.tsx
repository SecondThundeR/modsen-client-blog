import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ErrorIcon from "./ErrorIcon";

describe("ErrorIcon", () => {
  test("should render error icon", () => {
    render(<ErrorIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
