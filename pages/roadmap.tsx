import React, { ReactElement } from "react";
import { NextPage } from "next";

import NinjaLayout from "components/commons/layout/NinjaLayout";
import RoadMap from "components/containers/roadMap/RoadMap";

const RoadMapPage: NextPage = (): ReactElement => {
  return (
    <NinjaLayout>
      <RoadMap />
    </NinjaLayout>
  );
};

export default RoadMapPage;
