import axiosClient from "lib/utils/axiosClient";

export async function getAllPost({ page }) {
  return await axiosClient(`/wp-json/wp/v2/posts/?page=${page}`);
}
