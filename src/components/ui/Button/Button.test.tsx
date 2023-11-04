import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Button from "./Button";

describe("Button", () => {
  test("should render button", () => {
    render(<Button>Button</Button>);

    const button = screen.getByRole("button", { name: /Button/i });

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("button button__primary");
    expect(button.className).not.toEqual("button button__regular");
  });

  test("should render button with regular variant", () => {
    render(<Button variant="regular">Button</Button>);

    const button = screen.getByRole("button", { name: /Button/i });

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("button button__regular");
    expect(button.className).not.toEqual("button button__primary");
  });

  test("should call onClick", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Button</Button>);

    const button = screen.getByRole("button", { name: /Button/i });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("should not call onClick when disabled", () => {
    const onClick = vi.fn();

    render(
      <Button onClick={onClick} disabled>
        Button
      </Button>,
    );

    const button = screen.getByRole("button", { name: /Button/i });
    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});
