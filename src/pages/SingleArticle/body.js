import React from "react";
import { createMarkup } from "utils";
import { Container } from "./styles";

function Index({ article, ...props }) {

  return (
    <Container>
      <div className="img-wrapper">
        <img
          className="article-img"
          src={article?.jetpack_featured_media_url}
          alt={article?.title}
        />
      </div>
      <div className="content-wrapper">
        <div
          className="text-content"
          dangerouslySetInnerHTML={createMarkup(article?.content?.rendered)}
        />
      </div>
    </Container>
  );
}

export default Index;
