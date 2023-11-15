import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import TextArea from "./TextArea";

describe("TextArea", () => {
  test("should render textarea", () => {
    render(<TextArea />);

    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
    expect(textarea.nodeName.toLowerCase()).toEqual("textarea");
    expect(textarea.className).toEqual("textarea");
  });

  test("should render textarea with fullPadding property", () => {
    render(<TextArea fullPadding />);

    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
    expect(textarea.nodeName.toLowerCase()).toEqual("textarea");
    expect(textarea.className).toEqual("textarea full_padding");
  });

  test("should render textarea with error message", () => {
    render(<TextArea errorMessage="Hello!" />);

    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage.textContent).toEqual("Hello!");
    expect(errorMessage.nodeName.toLowerCase()).toEqual("span");
    expect(errorMessage.className).toEqual("errorMessage");
  });
});
