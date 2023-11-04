import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Body from "./Body";

describe("Body", () => {
  test("should render body with level 1", () => {
    render(<Body level={1}>Body 01</Body>);

    const body = screen.getByText(/Body 01/i);

    expect(body).toBeInTheDocument();
    expect(body.nodeName.toLowerCase()).toEqual("p");
    expect(body.className).toEqual("body body__1");
  });

  test("should render body with level 2", () => {
    render(<Body level={2}>Body 02</Body>);

    const body = screen.getByText(/Body 02/i);

    expect(body).toBeInTheDocument();
    expect(body.nodeName.toLowerCase()).toEqual("p");
    expect(body.className).toEqual("body body__2");
  });
});
