import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Login } from "../autorization/Login";
import { Servers } from "../components/servers";

import { ErrorPage } from "./ErrorPage";

const queryClient = new QueryClient();

export enum Pages {
  mainPage = "/",
  login = "login",
  servers = "servers",
}

export const router = createBrowserRouter(
  [
    {
      path: Pages.mainPage,
      element: (
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      ),
      children: [
        {
          path: Pages.login,
          element: <Login />,
        },
        {
          path: Pages.servers,
          element: <Servers />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: Pages.mainPage },
);
