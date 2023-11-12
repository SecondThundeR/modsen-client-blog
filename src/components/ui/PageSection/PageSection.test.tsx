import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import PageSection from "./PageSection";

describe("PageSection", () => {
  test("should render page section with content", () => {
    render(
      <PageSection>
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");
    const sectionContent = screen.getByText(/Content/i);

    expect(sectionContent).toBeInTheDocument();
    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual("wrapper");
  });

  test("should render page section with full width", () => {
    render(
      <PageSection fullWidth>
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");

    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual("wrapper fullWidth");
  });
});
