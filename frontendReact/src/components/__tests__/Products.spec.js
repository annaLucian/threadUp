import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Product from "../Products.jsx";

jest.mock("../services", () => ({
  getProducts: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        productName: "Product 1",
        image: "product1.jpg",
        location: "Location 1",
        size: "Size 1",
        price: 10,
      },
      {
        id: 2,
        productName: "Product 2",
        image: "product2.jpg",
        location: "Location 2",
        size: "Size 2",
        price: 20,
      },
    ])
  ),
}));

const renderWithRouter = () => (
  <BrowserRouter>
    <Product />
  </BrowserRouter>
);

describe("Product Component", () => {
  it("should render all products", async () => {
    render(renderWithRouter());

    await screen.findByText("Nuestros productos estrella");

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("should render a skeleton when the data is fetching", async () => {
    render(renderWithRouter());

    expect(await screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
