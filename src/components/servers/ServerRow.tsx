import React from "react";

import { Server } from "../../common/Types";

import { CountryFlag } from "./CountryFlag";

interface ServerRowProps {
  server: Server;
}

export const ServerRow: React.FC<ServerRowProps> = ({ server }) => {
  const serverName = server.name.split("#");
  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
        <CountryFlag country={serverName[0].trim()} />
        <span className="pl-3">{server.name}</span>
      </td>
      <td className="text-sm text-right text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{server.distance}</td>
    </tr>
  );
};
