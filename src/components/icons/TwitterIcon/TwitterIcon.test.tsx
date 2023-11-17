import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import TwitterIcon from ".";

describe("TwitterIcon", () => {
  test("should render twitter icon", () => {
    render(<TwitterIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
