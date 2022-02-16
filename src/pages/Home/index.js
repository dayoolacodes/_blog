import React from "react";
import TopSection from "components/TopSection";
import Articles from "./Articles";

function Index() {
  return (
    <>
      <TopSection
        header="OUR STORY"
        title="Share ideas that drive success"
        subtitle="JARA is more than a technology. We share ideas that drive success in your institution"
      />
      <Articles />
    </>
  );
}

export default Index;
