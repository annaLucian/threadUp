import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer.jsx";

describe("Footer", () => {
  it("should the link to the email have the attribute target", () => {
    render(<Footer />);
    const emailLink = screen.getByTestId("email-link");
    expect(emailLink).toHaveAttribute("target", "_blank");
  });

  it("should have the footer have the correct number of links", () => {
    render(<Footer />);
    const links = screen.getAllByTestId(/link/i);
    expect(links).toHaveLength(5);
  });

  it("the footer component should have the following icons", () => {
    render(<Footer />);
    const homeIcon = screen.getByTestId("home-link");
    const heartIcon = screen.getByTestId("heart-link");
    const emailIcon = screen.getByTestId("mail-link");
    const userIcon = screen.getByTestId("user-link");

    expect(homeIcon).toBeInTheDocument();
    expect(heartIcon).toBeInTheDocument();
    expect(emailIcon).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
  });
});
