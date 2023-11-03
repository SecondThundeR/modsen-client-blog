import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Title from "./Title";

describe("Title", () => {
  test("should render title with heading level 1", () => {
    render(<Title headingLevel={1}>Heading H1</Title>);

    const title = screen.getByRole("heading", { name: /Heading H1/i });

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h1");
    expect(title.className).toEqual("title title__1");
  });

  test("should render title with heading level 2", () => {
    render(<Title headingLevel={2}>Heading H2</Title>);

    const title = screen.getByRole("heading", { name: /Heading H2/i });

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h2");
    expect(title.className).toEqual("title title__2");
  });

  test("should render title with heading level 3", () => {
    render(<Title headingLevel={3}>Heading H3</Title>);

    const title = screen.getByRole("heading", { name: /Heading H3/i });

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h3");
    expect(title.className).toEqual("title title__3");
  });

  test("should render title with heading level 4", () => {
    render(<Title headingLevel={4}>Heading H4</Title>);

    const title = screen.getByRole("heading", { name: /Heading H4/i });

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h4");
    expect(title.className).toEqual("title title__4");
  });

  test("should render title with heading level 5", () => {
    render(<Title headingLevel={5}>Heading H5</Title>);

    const title = screen.getByRole("heading", { name: /Heading H5/i });

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h5");
    expect(title.className).toEqual("title title__5");
  });

  test("should render title with heading level 6", () => {
    render(<Title headingLevel={6}>Heading H6</Title>);

    const title = screen.getByRole("heading", { name: /Heading H6/i });

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h6");
    expect(title.className).toEqual("title title__6");
  });
});
