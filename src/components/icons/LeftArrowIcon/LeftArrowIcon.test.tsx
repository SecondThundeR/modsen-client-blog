import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import LeftArrowIcon from ".";

describe("LeftArrowIcon", () => {
  test("should render left arrow icon", () => {
    render(<LeftArrowIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
