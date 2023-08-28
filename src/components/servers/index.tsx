import React from "react";

import { useNavigate } from "react-router-dom";

import { Pages } from "../../Router";
import { Spinner } from "../common/Spinner";

import { ServerRow } from "./ServerRow";
import { useGetServers } from "./useGetServers";

export const Servers = () => {
  const { data, isError, isLoading } = useGetServers();

  const navigate = useNavigate();

  if (isError)
    return (
      <div className="lg:px-24 md:py-20 md:px-44 px-4 py-24 items-center flex flex-col justify-center flex-d">
        <p className="my-2 text-gray-800">Look's like your not authorized, please Sign in first</p>
        <button
          className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          onClick={() => navigate(Pages.login)}
        >
          Login
        </button>
      </div>
    );

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="inline-block min-w-full mt-6">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-indigo-200 border-b">
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                    #
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                    Server
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                    Distance
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map(server => (
                  <React.Fragment key={server.name}>
                    <ServerRow server={server} />
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
