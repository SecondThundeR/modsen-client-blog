import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import PageSection from ".";

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
    expect(pageSection.className).toEqual(
      "wrapper wrapper__center gap__regular",
    );
  });

  test("should render page section with full width", () => {
    render(
      <PageSection fullWidth>
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");

    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual(
      "wrapper wrapper__center gap__regular fullWidth__regular",
    );
  });

  test("should render page section with full width and large side paddings", () => {
    render(
      <PageSection fullWidth sidePaddings="large">
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");

    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual(
      "wrapper wrapper__center gap__regular fullWidth__large",
    );
  });

  test("should render page section with start align", () => {
    render(
      <PageSection align="start">
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");

    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual(
      "wrapper wrapper__start gap__regular",
    );
  });

  test("should render page section with end align", () => {
    render(
      <PageSection align="end">
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");

    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual("wrapper wrapper__end gap__regular");
  });

  test("should render page section with small gap", () => {
    render(
      <PageSection gap="small">
        <p>Content</p>
      </PageSection>,
    );

    const pageSection = screen.getByTestId("page-section");

    expect(pageSection.nodeName.toLowerCase()).toEqual("section");
    expect(pageSection.className).toEqual("wrapper wrapper__center gap__small");
  });
});
