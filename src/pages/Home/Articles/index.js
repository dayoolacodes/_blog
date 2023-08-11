/* eslint-disable indent */
import React from "react";
import { Container } from "./styles";
import Article from "../Article";
import SkeletonLoader from "components/Loader/SkeletonLoader";
import { useAppContext } from "App";

function Index() {
  const { posts, status, fetchNextPage, isFetchingNextPage, hasNextPage } = useAppContext();

  return status !== "loading" ? (
    <Container>
      <div className="header">
        <span className="title">Our Articles</span>
        <div className="bar" />
      </div>
      {posts.pages?.map((posts) => {
        return posts.map((post, index) => {
          return (
            <Article status={status} key={post.id + index} imgLeft={index % 2 !== 0} post={post} />
          );
        });
      })}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </div>
    </Container>
  ) : (
    <SkeletonLoader />
  );
}

export default Index;
