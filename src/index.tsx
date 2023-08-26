import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./input.css";

import { App } from "./App";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      ),
    },
  ],
  { basename: "/" },
);

const container = document.getElementById("root") as HTMLHtmlElement;
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
