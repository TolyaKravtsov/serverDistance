import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./input.css";

import { router } from "./Router";

const container = document.getElementById("root") as HTMLHtmlElement;
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
