import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function Index({header, title, subtitle, ...props}) {
  return (
    <Container {...props}>
      <span className="header">{header}</span>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      {props?.singlePage && <Link to="/"> <AiOutlineArrowLeft /> Back</Link>}
    </Container>
  );
}

export default Index;
