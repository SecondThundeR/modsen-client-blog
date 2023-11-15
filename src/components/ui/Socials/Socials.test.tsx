import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Socials from "./Socials";

describe("Socials", () => {
  test("should render socials container", () => {
    render(<Socials />);

    const cardWrapper = screen.getByTestId("socials-wrapper");

    expect(screen.getByTestId("facebook")).toBeInTheDocument();
    expect(screen.getByTestId("twitter")).toBeInTheDocument();
    expect(screen.getByTestId("instagram")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin")).toBeInTheDocument();
    expect(cardWrapper.nodeName.toLowerCase()).toEqual("div");
    expect(cardWrapper.className).toEqual("wrapper");
  });

  test("should render socials container with custom data", () => {
    render(
      <Socials
        customLinks={{
          facebook: "https://google.com",
        }}
      />,
    );

    const customFacebook = screen.getByTestId("facebook");

    expect(customFacebook).toBeInTheDocument();
    expect(customFacebook).toHaveAttribute("href", "https://google.com");
  });
});
