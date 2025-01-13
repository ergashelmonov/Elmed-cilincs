import { useQuery } from "react-query";
import { apiClient } from "../api";

export const useApi = (url, options) => {
  return useQuery({
    queryKey: [url, options?.params],
    queryFn: async () => {
      const res = await apiClient.get(url, {
        params: options?.params,
        headers: options?.headers,
      });
      return res.data;
    },
  });
};
