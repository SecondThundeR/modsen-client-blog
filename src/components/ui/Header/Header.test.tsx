import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from "./Header";

describe("Header", () => {
  test("should render header with content", () => {
    render(
      <Header>
        <p>Content</p>
      </Header>,
    );

    const headerWrapper = screen.getByTestId("header-wrapper");
    const headerContent = screen.getByText(/Content/i);

    expect(headerContent).toBeInTheDocument();
    expect(headerWrapper.nodeName.toLowerCase()).toEqual("header");
    expect(headerWrapper.className).toEqual("header");
  });
});
