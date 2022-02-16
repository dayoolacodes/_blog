import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  svg {
    animation: rotate 0.6s linear infinite;
    /* color: $pink; */
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerInline = styled.div`
  display: inline-block;

  svg {
    animation: rotate 0.9s linear infinite;
    color: $secondary;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SkelentonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 3rem;
`;

export const Box = styled.div`
  width: 50%;
  height: 80vh;
  padding: 1.5rem 0.5rem;
  border-radius: 3px;

`;
