import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import InstagramIcon from ".";

describe("InstagramIcon", () => {
  test("should render instagram icon", () => {
    render(<InstagramIcon />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.nodeName.toLowerCase()).toEqual("svg");
  });
});
