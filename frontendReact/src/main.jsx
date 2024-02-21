import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/error/Error.jsx";
import CreateForm from "./pages/createForm/CreateForm.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
