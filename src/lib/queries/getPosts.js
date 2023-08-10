import { useInfiniteQuery } from "react-query";
import * as blogClient from "lib/api/getPosts";

export function useGetAllPost() {
  return useInfiniteQuery(
    "getAllPost",
    async ({ pageParam = 1 }) => blogClient.getAllPost({ page: pageParam }),
    {
      getNextPageParam: (lastPage, posts) => {
        return posts.length + 1 ?? undefined;
      }
    }
  );
}
