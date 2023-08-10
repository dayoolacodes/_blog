import React, { useEffect, useRef } from "react";
import TopSection from "components/TopSection";
import Articles from "./Articles";
import { useGetAllPost } from "lib/queries/getPosts";

function Index() {
  const divRef = useRef(null);
  const { hasNextPage, fetchNextPage } = useGetAllPost();

  useEffect(() => {
    let fetching = false;
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      divRef.current.scrollTo({
        top: scrollPosition
      });
    }

    const handleScroll = (e) => {
      sessionStorage.setItem("scrollPosition", e.target.scrollTop);

      const { scrollHeight, scrollTop, clientHeight } = e.target;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) fetchNextPage();
        fetching = false;
      }
    };

    const element = divRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <div ref={divRef} style={{ overflow: "auto", height: "100vh" }}>
      <TopSection
        header="OUR STORY"
        title="Share ideas that drive success"
        subtitle="JARA is more than a technology. We share ideas that drive success in your institution"
      />
      <Articles />
    </div>
  );
}

export default Index;
