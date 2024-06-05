import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/login.jsx";
import SingUp from "./components/singUp.jsx";
import BMI from "./components/bmi.jsx";
import BMR from "./components/bmr.jsx";
import ComingSoon from "./components/comingSoon.jsx";
import ProtineCalculate from "./components/protine.jsx";
import WaterCalculate from "./components/water.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singUp",
    element: <SingUp />,
  },
  {
    path: "/bmi",
    element: <BMI />,
  },
  {
    path: "/bmr",
    element: <BMR />,
  },
  {
    path: "/ProtineCalculate",
    element: <ProtineCalculate />,
  },
  {
    path: "/WaterCalculate",
    element: <WaterCalculate />,
  },
  {
    path: "/comingSoon",
    element: <ComingSoon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
