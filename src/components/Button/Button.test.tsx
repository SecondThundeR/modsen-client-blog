import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { Button } from "@/components";

describe("Button", () => {
  test("should render button", () => {
    render(<Button text="Button" />);

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });

  test("should call onClick", () => {
    const onClick = vi.fn();

    render(<Button text="Button" onClick={onClick} />);

    const button = screen.getByText(/Button/i);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
