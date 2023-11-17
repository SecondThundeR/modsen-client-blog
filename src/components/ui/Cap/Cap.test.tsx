import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Cap from ".";

describe("Cap", () => {
  test("should render cap with regular weight by default", () => {
    render(<Cap>Cap Regular</Cap>);

    const cap = screen.getByText(/Cap Regular/i);

    expect(cap).toBeInTheDocument();
    expect(cap.nodeName.toLowerCase()).toEqual("p");
    expect(cap.className).toEqual("cap cap__regular");
  });

  test("should render cap with semibold weight", () => {
    render(<Cap weight="semibold">Cap Semibold</Cap>);

    const cap = screen.getByText(/Cap Semibold/i);

    expect(cap).toBeInTheDocument();
    expect(cap.nodeName.toLowerCase()).toEqual("p");
    expect(cap.className).toEqual("cap cap__semibold");
  });

  test("should render cap with bold weight", () => {
    render(<Cap weight="bold">Cap Bold</Cap>);

    const cap = screen.getByText(/Cap Bold/i);

    expect(cap).toBeInTheDocument();
    expect(cap.nodeName.toLowerCase()).toEqual("p");
    expect(cap.className).toEqual("cap cap__bold");
  });

  test("should render cap with black weight", () => {
    render(<Cap weight="black">Cap Black</Cap>);

    const cap = screen.getByText(/Cap Black/i);

    expect(cap).toBeInTheDocument();
    expect(cap.nodeName.toLowerCase()).toEqual("p");
    expect(cap.className).toEqual("cap cap__black");
  });
});
