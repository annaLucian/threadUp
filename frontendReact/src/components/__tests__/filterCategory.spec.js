import { render, screen } from "@testing-library/react";
import FilterCategory from "../FilterCategory.jsx";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const renderWithRouter = () => (
  <BrowserRouter>
    <FilterCategory />
  </BrowserRouter>
);

describe("FilterCategory", () => {
  it("should contain a title", () => {
    render(renderWithRouter());
    expect(screen.getByText("¿Qué estás buscando?")).toBeInTheDocument();
  });

  it("should contains links hombre and mujer", () => {
    render(renderWithRouter());
    expect(screen.getByText("Hombres")).toBeInTheDocument();
    expect(screen.getByText("Mujeres")).toBeInTheDocument();
  });

  it("should go to list product with search param mujer ", async () => {
    const user = userEvent.setup();
    render(renderWithRouter());

    await user.click(screen.getByTestId("btnMujer"));

    expect(window.location.href).toBe(
      "http://localhost/list-products?search=mujer"
    );
  });
});
