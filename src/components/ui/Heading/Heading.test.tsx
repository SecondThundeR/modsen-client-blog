import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Heading from "./Heading";

describe("Heading", () => {
  test("should render heading with level 1", () => {
    render(<Heading level={1}>Heading H1</Heading>);

    const heading = screen.getByRole("heading", { name: /Heading H1/i });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h1");
    expect(heading.className).toEqual("heading heading__1");
  });

  test("should render heading with level 2", () => {
    render(<Heading level={2}>Heading H2</Heading>);

    const heading = screen.getByRole("heading", { name: /Heading H2/i });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h2");
    expect(heading.className).toEqual("heading heading__2");
  });

  test("should render heading with level 3", () => {
    render(<Heading level={3}>Heading H3</Heading>);

    const heading = screen.getByRole("heading", { name: /Heading H3/i });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h3");
    expect(heading.className).toEqual("heading heading__3");
  });

  test("should render heading with level 4", () => {
    render(<Heading level={4}>Heading H4</Heading>);

    const heading = screen.getByRole("heading", { name: /Heading H4/i });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h4");
    expect(heading.className).toEqual("heading heading__4");
  });

  test("should render heading with level 5", () => {
    render(<Heading level={5}>Heading H5</Heading>);

    const heading = screen.getByRole("heading", { name: /Heading H5/i });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h5");
    expect(heading.className).toEqual("heading heading__5");
  });

  test("should render heading with level 6", () => {
    render(<Heading level={6}>Heading H6</Heading>);

    const heading = screen.getByRole("heading", { name: /Heading H6/i });

    expect(heading).toBeInTheDocument();
    expect(heading.nodeName.toLowerCase()).toEqual("h6");
    expect(heading.className).toEqual("heading heading__6");
  });
});
