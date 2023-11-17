import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import ArticleWrapper from ".";

describe("ArticleWrapper", () => {
  test("should render article wrapper with content", () => {
    render(
      <ArticleWrapper>
        <p>Content</p>
      </ArticleWrapper>,
    );

    const articleWrapper = screen.getByTestId("article-wrapper");
    const wrapperContent = screen.getByText(/Content/i);

    expect(wrapperContent).toBeInTheDocument();
    expect(articleWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(articleWrapper.className).toEqual("wrapper");
  });

  test("should render article wrapper with isNarrow property", () => {
    render(
      <ArticleWrapper isNarrow>
        <p>Content</p>
      </ArticleWrapper>,
    );

    const articleWrapper = screen.getByTestId("article-wrapper");

    expect(articleWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(articleWrapper.className).toEqual("wrapper wrapper__narrow");
  });
});
