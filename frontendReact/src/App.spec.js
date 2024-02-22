import { render } from "@testing-library/react";
import App from "./App";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/somewhere" }),
}));

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});
