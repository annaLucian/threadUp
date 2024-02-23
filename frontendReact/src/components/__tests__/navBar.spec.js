import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar/NavBar.jsx";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Header", () => {
  it("should contain a logo", () => {
    render(<NavBar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("there should be a search engine", () => {
    render(<NavBar />);
    const searchComponent = screen.getByTestId("searchForm");
    expect(searchComponent).toBeInTheDocument();
  });

  it("should render a button to create new product  ", () => {
    render(<NavBar />);
    const cartButton = screen.getByText(/Nuevo Producto/i);
    expect(cartButton).toBeInTheDocument();
  });
});
