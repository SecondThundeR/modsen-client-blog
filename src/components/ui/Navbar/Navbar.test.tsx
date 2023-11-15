import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render navbar with all slots", () => {
    render(
      <Navbar
        titleSlot={<h1>Title slot</h1>}
        linksSlot={<a>Links slot</a>}
        controlsSlot={<button>Controls slot</button>}
      />,
    );

    const navbarWrapper = screen.getByTestId("navbar-wrapper");
    const navbarControls = screen.getByTestId("navbar-controls");
    const navbarLinks = screen.getByTestId("navbar-links");
    const title = screen.getByText(/Title slot/i);
    const link = screen.getByText(/Links slot/i);
    const control = screen.getByText(/Controls slot/i);

    expect(navbarWrapper).toBeInTheDocument();
    expect(navbarWrapper.nodeName.toLowerCase()).toEqual("nav");
    expect(navbarWrapper.className).toEqual("navbar");

    expect(navbarControls).toBeInTheDocument();
    expect(navbarControls.nodeName.toLowerCase()).toEqual("div");
    expect(navbarControls.className).toEqual("navbar__controls");

    expect(navbarLinks).toBeInTheDocument();
    expect(navbarLinks.nodeName.toLowerCase()).toEqual("div");
    expect(navbarLinks.className).toEqual("navbar__links");

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h1");

    expect(link).toBeInTheDocument();
    expect(link.nodeName.toLowerCase()).toEqual("a");

    expect(control).toBeInTheDocument();
    expect(control.nodeName.toLowerCase()).toEqual("button");
  });
});
