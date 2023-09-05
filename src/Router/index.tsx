import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Login } from "../autorization/Login";
import { Servers } from "../components/servers";

import { ErrorPage } from "./ErrorPage";

const queryClient = new QueryClient();

export enum Pages {
  MainPage = "/",
  Login = "/login",
  Servers = "/servers",
}

export const router = createBrowserRouter(
  [
    {
      path: Pages.MainPage,
      element: (
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      ),
      children: [
        {
          path: Pages.Login,
          element: <Login />,
        },
        {
          path: Pages.Servers,
          element: <Servers />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: Pages.MainPage },
);
