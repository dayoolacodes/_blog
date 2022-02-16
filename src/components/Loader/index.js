import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Container, ContainerInline } from "./styles";

export function FullPageSpinner() {
  return (
    <Container>
      <AiOutlineLoading3Quarters fontSize={35} aria-label="loading" />
    </Container>
  );
}

export function Spinner() {
  return (
    <ContainerInline>
      <AiOutlineLoading3Quarters aria-label="loading" />
    </ContainerInline>
  );
}
