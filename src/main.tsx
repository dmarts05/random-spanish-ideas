import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/home-page";
import { GenerateIdeaPage } from "./pages/generate-idea-page";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { NotFoundPage } from "./pages/not-found-page";

// Enable dark mode
window.document.documentElement.classList.add("dark");

// Create the router
const router = createHashRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/generate-idea",
    element: <GenerateIdeaPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
