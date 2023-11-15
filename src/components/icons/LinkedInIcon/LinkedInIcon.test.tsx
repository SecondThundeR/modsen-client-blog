import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import LinkedInIcon from "./LinkedInIcon";

describe("LinkedInIcon", () => {
  test("should render linkedin icon", () => {
    render(<LinkedInIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
