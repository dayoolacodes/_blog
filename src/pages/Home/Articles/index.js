import React from "react";
import { Container } from "./styles";
import Article from "../Article";
import { useGetAllPost } from "lib/queries/getPosts";
import SkeletonLoader from "components/Loader/SkeletonLoader";

function Index() {
  const { data: posts, status } = useGetAllPost();

  return status!=="loading" ? (
    <Container>
      <div className="header">
        <span className="title">Our Articles</span>
        <div className="bar" />
      </div>
      {posts?.slice(0, 5)?.map((post, index) => {
        return <Article status={status} key={post.id + index} imgLeft={index % 2 !== 0} post={post} />;
      })}
    </Container>
  ) : (
    <SkeletonLoader />
  );
}

export default Index;
