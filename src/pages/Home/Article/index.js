import React, { useRef } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { createMarkup } from "utils";

function Index({ post, ...props }) {
  const navigate = useNavigate();

  const loadFullPost = () => {
    navigate(`/id=${post?.id}`);
  };

  return (
    <Container className="article" {...props}>
      <div className="text">
        <h4 className="title" dangerouslySetInnerHTML={createMarkup(post?.title?.rendered)} />
        <p className="subtitle" dangerouslySetInnerHTML={createMarkup(post?.excerpt?.rendered)} />
        <button className="see-more-btn" onClick={loadFullPost}>
          See More
        </button>
      </div>
      <div className="spacer"></div>
      <div className="img-wrapper">
        <img src={post?.jetpack_featured_media_url} alt={post?.id} />
      </div>
    </Container>
  );
}

export default Index;
