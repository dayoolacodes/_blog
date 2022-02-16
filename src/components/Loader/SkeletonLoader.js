import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {Box, SkelentonContainer} from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <SkeletonTheme color="rgba(10,46,101,0.04)" highlightColor="rgba(186, 198, 216, 0.4)">
      <SkelentonContainer>
        <ListItems />
        <ListItems />
      </SkelentonContainer>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;

const ListItems = () => (
  <Box>
    <Skeleton duration={2} height="100%" width="100%" />
  </Box>
);
