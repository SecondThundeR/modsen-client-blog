import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Article from ".";

describe("Article", () => {
  test("should render article with content and gap variant regular by default", () => {
    render(
      <Article>
        <p>Content</p>
      </Article>,
    );

    const article = screen.getByTestId("article");
    const articleContent = screen.getByText(/Content/i);

    expect(articleContent).toBeInTheDocument();
    expect(article.nodeName.toLowerCase()).toEqual("article");
    expect(article.className).toEqual("wrapper gap__regular");
  });

  test("should render article with gap variant regular small", () => {
    render(
      <Article gapVariant="small">
        <p>Content</p>
      </Article>,
    );

    const article = screen.getByTestId("article");

    expect(article.nodeName.toLowerCase()).toEqual("article");
    expect(article.className).toEqual("wrapper gap__small");
  });

  test("should render article with gap variant regular large", () => {
    render(
      <Article gapVariant="large">
        <p>Content</p>
      </Article>,
    );

    const article = screen.getByTestId("article");

    expect(article.nodeName.toLowerCase()).toEqual("article");
    expect(article.className).toEqual("wrapper gap__large");
  });
});
