import React, { useCallback, useContext } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import { TOKEN } from "../api";
import { AuthContext } from "../App";
import { DeveloperIcon } from "../common/DeveloperIcon";
import { Pages } from "../Router";

export const Header = () => {
  const navigate = useNavigate();
  const { setTokenContext, token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const onLogout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    setTokenContext("");
    navigate(Pages.MainPage);
    queryClient.invalidateQueries({ queryKey: ["servers"] });
  }, [navigate, queryClient, setTokenContext]);

  const onLogin = useCallback(() => {
    navigate(Pages.Login);
  }, [navigate]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 py-5 shadow-md lg:px-24 px-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight h-10" to={Pages.Servers}>
          <DeveloperIcon />
        </Link>
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
