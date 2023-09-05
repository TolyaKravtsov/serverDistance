import { useContext } from "react";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { TOKEN } from "../api";
import { signIn } from "../api/requests";
import { AuthContext } from "../App";
import { Pages } from "../Router";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setTokenContext } = useContext(AuthContext);

  const { isError, mutate } = useMutation(signIn, {
    onSuccess: data => {
      localStorage.setItem(TOKEN, data.token);
      navigate(Pages.Servers);
      setTokenContext(data.token);
    },
  });

  return { authorization: mutate, isError };
};
