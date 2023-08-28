import axios from "axios";

export const TOKEN = "token";

export const http = axios.create({
  baseURL: "https://playground.tesonet.lt/v1/",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

http.interceptors.request.use(config => {
  const token = localStorage.getItem(TOKEN);
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
