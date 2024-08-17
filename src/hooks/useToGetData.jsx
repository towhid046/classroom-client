import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useToGetData = ({ queryKeyName, url }) => {
  const axiosInstance = useAxios();
  const { data, refetch, isError, error, isLoading } = useQuery({
    queryKey: [queryKeyName],
    queryFn: async () => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
  });
  return { data, refetch, isError, error, isLoading };
};

export default useToGetData;
