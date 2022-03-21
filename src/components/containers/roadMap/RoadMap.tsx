import React, { ReactElement } from "react";
import { alpha } from "@mui/system";
import { roadMapList, RoadMapListType } from "costants/staticContent";
import { Parallax } from "react-parallax";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const RoadMap = (): ReactElement => {
  return (
    <Stack my={6}>
      <Parallax
        blur={5}
        bgImage="/images/ninja.png"
        bgImageAlt="ninja dev"
        bgImageStyle={{ opacity: 0.1, maxHeight: "1400px" }}
        strength={200}>
        {roadMapList.map((roadMap: RoadMapListType, idx: number) => (
          <Paper
            key={`roadmap-${idx}`}
            sx={{
              p: 4,
              mb: 6,
              backgroundColor: (theme) =>
                alpha(theme.palette.text.disabled, 0.1)
            }}>
            <Typography variant="h6">{roadMap.title}</Typography>
            <List>
              {roadMap.steps.map((step: string, index: number) => (
                <ListItem key={`roadmap-step-${index}`}>
                  <FiberManualRecordIcon sx={{ height: 10 }} />
                  <ListItemText primary={step} />
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Parallax>
    </Stack>
  );
};

export default RoadMap;
