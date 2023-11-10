import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import RightArrowIcon from "./RightArrowIcon";

describe("RightArrowIcon", () => {
  test("should render right arrow icon", () => {
    render(<RightArrowIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
