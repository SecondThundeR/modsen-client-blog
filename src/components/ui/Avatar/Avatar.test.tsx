import { render, screen } from "@testing-library/react";
import testImage from "public/assets/authors/dianne-russel.png";
import { describe, expect, test } from "vitest";

import Avatar from ".";

describe("Avatar", () => {
  test("should render avatar with content", () => {
    render(<Avatar src={testImage} width={48} height={48} alt="Test" />);

    const avatar = screen.getByTestId("avatar");

    expect(avatar.nodeName.toLowerCase()).toEqual("img");
    expect(avatar.className).toEqual("avatar");
  });
});
