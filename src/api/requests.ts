import { Server, UserData } from "../common/Types";

import { http } from "./";

export const signIn = (userData: UserData) => {
  return http.post<{ token: string }>("tokens", userData).then(data => data.data);
};

export const getServers = () => {
  return http.get<Server[]>("servers").then(data => data.data);
};
