import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from ".";

describe("Header", () => {
  test("should render header with content and regular gap", () => {
    render(
      <Header>
        <p>Content</p>
      </Header>,
    );

    const headerWrapper = screen.getByTestId("header-wrapper");
    const headerContent = screen.getByText(/Content/i);

    expect(headerContent).toBeInTheDocument();
    expect(headerWrapper.nodeName.toLowerCase()).toEqual("header");
    expect(headerWrapper.className).toEqual("header gap__regular");
  });

  test("should render header with large gap", () => {
    render(
      <Header gap="large">
        <p>Content</p>
      </Header>,
    );

    const headerWrapper = screen.getByTestId("header-wrapper");

    expect(headerWrapper.nodeName.toLowerCase()).toEqual("header");
    expect(headerWrapper.className).toEqual("header gap__large");
  });

  test("should render header with extralarge gap", () => {
    render(
      <Header gap="extralarge">
        <p>Content</p>
      </Header>,
    );

    const headerWrapper = screen.getByTestId("header-wrapper");

    expect(headerWrapper.nodeName.toLowerCase()).toEqual("header");
    expect(headerWrapper.className).toEqual("header gap__extralarge");
  });
});
