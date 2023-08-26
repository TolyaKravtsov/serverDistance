import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
      <button className="rounded-xl p-8" onClick={() => navigate("/login")}></button>
    </div>
  );
};
