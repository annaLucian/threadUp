import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/error/Error.jsx";
import CreateForm from "./pages/createForm/CreateForm.jsx";
import ListProducts from "./pages/listProducts/ListProducts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/details/Details.jsx";

import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "publish-product",
    element: <CreateForm />,
  },
  {
    path: "list-products",
    element: <ListProducts />,
  },
  {
    path: "details-product",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
