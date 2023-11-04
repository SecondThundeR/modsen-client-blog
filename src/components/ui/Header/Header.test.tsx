import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from "./Header";

describe("Header", () => {
  test("should render header with all slots", () => {
    render(
      <Header
        titleSlot={<h1>Title slot</h1>}
        linksSlot={<a>Links slot</a>}
        controlsSlot={<button>Controls slot</button>}
      />,
    );

    const headerWrapper = screen.getByTestId("header-wrapper");
    const headerControls = screen.getByTestId("header-controls");
    const headerLinks = screen.getByTestId("header-links");
    const title = screen.getByText(/Title slot/i);
    const link = screen.getByText(/Links slot/i);
    const control = screen.getByText(/Controls slot/i);

    expect(headerWrapper).toBeInTheDocument();
    expect(headerWrapper.nodeName.toLowerCase()).toEqual("header");
    expect(headerWrapper.className).toEqual("header");

    expect(headerControls).toBeInTheDocument();
    expect(headerControls.nodeName.toLowerCase()).toEqual("div");
    expect(headerControls.className).toEqual("header__controls");

    expect(headerLinks).toBeInTheDocument();
    expect(headerLinks.nodeName.toLowerCase()).toEqual("div");
    expect(headerLinks.className).toEqual("header__links");

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h1");

    expect(link).toBeInTheDocument();
    expect(link.nodeName.toLowerCase()).toEqual("a");

    expect(control).toBeInTheDocument();
    expect(control.nodeName.toLowerCase()).toEqual("button");
  });
});
