import React from "react";

import { Server } from "../../common/Types";

interface ServerRowProps {
  server: Server;
}

export const ServerRow: React.FC<ServerRowProps> = ({ server }) => {
  const serverName = server.name.split("#");
  return (
    <tr className="bg-gray-100 border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{serverName[1]}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{serverName[0]}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{server.distance}</td>
    </tr>
  );
};
