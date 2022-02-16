import config from "config";
import axiosClient from "lib/utils/axiosClient";

export async function getSinglePost({queryKey}) {
  const id = queryKey[1];
  return await axiosClient(`${config.BASE_URL}/wp-json/wp/v2/posts/${id}`);
}
