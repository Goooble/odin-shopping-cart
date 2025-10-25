import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Layout from "./Layout.jsx";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Error404 from "./Error404.jsx";
import Store from "./Store.jsx"
import Cart from "./Cart.jsx"

import "./index.css";

import { createBrowserRouter, Route, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home },
      {path: "store", Component: Store},
      {path: "cart", Component: Cart}
    ],
    errorElement: <Error404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
