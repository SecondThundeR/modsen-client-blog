import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Alert from ".";

describe("Alert", () => {
  test("should render alert with content and success variant", () => {
    render(
      <Alert variant="success">
        <p>Content</p>
      </Alert>,
    );

    const alertWrapper = screen.getByTestId("alert-wrapper");
    const headerContent = screen.getByText(/Content/i);

    expect(headerContent).toBeInTheDocument();
    expect(alertWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(alertWrapper.className).toEqual("wrapper wrapper__success");
  });

  test("should render alert with content and error variant", () => {
    render(
      <Alert variant="error">
        <p>Content</p>
      </Alert>,
    );

    const alertWrapper = screen.getByTestId("alert-wrapper");
    const headerContent = screen.getByText(/Content/i);

    expect(headerContent).toBeInTheDocument();
    expect(alertWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(alertWrapper.className).toEqual("wrapper wrapper__error");
  });

  test("should not render alert with no content", () => {
    render(<Alert variant="success"></Alert>);

    const alertWrapper = screen.queryByTestId("alert-wrapper");

    expect(alertWrapper).not.toBeInTheDocument();
  });
});
