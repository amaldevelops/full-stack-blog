import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "../routes/Routes.jsx";
import "../assets/index.css";
import App from "../components/App.jsx";
import NavigationBar from "./NavigationBar.jsx";
import Footer from "./Footer.jsx";

import ErrorBoundary from "./ErrorBoundary";

const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />

      <Footer />
    </ErrorBoundary>
  </StrictMode>
);
