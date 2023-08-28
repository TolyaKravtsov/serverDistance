import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { TOKEN } from "../api";
import { signIn } from "../api/requests";
import { Pages } from "../Router";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { isError, mutate } = useMutation(signIn, {
    onSuccess: data => {
      localStorage.setItem(TOKEN, data.token);
      navigate(Pages.servers);
    },
  });

  return { authorization: mutate, isError };
};
