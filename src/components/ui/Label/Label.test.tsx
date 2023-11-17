import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Label from ".";

describe("Label", () => {
  test("should render label with inter font by default", () => {
    render(<Label>Label</Label>);

    const label = screen.getByText(/Label/i);

    expect(label).toBeInTheDocument();
    expect(label.nodeName.toLowerCase()).toEqual("p");
    expect(label.className).toEqual("label label__inter");
  });

  test("should render label with sen font", () => {
    render(<Label font="sen">Label</Label>);

    const label = screen.getByText(/Label/i);

    expect(label).toBeInTheDocument();
    expect(label.nodeName.toLowerCase()).toEqual("p");
    expect(label.className).toEqual("label label__sen");
  });
});
