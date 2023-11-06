import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ModalWrapper from "./ModalWrapper";

describe("ModalWrapper", () => {
  test("should render modal wrapper with content", () => {
    render(
      <ModalWrapper>
        <p>Content</p>
      </ModalWrapper>,
    );

    const outerWrapper = screen.getByTestId("outer-wrapper");
    const contentWrapper = screen.getByTestId("content-wrapper");
    const modalContent = screen.getByText(/Content/i);

    expect(modalContent).toBeInTheDocument();
    expect(outerWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(outerWrapper.className).toEqual("outer");
    expect(contentWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(contentWrapper.className).toEqual("content");
  });
});
