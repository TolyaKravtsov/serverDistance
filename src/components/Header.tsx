import React, { useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";

import { TOKEN } from "../api";
import { Pages } from "../Router";

export const Header = () => {
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    navigate(Pages.login);
  }, [navigate]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Server Distance</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4" to={Pages.servers}>
            Servers
          </Link>
        </div>
        <div>
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0"
            onClick={onLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};
