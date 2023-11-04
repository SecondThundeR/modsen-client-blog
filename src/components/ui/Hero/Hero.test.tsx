import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Hero from "./Hero";

describe("Hero", () => {
  test("should render hero wrapper with content", () => {
    render(
      <Hero>
        <p>Content</p>
      </Hero>,
    );

    const heroWrapper = screen.getByTestId("hero-wrapper");
    const heroContent = screen.getByText(/Content/i);

    expect(heroContent).toBeInTheDocument();
    expect(heroWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(heroWrapper.className).toEqual("hero");
  });
});
