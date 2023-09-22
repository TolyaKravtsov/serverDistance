import React, { useCallback } from "react";

import { DeveloperIcon } from "../../common/DeveloperIcon";
import { Spinner } from "../../common/Spinner";

import { useSignIn } from "./useSignIn";

export const Login = () => {
  const { authorization, isError, isLoading } = useSignIn();

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const username = data.get("username") as string;
      const password = data.get("password") as string;

      authorization({ username, password });
    },
    [authorization],
  );

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full h-full p-6 m-auto bg-white rounded-md shadow-2xl lg:max-w-md">
        <div className="flex justify-center mb-6">
          <DeveloperIcon />
        </div>
        {isLoading ? (
          <div className="h-80 flex justify-center items-center flex-col">
            <Spinner />
            <label className="text-2xl text-gray-500 mt-6">Logging in</label>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold text-center">Welcome back!</h1>
            <h1 className="text-1xl font-medium text-center leading-10 text-gray-500 pt-4 text-base">
              Enter details below to log in to your account.
            </h1>
            <form className="mt-6" onSubmit={onSubmit}>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-500" htmlFor="username">
                  Username
                </label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-500" htmlFor="password">
                  Password
                </label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                />
              </div>
              <div className="mt-6">
                <button
                  className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-3xl hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  type="submit"
                >
                  Login
                </button>
                {isError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Something went wrong</strong>
                  </div>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
