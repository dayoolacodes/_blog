import styled from "styled-components";
import { colors } from "styles/theme";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 120px;
  flex-wrap: wrap-reverse;
  flex-direction: ${({ imgLeft }) => imgLeft && "row-reverse"};
  justify-content: space-between;
  .text {
    width: 40%;
    @media all and (max-width: 630px) {
      width: 100%;
    }
    .title {
      max-width: 250px;
      font-size: 1.8rem;
    }
    .subtitle {
      max-width: 300px;
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 500;
      margin-top: 25px;
      color: #a4abb6;
    }

    .see-more-btn {
      background: #1f72f0;
      outline: none;
      border: none;
      padding: 10px 25px;
      border-radius: 2px;
      color: ${colors.white};
      font-weight: 900;
      font-size: 1.2rem;
      margin: 20px 0;
      cursor: pointer;
      :hover {
        filter: brightness(1.2);
      }
    }
  }
  .spacer {
    /* width: 2%; */
    display: none;
  }
  .img-wrapper {
    width: 45%;

    img {
      width: 90%;
      max-height: 250px;
      border-radius: 4px;
      margin: 0 auto;
    }
    @media all and (max-width: 630px) {
      width: 100%;
    }
  }
`;
