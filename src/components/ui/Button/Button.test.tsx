import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Button from "./Button";

describe("Button", () => {
  test("should render button with regular size and primary variant", () => {
    render(<Button>Button</Button>);

    const button = screen.getByRole("button", { name: /Button/i });

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("button variant__primary size__regular");
  });

  test("should render button with regular variant and large size", () => {
    render(
      <Button variant="regular" size="large">
        Button
      </Button>,
    );

    const button = screen.getByRole("button", { name: /Button/i });

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("button variant__regular size__large");
  });

  test("should render button with unstyled prop", () => {
    render(<Button unstyled>Button</Button>);

    const button = screen.getByRole("button", { name: /Button/i });

    expect(button).toBeInTheDocument();
    expect(button.className).toEqual("unstyled");
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
