import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/login.jsx";
import SingUp from "./components/singUp.jsx";
import BMI from "./components/bmi.jsx";
import BMR from "./components/bmr.jsx";
import BMR_TDEE_Calculator from "./components/bmrMoc.jsx";
import ProtineCalculate from "./components/protine.jsx";

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
    path: "/bmrMoc",
    element: <BMR_TDEE_Calculator />,
  },
  {
    path: "/ProtineCalculate",
    element: <ProtineCalculate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
