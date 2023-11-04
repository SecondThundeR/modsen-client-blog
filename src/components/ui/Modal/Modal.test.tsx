import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Modal from "./Modal";

describe("Modal", () => {
  test("should render modal", () => {
    render(
      <Modal>
        <h1>Content</h1>
      </Modal>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
