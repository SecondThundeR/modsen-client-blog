import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import SuccessIcon from ".";

describe("SuccessIcon", () => {
  test("should render success icon", () => {
    render(<SuccessIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
