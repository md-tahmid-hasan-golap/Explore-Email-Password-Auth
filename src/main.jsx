import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: <Roots></Roots>,
//   },
// ]);

createRoot(document.getElementById("root")).render(<StrictMode></StrictMode>);
