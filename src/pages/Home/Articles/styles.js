import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 255px;
  overflow: auto;
  @media all and (max-width: 1024px) {
    margin: 50px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    .title {
      font-weight: 700;
      font-size: 1.8rem;
    }
    .bar {
      height: 1.5px;
      background: #ddd;
      width: 85%;
    }
  }
`;
