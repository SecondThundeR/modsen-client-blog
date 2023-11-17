import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import AuthorLink from ".";

describe("AuthorLink", () => {
  const props = {
    id: "author-id",
    name: "Author",
    locale: "ru",
    bodyString: "Автор:",
  } as const;

  test("should render author link", () => {
    render(<AuthorLink {...props} />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link.nodeName.toLowerCase()).toEqual("a");
  });

  test("should render author link with purple color", () => {
    render(<AuthorLink {...props} color="purple" />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link.nodeName.toLowerCase()).toEqual("a");
    expect(link.className).toEqual("link__purple");
  });
});
