import { useQuery } from "react-query";
import * as blogClient from "lib/api/getPosts";

export function useGetAllPost() {
  return useQuery(["getAllPost"], blogClient.getAllPost);
}

