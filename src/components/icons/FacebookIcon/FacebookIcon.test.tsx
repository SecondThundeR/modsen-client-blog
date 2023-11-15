import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import FacebookIcon from "./FacebookIcon";

describe("FacebookIcon", () => {
  test("should render facebook icon", () => {
    render(<FacebookIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
