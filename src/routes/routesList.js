import React from "react";
import { Navigate } from "react-router-dom";
import Home from "pages/Home";
import SingleArticle from "pages/SingleArticle";


const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />
  },
  {
    path: "/id=:id",
    exact: true,
    element: <SingleArticle  />
  },
  {
    path: "*",
    exact: true,
    element: <Navigate to="/" />
  }
];

export default routes;
