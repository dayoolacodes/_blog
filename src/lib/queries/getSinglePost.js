import { useQuery } from "react-query";
import * as blogClient from "lib/api/getSinglePost";

export function useGetSinglePost(id) {
  return useQuery(["getSinglePost", id], blogClient.getSinglePost);
}
