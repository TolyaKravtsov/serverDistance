import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { TOKEN, UserData } from "../common/Types";

const signIn = async (userData: UserData) => {
  return axios.post("https://playground.tesonet.lt/v1/tokens", userData).then(data => data.data);
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const { isError, mutate } = useMutation(signIn, {
    onSuccess: data => {
      localStorage.setItem(TOKEN, data.token);
      navigate("/");
    },
  });

  return { autorize: mutate, isError };
};
