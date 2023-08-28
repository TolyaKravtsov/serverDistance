import { useQuery } from "@tanstack/react-query";

import { getServers } from "../../api/requests";

export const useGetServers = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["servers"],
    queryFn: getServers,
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};
