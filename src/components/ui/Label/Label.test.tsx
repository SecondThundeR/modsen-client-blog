import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Label from "./Label";

describe("Label", () => {
  test("should render label", () => {
    render(<Label>Label</Label>);

    const label = screen.getByText(/Label/i);

    expect(label).toBeInTheDocument();
    expect(label.nodeName.toLowerCase()).toEqual("p");
    expect(label.className).toEqual("label");
  });
});
