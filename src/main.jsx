import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      { path: "/", element: <Navbar /> }, // Navbar at the root
      { path: "section", element: <Section /> }, // Section route
      { path: "footer", element: <Footer /> }, // Footer route
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MusicPlayerProvider>
      <RouterProvider router={router} />
    </MusicPlayerProvider>
  </StrictMode>
);

