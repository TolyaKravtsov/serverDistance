import React, { useCallback, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { TOKEN } from "../api";
import { AuthContext } from "../App";
import { DeveloperIcon } from "../common/DeveloperIcon";
import { Pages } from "../Router";

export const Header = () => {
  const navigate = useNavigate();
  const { setTokenContext, token } = useContext(AuthContext);

  const onLogout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    setTokenContext("");
    navigate(Pages.MainPage);
  }, [navigate, setTokenContext]);

  const onLogin = useCallback(() => {
    navigate(Pages.Login);
  }, [navigate]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 py-5 shadow-md px-24">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight h-10" to={Pages.MainPage}>
          <DeveloperIcon />
        </Link>
        {!!token && (
          <div className="ml-4">
            <Link className="block lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4" to={Pages.Servers}>
              Servers
            </Link>
          </div>
        )}
      </div>
      <button
        className="transition-colors duration-200 transform bg-white inline-block text-xs px-5 py-3 leading-none border-2 border-gray-200 rounded-full hover:bg-gray-200 lg:mt-0"
        onClick={token ? onLogout : onLogin}
      >
        {token ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};
