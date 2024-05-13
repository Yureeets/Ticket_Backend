import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLocations } from "../../services/api";

const Data = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
  });

  return (
     <div> {data} </div>
  );
};

export default Data;
