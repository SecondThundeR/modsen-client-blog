import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import List from ".";

describe("List", () => {
  test("should render avatar with content", () => {
    render(<List elements={["test-element"]} />);

    const list = screen.getByTestId("list");
    const element = screen.getByText("test-element");
    const listElement = screen.getByTestId("list-element-0");

    expect(list).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();

    expect(list.nodeName.toLowerCase()).toEqual("ul");
    expect(list.className).toEqual("list");
    expect(element.nodeName.toLowerCase()).toEqual("h4");
    expect(listElement.nodeName.toLowerCase()).toEqual("li");
  });
});
