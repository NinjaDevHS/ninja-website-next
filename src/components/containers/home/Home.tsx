import React, { ReactElement } from "react";
import { Parallax } from "react-parallax";

import Stack from "@mui/material/Stack";

import KeywordsContent from "components/containers/home/KeywordsContent";
import TokenContent from "components/containers/home/TokenContent";
import TopContent from "components/containers/home/TopContent";
import Questions from "components/containers/questions/Questions";

const Home = (): ReactElement => {
  return (
    <Stack>
      <Parallax
        blur={5}
        bgImage="/images/ninja.png"
        bgImageAlt="ninja dev"
        bgImageStyle={{ opacity: 0.1, maxHeight: "1400px" }}
        strength={200}>
        <Stack my={8}>
          <TopContent />
        </Stack>
        <Stack my={8}>
          <KeywordsContent />
        </Stack>
        <Stack my={8}>
          <TokenContent />
        </Stack>
      </Parallax>
      <Stack my={8}>
        <Questions />
      </Stack>
    </Stack>
  );
};

export default Home;
