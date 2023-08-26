import React from "react";

import { useSignIn } from "./autorization/useSignIn";

export const Login = () => {
  const { autorize, isError } = useSignIn();

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">Sign in</h1>
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">Email</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">Password</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                type="button"
                onClick={() => autorize({ username: "tesoasdasdnet", password: "partyanasdimal" })}
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
      </div>
      );
    </div>
  );
};
