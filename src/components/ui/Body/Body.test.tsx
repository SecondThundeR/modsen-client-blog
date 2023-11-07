import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Body from "./Body";

describe("Body", () => {
  test("should render body with level 1 by default", () => {
    render(<Body>Body 01</Body>);

    const body = screen.getByText(/Body 01/i);

    expect(body).toBeInTheDocument();
    expect(body.nodeName.toLowerCase()).toEqual("p");
    expect(body.className).toEqual("body body__inter body__1");
  });

  test("should render body with level 2", () => {
    render(<Body level={2}>Body 02</Body>);

    const body = screen.getByText(/Body 02/i);

    expect(body).toBeInTheDocument();
    expect(body.nodeName.toLowerCase()).toEqual("p");
    expect(body.className).toEqual("body body__inter body__2");
  });

  test("should render body with sen font", () => {
    render(<Body font="sen">Sen body</Body>);

    const body = screen.getByText(/Sen body/i);

    expect(body).toBeInTheDocument();
    expect(body.nodeName.toLowerCase()).toEqual("p");
    expect(body.className).toEqual("body body__sen body__1");
  });

  test("should render body with isSecondary property", () => {
    render(<Body isSecondary>Secondary body</Body>);

    const body = screen.getByText(/Secondary body/i);

    expect(body).toBeInTheDocument();
    expect(body.nodeName.toLowerCase()).toEqual("p");
    expect(body.className).toEqual("body body__inter body__1 body__secondary");
  });
});
