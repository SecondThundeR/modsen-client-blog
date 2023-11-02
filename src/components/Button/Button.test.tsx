import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { Button } from "@/components";

describe("Button", () => {
  test("should render button", () => {
    render(<Button text="Button" />);

    const button = screen.getByText(/Button/i);

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("button button__primary");
    expect(button.className).not.toEqual("button button__regular");
  });

  test("should render button with regular variant", () => {
    render(<Button text="Button" variant="regular" />);

    const button = screen.getByText(/Button/i);

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("button button__regular");
    expect(button.className).not.toEqual("button button__primary");
  });

  test("should call onClick", () => {
    const onClick = vi.fn();

    render(<Button text="Button" onClick={onClick} />);

    const button = screen.getByText(/Button/i);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("should call onClick", () => {
    const onClick = vi.fn();

    render(<Button text="Button" onClick={onClick} />);

    const button = screen.getByText(/Button/i);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
