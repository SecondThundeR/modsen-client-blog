import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Footer from ".";

describe("Footer", () => {
  test("should render footer with all slots", () => {
    render(
      <Footer
        titleSlot={<h1>Title slot</h1>}
        linksSlot={<a>Links slot</a>}
        ctaSlot={<p>CTA slot</p>}
        contactInfoSlot={<p>Contact info slot</p>}
        socialButtonsSlot={<p>Social buttons slot</p>}
      />,
    );

    const footerWrapper = screen.getByTestId("footer-wrapper");
    const footerTopRow = screen.getByTestId("footer-top-row");
    const footerTopRowLinks = screen.getByTestId("footer-top-row-links");
    const footerBottomRow = screen.getByTestId("footer-bottom-row");
    const footerContact = screen.getByTestId("footer-contact");
    const footerSocial = screen.getByTestId("footer-social");
    const title = screen.getByText(/Title slot/i);
    const link = screen.getByText(/Links slot/i);
    const cta = screen.getByText(/CTA slot/i);
    const contact = screen.getByText(/Contact info slot/i);
    const socialButtons = screen.getByText(/Social buttons slot/i);

    expect(footerWrapper).toBeInTheDocument();
    expect(footerWrapper.nodeName.toLowerCase()).toEqual("footer");
    expect(footerWrapper.className).toEqual("footer");

    expect(footerTopRow).toBeInTheDocument();
    expect(footerTopRow.nodeName.toLowerCase()).toEqual("div");
    expect(footerTopRow.className).toEqual("footer__row");

    expect(footerTopRowLinks).toBeInTheDocument();
    expect(footerTopRowLinks.nodeName.toLowerCase()).toEqual("div");
    expect(footerTopRowLinks.className).toEqual("footer__links");

    expect(footerBottomRow).toBeInTheDocument();
    expect(footerBottomRow.nodeName.toLowerCase()).toEqual("div");
    expect(footerBottomRow.className).toEqual("footer__row");

    expect(footerContact).toBeInTheDocument();
    expect(footerContact.nodeName.toLowerCase()).toEqual("div");
    expect(footerContact.className).toEqual("footer__contact");

    expect(footerSocial).toBeInTheDocument();
    expect(footerSocial.nodeName.toLowerCase()).toEqual("div");
    expect(footerSocial.className).toEqual("footer__social");

    expect(title).toBeInTheDocument();
    expect(title.nodeName.toLowerCase()).toEqual("h1");

    expect(link).toBeInTheDocument();
    expect(link.nodeName.toLowerCase()).toEqual("a");

    expect(cta).toBeInTheDocument();
    expect(cta.nodeName.toLowerCase()).toEqual("p");

    expect(contact).toBeInTheDocument();
    expect(contact.nodeName.toLowerCase()).toEqual("p");

    expect(socialButtons).toBeInTheDocument();
    expect(socialButtons.nodeName.toLowerCase()).toEqual("p");
  });
});
