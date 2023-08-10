import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow-y: hidden; */
  .img-wrapper {
    max-width: 800px;
    margin: 100px 50px;
    .article-img {
      width: 100%;
      height: auto;
    }
  }
  .content-wrapper {
    margin: 50px;
    max-width: 820px;
box-sizing: border-box;

a{
    opacity: .5;
}
    .text-content {
      text-align: justify;
      color: #a4abb6;

      div{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
      }
    }
  } 
`;
