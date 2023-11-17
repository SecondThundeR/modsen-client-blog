import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ErrorWrapper from ".";

describe("ErrorWrapper", () => {
  test("should render error wrapper with content", () => {
    render(
      <ErrorWrapper>
        <p>Content</p>
      </ErrorWrapper>,
    );

    const errorWrapper = screen.getByTestId("error-wrapper");
    const errorContent = screen.getByText(/Content/i);

    expect(errorContent).toBeInTheDocument();
    expect(errorWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(errorWrapper.className).toEqual("error");
  });
});
