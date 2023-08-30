import React, { useCallback, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { TOKEN } from "../api";
import { AuthContext } from "../App";
import { Pages } from "../Router";

export const Header = () => {
  const navigate = useNavigate();
  const { setTokenContext, token } = useContext(AuthContext);

  const onLogout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    setTokenContext("");
    navigate(Pages.mainPage);
  }, [navigate, setTokenContext]);

  const onLogin = useCallback(() => {
    navigate(Pages.login);
  }, [navigate]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight" to={Pages.mainPage}>
          Server Distance
        </Link>
        {!!token && (
          <div className="ml-4">
            <Link className="block lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4" to={Pages.servers}>
              Servers
            </Link>
          </div>
        )}
      </div>
      <button
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white lg:mt-0"
        onClick={token ? onLogout : onLogin}
      >
        {token ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};
