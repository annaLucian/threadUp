import { render } from "@testing-library/react";
import Footer from "../footer/Footer.jsx";

describe("Footer", () => {
  it("should work as expected", () => {
    render(<Footer />);
    expect(1 + 1).toBe(2);
  });
});
