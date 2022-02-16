import React from "react";
import { useGetSinglePost } from "lib/queries/getSinglePost";
import { useLocation } from "react-router-dom";
import TopSection from "components/TopSection";
import dayjs from "dayjs";
import { FullPageSpinner } from "components/Loader";
import Body from "./body";

function Index() {
  const location = useLocation();
  const id = location.pathname.split("/")[1].replace("id=", "");
  const { data: article, status } = useGetSinglePost(id);

  return status !== "loading" ? (
    <>
      <TopSection
        singlePage
        header={dayjs(article?.date).format("MMMM DD, YYYY")}
        title={article?.title?.rendered}
      />
      <Body article={article} />
    </>
  ) : (
    <FullPageSpinner />
  );
}

export default Index;
