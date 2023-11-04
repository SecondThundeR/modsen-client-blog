import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Display from "./Display";

describe("Display", () => {
  test("should render display text with sen font by default", () => {
    render(<Display>Display</Display>);

    const display = screen.getByRole("heading", { name: /Display/i });

    expect(display).toBeInTheDocument();
    expect(display.nodeName.toLowerCase()).toEqual("h1");
    expect(display.className).toEqual("display display__sen");
  });

  test("should render display text with inter font", () => {
    render(<Display font="inter">Display</Display>);

    const display = screen.getByRole("heading", { name: /Display/i });

    expect(display).toBeInTheDocument();
    expect(display.nodeName.toLowerCase()).toEqual("h1");
    expect(display.className).toEqual("display display__inter");
  });
});
