import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Card from "./Card";

describe("Card", () => {
  test("should render card with content", () => {
    render(
      <Card>
        <p>Content</p>
      </Card>,
    );

    const cardWrapper = screen.getByTestId("card-wrapper");
    const cardContent = screen.getByText(/Content/i);

    expect(cardContent).toBeInTheDocument();
    expect(cardWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(cardWrapper.className).toEqual("wrapper");
  });
});
