import React from "react";

import { useNavigate } from "react-router-dom";

import { IconArrowDown, IconArrowUp } from "../../common/icons";
import { Spinner } from "../../common/Spinner";
import { Pages } from "../../Router";

import { ServerRow } from "./ServerRow";
import { useGetServers } from "./useGetServers";
import { useTableSort } from "./useTableSort";

export const Servers = () => {
  const { data, isError, isLoading } = useGetServers();
  const navigate = useNavigate();

  const { fieldName, onSort, serverInfo, sortDirection } = useTableSort(data);

  if (isError)
    return (
      <div className="lg:px-24 md:py-20 md:px-44 px-4 py-24 items-center flex flex-col justify-center flex-d">
        <p className="my-2 text-gray-800">Look's like your not authorized, please Sign in first</p>
        <button
          className="sm:w-full lg:w-auto my-2 border rounded-full py-2 px-10 text-center bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          onClick={() => navigate(Pages.Login)}
        >
          Login
        </button>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-w-screen min-h-[calc(100vh-80px)]">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 min-h-[calc(100vh-80px)] lg:p-10 p-3">
      <div className="flex justify-center flex-col items-center text-center">
        <label className="text-5xl pb-6 font-semibold">Server list</label>
        <label className="text-base pb-6">The distance between you and the server</label>
      </div>
      <div className="relative flex flex-col justify-center lg:w-1/2 h-[500px] w-full">
        <div className="w-full p-6 m-auto bg-white rounded-3xl shadow-xl h-full overflow-auto">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                        <button onClick={() => onSort("name")}>
                          <div className="flex items-end">
                            Country Name
                            {fieldName === "name" && (
                              <>{sortDirection === "asc" ? <IconArrowDown /> : <IconArrowUp />}</>
                            )}
                          </div>
                        </button>
                      </th>
                      <th className="text-sm text-right font-medium text-gray-900 px-6 py-4" scope="col">
                        <button onClick={() => onSort("distance")}>
                          <div className="flex">
                            Distance
                            {fieldName === "distance" && (
                              <>{sortDirection === "asc" ? <IconArrowDown /> : <IconArrowUp />}</>
                            )}
                          </div>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serverInfo?.map(server => (
                      <React.Fragment key={server.name + server.distance}>
                        <ServerRow server={server} />
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
