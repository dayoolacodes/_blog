import styled from "styled-components";
import { colors } from "styles/theme";

export const Container = styled.div`
  min-height: 100px;
  background: rgba(184, 205, 236, 0.1);
  padding: ${({ singlePage }) => (singlePage ? "100px 225px" : "50px 255px")};
  text-align: ${({ singlePage }) => singlePage && "center"};

  @media all and (max-width: 1024px) {
    padding: 50px;
  }

  .header {
    font-size: 1rem;
    color: #6e8cb6;
    font-weight: 900;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 800;
    margin: 10px auto;
    max-width: ${({ singlePage }) => singlePage && "500px"};
  }
a{
    color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    svg{
        margin: 0 10px;
    }
}
  .subtitle {
    max-width: 300px;
    color: #a4abb6;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 8px;
    line-height: 2;
  }
`;
